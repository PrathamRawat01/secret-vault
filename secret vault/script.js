function submitPassword() {
  var password = document.getElementById("password").value;
  if (password === "safeassafe") {
    window.location.href = "secret files";
  } else {
    alert("Incorrect password. Please try again.");
  }
}