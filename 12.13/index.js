// Santa needs your help to figure out if he has enough money to give everyone change!
// Your goal will be to return true if everyone gets their correct change, and false if at least one person does not receive their correct change! Use the function below to get started!

// Good luck and happy coding!!

const FEE = 5;

function correctChangeFromSanta(bills) {
    const wallet = {
        5: 0,
        10: 0,
        20: 0
    };

    return bills.reduce((acc, c) => {
        ++wallet[c];

        const change = c - FEE;

        return canProvideChange(wallet, change) && acc;
    }, true);
}

function canProvideChange(wallet, amount) {
    if (amount === 0) return true;

    if (amount >= 20 && wallet[20]) {
        --wallet[20];
        return canProvideChange(wallet, amount - 20);
    } else if (amount >= 10 && wallet[10]) {
        --wallet[10];
        return canProvideChange(wallet, amount - 10);
    } else if (amount >= 5 && wallet[5]) {
        --wallet[5];
        return canProvideChange(wallet, amount - 5);
    }

    return false;
}





// You can leave this code as is, this will simply console.log() different text depending on if the test case returns true or false. Feel free to add additional test cases if you would like!

// Should return true
if (correctChangeFromSanta([5,5,5,10,20])) {
    console.log("Nice job Santa, everyone got their correct change!")
}else {
    console.log("Looks like you have some work to do Santa, and bring some money next time!")
}

// Should return false
if (correctChangeFromSanta([5,5,10,10,20])) {
    console.log("Nice job Santa, everyone got their correct change!")
}else {
    console.log("Looks like you have some work to do Santa, and bring some money next time!")
}