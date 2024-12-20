const elfFirstNames = [
  "Aurora", "Blitzen", "Crispin", "Dazzle", "Evergreen", "Frost", "Glimmer",
  "Holly", "Icicle", "Joyful", "Kringle", "Luna", "Merry", "Nutmeg",
  "Olwen", "Pine", "Quill", "Razzle", "Sparkle", "Tinsel", "Umbra",
  "Vixen", "Whisk", "Xylo", "Yule", "Zippy"
];

let elfNamesArray = [];

const elfLastNames = [
  "Applecheeks", "Bells", "Candycane", "Dazzlebright", "Everbright", "Frostwhisk",
  "Gingersnap", "Hollyberry", "Icestorm", "Jovial", "Kindleflame", "Lightwhisper",
  "Merrysprout", "Nutcracker", "Oakenleaf", "Peppermint", "Quicksilver", "Raindrop",
  "Snowdust", "Twinkletoes", "Underwood", "Velvet", "Winterberry", "Xylospark",
  "Yuletide", "Zestwind"
];

document.getElementById("generate-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const firstName = document.querySelector("input[name='first-name']").value;
  const lastName = document.querySelector("input[name='last-name']").value;

  if (firstName && lastName) {
    generateNewName(firstName, lastName);
    form.reset();
    document.querySelector("input[name='first-name']").focus();
  } else {
    console.log("Please fill out the form!");
  }
});

function generateNewName(firstName, lastName) {
  const newFirst = elfFirstNames.filter(name => name.startsWith(firstName[0].toUpperCase()));
  const newLast = elfLastNames.filter(name => name.startsWith(lastName[0].toUpperCase()));

  const elfName = `${newFirst} ${newLast}`;

  if (!elfNamesArray.includes(elfName)) {
    elfNamesArray.push(elfName);
    renderName(elfNamesArray);
  } else {
    "We already have someone registered under that name. Please try again.";
  }
}

function renderName(array) {
  if (elfNamesArray.length > 0) {
    const listElement = document.getElementById("elf-names-list");
    listElement.innerHTML = "";

    array.forEach(name => {
      const li = document.createElement("li");
      li.textContent = name;
      listElement.appendChild(li);
    });
  }
}


/*
 * 🎅 Task:
 * - Generate an elf first and last name that matches the user’s first and last name initials, then display it on the screen.
 * - Example: if the user’s name is "John Doe," the elf name could be "Joyful Dazzle."
 * - Display the generated elf names in the "Registered Employees" list.
 */

/*
 * 🌟 Stretch Goals:
 * - Generate the elf names using an LLM API (like HuggingFace). 
 * - Don't save the same name twice. (not necessary for the normal task)
 * - Make sure to use Scrimba's environment variables feature so you don't expose your API key 
 */ 
