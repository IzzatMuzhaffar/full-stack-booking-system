
import { Col, Container, Row } from 'react-bootstrap'
import { HomeRoomCard1, HomeRoomCard2, HomeRoomCard3 } from '../components/HomeRoomCard'
import NewBookingModal from '../components/NewBookingModal'
import { useState } from 'react'


export default function HomePage() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <Container style={{ paddingTop: "50px" }} className='d-flex justify-content-center'>
            <Col>
                <Row className="mb-5">
                    <h1>Book your room here!</h1>
                    <HomeRoomCard1 handleShow={handleShow} />
                    <HomeRoomCard2 />
                    <HomeRoomCard3 />
                </Row>
            </Col>

            <NewBookingModal show={show} handleClose={handleClose} />
        </Container>
    )
}
