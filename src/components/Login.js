import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/dashboard');
  };

  return (
    <Container>
      <Row className="d-flex justify-content-md-center w-100 h-100">
        <Col md={6} className="bg-dark text-light rounded d-flex flex-column align-items-center p-4">

          <img src="/logo.png" alt="Logo do App" width={120} height={120} className="mb-3" />

          <Form onSubmit={handleSubmit} className='d-flex flex-column align-items-center'>
            <Form.Group controlId="formBasicEmail" className='mb-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className='mb-3'>
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit" className="mt-3 btn-warning">
              Entrar
            </Button>
          </Form>

          <p className="mt-3 text-center">
            Não tem cadastro? <Link to="/cadastro" className='text-warning'>Clique aqui!</Link>
          </p>

        </Col>
      </Row>
    </Container>
  );
};

export default Login;
