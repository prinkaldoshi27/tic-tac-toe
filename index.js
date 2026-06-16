let turn = 'X';
const cells = document.querySelectorAll('.cell');

// Predefine winning combinations (indexes instead of IDs for less DOM calls)
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
];

function checkWinner() {
    // Find the actual winning combination
    const winCombo = winningCombinations.find(([a, b, c]) =>
        cells[a].innerText === turn &&
        cells[b].innerText === turn &&
        cells[c].innerText === turn
    );

    if (winCombo) {
        const [a, b, c] = winCombo; // Destructure here
        cells[a].classList.add("winner");
        cells[b].classList.add("winner");
        cells[c].classList.add("winner");
        
        return true;
    }
    return false;
}

function reset() {
    cells.forEach((cell) => {
        cell.innerText = "";
        cell.classList.remove("winner");
    })
}
cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.innerText !== "") return;

        cell.innerText = turn;
        
        if (checkWinner()) {
            // Allow DOM to update before showing alert
            setTimeout(() => {
                alert(`Player ${turn} wins!`);
                reset();
            }, 900);
            return; // Stop game if won
        }

        turn = turn === 'X' ? 'O' : 'X';
    });
});
