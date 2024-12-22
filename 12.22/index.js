import { addresses } from './addresses.js'
const icons = ["./icons/bauble.png", "./icons/candy-cane.png"];

/*
Writing out labels by hand is a real pain. Luckily, you are so organised that you have all of your contacts saved in an array.

But not all of your contacts are on your Christmas list. So your task is this:

** Task ** 
1. Render a label for each entry in the address book, but only if isOnChistmasList is set to true! The label should contain the recipient's name and address.
2. Decorate the label with two festive icons from the icons folder. Use whatever colour scheme and layout you think looks good! 

** Stretch goals **
1. Ensure that the label does not get two of the same icon.
2. Create your own CSS Christmas logo to add a personal touch to each label.
*/

const labelsContainer = document.querySelector('.labels-container');

function makeCard(addresses) {
  for (const address of addresses) {
    if (address.isOnChristmasList) {
      let label = document.createElement("div");
      label.classList.add("label");
      
      let labelHtml = createLabel(address);
      label.innerHTML = labelHtml;
      labelsContainer.appendChild(label);
    }
  }
}

function createLabel(address) {
  return `
        <img class="icon" src="${icons[0]}" id="bauble" />
        <div class="line"></div>
        <div class="address">
          <h2 class="name">${address.name}</h2>
          <p>${address["address line 1"]}</p>
          <p>${address.town}, ${address.state}, ${address.country}</p>
        </div>
        <img class="icon" src="${icons[1]}" id="candy-cane" />
      `;
}

makeCard(addresses);
