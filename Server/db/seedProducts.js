const { createClient } = require('@supabase/supabase-js');
const faker = require('faker');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const TOTAL_RECORDS = 10000;
const BATCH_SIZE = 500;

async function seed() {
  console.log(`Seeding ${TOTAL_RECORDS} products...`);

  for (let i = 0; i < TOTAL_RECORDS; i += BATCH_SIZE) {
    const batch = Array.from({ length: BATCH_SIZE }, () => ({
      name: faker.commerce.productName(),
      category: faker.commerce.department(),
      price: parseFloat(faker.commerce.price()),
      stock: faker.datatype.number({ min: 0, max: 500 }),
      created_at: faker.date.past(2),
    }));

    const { error } = await supabase.from('products').insert(batch);
    if (error) {
      console.error('Error inserting batch:', error);
      return;
    }

    console.log(`Inserted records ${i + 1} to ${i + BATCH_SIZE}`);
  }

  console.log('Seeding complete!');
}

seed().catch(console.error);