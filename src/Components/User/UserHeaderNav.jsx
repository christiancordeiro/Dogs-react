import React, { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../../UserContext"
import MinhasFotos from "../../Assets/feed.svg?react"
import Estatisticas from "../../Assets/estatisticas.svg?react"
import AdicionarFoto from "../../Assets/adicionar.svg?react"
import Sair from "../../Assets/sair.svg?react"
import styles from "./UserHeaderNav.module.css"

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState(null)
  const { userLogout } = useContext(UserContext)
  const navigate = useNavigate()

  function handleLogout() {
    userLogout()
    navigate("/login")
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        {mobile && "Minhas fotos"}
        <MinhasFotos />
      </NavLink>
      <NavLink to="/conta/estatisticas">
        {mobile && "Estatisticas"}
        <Estatisticas />
      </NavLink>
      <NavLink to="/conta/postar">
        {mobile && "Adicionar Foto"}
        <AdicionarFoto />
      </NavLink>
      <button onClick={handleLogout}>
        {mobile && "Sair"}
        <Sair />
      </button>
    </nav>
  )
}

export default UserHeaderNav
