export class ModelTarefa {
  constructor() {
    this.titulo = ''
    this.status = 'banana'
    this.id = ''
    console.log('Model foi criada')
  }

  constuirTarefa(tituloTarefa) {
    console.log('model criou a tarefa')
    this.setTitulo(tituloTarefa)
    this.setId()
    console.log('model retornou a tarefa controller')

    return this
  }

  setTitulo(titulo) {
    this.titulo = titulo
  }

  setStatus() {
    this.status = !this.status
  }

  setId() {
    this.id = this._geraId()
  }

  _geraId() {
    const numeroAleatorio = Math.floor(Math.random() * 1000)
    return numeroAleatorio
  }
}
