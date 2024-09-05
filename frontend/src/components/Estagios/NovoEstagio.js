import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import BarraNavegacao from '../BarraNavegacao';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NovoEstagio = () => {
    
    const [nome, setNome] = useState('');
    const [area, setArea] = useState('');
    const [sobre, setSobre] = useState('');
    const [local, setLocal] = useState('');
    const [salario, setSalario] = useState('');
    const [aluno, setAluno] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token'); // Obter o token do localStorage
            const novoAluno = { nome: nome, area: area, sobre: sobre, local: local, salario: salario, aluno: aluno }; // Estrutura de dados para a API
            await axios.post('http://localhost:8000/api/estagios/novo', novoAluno, {
                headers: {
                    Authorization: `Bearer ${token}` // Passar o token no cabeçalho
                }
            });

            alert('Estagio cadastrado com sucesso!');
            navigate('/estagios'); // Redirecionar para a lista de estagios após o cadastro
        } catch (error) {
            console.error('Erro ao cadastrar o estagio:', error.response ? error.response.data : error.message);
            alert('Falha ao cadastrar o estagio. Tente novamente.');
        }
    };

    return (
        <>
            <BarraNavegacao />
            <Container className="mt-5">
                <h2>Novo Estagio</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o nome do estagio"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formArea" className="mt-3">
                        <Form.Label>Area</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite para qual tipo area referece ao estagio"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formSobre" className="mt-3">
                        <Form.Label>Sobre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o sobre o estagio"
                            value={sobre}
                            onChange={(e) => setSobre(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formLocal" className="mt-3">
                        <Form.Label>Local</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o local do estagio"
                            value={local}
                            onChange={(e) => setLocal(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formSalario" className="mt-3">
                        <Form.Label>Salario</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o salario do estagio"
                            value={salario}
                            onChange={(e) => setSalario(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formAluno" className="mt-3">
                        <Form.Label>Aluno</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o nome do aluno que esta fazendo o estagio"
                            value={aluno}
                            onChange={(e) => setAluno(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3">
                        Salvar
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default NovoEstagio;

