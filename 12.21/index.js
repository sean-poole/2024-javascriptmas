import { toysRequested } from './data.js'

/*
The run up to Christmas is quite a data-intensive time for Santa. In order to understand market trends, Santa's Data Elves have collated sample children’s wish list data from 4 locations and now need to know which was the most popular toy requested overall. This will help with procurement for next year. 

**Task**
- Your task is to find the most requested toy from the array of objects “toysRequested”. But remember: some toys appear in more than one location!

Expected output: "The most popular toy is 🎲 board games with 9000 requests.""

**Stretch Goal**
- Complete this challenge using the .flatMap() method to work with the various "toys" arrays.

*/ 

function requestedToyCount(toysRequested) {
  const toyCount = {};

  for (const obj of toysRequested) {
    for (const toy of obj.toys) {
      const [toyName, toyRequests] = Object.entries(toy)[0];
      
      if (toyCount[toyName]) {
        toyCount[toyName] += toyRequests;
      } else {
        toyCount[toyName] = toyRequests;
      }
    }
  }

  let mostPopularToy = null;
  let maxRequests = 0;

  for (const [toyName, count] of Object.entries(toyCount)) {
    if (count > maxRequests) {
      mostPopularToy = toyName;
      maxRequests = count;
    }
  }

  return `The most popular toy is ${mostPopularToy} with ${maxRequests} requests.`;
}

console.log(requestedToyCount(toysRequested));
