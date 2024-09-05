import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Dashboard from './components/Dashboard';

import Alunos from './components/Alunos/Aluno';
import NovoAluno from './components/Alunos/NovoAluno';
import AlterarAluno from './components/Alunos/AlterarAluno';

import Estagios from './components/Estagios/Estagios';
import NovoEstagio from './components/Estagios/NovoEstagio';
import AlterarEstagio from './components/Estagios/AlterarEstagio';

import './App.css';

function App() {
  return (
    <Router>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/alunos" element={<Alunos />} />
          <Route path="/novo-aluno" element={<NovoAluno />} />
          <Route path="/alterar-aluno/:id" element={<AlterarAluno />} />

          <Route path="/estagios" element={<Estagios />} />
          <Route path="/novo-estagio" element={<NovoEstagio />} />
          <Route path="/alterar-estagio/:id" element={<AlterarEstagio />} />

        </Routes>
    </Router>
  );
}

export default App;


