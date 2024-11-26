import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { jwtDecode } from 'jwt-decode'
import { BookingRoomCard } from '../components/BookingRoomCard'
import { BASE_URL } from '../components/BaseUrl'

export default function BookingPage() {
    const [bookings, setBookings] = useState([])
    const [bookingsExist, setBookingsExist] = useState(false)

    // Fetch bookings based on user id
    const fetchBookings = (userId) => {
        fetch(
            `${BASE_URL}/bookings/user/${userId}`
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch bookings')
                }
                return response.json()
            })
            .then((data) => {
                setBookings(data)
                setBookingsExist(true)
            })
            .catch((error) => {
                console.error("Error:", error)
                setBookingsExist(false)
            })
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
                    <h2>Booking List</h2>
                    {bookingsExist ?
                        <>
                            {bookings.map((booking) => (
                                <BookingRoomCard key={booking.id}
                                    bookingId={booking.id}
                                    title={booking.title}
                                    description={booking.description}
                                    date={booking.date}
                                    time={booking.time}
                                />
                            ))}
                        </>
                        : <p>No bookings. Please return to Rooms.</p>
                    }
                </Col>
            </Row>
        </Container>
    )
}
