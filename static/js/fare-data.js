// static/js/fare-data.js
// Komprehensibong ruta ng Laguna (Nakabase sa Sta. Cruz, Laguna)

window.FARE_DATA = {
  routes: [
    // ==========================================
    // 1. MGA PANGUNAHING RUTA (Mula sa Sta. Cruz Terminal)
    // ==========================================
    {
      id: "stacruz-pagsanjan",
      code: "LAG-JEEP-01",
      name: "Sta. Cruz - Pagsanjan",
      type: "JEEPNEY",
      distanceKm: 8.0,
      estimatedMins: 20,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Pagsanjan", lat: 14.2730, lng: 121.4550 }
      ]
    },
    {
      id: "stacruz-lumban",
      code: "LAG-JEEP-02",
      name: "Sta. Cruz - Lumban",
      type: "JEEPNEY",
      distanceKm: 10.0,
      estimatedMins: 25,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Lumban", lat: 14.2980, lng: 121.4600 }
      ]
    },
    {
      id: "stacruz-cavinti",
      code: "LAG-JEEP-03",
      name: "Sta. Cruz - Cavinti",
      type: "JEEPNEY",
      distanceKm: 15.0,
      estimatedMins: 40,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Cavinti", lat: 14.2450, lng: 121.5050 }
      ]
    },
    {
      id: "stacruz-magdalena",
      code: "LAG-JEEP-04",
      name: "Sta. Cruz - Magdalena",
      type: "JEEPNEY",
      distanceKm: 12.0,
      estimatedMins: 30,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Magdalena", lat: 14.2000, lng: 121.4300 }
      ]
    },
    {
      id: "stacruz-liliw",
      code: "LAG-JEEP-05",
      name: "Sta. Cruz - Liliw (via Magdalena)",
      type: "JEEPNEY",
      distanceKm: 16.0,
      estimatedMins: 40,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Magdalena", lat: 14.2000, lng: 121.4300 },
        { name: "Liliw", lat: 14.1300, lng: 121.4350 }
      ]
    },
    {
      id: "stacruz-nagcarlan",
      code: "LAG-JEEP-06",
      name: "Sta. Cruz - Nagcarlan (via Liliw)",
      type: "JEEPNEY",
      distanceKm: 20.0,
      estimatedMins: 50,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Magdalena", lat: 14.2000, lng: 121.4300 },
        { name: "Liliw", lat: 14.1300, lng: 121.4350 },
        { name: "Nagcarlan", lat: 14.1350, lng: 121.4150 }
      ]
    },
    {
      id: "stacruz-majayjay",
      code: "LAG-JEEP-07",
      name: "Sta. Cruz - Majayjay",
      type: "JEEPNEY",
      distanceKm: 26.0,
      estimatedMins: 60,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Magdalena", lat: 14.2000, lng: 121.4300 },
        { name: "Majayjay", lat: 14.1460, lng: 121.4750 }
      ]
    },
    {
      id: "stacruz-luisiana",
      code: "LAG-JEEP-08",
      name: "Sta. Cruz - Luisiana",
      type: "JEEPNEY",
      distanceKm: 30.0,
      estimatedMins: 70,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Cavinti", lat: 14.2450, lng: 121.5050 },
        { name: "Luisiana", lat: 14.1850, lng: 121.5100 }
      ]
    },
    {
      id: "stacruz-paete",
      code: "LAG-JEEP-09",
      name: "Sta. Cruz - Paete (via Lumban)",
      type: "JEEPNEY",
      distanceKm: 18.0,
      estimatedMins: 45,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Lumban", lat: 14.2980, lng: 121.4600 },
        { name: "Paete", lat: 14.3650, lng: 121.4850 }
      ]
    },
    {
      id: "stacruz-pakil",
      code: "LAG-JEEP-10",
      name: "Sta. Cruz - Pakil (via Paete)",
      type: "JEEPNEY",
      distanceKm: 24.0,
      estimatedMins: 55,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Paete", lat: 14.3650, lng: 121.4850 },
        { name: "Pakil", lat: 14.3850, lng: 121.4850 }
      ]
    },
    {
      id: "stacruz-pangil",
      code: "LAG-JEEP-11",
      name: "Sta. Cruz - Pangil (via Pakil)",
      type: "JEEPNEY",
      distanceKm: 28.0,
      estimatedMins: 65,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Pakil", lat: 14.3850, lng: 121.4850 },
        { name: "Pangil", lat: 14.4000, lng: 121.4650 }
      ]
    },
    {
      id: "stacruz-siniloan",
      code: "LAG-JEEP-12",
      name: "Sta. Cruz - Siniloan",
      type: "JEEPNEY",
      distanceKm: 32.0,
      estimatedMins: 70,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Pagsanjan", lat: 14.2730, lng: 121.4550 },
        { name: "Siniloan", lat: 14.4200, lng: 121.4400 }
      ]
    },
    {
      id: "stacruz-famy",
      code: "LAG-JEEP-13",
      name: "Sta. Cruz - Famy (via Siniloan)",
      type: "JEEPNEY",
      distanceKm: 36.0,
      estimatedMins: 80,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Siniloan", lat: 14.4200, lng: 121.4400 },
        { name: "Famy", lat: 14.4450, lng: 121.4350 }
      ]
    },
    {
      id: "stacruz-mabitac",
      code: "LAG-JEEP-14",
      name: "Sta. Cruz - Mabitac",
      type: "JEEPNEY",
      distanceKm: 40.0,
      estimatedMins: 85,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Famy", lat: 14.4450, lng: 121.4350 },
        { name: "Mabitac", lat: 14.4550, lng: 121.4250 }
      ]
    },
    {
      id: "stacruz-sta-maria",
      code: "LAG-JEEP-15",
      name: "Sta. Cruz - Sta. Maria",
      type: "JEEPNEY",
      distanceKm: 35.0,
      estimatedMins: 75,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Siniloan", lat: 14.4200, lng: 121.4400 },
        { name: "Sta. Maria", lat: 14.4700, lng: 121.4000 }
      ]
    },
    {
      id: "stacruz-kalayaan",
      code: "LAG-JEEP-16",
      name: "Sta. Cruz - Kalayaan",
      type: "JEEPNEY",
      distanceKm: 14.0,
      estimatedMins: 35,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Pagsanjan", lat: 14.2730, lng: 121.4550 },
        { name: "Kalayaan", lat: 14.3200, lng: 121.4750 }
      ]
    },
    {
      id: "stacruz-pila",
      code: "LAG-JEEP-17",
      name: "Sta. Cruz - Pila",
      type: "JEEPNEY",
      distanceKm: 10.0,
      estimatedMins: 25,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Pila", lat: 14.2350, lng: 121.3650 }
      ]
    },
    {
      id: "stacruz-victoria",
      code: "LAG-JEEP-18",
      name: "Sta. Cruz - Victoria",
      type: "JEEPNEY",
      distanceKm: 15.0,
      estimatedMins: 35,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Pila", lat: 14.2350, lng: 121.3650 },
        { name: "Victoria", lat: 14.2400, lng: 121.3200 }
      ]
    },
    {
      id: "stacruz-rizal",
      code: "LAG-JEEP-19",
      name: "Sta. Cruz - Rizal",
      type: "JEEPNEY",
      distanceKm: 22.0,
      estimatedMins: 50,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Nagcarlan", lat: 14.1350, lng: 121.4150 },
        { name: "Rizal", lat: 14.1000, lng: 121.3900 }
      ]
    },
    {
      id: "stacruz-calauan",
      code: "LAG-JEEP-20",
      name: "Sta. Cruz - Calauan",
      type: "JEEPNEY",
      distanceKm: 28.0,
      estimatedMins: 65,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Victoria", lat: 14.2400, lng: 121.3200 },
        { name: "Calauan", lat: 14.1450, lng: 121.3100 }
      ]
    },
    {
      id: "stacruz-bay",
      code: "LAG-JEEP-21",
      name: "Sta. Cruz - Bay",
      type: "JEEPNEY",
      distanceKm: 25.0,
      estimatedMins: 60,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Pila", lat: 14.2350, lng: 121.3650 },
        { name: "Bay", lat: 14.1800, lng: 121.2850 }
      ]
    },
    {
      id: "stacruz-losbanos",
      code: "LAG-JEEP-22",
      name: "Sta. Cruz - Los Baños",
      type: "JEEPNEY",
      distanceKm: 35.0,
      estimatedMins: 80,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Calamba Crossing", lat: 14.2100, lng: 121.1650 },
        { name: "Los Baños", lat: 14.1700, lng: 121.2200 }
      ]
    },
    {
      id: "stacruz-alaminos",
      code: "LAG-JEEP-23",
      name: "Sta. Cruz - Alaminos",
      type: "JEEPNEY",
      distanceKm: 42.0,
      estimatedMins: 90,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Calamba Crossing", lat: 14.2100, lng: 121.1650 },
        { name: "Alaminos", lat: 14.0600, lng: 121.2500 }
      ]
    },
    {
      id: "stacruz-calamba-bus",
      code: "LAG-BUS-01",
      name: "Sta. Cruz - Calamba (JAC Liner)",
      type: "BUS",
      distanceKm: 39.0,
      estimatedMins: 80,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Calamba Crossing", lat: 14.2100, lng: 121.1650 }
      ]
    },
    {
      id: "calamba-sanpablo",
      code: "LAG-BUS-02",
      name: "Calamba - San Pablo",
      type: "BUS",
      distanceKm: 45.0,
      estimatedMins: 90,
      stops: [
        { name: "Calamba Crossing", lat: 14.2100, lng: 121.1650 },
        { name: "Los Baños", lat: 14.1700, lng: 121.2200 },
        { name: "Bay", lat: 14.1800, lng: 121.2850 },
        { name: "San Pablo", lat: 14.0700, lng: 121.3250 }
      ]
    },
    {
      id: "calamba-binan",
      code: "LAG-JEEP-24",
      name: "Calamba - Biñan",
      type: "JEEPNEY",
      distanceKm: 25.0,
      estimatedMins: 60,
      stops: [
        { name: "Calamba Crossing", lat: 14.2100, lng: 121.1650 },
        { name: "Sta. Rosa", lat: 14.3100, lng: 121.1100 },
        { name: "Biñan", lat: 14.3300, lng: 121.0700 }
      ]
    },
    {
      id: "binan-sanpedro",
      code: "LAG-JEEP-25",
      name: "Biñan - San Pedro",
      type: "JEEPNEY",
      distanceKm: 10.0,
      estimatedMins: 25,
      stops: [
        { name: "Biñan", lat: 14.3300, lng: 121.0700 },
        { name: "San Pedro", lat: 14.3600, lng: 121.0500 }
      ]
    },
    {
      id: "sanpedro-starosa",
      code: "LAG-JEEP-26",
      name: "San Pedro - Sta. Rosa",
      type: "JEEPNEY",
      distanceKm: 12.0,
      estimatedMins: 30,
      stops: [
        { name: "San Pedro", lat: 14.3600, lng: 121.0500 },
        { name: "Sta. Rosa", lat: 14.3100, lng: 121.1100 }
      ]
    },
    {
      id: "stacruz-sanpablo",
      code: "LAG-JEEP-27",
      name: "Sta. Cruz - San Pablo (via Calauan)",
      type: "JEEPNEY",
      distanceKm: 55.0,
      estimatedMins: 120,
      stops: [
        { name: "Sta. Cruz Terminal", lat: 14.2780, lng: 121.4150 },
        { name: "Calauan", lat: 14.1450, lng: 121.3100 },
        { name: "San Pablo", lat: 14.0700, lng: 121.3250 }
      ]
    }
  ],
  
  fares: {
    // LTFRB rates (Setyembre 2026)
    // Traditional Jeepney: ₱14 base (first 4km), ₱2.00/km
    JEEPNEY:  { baseFare: 14, baseKm: 4, perKm: 2.00, minFare: 14 },
    BUS:      { baseFare: 18, baseKm: 5, perKm: 2.98, minFare: 18 },
    TRICYCLE: { baseFare: 20, baseKm: 1, perKm: 10.00, minFare: 20 }
  },

  // ==========================================
  // 3. LISTAHAN NG MGA BARANGAY (Para sa Search)
  // ==========================================
  // Ito ang magpo-provide ng data kapag nag-search ka ng specific na barangay.
  // Mag-o-auto-generate ito ng "Tricycle Route" sa search results.
  barangays: [
    // Biñan
    "Bungahan", "Canlalay", "Casile", "De La Paz", "Ganado", "Langkiwa", "Loma", "Malaban", "Malamig", "Mampalasan", "Platero", "Poblacion (Biñan)", "San Antonio (Biñan)", "San Francisco (Biñan)", "San Jose (Biñan)", "San Vicente (Biñan)", "Santo Domingo (Biñan)", "Santo Niño (Biñan)", "Santo Tomas (Biñan)", "Soro-soro", "Timbao", "Tubigan", "Zapote (Biñan)",
    // Cabuyao
    "Baclaran (Cabuyao)", "Banaybanay", "Banlic", "Butong", "Bigaa", "Gulod", "Mamatid", "Marinig", "Niugan", "Pittland", "Pulo", "Sala", "San Isidro (Cabuyao)", "Diezmo",
    // Calamba
    "Bagong Kalsada", "Banadero", "Barandal", "Bubuyan", "Bucal", "Bunggo", "Burol", "Camaligan", "Canlubang", "Halang", "Hornalan", "Kay-Anlog", "Laguerta", "La Mesa", "Lawa", "Lecheria", "Lingga", "Looc", "Mabato", "Makiling", "Mapagong", "Masili", "Maunong", "Mayapa", "Paciano Rizal", "Palingon", "Palo-Alto", "Pansol", "Parian", "Prinza", "Punta", "Puting Lupa", "Real", "Sucol", "Saimsim", "Sampiruhan", "San Cristobal (Calamba)", "San Jose (Calamba)", "San Juan (Calamba)", "Sirang Lupa", "Milagrosa", "Turbina", "Ulango", "Uwisan", "Batino", "Majada Labas",
    // San Pablo
    "Atisan", "Bagong Bayan II-A", "Bagong Pook VI-C", "Bautista", "Concepcion (San Pablo)", "Del Remedio", "Dolores", "San Antonio 1", "San Antonio 2", "San Bartolome", "San Buenaventura", "San Crispin", "San Cristobal (San Pablo)", "San Diego", "San Francisco (San Pablo)", "San Gabriel", "San Gregorio", "San Ignacio", "San Isidro (San Pablo)", "San Joaquin", "San Jose (San Pablo)", "San Juan (San Pablo)", "San Lorenzo", "San Lucas 1", "San Lucas 2", "San Marcos", "San Mateo", "San Miguel (San Pablo)", "San Nicolas", "San Pedro (San Pablo)", "San Rafael", "San Roque (San Pablo)", "San Vicente (San Pablo)", "Santa Ana", "Santa Catalina", "Santa Cruz (San Pablo)", "Santa Elena", "Santa Felomina", "Santa Isabel", "Santa Maria (San Pablo)", "Santa Maria Magdalena", "Santa Monica", "Santa Veronica", "Santiago I", "Santiago II", "Santisimo Rosario", "Santo Angel (San Pablo)", "Santo Cristo", "Santo Niño (San Pablo)", "Soledad",
    // San Pedro
    "Bagong Silang (San Pedro)", "Cuyab", "Estrella", "G.S.I.S.", "Landayan", "Langgam", "Laram", "Magsaysay (San Pedro)", "Nueva", "Poblacion (San Pedro)", "Riverside", "San Antonio (San Pedro)", "San Roque (San Pedro)", "San Vicente (San Pedro)", "Santo Niño (San Pedro)", "United Bayanihan", "United Better Living", "Sampaguita Village", "Calendola", "Narra", "Chrysanthemum", "Fatima", "Maharlika", "Pacita 1", "Pacita 2", "Rosario", "San Lorenzo Ruiz",
    // Sta. Rosa
    "Aplaya (Sta. Rosa)", "Balibago", "Caingin", "Dila", "Dita", "Don Jose", "Ibaba", "Labas", "Macabling", "Malitlit", "Malusak", "Market Area", "Kanluran (Sta. Rosa)", "Pooc", "Pulong Santa Cruz", "Santo Domingo (Sta. Rosa)", "Sinalhan", "Tagapo",
    // Alaminos
    "Del Carmen", "Palma", "San Agustin (Alaminos)", "San Andres", "San Benito", "San Gregorio (Alaminos)", "San Ildefonso", "San Juan (Alaminos)", "San Miguel (Alaminos)", "San Roque (Alaminos)", "Santa Rosa (Alaminos)",
    // Bay
    "Bitin", "Calo", "Dila (Bay)", "Maitim", "Masaya", "Paciano Rizal (Bay)", "Puypuy", "San Antonio (Bay)", "San Isidro (Bay)", "Santa Cruz (Bay)", "Santo Domingo (Bay)", "Tagumpay", "Tranca", "San Agustin (Bay)", "San Nicolas (Bay)",
    // Calauan
    "Balayhangin", "Bangyas", "Dayap", "Hanggan", "Imok", "Lamot 1", "Lamot 2", "Limao", "Mabacan", "Masiit", "Paliparan", "Perez", "Kanluran (Calauan)", "Silangan (Calauan)", "Santo Tomas (Calauan)", "San Isidro (Calauan)", "San Pablo (Calauan)",
    // Cavinti
    "Anglas", "Bangco", "Bukal (Cavinti)", "Bulajo", "Cansuso", "Duhat (Cavinti)", "Inao-Awan", "Kanluran Talaongan", "Labayo", "Layasin", "Layug", "Mahipon", "Paowin", "Poblacion (Cavinti)", "Sisilmin", "Sumucab", "Tibatib", "East Talaongan", "West Talaongan",
    // Famy
    "Asana", "Bacong-Sigsigan", "Bagong Pag-Asa (Famy)", "Balitoc", "Banaba", "Batuhan", "Bulihan", "Caballero", "Calumpang (Famy)", "Kapatalan", "Cuebang Bato", "Damayan", "Kataypuanan", "Liyang (Famy)", "Maate", "Magdalo", "Mayatba", "Salangbato", "Tunhac", "Kapitan",
    // Kalayaan
    "Longos", "San Antonio (Kalayaan)", "San Juan (Kalayaan)",
    // Liliw
    "Bagong Anyo", "Bayate", "Bubukal", "Bongkol", "Cabuyew", "Calumpang (Liliw)", "Culoy", "Dagatan", "Daniw", "Dita (Liliw)", "Ibabang Palina", "Ibabang San Roque", "Ibabang Sungi", "Ibabang Taykin", "Ilayang Palina", "Ilayang San Roque", "Ilayang Sungi", "Ilayang Taykin", "Kanlurang Bukal", "Laguan (Liliw)", "Luquin", "Malabo-Kalantukan", "Masikap", "Mojon", "Novaliches", "Oples", "Pag-Asa (Liliw)", "Palayan", "San Isidro (Liliw)", "San Roque (Liliw)", "Tuy-Baanan", "Gatid (Liliw)", "Silangan (Liliw)",
    // Los Baños
    "Anos", "Bagong Silang (Los Baños)", "Bambang", "Batong Malake", "Baybayin", "Bayog", "Lalakay", "Maahas", "Mayondon", "Putho Tuntungin", "San Antonio (Los Baños)", "Tadlak", "Timugan", "Malinta",
    // Luisiana
    "De La Paz (Luisiana)", "San Antonio (Luisiana)", "San Isidro (Luisiana)", "San Jose (Luisiana)", "San Roque (Luisiana)",
    // Lumban
    "Bagong Silang (Lumban)", "Balimbingan", "Balubad", "Caliraya", "Concepcion (Lumban)", "Lewin", "Maracta", "Maytalang I", "Maytalang II", "Primera Parang", "Primera Pulo", "Salac", "Segunda Parang", "Segunda Pulo", "Wawa (Lumban)", "Santo Niño (Lumban)",
    // Mabitac
    "Amuyong", "Lambac", "Lucong", "Matalatala", "Nanguma", "Numero", "Paagahan", "Bayanihan", "Libis ng Nayon", "Maligaya", "Masikap (Mabitac)", "Pag-Asa (Mabitac)", "Sinagtala", "San Antonio (Mabitac)", "San Miguel (Mabitac)",
    // Magdalena
    "Alipit", "Malaking Ambling", "Munting Ambling", "Baanan", "Balanac", "Bucal (Magdalena)", "Buenavista", "Bungkol", "Buo", "Burlungan", "Cigaras", "Ibabang Atingay", "Ibabang Butnong", "Ilayang Atingay", "Ilayang Butnong", "Malinao (Magdalena)", "Poblacion (Magdalena)", "Sabang (Magdalena)", "Salasad", "Tanawan", "Tipunan", "Halayhayin", "San Isidro (Magdalena)", "San Miguel (Magdalena)",
    // Majayjay
    "Amonoy", "Bakia", "Bukal (Majayjay)", "Balanac (Majayjay)", "Balayong", "Banilad", "Banti", "Bitaoy", "Botocan", "Burgos", "Burol (Majayjay)", "Coralao", "Gagalot", "Ibabang Banga", "Ibabang Bayucain", "Ilayang Banga", "Ilayang Bayucain", "Isabang", "Malinao (Majayjay)", "May-It", "Munting Kawayan", "Oobi", "Olla", "Origuel", "Panalaban", "Panglan", "Pangil (Majayjay)", "Piit", "Pook (Majayjay)", "Rizal (Majayjay)", "San Francisco (Majayjay)", "San Isidro (Majayjay)", "San Miguel (Majayjay)", "San Roque (Majayjay)", "Santa Catalina", "Suba", "Tanawan (Majayjay)", "Taytay", "Talortor", "Villa Nogales",
    // Nagcarlan
    "Abo", "Alibungbungan", "Alumbrado", "Balayong (Nagcarlan)", "Balimbing", "Balinacon", "Bambang (Nagcarlan)", "Banago", "Banca-banca", "Bangcuro", "Banilad (Nagcarlan)", "Bayaquitos", "Buboy", "Buenavista (Nagcarlan)", "Buhanginan", "Bukal (Nagcarlan)", "Bunga", "Cabuyew (Nagcarlan)", "Calumpang (Nagcarlan)", "Kanluran Kabubuhayan", "Silangan Kabubuhayan", "Labangan", "Lawaguin", "Kanluran Lazaan", "Silangan Lazaan", "Lagulo", "Maiit", "Malaya", "Malinao (Nagcarlan)", "Manaol", "Maravilla", "Nagcalbang", "Poblacion I (Nagcarlan)", "Poblacion II (Nagcarlan)", "Poblacion III (Nagcarlan)", "Oples (Nagcarlan)", "Palayan (Nagcarlan)", "Palina", "Sabang (Nagcarlan)", "San Francisco (Nagcarlan)", "Sibulan", "Silangan Napapatid", "Silangan Ilaya", "Sinipian", "Santa Lucia", "Sulsuguin", "Talahib", "Talangan", "Taytay (Nagcarlan)", "Tipacan", "Wakat", "Yukos",
    // Paete
    "Bagumbayan (Paete)", "Bangkusay", "Ermita", "Ibaba del Norte", "Ibaba del Sur", "Ilaya del Norte", "Ilaya del Sur", "Maytoong", "Quinale",
    // Pagsanjan
    "Anibong", "Biñan (Pagsanjan)", "Buboy (Pagsanjan)", "Cabanbanan", "Calusiche", "Dingin", "Lambac (Pagsanjan)", "Layugan", "Magdapio", "Maulawin", "Pinagsanjan", "Sabang (Pagsanjan)", "Sampaloc", "San Isidro (Pagsanjan)",
    // Pakil
    "Baño", "Banilan", "Burgos (Pakil)", "Casa Real", "Casinsin", "Dorado", "Gonzales", "Kabulusan", "Matikiw", "Rizal (Pakil)", "Saray", "Taft", "Tavera",
    // Pangil
    "Balian", "Dambo", "Galalan", "Isla", "Mabato-Azufre", "Natividad", "San Jose (Pangil)", "Sulib",
    // Pila
    "Aplaya (Pila)", "Bagong Pook (Pila)", "Bukal (Pila)", "Bulilan Norte", "Bulilan Sur", "Concepcion (Pila)", "Labuin (Pila)", "Linga", "Masico", "Mojon (Pila)", "Pansol (Pila)", "Pinagbayanan", "San Antonio (Pila)", "San Miguel (Pila)", "Santa Clara Norte", "Santa Clara Sur", "Tubuan",
    // Rizal
    "Antipolo", "Entablado", "Laguan (Rizal)", "Paule 1", "Paule 2", "East Poblacion", "West Poblacion", "Pook (Rizal)", "Tala", "Talaga", "Tuy",
    // Sta. Cruz
    "Alipit (Sta. Cruz)", "Bagumbayan (Sta. Cruz)", "Bubukal (Sta. Cruz)", "Calios", "Duhat (Sta. Cruz)", "Gatid (Sta. Cruz)", "Jasaan", "Labuin (Sta. Cruz)", "Malinao (Sta. Cruz)", "Oogong", "Pagsawitan", "Palasan", "Patimbao", "Barangay I (Sta. Cruz)", "Barangay II (Sta. Cruz)", "Barangay III (Sta. Cruz)", "Barangay IV (Sta. Cruz)", "Barangay V (Sta. Cruz)", "San Jose (Sta. Cruz)", "San Juan (Sta. Cruz)", "San Pablo Norte", "San Pablo Sur", "Santisima Cruz", "Santo Angel Central", "Santo Angel Norte", "Santo Angel Sur",
    // Sta. Maria
    "Adia", "Bagong Pook (Sta. Maria)", "Bagumbayan (Sta. Maria)", "Bubukal (Sta. Maria)", "Cabooan", "Calangay", "Cambuja", "Coralan", "Cueva", "Inayapan", "Jose Laurel, Sr.", "Kayhakat", "Macasipac", "Masinao", "Mataling-Ting", "Pao-o", "Parang Ng Buho", "Barangay I (Sta. Maria)", "Barangay II (Sta. Maria)", "Barangay III (Sta. Maria)", "Barangay IV (Sta. Maria)", "Jose Rizal", "Santiago", "Talangka", "Tungkod",
    // Siniloan
    "Acevida", "Bagong Pag-Asa (Siniloan)", "Bagumbarangay", "Buhay", "Gen. Luna", "Halayhayin (Siniloan)", "Mendiola", "Kapatalan (Siniloan)", "Laguio", "Liyang (Siniloan)", "Llavac", "Pandeno", "Magsaysay (Siniloan)", "Macatad", "Mayatba (Siniloan)", "P. Burgos", "G. Redor", "Salubungan", "Wawa (Siniloan)", "J. Rizal",
    // Victoria
    "Banca-banca (Victoria)", "Daniw (Victoria)", "Masapang", "Nanhaya", "Pagalangan", "San Benito (Victoria)", "San Felix", "San Francisco (Victoria)", "San Roque (Victoria)"
  ]
};