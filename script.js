document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const chatModal = document.getElementById('chat-modal');
    const formModal = document.getElementById('form-modal');
    const openChatBtn = document.getElementById('open-chat');
    const openFormBtn = document.getElementById('open-form');
    const closeButtons = document.querySelectorAll('.close');

    // Variáveis para controlar carregamento
    let isChatLoaded = false;
    let isFormLoaded = false;

    // Abrir modal do Chat
    openChatBtn.addEventListener('click', () => {
        chatModal.style.display = 'flex';
        if (!isChatLoaded) {
            loadKommoChat();
            isChatLoaded = true;
        }
    });

    // Abrir modal do Formulário
    openFormBtn.addEventListener('click', () => {
        formModal.style.display = 'flex';
        if (!isFormLoaded) {
            loadKommoForm();
            isFormLoaded = true;
        }
    });

    // Fechar modais
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            chatModal.style.display = 'none';
            formModal.style.display = 'none';
        });
    });

    // Fechar ao clicar fora do modal
    window.addEventListener('click', (e) => {
        if (e.target === chatModal) chatModal.style.display = 'none';
        if (e.target === formModal) formModal.style.display = 'none';
    });

    // Carregar Live Chat
    function loadKommoChat() {
        const script = document.createElement('script');
        script.innerHTML = `
            (function(a,m,o,c,r,m){
                a[m]={id:"1032499",hash:"46a0cc00decc67dcea0fffd3108e0cecaf52439698a8ace85dcf45fbf21b48d7",locale:"pt",setMeta:function(p){this.params=(this.params||[]).concat([p])}};
                a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};
                var d=a.document,s=d.createElement('script');
                s.async=true;
                s.id=m+'_script';
                s.src='https://gso.kommo.com/js/button.js';
                d.head.appendChild(s);
            }(window,0,'crmPlugin',0,0,'crm_plugin'));
        `;
        document.body.appendChild(script);
    }

    // Carregar Formulário
    function loadKommoForm() {
        const script = document.createElement('script');
        script.innerHTML = `
            !function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1440567",hash:"f0c2a14f4ed55bd284b78774a2ae5d55",locale:"en"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");
        `;
        document.body.appendChild(script);

        const amoformsScript = document.createElement('script');
        amoformsScript.id = 'amoforms_script_1440567';
        amoformsScript.async = true;
        amoformsScript.src = 'https://forms.kommo.com/forms/assets/js/amoforms.js?1746453267';
        document.body.appendChild(amoformsScript);
    }
});
