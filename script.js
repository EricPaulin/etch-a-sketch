const square = document.getElementById("square");

// Creates Row x Columns
function makeGrid(rows, cols) 
{
    square.style.setProperty('--grid-rows', rows);
    square.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++)
    {
        let cell = document.createElement('div');
        square.appendChild(cell).className = 'cell';
    }
}

makeGrid(16, 16);

// Default Color is Black
square.addEventListener('mouseover', function (e) 
{
    e.target.style.background = 'black';
});

// Pastel (Random select values)
function pastel(e) {
   const pastelChoices = ['#CCF1FF', '#E0D7FF', '#FFCCE1', '#D7EEFF', '#FAFFC7'];
   let randomColor = Math.floor(Math.random() * 5);
   let randomPastel = pastelChoices[randomColor];
   e.target.style.background = randomPastel;
}

// Buttons 
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => 
{
    btn1.addEventListener('click', () =>
    {
        square.addEventListener('mouseover', function (e) 
        {
            e.target.style.background = 'black';
        });
    });
    btn2.addEventListener('click', () =>
    {
        square.addEventListener('mouseover', function (e) 
        {
            e.target.style.background = 'cornflowerblue';
        });
    });
    btn3.addEventListener('click', () =>
    {
        square.addEventListener('mouseover', function (e) 
        {
            e.target.style.background = 'firebrick';
        });
    });
    btn4.addEventListener('click', () =>
    {
        square.addEventListener('mouseover', function (e) 
        {
            pastel(e);
        });
    });
    btn5.addEventListener('click', () =>
    {
        square.addEventListener('mouseover', function (e) 
        {
            e.target.style.background = 'white';
        });
    });
});