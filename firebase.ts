// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyB2aKCEaHNixg1YO879dMJcLoIkt3P9O5E',
//   authDomain: 'netflix-nextjs-48d3c.firebaseapp.com',
//   projectId: 'netflix-nextjs-48d3c',
//   storageBucket: 'netflix-nextjs-48d3c.appspot.com',
//   messagingSenderId: '139253010739',
//   appId: '1:139253010739:web:cc9ccaac60621f09582e46',
// }
const firebaseConfig = {
  apiKey: 'AIzaSyBuu0YHXOcgmqWLZl-fiMn6lG2wUhdPg8k',
  authDomain: 'next-firebase-stripe-39bf8.firebaseapp.com',
  databaseURL: 'https://next-firebase-stripe-39bf8-default-rtdb.firebaseio.com',
  projectId: 'next-firebase-stripe-39bf8',
  storageBucket: 'next-firebase-stripe-39bf8.appspot.com',
  messagingSenderId: '777709922250',
  appId: '1:777709922250:web:4500ee09dca93e1406d133',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
