const jsInputFirstElement = document.querySelector('.jsInputFirstElement')
const jsInputSecondElement = document.querySelector('.jsInputSecondElement')
const jsBtnResultElement = document.querySelector('.jsBtnResultElement')
const jsTagPOutput = document.querySelector('.jsTagPOutput')
const jsSelectOperation = document.querySelector('.jsSelectOperation')


jsBtnResultElement.onclick = () => {
    jsTagPOutput.innerText = resultOperation({
        arg1: Number(jsInputFirstElement.value),
        arg2: Number(jsInputSecondElement.value),
        operation: jsSelectOperation.value
    });
};