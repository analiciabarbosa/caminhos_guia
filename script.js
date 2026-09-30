// ======================================================
// CAMINHOS PARA COMUNICAR O GUIA
// ======================================================


// ======================================================
// PARTE 1 — FILTROS DA PÁGINA INICIAL
// ======================================================

const campoBusca = document.getElementById("busca");
const botoesPublico = document.querySelectorAll(".filtro");
const botoesFormato = document.querySelectorAll(".filtro-formato");
const cardsEstrategias = document.querySelectorAll(".card-estrategia");
const quantidadeIdeias = document.getElementById("quantidadeIdeias");

let publicoSelecionado = "todos";
let formatoSelecionado = "todos";


// Só executa os filtros se estivermos no index.html

if (campoBusca) {

    function filtrarEstrategias() {

        const textoBusca = campoBusca.value
            .toLowerCase()
            .trim();

        let quantidadeVisivel = 0;

        cardsEstrategias.forEach(card => {

            const publicoCard = card.dataset.publico;
            const formatosCard = card.dataset.formatos;
            const textoCard = card.innerText.toLowerCase();

            const correspondePublico =
                publicoSelecionado === "todos" ||
                publicoCard === publicoSelecionado;

            const correspondeFormato =
                formatoSelecionado === "todos" ||
                formatosCard.includes(formatoSelecionado);

            const correspondeBusca =
                textoBusca === "" ||
                textoCard.includes(textoBusca);

            if (
                correspondePublico &&
                correspondeFormato &&
                correspondeBusca
            ) {

                card.style.display = "flex";
                quantidadeVisivel++;

            } else {

                card.style.display = "none";

            }

        });

        atualizarQuantidade(quantidadeVisivel);
    }


    // FILTRO POR PÚBLICO

    botoesPublico.forEach(botao => {

        botao.addEventListener("click", () => {

            botoesPublico.forEach(item => {
                item.classList.remove("ativo");
            });

            botao.classList.add("ativo");

            publicoSelecionado = botao.dataset.publico;

            filtrarEstrategias();

        });

    });


    // FILTRO POR FORMATO

    botoesFormato.forEach(botao => {

        botao.addEventListener("click", () => {

            const formatoClicado = botao.dataset.formato;

            if (formatoSelecionado === formatoClicado) {

                formatoSelecionado = "todos";

                botao.classList.remove("ativo");

            } else {

                botoesFormato.forEach(item => {
                    item.classList.remove("ativo");
                });

                formatoSelecionado = formatoClicado;

                botao.classList.add("ativo");

            }

            filtrarEstrategias();

        });

    });


    // BUSCA

    campoBusca.addEventListener("input", () => {
        filtrarEstrategias();
    });


    function atualizarQuantidade(quantidade) {

        if (quantidade === 1) {

            quantidadeIdeias.textContent = "1 ideia";

        } else {

            quantidadeIdeias.textContent = `${quantidade} ideias`;

        }

    }


    filtrarEstrategias();
}



// ======================================================
// PARTE 2 — BANCO DE ESTRATÉGIAS
// ======================================================

