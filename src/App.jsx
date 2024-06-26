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
import Photo from "./Components/Photo/Photo"
import UserProfile from "./Components/User/UserProfile"
import NotFound from "./NotFound"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <div className="AppBody">
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
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
