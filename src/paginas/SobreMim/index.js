import React, { useRef, useState } from "react";
import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/vanderlei.jpg";
import HamburgerMenuSobre from "componentes/HamburgerMenuSobre";

const SobreMim = () => {
  const scrollRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const handleScrollClick = () => {
    if (isScrollingUp) {
      if (scrollIndex > 0) {
        setScrollIndex((prevIndex) => prevIndex - 1);
        scrollRef.current.children[scrollIndex - 1].scrollIntoView({
          behavior: "smooth",
        });
      } else {
        setIsScrollingUp(false);
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      if (scrollIndex < 3 - 1) {
        setScrollIndex((prevIndex) => prevIndex + 1);
        scrollRef.current.children[scrollIndex + 1].scrollIntoView({
          behavior: "smooth",
        });
      } else {
        setIsScrollingUp(true);
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <HamburgerMenuSobre />

      <article id="sobre-mim">
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim" id="sobre-mim">
          <h3 className={styles.subtitulo}>Olá, eu sou o Vanderlei!</h3>

          <img
            src={fotoSobreMim}
            alt="Foto do Vanderlei"
            className={styles.fotoSobreMim}
          />

          <div className={styles.paragraphContainer} ref={scrollRef}>
            <p
              className={`${styles.paragrafo} ${
                scrollIndex === 0 ? styles.active : ""
              }`}
            >
              Tenho uma sólida experiência como produtor cultural, trabalhando em projetos que envolveram a curadoria de eventos, coordenação de equipes e a promoção de atividades relacionadas às artes e cultura. Essa experiência me proporcionou uma visão abrangente e um profundo entendimento do poder transformador que a cultura pode ter em nossa sociedade.
            </p>
            <p
              className={`${styles.paragrafo} ${
                scrollIndex === 1 ? styles.active : ""
              }`}
            >
              Em destaque, coordenei a produção do livro 'Retratos do Parguaçu', um projeto que busca retratar a vida e as obras de 20 artistas visuais da cidade histórica de <em>Cachoeira/BA</em>, isso  reforçou ainda mais minha convicção sobre o poder da cultura como agente de transformação social.
            </p>
            <p
              className={`${styles.paragrafo} ${
                scrollIndex === 2 ? styles.active : ""
              }`}
            >
             Na área de desenvolvimento web, sou especializado em construir sites e aplicações web. Possuo conhecimentos sólidos e uma formação em Desenvolvimento Web pela Mais1Code, no projeto Reprogamando a Quebrada, em parceria com o Instituto NU. Essa formação foi fundamental para adquirir habilidades técnicas avançadas e aprimorar minha capacidade de criação e desenvolvimento de sites de alta qualidade.
            </p>

               <p
              className={`${styles.paragrafo} ${
                scrollIndex === 2 ? styles.active : ""
              }`}
            >
            Estou pronto para ajudar você a ter uma presença online impressionante. Se você está buscando um site personalizado e eficiente para sua empresa ou projeto, entre em contato comigo e solicite seu orçamento. Estou disponível para discutir suas necessidades e oferecer soluções sob medida para o seu negócio.
            </p>

              <p
              className={`${styles.paragrafo} ${
                scrollIndex === 2 ? styles.active : ""
              }`}
            >
            Acredito na importância de construir relacionamentos de longo prazo com meus clientes, por isso, além de entregar um trabalho de qualidade, estou comprometido em fornecer suporte contínuo e estar disponível para atualizações futuras. Seu sucesso é minha prioridade.
            </p>

              <p
              className={`${styles.paragrafo} ${
                scrollIndex === 2 ? styles.active : ""
              }`}
            >
            
            </p>

            <p
              className={`${styles.paragrafo} ${
                scrollIndex === 3 ? styles.active : ""
              }`}
            >
              Este site é o espaço onde compartilho minha paixão pela programação, cultura e audiovisual. Aqui você encontrará informações sobre meus projetos, habilidades e experiências. Sinta-se à vontade para explorar e conhecer um pouco mais sobre meu trabalho.
            </p>
          </div>

          <div className={styles.scrollButtonContainer}>
            <button
              className={`${styles.scrollButton} ${
                isScrollingUp ? styles.up : ""
              }`}
              onClick={handleScrollClick}
            >
              <span
                className={`${styles.arrow} ${
                  isScrollingUp ? styles.up : ""
                }`}
              ></span>
            </button>
          </div>
        </PostModelo>
      </article>
    </>
  );
};

export default SobreMim;
