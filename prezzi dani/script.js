// Gestione tema chiaro/scuro
const themeToggle = document.getElementById('theme-toggle');

// Controlla il tema salvato nel localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.checked = true;  // Imposta il toggle su on per tema scuro
} else {
    document.body.classList.remove('dark-theme');
    themeToggle.checked = false;  // Imposta il toggle su off per tema chiaro
}

// Aggiungi evento per il cambio di tema
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Gestione login admin
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Controllo delle credenziali (qui dovresti implementare il back-end per la verifica)
    if (username === 'admin' && password === 'admin123') {
        alert('Login effettuato con successo!');
        // Mostra il pannello admin
        window.location.href = 'admin.html';  // O reindirizza alla pagina Admin
    } else {
        alert('Credenziali errate!');
    }
});
