import styles from "./Projetos.module.css";
import retratosdoparaguacu from "assets/retratosdoparaguacu.png";
import quilombos from "assets/quilombos.png";
import mostraquilombola from "assets/mostraquilombola.png";
import escoladecinemaquilombola from "assets/escoladecinemaquilombola.png";
import autoretrato from "assets/autoretrato.png";
import cineclube from "assets/cineclubezumbidospalmares.png";

const Projetos = () => {
  return (
    <div className={`${styles.projetos}`}>
      <div>
        <div className="projeto" id="seta">
          <figure>
            <img
              src={retratosdoparaguacu}
              alt="Foto da capa do livro retratos do paraguaçu"
              className={styles.projetosImg}
            />
            <figcaption>
              <a href="https://www.instagram.com/retratosdoparaguacu/" target="" all="Link de aceeso do projeto">Saiba Mais</a>
              <h2 className={styles.subtitulo} id="titulo">
                Retratos do Paraguaçu
              </h2>
              <p className={styles.paragrafo}>
                O Projeto Retratos do Paraguaçu produziu um livro que retrata os artistas visuais de Cachoeira, Bahia.
              </p>
            </figcaption>
          </figure>
        </div>
        <div className="projeto">
          <figure>
            <img
              src={quilombos}
              alt="Foto da capa do filme quilomnos"
              className={styles.projetosImg}
            />
            <figcaption>
              <a href="https://www.instagram.com/quilombos_/" target="" all="Saiba mais">Saiba Mais</a>
              <h2 className={styles.subtitulo} id="titulo">
                Quilombos 
              </h2>
              <p className={styles.paragrafo}>
                Quilombos é um filme da cineasta quilombola Riane Nascimento.
              </p>
            </figcaption>
          </figure>
        </div>

         <div className="projeto">
          <figure>
            <img
              src={mostraquilombola}
              alt="Logo da mostra de cinema "
              className={styles.projetosImg}
            />
            <figcaption>
              <a href="https://www.instagram.com/p/BftQ_3elqDq/" target="" all="Link de aceeso do projeto">Saiba Mais</a>
              <h2 className={styles.subtitulo} id="titulo">
                Mostra de Cinema
              </h2>
              <p className={styles.paragrafo}>
               A primeira mostra de Cinema Quilombola foi realizada como parte da formação da escola de de Cinema Zumbi dos Palmares.
              </p>
            </figcaption>
          </figure>
        </div>

         <div className="projeto">
          <figure>
            <img
              src={escoladecinemaquilombola}
              alt="Logo da escola de cinema quilombola"
              className={styles.projetosImg}
            />
            <figcaption>
              <a href="https://www.instagram.com/p/BRYcanpgMyA/" target="" all="Link de acesso">Saiba Mais</a>
              <h2 className={styles.subtitulo} id="titulo">
                Ecola de Cinema 
              </h2>
              <p className={styles.paragrafo}>
                A Escola de Cinema Quilombola Zumbi do Palmares Raliezou uma formção com os moradores comunidade de Santiago do Iguape.
              </p>
            </figcaption>
          </figure>
        </div>
        <div className="projeto">
          <figure>
            <img
              src={autoretrato}
              alt="Logo do auto retrato"
              className={styles.projetosImg}
            />
            <figcaption>
              <a href="https://www.instagram.com/p/BFXCGUQq9tP/" target="" all="Link do projeto auto retrato">Saiba Mais</a>
              <h2 className={styles.subtitulo} id="titulo">
                Auto Retrato
              </h2>
              <p className={styles.paragrafo}>
               O Auto retrato foi um projeto oferceu um curso de fotografia para jovens da Comunidade Quilombola de Santiago do Iguape.
              </p>
            </figcaption>
          </figure>
        </div>

      <div className="projeto">
          <figure>
            <img
              src={cineclube}
              alt="Logo do cine clube"
              className={styles.projetosImg}
            />
            <figcaption>
              <a href="https://www.instagram.com/p/BAM_THxK9oS/" target="" all="Link de acesso do projeto">Saiba Mais</a>
              <h2 className={styles.subtitulo} id="titulo">
                Cine Club
              </h2>
              <p className={styles.paragrafo}>
              O Cine Clube Zumbi dos Palmares foi um projeto reaizava mostra de cinema da comunidade de Santiago do Iguape.
              </p>
            </figcaption>
          </figure>
        </div>

      </div>
    </div>
  );
};

export default Projetos;
