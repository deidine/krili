import { getClient } from "../../db";

export async function getCars() {
    try {
       const client = getClient();
  
      const data = await  (await client).query(`SELECT * FROM cars ORDER BY name ASC`);
      return data ;
    } catch (error) {
      console.error('`SELECT * FROM cars ORDER BY name ASC` Database Error:', error);
      throw new Error('Failed to fetch cars data.');
    }
  }