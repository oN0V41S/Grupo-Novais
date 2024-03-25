import '@pages/registerProduct/registerProduct.scss'

export default function RegisterProduct(){
  
  
  return (
    <main className="registerProduct">
    <h1>Registre um Produto</h1>
    <form>
      <input name="name" id="nome" type="text" placeholder="Nome do Produto"/>
      <input name="price" id="preco" type="number" placeholder="Preço"/>
      <input name="link" id="link" type="text" placeholder="Link do produto"/>
      <input name="imgLink" id="img" type="text" placeholder="Link da imagem"/>
      <input name="isStorage" id="isStorage" type="checkbox" placeholder="Possui Estoque?"/>
      <select>
        <option>sneakers</option>
        <option>outfits</option>
        <option>techs</option>
      </select>      
      <button type="button" onClick={cadastrarProduto}>Cadastrar</button>
    </form>
    </main>
  )
}

const cadastrarProduto = () => {
    
  let categoria = document.querySelector('select').value

  let url = "https://api.sheety.co/83adb88178c8983cdefdf18d642e9e55/teste01/teste01"
  
  let body = {teste:{
      name: document.querySelector('#nome').value,
      preco: document.querySelector('#preco').nodeValue,
      link: document.querySelector('#link').value,
      img: document.querySelector('#img').value,
      category: categoria,
      isStorage: document.querySelector('#isStorage').checked
     }}
console.log(body)
  let token = "cmFmZWxub3ZhaXM6QnJ1Y2U1NTI2NTI4MA==";
  
  // Cabeçalho da Requisição 
  var headers = {
    "Content-Type":"application/json",
    Authorization: `Basic ${token}`
  };
 
  let options = { 
      url: url,
      method: 'POST', 
      body: JSON.stringify(body),
      headers: headers
  }
  
  try{
    // Fazendo requisição de POST no banco de dados
    fetch(options)
    .then (response => {
      if(response.status == 200){
        window.alert("Produto cadastrado com sucesso!")
      }else{
        window.alert(`Erro ao cadastrar produto!! status:${response.status}`)
      }

    })
  }catch(erro){
    console.log(`Ocorreu um erro: ${erro}`)
  }
  
}