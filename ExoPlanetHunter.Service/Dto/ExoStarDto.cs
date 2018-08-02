
namespace ExoPlanetHunter.Service.Dto
{
    public class ExoStarDto
    {
        public ImgDto Img {get; set; }
        public int? NoHabPlanets{ get; set; }
        public int? NoPlanets{ get; set; }
        public decimal? Temp {get; set; }
        public string Name { get; set; }
        public int? Constellation { get; set; }
        public string Type { get; set; }
        public int? Color { get; set; }
        public decimal? Mass { get; set; }

        public decimal? Radius { get; set; }
        
        public decimal? Luminosity { get; set; }
      
        public decimal? Age { get; set; }


        public decimal? HabZoneMin { get; set; }
        public decimal? HabZoneMax { get; set; }

        public string Message { get; set; }
    }
}


   