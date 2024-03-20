import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Input from "../Form/Input"
import Button from "../Form/Button"
import useForm from "../../Hooks/useForm"
import { TOKEN_POST, USER_GET } from "../../api"

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    if (token) getUser(token)
  }, [])

  async function getUser(token) {
    const { url, options } = USER_GET(token)

    const response = await fetch(url, options)
    const json = await response.json()
    console.log(json)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const { url, options } = TOKEN_POST({
      username: username.value,
      password: password.value,
    })

    if (username.validate() && password.validate()) {
      const response = await fetch(url, options)
      const json = await response.json()
      console.log(json)
      window.localStorage.setItem("token", json.token)
      getUser(json.token)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="usuario" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm
