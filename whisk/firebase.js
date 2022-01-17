import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBfzenOR117G2iLNex34yPozXF5uXaprTs',
  authDomain: 'whisk-368a9.firebaseapp.com',
  projectId: 'whisk-368a9',
  storageBucket: 'whisk-368a9.appspot.com',
  messagingSenderId: '776469149916',
  appId: '1:776469149916:web:3a87ad5860ea6fa4931c19',
}
const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

export { db }
