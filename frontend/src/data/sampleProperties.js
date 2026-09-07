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
    images: ['https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop'],
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
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop'],
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
    images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'],
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
    images: ['https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=600&fit=crop'],
    thumbnailImage: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=600&fit=crop',
    amenities: ['Swimming Pool', 'Beach Access', 'Security'],
    features: ['Beach View', 'Balcony', 'Modern Kitchen'],
    nearbyLocations: [
      { name: 'Baga Beach', distance: '0.2 km', type: '🏖️ Beach' },
      { name: 'Goa Market', distance: '2 km', type: '🛍️ Shopping' }
    ]
  }
];

// Stable id = original array position, kept on the object so filtered/sorted
// views can still route back to the right listing (index-into-filtered-array
// silently pointed at the wrong property once a search narrowed the list).
export const properties = sampleProperties.map((p, id) => ({ ...p, id }));
