function main() {
    const userInput = getInputValue()

    if (auditUserInput(userInput) == true) {
        return showErrorMensage()
    } else {
        const inputNumbers = transformToArrayOfNumbers(userInput)
        const sum = inputNumbers.reduce((prev, current) => {
            return prev + current
        })

        const Result = sum / 100
        document.getElementById('result').innerHTML = Result
    }
}

function getInputValue() {
    const inputValue = document.getElementById('inputToConvert').value
    return inputValue
}

function transformToArrayOfNumbers(userInput) {
    const inputArray = userInput.split(" ");
    const formatedArray = inputArray.map((value) => {
        const removeComma = value.replace(',', '')
        const transformedToNumber = parseInt(removeComma)
        return transformedToNumber
    })
    return formatedArray
}

function auditUserInput(inputValue) {
    const InitialEndSpacePattern = /^\s|\s$/g;
    const isALetter = /[A-Z]/ig;
    if (InitialEndSpacePattern.test(inputValue) == true) { return true }
    if (isALetter.test(inputValue) == true) { return true }
}

function showErrorMensage() {
    const errorMensage = 'Erro! Verifique se há letras ou espaços no começo ou no final da entrada de dados! \n '
    document.getElementById('result').innerHTML = errorMensage

}
