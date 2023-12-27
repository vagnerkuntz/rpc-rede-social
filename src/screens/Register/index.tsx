import LogoPng from '@assets/rpc.png'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { PasswordInput } from '@components/PasswordInput'
import { useNavigation } from '@react-navigation/native'
import theme from '@theme/index'
import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  StatusBar
} from 'react-native'
import { NativeStackPublicRoutesProps } from 'src/routes/public.routes'

import { Container, Logo, Header, Title, Form, Footer } from './styles'
import { mockRegister } from '../../service/mockServices'

export function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation<NativeStackPublicRoutesProps>()

  async function handleRegister() {
    if (!name || !email || !password) {
      Alert.alert('Preencha todos os campos')
      return
    }

    try {
      setLoading(true)
      const response = await mockRegister(name, email, password)
      if (response.success) {
        Alert.alert('Cadastro realizado com sucesso!')
        navigation.navigate('SignIn')
      } else {
        Alert.alert('Erro no cadastro', response.message)
      }
    } catch (error) {
      console.log('[ERROR handleRegister]', error)
      Alert.alert(
        'Erro no cadastro',
        'Ocorreu um erro ao fazer cadastro, tente novamente'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <Container>
            <Logo source={LogoPng} />

            <Header>
              <Title>Preencha todas as informações</Title>
            </Header>

            <Form>
              <Input
                iconName="user"
                placeholder="Nome Completo"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={setName}
                value={email}
              />

              <Input
                iconName="mail"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={setEmail}
                value={email}
              />

              <PasswordInput
                iconName="lock"
                placeholder="Senha"
                onChangeText={setPassword}
                value={password}
              />
            </Form>

            <Footer>
              <Button
                title="Criar conta"
                onPress={handleRegister}
                enabled
                loading={loading}
              />

              <Button
                title="Voltar para Login"
                color={theme.colors.white}
                light
                onPress={() => navigation.navigate('SignIn')}
                enabled
                loading={false}
              />
            </Footer>
          </Container>
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
