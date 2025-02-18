    function openTab(tabName) {
        var contents = document.querySelectorAll('.tab-content');
        contents.forEach(function(content) {
        content.classList.remove('active-content');
        });
    
        var tabs = document.querySelectorAll('.tab');
        tabs.forEach(function(tab) {
        tab.classList.remove('active-tab');
        });

        document.getElementById(tabName).classList.add('active-content');
    
        var activeTab = document.querySelector('.tab[onclick="openTab(\'' + tabName + '\')"]');
        activeTab.classList.add('active-tab');
    }
    