


Vue.component('lista-tarefas', {

    template: "<div><tarefa v-for='tarefa in tarefas'> {{tarefa.descricao}} </tarefa></div>",
    data() { //Criamos a função data e retornamos um objeto para tag, pois não estamos no mesmo arquivo html
        return {
            tarefas: [
                { descricao: 'ao Banco no Brasil' },
                { descricao: 'gravar as aulas' },
                { descricao: 'para a aula de inglês' }
            ]
        }
    }
});


Vue.component('tarefa', {

    template: '<li>Ir <slot></slot></li>',

});

// o uso da tag <slot>, faz com que seja possivel adicionar um conteudo no corpo do componente

new Vue({
    el: '#root',
    data: {

    }
})