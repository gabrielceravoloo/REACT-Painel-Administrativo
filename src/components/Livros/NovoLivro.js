import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import BarraNavegacao from '../BarraNavegacao';

const NovoLivro = () => {
    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [valor, setValor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Novo Livro:', { nome, autor, valor });
    };

    return (
        <>
            <BarraNavegacao />
            <Container className="mt-5">
                <h2>Novo Livro</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o nome do livro"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formAutor" className="mt-3">
                        <Form.Label>Autor</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o autor do livro"
                            value={autor}
                            onChange={(e) => setAutor(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formValor" className="mt-3">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o valor do livro"
                            value={valor}
                            onChange={(e) => setValor(e.target.value)}
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

export default NovoLivro;

