const rspList = ['Rock', 'Paper', 'Scissors'];

let gossHand = rspList[Math.floor(Math.random() * 3)];
let tunnHand = rspList[Math.floor(Math.random() * 3)];


console.log(gossHand);
console.log(tunnHand);

if (gossHand ==='Rock' && tunnHand === 'Paper') {
    console.log('Tuna Win!');
} else if (gossHand ==='Rock' && tunnHand === 'Scissors') {
    console.log('Gözde Win!');
} else if (gossHand ==='Paper' && tunnHand === 'Rock') {
    console.log('Gözde Win!');
} else if (gossHand ==='Paper' && tunnHand === 'Scissors') {
    console.log('Tuna Win!');
} else if (gossHand ==='Scissors' && tunnHand === 'Rock') {
    console.log('Tuna Win!');
} else if (gossHand ==='Scissors' && tunnHand === 'Paper') {
    console.log('Gözde Win!');
} else {
    console.log('Even!');
}
