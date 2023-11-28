let btn = document.getElementById('btn')
let url = `../pag/catalogo.html`

let cadastro1 = ['usuario@gmail','1111']
let cadastro2 = ['m_santos@gmail','1212']
let cadastro3 = ['joao.joao@gmail', '4545']

//function ValidarBotao (url){
   // let win = window.open(url, '_blank')
   // win.focus()
//}

function NomeValidate(){
    let email = document.getElementById('nome').value
    let senha = document.getElementById('senha').value

    if (email == cadastro1[0] && senha == cadastro1[1] ){
        let win = window.open(url, '_blank')
        win.focus()
    }
    if (email == cadastro2[0] && senha == cadastro2[1] ){
        let win = window.open(url, '_blank')
        win.focus()
    }
    if (email == cadastro3[0] && senha == cadastro3[1]){
        let win = window.open(url, '_blank')
        win.focus()
    }
if(email != cadastro1[0] || senha != cadastro1[1]){
    if(email != cadastro2[0] || senha != cadastro2[1]){
        if(email != cadastro3[0] || senha != cadastro3[1]){

        document.getElementById('senhainvalida').style.display ="block"
    }
    }
    }
}
btn.addEventListener('click', ()=>{
    NomeValidate(url)
})






