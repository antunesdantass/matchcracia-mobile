import { Injectable } from '@angular/core';

@Injectable()
export class DbService {
    public db: any = {
        leis: [],
        votos: {},
        votosChanged: () => {},
        usuario: {},
        usuarioChanged: () => {}
    };
    
    constructor() {
        this.db.usuario = {
            nome: "Rodrigo",
            idade: 20,
            endereco: {
              cidade: "Campina Grande",
              estado: "PB"
            }
        };

        this.db.leis = [
            {
              "id": 2167670,
              "siglaTipo": "PL",
              "numero": 9469,
              "ano": 2018,
              "ementa": "Acrescenta incisos ao artigo 46 da Lei n° 9.610, de 1998, de modo a isentar as rádios comunitárias e a transmissão via streaming do pagamento de direitos autorais.",
              "dataApresentacao": "2018-02-06T16:48",
              "statusProposicao": {
                "dataHora": "2018-02-20T15:53",
                "regime": "Prioridade (Art. 151, II, RICD)",
                "descricaoTramitacao": "Recebimento",
                "descricaoSituacao": "Aguardando Apensação",
                "despacho": "Recebimento pela PL396897.",
                "orgao": {
                  "sigla": "PL396897",
                  "nome": "Comissão Especial destinada a proferir parecer ao Projeto de Lei nº 3968, de 1997, do Sr. Serafim Venzon, que \"isenta os órgãos públicos e as entidades filantrópicas do pagamento de direitos autorais pelo uso de obras musicais e lítero-musicais em eventos por eles promovidos\", e apensados",
                  "tipoOrgao": "Comissão Especial"
                }
              },
              "descricaoTipo": "Projeto de Lei",
              "keywords": "Alteração, Lei dos Direitos Autorais (1998), isenção, pagamento, Direito Autoral, Radiodifusão comunitária, rádio, webcasting, difusão, obra musical.",
              "autores": [
                {
                  "nome": "LUIZ ALBUQUERQUE COUTO",
                  "tipo": "Deputado",
                  "siglaPartido": "PT",
                  "urlFoto": "http://www.camara.leg.br/internet/deputado/bandep/74041.jpg",
                  "siglaUf": "PB",
                  "nomeEleitoral": "LUIZ COUTO",
                  "condicaoEleitoral": "Titular",
                  "ufNascimento": "PB",
                  "municipioNascimento": "Soledade"
                }
              ]
            },
            {
              "id": 2167725,
              "siglaTipo": "PL",
              "numero": 9492,
              "ano": 2018,
              "ementa": "Cria o Cadastro Nacional de Violência Contra a Mulher. ",
              "dataApresentacao": "2018-02-06T20:59",
              "statusProposicao": {
                "dataHora": "2018-03-20T00:00",
                "regime": "Urgência (Art. 155, RICD)",
                "descricaoTramitacao": "Desapensação",
                "descricaoSituacao": "Arquivada",
                "despacho": "Desapensação automática deste do PL 5.000/2016, principal, em face da declaração de prejudicialidade deste e do seu consequente arquivamento.",
                "orgao": {
                  "sigla": "MESA",
                  "nome": "Mesa Diretora da Câmara dos Deputados",
                  "tipoOrgao": "Comissão Diretora"
                }
              },
              "descricaoTipo": "Projeto de Lei",
              "keywords": "Criação, Cadastro Nacional de Violência contra a Mulher, banco de dados. ",
              "autores": [
                {
                  "nome": "ELIZEU DIONIZIO SOUZA  DA SILVA",
                  "tipo": "Deputado",
                  "siglaPartido": "PSB",
                  "urlFoto": "http://www.camara.leg.br/internet/deputado/bandep/181316.jpg",
                  "siglaUf": "MS",
                  "nomeEleitoral": "ELIZEU DIONIZIO",
                  "condicaoEleitoral": "Efetivado",
                  "ufNascimento": "ES",
                  "municipioNascimento": "Santa Teresa"
                }
              ]
            },
            {
              "id": 2167881,
              "siglaTipo": "PL",
              "numero": 9542,
              "ano": 2018,
              "ementa": "Aumenta a pena dos crimes de discriminação ou preconceito de raça, cor, etnia, religião ou procedência nacional (xenofobia), e de injúria racial.",
              "dataApresentacao": "2018-02-07T16:35",
              "statusProposicao": {
                "dataHora": "2018-02-26T00:00",
                "regime": "Urgência (Art. 155, RICD)",
                "descricaoTramitacao": "Publicação de Proposição",
                "descricaoSituacao": "Tramitando em Conjunto",
                "despacho": "Encaminhada à publicação. Publicação Inicial em avulso e no DCD de 27/02/18 PÁG 63 COL 01.",
                "orgao": {
                  "sigla": "CCP",
                  "nome": "COORDENAÇÃO DE COMISSÕES PERMANENTES",
                  "tipoOrgao": "Órgão da Câmara dos Deputados"
                }
              },
              "descricaoTipo": "Projeto de Lei",
              "keywords": "Alteração, Lei Antirracismo, aumento, pena, crime, discriminação racial, discriminação religiosa, preconceito racial, discriminação, cor de pele, grupo étnico, xenofobia.\r\n_Alteração, Código Penal, crime contra a honra, aumento,  pena, injúria.\r\n\r\n",
              "autores": [
                {
                  "nome": "ROBERTO DA SILVA SALES",
                  "tipo": "Deputado",
                  "siglaPartido": "DEM",
                  "urlFoto": "http://www.camara.leg.br/internet/deputado/bandep/178944.jpg",
                  "siglaUf": "RJ",
                  "nomeEleitoral": "ROBERTO SALES",
                  "condicaoEleitoral": "Titular",
                  "ufNascimento": "RJ",
                  "municipioNascimento": "Rio de Janeiro"
                }
              ]
            },
            {
              "id": 2168299,
              "siglaTipo": "PL",
              "numero": 9616,
              "ano": 2018,
              "ementa": "Concede incentivos fiscais para a produção e comercialização de veículos movidos exclusiva ou parcialmente por motor elétrico.",
              "dataApresentacao": "2018-02-21T20:07",
              "statusProposicao": {
                "dataHora": "2018-06-12T00:00",
                "regime": "Ordinária (Art. 151, III, RICD)",
                "descricaoTramitacao": "Publicação de Proposição",
                "descricaoSituacao": "Tramitando em Conjunto",
                "despacho": "Encaminhada à publicação. Avulso Inicial",
                "orgao": {
                  "sigla": "CCP",
                  "nome": "COORDENAÇÃO DE COMISSÕES PERMANENTES",
                  "tipoOrgao": "Órgão da Câmara dos Deputados"
                }
              },
              "descricaoTipo": "Projeto de Lei",
              "keywords": "Isenção tributária, Imposto sobre produtos industrializados (IPI), Veículo elétrico, veículo híbrido, benefício fiscal. ",
              "autores": [
                {
                  "nome": "FRANCISCO EURICO DA SILVA",
                  "tipo": "Deputado",
                  "siglaPartido": "PATRI",
                  "urlFoto": "http://www.camara.leg.br/internet/deputado/bandep/160642.jpg",
                  "siglaUf": "PE",
                  "nomeEleitoral": "PASTOR EURICO",
                  "condicaoEleitoral": "Titular",
                  "ufNascimento": "SP",
                  "municipioNascimento": "Presidente Prudente"
                }
              ]
            },
            {
              "id": 2168601,
              "siglaTipo": "PL",
              "numero": 9662,
              "ano": 2018,
              "ementa": "Dispõe sobre a obrigatoriedade de a banca organizadora de concursos públicos ou vestibulares ressarcir os candidatos prejudicados pelo adiamento da data da prova ou pelo cancelamento do certame.",
              "dataApresentacao": "2018-02-28T17:53",
              "statusProposicao": {
                "dataHora": "2018-03-12T17:07",
                "regime": "Prioridade (Art. 151, II, RICD)",
                "descricaoTramitacao": "Recebimento",
                "descricaoSituacao": "Tramitando em Conjunto",
                "despacho": "Recebimento pela CCJC.",
                "orgao": {
                  "sigla": "CCJC",
                  "nome": "Comissão de Constituição e Justiça e de Cidadania",
                  "tipoOrgao": "Comissão Permanente"
                }
              },
              "descricaoTipo": "Projeto de Lei",
              "keywords": "Obrigatoriedade, ressarcimento, prejuízo, candidato, Concurso público, Exame vestibular,  adiamento, cancelamento.",
              "autores": [
                {
                  "nome": "PEDRO OLIVEIRA CUNHA LIMA",
                  "tipo": "Deputado",
                  "siglaPartido": "PSDB",
                  "urlFoto": "http://www.camara.leg.br/internet/deputado/bandep/178912.jpg",
                  "siglaUf": "PB",
                  "nomeEleitoral": "PEDRO CUNHA LIMA",
                  "condicaoEleitoral": "Titular",
                  "ufNascimento": "PB",
                  "municipioNascimento": "Campina Grande"
                }
              ]
            },
            {
              "id": 2169820,
              "siglaTipo": "PL",
              "numero": 9838,
              "ano": 2018,
              "ementa": "Tipifica criminalmente a conduta de quem oferece, publica, distribui, difunde notícia ou informação que sabe ser falsa em meios eletrônicos ou impressos.",
              "dataApresentacao": "2018-03-21T13:46",
              "statusProposicao": {
                "dataHora": "2018-04-04T16:55",
                "regime": "Ordinária (Art. 151, III, RICD)",
                "descricaoTramitacao": "Recebimento",
                "descricaoSituacao": "Tramitando em Conjunto",
                "despacho": "Recebimento pela CCTCI.",
                "orgao": {
                  "sigla": "CCTCI",
                  "nome": "Comissão de Ciência e Tecnologia, Comunicação e Informática",
                  "tipoOrgao": "Comissão Permanente"
                }
              },
              "descricaoTipo": "Projeto de Lei",
              "keywords": "Alteração, Código Penal, crime contra a honra, tipicidade penal, criação, divulgação, Notícia falsa (fake news), detenção, multa, agravação penal. ",
              "autores": [
                {
                  "nome": "ARTHUR DE OLIVEIRA MAIA DA SILVA",
                  "tipo": "Deputado",
                  "siglaPartido": "DEM",
                  "urlFoto": "http://www.camara.leg.br/internet/deputado/bandep/160600.jpg",
                  "siglaUf": "BA",
                  "nomeEleitoral": "ARTHUR OLIVEIRA MAIA",
                  "condicaoEleitoral": "Titular",
                  "ufNascimento": "BA",
                  "municipioNascimento": "Salvador"
                }
              ]
            },
            {
              "id": 2170535,
              "siglaTipo": "PL",
              "numero": 9911,
              "ano": 2018,
              "ementa": "Proíbe a distribuição, a título de brinde, promoção ou sorteio, de animais não-humanos vivos em eventos públicos ou privados.",
              "dataApresentacao": "2018-03-28T13:36",
              "statusProposicao": {
                "dataHora": "2018-08-16T00:00",
                "regime": "Ordinária (Art. 151, III, RICD)",
                "descricaoTramitacao": "Distribuição ",
                "descricaoSituacao": "Aguardando Designação de Relator",
                "despacho": "Deferido  o Requerimento n. 9.005/2018, conforme despacho de do seguinte teor: Defiro o Requerimento n. 9.005/2018. Desapense-se o Projeto de Lei n. 9.911/2018 do bloco encabeçado pelo Projeto de Lei n. 7.199/2010. Submeta-se o Projeto de Lei n. 9.911/2018 à tramitação em regime ordinário e à apreciação do Plenário, após análise pelas Comissões de Meio Ambiente e Desenvolvimento Sustentável e de Constituição e Justiça e de Cidadania (mérito e art. 54 do RICD). Publique-se. Oficie-se.[ATUALIZAÇÃO DO DESPACHO DO PL N. 9.911/2018: à CMADS e à CCJC (mérito e art. 54 do RICD). Proposição sujeita à apreciação do Plenário. . Regime de Tramitação: Ordinário].",
                "orgao": {
                  "sigla": "MESA",
                  "nome": "Mesa Diretora da Câmara dos Deputados",
                  "tipoOrgao": "Comissão Diretora"
                }
              },
              "descricaoTipo": "Projeto de Lei",
              "keywords": "Proibição, distribuição, animal, brinde, sorteio, defesa dos direitos animais.",
              "autores": [
                {
                  "nome": "RICARDO IZAR JUNIOR",
                  "tipo": "Deputado",
                  "siglaPartido": "PP",
                  "urlFoto": "http://www.camara.leg.br/internet/deputado/bandep/160655.jpg",
                  "siglaUf": "SP",
                  "nomeEleitoral": "RICARDO IZAR",
                  "condicaoEleitoral": "Titular",
                  "ufNascimento": "SP",
                  "municipioNascimento": "São Paulo"
                }
              ]
            },
            {
              "id": 2173302,
              "siglaTipo": "PL",
              "numero": 10126,
              "ano": 2018,
              "ementa": "Dispõe sobre a proibição do uso de equipamentos de proteção individual por profissionais da área de saúde fora do ambiente de trabalho.",
              "dataApresentacao": "2018-04-25T15:35",
              "statusProposicao": {
                "dataHora": "2018-05-08T00:00",
                "regime": "Ordinária (Art. 151, III, RICD)",
                "descricaoTramitacao": "Publicação de Proposição",
                "descricaoSituacao": "Tramitando em Conjunto",
                "despacho": "Encaminhada à publicação. Publicação Inicial em avulso e no DCD de 09/05/2018.",
                "orgao": {
                  "sigla": "CCP",
                  "nome": "COORDENAÇÃO DE COMISSÕES PERMANENTES",
                  "tipoOrgao": "Órgão da Câmara dos Deputados"
                }
              },
              "descricaoTipo": "Projeto de Lei",
              "keywords": "Proibição, profissional de saúde, utilização, equipamento de proteção individual, ambiente externo, ambiente de trabalho.",
              "autores": [
                {
                  "nome": "JUNJI ABE",
                  "tipo": "Deputado",
                  "siglaPartido": "MDB",
                  "urlFoto": "http://www.camara.leg.br/internet/deputado/bandep/160544.jpg",
                  "siglaUf": "SP",
                  "nomeEleitoral": "JUNJI ABE",
                  "condicaoEleitoral": "Suplente",
                  "ufNascimento": "SP",
                  "municipioNascimento": "Mogi das Cruzes"
                }
              ]
            }
          ];
    }
}
