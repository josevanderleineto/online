import React from "react";
import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/vanderlei.jpg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Vanderlei!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Vanderlei"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Tenho uma sólida experiência como produtor cultural, trabalhando em projetos que envolveram a curadoria de eventos, coordenação de equipes e a promoção de atividades relacionadas às artes e cultura. Essa experiência me proporcionou uma visão abrangente e um profundo entendimento do poder transformador que a cultura pode ter em nossa sociedade.
      </p>
      <p className={styles.paragrafo}>
        Em destaque, coordenei a produção do livro "Retratos do Parguaçu", um projeto que busca retratar a vida e a história das comunidades quilombolas do Parguaçu por meio de fotografias e relatos. Essa experiência permitiu-me mergulhar nas riquezas culturais e nas vivências dessas comunidades, e reforçou ainda mais minha convicção sobre o poder da cultura como agente de transformação social.
      </p>
      <p className={styles.paragrafo}>
        Na área de desenvolvimento web, construo sites e possuo conhecimentos sólidos. Realizei o curso de Desenvolvimento Web na Mais1Code, no projeto Reprogamando a Quebrada, em parceria com o Instituto NU. Essa formação me ajudou a adquirir habilidades técnicas e aprimorar minhas capacidades de criação e desenvolvimento de sites de alta qualidade.
      </p>

      <p className={styles.portifolio}>
        {/* Link direto para o site do seu portfólio */}
        <a href="https://www.vanderleinetoweb.tech/" className={styles.link}>
        Clique <strong>aqui</strong>  e Visite meu site de portfólio
        </a>{" "}
        e confira alguns dos meus projetos.
      </p>

      <p className={styles.paragrafo}>
        Este site é o espaço onde compartilho minha paixão pela programação, cultura e audiovisual. Aqui você encontrará informações sobre meus projetos, habilidades e experiências. Sinta-se à vontade para explorar e conhecer um pouco mais sobre meu trabalho.
      </p>
      <p className={styles.paragrafo}></p>
      <p className={styles.paragrafo}>
        Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades e expandir meus conhecimentos. Se você estiver interessado em colaborar ou tiver alguma proposta de trabalho, entre em contato. Adoraria trocar ideias e explorar possibilidades de projetos inovadores juntos.
      </p>

      <p className={styles.paragrafo}>
        Agradeço por visitar meu site e por dedicar um tempo para conhecer um pouco mais sobre mim e meu trabalho. 
      </p>
      

      
    </PostModelo>
  );
}
