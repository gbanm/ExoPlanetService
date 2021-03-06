﻿using ExoPlanetHunter.Database;
using ExoPlanetHunter.Database.entity;
using ExoPlanetHunter.Service;
using ExoPlanetHunter.Web.Config;
using Microsoft.AspNet.OData.Builder;
using Microsoft.AspNet.OData.Extensions;
using Microsoft.AspNet.OData.Formatter;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Net.Http.Headers;
using Microsoft.OData.Edm;
using Microsoft.OData.UriParser;
using Newtonsoft.Json;
using Swashbuckle.AspNetCore.Swagger;
using System;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;

namespace ExoPlanetHunter.Web
{
    public class Startup
    {
        private IHostingEnvironment _env { get; set; }

        public Startup(IHostingEnvironment env)
        {
            _env = env;
        }

        private IHostingEnvironment CurrentEnvironment { get; set; }

        private static IEdmModel GetEdmModel(IServiceProvider serviceProvider)
        {
            var builder = new ODataConventionModelBuilder(serviceProvider);
            builder.EntitySet<Planet>("Planets");
            builder.EntitySet<Star>("Stars");
            return builder.GetEdmModel();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var config = new ConfigurationBuilder();

            services.AddMvc().AddJsonOptions(opt =>
            {
                opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });

            services.Configure<CookiePolicyOptions>(options =>
            {
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = Microsoft.AspNetCore.Http.SameSiteMode.None;
            });
            services.AddOData();
            services.AddMemoryCache();
            services.AddMvcCore(options =>
            {
                foreach (var outputFormatter in options.OutputFormatters.OfType<ODataOutputFormatter>().Where(_ => _.SupportedMediaTypes.Count == 0))
                {
                    outputFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/prs.odatatestxx-odata"));
                }
                foreach (var inputFormatter in options.InputFormatters.OfType<ODataInputFormatter>().Where(_ => _.SupportedMediaTypes.Count == 0))
                {
                    inputFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/prs.odatatestxx-odata"));
                }
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "ExoPlanet API", Version = "v1" });
                c.OperationFilter<AddOdataParameters>();
                var basePath = AppContext.BaseDirectory;
                var xmlPath = Path.Combine(basePath, "ExoPlanetHunter.Web.xml");
                c.IncludeXmlComments(xmlPath);
            });
            Logic.Startup(services, _env);
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });

            services.AddRouting();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseStaticFiles();
            app.UseSwagger();
            app.UseCookiePolicy();
            app.UseHttpsRedirection();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "ExoPlanet API V1");
                c.InjectStylesheet("/swagger-ui/custom.css");
            });

            IEdmModel model = GetEdmModel(app.ApplicationServices);
            app.UseAuthentication();
            app.UseMvc(routeBuilder =>
            {
                routeBuilder.MapODataServiceRoute("odata", "odata", model);


                routeBuilder.MapRoute(
                    "default",
                 "{action}/{id?}/{title?}",
                    new { controller = "Posts", action = "index" }).MapRoute(
                    "Account",
                    "{controller}/{action}/{id?}",
                    new { controller = "Account", action = "login" }).MapRoute(
                    "Tags",
                    "{controller}/{action}/{id?}",
                    new { controller = "Account", action = "login" }).MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "App", action = "Index" });
         
                routeBuilder.EnableDependencyInjection(b =>
                {
                    b.AddService(Microsoft.OData.ServiceLifetime.Singleton, typeof(ODataUriResolver), sp => new StringAsEnumResolver());
                }); ;
            });

            Initialize(app.ApplicationServices);
        }

        private static async void Initialize(IServiceProvider services)
        {
            using (var scope = services.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var manager = scope.ServiceProvider.GetRequiredService<UserManager<IdentityUser>>();
                using (var context = scope.ServiceProvider.GetService<PostContext>())
                {
                    var con = JsonConvert.DeserializeObject<dynamic>(File.ReadAllText("config.json"));
                    var user = new IdentityUser { UserName = con.Name, Email = con.Email.ToString() };
                    await manager.CreateAsync(user, con.PassWord.ToString());
                    context.SaveChanges();
                }
            }
        }
    }
}