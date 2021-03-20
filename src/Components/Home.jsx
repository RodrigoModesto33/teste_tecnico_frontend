import React, { Component } from "react";


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron" style={{ borderRadius: '20px' }}>
          <div className="container-expand-lg">
            <h1 className="display-3"> Informes sobre Coronavírus</h1>
            <p className="text-justify">Um novo vírus que tem causado doença respiratória pelo agente coronavírus, com casos recentemente registrados na China. Importante saber que os coronavírus são uma grande família viral, conhecidos desde meados de 1960, que causam infecções respiratórias em seres humanos e em animais. Com quase três mil casos confirmados, segundo o último boletim da OMS, do dia 27 de janeiro, todo o território chinês passa a ser considerado área de transmissão ativa da doença.</p>
          </div>
        </div>

        <div className=" jumbotron" style={{ borderRadius: '20px' }}>
          <div className="row">
            <div className="col-md-4">
              <h2>Como os coronavírus são transmitidos?</h2>

              <p className="text-justify">O modo de transmissão dos coronavírus humanos comuns acontece das seguintes formas:</p>
              <ul>
                <li>
                  Pelo ar;
                  </li>
                <li>
                  Por meio de tosse ou espirro;
                  </li>
                <li>
                  Contato pessoal próximo, como toque ou aperto de mão;
                  </li>
                <li>
                  Contato com objetos ou superfícies contaminadas, seguido então de contato com a boca, nariz ou olhos.
                </li>
              </ul>
              <p className="text-justify">O período de incubação dos coronavírus, ou seja, período em que os sintomas surgem desde a infecção no organismo, é de 2 a 14 dias. Já sobre o período de transmissibilidade, de uma forma geral, ocorre apenas enquanto persistirem os sintomas.</p>
            </div>
            <div className="col-md-4">
              <h2>Como é feito o diagnóstico dos coronavírus?</h2>
              <p className="text-justify"> O diagnóstico dos coronavírus é basicamente clínico, com avaliação do profissional de saúde e análise dos sintomas.<br />

Para confirmar a presença do vírus, podem ser feitos exames de sangue, fezes e/ou secreções nasais, por meio de testes sorológicos, PCR e cultura viral. <br />

Em casos mais graves, que são raros, pode ser necessária a internação do paciente. O diagnóstico e exames são feitos pelo profissional de saúde, de acordo com a situação de cada caso. </p>
            </div>
            <div className="col-md-4" >
              <h2>Como é feito o tratamento dos coronavírus?</h2>
              <p className="text-justify">Não existe tratamento específico para infecções causadas por coronavírus humano.</p>
              <p className="text-justify" >No caso dos coronavírus humanos comuns, a maioria das pessoas se recuperam sozinhas após alguns dias, com repouso e consumo de bastante água. Porém, algumas medidas podem ser adotadas para aliviar os sintomas, como:</p>
              <ul>
                <li>Uso de medicamento para dor e febre (antitérmicos e analgésicos).</li>
                <li>Uso de umidificador no quarto ou tomar banho quente para auxiliar no alívio da dor de garanta e tosse.</li>
                <li>Ingestão de líquidos.</li>
                <li>Repouso.</li>
              </ul>
            </div>
          </div>
          <div >
            <h2>Como prevenir os coronavírus?</h2>
            <p>Para redução do risco de adquirir ou transmitir doenças respiratórias, especialmente as de grande infectividade, como os coronavírus, são recomendadas medidas gerais de prevenção, como:</p>
            <ul>
              <li>Frequente lavagem e higienização das mãos, principalmente antes de consumir algum alimento.</li>
              <li>Utilizar lenço descartável para higiene nasal.</li>
              <li>Cobrir nariz e boca quando espirrar ou tossir.</li>
              <li>Evitar tocar mucosas de olhos, nariz e boca.</li>
              <li>Higienizar as mãos após tossir ou espirrar.</li>
              <li>Não compartilhar objetos de uso pessoal, como talheres, pratos, copos ou garrafas.</li>
              <li>Manter os ambientes bem ventilados.</li>
              <li>Evitar contato próximo a pessoas que apresentem sinais ou sintomas de infecção respiratória.</li>
            </ul>
            
          </div>
        </div>
      </div >
    )
  }
}