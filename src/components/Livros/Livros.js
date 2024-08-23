import { Table, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BarraNavegacao from '../BarraNavegacao';

const Livros = () => {
    const navigate = useNavigate();

    // Dados de exemplo de livros
    const livros = [
        { id: 1, nome: 'Livro A', autor: 'Autor A', valor: 'R$ 30,00' },
        { id: 2, nome: 'Livro B', autor: 'Autor B', valor: 'R$ 45,00' },
        { id: 3, nome: 'Livro C', autor: 'Autor C', valor: 'R$ 50,00' },
    ];

    const handleNovoLivro = () => {
        navigate('/novo-livro');
    };

    const handleAlterarLivro = (id) => {
        navigate(`/alterar-livro/${id}`);
    };

    const handleExcluirLivro = (id) => {
        // Lógica para excluir o livro
        console.log(`Excluir livro com id: ${id}`);
    };

    return (
        <>
            <BarraNavegacao />
            <Container className="mt-5">
                <h2>Gerenciar Livros</h2>
                <Button variant="primary" className="mb-3" onClick={handleNovoLivro}>
                    Novo Livro
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Autor</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <tr key={livro.id}>
                                <td>{livro.nome}</td>
                                <td>{livro.autor}</td>
                                <td>{livro.valor}</td>
                                <td>
                                    <Button
                                        variant="warning"
                                        className="me-2"
                                        onClick={() => handleAlterarLivro(livro.id)}
                                    >
                                        Alterar
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => handleExcluirLivro(livro.id)}
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

export default Livros;

