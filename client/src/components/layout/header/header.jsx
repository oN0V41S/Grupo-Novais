/* Importando Estilos */
// import "@layout/header/header.scss";
// import "@layout/header/modal.scss";

/* Importando Assets */
import Logo from "@assets/logo.png";
import HomeIcon from "@assets/homeIcon.png";

/* Importando Hooks */
import { useState } from "react";
import { handleModalState } from "@components/utils";

/* Importando Componentes */
import Modal from "react-modal";
import { Link } from "react-router-dom";

export default function Header() {
  /* Iniciando Estados do Modal */
  const [headerModalState, setHeaderModalState] = useState(false);

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

  return (
    <header>
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo" width={4} />
        </Link>
        <h1>FB Outfit</h1>
      </div>
      <button className="btnModal" onClick={openModal}>
        <span id="btnLine1"></span>
        <span id="btnLine2"></span>
        <span id="btnLine3"></span>
      </button>
      <Modal
        isOpen={headerModalState}
        onRequestClose={() => {
          handleModalState(headerModalState, setHeaderModalState);
        }}
        style={customStyles}
        contentLabel="Categorias"
      >
        <div className="modalTitle">
          <button className="btnCloseModal" onClick={closeModal}>
            X
          </button>
        </div>
        <Link onClick={closeModal} className="sectionModal" to="/login">
          <h1>Login</h1>
        </Link>
      </Modal>
    </header>
  );
}
