import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export default function Rooms() {
    return (
        <Container>
            <Row>
                <Col
                    sm={2}
                    className="d-flex flex-column justify-content-start align-items-start vh-100"
                    style={{ position: "sticky", top: 0 }}
                >
                    <p><strong>filter</strong></p>
                    <Button>a</Button>

                </Col>
                <Col sm={10}>
                    <p>room cards</p>
                    <p>test push</p>

                </Col>

            </Row>
        </Container>

    )
}
