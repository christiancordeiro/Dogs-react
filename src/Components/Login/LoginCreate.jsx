import React, { useContext } from "react"
import Input from "../Form/Input"
import Button from "../Form/Button"
import useForm from "../../Hooks/useForm"
import { USER_POST } from "../../api"
import { UserContext } from "../../UserContext"

const LoginCreate = () => {
  const username = useForm()
  const email = useForm("email")
  const password = useForm()

  const { userLogin } = useContext(UserContext)

  async function handleSubmit(e) {
    e.preventDefault()
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    const response = await fetch(url, options)
    if (response.ok) userLogin(username.value, password.value)
    console.log(response)
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="usuario" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="senha" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  )
}

export default LoginCreate
