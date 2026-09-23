// O site funciona sem JavaScript; aqui ficam apenas melhorias de apresentação.
const anoAtual = document.getElementById('anoAtual');
anoAtual.textContent = new Date().getFullYear();

const botaoTema = document.getElementById('botaoTema');
function aplicarTema(escuro) {
  document.body.classList.toggle('tema-escuro', escuro);
  botaoTema.textContent = escuro ? 'Tema claro / Light mode' : 'Tema escuro / Dark mode';
  botaoTema.setAttribute('aria-pressed', String(escuro));
}
let temaSalvo = null;
try { temaSalvo = localStorage.getItem('portfolio-tema'); } catch { /* Armazenamento pode estar indisponível. */ }
aplicarTema(temaSalvo !== 'claro');
botaoTema.hidden = false;
botaoTema.addEventListener('click', () => {
  const escuro = !document.body.classList.contains('tema-escuro');
  aplicarTema(escuro);
  try { localStorage.setItem('portfolio-tema', escuro ? 'escuro' : 'claro'); } catch { /* O tema continua funcionando nesta página. */ }
});

// Evita apresentar o estágio como já iniciado antes da data informada.
const hojeEmBrasilia = new Intl.DateTimeFormat('sv-SE', {
  timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit'
}).format(new Date());
if (hojeEmBrasilia >= '2026-10-01') {
  document.getElementById('statusSerproPt').textContent = 'Atuação atual · desde 01/10/2026';
  document.getElementById('statusSerproEn').textContent = 'Current role · since October 1, 2026';
}
