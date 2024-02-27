

// // **************************************************************************************************************************
// // pour le fomulaire d'inscription
// // *******************************************************************************************************

// const form = document.getElementById("form");
// console.log(form);
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const password2 = document.getElementById("password2");

// form.addEventListener(
//   "submit",

//   (e) => {
//     // bloquer le chargement du navigateur lors de la validation du formulaire sur le boutton submit
//     e.preventDefault();
//     form_verify();
//   }
// );

// // la fonction form_verify ()contient la verification -username: .verifier si le champs est vide .verifier si on ne commence pas par les chiffres .verifier que le champs a aumoins trois caractères 

// function form_verify() {
//   // obtenir tous les champs des imput et supprimer les espaces avant et pres la valeurs saisir par l'utilisateur
//   const userValue = username.value.trim();
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();
//   console.log(passwordValue);
//   const password2Value = password2.value.trim();

//   // verify username
//   if (userValue === "") {
//     let message = "username ne peut etre vide";
//     setError(username, message);
//   } else if (userValue.match(/^[0-9]*$/)) {
//     let message = " username doit commencer par une lettre";
//     setError(username, message);
//   } else {
//     letterNumber = userValue.length;
//     if (letterNumber < 3) {
//       let message = "username doit avoir au moins 3 caractères";
//       setError(username, message);
//     } else if (letterNumber > 12) {
//       let message = "au plus 12 caractères";
//       setError(username, message);
//     } else if (!userValue.match(/^[a-zA-Z0-9_.-]*$/)) {
//       let message = " pas de caractères spéciaux";
//       setError(username, message);
//     } else {
//       setSucces(username);
//     }
//   }

//   // verify email
//   if (emailValue === "") {
//     let message = "email ne peut etre vide";
//     setError(email, message);
//   } else if (!email_verify(emailValue)) {
//     let message = "Email n'est pas valide";
//     setError(email, message);
//   } else {
//     setSucces(email);
//     verify;
//   }

//   //  verify password

//   if (passwordValue === "") {
//     let message = "password ne peut etre vide";
//     setError(password, message);
//   } else if (!password_verify(passwordValue)) {
//     let message = "password faible (8 à 12 caractères )";
//     setError(password, message);
//   } else {
//     setSucces(password);
//   }

//   // // Password verify
//    if (password2Value === "") {
//      let message = "Le password confirm ne peut être vide";
//      setError(password2, message);
//    } else if (passwordValue !== password2Value) {
//      let message = "les passsword ne correspond pas ";
//      setError(password2, message);
//    } else {
//      setSucces(password2);
//    }
// }
// function setError(element, message) {
//   const formControl = element.parentElement;
//   const small = formControl.querySelector("small");
//   //   console.log(small);
//   // ajout du message d'erreur
//   small.innerText = message;
//   // ajout de la class error
//   formControl.className = "form-control error";
// }

// function setSucces(elt) {
//   const formControl = elt.parentElement;
//   formControl.className = "form-control succes";
// }

// function email_verify(email) {
//   return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z0-9]{2,4}$/.test(email);
// }

// function password_verify(password) {
  
//   return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(password);
// }


















let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  const slideWidth = slides[0].offsetWidth;
  const moveAmount = -slideWidth * slideIndex;
  document.querySelector(".slider-container").style.transform = `translateX(${moveAmount}px)`;
}

function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

// Afficher la première diapositive au chargement de la page
showSlide(slideIndex);








function toggleMenu() {
  var nav = document.querySelector('nav ul');
  nav.style.display = (nav.style.display === 'none' || nav.style.display === '') ? 'block' : 'none';
}
