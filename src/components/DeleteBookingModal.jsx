import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { BASE_URL } from "./BaseUrl";

export default function DeleteBookingModal({ showDeleteModal, handleCloseDeleteModal, bookingId }) {

    const handleDelete = () => {
        console.log(bookingId)

        axios
            .delete(`${BASE_URL}/bookings/${bookingId}`)
            .then((response) => {
                console.log("Success:", response.data)
                handleCloseDeleteModal()
                window.location.reload()
            })
            .catch((error) => {
                console.error("Error", error)
            })
    }

    return (
        <>
            <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
                <Modal.Header closeButton>Are you sure? We&apos;ll miss you</Modal.Header>
                <Modal.Body>
                    <Button
                        variant="danger"
                        className="rounded-pill"
                        onClick={handleDelete}
                    >
                        Confirm delete
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    )
}
