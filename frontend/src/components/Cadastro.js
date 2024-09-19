import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nivel, setNivel] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkboxChecked) {
      alert('Você deve aceitar as Políticas e Diretrizes para se cadastrar.');
      return;
    }
    try 
    {
      await axios.post('http://localhost:8000/api/auth/cadastrar', {
        nome,
        email,
        senha,
        nivel
      });
      alert('Cadastro realizado com sucesso!');
      navigate('/');
    } 
    catch (error) 
    {
      console.error('Erro ao cadastrar:', error);
      alert('Falha no cadastro. Tente novamente.');
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
          <h5 className="text-center my-4">Junte-se hoje à EstagioHUB</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                className='input-custom'
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label style={{ marginTop: '5px' }}>Email</Form.Label>
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

            <Form.Group controlId="formNivel">
              <Form.Label style={{ marginTop: '5px' }}>Nível de Acesso</Form.Label>
              <Form.Control
                as="select"
                value={nivel}
                onChange={(e) => setNivel(e.target.value)}
                required
                className='input-custom'
              >
                <option value="">Selecione...</option>
                <option value="Administrador">Administrador</option>
                <option value="Funcionário">Funcionário</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formCheck">
              <Form.Check
                type="checkbox"
                label="Estou de acordo com as Políticas e Diretrizes"
                className='checkbox-custom'
                checked={checkboxChecked}
                onChange={(e) => setCheckboxChecked(e.target.checked)}
                required
              />
            </Form.Group>
            
            <Button variant="danger" type="submit" className="mt-3 button-custom">
              Cadastrar-se
            </Button>

            <p className="text-center my-3">
              Já tem uma conta? <Link to="/" className="text-danger">Acessar Agora</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Cadastro;