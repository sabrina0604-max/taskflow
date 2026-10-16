import { useState } from "react"
import Button from "../componentes/Button"
import './NovaTarefa.css'

function NovaTarefa({aoCancelar, aoCriarTarefa}){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [prioridade, setPrioridade] = useState("")
    const [status, setStatus] = useState("pendentes")
    const [descricao, setDescricao] = useState("")
    const [vencimento, setVencimento] = useState("")

    function criarTarefa(e){
        e.preventDefault()
        const tarefa ={
            id: crypto.randomUUID(),
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
                    <input 
                        id="titulo" 
                        type="text" 
                        name="titulo" 
                        placeholder="Ex: Estudar React" 
                        onChange={(e) => setTitulo(e.target.value)} 
                        value={titulo}
                    />
                </div>

                <div className="opcoes">
                    <div className="campo">
                        <label htmlFor="categoria">Categoria *</label>
                        <select 
                            id="categoria" 
                            name="categoria" 
                            onChange={(e) => setCategoria(e.target.value)} 
                            value={categoria}
                        >
                            <option value="estudos">Estudos</option>
                            <option value="projetos">Projetos</option>
                            <option value="carreira">Carreira</option>
                            <option value="pessoal">Pessoal</option>
                            <option value="lazer">Lazer</option>
                        </select>
                    </div>    
                    
                    <div className="campo">
                        <label htmlFor="prioridade">Prioridade *</label>
                        <select 
                            id="prioridade" 
                            name="prioridade" 
                            onChange={(e) => setPrioridade(e.target.value)} 
                            value={prioridade}
                        >
                            <option value="">Selecione a prioridade</option>
                            <option value="alta">Alta prioridade</option>
                            <option value="media">Média prioridade</option>
                            <option value="baixa">Baixa prioridade</option>
                        </select>
                    </div>    

                    <div className="campo">
                        <label htmlFor="vencimento">Data de vencimento *</label>
                        <input 
                            id="vencimento" 
                            type="date" 
                            name="vencimento" 
                            onChange={(e) => setVencimento(e.target.value)} 
                            value={vencimento}
                                />
                    </div>  
                      
   
                    <div className="campo">
                        <label htmlFor="status">Status *</label>
                        <select 
                            id="status" 
                            name="status" 
                            onChange={(e) => setStatus(e.target.value)} 
                            value={status}
                        >
                            <option value="pendentes">Pendente</option>
                            <option value="concluidas">Concluída</option>
                        </select>
                    </div>
                </div>    

                <div className="campo campo-descricao">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea 
                        id="descricao" 
                        name="descricao" 
                        placeholder="Adicione mais detalhes sobre a tarefa..." 
                        onChange={(e) => setDescricao(e.target.value)} 
                        value={descricao}
                    />
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