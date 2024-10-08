
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export default function Home() {
    return (
        <Container style={{ paddingTop: "150px" }}>
            <Row className='justify-content-center'>
                <Col xs={12} md={8}>
                    <h1>Home</h1>
                    <Form className='d-flex'>
                        <Form.Control
                            type='text'
                            placeholder='Enter location'
                            className='me-2'
                        />
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
