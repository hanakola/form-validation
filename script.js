document
  .getElementById("first-name")
  .addEventListener("blur", validateFirstName);
document.getElementById("surname").addEventListener("blur", validateSurname);
document.getElementById("email").addEventListener("blur", validateEmail);
document
  .getElementById("phone-number")
  .addEventListener("blur", validatePhoneNumber);
document.getElementById("postcode").addEventListener("blur", validatePostcode);

function validateFirstName() {
  const firstName = document.getElementById("first-name");
  const regex = /^[a-zA-Z]{2,15}$/;

  if (!regex.test(firstName.value)) {
    firstName.classList.add("is-invalid");
  } else {
    firstName.classList.remove("is-invalid");
  }
}

function validateSurname() {
  const surname = document.getElementById("surname");
  const regex = /^[a-zA-Z]{2,25}$/;

  if (!regex.test(surname.value)) {
    surname.classList.add("is-invalid");
  } else {
    surname.classList.remove("is-invalid");
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!regex.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}

function validatePhoneNumber() {
  const phoneNumber = document.getElementById("phone-number");
  const regex = /^[0]\d{4}[ ]?\d{3}[ ]?\d{3}$/;

  if (!regex.test(phoneNumber.value)) {
    phoneNumber.classList.add("is-invalid");
  } else {
    phoneNumber.classList.remove("is-invalid");
  }
}

function validatePostcode() {
  const postcode = document.getElementById("postcode");
  const regex = /^[a-zA-Z]{1,2}[0-9]{1,2}([a-zA-Z]{1})?[ ]?[0-9]{1}[a-zA-Z]{2}$/;

  if (!regex.test(postcode.value)) {
    postcode.classList.add("is-invalid");
  } else {
    postcode.classList.remove("is-invalid");
  }
}
