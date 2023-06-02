import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/perfil.jpeg'
import HamburgerMenuSobre from 'componentes/HamburgerMenuSobre';

export default function Banner() {
    
    return (

        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <HamburgerMenuSobre />
                <h1 className={styles.titulo}>
                    Olá, seja bem-vindo ao meu site!
                </h1>


                <p className={styles.paragrafo}>
                    Meu nome é Vanderlei Neto sou Produtor Cultural e Desenvolvedor Web Front-end apaixonado pela criação de interfaces.
                </p>
                 <a href="#titulo" className="scroll"><img src='https://cdn-icons-png.flaticon.com/128/6780/6780351.png' className='seta'/></a>
            
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=""
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Antônio Evaldo sorrindo"
                />
                
            </div>
           
           
        </div>
    )
}