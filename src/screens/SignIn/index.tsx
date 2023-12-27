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

import {
  Container,
  Logo,
  Header,
  Title,
  Form,
  Footer,
  WrapperRegister
} from './styles'
import { useUser } from '../../hooks/useUser'
import { NativeStackPublicRoutesProps } from '../../routes/public.routes'
import { mockLogin } from '../../service/mockServices'

export function SignIn() {
  const navigation = useNavigation<NativeStackPublicRoutesProps>()
  const { setUser } = useUser()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignIn() {
    try {
      setLoading(true)
      const response = await mockLogin(email, password)
      if (response.success) {
        setUser({ name: 'X', email, password })
      } else {
        Alert.alert('Erro na autenticação', response.message)
      }
    } catch (error) {
      console.log('[ERROR handleSignIn]', error)
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, verifique as credenciais'
      )
    } finally {
      setLoading(false)
    }
  }

  function handleNewAccount() {
    navigation.navigate('Register')
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <Logo source={LogoPng} />

          <Header>
            <Title>Faça seu login para começar</Title>
          </Header>

          <Form>
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
              title="Login"
              onPress={handleSignIn}
              enabled
              loading={loading}
            />

            <WrapperRegister>
              <Button
                title="Criar conta gratuita"
                color={theme.colors.white}
                light
                onPress={handleNewAccount}
                enabled
                loading={false}
              />
            </WrapperRegister>
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
