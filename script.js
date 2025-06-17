const bouton = document.querySelectorAll('.btn');
const display = document.querySelector('.display')
bouton.forEach(bouton => {
    bouton.addEventListener('click', () => {
        const value = bouton.textContent;
        if (value === 'C') {
            display.value = '';
        } else if (value === '=') {
            display.value = eval(display.value);
        } else {
            display.value += value;
        }
    });
});