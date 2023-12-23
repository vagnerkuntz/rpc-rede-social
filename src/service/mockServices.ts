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
