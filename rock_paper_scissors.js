const rspList = ['Rock', 'Paper', 'Scissors'];


let tuna = 0;
let gozde = 0;
let even = 0;
for (let i=0; i < 100000; i++) {
    let gossHand = rspList[Math.floor(Math.random() * 3)];
    let tunnHand = rspList[Math.floor(Math.random() * 3)];

    if (gossHand ==='Rock' && tunnHand === 'Paper') {
        tuna++;
    } else if (gossHand ==='Rock' && tunnHand === 'Scissors') {
        gozde++;
    } else if (gossHand ==='Paper' && tunnHand === 'Rock') {
        gozde++;
    } else if (gossHand ==='Paper' && tunnHand === 'Scissors') {
        tuna++;
    } else if (gossHand ==='Scissors' && tunnHand === 'Rock') {
        tuna++;
    } else if (gossHand ==='Scissors' && tunnHand === 'Paper') {
        gozde++;
    } else {
        even++;
    }
}

console.log(`Gözde = ${gozde}`);
console.log(`Tuna = ${tuna}`);
console.log(`Even = ${even}`);