import styles from "./styles.module.css";
function ContentSection() {
  return (
    <div className={styles.content}>
      <h1>
        Ajude a construir a cidade do{" "}
        <span className={styles.future}>futuro</span>!
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab amet animi
        totam nulla. Quibusdam molestiae totam illo autem voluptatibus, ducimus
        tempore aut nemo eveniet sunt enim nobis, quaerat tenetur commodi?
      </p>
    </div>
  );
}
export default ContentSection;
