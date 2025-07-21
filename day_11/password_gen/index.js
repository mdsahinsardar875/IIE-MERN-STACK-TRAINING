const lengthElm = document.getElementById("length");
const uppercaseElm = document.getElementById("uppercase");
const lowercaseElm = document.getElementById("lowercase");
const numbersElm = document.getElementById("numbers");
const symbolsElm = document.getElementById("symbols");
const generateElm = document.getElementById("generate");
const passwordElm = document.getElementById("password");
const copyElm = document.getElementById("copy");
const copiedMsgElm = document.getElementById("copied-msg");

const generatePassword = () => {
  const length = parseInt(lengthElm.value);
  const hasUppercase = uppercaseElm.checked;
  const hasLowercase = lowercaseElm.checked;
  const hasNumbers = numbersElm.checked;
  const hasSymbols = symbolsElm.checked;

  const password = generatePasswordHelper(length, hasUppercase, hasLowercase, hasNumbers, hasSymbols);
  passwordElm.innerText = password;
};

const generatePasswordHelper = (length, hasUppercase, hasLowercase, hasNumbers, hasSymbols) => {
  let chars = "";
  if (hasUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (hasLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
  if (hasNumbers) chars += "0123456789";
  if (hasSymbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

  if (chars.length === 0) {
    return "Please select at least one character type.";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }
  return password;
};

generateElm.addEventListener("click", generatePassword);

copyElm.addEventListener("click", () => {
  const password = passwordElm.innerText;
  if (!password || password.includes("Please select")) return;

  
  navigator.clipboard.writeText(password).then(() => {
    // Add animation class to highlight
    passwordElm.classList.add("highlight");
    copiedMsgElm.classList.remove("hidden");

    setTimeout(() => {
      passwordElm.classList.remove("highlight");
      copiedMsgElm.classList.add("hidden");
    }, 1500);
  });
});
