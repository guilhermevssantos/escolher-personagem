const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/img/${idPersonagem}.png`;

        const alterarNomePersonagemSelecionado = document.getElementById('nome-personagem');
        alterarNomePersonagemSelecionado.innerText = personagem.getAttribute('data-name');

        const alterarDescricaoPersonagemSelecionado = document.getElementById('descricao-personagem');
        alterarDescricaoPersonagemSelecionado.innerText = personagem.getAttribute('data-description');

        
    })
})