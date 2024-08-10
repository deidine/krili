import { Client } from 'pg';

let client: Client | null = null;

export function getClient(): Client {
  if (!client) {
    client = new Client({
      connectionString: process.env.POSTGRES_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });

    client.connect().then(() => {
      console.log('Connected to the database');
    }).catch((err) => {
      console.error('Connection error', err.stack);
      // client?.end()
    });
  }

  return client;
}
