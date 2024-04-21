import React from "react"
import Input from "../Form/Input"
import useForm from "../../Hooks/useForm"
import useFetch from "../../Hooks/useFetch"
import { PASSWORD_LOST } from "../../api"
import Error from "../Helper/Error"
import Button from "../Form/Button"
import Head from "../Helper/Head"

const LoginPasswordLost = () => {
  const login = useForm()
  const { data, error, loading, request } = useFetch()

  async function handleClick(e) {
    e.preventDefault()
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      })
      await request(url, options)
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleClick}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  )
}

export default LoginPasswordLost
