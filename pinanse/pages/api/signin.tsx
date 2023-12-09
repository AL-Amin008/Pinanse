import { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';
import { MongoClient } from 'mongodb';

// Initialize Firebase Admin SDK
const serviceAccount = require('../../path-to-your-firebase-adminsdk.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://your-firebase-project-id.firebaseio.com',
  });
}

// MongoDB Connection URI
const MONGODB_URI = 'mongodb://localhost:27017/pinanse';
const client = new MongoClient(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { idToken } = req.body;

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      const uid = decodedToken.uid;

      // Connect to MongoDB
      await client.connect();

      // Access the MongoDB database
      const database = client.db();
      const usersCollection = database.collection('users');

      // Check if the user already exists in MongoDB
      const existingUser = await usersCollection.findOne({ uid });

      if (existingUser) {
        res.json({ success: true, uid, message: 'User already exists in MongoDB' });
      } else {
        // Save user information to MongoDB
        await usersCollection.insertOne({ uid, otherUserData: '...your data here...' });

        res.json({ success: true, uid, message: 'User saved to MongoDB' });
      }
    } catch (error) {
      console.error(error);
      res.status(401).json({ success: false, error: 'Invalid ID token' });
    } finally {
      // Close the MongoDB connection
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
