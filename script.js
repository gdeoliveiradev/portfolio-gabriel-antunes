// ==========================================
// ANO AUTOMÁTICO DO RODAPÉ
// ==========================================

const anoAtual = document.getElementById("anoAtual");

anoAtual.textContent = new Date().getFullYear();


// ==========================================
// ALTERAÇÃO ENTRE TEMA CLARO E ESCURO
// ==========================================

const botaoTema = document.getElementById("botaoTema");

botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("tema-escuro");

    // Modifica o texto do botão conforme o tema atual
    if (document.body.classList.contains("tema-escuro")) {

        botaoTema.textContent = "Tema claro";

    } else {

        botaoTema.textContent = "Tema escuro";

    }

});


// ==========================================
// VALIDAÇÃO DO FORMULÁRIO DE CONTATO
// ==========================================

const formulario = document.getElementById("formContato");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

const erroNome = document.getElementById("erroNome");
const erroEmail = document.getElementById("erroEmail");
const erroMensagem = document.getElementById("erroMensagem");

const mensagemSucesso =
    document.getElementById("mensagemSucesso");


// Função responsável por verificar o formato do e-mail
function emailValido(emailInformado) {

    const formatoEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return formatoEmail.test(emailInformado);

}


// Evento executado quando o formulário é enviado
formulario.addEventListener("submit", function (evento) {

    // Impede que a página seja recarregada
    evento.preventDefault();

    let formularioValido = true;

    // Limpa mensagens anteriores
    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroMensagem.textContent = "";
    mensagemSucesso.textContent = "";


    // Validação do nome
    if (nome.value.trim() === "") {

        erroNome.textContent =
            "Por favor, informe seu nome.";

        formularioValido = false;

    }


    // Validação do e-mail
    if (email.value.trim() === "") {

        erroEmail.textContent =
            "Por favor, informe seu e-mail.";

        formularioValido = false;

    } else if (!emailValido(email.value)) {

        erroEmail.textContent =
            "Digite um endereço de e-mail válido.";

        formularioValido = false;

    }


    // Validação da mensagem
    if (mensagem.value.trim() === "") {

        erroMensagem.textContent =
            "Por favor, escreva uma mensagem.";

        formularioValido = false;

    }


    // Simulação do envio do formulário
    if (formularioValido) {

        mensagemSucesso.textContent =
            "Mensagem enviada com sucesso!";

        formulario.reset();

    }

});