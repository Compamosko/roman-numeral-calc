document.getElementById('convert-btn').addEventListener('click', function() {
    let inputNumber = document.getElementById('number').value.trim();
    let outputDiv = document.getElementById('output');

    if (!inputNumber) {
        outputDiv.textContent = "Please enter a valid number";
        return;
    }

    inputNumber = parseInt(inputNumber, 10);

    if (isNaN(inputNumber)) {
        outputDiv.textContent = "Please enter a valid number";
        return;
    }

    if (inputNumber < 1) {
        outputDiv.textContent = "Please enter a number greater than or equal to 1";
        return;
    }

    if (inputNumber >= 4000) {
        outputDiv.textContent = "Please enter a number less than or equal to 3999";
        return;
    }

    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let romanString = '';
    for (let i = 0; i < romanNumerals.length; i++) {
        while (inputNumber >= romanNumerals[i].value) {
            romanString += romanNumerals[i].numeral;
            inputNumber -= romanNumerals[i].value;
        }
    }

    outputDiv.textContent = romanString;
});
