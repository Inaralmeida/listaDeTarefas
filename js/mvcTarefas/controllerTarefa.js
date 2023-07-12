import { ModelTarefa } from './modelTarefa.js'

export class ControllerTarefas {
  constructor() {
    console.log('controller iniciada')
    this.listaDeTarefas = []
  }

  criarTarefa(tituloTarefa) {
    //Criar a tarefa
    console.log('controller chamou a model')
    const model = new ModelTarefa()
    const tarefa = model.constuirTarefa(tituloTarefa)
    console.log('Controler recebeu a tarefa')
    console.log(tarefa)

    //mostrar a tarefa na tela
  }
}
