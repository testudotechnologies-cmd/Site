import admin from 'firebase-admin';
import fs from 'fs';

/** @type {import("firebase-admin").ServiceAccount} */
const serviceAccount = JSON.parse(
  fs.readFileSync('firebase-auth.json', 'utf8'),
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
