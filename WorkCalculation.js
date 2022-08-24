const buttons = document.querySelectorAll('button')
const obj = {
    num1: [],
    sign: [],
    signValue: [],
    num2: []
};

const display = document.querySelector('input')

buttons.forEach (elem => {
    elem.addEventListener('click', function getValue() {
        display.focus()
        const value = elem.getAttribute('value')
        const sign = elem.hasAttribute('act')

        if (sign) {
            if (value === '='){
                obj.num2 = display.value
                switch (obj.signValue) {
                    case '+':
                        obj.num1 = parseFloat(obj.num1) + parseFloat(obj.num2);
                        break;
                    case '-':
                        obj.num1 = parseFloat(obj.num1) - parseFloat(obj.num2);
                        break;
                    case '*':
                        obj.num1 = parseFloat(obj.num1) * parseFloat(obj.num2);
                        break;
                    case '/':
                        if (parseFloat(obj.num2) === 0) {
                            alert( 'Бесконечность' );
                            obj.num1 = [];
                            obj.num2 = [];
                            obj.sign = [];
                            obj.signValue = [];
                        } else {
                            obj.num1 = parseFloat(obj.num1) / parseFloat(obj.num2);//доработать деление на 0
                        }
                        break;
                    default:
                        console.log ('error');//возможно нужно убрать
                }
                obj.num1 = String(obj.num1)
                display.value = obj.num1
                obj.sign = []
                obj.num2 = []
            } else if (obj.sign == true){
                obj.num2 = display.value
                obj.sign = sign
                obj.signValue = value
                switch (obj.signValue) {
                    case '+':
                        obj.num1 = parseFloat(obj.num1) + parseFloat(obj.num2);
                        break;
                    case '-':
                        obj.num1 = parseFloat(obj.num1) - parseFloat(obj.num2);
                        break;
                    case '*':
                        obj.num1 = parseFloat(obj.num1) * parseFloat(obj.num2);
                        break;
                    case '/':
                        if (parseFloat(obj.num2) === 0) {
                            alert( 'Бесконечность' );
                            obj.num1 = [];
                            obj.num2 = [];
                            obj.sign = [];
                            obj.signValue = [];
                        } else {
                            obj.num1 = parseFloat(obj.num1) / parseFloat(obj.num2);//доработать деление на 0
                        }
                        break;
                    default:
                        console.log ('error');//возможно нужно убрать
                }
                obj.num1 = String(obj.num1)
                display.value = []
                obj.num2 = []
            } else {
                obj.num1 = display.value
                obj.sign = sign
                obj.signValue = value
                display.value = []
            }
        } else if (obj.sign == true) {
            obj.num2 += value
            if (value == '.') {
                display.value = obj.num2 + '0' 
            } else {
                display.value = obj.num2
            }
        } else {
            obj.num1 += value
            if (value == '.') {
                display.value = obj.num1 + '0' 
            } else {
                display.value = obj.num1
            }            
        }
    })
});