const square = document.getElementById("square");

// Creates Desired Row x Column size
function makeGrid(rows, cols) 
{
    square.style.setProperty('--grid-rows', rows);
    square.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++)
    {
        let cell = document.createElement("div");
        square.appendChild(cell).className = "cell";
    }
}

makeGrid(16, 16);

square.addEventListener('mouseover', function (e) 
{
    e.target.style.background = 'black';
});