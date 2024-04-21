import React, { useEffect, useState } from "react"
import Input from "../Form/Input"
import useForm from "../../Hooks/useForm"
import useFetch from "../../Hooks/useFetch"
import { PASSWORD_RESET } from "../../api"
import Error from "../Helper/Error"
import Button from "../Form/Button"
import { useNavigate } from "react-router-dom"
import Head from "../Helper/Head"

const LoginPasswordReset = () => {
  const [key, setKey] = useState("")
  const [login, setLogin] = useState("")
  const { request, loading, error } = useFetch()
  const password = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get("key")
    const login = params.get("login")
    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  async function handleClick(e) {
    e.preventDefault()
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      })
      const { response } = await request(url, options)
      if (response.ok) navigate("/login")
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Resete a senha" />

      <form onSubmit={handleClick}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordReset
