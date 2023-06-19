import styles from './Inicio.module.css';
import fotoMinhaComBum from "assets/minhafotocombum.jpeg";


const Inicio = () => {
  return (
        <div className={styles.Inicio}>
      <article className='vivencia'>
          <h3 className={styles.subtitulo}>Minhas Vivências</h3>

            <img
                src={fotoMinhaComBum}
                alt="Foto do Vanderlei segurando o bum"
                className={styles.fotoMinhaComBum}
            />
          <p id='seta' className={styles.paragrafo}>O meu primeiro contato com a arte foi ainda na infância, através da música. Alguns anos depois, tive contato com a fotografia através da participação no projeto Auto Retrato, realizado na Comunidade de Santiago do Iguape. Também tive a oportunidade de vivenciar o <strong>cinema</strong> durante meu envolvimento com a Escola de Cinema Zumbi dos Palmares.</p>

          </article>
        </div>
  );
};

export default Inicio;
