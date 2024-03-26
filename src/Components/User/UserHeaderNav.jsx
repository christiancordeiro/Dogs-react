import React, { useContext, useEffect, useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { UserContext } from "../../UserContext"
import MinhasFotos from "../../Assets/feed.svg?react"
import Estatisticas from "../../Assets/estatisticas.svg?react"
import AdicionarFoto from "../../Assets/adicionar.svg?react"
import Sair from "../../Assets/sair.svg?react"
import styles from "./UserHeaderNav.module.css"
import useMedia from "../../Hooks/useMedia"

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext)
  const [mobileMenu, setMobileMenu] = useState(false)
  const navigate = useNavigate()

  function handleLogout() {
    userLogout()
    navigate("/login")
  }

  const mobile = useMedia("(max-width: 40rem)")

  const { pathname } = useLocation()
  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        } `}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && "Estatisticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav
