import { useState } from "react";


export function useCalculationController() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  
  function isFirstNumberZero(currentNumber, operation) {
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0')
    setOperation(operation)
  }

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      isFirstNumberZero(currentNumber, '+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
      isFirstNumberZero(currentNumber, '-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }
 
  const handleMultiplyNumbers = () => {
    if(firstNumber === '0'){
      isFirstNumberZero(currentNumber, 'x')
    }else {
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiply))
      setOperation('')
    }
  }
  
  const handleDivisionNumbers = () => {
    if(firstNumber === '0'){
      isFirstNumberZero(currentNumber, '/')
    }
    else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case 'x':
            handleMultiplyNumbers();
            break;
          case '/':
            handleDivisionNumbers();
            break;
          default: 
            break;
        }
    }
  }

  return {
    handleOnClear,
    handleAddNumber,
    currentNumber,
    firstNumber,
    operation,
    handleSumNumbers,
    handleMinusNumbers,
    handleMultiplyNumbers,
    handleDivisionNumbers,
    handleEquals
  }
}