// Dice Roller

function rollDice() {
    const numofDice = document.getElementById(`Num`).value;
    const diceResult = document.getElementById(`diceResult`);
    const values = [];

    for(let i = 0; i < numofDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
    } 

    const diceChars = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    diceResult.textContent = values.map(value => diceChars[value]).join(" ");
}