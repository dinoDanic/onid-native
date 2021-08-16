import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHAllXm9uaufWa4JBdr3dwV9qfmE2rSyI",
  authDomain: "onid-tm.firebaseapp.com",
  projectId: "onid-tm",
  storageBucket: "onid-tm.appspot.com",
  messagingSenderId: "141658461672",
  appId: "1:141658461672:web:47706ce9c15eb178dd805d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

export const db = firebase.firestore();

export const loginWithEmailAndPassword = (email, password) => {
  auth.signInWithEmailAndPassword(email, password).catch((error) => {
    var errorMessage = error.message;
    console.log(errorMessage);
  });
};

export const registerUserFb = async (user, userName) => {
  const { uid, email, photoURL } = user;
  const userRef = await db.collection("users").doc(uid).get();
  if (!userRef.exists) {
    await db.collection("users").doc(uid).set({
      userName: userName,
      uid: uid,
      email: email,
      assignedTasks: [],
      favoriteStations: [],
      imageUrl: photoURL,
      open: true,
    });
    const userImage = await db.collection("users").doc(uid).get();
    const userImageUrl = userImage.data().imageUrl;
    if (userImageUrl === null) {
      db.collection("users").doc(uid).set(
        {
          imageUrl:
            "https://i.pinimg.com/originals/30/b0/d5/30b0d5530cd5accbba769802de6cb9af.jpg",
        },
        { merge: true }
      );
    }
  } else {
    console.log("no code");
  }
};
