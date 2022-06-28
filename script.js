// This tells the browser to pay attention to the following elements:
const form = document.getElementById("form");
const email = document.getElementById("email");

// This tells the browser to prevent the form from submitting by default:
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = email.value;
  const small = form.querySelector("small");

  // When the input is empty or invalid, do this:
  if (!isValidEmail(emailInput)) {
    form.classList.add("error");
    small.innerText = "Please provide a valid email";

    // When the input is valid, do this:
  } else {
    form.classList.remove("error");
    document.body.innerHTML = "Thank You! We will keep you updated!";
  }
});
// REGEX = Regular Expression
function isValidEmail(emailInput) {
  return /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(emailInput);
}
