/* Importando Estilos */
import '@layout/header/header.scss'
import '@layout/header/modal.scss'

/* Importando Assets */
import Logo from '@assets/logo.png'
import HomeIcon from '@assets/homeIcon.png'

/* Importando Hook de estado */
import { useState } from 'react'

/* Importando Componentes */
import Modal from "react-modal";
import { Link } from "react-router-dom";


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
        <Link to="/">
          <img src={Logo} alt="Logo"/>
        </Link>
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
            <img src={HomeIcon} alt="HomeIcon"/>
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
              <div id="dropdownItem" className="dropdownContent sectionModal">
                <h1>Adidas</h1>
                <div className="dropdownList">
                  <h1>Conjuntos</h1>
                  <h1>Tênis</h1>
                  <h1>Boné</h1>
                  <h1>Chinelos</h1>
                </div>
              </div>
            </button>
          <div>
          </div>
          <Link onClick={closeModal} className="sectionModal" to="/duvidas">           
            <h1>Dúvidas</h1>
          </Link>
          <Link onClick={closeModal} className="sectionModal" to="/sobre">
            <h1>Sobre</h1>
          </Link>
          <Link onClick={closeModal} className="sectionModal" to="/login">            
            <h1>Login</h1>
          </Link>
        </Modal>
    </header>
  )
}