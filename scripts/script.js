// ==========================
// 🌗 MODO CLARO / ESCURO
// ==========================

// Botão de alternar tema
const botaoTema = document.querySelector('#botao-tema');
const corpo = document.body;

// Verifica o tema salvo no armazenamento local
if (localStorage.getItem('tema') === 'escuro') {
  corpo.classList.add('modo-escuro');
  botaoTema.classList.add('ativo');
}

// Alternar tema ao clicar
botaoTema.addEventListener('click', () => {
  corpo.classList.toggle('modo-escuro');
  botaoTema.classList.toggle('ativo');

  // Salvar preferência do usuário
  if (corpo.classList.contains('modo-escuro')) {
    localStorage.setItem('tema', 'escuro');
  } else {
    localStorage.setItem('tema', 'claro');
  }
});

// ==========================
// 🎯 ROLAGEM SUAVE
// ==========================

// Esperar o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
  const cabecalho = document.querySelector('header');
  const linksMenu = document.querySelectorAll('#menu ul a.link');

  linksMenu.forEach(link => {
    link.addEventListener('click', evento => {
      evento.preventDefault();

      const idDestino = link.getAttribute('href');
      const destino = document.querySelector(idDestino);

      if (destino) {
        const alturaCabecalho = cabecalho.offsetHeight;
        const posicaoDestino =
          destino.getBoundingClientRect().top + window.scrollY - alturaCabecalho - 10;

        // Rolagem suave moderna
        window.scrollTo({
          top: posicaoDestino,
          behavior: 'smooth'
        });
      }
    });
  });
});

// ==========================
// 🧭 MENU ATIVO AO ROLAR
// ==========================

// Destacar o ícone ativo conforme a rolagem
window.addEventListener('scroll', () => {
  const secoes = document.querySelectorAll('main section, main article');
  const posicaoScroll = window.scrollY + 120; // compensar altura do cabeçalho

  secoes.forEach(secao => {
    const topo = secao.offsetTop;
    const altura = secao.offsetHeight;
    const id = secao.getAttribute('id');

    if (posicaoScroll >= topo && posicaoScroll < topo + altura) {
      document.querySelectorAll('#menu a.link').forEach(a => a.classList.remove('ativo'));
      const linkAtivo = document.querySelector(`#menu a[href="#${id}"]`);
      if (linkAtivo) linkAtivo.classList.add('ativo');
    }
  });
});
