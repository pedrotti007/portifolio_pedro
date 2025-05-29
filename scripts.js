document.addEventListener('DOMContentLoaded', function() {
  const loginScreen = document.getElementById('login-screen');
  const visitedKey = 'hasVisitedPortfolio';

  // Verifica se o item 'hasVisitedPortfolio' NÃO existe no localStorage
  if (!localStorage.getItem(visitedKey)) {
    // Se não existe, é a primeira visita
    if (loginScreen) {
      loginScreen.classList.add('show-on-first-visit');
    }
    // Define o item no localStorage para marcar que o usuário já visitou
    localStorage.setItem(visitedKey, 'true');
  }
});