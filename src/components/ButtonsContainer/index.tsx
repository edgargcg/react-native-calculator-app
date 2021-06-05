import React from 'react'
import { View } from 'react-native'
import { Operators } from '../../enums/Operators';
import { Button } from '../Button';
import commonStyles from '../../themes/appTheme';

interface Props{
  reset: () => void,
  setNumberSign: () => void,
  deleteLastValue: () => void,
  operation: (value: any) => void,
  setNumber: (number: string) => void,
  doCalc: () => void,
}

export const ButtonsContainer = (props: Props) => {
  const { reset, setNumberSign, deleteLastValue, operation, setNumber, doCalc } = props

  return (
    <>
      <View style={commonStyles.buttonContainer}>
        <Button text="C" backgroundColor="gray" fontColor="darkGray" onClick={reset} />
        <Button text="+/-" backgroundColor="gray" fontColor="darkGray" onClick={setNumberSign} />
        <Button text="del" backgroundColor="gray" fontColor="darkGray" onClick={deleteLastValue} />
        <Button text="/" backgroundColor="orange" onClick={() => operation(Operators.divide)} />
      </View>
      <View style={commonStyles.buttonContainer}>
        <Button text="7" onClick={setNumber} />
        <Button text="8" onClick={setNumber} />
        <Button text="9" onClick={setNumber} />
        <Button text="X" backgroundColor="orange" onClick={() => operation(Operators.multiply)}  />
      </View>
      <View style={commonStyles.buttonContainer}>
        <Button text="4" onClick={setNumber} />
        <Button text="5" onClick={setNumber} />
        <Button text="6" onClick={setNumber} />
        <Button text="-" backgroundColor="orange" onClick={() => operation(Operators.substract)}  />
      </View>
      <View style={commonStyles.buttonContainer}>
        <Button text="1" onClick={setNumber} />
        <Button text="2" onClick={setNumber} />
        <Button text="3" onClick={setNumber} />
        <Button text="+" backgroundColor="orange" onClick={() => operation(Operators.add)}  />
      </View>
      <View style={commonStyles.buttonContainer}>
        <Button text="0" fillAnchor onClick={setNumber} />
        <Button text="." onClick={setNumber} />
        <Button text="=" backgroundColor="orange" onClick={doCalc}  />
      </View>
    </>
  )
}
