let vm = new Vue({
    el: '#app',
    data: {
        isChecked: false,
        isLoading: true,
        newTodo: '',
        todoItems: [
            {id: 1, text: 'Переписать тест по Javascript', target: event, isChecked: false},
            {id: 2, text: 'Не переписать тест по Javascript', target: event, isChecked: false},
            {id: 3, text: 'Я написал тест по Javascript', target: event, isChecked: false},
            {id: 4, text: 'Я не написал тест по Javascript', target: event, isChecked: false}
        ]
    },
    methods: {
        hidePreloader() {
            setTimeout(() => this.isLoading = false, 1000)
        },
        addNewTodo() {
            if(!this.newTodo.trim().length) return;
            this.todoItems.push({
                id: this.todoItems.length +1,
                text: this.newTodo,
                isChecked: false,
            });
            this.newTodo = '';
        }
    },
    computed: {
        doneTodos() {
            return this.todoItems.filter(item => item.isChecked);
        }
    },
    watch: {
        doneTodos(newValue) {
            if(newValue.length == this.todoItems.length && this.todoItems.length !== 0) {
                M.toast({ html: 'Все дела выполнены!' });
            }
            else if(this.todoItems.length == 0) {
                M.toast({ html: 'Список дел пуст :(' });
            }
        }
    },
    created() {
        this.hidePreloader();
    }
});