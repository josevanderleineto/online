import styles from "./Projetos.module.css";
import retratosdoparaguacu from "assets/retratosdoparaguacu.png";
import quilombos from "assets/quilombos.png";

const Projetos = () => {
  return (
    <div className={`${styles.projetos}`}>
      <div>
        <div className="projeto">
          <img
            src={retratosdoparaguacu}
            alt="Foto da capa do livro retratos do paraguaçu"
            className={styles.projetosImg}
          />
                    <a href="https://www.instagram.com/quilombos_/" target="" all="Saiba mais">Saiba Mais</a>

          <h2 className={styles.subtitulo} id="titulo">
            Retratos do Paraguaçu
          </h2>
          <p className={styles.paragrafo}>
            O Projeto Retratos do Paraguaçu produziu um livro que retrata os artistas visuais de Cachoeira, Bahia.
          </p>
        </div>
        <div className="projeto">
          <img
            src={quilombos}
            alt="Foto da capa do livro retratos do paraguaçu"
            className={styles.projetosImg}
          />
        <a href="https://www.instagram.com/quilombos_/" target="" all="Saiba mais">Saiba Mais</a>

          <h2 className={styles.subtitulo} id="titulo">
            Quilombos 
          </h2>
          <p className={styles.paragrafo}>
            Quilombos é um filme da cineasta quilombola Riane Nascimento
          </p>
        </div>
      </div>
    </div>
  );
};


export default Projetos;
