import styles from './Rodape.module.css';

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className='RodaPe'>
      <a href="mailto:jvn.neto@protonmail.com" className='email'>
        <p >jvn.neto@protonmail.com</p>
       <a href='https://www.vanderleinetoweb.tech/' target='blank_'> Portifólio Dev: https://www.vanderleinetoweb.tech/ </a>
      </a>
      <p className='progamador'>&copy; Desenvolvido por Vanderlei Neto</p>
      </div>
    </footer>
  );
}
