// src/pages/api/forms/[id]/submit.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Ensure this is set in your environment variables
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { formId } = req.query;
    const { values } = req.body;

    try {
      const result = await pool.query(
        'INSERT INTO submissions (content, formId) VALUES ($1, $2) RETURNING *',
        [JSON.stringify(values), formId]
      );

      res.status(200).json({ submission: result.rows[0] });
    } catch (error) {
      console.error('Error inserting submission:', error);
      res.status(500).json({ error: 'Failed to submit form data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
