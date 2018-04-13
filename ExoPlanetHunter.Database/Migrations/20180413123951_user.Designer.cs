﻿// <auto-generated />
using ExoPlanetHunter.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace ExoPlanetHunter.Database.Migrations
{
    [DbContext(typeof(ExoContext))]
    [Migration("20180413123951_user")]
    partial class user
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125");

            modelBuilder.Entity("ExoPlanetHunter.Database.Entity.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("ExoPlanetHunter.Database.entity.Constellation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Constellations");
                });

            modelBuilder.Entity("ExoPlanetHunter.Database.entity.Planet", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<decimal?>("ApparSize");

                    b.Property<string>("AtmosphereClass");

                    b.Property<string>("CompositionClass");

                    b.Property<bool?>("Confirmed");

                    b.Property<decimal?>("Density");

                    b.Property<string>("Disc_Method");

                    b.Property<int?>("Disc_Year");

                    b.Property<decimal?>("Eccentricity");

                    b.Property<decimal?>("EscVel");

                    b.Property<decimal?>("Esi");

                    b.Property<decimal?>("Gravity");

                    b.Property<bool?>("HabMoon");

                    b.Property<bool?>("Habitable");

                    b.Property<string>("HabitableClass");

                    b.Property<decimal?>("Hza");

                    b.Property<decimal?>("Hzc");

                    b.Property<decimal?>("Hzd");

                    b.Property<decimal?>("Hzi");

                    b.Property<decimal?>("Inclination");

                    b.Property<decimal?>("IntEsi");

                    b.Property<decimal?>("Mag");

                    b.Property<decimal?>("Mass");

                    b.Property<string>("MassClass");

                    b.Property<decimal?>("MaxMass");

                    b.Property<decimal?>("MeanDistance");

                    b.Property<decimal?>("MinMass");

                    b.Property<string>("Name");

                    b.Property<string>("NameKOI");

                    b.Property<string>("NameKepler");

                    b.Property<decimal?>("Omega");

                    b.Property<decimal?>("Period");

                    b.Property<decimal?>("Radius");

                    b.Property<decimal?>("SFluxMax");

                    b.Property<decimal?>("SFluxMean");

                    b.Property<decimal?>("SFluxMin");

                    b.Property<decimal?>("SemMajorAxis");

                    b.Property<decimal?>("Sph");

                    b.Property<int?>("StarId");

                    b.Property<decimal?>("SurfEsi");

                    b.Property<decimal?>("SurfPress");

                    b.Property<decimal?>("TeqMax");

                    b.Property<decimal?>("TeqMean");

                    b.Property<decimal?>("TeqMin");

                    b.Property<decimal?>("TsMax");

                    b.Property<decimal?>("TsMean");

                    b.Property<decimal?>("TsMin");

                    b.Property<string>("ZoneClass");

                    b.HasKey("Id");

                    b.HasIndex("StarId");

                    b.ToTable("Planets");
                });

            modelBuilder.Entity("ExoPlanetHunter.Database.Entity.Post", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Content");

                    b.Property<DateTime>("Created");

                    b.Property<DateTime>("LastModified");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.ToTable("Posts");
                });

            modelBuilder.Entity("ExoPlanetHunter.Database.entity.Star", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<decimal?>("Age");

                    b.Property<decimal?>("ApparMag");

                    b.Property<int?>("ConstellationId");

                    b.Property<decimal?>("Dec");

                    b.Property<decimal?>("Distance");

                    b.Property<decimal?>("FeH");

                    b.Property<bool?>("HabCat");

                    b.Property<decimal?>("HabZoneMax");

                    b.Property<decimal?>("HabZoneMin");

                    b.Property<decimal?>("Luminosity");

                    b.Property<decimal?>("MagfromPlanet");

                    b.Property<decimal?>("Mass");

                    b.Property<string>("Name");

                    b.Property<string>("NameHD");

                    b.Property<string>("NameHIP");

                    b.Property<int?>("NoPlanets");

                    b.Property<int?>("NoPlanetsHZ");

                    b.Property<decimal?>("Ra");

                    b.Property<decimal?>("Radius");

                    b.Property<decimal?>("SizefromPlanet");

                    b.Property<decimal?>("Teff");

                    b.Property<string>("Type");

                    b.HasKey("Id");

                    b.HasIndex("ConstellationId");

                    b.ToTable("Stars");
                });

            modelBuilder.Entity("ExoPlanetHunter.Database.Entity.Tag", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<int?>("PostId");

                    b.HasKey("Id");

                    b.HasIndex("PostId");

                    b.ToTable("Tags");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("RoleId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<string>("UserId")
                        .IsRequired();

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("ExoPlanetHunter.Database.entity.Planet", b =>
                {
                    b.HasOne("ExoPlanetHunter.Database.entity.Star", "Star")
                        .WithMany("Planets")
                        .HasForeignKey("StarId");
                });

            modelBuilder.Entity("ExoPlanetHunter.Database.entity.Star", b =>
                {
                    b.HasOne("ExoPlanetHunter.Database.entity.Constellation", "Constellation")
                        .WithMany("Stars")
                        .HasForeignKey("ConstellationId");
                });

            modelBuilder.Entity("ExoPlanetHunter.Database.Entity.Tag", b =>
                {
                    b.HasOne("ExoPlanetHunter.Database.Entity.Post")
                        .WithMany("Tags")
                        .HasForeignKey("PostId");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("ExoPlanetHunter.Database.Entity.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("ExoPlanetHunter.Database.Entity.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ExoPlanetHunter.Database.Entity.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("ExoPlanetHunter.Database.Entity.ApplicationUser")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}