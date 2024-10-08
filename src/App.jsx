import { Col, Navbar, Row } from 'react-bootstrap'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import Rooms from './pages/Rooms'

export function Layout() {
  return (
    <>
      <Navbar bg="light" variant="light" className='py-0'>
        <Row style={{ fontSize: 12, width: "100%" }}>
          <Col sm={7}>
            <ul className="nav" style={{ flexWrap: 'nowrap' }}>
              <li className="nav-item">
                <a className="nav-link" href="#">Booking System</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Rooms</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Activities</a>
              </li>
            </ul>
          </Col>
          <Col sm={5} >
            <ul className="nav justify-content-end" style={{ flexWrap: 'nowrap' }}>
              <li className="nav-item">
                <a className="nav-link" href="#">Manage bookings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sign in</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Create account</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Navbar>
      <Outlet />
    </>
  )
}

export default function App() {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // </Provider>
  )
}

