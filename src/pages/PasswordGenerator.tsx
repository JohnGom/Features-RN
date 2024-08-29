import { Text, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4')
    .max(16, 'Should be max of 4')
    .required('Lenght is required')
})

const PasswordGenerator = () => {

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [numbers, useNumbers]  = useState(false)
  const [symbols, useSymbols] = useState(false)
  
  const generatePasswordString = (passwordLength: number) => {
    
  }

  const createPassword = (characters: string, passwordLength: number ) => {
    
  }
  return (
    <View>
      <Text>PasswordGenerator</Text>
    </View>
  )
}

export default PasswordGenerator