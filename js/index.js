const btnCriarTarefa = document.querySelector('#criarTarefa')
const tituloTarefa = document.querySelector('#titulo-tarefa')

function criarTarefa() {
  const titulo = tituloTarefa.value

  if (titulo.length < 2) {
    alert('Titulo invalido, tente novamente')
  } else {
    alert(`A tarefa "${titulo}" foi adicionada com sucesso`)
  }
}

btnCriarTarefa.addEventListener('click', criarTarefa)
