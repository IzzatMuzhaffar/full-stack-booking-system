import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function NewBookingModal({ show, handleClose }) {
    const [bookingTitle, setBookingTitle] = useState("")
    const [bookingDesc, setBookingDesc] = useState("")
    const [bookingDate, setBookingDate] = useState("")
    const [bookingTime, setBookingTime] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const [userEmail, setUserEmail] = useState("")

    const handleSave = () => {
        const token = localStorage.getItem("authToken")

        const decode = jwtDecode(token)
        const userId = decode.id

        const data = {
            title: bookingTitle,
            description: bookingDesc,
            date: bookingDate,
            time: bookingTime,
            phone_number: userPhone,
            email: userEmail,
            user_id: userId
        }

        axios
            .post("https://00eedf02-2e35-4427-971f-90cc71844922-00-2m2f638mfzuk2.sisko.replit.dev/bookings", data)
            .then((response) => {
                console.log("Success:", response.data)
                handleClose()
            })
            .catch((error) => {
                console.error("Error", error)
            })
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>Lock in this room! Please provide your details</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control
                                placeholder="Medium Room"
                                onChange={(e) => setBookingTitle(e.target.value)}
                                className="mb-2"
                            />
                            <Form.Control
                                placeholder="What's the occassion?"
                                as="textarea"
                                rows={3}
                                onChange={(e) => setBookingDesc(e.target.value)}
                                className="mb-2"
                            />
                            <Form.Control
                                placeholder="Enter date"
                                onChange={(e) => setBookingDate(e.target.value)}
                                className="mb-2"
                            />
                            <Form.Control
                                placeholder="Enter time"
                                onChange={(e) => setBookingTime(e.target.value)}
                                className="mb-2"
                            />
                            <Form.Control
                                placeholder="Enter phone number"
                                onChange={(e) => setUserPhone(e.target.value)}
                                className="mb-2"
                            />
                            <Form.Control
                                placeholder="Enter email"
                                onChange={(e) => setUserEmail(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="success"
                        className="rounded-pill"
                        onClick={handleSave}
                    >
                        Confirm booking
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
