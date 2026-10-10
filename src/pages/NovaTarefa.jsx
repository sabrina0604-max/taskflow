import { useState } from "react"
import Button from "../componentes/Button"
import './NovaTarefa.css'

function NovaTarefa({aoCancelar, aoCriarTarefa}){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [prioridade, setPrioridade] = useState("")
    const [status, setStatus] = useState("")
    const [descricao, setDescricao] = useState("")
    const [vencimento, setVencimento] = useState("")


    function atualizarTitulo(e){
        setTitulo(e.target.value)
    }

    function atualizarCategoria(e){
        setCategoria(e.target.value)
    }

    function atualizarPrioridade(e){
        setPrioridade(e.target.value)
    }

    function atualizarStatus(e){
        setStatus(e.target.value)
    }

    function atualizarDescricao(e){
        setDescricao(e.target.value)
    }

    function atualizarVencimento(e){
        setVencimento(e.target.value)
    }

    function criarTarefa(e){
        e.preventDefault()
        const tarefa ={
            titulo,
            categoria,
            prioridade,
            vencimento,
            status,
            descricao
        }
        aoCriarTarefa(tarefa)
        aoCancelar()
    }

    return(
        <div className="novaTarefa">
            <h1>Nova Tarefa</h1>
            <p>Preencha os dados abaixo para adicionar uma nova tarefa</p>
            
            <form className="form-Tarefa" onSubmit={criarTarefa}>

                <div className="campo campo-titulo">
                    <label htmlFor="titulo">Titulo da Tarefa *</label>
                    <input id="titulo" type="text" name="titulo" placeholder="Ex: Estudar React" onChange={atualizarTitulo} value={titulo}/>
                </div>

                <div className="opcoes">
                    <div className="campo">
                        <label htmlFor="categoria">Categoria *</label>
                        <select id="categoria" name="categoria" onChange={atualizarCategoria} value={categoria}>
                            <option value="estudos">Estudos</option>
                            <option value="projetos">Projetos</option>
                            <option value="carreira">Carreira</option>
                            <option value="pessoal">Pessoal</option>
                            <option value="lazer">Lazer</option>
                        </select>
                    </div>    
                    
                    <div className="campo">
                        <label htmlFor="prioridade">Prioridade *</label>
                        <select id="prioridade" name="prioridade" onChange={atualizarPrioridade} value={prioridade}>
                            <option value="">Selecione a prioridade</option>
                            <option value="alta">Alta prioridade</option>
                            <option value="media">Média prioridade</option>
                            <option value="baixa">Baixa prioridade</option>
                        </select>
                    </div>    

                    <div className="campo">
                        <label htmlFor="vencimento">Data de vencimento *</label>
                        <input id="vencimento" type="date" name="vencimento" onChange={atualizarVencimento} value={vencimento}/>
                    </div>  
                      
   
                    <div className="campo">
                        <label htmlFor="status">Status *</label>
                        <select id="status" name="status" onChange={atualizarStatus} value={status}>
                            <option value="pendentes">Pendente</option>
                            <option value="concluidas">Concluída</option>
                        </select>
                    </div>
                </div>    

                <div className="campo campo-descricao">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea id="descricao" name="descricao" placeholder="Adicione mais detalhes sobre a tarefa..." onChange={atualizarDescricao} value={descricao}/>
                </div>

                <div className="botoes">
                    <Button titulo="Cancelar" onClick={aoCancelar} type="button"/>
                    <Button variante="btn-principal" titulo="+ Criar tarefa" type="submit"/>
                </div>
            </form>
        </div>
    )
}

export default NovaTarefa