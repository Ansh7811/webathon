import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js';

const firebaseConfig = {
    apiKey: "AIzaSyAmRS3tWpsazL5sGrJjQ0G_MYAfw-td-p0",
    authDomain: "webathon-e01a3.firebaseapp.com",
    projectId: "webathon-e01a3",
    storageBucket: "webathon-e01a3.appspot.com",
    messagingSenderId: "1092453056181",
    appId: "1:1092453056181:web:e48e96899dc3e4618d88fc"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

// //signing up users
// const signupForm = document.querySelector('.Signup .regis');
// if(signupForm){ //to prevent it from loading before sign in fform
//     signupForm.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const email = signupForm.querySelector('input[placeholder="Email "]').value;
//         const password = signupForm.querySelector('input[placeholder="Password"]').value;

//         createUserWithEmailAndPassword(auth, email, password)
//             .then((cred) => {
//                 alert('User created:', cred.user);
//                 signupForm.reset();
//                 //go to Profile
//                 window.location.assign('Profile.html');
//             })
//             .catch((err) => {
//                 alert(err.message);
//             });
//     });
// }

// //sign in
// const signinForm = document.querySelector('.login .loginForm')
// if(signinForm) {
//     signinForm.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const email = signinForm.querySelector('input[placeholder="Email"]').value;
//         const password = signinForm.querySelector('input[placeholder="Password"]').value;

//         signInWithEmailAndPassword(auth, email, password)
//             .then((cred) => {
//                 console.log('User logged in', cred.user);
//                 //go to Profile
//                 window.location.assign('Profile.html');
//             })
//             .catch((err) => {
//                 console.error(err.message);
//             });
//     });
// }
// Initialize services
const db = getFirestore(app);
const storage = getStorage(app);

// // Adding recipe
// const addRep = document.querySelector('.form-container .form');
// if(addRep){
//     addRep.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const recipeName = addRep.querySelector('input[name="recipe-name"]').value;
//         const description = addRep.querySelector('textarea[name="recipe-description"]').value;
//         const imageFile = addRep.querySelector('input[name="recipe-image"]').files[0];
//         const vegNonVeg = addRep.querySelector('select[name="veg-nonveg"]').value;

//         // Image to Firebase Storage
//         const storageRef = ref(storage, "recipe_images/" + imageFile.name);
//         uploadBytes(storageRef, imageFile).then(snapshot => {
//             // Getting download URL for image
//             return getDownloadURL(snapshot.ref);
//         }).then(imageUrl => {
//             // Save recipe details and image URL to Firestore
//             addDoc(collection(db, "recipes"), {
//                 name: recipeName,
//                 description: description,
//                 imageUrl: imageUrl,
//                 vegNonVeg: vegNonVeg
//             }).then(() => {
//                 alert("recipe added");
//             }).catch(error => {
//                 alert("Error adding recipe: ", error);
//             });
//         }).catch(error => {
//             alert("Error uploading image: ", error);
//         });
//     });
// }


//fething recipies
const colRef=collection(db, 'recipes');
getDocs(colRef)
 .then((snapshot) =>{
    let recipe=[];
    snapshot.docs.forEach((doc) => {
        recipe.push({ ...doc.data(), id:doc.id})
    })
    for (let i = 0; i < recipe.length; i++) {
        const element = recipe[i].name;
        console.log(element)
        //
    }
    console.log(recipe)
  })
  .catch(err =>{
    console.log(err)
  })
