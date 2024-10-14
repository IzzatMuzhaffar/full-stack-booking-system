import { useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import UpdateBookingModal from "./UpdateBookingModal";
import DeleteBookingModal from "./DeleteBookingModal";

export function BookingRoomCard({ bookingId, title, description, date, time }) {
    const pic = "https://img.freepik.com/premium-photo/party-room-with-colorful-lights-parties_9493-36429.jpg";

    const [showUpdateModal, setShowUpdateModal] = useState(false)
    const handleCloseUpdateModal = () => setShowUpdateModal(false)
    const handleShowUpdateModal = () => setShowUpdateModal(true)

    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const handleCloseDeleteModal = () => setShowDeleteModal(false)
    const handleShowDeleteModal = () => setShowDeleteModal(true)

    return (
        <Row
            className="p-3 mb-2"
            style={{
                border: "1px solid #D3D3D3",
                borderRadius: "10px",
                maxWidth: "100%"
            }}
        >
            <Col sm={4}>
                <Image src={pic} fluid />
            </Col>

            <Col>
                <Row >
                    <h4>{title}</h4>
                    <p>Reservation on {date} at {time}</p>
                </Row>
                <Row>
                    <p>{description}</p>
                </Row>
                <Row >
                    <Button className="mx-2 mt-3" variant="light" onClick={handleShowUpdateModal} style={{ width: "75px" }}>
                        <i className="bi bi-pencil"></i>
                    </Button>
                    <Button className="mx-2 mt-3" variant="light" onClick={handleShowDeleteModal} style={{ width: "75px" }}>
                        <i className="bi bi-trash"></i>
                    </Button>
                </Row>
            </Col>
            <UpdateBookingModal showUpdateModal={showUpdateModal} handleCloseUpdateModal={handleCloseUpdateModal} bookingId={bookingId} />
            <DeleteBookingModal showDeleteModal={showDeleteModal} handleCloseDeleteModal={handleCloseDeleteModal} bookingId={bookingId} />

        </Row>
    )
}