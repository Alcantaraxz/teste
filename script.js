// Função para mostrar a seção correspondente e esconder as outras
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        
        const targetId = event.target.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        
        document.querySelectorAll('main section').forEach(section => {
            section.classList.remove('active');
        });

        
        targetSection.classList.add('active');
    });
});
