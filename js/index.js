import { ControllerTarefas } from './mvcTarefas/controllerTarefa.js'

const btnCriarTarefa = document.querySelector('#criarTarefa')
const tituloTarefa = document.querySelector('#titulo-tarefa')
const controller = new ControllerTarefas()

function criarTarefa() {
  const titulo = tituloTarefa.value

  if (titulo.length < 2) {
    alert('Titulo invalido, tente novamente')
  } else {
    controller.criarTarefa(titulo)
    alert(`A tarefa "${titulo}" foi adicionada com sucesso`)
  }
}

btnCriarTarefa.addEventListener('click', criarTarefa)
