import styles from './Rodape.module.css';

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div>
      <a href="mailto:jvn.neto@protonmail.com" className='email'>
        <p >jvn.neto@protonmail.com</p>
      </a>
      <p className='progamador'>&copy; Desenvolvido por Vanderlei Neto</p>
      </div>
    </footer>
  );
}
