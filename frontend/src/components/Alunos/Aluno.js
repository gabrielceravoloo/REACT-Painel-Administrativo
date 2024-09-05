import { Table, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BarraNavegacao from '../BarraNavegacao';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Alunos = () => {
    
    const navigate = useNavigate();
    const [alunos, setAlunos] = useState([]);

    const fetchAlunos = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8000/api/alunos/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setAlunos(response.data);
        } catch (error) {
            console.error('Erro ao buscar alunos:', error.response ? error.response.data : error.message);
        }
    };

    useEffect(() => {
        fetchAlunos();
    }, []);

    const handleNovoAluno = () => {
        navigate('/novo-aluno');
    };

    const handleAlterarAluno = (id) => {
        navigate(`/alterar-aluno/${id}`);
    };

    const handleExcluirAluno = async (id) => {
        const confirmar = window.confirm("Você tem certeza que deseja excluir este aluno?");
        if (confirmar) {
            try {
                const token = localStorage.getItem('token');
                await axios.delete(`http://localhost:8000/api/alunos/excluir/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setAlunos(alunos.filter(aluno => aluno.id !== id)); //*
                alert('Aluno excluído com sucesso!');
            } catch (error) {
                console.error('Erro ao excluir aluno:', error.response ? error.response.data : error.message);
                alert('Falha ao excluir o aluno. Tente novamente.');
            }
        }
    };

    return (
        <>
            <BarraNavegacao />
            <Container className="mt-5">
                <h2>Gerenciar Alunos</h2>
                <Button variant="primary" className="mb-3" onClick={handleNovoAluno}>
                    Novo Aluno
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Nascimento</th>
                            <th>Curso</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map((aluno) => (
                            <tr key={aluno.id}>
                                <td>{aluno.nome}</td>
                                <td>{aluno.email}</td>
                                <td>{aluno.nascimento}</td>
                                <td>{aluno.curso}</td>
                                <td>
                                    <Button
                                        variant="warning"
                                        className="me-2"
                                        onClick={() => handleAlterarAluno(aluno.id)}
                                    >
                                        Alterar
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => handleExcluirAluno(aluno.id)}
                                    >
                                        Excluir
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default Alunos;

