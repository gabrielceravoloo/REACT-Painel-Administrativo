import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', {
        email: email, 
        senha: senha
      });
      localStorage.setItem('token', response.data.token); // Armazena o token JWT
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao fazer login:', error.response.data);
      alert('Login falhou. Verifique suas credenciais.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <img src="/Logo.png" className="me-3" alt="Logo" style={{ width: '40px' }} />
            <h2>EstagioHUB</h2>
          </div>
          <h5 className="text-center my-4">Bem Vindo ao Nosso Sistema</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Endereço de email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='input-custom'
              />
            </Form.Group>

            <Form.Group controlId="formSenha">
              <Form.Label style={{ marginTop: '5px' }}>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                className='input-custom'
              />
            </Form.Group>

            <p className="my-2">
            Esqueceu sua senha? <Link to="/cadastro" className="text-danger">Redefinir Senha</Link>
            </p>

            <Button variant="danger" type="submit" className="mt-3 button-custom">
              Entrar
            </Button>

            <p className="text-center my-3">
            Ainda não tem uma conta? <Link to="/cadastro" className="text-danger">Criar uma Conta</Link>
            </p>

          </Form>

        </Col>
      </Row>
    </Container>
  );
};

export default Login;

