// Dev-only: populate MongoDB with the demo listings from
// frontend/src/data/sampleProperties.js so Browse/Landing have real data
// to fetch instead of the old hardcoded frontend copy. Run with:
//   node scripts/seed.js
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const User = require('../models/User');
const Property = require('../models/Property');

function loadSampleProperties() {
  const raw = fs.readFileSync(
    path.join(__dirname, '../../frontend/src/data/sampleProperties.js'),
    'utf8'
  );
  const match = raw.match(/export const sampleProperties = (\[[\s\S]*?\n\]);/);
  if (!match) throw new Error('Could not find sampleProperties array in sampleProperties.js');
  // eslint-disable-next-line no-eval
  return eval(match[1]);
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '.').replace(/^\.|\.$/g, '');
}

async function seed() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/real-estate-db';
  await mongoose.connect(uri);
  console.log('Connected to', uri);

  const sampleProperties = loadSampleProperties();

  await Property.deleteMany({});
  await User.deleteMany({ email: /@properties\.com$/ });

  const sellerCache = new Map();
  let created = 0;

  for (const p of sampleProperties) {
    const key = p.seller.email;
    let seller = sellerCache.get(key);
    if (!seller) {
      seller = await User.create({
        username: slugify(p.seller.name),
        email: p.seller.email,
        password: 'seedpass123',
        role: 'SELLER',
        phone: p.seller.phone,
      });
      sellerCache.set(key, seller);
    }

    await Property.create({
      title: p.title,
      description: p.description,
      price: p.price,
      location: p.location,
      bedrooms: p.bedrooms,
      bathrooms: p.bathrooms,
      squareFeet: p.squareFeet,
      totalRooms: p.totalRooms,
      hasGarden: p.hasGarden,
      gardenSize: p.gardenSize,
      hasBackyard: p.hasBackyard,
      backyardSize: p.backyardSize,
      hasParking: p.hasParking,
      parkingSpaces: p.parkingSpaces,
      floorsInBuilding: p.floorsInBuilding,
      propertyType: p.propertyType,
      seller: seller._id,
      images: p.images,
      thumbnailImage: p.thumbnailImage,
      amenities: p.amenities,
      features: p.features,
    });
    created += 1;
  }

  console.log(`Seeded ${created} properties from ${sellerCache.size} sellers.`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
