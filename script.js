const container = document.getElementById("container");

// Creates Desired Row x Column size
function makeGrid(rows, cols) 
{
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++)
    {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "cell";
    }
}

makeGrid(4, 4);