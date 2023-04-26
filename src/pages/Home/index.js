import React from "react";
import { useState, useRef, useEffect } from "react";
import { v4 } from "uuid";
import { Container, DivH1, DivSearch, ContainerTarefas, DivLista, User, DivTarefas } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleCheck, faTrash } from '@fortawesome/free-solid-svg-icons';



function App() {

  const [tarefas, setTarefas] = useState([])
  const inputTarefa = useRef()
  const listaTarefasRef = useRef()

  useEffect(() => {
    const storedTarefas = localStorage.getItem("tarefas");
    if (storedTarefas) {
      setTarefas(JSON.parse(storedTarefas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);
  

  useEffect(() => {
      listaTarefasRef.current.scrollTop = listaTarefasRef.current.scrollHeight;
  }, [tarefas]);
  

  const addTarefa = () => {
    const newTarefa = { tarefa: inputTarefa.current.value, id: v4(), completed: false }
    inputTarefa.current.value === '' ? alert('Por Favor, Digite no campo') : setTarefas([...tarefas, newTarefa])
    inputTarefa.current.value = ''
  }

  const deleteTarefa = (userId) => {
    const allTarefas = tarefas.filter(tarefa => tarefa.id !== userId)
    setTarefas(allTarefas)
  }


  const completeTarefa = (event, tarefa) => {
    const buttonCompleted = event.currentTarget
    buttonCompleted.style.display = 'none';
    const tarefaCompleted = tarefas.map(tarefaList => {
      if (tarefaList.id === tarefa.id) {
        return { ...tarefaList, completed: true }
      } else {
        return tarefaList
      }
    })
    setTarefas(tarefaCompleted)
  }

  
  const tarefasOrdenadas = [...tarefas.filter(tarefa => !tarefa.completed), ...tarefas.filter(tarefa => tarefa.completed)]



  return (
    <Container>
      <DivH1>
        <h1>To-Do List</h1>
      </DivH1>


      <DivSearch>
        <input placeholder="Digite sua Tarefa" ref={inputTarefa}></input>
        <button onClick={addTarefa}><FontAwesomeIcon icon={faMagnifyingGlass} rotation={90} /></button>
      </DivSearch>

      <ContainerTarefas>
        <DivLista ref={listaTarefasRef}>
          <ul>
            {
              tarefasOrdenadas.map(tarefa => (
                <User key={tarefa.id} completed={tarefa.completed}>
                  <p>{tarefa.tarefa}</p>
                  <DivTarefas>
                    <button className={tarefa.completed ? 'button-completed' : ''} onClick={(event) => completeTarefa(event, tarefa)}><FontAwesomeIcon icon={faCircleCheck} /></button>
                    <button onClick={() => deleteTarefa(tarefa.id)}><FontAwesomeIcon icon={faTrash} /></button>
                  </DivTarefas>
                </User>
              ))
            }
          </ul>
        </DivLista>
      </ContainerTarefas>

    </Container>
  )
}

export default App;
