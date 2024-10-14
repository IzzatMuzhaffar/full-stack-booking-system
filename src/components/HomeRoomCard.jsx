import { Button, Card } from "react-bootstrap";

export function HomeRoomCard({ handleShow }) {
    const pic = "https://img.freepik.com/premium-photo/party-room-with-colorful-lights-parties_9493-36429.jpg";

    return (
        <Card className="me-3" style={{ width: "400px", height: "370px", borderRadius: "10px" }}>
            <Card.Img className="pt-2" variant="top" src={pic} />
            <Card.Body>
                <Card.Title>Medium Room</Card.Title>
                <Card.Text>
                    10 pax. 2 large pizza included.
                </Card.Text>
                <Button className="me-2" variant="success" onClick={handleShow} >
                    Book room
                </Button>
            </Card.Body>
        </Card>
    )
}
