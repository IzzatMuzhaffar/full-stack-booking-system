import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

export default function HomeActivityCard() {
    const pic = "https://picsum.photos/100";

    return (
        <Card className="me-3 mb-3" style={{ width: "400px", height: "600px", borderRadius: "10px" }}>
            <Card.Img className="pt-2" variant="top" src={pic} />
            <Card.Body>
                <Card.Title>card title</Card.Title>
                <Card.Text>
                    card text
                </Card.Text>
                <Button className="me-2" variant="success" onClick=''>
                    Select add-on
                </Button>
            </Card.Body>
        </Card>
    )
}