const estrategias = {

    feed: {

        numero: "01",

        publico: "JUVENTUDE",

        formatos: ["OFICINA", "VÍDEO"],

        titulo: "O que aparece no seu feed?",

        descricao:
            "Uma estratégia para conversar com jovens sobre publicidade, influenciadores, redes sociais e escolhas alimentares.",

        situacaoTitulo:
            "A alimentação também aparece na tela.",

        situacaoTexto1:
            "Durante um dia, participantes observam os conteúdos relacionados à alimentação que aparecem em seus feeds: anúncios, marcas, receitas, influenciadores, promoções e outras mensagens.",

        situacaoTexto2:
            "A partir dessa observação, o grupo pode discutir quem produz essas mensagens, quais alimentos aparecem com maior frequência e como o ambiente digital participa das escolhas alimentares.",

        temas: [
            "Publicidade",
            "Redes sociais",
            "Escolhas alimentares",
            "Juventude",
            "Ambiente alimentar"
        ],

        publicoDescricao:
            "Jovens e adolescentes",

        formatosDescricao:
            "Oficina, vídeo e atividade em grupo",

        onde:
            "Escolas, projetos, coletivos e espaços comunitários"

    },


    tempo: {

        numero: "02",

        publico: "TRABALHADORES",

        formatos: ["VÍDEO", "PODCAST", "WHATSAPP"],

        titulo: "Cozinhar quando falta tempo",

        descricao:
            "Uma estratégia para conversar sobre alimentação considerando trabalho, deslocamento, tempo disponível e as condições concretas da rotina.",

        situacaoTitulo:
            "Nem sempre cozinhar depende apenas de vontade.",

        situacaoTexto1:
            "Uma pessoa pode passar grande parte do dia entre trabalho, estudo, deslocamentos e outras responsabilidades. Ao chegar em casa, o tempo e a disposição para preparar uma refeição podem ser reduzidos.",

        situacaoTexto2:
            "A proposta é usar essas situações para conversar sobre alimentação sem reduzir o problema às escolhas individuais, observando também as condições que organizam a vida cotidiana.",

        temas: [
            "Tempo",
            "Trabalho",
            "Rotina",
            "Cozinhar",
            "Vida cotidiana"
        ],

        publicoDescricao:
            "Trabalhadores e pessoas com rotinas intensas",

        formatosDescricao:
            "Vídeo, podcast e WhatsApp",

        onde:
            "Ambientes de trabalho, serviços, projetos e redes sociais"

    },


    publicidade: {

        numero: "03",

        publico: "JUVENTUDE",

        formatos: ["VÍDEO", "OFICINA"],

        titulo: "Publicidade também alimenta escolhas",

        descricao:
            "Uma proposta para conversar sobre publicidade, marcas, redes sociais e as mensagens que circulam em torno da alimentação.",

        situacaoTitulo:
            "Escolhas também são atravessadas por mensagens.",

        situacaoTexto1:
            "Anúncios, embalagens, promoções, influenciadores e conteúdos patrocinados fazem parte dos ambientes em que as pessoas entram em contato com alimentos e bebidas.",

        situacaoTexto2:
            "A estratégia propõe observar essas mensagens e discutir como diferentes formas de comunicação participam da construção de desejos, referências e escolhas.",

        temas: [
            "Publicidade",
            "Marcas",
            "Redes sociais",
            "Comunicação",
            "Escolhas alimentares"
        ],

        publicoDescricao:
            "Jovens e adolescentes",

        formatosDescricao:
            "Vídeo e oficina",

        onde:
            "Escolas, coletivos, projetos e espaços de formação"

    },


    memorias: {

        numero: "04",

        publico: "PESSOAS IDOSAS",

        formatos: ["PODCAST", "RÁDIO"],

        titulo: "Receitas que contam histórias",

        descricao:
            "Uma estratégia que utiliza memórias, receitas e modos de preparo como caminhos para conversar sobre cultura alimentar.",

        situacaoTitulo:
            "Uma receita pode guardar muito mais que ingredientes.",

        situacaoTexto1:
            "Receitas podem carregar lembranças de pessoas, lugares, festas, modos de fazer e transformações ocorridas ao longo da vida.",

        situacaoTexto2:
            "A proposta é partir dessas histórias para produzir conversas sobre alimentação, cultura, memória e transmissão de conhecimentos entre gerações.",

        temas: [
            "Memória",
            "Cultura alimentar",
            "Receitas",
            "Histórias",
            "Gerações"
        ],

        publicoDescricao:
            "Pessoas idosas e grupos intergeracionais",

        formatosDescricao:
            "Podcast, rádio e rodas de conversa",

        onde:
            "Comunidades, unidades de saúde, rádios e projetos culturais"

    },


    familia: {

        numero: "05",

        publico: "FAMÍLIAS",

        formatos: ["WHATSAPP", "CAMPANHA"],

        titulo: "Comer junto também importa",

        descricao:
            "Uma estratégia para conversar sobre refeições compartilhadas, convivência e diferentes formas de organizar a alimentação familiar.",

        situacaoTitulo:
            "A refeição também é um momento de encontro.",

        situacaoTexto1:
            "Horários diferentes, trabalho, escola e outras atividades podem tornar difícil reunir todas as pessoas de uma família em torno da mesma refeição.",

        situacaoTexto2:
            "A estratégia propõe conversar sobre os significados de comer junto sem idealizar uma única configuração familiar ou uma única rotina possível.",

        temas: [
            "Família",
            "Convivência",
            "Refeições",
            "Rotina",
            "Comensalidade"
        ],

        publicoDescricao:
            "Famílias em diferentes configurações",

        formatosDescricao:
            "WhatsApp e campanha",

        onde:
            "Comunidades, escolas, serviços e ambientes digitais"

    },


    territorio: {

        numero: "06",

        publico: "TERRITÓRIOS",

        formatos: ["OFICINA", "MAPEAMENTO"],

        titulo: "Onde a comida acontece?",

        descricao:
            "Uma proposta para observar feiras, mercados, cozinhas, produtores e práticas alimentares presentes no território.",

        situacaoTitulo:
            "O território também conta uma história sobre alimentação.",

        situacaoTexto1:
            "Os lugares onde alimentos são produzidos, vendidos, preparados e compartilhados ajudam a compreender como a alimentação acontece em uma comunidade.",

        situacaoTexto2:
            "A proposta é construir um mapa coletivo desses lugares, identificando recursos, dificuldades, práticas e conhecimentos presentes no território.",

        temas: [
            "Território",
            "Feiras",
            "Mercados",
            "Acesso",
            "Cultura alimentar"
        ],

        publicoDescricao:
            "Comunidades e grupos territoriais",

        formatosDescricao:
            "Oficina e mapeamento coletivo",

        onde:
            "Bairros, comunidades, escolas e projetos locais"

    }

};



