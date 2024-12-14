/*
The cool people of Lapland are bored of traditional social media and have decided to build their own app called Northagram...and they need your help!

This is how the app should work:
- It displays circular avatars of the friends who have uploaded pictures lately. These avatars have a white border.
- Underneath, it cycles through the friends' pictures displaying each for 1.5 seconds. (There's an animated snowman loading state before pictures load.)
- While a friend's pictures are being displayed, that friend's avatar gets a red border.
- This red border reverts to white when their pictures have finished being displayed.
- When all of the images have been displayed, the user should see a message "Refresh to load latest images". All avatars should have a white border at this point.

Stretch Goals for dedicated Social Media Engineers

- Add captions to the images.
- Refactor your code to use generators!
- Grey out the avatar after that friend's pictures have been displayed.
- Make it so clicking on an image pauses the timer.
- Add left and right arrow overlays to the image so users can scroll back and forth.
*/

import { feedData } from './data.js'

const avatar = document.querySelector(".feed-avatars");
const image = document.querySelector(".feed-images");

let idx = 0;
let idy = 0;

for (const person of feedData) {
  const img = document.createElement("img");
  img.src = `./images/${person.avatarUrl}`;
  img.classList.add("avatar");
  avatar.appendChild(img);
}

const avatars = document.querySelectorAll(".avatar");
avatars[idx].classList.add("highlight");

function displayImage() {
  if (idy === feedData[idx].features.length) {
    avatars[idx++].classList.toggle("highlight");
    
    if (avatars.length > idx) {
      avatars[idx].classList.add("highlight");
    }

    idy = 0;
  }

  image.innerHTML = "";

  if (idx === feedData.length) {
    const p = document.createElement("p");
    p.innerText = "Refresh to load latest images";
    p.classList.add("ux-message");
    image.appendChild(p);
  } else {
    const imgObj = feedData[idx].features[idy];
    const img = document.createElement("img");
    img.src = `./images/${imgObj.imageUrl}`;
    img.classList.add("feature-image");
    img.alt = imgObj.alt;

    image.appendChild(img);
    idy++;

    setTimeout(displayImage, 1500);
  }
}

displayImage();