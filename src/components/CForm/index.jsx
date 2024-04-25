import CButton from "../CButton";
import CInput from "../CInput";

import styles from "./styles.module.css";

function CForm() {
  return (
    <form className={styles.form}>
      <CInput label="Nome" />
      <CInput label="Sexo" />
      <CInput label="CPF" />
      <CInput label="Data de nasacimento" />
      <CInput label="E-mail" />
      <CInput label="Endereço (CEP)" />
      <CInput label="Senha" />
      <CButton text="Cadastrar" />
    </form>
  );
}

export default CForm;