// ======================================================
// PARTE 3 — PÁGINA DA ESTRATÉGIA
// ======================================================


// Descobre se estamos em estrategia.html

const paginaEstrategia =
    document.querySelector(".pagina-estrategia");


if (paginaEstrategia) {

    // Lê o endereço:
    // estrategia.html?id=feed

    const parametros =
        new URLSearchParams(window.location.search);

    const id =
        parametros.get("id") || "feed";


    // Busca a estratégia no banco

    const estrategia =
        estrategias[id] || estrategias.feed;


    // ==================================================
    // HERO
    // ==================================================

    const titulo =
        document.getElementById("estrategiaTitulo");

    const descricao =
        document.getElementById("estrategiaDescricao");

    const numero =
        document.getElementById("estrategiaNumero");

    const publico =
        document.getElementById("estrategiaPublico");

    const formatos =
        document.getElementById("estrategiaFormatos");


    if (titulo) {
        titulo.textContent = estrategia.titulo;
    }

    if (descricao) {
        descricao.textContent = estrategia.descricao;
    }

    if (numero) {
        numero.textContent = estrategia.numero;
    }

    if (publico) {
        publico.textContent = estrategia.publico;
    }


    if (formatos) {

        formatos.innerHTML = "";

        estrategia.formatos.forEach(formato => {

            const span =
                document.createElement("span");

            span.textContent = formato;

            formatos.appendChild(span);

        });

    }


    // ==================================================
    // SITUAÇÃO
    // ==================================================

    const situacaoTitulo =
        document.getElementById("situacaoTitulo");

    const situacaoTexto1 =
        document.getElementById("situacaoTexto1");

    const situacaoTexto2 =
        document.getElementById("situacaoTexto2");


    if (situacaoTitulo) {
        situacaoTitulo.textContent =
            estrategia.situacaoTitulo;
    }

    if (situacaoTexto1) {
        situacaoTexto1.textContent =
            estrategia.situacaoTexto1;
    }

    if (situacaoTexto2) {
        situacaoTexto2.textContent =
            estrategia.situacaoTexto2;
    }


    // ==================================================
    // TEMAS
    // ==================================================

    const listaTemas =
        document.getElementById("listaTemas");


    if (listaTemas) {

        listaTemas.innerHTML = "";

        estrategia.temas.forEach(tema => {

            const span =
                document.createElement("span");

            span.textContent = tema;

            listaTemas.appendChild(span);

        });

    }


    // ==================================================
    // RESUMO
    // ==================================================

    const publicoDescricao =
        document.getElementById("publicoDescricao");

    const formatosDescricao =
        document.getElementById("formatosDescricao");

    const onde =
        document.getElementById("ondeEstrategia");


    if (publicoDescricao) {

        publicoDescricao.textContent =
            estrategia.publicoDescricao;

    }


    if (formatosDescricao) {

        formatosDescricao.textContent =
            estrategia.formatosDescricao;

    }


    if (onde) {

        onde.textContent =
            estrategia.onde;

    }


    // ==================================================
    // TÍTULO DA ABA DO NAVEGADOR
    // ==================================================

    document.title =
        `${estrategia.titulo} | Caminhos para Comunicar o Guia`;

}