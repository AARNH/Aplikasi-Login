/** @module Login-Script */
/**
* Membuat variabel loginFormElement untuk tampilan form.
* constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
* Membuat variabel inputEmailElement untuk tampilan input email.
* constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
* Membuat variabel inputPasswordElement untuk tampilan input password.
* constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
* constant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/**
* Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
* constant {string}
*/
const expectedPassword = 'superpassword';

/* menambahkan aksi klik buttom */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

/**
* Membuat variabel email untuk menyimpan data email ketika klik button.
* constant {string}
*/
  const email = inputEmailElement.value;
  
/** 
* Membuat variabel password untuk menyimpan data password ketika klik button.
* constant {string}
*/
  const password = inputPasswordElement.value;
  
 /* Memastikan email dan password yang di inputkan sesuai dengan data yang tersimpan */
  if (email == expectedEmail && password == expectedPassword) {
 /* Apabila sesuai maka masuk ke menu home */
    goToHome();
    
 /* Apabila tidak sesuai maka muncul popup */
  } else {
    showPopUp();
  }
});
