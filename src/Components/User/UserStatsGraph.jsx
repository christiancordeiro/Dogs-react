import React, { useEffect, useState } from "react"
import styles from "./UserStatsGraph.module.css"

const UserStatsGraph = ({ data }) => {
  const [graph, setGraph] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    console.log(data)
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    )
  }, [data])

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
    </section>
  )
}

export default UserStatsGraph
