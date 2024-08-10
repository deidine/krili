import {  sql } from '@vercel/postgres';
import { Testimonial, Location, Car } from '@/src/db/definitions';

import pg from 'pg'
import { env } from 'process';
 
const { Client } = pg

const connectionString = env.POSTGRES_URL;

const client = new Client({ connectionString
})
export async function testConnection() {
  try {
    await client.connect();
    console.log('Connected to the database');
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
  } catch (err: any) {
    console.error('Connection error', err.stack);
  } finally {
    // await client.end();
  }
}
export function seedDataSample(){
  ////////////////////////////////////////////////////////////////  this to insert the data to remote db for dumy test 
//  (async () => {
//   await seedUsers();
//   await seedTestimonials();
//   await seedCars();
//   await seedLocations();
//   await seedRentalReservations();
//   await seedNewsletterSubscribers();
// })();

}
 
export async function getTestimonials() {
  try {
    const data = await  client.query(`SELECT * FROM testimonials`);
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch testimonials data.');
  }
}

export async function getLocations() {
  try {
    const data = await  client.query(`SELECT * FROM locations ORDER BY name ASC`);
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch locations data.');
  }
}

export async function getFeaturedLocations() {
  try {
    const data = await  client.query(`SELECT * FROM locations WHERE featured = true ORDER BY name ASC`);
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch featured locations data.');
  }
}

export async function getLocationBySlug(slug: string) {
  try {
    const data = await  client.query(`SELECT * FROM locations WHERE slug = ${slug};`);
    const location = data.rows[0];
    return location;
  } catch (error) {
    console.error('Database Error:', error);
  }
}

export async function getCars() {
  try {
    const data = await  client.query(`SELECT * FROM cars ORDER BY name ASC`);
    return data.rows;
  } catch (error) {
    console.error('`SELECT * FROM cars ORDER BY name ASC` Database Error:', error);
    throw new Error('Failed to fetch cars data.');
  }
}

export async function getCarBySlug(slug: string) {
  try {
    const data = await  client.query(`SELECT * FROM cars WHERE slug = '${slug}';`);
    const car = data.rows[0];
    console.log(car);
    return car;
  } catch (error) {
    console.error('Database Error:', error);
  }
}

export async function getMinPriceFromCars() {
  try {
    const data = await
    //  sql<{ min_price: number }>
    client.query(`
      SELECT 
        MIN(COALESCE(discounted_price_per_day, retail_price_per_day)) AS min_price
      FROM cars;
    `);
    return data.rows[0].min_price;
  } catch (error) {
    console.error('Database Error:', error);
  }
}
