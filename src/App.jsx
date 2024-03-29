import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Login from "./Components/Login/Login"
import { UserStorage } from "./UserContext"
import ProtectedRouter from "./Components/Helper/ProtectedRouter"
import User from "./Components/User/User"

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRouter>
                  <User />
                </ProtectedRouter>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
