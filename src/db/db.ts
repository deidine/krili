import { Client } from 'pg';

let client: Client | null = null;

export async function getClient(): Promise<Client> {
  if (!client) {
    client = new Client({
      connectionString: process.env.POSTGRES_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });

    try {
      await client.connect();
      console.log('Connected to the database');
    } catch (err:any) {
      console.error('Connection error', err.stack);
      // Proper cleanup if connection fails
      client = null;
      throw new Error('Failed to connect to the database');
    }
  }

  return client;
}
