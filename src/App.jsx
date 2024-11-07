import { useEffect } from 'react'
import { Button, Col, Navbar, Row } from 'react-bootstrap'
import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import LoginPage from './pages/LoginPage'
import ErrorPage from './pages/ErrorPage'

export function Layout() {
  const [authToken, setAuthToken] = useLocalStorage("authToken", "")
  const navigate = useNavigate()

  useEffect(() => {
    if (!authToken) {
      navigate("/login")
    }
  }, [authToken, navigate])

  const handleLogout = () => {
    setAuthToken("")
  }

  return (
    <>
      <Navbar bg="light" variant="light" className='py-2'>
        <Row style={{ fontSize: 16, width: "100%" }}>
          <Col sm={6}>
            <ul className="nav" style={{ flexWrap: 'nowrap' }}>
              <li className="nav-item">
                <a className="nav-link" >Booking System</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Rooms</a>
              </li>
            </ul>
          </Col>
          <Col sm={6} >
            <ul className="nav justify-content-end" style={{ flexWrap: 'nowrap' }}>
              <li className="nav-item">
                <a className="nav-link" href="/bookings">Manage bookings</a>
              </li>
              <Button className="rounded-pill px-4" onClick={handleLogout}>Log out</Button>
            </ul>
          </Col>
        </Row>
      </Navbar>
      <Outlet />
      <Row className='py-5 mt-4 bg-light justify-content-center'>
        trademarked by me
      </Row>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="bookings" element={<BookingPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

