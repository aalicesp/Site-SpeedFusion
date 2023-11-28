let div = document.getElementById('galeria');
let btn = document.getElementById('pesquisa');

function galeria() {
  div.innerHTML = ''
  for (let i = 0; i < dados.length; i++) {
    div.innerHTML += `
        
      <div class="col-6 col-md-4 col-lg-3 mb-3">
      <div class="card">
        <div class="card-body">
        <img src= ${dados[i].url} class="card-img-top" alt="...">
          <h5 class="card-title">${dados[i].titulo}</h5>
          <p class="card-text">${dados[i].descricao}</p>
         
        </div>
      </div>
    </div>
  </div>
        `
  }
}

function filtrar() {
  let opc = document.getElementById('projeto').value

  div.innerHTML = ''

  for (let i = 0; i < dados.length; i++) {



    if (opc == dados[i].projeto) {

      console.log(dados[i].projeto)

      div.innerHTML += `
    <div class="col-6 col-md-4 col-lg-3 mb-3">
    <div class="card">
      <div class="card-body">
      <img src=${dados[i].url} class="card-img-top" alt="...">
        <h5 class="card-title"> ${dados[i].titulo}</h5>
        <p class="card-text">${dados[i].descricao}</p>
      </div>
    </div>
  </div>

      `
    }


    if (opc == 0) {
      galeria()
    }

  }

}
btn.addEventListener('click', filtrar)
galeria()