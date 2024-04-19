import React, { Suspense, lazy, useEffect } from "react"
import Head from "../Helper/Head"
import useFetch from "../../Hooks/useFetch"
import { STATS_GET } from "../../api"
import Loading from "../Helper/Loading"
import Error from "../Helper/Error"
const UserStatsGraph = lazy(() => import("./UserStatsGraph"))

const UserStats = () => {
  const { request, data, error, loading } = useFetch()

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET()
      await request(url, options)
    }
    getData()
  }, [request])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraph data={data} />
      </Suspense>
    )
  return null
}

export default UserStats
