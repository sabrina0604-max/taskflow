import Button from "../componentes/Button"
import './NovaTarefa.css'

function NovaTarefa(){
    return(
        <div className="novaTarefa">
            <h1>Nova Tarefa</h1>
            <p>Preencha os dados abaixo para adicionar uma nova tarefa</p>
            
            <form className="form-Tarefa">

                <div className="campo campo-titulo">
                    <label htmlFor="titulo">Titulo da Tarefa *</label>
                    <input type="text" name="titulo" placeholder="Ex: Estudar React"/>
                </div>

                <div className="opcoes">
                    <div className="campo">
                        <label htmlFor="categoria">Categoria *</label>
                        <select name="categoria">
                            <option value="estudos">Estudos</option>
                            <option value="projetos">Projetos</option>
                            <option value="carreira">Carreira</option>
                            <option value="pessoal">Pessoal</option>
                            <option value="lazer">Lazer</option>
                        </select>
                    </div>    
                    
                    <div className="campo">
                        <label htmlFor="prioridade">Prioridade *</label>
                        <select name="prioridade">
                            <option value="prioridade">Prioridade</option>
                            <option value="alta">Alta prioridade</option>
                            <option value="media">Média prioridade</option>
                            <option value="baixa">Baixa prioridade</option>
                        </select>
                    </div>    

                    <div className="campo">
                        <label htmlFor="vencimento">Data de vencimento *</label>
                        <input type="date" name="vencimento"/>
                    </div>  
                      
   
                    <div className="campo">
                        <label htmlFor="status">Status *</label>
                        <select name="status">
                            <option value="todas">Todas</option>
                            <option value="pendentes">Pendentes</option>
                            <option value="concluidas">Concluídas</option>
                            <option value="atrasadas">Atrasadas</option>
                        </select>
                    </div>
                </div>    

                <div className="campo capo-descricao">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea name="descricao" placeholder="Adicione mais detalhes sobre a tarefa..."/>
                </div>

                <div className="botoes">
                    <Button titulo="Cancelar"/>
                    <Button variante="btn-principal" titulo="+ Criar tarefa"/>
                </div>
            </form>
        </div>
    )
}

export default NovaTarefa