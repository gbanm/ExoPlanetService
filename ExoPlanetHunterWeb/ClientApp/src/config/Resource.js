



 export let resource = {
    message:"ExoPlanetHunter",
    planetlist:"Planetlist",
    habplanets: "Earth-like planets",
    con: "Constellations",
    starmap: "Starmap",
    from: "lightyears from Earth",
    hotJovian: "Hot jovian",
    superEarth: "Superterran",
    at:"is located at a distance of",
    PlanetInfo:"StarInfo",
    orange:"Orange Dwarf",
    red:"Red Dwarf",
    habmenu: ["Habitable Planets","Cold(–50-0°C)", "Normal Temperature(0–50°C)", "Hot(50–100°C)", "Earth similarity index", "Suitability for vegetation","Candidate for habitable moon"],
    const:["Andromeda","Antlia","Apus","Aquarius" ,"Aquila" ,"Ara","Aries","Auriga" ,"Boötes","Caelum","Camelopardalis","Cancer" ,"Canes Venatici","Canis Major","Canis Minor","Capricornus","Carina" ,"Cassiopeia" ,"Centaurus" ,"Cepheus","Cetus","Chamaeleon" ,"Circinus","Columba","Coma Berenices","Corona Australis","Corona Borealis","Corvus","Crater","Crux","Cygnus","Delphinus","Dorado","Draco","Equuleus","Eridanus","Fornax","Gemini","Grus","Hercules","Horologium","Hydra" ,"Hydrus","Indus","Lacerta","Leo","Leo Minor","Lepus" ,"Libra" ,"Lupus" ,"Lynx" ,"Lyra" ,"Mensa","Microscopium","Monoceros","Musca","Norma" ,"Octans","Ophiuchus" ,"Orion" ,"Pavo" ,"Pegasus","Perseus" ,"Phoenix","Pictor" ,"Pisces","Piscis Austrinus","Puppis","Pyxis" ,"Reticulum" ,"Sagitta","Sagittarius","Scorpius","Sculptor","Scutum","Serpens","Sextans","Taurus","Telescopium","Triangulum","Triangulum Australe","Tucana" ,"Ursa Major" ,"Ursa Minor" ,"Vela" ,"Virgo","Volans","Vulpecula"],
    sensorstart: "Starting Sensor..",
    sensorstop: "Deactivating Sensor",
    search: "Search",
    clear: "Clear",
    dashboard: "Dashboard",
    number:"Confirmed planets",
    sorttordertitle:"Sort",
    sortsearch:["Distance","Habitable","Mass","Discovery year"],
    masssearch:["Jovian","Neptunian","Super-Earth","Earth","Mercurian"],
    masstitle:"Mass class",
 
    comptitle:"Composition",
    compsearch:["Gas","Gas-water","Rocky-water","Rocky-iron","Iron"],
    atmostitle:"Atmosphere",
    atmossearch:["Metal-rich","Hydrogen-rich","None"],
    temptitle:"Temperature zon",
    tempsearch:["Hot","Varm","Cold"],
    disctitle:"Discovery-method",
    discsearch:["Radial velocity","Transiting","Micro lensing","Astrometry","Pulsar timing","Imaging"],
    lightyearsearch:["less than  20 light years","less than  200 light years","less than  2000 light years","less than  20000 light years"],
    lightyeartitle:"Distance",

    planetname:["The planet is called", "and is orbiting the star","that is located in the constellation" ],
    decFormatdist:["at a distance of ", "lightyears from Earth." ],
    massInfo :[
          "The planet is of the type Jovian, which means that the planet is a giant like Jupiter or Saturn. ",
          "The planet is of the type Neptunian, which means that it has a similar mass like our solar systems smaller gas giants Uranus and Neptune.",
          "The planet is of the type Super-terrestrial, which means that its mass is larger than Earth, but is considerably smaller than our solar systems smaller gas giants Uranus and Neptune.",
          "The planet is of the type terrestrial, which means that it has a similar mass like our solar systems inner planets Mars, Venus and Earth.",
          "The planet is of the type terrestrial, which means that it has a similar mass like our solar systems inner planets Mars, Venus and Earth.",
          "The planet is of the type Mercurian, which means that it has a similar mass like our solar systems smallests planets e.g Mercury.",

            ],

    compInfo:["The planet consists of gas.","The planet is composed mostly of gaseous or liquid matter.","The planet has a solid stone surface, where even liquid water may be present.","The planet has a solid stone surface, which is rich in iron.","The planet surface is solid and the core is made of iron."],
    orbit:["It takes", "days for the planet to complete an entire revolution around its star."],
    decMean:["The planet is located at a distance from it star that correspond to ", "times the distance between our Earth and Sun."],
    hzd:["The planet is within the its solar system habitable zone, where alien could exist.","The planet is too close to its sun, no alien could exist here.", "The planet is too far away from its sun, no alien could exist here."],
    hza:["The planet has an atmosphere that could be suitable for life.","The planet has no atmosphere.", "The planet has an atmosphere, but it is not suitable for life."],
    atmosinfo:["","The planet has a metal-rich atmosphere.","The planet has a hydrogen-rich atmosphere.",  ""],
    meantemp:["The mean temperature of the planet is", "A hot day at", "the mean temperature is","C and on a cold day at it is" ],
    moon:"It is possible that the planet can have a habitable moon.",
    disc:"Discovered year ",
    discinfo:["It was first detected by radial velocity, that is done by recording variations in the color of light from the host star.","It was first detected by the transit method, that is based on the observation of a stars small drop in brightness, that occurs when the planet orbit the star","It was first detected by microlensing, that is based on the observation of the bending of light due to the gravitational field.","It was first detected by astrometry, that involves precise measurements of the positions and movements of stars.","The planet is orbiting a neutron star and was detected by pulsar timing.","It was first detected by a telescope.","It was first detected by the transit method, that is based on the observation of a stars small drop in brightness, that occurs when the planet orbit the star"],
    esiratings:"Earth similarity index:",
    sphratings:"Suitability for vegetation",
    planetinfo:["Mass","Radius","Density","Gravity","Surface pressure","Escape velocity"],
    earth:"Earth",
    starname:["The star is called","and is located in the constellation"],
    startype:["The star has exploded and the only thing that remains are small, heavy and very rapidly rotating celestial objects known as pulsars.","The star has","and is of the type"],
    color: ["blue","blue to white","orange to red","red"],
    lum:["very luminous supergiant", "luminous supergiant", "less luminous supergiant","luminous giant","giant","subgiant","dwarf","subdwarf","white dwarf","pulsar"],
    mag:["The star is visible from Earth with the naked eye.","The star can not be seen from Earth without a telescope."],
    sortorder:["Distance","Dicsovery year"],
    habzone:["The stars habitable zone is located at a distance between","and","times the distance between Earth and the Sun"],
    numberplanet:["a known planet that is located in the habitable zone","The star has","known planets and has","planets located in the habitable zone.","known planets, but has no known planets that are located in the habitable zone.","The star has a known planet, but it is not in the habitable zone."],
    starinfo:["Mass","Radius","Age","Temperature"],
  
    order:["Ascending", "Descending"],
    oursun:"Sun",
   typecolor:"color",
    foundplanets:"Found planets: ",
    foundhabitableplanets:"Found habitable planets: ",
  }