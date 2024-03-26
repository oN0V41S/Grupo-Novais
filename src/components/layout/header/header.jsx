/* Importando Estilos */
import '@layout/header/header.scss'
import '@layout/header/modal.scss'

/* Importando Imagens */
import logo from '@assets/fitLogo.png'

/* Importando Hook de estado */
import { useState } from 'react'

/* Importando modal */
import Modal from "react-modal";

export default function Header(){
  /* Iniciando Estados do Modal */
  const [modalIsOpen, setIsOpen] = useState(false);

  /* Função para abrir o Modal */
  function openModal() {
    setIsOpen(true);
  }
  /* Função para fechar o Modal */
  function closeModal() {
    setIsOpen(false);
  }

  /* Função após o modal abrir */
  function afterOpenModal() {
    console.log("Modal Aberto")
  }

  /* Estilo customizado para o modal */
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  /* Adicionando Elemento para o Modal sobrepor */
  Modal.setAppElement("#app");


  /* Hook para Categorias do Modal */
  const [categorias, setCategorias] = useState(false);
  
  return(
    <header>
      <div>
        <img src={logo}/>
        <h1>FB Outfit</h1>
      </div>
        <button className="btnModal" onClick={openModal}>
          <span id="btnLine1"></span>
          <span id="btnLine2"></span>
          <span id="btnLine3"></span>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          onAfterOpen={afterOpenModal}
          style={customStyles}
          contentLabel="Categorias"
        >
          <div className="modalTitle">
            <h1>Menu</h1>
            <button className="btnCloseModal" onClick={closeModal}>
              X
            </button>
          </div>
          <button id="Categorias" className="dropdownCategorias">
              <h1>Categorias</h1>
              <div id="dropdownItem" className="dropdownContent">
                <h1>Nike</h1>
                <div className="dropdownList">
                  <h1>Conjuntos</h1>
                  <h1>Tênis</h1>
                  <h1>Boné</h1>
                  <h1>Chinelos</h1>
                </div>
            </div>
              <div id="dropdownItem" className="dropdownContent">
                <h1>Adidas</h1>
                <div className="dropdownList">
                  <h1>Conjuntos</h1>
                  <h1>Tênis</h1>
                  <h1>Boné</h1>
                  <h1>Chinelos</h1>
                </div>
              </div>
            </button>
          <a href="#">Sobre</a>
          <a href="#">Login</a>
        </Modal>
    </header>
  )
}