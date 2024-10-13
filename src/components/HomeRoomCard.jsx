import { Button, Card } from "react-bootstrap";

export function HomeRoomCard1({ handleShow }) {
    const pic = "https://picsum.photos/100";

    return (
        <Card className="me-3" style={{ width: "400px", height: "550px", borderRadius: "10px" }}>
            <Card.Img className="pt-2" variant="top" src={pic} />
            <Card.Body>
                <Card.Title>Medium Room</Card.Title>
                <Card.Text>
                    4 pax. 1 large nacho included.
                </Card.Text>
                <Button className="me-2" variant="success" onClick={handleShow} >
                    Book room
                </Button>
            </Card.Body>
        </Card>
    )
}

export function HomeRoomCard2() {
    const pic = "https://picsum.photos/100";



    return (
        <Card className="me-3" style={{ width: "400px", height: "550px", borderRadius: "10px" }}>
            <Card.Img className="pt-2" variant="top" src={pic} />
            <Card.Body>
                <Card.Title>Large Room</Card.Title>
                <Card.Text>
                    6 pax. 1 large pizza included.
                </Card.Text>
                <Button className="me-2" variant="success" onClick="" >
                    Book room
                </Button>
            </Card.Body>
        </Card>
    )
}

export function HomeRoomCard3() {
    const pic = "https://picsum.photos/100";



    return (
        <Card className="me-3" style={{ width: "400px", height: "550px", borderRadius: "10px" }}>
            <Card.Img className="pt-2" variant="top" src={pic} />
            <Card.Body>
                <Card.Title>Xtra-Large Room</Card.Title>
                <Card.Text>
                    10 pax. 2 large pizzas included.
                </Card.Text>
                <Button className="me-2" variant="success" onClick="">
                    Book room
                </Button>
            </Card.Body>
        </Card>
    )
}
