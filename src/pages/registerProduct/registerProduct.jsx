import '@pages/registerProduct/registerProduct.scss'

export default function RegisterProduct(){
  return (
    <main class="registerProduct">
    <h1>Registre um Produto</h1>
    <form>
      <input name="name" placeholder="Nome do Produto"/>
      <input name="price" placeholder="Preço"/>
      <input name="imgLink" placeholder="Link da imagem"/>
      
    </form>
    </main>
  )
}