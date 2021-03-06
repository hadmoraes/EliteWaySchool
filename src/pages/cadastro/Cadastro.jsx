import React, { useState } from "react";
import axios from "axios";
import { Imput } from "../../components/imput/Imput";
import Button from "../../components/Button/Button";
import brasao from '../../assets/brasao.svg'
import './cadastro.css'

function Cadastro() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [salario, setSalario] = useState('');
  const [disciplinas, setDisciplinas] = useState('')
  const [message, setMessage] = useState("");

  const cadastraDocente = () => {
    const url = `https://api--escola.herokuapp.com/docentes`;
    axios.
      post(url, {
        cpf: cpf,
        nome: nome,
        email: email,
        telefone: telefone,
        salario: salario,
        disciplinas: disciplinas
      })
      .then((res) => {
        console.log(res)
        setMessage(res.data.message)
      })
      .catch((erro) => console.log(erro))
  }

  return (
    <form className='formCadastro'>

      <div className="divIcon">
        <img className='imgBrasao' src={brasao} alt="" />
        <h3 className="titleFormDocente">CADASTRO DE DOCENTES</h3>
      </div>

      <div className='divImputCadastro'>
        <Imput
          textLabel="Nome"
          type="text"
          digite="Digite o nome..."
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <Imput
          textLabel="CPF"
          type="text"
          digite="Digite o CPF..."
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <Imput
          textLabel="Email"
          type="text"
          digite="Digite o email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Imput
          textLabel="Telefone"
          type="text"
          digite="Digite o telefone..."
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <Imput
          textLabel="Salario"
          type="number"
          digite="Digite o salario..."
          value={salario}
          onChange={(e) => setSalario(e.target.value)}
        />

        <Imput
          textLabel="Disciplinas"
          type="text"
          digite="Digite as disciplinas..."
          value={disciplinas}
          onChange={(e) => setDisciplinas(e.target.value)}
        />

      </div>

      <div className="divButton">
        <Button className="buttonForm" text="Cadastrar"
          onClick={(e) => {
            e.preventDefault();
            cadastraDocente()
          }}
        />
      </div>

      <div className="msg">
        <h2>{message}</h2>
      </div>
    </form>
  );
}

export default Cadastro;