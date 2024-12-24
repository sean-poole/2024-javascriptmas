import { codedMessage } from './codedMessage.js'

/*
codedMessage.js holds a coded message (well, the name makes it obvious, huh?).

**Task**
- Decode the message!

key.md will help!

**Stretch Goal**
No stretch goal for the final day. Just stretch your legs!
*/ 

function decode(codedMessage) {
  let message = "";

  for (const code of codedMessage) {
    let ascii = parseInt(code, 2) - 10;

    if (ascii < 32) {
      ascii = 128 - (32 - ascii);
    }

    message += String.fromCharCode(ascii);
  }

  return message;
}

console.log(decode(codedMessage));
