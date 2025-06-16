const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "A medicina tradicional africana, rica em sabedoria ancestral, frequentemente utiliza ervas para promover a saúde e o bem-estar. Qual desses elementos é comumente associado à prática de cura em diversas culturas africanas, combinando o uso de plantas com rituais e crenças espirituais??",
        alternativas: [
            {
            texto: "A) Fitoterapia e a figura do curandeiro (sangoma/ndaba):.",
            afirmacao: "Na África do Sul, por exemplo, os sangomas ou ndabas são figuras centrais que utilizam o conhecimento profundo das plantas e a conexão espiritual para diagnosticar e tratar enfermidades.
. "
            },
            {
            texto: ") A culinária como principal forma de tratamento:",
            afirmacao: "Embora a alimentação seja importante, a culinária por si só não é o principal sistema de tratamento na medicina tradicional africana; ela é parte de um contexto mais amplo que inclui o uso de ervas e rituais específicos."
            },
        ]
    },
    {
        enunciado: "Muitas ervas medicinais utilizadas na África possuem um significado cultural profundo, sendo empregadas não apenas por suas propriedades terapêuticas, mas também em cerimônias e rituais que celebram a vida e a conexão com a natureza. Qual das seguintes opções exemplifica essa dualidade cultural e medicinal? ",
        alternativas: [
            {
            texto: " O uso de 'rooibos' (Aspalathus linearis) como chá diário e em rituais de purificação:",
            afirmacao: ")O rooibos, originário da África do Sul, é um chá popular com benefícios à saúde e também é empregado em algumas tradições para purificação e celebração.. "
            },
            {
            texto: " A aplicação de sementes de café em rituais de adivinhação:",
            afirmacao: " As sementes de café têm uso em rituais de adivinhação em algumas culturas, mas seu uso medicinal como erva na tradição africana é secundário ao rooibos e outras plantas."
            },
        ]
    },
    {
        enunciado: "O conhecimento sobre as ervas medicinais na África é transmitido oralmente através das gerações, preservando um vasto repertório de saberes sobre a flora local e suas aplicações. Qual é uma das principais formas de transmissão e preservação desse conhecimento?",
        alternativas: [
            {
            texto: "A oralidade é a base da transmissão de conhecimento em muitas culturas africanas, onde anciões e curandeiros compartilham suas experiências e ensinamentos sobre as plantas e suas propriedades.",
            afirmacao: "O 2PAC foi fundamental para a cultura afro-americana. "
            },
            {
            texto: "Manuscritos e livros de receitas medicinais:",
            afirmacao: "Embora existam registros escritos em algumas culturas africanas, a tradição oral é, historicamente, a forma predominante e mais difundida de preservação e transmissão do conhecimento medicinal."
            },
        ]
    },

];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativa();
}

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click",()=>respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativa);
    
}
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();

}

function mostraResultado(){
    caixaPerguntas.textContent = "Conclusão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta();
