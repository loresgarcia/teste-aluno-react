import PostModelo from "../../components/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "../../assets/capa-alessandro.jpg";
export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Alessandro!</h3>

      <img
        src={fotoSobreMim}
        alt="foto sobre mim"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou Desenvolvedor de Front-end e também back-end e estou feliz de te
        ver por aqui.
      </p>

      <p className={styles.paragrafo}>
        Minha história com programação começou na Escolas e faculdades Q.I do estado do Rio
        Grande do Sul, quando fiz o ensino médio integrado ao curso técnico de Informática. Eu
        aprendi lógica de programação e o básico de várias linguagens, como java,
        SqlServer, JavaScript, mas sem aprofundar muito em cada uma delas. Eu gostava
        muito de estudar programação, mas na época não fazia ideia de que
        trabalharia com isso hoje.
      </p>
      <p className={styles.paragrafo}>
        No ensino superior, escolhi cursar Ciências da Computação na Universidade
        Unirriter em Porto Alegre (RS). Lá eu tive a oportunidade de estudar desenvolvimento web
        e realizar diversar atividades durante a graduação sobre desenvolvimento.
      </p>
      <p className={styles.paragrafo}>
        Com isso tive minha experiência de dev mais próxima da realidade, com
        prazos de implementação para o site, e aprendi muito enquanto
        codificava.
      </p>

      <p className={styles.paragrafo}>
        mas no início meu rumo tomou outra área da tecnologia meu primeiro emprego na área foi de 
        manutenção de computadores até que eu consegui um emprego como desenvolvedor web junior
        para trabalhar com HTML,CSS e JavaScript, minha primeira IDE foi o Fireworks, ainda na mesma empresa 
        evoluí para o ASP.NET Web realizando manutenção em projetos legado com a linguagem VB mais tarde
        estava realizando projetos novos utilizando C#(Csharp) com o banco de dados SQLServer, projetos como webForms e Api/rest.
      </p>
      <p className={styles.paragrafo}>
         Hoje eu realizo projetos no front-end utilizando ReactJs com depedências styled-components para usar JavaScript junto com css, axios para conectar requisições
        de Api, react-icon para usar icones e fazer de forma dinâmica em projetos e uso de typescript, em projetos back-end também utilizo javaScript no back-end
        adquirindo mais conhecimentos em nodejs com banco de dados PostgreSql, mongoDB e docker, sempre busco apreender cada dia mais para desenvolver projetos.
      </p>
      <p className={styles.paragrafo}>
        GitHub: <a href="https://github.com/alessandropedroso" target="_blank">https://github.com/alessandropedroso</a><br/>
        Linkedin: <a href="https://www.linkedin.com/in/Alessandro-Pedroso" target="_blank">https://www.linkedin.com/in/Alessandro-Pedroso</a>
      </p>
    </PostModelo>
  );
}
