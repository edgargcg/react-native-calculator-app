import { useRef, useState } from "react"
import { Operators } from "../enums/Operators"

export const useCalc = () => {
  const [value, setValue] = useState('0')
  const [previousValue, setPreviousValue] = useState("0")

  const lastOperator = useRef<Operators>()

  const reset = () => {
    setValue('0');
    setPreviousValue('0');
  }

  const setNumber = (number: string) => {
    if (value.includes('.') && number === '.') return;
    if (value.startsWith('0') || value.startsWith('-0')){
      if (
        number === '.'
        ||
        (
          number === '0'
          && value.includes('.')
        )
      ){
        setValue(value + number);
      }else if (
        number !== '0'
        && !value.includes('.')
      ){
        setValue(number);
      }else if(
        number === '0' && !value.includes('.')
      ){
        setValue(number);
      }else{
        setValue(value + number)    
      }

      return;
    }

    setValue(value + number)
  }

  const setNumberSign = () => {
    let newValue = '-' + value
    if (value.includes('-')) 
      newValue = value.replace('-', '');

    setValue(newValue)
  }

  const deleteLastValue = () => {
    const newValue = value.slice(0, -1);

    if (newValue === '' || newValue === '-'){
      reset();
      return;
    }
    
    setValue(newValue);
  }

  const rotateValue = () => {
    let prevValue = value;

    if (value.endsWith('.'))
      prevValue = value.slice(0, -1);

    setPreviousValue(prevValue);
    setValue('0');
  }

  const operation = (operation: any) => {
    rotateValue();
    lastOperator.current = operation
  }

  const doCalc = () => {
    const firstNumber = Number(value)
    const secondNumber = Number(previousValue)

    switch (lastOperator.current) {
      case Operators.add:
        setValue(`${firstNumber + secondNumber}`)
      break;
      case Operators.divide:
        setValue(`${ secondNumber / firstNumber}`)
      break;
      case Operators.multiply:
        setValue(`${firstNumber *  secondNumber}`)
      break;
      case Operators.substract:
        setValue(`${secondNumber - firstNumber}`)
      break;
    }

    setPreviousValue('0');
  }

  return {
    value, previousValue, reset, setNumberSign, deleteLastValue, setNumber, operation, doCalc
  }
}

