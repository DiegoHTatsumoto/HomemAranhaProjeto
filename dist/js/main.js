    function openTab(tabName) {
        // Esconde todos os conteúdos
        var contents = document.querySelectorAll('.tab-content');
        contents.forEach(function(content) {
        content.classList.remove('active-content');
        });
    
        // Remove a classe ativa de todas as abas
        var tabs = document.querySelectorAll('.tab');
        tabs.forEach(function(tab) {
        tab.classList.remove('active-tab');
        });
    
        // Mostra o conteúdo da aba selecionada
        document.getElementById(tabName).classList.add('active-content');
    
        // Marca a aba como ativa
        var activeTab = document.querySelector('.tab[onclick="openTab(\'' + tabName + '\')"]');
        activeTab.classList.add('active-tab');
    }
    