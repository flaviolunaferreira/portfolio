import React, { Component } from 'react';

import '../Style/Sobre.css';

class Sobre extends Component {
  render() {
    return (
      <div className='Sobre'>
        <div className="moldura">
          <div className="estilo1">
            <h1>Flavio luna ferreira</h1>
            <h4>Mas quem eu sou?</h4><br />
            <p>Com 16 anos comecei trabalhando na Prefeitura de Cupira no interior do estado de Pernambuco como desenhista topográfico, devido a isso fiz muitos contatos e comecei a trabalhar como auxiliar de contabilidade para algumas empresas que pertencia ao irmão do prefeito da cidade.</p>
            <p>Em dezembro de 2000, trabalhando pela manhã na prefeitura e a tarde como auxiliar de contabilidada, o meu chefe deste ultimo setor chegou com um presente, um 386 com monitor VGA colorido, lançamento para época, comprou um aplicativo feito com um gerador de sistemas chamado GAS-PRO e que isso iria facilitar o trabalho de contabilidade.</p>
            <p>Durante seis meses tudos estava indo bem quando de repente todas as informações simplismente desapareceram. Procuramos o rapaz que tinha feito o sistema em questão sem sucesso e todas as informações que tinhamos sobre as empresas tinham desaparecido e não tinhamos para quem recorrer.</p>
            <p>Foi quando, acho que por desespero ou medo de ter que contratar mais funcionários, resolveram pagar um curso de programação para mim em uma escola de informática Chamada InterData em uma cidade perto chamada Caruaru.</p>
          </div>
          <div className="estilo2">
            <p>Usavamos o Lotus123 como planilha e o MsDos como sistema operacional, a linguagem que usada era o Clipper 5.2 com o banco de dados Interbase (DBF), tinhamos uma tela com 23 linhas e 80 colunas onde destribuiamos as telas do sistema. a escrita era em linha e usavamos muitas funções para resolver o problema de arquivos muito grande mas mesmo assim era muito difícil de dar manutenção.</p>
            <p>Tecnologia atrai... A facilidade com que as coisas estavam sendo feitas e a velocidade que tínhamos as informações para tomada de decisões fez com que meu chefe me gabasse para todos os seus amigos e para a tristeza dele começaram a aparecer convites para fazer outros sistemas nas cidades vizinhas.</p>
            <p>No final de 2001, eu já não me contentava em fazer cadastros que geravam relatórios, queria fazer mais, queria poder ver quais clientes estavam comprando, o que compravam e quanto estavam gastando, quem vinha com frequencia na loja e/ou quem estava a algum tempo sem vir para ligarmos para um cafezinho, queria saber quais produtos vendiam mais e qual o lucro estava tendo por cada um deles. Meus sistemas começaram a ficar mais uteis e aumentou a quantidade de pessoas que me procuravam para executar algum serviço.</p>
            <p>Em 2002 quando mudei para Vitória de Santo Antão – PE, já tinha feito o sistema IPTU de todas as prefeituras de Caruaru e região alem de algumas farmácias, Supermercados, Depósitos de bebidas e comércios em geral. Foi quando comprei meu primeiro carro, um Monza Classic, que me deixou cheio de orgulho e seguro de que programação era o que queria para minha vida.</p>
        </div>
        <div className="estilo1">
            <p>Nesta época as empresas não contratavam programadores, pelo menos não em Vitória de Santo Antão, recebi um convite para fazer uma entrevista de trabalho para uma usina de cana de açúcar, Alvorada Industria e Comércio, o trabalho era simples, mais formulários de cadastros e relatórios, tive poucos desafios mas o salário era bom e deixava com tempo para dar assistência para os clientes que eu já havia conquistado.</p>
            <p>No final de 2002 encontrei um cidadão, chamado Wilton Rodrigues dos Santos, que estava procurando um programador. Ele havia me contado que tinha uma grande granja de postura e que veio uma doença e matou todas as galinhas que ele tinha de um dia para outro e que o seu pai havia lhe prometido (na moeda de hoje) R$ 1,00 para cada frango que havia morrido para ele recomeçar. Resumindo ele tinha mais de dois milhões de reais e queria montar uma factoring mas não sabia nada sobre o assunto.</p>
            <p>Aceitei sua proposta de trabalho e embarquei para São Paulo em busca de fazer um curso da ANFAC sobre compra de títulos e alavancagem mercadológica.</p>
            <p>O sistema ficou fantástico, previsões de carteira de clientes, custódia, deságio, ativos e passivos, etc…, Tudo que eu queria fazer com base no que tinha aprendido na ANFAC, era só começar a escrever e pronto.</p>
            <p>Trabalhei com o Wilton durante 4 anos e neste período fiz mais alguns sistemas que me deixaram muito orgulhoso:</p>
            <p>Controle de Leitos (despesas) para o Hospital Otávio de Freitas em Jaboatão dos Guararapes.</p>
            <p>Sistema para ajudar na COOPVITA, uma cooperativa de locação de serviços médicos e afins.</p>
            <p>Aguardente PITU. Uma envasadora/fabrica de aguardente.</p>
        </div>
          <div className="estilo2">
            <p>As coisas começaram a mudar. O clipper já não era o suficiente para suprir a necessidade dos cliente e o Windows havia evoluído e com isso a necessidade de programar para ele se tornou imprescindível.</p>
            <p>Fiz alguns cursos de Visual Basic e logo estava programando com ele mas tinha muitos problemas com o banco de dados que ele usava, ainda o DBF da Interbase. Fácil de programar e melhor ainda de dar manutenção o VB foi uma grande melhoria pois já era Orientado a Objeto e para Windows que tornava o trabalho mais profissional.</p>
            <p>Conheci o Delphi 1.0, quando ainda era da Borland, e achei fantástico como era simples de escrever programas complexos apenas arrastando os componentes para o formulário, lembro dos componentes table e data souce que era só arrastar e soutar adicionando ligeira configuração e pronto, já estava tudo certo para usar.</p>
            <p>Foi neste período que conheci o Java, prometendo mundos e fundos…</p>
            <p>Me apaixonei por ele nesta época, fiquei tão fascinado pelo controle que ele me dava que qualquer tempo que me sobrava, la estava eu quebrando cabeça com ele. Sempre saboreando cada coisa que aprendia como se fosse a melhor coisa do mundo, quando aprendi a trabalhar Entity Factoring ( que era um terror ) quase não me continha de tanta felicidade, já estava ficando chato de tanto que eu falava para os amigos o que eu estava fazendo, mesmo eles não entendendo nada de informática.</p>
        </div>
          <div className="estilo1">
            <p>E quando veio o Hibernate!!! Parecia um doido rindo sozinho de como as coisa ficaram muito mais fácil, alem de que para mim o rollback() era um alívio de não precisar se preocupar com possíveis erros no envio de informações para o banco de dados, agora usando o MySql que era muito mais robusto que o DBF e gerenciava a questão dos processos em rede de dados sem que precisasse me preocupar com isso.</p>
            <p>Já estava programando com o Java e não queria saber de mais nada, Clipper, Object Pascal, VB, tudo não me dava mais prazer do que usar o swing para fazer qualquer coisa que vinha na minha mente.</p>
            <p>Estava não lembro em qual cliente quando veio uma notícia que iria mudar radicalmente minha trajetória como programador.</p>
            <p>Tive um problema de família, que não gostaria de falar aqui, e isso veio a me levar as pressas para o Amapá-AP.</p>
            <p>Sem poder voltar e em um lugar onde era bem difícil encontrar clientes que precisassem dos meus serviços e as despesas não paravam de almentar, tive que mudar de área para conseguir sustentar a mim e minha família (não era casado na época mas tinha irmão e mãe).</p>
            <p>Resolvi fazer um curso de operador de escavadeira no SEST/SENAT para me realocar no mercado de trabalho na esperança de continuar meus estudos com programação e/ou até encontrar uma vaga como programador em alguma empresa.</p>
          </div>
          <div className="estilo2">
            <p>Estava acabando o curso de operador quando apareceu um rapaz que precisava de operador, a história dele era fantástica, o pai havia falecido e deixado um mundo de terra improdutiva como herança, ele que namorava uma francesinha que trabalhava no centro aero espacial do Kourou na Guiana Francesa, tinha recebido dela uma sonda por satélite da área herdada. Nesta sonda mostrava grande concentração de minério de ferro e Tântalo, um minério bastante procurado para fabricação de componentes como micro chip. Ele precisava de um operador para começar o processo de extração, não tinha máquina ainda mas que logo estaria com o equipamento pronto para começar a trabalhar.</p>
            <p>Em conjunto com o SESC abriu uma S/A e colocou algumas ações a venda com a sonda por satélite anexa.</p>
            <p>Em menos de 30 dias estávamos começando os trabalhos de limpeza para a extração do tântalo, que era mais barato de se trabalhar e o retorno mais rápido.</p>
            <p>A empresa cresceu rápido e com menos de dois anos já estava com 8 escavadeira grandes e vários caminhões, foram colocadas mais ações a venda e o que deu um folego financeiro e a possibilidade de contratar mais.</p>
            <p>Como não poderia deixar de ser, com o tempo parei mais de trabalhar com a máquina e passei a mais gerenciar, o que meu levou de volta ao Java, escrevi um sistema básico para controle de produção com despesas e comissões, custo de produção com calculo de manutenção e depreciação dos equipamentos.</p>
            <p>Finalmente estava de volta as minhas origens!!!</p>
          </div>
          <div className="estilo1">
            <p>Meu conhecimento em programação deu um novo folego para a empresa. Tínhamos as informações para tomada de decisão, o controle financeiro ficou mais claro e sabíamos onde e quanto poderíamos investir com base na perspectiva de produção.</p>
            <p>Me casei, e com o casamento vieram os filhos. Quando meu filho mais velho estava com um ano, descobrimos que ele tinha uma doença chamada de Anemia Falciforme, doença congênita e para piorar as coisas minha esposa estava grávida e com certeza o próximo filho nasceria também com essa doença.</p>
            <p>Depois de um tempo e de muita luta mudamos para o Paraná em busca de tratamento e mais uma vez tive que me realocar no mercado, Primeiro trabalhei com uma empresa que presta serviços de máquinas pesadas para as prefeituras do estado e depois para o IAP ( instituto adventista ).</p>
            <p>Fiz concurso para a prefeitura de Ivatuba e passei em primeiro lugar como operador de Máquinas Pesadas, emprego que estou até hoje.</p>
            <p>Depois que comecei a trabalhar na prefeitura meu tempo começou a render, salário pouco mas certo, horário determinado e serviço tranquilo.</p>
            <p>Voltei a me dedicar ao estudo da programação, primeiro com Java e depois graças a uma reportagem no PEGN, descobrir a Trybe e resolvi ingressar de cabeça no curso.</p>
          </div>
          <div className="estilo2">
            <p>Falei com o pessoal da prefeitura e para minha felicidade eles flexibilizaram meu horário, como trabalho fazendo e recuperando terraços nas fazendas de soja e milho, não era necessário que eu cumprisse um horário fixo, poderia começar as 06:00hs e parar as 14:00hs, chegando a tempo acompanhar as aulas da Trybe, de 14:00hs as 20:00hs.</p>
            <p>Na maioria das vezes tive que almoçar na frente do computador com a câmera desligada, o que gerou muitos protestos dos facilitadores.</p>
            <p>Acabei o Curso da Trybe e hoje estou escrevendo este portfólio com parte do conhecimento adquirido neste processo de aprendizado.</p>
            <p>Além de me ensinar muita coisa de programação, a Trybe me mostrou que eu não sabia nada, que minha vida seria um eterno aprendizado e que humildade e disposição para aprender seriam requisitos básicos para me tornar um bom programador.</p><br />
            <p>Fiz um resumo de como tem sido minha vida até agora mas tenho muitas histórias para contar.</p>
            <p>Depois de começar a trabalhar pela mineradora tive a oportunidade de conhecer outros países e novas culturas que espero poder contar pessoalmente para que essa página não vire um livro.</p><br /><br />
          </div>
          <div className="estilo1">
            <h4>O que você acha de olhar meu portfólio com projetos que escrevi neste último ano!</h4><br />
            <h1>Obrigado!</h1>
          </div>
        </div>

      </div>
    );
  }
}

export default Sobre;
