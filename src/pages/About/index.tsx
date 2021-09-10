import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { AboutContainer } from './style'
import imageAbout from '../../assets/images/imagem-sobre-02.png'
import imagePe from '../../assets/images/imagem-pe.png'

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Header></Header>
      <div id="about">
        <div id="fisrt">
          <div id="text-one">
            <div id="first-title">
              <h1>sobre nós</h1>
              <p>------</p>
            </div>
            <div id="first-text">
              <p>
                A Associação foi fundada em agosto de 1998 como entidade sem
                fins lucrativos, por amigos e amigas do Padre Paulo Tonucci,
                falecido em 1994, preocupadas em manter acesa sua mística e
                legado, expressos na formação política-cidadã, de modo especial
                das mulheres e jovens, sendo estes agentes de transformação e
                construção de uma sociedade justa e solidária.
              </p>
              <p>
                A instituição tem como missão ser um espaço de “desenvolvimento
                humano integral por meio da educação, valorizando o potencial de
                transformação coletiva que visa à construção de um mundo de paz
                e justiça”. As linhas de atuação estão relacionadas ao
                desenvolvimento de ações junto a crianças, adolescentes e
                famílias, dentre as quais se destacam: Educação Infantil,
                atendimento a 105 crianças de 3 a 5 anos, em período integral,
                por meio de ações pedagógicas comprometidas com o
                desenvolvimento psicossocial; atividades socioeducativas e de
                convivência destinadas a jovens de 12 a 19 anos, em oficinas de
                música, percussão e estudo de línguas, proporcionando o acesso a
                informações e estimulando o descobrimento de habilidades
                importantes no convívio social, Grupos de Mulheres artesãs,
                desenvolvendo oficinas de artesanato que são comercializadas em
                feiras da economia solidária.
              </p>
              <p>
                A ONG é constituída por um colegiado de Diretores que decide e
                supervisiona as suas diretrizes; um grupo de voluntários que
                realiza diversas atividades contando com ampla mobilização
                comunitária; equipe técnica composta por profissionais de nível
                superior e médio responsável pela execução, elaboração e
                gerenciamento dos projetos.
              </p>
            </div>
          </div>
          <div id="photo-one">
            <img src={imageAbout} alt="" />
          </div>
        </div>
        <div id="second">
          <div id="second-photo">
            <h1>pe. paulo tonucci</h1>
            <p>---------</p>
            <img src={imagePe} alt="Imamge de de Paulo Tonucci com um bebê em seu colo" />
          </div>
          <div id="second-text">
            <div id="paragraph">
              <p>
                Paulo Maria Tonucci, nasceu na Itália em 4 de maio de 1939. Foi
                ordenado sacerdote em junho de 1962. Sentindo o desejo de servir
                aos mais pobres, obteve a permissão do bispo para partir para a
                América Latina como missionário: “Parti para o Brasil em 19 de
                outubro de 1965. Vim para o Brasil como missionário, isto é,
                para cumprir uma missão para a qual me sentia chamado.”
              </p>
              <p>
                Atuou como vigário coadjutor na paróquia Nossa Senhora de
                Guadalupe, na periferia de Salvador, de 1965 a 1981. Em sua
                atuação pastoral se destacou por escolher o lado dos mais
                pobres. Em plena repressão, onde havia uma pessoa ameaçada,
                foragida, Pe. Paulo estava presente, acolhendo, confortando,
                ajudando, abrigando, escondendo. Pe. Paulo sempre estava lá, ao
                lado dos pequenos e desprotegidos. Num barraco que desabava, nos
                lares carentes, junto aos injustiçados, no meio dos ‘invasores’,
                com os excluídos, ao lado das vítimas e familiares da violência
                policial... Paulo sempre esteve presente. Foi um dos fundadores
                da Comissão Justiça e Paz (CJP) da Arquidiocese de Salvador.
                “Nós da CJP procuramos estar ao lado dos que não têm voz...”
              </p>
              <p>
                Em 1981 deixou o bairro de Fazenda Grande para estabelecer-se
                como vigário em Camaçari. Participando ativamente da vida de
                cidade, mesmo recusando qualquer engajamento partidário,
                desempenhou importante papel no processo de mudança pelo qual
                passava o município. Responsável pela paróquia São Thomaz de
                Cantuária, Pe. Paulo deu continuidade à fundamental opção pelos
                pobres, que ele mesmo resumia: “Fazer com que o Reino dos Céus
                chegue a Camaçari é um trabalho de formiga, que se baseia em
                três atividades: a formação das CEBs, o apoio aos movimentos
                populares e serviços assistenciais.” Por isso, reativou a
                Associação Beneficente São Thomaz de Cantuária (ABSTC) para dar
                abrigo e respostas aos problemas mais urgentes da população
                através do serviço voluntário de um grupo de mulheres.
              </p>
              <p>
                Como responsável pela paróquia, marcou sua presença e apoio nas
                greves e recusava-se a benzer fábricas e bancos. Falava sobre
                ele o então prefeito Humberto Ellery: “Pe. Paulo era desses
                homens radicalmente intransigentes. Em sua ação pastoral tinha
                uma preferência: os pobres, os desvalidos, os miseráveis. Às
                autoridades só se reportava para reivindicar melhoria para o
                povo. Não pedia, reclamava direitos subtraídos nesta sociedade
                ainda tão injusta. Sempre conversava com as autoridades ao lado
                dos moradores das comunidades. Era um organizador do povo, ao
                lado de ser um fiel evangelizador.”
              </p>
              <p>
                Foi também membro da CEHILA (Comissão de Estudos da História da
                Igreja na América Latina) e assim explicava essa experiência: “O
                compromisso de construir a comunidade cristã e uma nova
                sociedade, levou-me a animar encontros, debates, reuniões. Para
                transmitir tudo isso e fazer com que o povo se tornasse autor e
                sujeito de sua própria história, comecei a preparar textos e
                cadernos populares. É um material que saiu do nada, quase por
                necessidade, para ajudar o povo simples a conhecer e entender
                sua verdadeira história.”
              </p>
              <p>
                Por duas vezes lhe foi negada a naturalização brasileira: a
                primeira durante a ditadura militar, a segunda já no tempo da
                democracia. A resposta que justificava esta recusa sempre foi
                “indignidade e má conduta”, pois eram registradas nos arquivos
                da polícia suas intervenções em defesa dos “sem-teto e
                invasores”.
              </p>
              <p>Morreu em 09 de outubro de 1994.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </AboutContainer>
  )
}

export default About
