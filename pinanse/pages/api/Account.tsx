
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import connectToDatabase from './Utils/database'; 

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post(async (req, res) => {
  try {
    // Connect to the database
    const db = await connectToDatabase();

    // Access the request body data
    const { firstName, lastName, username, telegramUsername } = req.body;

    // Perform database operations (this is a placeholder)
    // You should replace this with actual database operations
    const result = await db.collection('users').insertOne({
      firstName,
      lastName,
      username,
      telegramUsername,
    });

    res.status(200).json({ success: true, data: result.ops });
  } catch (error) {
    console.error('Error in account API:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

export default handler;
