import './style.css'
import logo from "./img/logoSiteKRO.png"
import imgTelaInicial from "./img/fundoTelaInicial.jpg"
import contador from "./img/CONTADOR.png"
import fundoSobreNos from "./img/fundoSobreNos.png"
import whats from "./img/WHATS.png"
import telefone from "./img/TELEFONE.png"
import email from "./img/EMAIL.png"
import missao from "./img/missao.png"
import servico from "./img/servico.png"
import teste from "./img/visao.png"
import aberturaEmpresas from "./img/AberturaDeEmpresa.png"
import baixoImposto from "./img/BaixoImposto.jpg"
import estruturaContabil from "./img/EstruturaContabil.jpg"
import parceriaEmpresarial from "./img/ParceriaEmpresarial.jpg"
import especialidadesFinanceiro from "./img/EspecialidadesFinanceiro.jpg"
import inss from "./img/inss.png"
import mei from "./img/mei.png"
import simplesLucro from "./img/lucroPresumido.png"
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

function App() {
  return (
    <div className="container">
      
        <div className="head">
          <img src={logo}/>

          <div className="navButtons">

            <a id='home1' href='#home'> HOME </a>
            <a id='sobreNos1' href='#sobreNos'>SOBRE NÓS</a>
            <a id='contato1' href='#contato'>CONTATO</a>
            

          </div>

        </div>
      
        <div id = "home" className="home">
          <img className="imgTelaInicial" src={imgTelaInicial}/>
          <img className="logoTelaInicial" src={logo}/>
        </div>

        <div className='buttonWhatsFixo'>
          <a href='https://wa.me/+5531988997860'>FALAR COM O CONTADOR</a>
        </div>

         <div className='objetivos'> 
          <div className = 'boxObjetivos'>
            <img src={missao}/>
            <h1>Missão</h1><br></br>
            <p>Oferecer serviços contábeis com excelência e ética, sempre focando em soluções eficazes para as necessidades de cada cliente.</p>
          </div>
          <div className = 'boxObjetivos'>
            <img src={teste}/>
            <h1>Visão</h1><br></br>
            <p>Nosso propósito é ser uma contabilidade que vai além dos números, que compreende de forma humana, atenta e empática as necessidades reais de cada cliente, oferecendo soluções práticas e personalizadas.</p>
          </div>
          <div className='boxObjetivos'>
            <img src={servico}/>
            <h1>Por que contratar nossos serviços?</h1><br></br>
            <p style={{textAlign: "left"}}> •	Equipe especializada e preparada pra te ajudar<br></br>
                •	Experiência e dedicação<br></br>
                •	Suporte contábil de qualidade<br></br>
            </p></div>
        </div> 

        <div className='servicos'>
            <div id="simplesLucro">
              {/* <h1>Serviços e Soluções - Simples Nacional / Lucro Presumido<br></br><br></br></h1> */}
   
              •	Abertura de empresa<br></br>
              •	Baixa de empresa<br></br>
              •	Alterações Contratuais<br></br>
              •	Transformação em Sociedade Limitada<br></br>
              •	Transformação Sociedade Unipessoal Limitada<br></br>
              •	Migrar de MEI para Micro Empresa.<br></br>
              •	Emissão de Notas Fiscais Eletrônica e Notas Fiscais de Serviço Eletrônica<br></br>
              •	Compensação Restituição ressarcimento de Créditos Tributários Federal<br></br>
              •	Processos Digitais: Administrativo tributário Federal ou Municipal.<br></br>
              <img src={simplesLucro}/>
            </div>
            <div id="servicoSolucoes">
              <img src={mei}/>
              Serviços e Soluções – MEI / Pessoa Física <br></br><br></br>

                •	DIRPF<br></br>
                •	GCAP<br></br>
                •	CARNÊ LEÂO<br></br>
                •	MENSALÃO<br></br>
                •	MALHA FISCAL<br></br>
                •	DITR <br></br>
                •	CCIR<br></br>
                •	Processos Digitais: Administrativo e Tributário Federal ou Municipal<br></br>
                •	Distribuição de lucros na regra do MEI<br></br>
                •	Confecção de Folha de pagamento para MEI<br></br>
                •	Pedido de Restituição<br></br>

            </div>
            <div id="servicoPrevidenciario">  Serviços e Soluções - PREVIDENCIÁRIO – INSS<br></br><br></br>

                  •	Aposentadoria<br></br>
                  •	Auxilio Doença<br></br>
                  •	Auxilio Acidente<br></br>
                  •	Pensão por Morte<br></br>
                  •	 Salário Maternidade <br></br>
                  •	Análise e acerto de CNIS<br></br>
                  •	Planejamento Previdenciário<br></br>
                  •	Revisão/ recurso Administrativo. <br></br>       
                  (TODOS ESSES SERVICOS PREVIDENCIARIO SERÁ PRESTADO SOMENTE NO ENDEREÇO DE CONTAGEM)
                  <img src={inss}/>

            </div>


        </div>

        <div className='aberturaEmpresas'>
          <div className='boxAberturaEmpresas'>
            
            <h3>Abertura de empresa alguns documentos, tais como:</h3>
            <p>RG, CPF, Comprovante de endereço, Certidão de casamento (se for casado), Cópia do IPTU
              ou documentos que indique a inscrição municipal do imóvel em que será a sede da sua
              empresa. Caso você decida ter sócios deverá providenciar os mesmos documentos de todos
              eles. Algumas atividades ou situações podem exigir documentos adicionais.
            </p>
            <img src={aberturaEmpresas}/>
          </div>
        </div>

        <div className='containerEspecialidades'>

            {/* <h1>Especialidades</h1>  */}
            <div className='boxEspecialidades'>
              <img id='imgEspecialidades'src={especialidadesFinanceiro}></img>
              <div className='textoHouver'>•	Execução impecável e sem erros das operações Financeiras da sua Empresa.</div>
            </div>
            <div className='boxEspecialidades'>
              <img id='imgEspecialidades' src={parceriaEmpresarial}></img>
              <div className='textoHouver'>•	Soluções completas parcerias de confiança em sua vida empresarial.</div>
            </div>
            <div className='boxEspecialidades'>
              <img id='imgEspecialidades' src={baixoImposto}></img>  
              <div className='textoHouver'>•	Mantemos a sua empresa regularizada e pagando o mínimo de impostos realmente devidos e que a empresa esteja sempre em dia com suas obrigações.  </div>
            </div>
            <div className='boxEspecialidades'>
              <img id='imgEspecialidades' src={estruturaContabil}></img>
              <div className='textoHouver'>•	Nosso time de contadores ajudará você a escolher o regime tributário e toda organização da estrutura contábil da sua empresa.</div>
            </div>
        </div>
 
        <div id='contato' className="contato">
          <h1>Contatos</h1>

              <a href='mailto:oscarcontabilidade@gmail.com?subject=Contato+via+Site+%E2%80%93+K.R.O.+Consultoria&body=Ol%C3%A1,++Estou+entrando+em+contato+atrav%C3%A9s+do+site+da+K.R.O.+Consultoria+para+tirar+algumas+d%C3%BAvidas+sobre+os+servi%C3%A7os+oferecidos.++Fico+no+aguardo+do+retorno.+Obrigado!'>
              <img className="icones-contato" src={email}/>
              </a>

              <img className="icones-contato" src={telefone}/>

              <a href='https://wa.me/+5531988997860'>
              <img className="icones-contato" src={whats}/>
              </a>

        </div>

        <div id='sobreNos' className ='sobreNos'>
          <img className='imgFundoSobreNos' src={fundoSobreNos}/> 
          <p>Sobre Nós<br></br>A K.R.O Consultoria Empresarial Previdenciária Tributaria Ltda, conhecida como Oscar Contabilidade, possui mais de 25 anos de experiência no mercado, oferecendo serviços contábeis com ética, dedicação e foco na resolução de problemas.
          Atuamos com empresas de diferentes portes e segmentos, sempre com um atendimento próximo e humanizado. Oferecendo um suporte completo, técnico e confiável em cada etapa.
          Nosso trabalho vai além do cumprimento de obrigações fiscais. Atuamos de forma consultiva, buscando eficiência, economia e transparência, para que cada decisão seja tomada com segurança e visão de futuro. 
          </p>

          <img className='imgContador' src={contador}/>
        </div>

      <footer className='rodape'>
        <br></br>
        <div className='containerRodape'>
          <div id='enderecoRodape' className='boxRodape'>
          <address>
            K.R.O Consultoria Empresarial Previdenciaria Tributaria LTDA: 11.020.769/0001-98<br></br><br></br>
            
            <h3><FiMapPin /> Unidade Betim</h3>
            R. Inconfidência, 510 - Centro, Betim<br></br>
            MG, 32600-100<br></br><br></br>

            <h3><FiMapPin /> Unidade Contagem - "Somente Serviços Previdenciários"</h3>
            Rua Moassy, 48 - Novo Eldorado, Contagem<br></br>
            MG, 32341-170<br></br>

          </address>
        </div>
          
          <div id = 'contatoRodape' className='boxRodape'>
            <h3>CONTATO</h3><br></br>
            <a href='mailto:oscarcontabilidade@gmail.com?subject=Contato+via+Site+%E2%80%93+K.R.O.+Consultoria&body=Ol%C3%A1,++Estou+entrando+em+contato+atrav%C3%A9s+do+site+da+K.R.O.+Consultoria+para+tirar+algumas+d%C3%BAvidas+sobre+os+servi%C3%A7os+oferecidos.++Fico+no+aguardo+do+retorno.+Obrigado!'><FiMail /> OSCARCONTABILIDADE@GMAIL.COM</a><br></br>
            <a href='https://wa.me/+5531988997860'><FaWhatsapp /> WHATSAPP: +55 (31) 98899-7860</a><br></br>
            <a><FiPhone/> TELEFONE: (31) 3594-1294</a><br></br>
            <br></br>
          </div>

          <div id='informacoesRodape' className='boxRodape'>
            <h3>INFORMAÇÕES</h3><br></br>
            <p><FaRegClock /> ATENDIMENTO SEGUNDO A SEXTA,<br></br>DAS 09:00 ÀS 12:00 E DAS 14:00 ÀS 18:00.</p>

          </div>
        </div>

          <div id='copyright'>Copyright © 2025 - K.R.O Consultoria Empresaria Previdenciária Tributaria LTDA - Todos os direitos reservados.</div>
        
      </footer>
    </div>
  );
}

export default App;
