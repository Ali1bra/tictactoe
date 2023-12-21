const box = document.querySelectorAll('.box');
const shift = document.querySelector('.shift');
const reset = document.querySelector('.reset');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');



box.forEach(b => {
    b.addEventListener('click', () => {
        b.style.fontSize = '100px';
        if (!b.innerHTML.trim()) { // Tjekker om innerHTML er tomt
            if (shift.style.backgroundColor === 'red') {
                b.innerHTML = 'X';
                shift.style.backgroundColor = 'blue'; // Ændrer baggrundsfarven til blå (eller din ønskede farve)
            } else {
                b.innerHTML = 'O';
                shift.style.backgroundColor = 'red'; // Ændrer baggrundsfarven til rød
            }
        }
        
        if (one.innerHTML === 'X') {
            console.log('hej');
        }
       
    });

    
});


reset.addEventListener('click', () => {
    box.forEach(b => {
        b.innerHTML = '';
    })
})

