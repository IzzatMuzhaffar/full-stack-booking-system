import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import { BASE_URL } from '../components/BaseUrl'

export default function LoginPage() {
    const loginImage = 'https://picsum.photos/1000/750'

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [authToken, setAuthToken] = useLocalStorage("authToken", "")

    const navigate = useNavigate()

    useEffect(() => {
        if (authToken) {
            navigate("/")
        }
    }, [authToken, navigate])

    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${BASE_URL}/signup`, { username, password })
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${BASE_URL}/login`, { username, password })
            if (res.data && res.data.auth === true && res.data.token) {
                setAuthToken(res.data.token)
                console.log("Login was successful, token saved")
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Row>
            <Col sm={7} >
                <Image src={loginImage} fluid style={{ height: "100%" }} />
            </Col>
            <Col sm={5} className='p-4'>
                <Container className='d-grid gap-2' style={{ width: "90%" }}>
                    <h2 className='mb-4 px-5' style={{ fontWeight: 'bold' }}>
                        Log in to your account
                    </h2>
                    <Form
                        className='d-grip gap-2 px-5'
                    >
                        <Form.Group className='mb-3' controlId='formUsername'>
                            <Form.Control onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Enter username' required />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formPassword'>
                            <Form.Control onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter password' required />
                        </Form.Group>

                        <Button className='rounded-pill' type='submit' onClick={handleLogin}>
                            Log in
                        </Button>
                        <p className='mt-3 ms-4'>or</p>
                        <Button className='rounded-pill' type='submit' onClick={handleSignUp}>
                            Sign up
                        </Button>
                        <p className='mt-3' style={{ fontSize: '12px' }}>
                            By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use. SigmaTweets may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account seceure and personalising our services, including ads. Learn more. Others will be able to find you by email or phone number, when provided, unless you choose otherwise here.
                        </p>
                    </Form>
                </Container>
            </Col>
        </Row>
    )
}