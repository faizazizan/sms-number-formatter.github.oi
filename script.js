document.getElementById('formatButton').addEventListener('click', function () {
    const inputNumbers = document.getElementById('phoneNumbers').value;
    const formattedNumbers = formatPhoneNumbers(inputNumbers);
    displayFormattedNumbers(formattedNumbers);
});

function formatPhoneNumbers(inputNumbers) {
    // Split input by line breaks and remove empty lines
    const lines = inputNumbers.split('\n').filter(line => line.trim() !== '');

    // Format each valid phone number
    const formattedNumbers = lines.map(line => {
        const trimmedLine = line.trim();
        
        // Remove non-digit characters (e.g., spaces, hyphens, and other symbols)
        const sanitizedNumber = trimmedLine.replace(/\D/g, '');

        // Check if it starts with "61" and replace with "601"
        if (sanitizedNumber.startsWith('61')) {
            return '601' + sanitizedNumber.substring(2);
        }
        // Check if it starts with "1" and replace with "601"
        else if (sanitizedNumber.startsWith('1')) {
            return '601' + sanitizedNumber.substring(1);
        } 
        // Check if it starts with "01" and replace with "601"
        else if (sanitizedNumber.startsWith('01')) {
            return '601' + sanitizedNumber.substring(2);
        } 
        // Check if it starts with "0" and add "6" in front of "0"
        else if (sanitizedNumber.startsWith('0')) {
            return '6' + sanitizedNumber.substring(1);
        } else {
            // For all other cases, add "601" to the beginning
            return '601' + sanitizedNumber;
        }
    });

    return formattedNumbers;
}

function displayFormattedNumbers(formattedNumbers) {
    const formattedNumbersDiv = document.getElementById('formattedNumbers');
    formattedNumbersDiv.innerHTML = '<h2>Formatted Numbers:</h2>';
    const ul = document.createElement('ul');
    formattedNumbers.forEach(number => {
        const li = document.createElement('li');
        li.textContent = number;
        ul.appendChild(li);
    });
    formattedNumbersDiv.appendChild(ul);
}
