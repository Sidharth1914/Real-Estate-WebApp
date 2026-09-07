// Sample properties data with Indian Rupee pricing
export const sampleProperties = [
  {
    title: 'Luxury Villa in Bangalore',
    description: 'Experience unparalleled luxury in this spacious 5-star villa nestled in the heart of Whitefield. This magnificent property features premium construction with Italian marble flooring, imported light fixtures, and designer interiors. The villa boasts a state-of-the-art home automation system controlling everything from lighting to climate. The sprawling compound includes a lavish swimming pool with Jacuzzi, multi-level garden with landscaping, and a dedicated gym. Perfect for discerning families seeking the ultimate in comfort and sophistication.',
    price: 12500000,
    location: 'Whitefield, Bangalore',
    address: '123 Prestige Lane, Whitefield, Bangalore 560066',
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 4500,
    totalRooms: 10,
    hasGarden: true,
    gardenSize: '2000 sqft',
    hasBackyard: true,
    backyardSize: '1500 sqft',
    hasParking: true,
    parkingSpaces: 3,
    floorsInBuilding: 2,
    propertyType: 'HOUSE',
    seller: {
      name: 'Rajesh Kumar',
      phone: '+91-9876543210',
      email: 'rajesh.kumar@properties.com'
    },
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    amenities: ['Swimming Pool', 'Gym', 'Security', 'Servant Quarters', 'Garden', 'Jacuzzi', 'Home Theater'],
    features: ['Modular Kitchen', 'Smart Home', 'Solar Panels', 'Water Harvesting', 'Smart Locks', 'Elevator'],
    nearbyLocations: [
      { name: 'Whitefield Tech Park', distance: '2 km', type: '💼 Tech Hub' },
      { name: 'Phoenix Market City', distance: '3 km', type: '🛍️ Shopping' },
      { name: 'Sri Venkateshwara Temple', distance: '1.5 km', type: '🏛️ Religious' },
      { name: 'Whitefield Golf Club', distance: '4 km', type: '⛳ Golf' },
      { name: 'Bangalore International Airport', distance: '35 km', type: '✈️ Airport' }
    ]
  },
  {
    title: 'Modern Apartment in Mumbai',
    description: 'Witness breathtaking sea views from this spectacular 3 BHK apartment situated on the iconic Marine Drive. This contemporary masterpiece features floor-to-ceiling windows with panoramic Arabian Sea vistas. Premium fittings, marble countertops, smart climate control, and a sophisticated entertainment system make this home perfect for modern living. The apartment includes two elegant balconies overlooking the sunset, a state-of-the-art kitchen with premium appliances, and luxurious bathrooms with rain showers.',
    price: 8500000,
    location: 'Marine Drive, Mumbai',
    address: '456 Sea View Tower, Marine Drive, Mumbai 400020',
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 2200,
    totalRooms: 7,
    hasGarden: false,
    hasBackyard: false,
    hasParking: true,
    parkingSpaces: 2,
    floorsInBuilding: 18,
    propertyType: 'APARTMENT',
    seller: {
      name: 'Priya Desai',
      phone: '+91-9876543211',
      email: 'priya.desai@properties.com'
    },
    images: [
      'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=800&h=600&fit=crop',
    amenities: ['Gym', 'Swimming Pool', 'Concierge', 'Security', 'Balcony', 'Infinity Pool', 'Spa'],
    features: ['Balcony', 'Modular Kitchen', 'Air Conditioning', 'Sea View', 'Rain Shower', 'Smart TV'],
    nearbyLocations: [
      { name: 'Gateway of India', distance: '1 km', type: '🏛️ Monument' },
      { name: 'Taj Mahal Palace Hotel', distance: '1.5 km', type: '🏨 Landmark' },
      { name: 'Marine Plaza Shopping', distance: '0.5 km', type: '🛍️ Shopping' },
      { name: 'Chowpatty Beach', distance: '2 km', type: '🏖️ Beach' },
      { name: 'Mumbai Harbor', distance: '3 km', type: '⛵ Harbor' }
    ]
  },
  {
    title: 'Spacious House in Delhi',
    description: 'An architectural marvel in the prestigious DLF Phase 3, this elegant 5 BHK independent house sets new standards for luxury living. Featuring lush manicured gardens, a sparkling backyard with fountain, and premium hardwood flooring throughout. The property includes a dedicated study, home library, and entertainment lounge. Each bedroom is a sanctuary with en-suite bathrooms, walk-in wardrobes, and custom furnishings. The chef\'s kitchen boasts top-tier appliances, and the home automation system controls every aspect of daily living.',
    price: 11000000,
    location: 'DLF Phase 3, Delhi',
    address: '789 DLF Phase 3, Gurgaon, Haryana 122002',
    bedrooms: 5,
    bathrooms: 4,
    squareFeet: 5000,
    totalRooms: 12,
    hasGarden: true,
    gardenSize: '2500 sqft',
    hasBackyard: true,
    backyardSize: '1800 sqft',
    hasParking: true,
    parkingSpaces: 4,
    floorsInBuilding: 3,
    propertyType: 'HOUSE',
    seller: {
      name: 'Amit Sharma',
      phone: '+91-9876543212',
      email: 'amit.sharma@properties.com'
    },
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    amenities: ['Garden', 'Lawn', 'Water Tank', 'Security', 'Servant Quarters', 'Home Library'],
    features: ['Double Height Entrance', 'Modular Kitchen', 'Home Theater', 'Gym', 'Study Room'],
    nearbyLocations: [
      { name: 'DLF CyberHub', distance: '2 km', type: '💼 Business Hub' },
      { name: 'DLF Golf Course', distance: '5 km', type: '⛳ Golf' },
      { name: 'MGF Metropolitan', distance: '3 km', type: '🛍️ Shopping' },
      { name: 'Ambience Mall', distance: '4 km', type: '🏬 Mall' },
      { name: 'Delhi Airport', distance: '28 km', type: '✈️ Airport' }
    ]
  },
  {
    title: 'Cozy Apartment in Pune',
    description: 'Well-maintained 2 BHK apartment with modern amenities in a vibrant locality. Perfect for young professionals and small families.',
    price: 4500000,
    location: 'Koregaon Park, Pune',
    address: '101 Park Avenue, Koregaon Park, Pune 411001',
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    totalRooms: 5,
    hasGarden: false,
    hasBackyard: false,
    hasParking: true,
    parkingSpaces: 1,
    floorsInBuilding: 12,
    propertyType: 'APARTMENT',
    seller: { name: 'Neha Gupta', phone: '+91-9876543213', email: 'neha.gupta@properties.com' },
    images: [
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&h=600&fit=crop',
    amenities: ['Gym', 'Security', 'Garden', 'Parking'],
    features: ['Balcony', 'Open Kitchen', 'Wooden Flooring'],
    nearbyLocations: [
      { name: 'Koregaon Park Market', distance: '0.5 km', type: '🛍️ Shopping' },
      { name: 'Osho Commune', distance: '1 km', type: '🧘 Spiritual' }
    ]
  },
  {
    title: 'Premium Villa in Hyderabad',
    description: 'Exclusive villa with landscaped garden in Jubilee Hills with world-class amenities.',
    price: 9800000,
    location: 'Jubilee Hills, Hyderabad',
    address: '202 Jubilee Estates, Hyderabad 500033',
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 4000,
    totalRooms: 9,
    hasGarden: true,
    gardenSize: '3000 sqft',
    hasBackyard: true,
    backyardSize: '2000 sqft',
    hasParking: true,
    parkingSpaces: 3,
    floorsInBuilding: 2,
    propertyType: 'HOUSE',
    seller: { name: 'Vikram Patel', phone: '+91-9876543214', email: 'vikram.patel@properties.com' },
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    amenities: ['Swimming Pool', 'Garden', 'Security', 'Servant Quarters'],
    features: ['Landscaped Garden', 'Water Feature', 'Solar System'],
    nearbyLocations: [
      { name: 'Jubilee Market', distance: '1 km', type: '🛍️ Shopping' },
      { name: 'Hyderabad Airport', distance: '25 km', type: '✈️ Airport' }
    ]
  },
  {
    title: 'Commercial Space in Bangalore',
    description: 'Prime commercial space ideal for offices and startups.',
    price: 6000000,
    location: 'Indiranagar, Bangalore',
    address: '303 Tech Park, Indiranagar, Bangalore 560008',
    bedrooms: 0,
    bathrooms: 2,
    squareFeet: 1800,
    totalRooms: 4,
    hasGarden: false,
    hasBackyard: false,
    hasParking: true,
    parkingSpaces: 5,
    floorsInBuilding: 8,
    propertyType: 'COMMERCIAL',
    seller: { name: 'Anjali Singh', phone: '+91-9876543215', email: 'anjali.singh@properties.com' },
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&h=600&fit=crop'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    amenities: ['Security', 'Parking', 'Lift', 'Power Backup'],
    features: ['Open Layout', 'High Ceiling'],
    nearbyLocations: [
      { name: 'Forum Mall', distance: '1 km', type: '🛍️ Shopping' },
      { name: 'Bangalore Airport', distance: '30 km', type: '✈️ Airport' }
    ]
  },
  {
    title: 'Beach Apartment in Goa',
    description: 'Beautiful beach view apartment perfect for vacation or investment.',
    price: 5500000,
    location: 'Baga Beach, Goa',
    address: '505 Ocean View, Baga Beach, Goa 403516',
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1800,
    totalRooms: 6,
    hasGarden: true,
    gardenSize: '500 sqft',
    hasBackyard: false,
    hasParking: true,
    parkingSpaces: 1,
    floorsInBuilding: 6,
    propertyType: 'APARTMENT',
    seller: { name: 'Sunita Reddy', phone: '+91-9876543217', email: 'sunita.reddy@properties.com' },
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=600&fit=crop',
    amenities: ['Swimming Pool', 'Beach Access', 'Security'],
    features: ['Beach View', 'Balcony', 'Modern Kitchen'],
    nearbyLocations: [
      { name: 'Baga Beach', distance: '0.2 km', type: '🏖️ Beach' },
      { name: 'Goa Market', distance: '2 km', type: '🛍️ Shopping' }
    ]
  },
  {
    title: 'Sea-Facing Apartment in Chennai',
    description: 'A refined 3 BHK apartment on East Coast Road with unobstructed sea views. Floor-to-ceiling windows, an open-plan living area, and a wraparound balcony make this a standout coastal home. Steps from the promenade, with covered parking and round-the-clock security.',
    price: 7200000,
    location: 'ECR, Chennai',
    address: '12 Coral Residency, East Coast Road, Chennai 600041',
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1950,
    totalRooms: 6,
    hasGarden: false,
    hasBackyard: false,
    hasParking: true,
    parkingSpaces: 2,
    floorsInBuilding: 10,
    propertyType: 'APARTMENT',
    seller: { name: 'Karthik Iyer', phone: '+91-9876543218', email: 'karthik.iyer@properties.com' },
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=600&fit=crop'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&h=600&fit=crop',
    amenities: ['Swimming Pool', 'Gym', 'Security', 'Clubhouse', 'Power Backup'],
    features: ['Sea View', 'Modular Kitchen', 'Balcony', 'Air Conditioning'],
    nearbyLocations: [
      { name: 'ECR Promenade', distance: '0.1 km', type: '🏖️ Beach' },
      { name: 'VGP Marine Kingdom', distance: '3 km', type: '🎡 Attraction' },
      { name: 'Chennai Airport', distance: '22 km', type: '✈️ Airport' }
    ]
  },
  {
    title: 'Heritage-Style House in Kolkata',
    description: 'A beautifully restored colonial-era house in Ballygunge, blending high ceilings and Burma teak woodwork with fully modernized plumbing, wiring, and kitchen. Set back from the road behind a private gate with a small front garden and covered car porch.',
    price: 9500000,
    location: 'Ballygunge, Kolkata',
    address: '18 Ballygunge Circular Road, Kolkata 700019',
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 3600,
    totalRooms: 9,
    hasGarden: true,
    gardenSize: '800 sqft',
    hasBackyard: false,
    hasParking: true,
    parkingSpaces: 2,
    floorsInBuilding: 2,
    propertyType: 'HOUSE',
    seller: { name: 'Sourav Banerjee', phone: '+91-9876543219', email: 'sourav.banerjee@properties.com' },
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop',
    amenities: ['Garden', 'Security', 'Covered Parking', 'Power Backup'],
    features: ['Colonial Architecture', 'Teak Woodwork', 'High Ceilings', 'Modular Kitchen'],
    nearbyLocations: [
      { name: 'Rabindra Sarobar', distance: '1.5 km', type: '🌳 Park' },
      { name: 'South City Mall', distance: '3 km', type: '🛍️ Shopping' },
      { name: 'Netaji Subhas Airport', distance: '18 km', type: '✈️ Airport' }
    ]
  },
  {
    title: 'Modern Apartment in Ahmedabad',
    description: 'A sunlit 3 BHK apartment in Bopal with an open kitchen, dedicated study nook, and a large deck overlooking a landscaped courtyard. Part of a gated society with a clubhouse, kids\' play area, and dedicated visitor parking.',
    price: 6200000,
    location: 'Bopal, Ahmedabad',
    address: '404 Sunrise Heights, Bopal, Ahmedabad 380058',
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1750,
    totalRooms: 6,
    hasGarden: false,
    hasBackyard: false,
    hasParking: true,
    parkingSpaces: 1,
    floorsInBuilding: 9,
    propertyType: 'APARTMENT',
    seller: { name: 'Meera Shah', phone: '+91-9876543220', email: 'meera.shah@properties.com' },
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
    amenities: ['Clubhouse', 'Kids Play Area', 'Security', 'Visitor Parking'],
    features: ['Deck', 'Study Nook', 'Open Kitchen', 'Vastu Compliant'],
    nearbyLocations: [
      { name: 'Bopal Cross Road', distance: '1 km', type: '🛍️ Shopping' },
      { name: 'SG Highway', distance: '2 km', type: '🛣️ Highway' },
      { name: 'Ahmedabad Airport', distance: '20 km', type: '✈️ Airport' }
    ]
  },
  {
    title: 'Royal-Style Villa in Jaipur',
    description: 'A haveli-inspired villa in Malviya Nagar with jharokha windows, a central courtyard, and hand-painted wall accents, paired with fully modern interiors. Includes a rooftop terrace ideal for evening gatherings and a private well-maintained lawn.',
    price: 10800000,
    location: 'Malviya Nagar, Jaipur',
    address: '27 Heritage Enclave, Malviya Nagar, Jaipur 302017',
    bedrooms: 4,
    bathrooms: 4,
    squareFeet: 4200,
    totalRooms: 10,
    hasGarden: true,
    gardenSize: '1200 sqft',
    hasBackyard: true,
    backyardSize: '600 sqft',
    hasParking: true,
    parkingSpaces: 3,
    floorsInBuilding: 2,
    propertyType: 'HOUSE',
    seller: { name: 'Devendra Rathore', phone: '+91-9876543221', email: 'devendra.rathore@properties.com' },
    images: [
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop',
    amenities: ['Rooftop Terrace', 'Garden', 'Security', 'Servant Quarters'],
    features: ['Courtyard', 'Jharokha Windows', 'Hand-Painted Walls', 'Modular Kitchen'],
    nearbyLocations: [
      { name: 'Malviya Nagar Market', distance: '1 km', type: '🛍️ Shopping' },
      { name: 'World Trade Park', distance: '2.5 km', type: '🏬 Mall' },
      { name: 'Jaipur Airport', distance: '12 km', type: '✈️ Airport' }
    ]
  },
  {
    title: 'Residential Plot in Chandigarh',
    description: 'A rectangular, road-facing residential plot in Sector 41, fully leveled and boundary-walled, ready for construction. Clear title, sewage and electricity connections already at the plot line. Located in a well-established, low-density sector.',
    price: 7800000,
    location: 'Sector 41, Chandigarh',
    address: 'Plot 216, Sector 41-A, Chandigarh 160036',
    bedrooms: 0,
    bathrooms: 0,
    squareFeet: 3000,
    totalRooms: 0,
    hasGarden: false,
    hasBackyard: false,
    hasParking: false,
    floorsInBuilding: 0,
    propertyType: 'LAND',
    seller: { name: 'Harpreet Singh', phone: '+91-9876543222', email: 'harpreet.singh@properties.com' },
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&h=600&fit=crop'
    ],
    thumbnailImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    amenities: ['Boundary Wall', 'Electricity Connection', 'Sewage Connection'],
    features: ['Clear Title', 'Road-Facing', 'Leveled'],
    nearbyLocations: [
      { name: 'Sector 17 Plaza', distance: '4 km', type: '🛍️ Shopping' },
      { name: 'Chandigarh Airport', distance: '10 km', type: '✈️ Airport' }
    ]
  }
];

// Stable id = original array position, kept on the object so filtered/sorted
// views can still route back to the right listing (index-into-filtered-array
// silently pointed at the wrong property once a search narrowed the list).
export const properties = sampleProperties.map((p, id) => ({ ...p, id }));
