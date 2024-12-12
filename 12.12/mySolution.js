const hackedBtn = document.createElement("button");
hackedBtn.textContent = "Click Me";

document.body.appendChild(hackedBtn);
hackedBtn.addEventListener("click", () => {
  console.log("You have been hacked 🏴‍☠️");
});

const prodTitle = document.querySelector(".prod-title");
prodTitle.textContent = "Do Not Buy This Product";
