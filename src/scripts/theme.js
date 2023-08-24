function toggleDarkMode() {
    const button = document.querySelector("#dark-mode-toggle")

    const html = document.querySelector('html');

    html.classList.toggle('dark-mode');

    // Verifica se a classe dark-mode está presente no html
    const isDarkMode = html.classList.contains('dark-mode');
    const img = document.createElement("img");

    if (isDarkMode) {
        html.classList.add('dark-mode');
        button.innerHTML = "";
        img.src = "https://media.graphassets.com/BgTFGDVvRdymZmzAgg9t";
        button.appendChild(img);
    } else {
        html.classList.remove('dark-mode');
        button.innerHTML = "";
        img.src = "https://media.graphassets.com/AWCWFFLPSEWh4lhYs68c";
        button.appendChild(img);
    }

    
    // Salva a escolha no localStorage
    localStorage.setItem('@openMusic:darkMode', isDarkMode);
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector("#dark-mode-toggle")
    const html = document.querySelector('html');
    const isDarkMode = localStorage.getItem('@openMusic:darkMode') === 'true';

    const img = document.createElement("img");

    if (isDarkMode) {
        html.classList.add('dark-mode');
        img.src = "https://media.graphassets.com/BgTFGDVvRdymZmzAgg9t";
        button.appendChild(img);
    } else {
        html.classList.remove('dark-mode');
        img.src = "https://media.graphassets.com/AWCWFFLPSEWh4lhYs68c";
        button.appendChild(img);
    }
    

    
});
// Adiciona um escutador de eventos ao botão
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', toggleDarkMode);