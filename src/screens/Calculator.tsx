import React from 'react'
import { Text, View } from 'react-native'
import commonStyles from '../themes/appTheme';
import { useCalc } from '../hooks/useCalc';
import { ButtonsContainer } from '../components/ButtonsContainer';


export const Calculator = () => {

  const {
    value, previousValue, reset, setNumberSign, deleteLastValue, setNumber,  operation, doCalc
  } = useCalc();

  const renderPreviousValue = 
    previousValue !== '0' &&
    (
      <Text style={commonStyles.previousResults}>
        {previousValue}
      </Text>    
    )

  return (
    <View style={commonStyles.container}>
      {renderPreviousValue}
      <Text style={commonStyles.result} numberOfLines={1} adjustsFontSizeToFit >
        {value}
      </Text>
      <ButtonsContainer 
        reset={reset}
        setNumberSign={setNumberSign}
        deleteLastValue={deleteLastValue}
        operation={operation}
        setNumber={setNumber}
        doCalc={doCalc}
      />
    </View>
  )
}
