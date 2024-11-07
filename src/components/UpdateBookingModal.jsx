import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BASE_URL } from "./BaseUrl";

export default function UpdateBookingModal({ showUpdateModal, handleCloseUpdateModal, bookingId }) {
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

        console.log(bookingId)

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
            .put(`${BASE_URL}/bookings/${bookingId}`, data)
            .then((response) => {
                console.log("Success:", response.data)
                handleCloseUpdateModal()
            })
            .catch((error) => {
                console.error("Error", error)
            })
    }

    return (
        <>
            <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
                <Modal.Header closeButton>What changed? Let us know</Modal.Header>
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
                        Confirm changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
