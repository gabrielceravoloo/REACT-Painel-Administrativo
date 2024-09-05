import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BarraNavegacao from '../BarraNavegacao';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AlterarEstagio = () => {
    
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [area, setArea] = useState('');
    const [sobre, setSobre] = useState('');
    const [local, setLocal] = useState('');
    const [salario, setSalario] = useState('');
    const [aluno, setAluno] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const carregarEstagio = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8000/api/estagios/editar/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const estagio = response.data;
                setNome(estagio.nome);
                setArea(estagio.area);
                setSobre(estagio.sobre);
                setLocal(estagio.local);
                setSalario(estagio.salario);
                setAluno(estagio.aluno);
            } 
            catch (error) {
                console.error('Erro ao carregar o estagio:', error.response ? error.response.data : error.message);
                alert('Falha ao carregar o estagio. Tente novamente.');
            }
        };
        carregarEstagio();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const estagioAtualizado = { nome: nome, area: area, sobre: sobre, local: local, salario: salario, aluno: aluno };
            await axios.put(`http://localhost:8000/api/estagios/editar/${id}`, estagioAtualizado, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert('Estagio atualizado com sucesso!');
            navigate('/estagios');
        } catch (error) {
            console.error('Erro ao atualizar o estagio:', error.response ? error.response.data : error.message);
            alert('Falha ao atualizar o estagio. Tente novamente.');
        }
    };

    return (
        <>
            <BarraNavegacao />
            <Container className="mt-5">
                <h2>Alterar Estagio</h2>
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
                            placeholder="Digite o Sobre da compra"
                            value={sobre}
                            onChange={(e) => setSobre(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formLocal" className="mt-3">
                        <Form.Label>Local</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o local da compra"
                            value={local}
                            onChange={(e) => setLocal(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formSalario" className="mt-3">
                        <Form.Label>Salario</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o Salario da compra"
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
                        Salvar Alterações
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default AlterarEstagio;

