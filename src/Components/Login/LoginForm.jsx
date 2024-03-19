import React, { useState } from "react"
import { Link } from "react-router-dom"
import Input from "../Form/Input"
import Button from "../Form/Button"
import useForm from "../../Hooks/useForm"

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  function handleSubmit(e) {
    e.preventDefault()

    if (username.validate() && password.validate()) {
      fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((response) => {
          console.log(response)
          return response.json()
        })
        .then((json) => {
          console.log(json)
          return json
        })
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