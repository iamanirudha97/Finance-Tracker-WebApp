import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAjZixtbusaW3E1mUAO8fq9A4p3Cf4OZVQ",
  authDomain: "finance-tracker-45a98.firebaseapp.com",
  projectId: "finance-tracker-45a98",
  storageBucket: "finance-tracker-45a98.appspot.com",
  messagingSenderId: "518711197215",
  appId: "1:518711197215:web:f458ef2a1766d765699f2a"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }