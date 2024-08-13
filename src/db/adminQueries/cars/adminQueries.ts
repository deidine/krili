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

  export async function deleteCar(id: number) {
    try {
       const client = getClient();
  
      const data = await  (await client).query(`DELETE FROM cars WHERE id = ${id}`);
      return data ;
    } catch (error) {
      console.error('`DELETE FROM cars WHERE id = ${id}` Database Error:', error);
      throw new Error('Failed to fetch cars data.');
    }
  }