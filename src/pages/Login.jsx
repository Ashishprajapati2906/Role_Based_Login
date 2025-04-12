import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // 👇 Dummy login logic
        let role = '';

        if (email === 'admin@gmail.com' && password === '123456') {
            role = 'admin';
        } else if (email === 'user@gmail.com' && password === '123456') {
            role = 'user';
        } else {
            alert('Invalid credentials!');
            return;
        }

        // ✅ Save role in localStorage
        localStorage.setItem('role', role);

        // ✅ Redirect based on role
        if (role === 'admin') {
            navigate('/');
        } else if (role === 'user') {
            navigate('/about');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row className="w-100 justify-content-center">
                <Col md={6} lg={4}>
                    <Card className="p-4 shadow-lg">
                        <Card.Body>
                            <h3 className="text-center mb-4">Login</h3>
                            <Form onSubmit={handleLogin}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100">
                                    Login
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
