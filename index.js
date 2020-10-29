document.addEventListener("DOMContentLoaded", function() {
    const bodyText = document.querySelector("#text")
    bodyText.innerHTML = "This is really cool!"
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );