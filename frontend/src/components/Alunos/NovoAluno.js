import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import BarraNavegacao from '../BarraNavegacao';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NovoAluno = () => {
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [curso, setCurso] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const novoAluno = { nome: nome, email: email, nascimento: nascimento, curso: curso };
            await axios.post('http://localhost:8000/api/alunos/novo', novoAluno, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert('Aluno cadastrado com sucesso!');
            navigate('/alunos');
        } 
        catch (error) 
        {
            console.error('Erro ao cadastrar o aluno:', error);
            alert('Falha ao cadastrar o aluno. Tente novamente.');
        }
    };

    return (
        <>
            <BarraNavegacao />
            <Container className="mt-5">
                <h2>Novo Aluno</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o nome do aluno"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mt-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o email do aluno"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formNascimento" className="mt-3">
                        <Form.Label>Nascimento</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Digite a data de nascimento do aluno"
                            value={nascimento}
                            onChange={(e) => setNascimento(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formCurso" className="mt-3">
                        <Form.Label>Curso</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o curso do aluno"
                            value={curso}
                            onChange={(e) => setCurso(e.target.value)}
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

export default NovoAluno;

