document.addEventListener("DOMContentLoaded", function () {
    
    /* ==========================================================================
       1. CONTROLE DO HEADER (Efeito opaco ao rolar a página)
       ========================================================================== */
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       2. INTRO ANIMATIONS ENGINE (Intersection Observer)
       ========================================================================== */
    const sections = document.querySelectorAll('.hidden-section');
    
    const animationOptions = {
        root: null,
        threshold: 0.12,
        rootMargin: "0px"
    };

    const sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-section');
                observer.unobserve(entry.target);
            }
        });
    }, animationOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    /* ==========================================================================
       3. NOVO SISTEMA DE COTAÇÃO COM CAMPOS AMPLIADOS
       ========================================================================== */
    const inputNome = document.getElementById('input-nome');
    const inputWhastappCliente = document.getElementById('input-whatsapp-cliente');
    const selectEmbarcacao = document.getElementById('select-embarcacao');
    const inputData = document.getElementById('input-data');
    const selectRoteiro = document.getElementById('select-roteiro');
    const inputPessoas = document.getElementById('input-pessoas');
    // const precoDinamicoDisplay = document.getElementById('preco-dinamico');
    const formCalculador = document.getElementById('form-calculador');

    // const VALOR_POR_PESSOA = 150.00;

    // Realiza o cálculo dinâmico baseado no valor de 150,00 por pessoa
//     const PRECO_EMBARCACAO = {
//     "Escuna": 130,
//     "Lancha": 150
// };

// function calcularOrcamento() {

//     const passageiros = parseInt(inputPessoas.value) || 0;
//     const embarcacao = selectEmbarcacao.value;

//     const valorPorPessoa = PRECO_EMBARCACAO[embarcacao] || 0;

//     const total = passageiros * valorPorPessoa;

//     precoDinamicoDisplay.textContent = total.toLocaleString('pt-BR', {
//         style: 'currency',
//         currency: 'BRL'
//     });

// }

// inputPessoas.addEventListener('input', calcularOrcamento);
// selectEmbarcacao.addEventListener('change', calcularOrcamento);

// calcularOrcamento();

    // Disparo dos dados estruturados para o WhatsApp da agência
    formCalculador.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = inputNome.value;
        const whatsappCliente = inputWhastappCliente.value;
        const embarcacao = selectEmbarcacao.value;
        const dataFormatada = inputData.value.split('-').reverse().join('/'); // Converte AAAA-MM-DD para DD/MM/AAAA
        const roteiro = selectRoteiro.value;
        const passageiros = inputPessoas.value;
        // const valorTotal = precoDinamicoDisplay.textContent;

        // Insira o número do WhatsApp comercial da Van Tur aqui (DDI + DDD + Número)
        const telefoneAgencia = "5512981727798"; 
        
        // Mensagem organizada e profissional para o atendente receber
        const mensagemWhatsApp = encodeURIComponent(
            `Olá, Van Tur Ubatuba Reserva! Gostaria de solicitar um orçamento.\n\n` +
            `👤 *Nome:* ${nome}\n` +
            `📱 *WhatsApp:* ${whatsappCliente}\n` +
            `⛵ *Embarcação:* ${embarcacao}\n` +
            `📅 *Data desejada:* ${dataFormatada}\n` +
            `🏝️ *Roteiro:* ${roteiro}\n` +
            `👥 *Quantidade de passageiros:* ${passageiros}\n\n` +
            `Aguardo informações sobre disponibilidade e valores. Obrigado!`
        );

        // Disparo abrindo em uma nova aba
        window.open(`https://api.whatsapp.com/send?phone=${telefoneAgencia}&text=${mensagemWhatsApp}`, '_blank');
    });
});





// Sessão FAQ acordeons
const items=document.querySelectorAll('.faq-item');

items.forEach(item=>{

const button=item.querySelector('.faq-question');

button.addEventListener('click',()=>{

const active=document.querySelector('.faq-item.active');

if(active && active!==item){

active.classList.remove('active');

active.querySelector('.faq-answer').style.maxHeight=null;

}

item.classList.toggle('active');

const answer=item.querySelector('.faq-answer');

if(item.classList.contains('active')){

answer.style.maxHeight=answer.scrollHeight+'px';

}else{

answer.style.maxHeight=null;

}

});

});

window.addEventListener('load',()=>{

const first=document.querySelector('.faq-item.active .faq-answer');

if(first){

first.style.maxHeight=first.scrollHeight+'px';

}

});

window.addEventListener('resize',()=>{

document.querySelectorAll('.faq-item.active .faq-answer').forEach(answer=>{

answer.style.maxHeight=answer.scrollHeight+'px';

});

});


