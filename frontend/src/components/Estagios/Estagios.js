import { Table, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BarraNavegacao from '../BarraNavegacao';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Estagios = () => {
    
    const navigate = useNavigate();
    const [estagios, setEstagios] = useState([]);

    const fetchEstagios = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8000/api/estagios/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setEstagios(response.data);
        } 
        catch (error) {
            console.error('Erro ao buscar estagios:', error.response ? error.response.data : error.message);
        }
    };

    useEffect(() => {
        fetchEstagios();
    }, []);

    const handleNovoEstagio = () => {
        navigate('/novo-estagio');
    };

    const handleAlterarEstagio = (id) => {
        navigate(`/alterar-estagio/${id}`);
    };

    const handleExcluirEstagio = async (id) => {
        const confirmar = window.confirm("Você tem certeza que deseja excluir este estagio?");
        if (confirmar) {
            try {
                const token = localStorage.getItem('token');
                await axios.delete(`http://localhost:8000/api/estagios/excluir/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setEstagios(estagios.filter(estagio => estagio.id !== id)); //*
                alert('Estagio excluído com sucesso!');
            } 
            catch (error) {
                console.error('Erro ao excluir estagio:', error.response ? error.response.data : error.message);
                alert('Falha ao excluir o estagio. Tente novamente.');
            }
        }
    };

    return (
        <>
            <BarraNavegacao />
            <Container className="mt-5">
                <h2>Gerenciar Estagios</h2>
                <Button variant="primary" className="mb-3" onClick={handleNovoEstagio}>
                    Novo Estagio
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Area</th>
                            <th>Sobre</th>
                            <th>Local</th>
                            <th>Salario</th>
                            <th>Aluno</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {estagios.map((estagio) => (
                            <tr key={estagio.id}>
                                <td>{estagio.nome}</td>
                                <td>{estagio.area}</td>
                                <td>{estagio.sobre}</td>
                                <td>{estagio.local}</td>
                                <td>{estagio.salario}</td>
                                <td>{estagio.aluno}</td>
                                <td>
                                    <Button
                                        variant="warning"
                                        className="me-2"
                                        onClick={() => handleAlterarEstagio(estagio.id)}
                                    >
                                        Alterar
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => handleExcluirEstagio(estagio.id)}
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

export default Estagios;

