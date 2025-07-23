const passwordInput = document.getElementById("password");
const resultDiv = document.getElementById("result");

passwordInput.addEventListener("input", function () {
  const pwd = passwordInput.value;
  let messages = [];

  if (pwd.length < 8) messages.push("At least 8 characters");
  if (!/[A-Z]/.test(pwd)) messages.push("At least one uppercase letter");
  if (!/[a-z]/.test(pwd)) messages.push("At least one lowercase letter");
  if (!/[0-9]/.test(pwd)) messages.push("At least one number");
  if (!/[^A-Za-z0-9]/.test(pwd))
    messages.push("At least one special character");

  if (messages.length === 0) {
    resultDiv.textContent = "Strong password!";
    resultDiv.className = "result valid";
  } else {
    resultDiv.textContent = "Missing: " + messages.join(", ");
    resultDiv.className = "result invalid";
  }
});
