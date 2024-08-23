import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cadastro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessLevel, setAccessLevel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Senha:', password);
    console.log('Nível de Acesso:', accessLevel);
    // Adicione aqui a lógica de registro
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <h3>Cadastro</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicAccessLevel">
              <Form.Label>Nível de Acesso</Form.Label>
              <Form.Control
                as="select"
                value={accessLevel}
                onChange={(e) => setAccessLevel(e.target.value)}
                required
              >
                <option value="">Selecione...</option>
                <option value="Administrador">Administrador</option>
                <option value="Funcionário">Funcionário</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Registrar
            </Button>
          </Form>
          <p className="mt-3">
            Já tem cadastro? <Link to="/">Faça login!</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Cadastro;

