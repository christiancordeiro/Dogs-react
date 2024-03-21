import React, { useContext } from "react"
import styles from "./Header.module.css"
import { Link } from "react-router-dom"
import LogoDogs from "../Assets/dogs.svg?react"
import { UserContext } from "../UserContext"

const Header = () => {
  const { data } = useContext(UserContext)
  console.log(data)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs - Home">
          <LogoDogs />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
