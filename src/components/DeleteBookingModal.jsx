import axios from "axios";
import { Button, Modal } from "react-bootstrap";

export default function DeleteBookingModal({ showDeleteModal, handleCloseDeleteModal, bookingId }) {

    const handleDelete = () => {
        console.log(bookingId)

        axios
            .delete(`https://00eedf02-2e35-4427-971f-90cc71844922-00-2m2f638mfzuk2.sisko.replit.dev/bookings/${bookingId}`)
            .then((response) => {
                console.log("Success:", response.data)
                handleCloseDeleteModal()
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
