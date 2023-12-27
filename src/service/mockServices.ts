type User = {
  email: string
  password: string
}

const fakeDatabase: User[] = [
  { email: 'usuarioexistente@teste.com', password: 'senha123' }
]

export const mockLogin = async (
  email: string,
  password: string
): Promise<{ success: boolean; message: string }> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (email === 'usuario@teste.com' && password === 'senha123') {
    return { success: true, message: 'Login bem-sucedido!' }
  } else {
    return { success: false, message: 'Usuário ou senha incorretos.' }
  }
}

export const mockRegister = async (
  name: string,
  email: string,
  password: string
): Promise<{ success: boolean; message: string }> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const userExists = fakeDatabase.some((user) => user.email === email)

  if (userExists) {
    return { success: false, message: 'Usuário já cadastrado.' }
  } else {
    return { success: true, message: 'Cadastro realizado com sucesso!' }
  }
}
