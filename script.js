const getUserInput = function () {
    const userInputValue = document.querySelector('input').value;
    return userInputValue;
}

const splitIntoArray = function (userInputValue) {
    const split = userInputValue.split(' ');
    return split;
}

const validateInput = function (inputValue) {
    const regex = /^([0-9]{1,},[0-9]{2})$/;
    const splited = splitIntoArray(inputValue);

    const result = splited.every(value => regex.test(value));
    return result;
}

const sumAndDivide = function (listOfNumbers) {
    const result = listOfNumbers.reduce((a, b) => a + b);
    return result / 100;
}

const showInHTML = function (result) {
    const formatedOutput = String(result.toFixed(2)).replace('.', ',')
    document.querySelector('span.result').innerHTML = formatedOutput
}

const errorFunction = function () {
    const msg = `
        <div class="error-mensage">
            <h2>Erro! Verifique se possui um dos seguintes problemas:</h2>
            <ul>
                <li>Espaços vazios no começo ou no final da sentença;</li>
                <li>Espaços duplos;</li>
                <li>Letras junto aos números;</li>
                <li>Formatação errada: "X,XX", entre cada número decimal a ser somado é necessário um espaço;</li>
            </ul>
        <div>
    `
    document.querySelector('span.result').innerHTML = msg
}

const main = function () {
    const input = getUserInput();
    try {
        if (validateInput(input)) {
            const splited = splitIntoArray(input);

            const numberListNoComma = splited.map((value) => {
                const newValue = value.replace(',', '');
                return parseFloat(newValue);
            })

            const result = sumAndDivide(numberListNoComma)
            showInHTML(result)
        }
        else {
            throw errorFunction()
        }
    } catch (e) { console.log(e); }
}
