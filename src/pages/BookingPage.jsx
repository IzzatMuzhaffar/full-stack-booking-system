import { Col, Container, Row } from 'react-bootstrap'

import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { BookingRoomCard } from '../components/BookingRoomCard'

export default function BookingPage() {
    const [bookings, setBookings] = useState([])


    // Fetch bookings based on user id
    const fetchBookings = (userId) => {
        fetch(
            `https://00eedf02-2e35-4427-971f-90cc71844922-00-2m2f638mfzuk2.sisko.replit.dev/bookings/user/${userId}`
        )
            .then((response) => response.json())
            .then((data) => setBookings(data))
            .catch((error) => console.error("Error:", error))
    }

    useEffect(() => {
        const token = localStorage.getItem("authToken")
        if (token) {
            const decodedToken = jwtDecode(token)
            const userId = decodedToken.id
            fetchBookings(userId)
        }
    }, [])

    return (
        <Container className='pt-3 d-flex justify-content-center'>
            <Row>
                <Col>
                    <h2>Room Booking</h2>
                    <p>show booking here</p>
                    {bookings.map((booking) => (
                        <BookingRoomCard key={booking.id}
                            bookingId={booking.id}
                            title={booking.title}
                            description={booking.description}
                            date={booking.date}
                            time={booking.time}
                        />
                    ))}
                </Col>


            </Row>
        </Container>
    )
}
