<template>
  <div id="app" class="container">
            <div class="row">
                <!-- Preloader  -->
                <preloader v-if = "isLoading"></preloader>

                <!-- TODO List -->
                <ul class="collection with-header" v-else>
                    <li class="collection-header">
                        <todo-header>
                            <template v-slot:header></template>
                        </todo-header>

                        <todo-list :done-todos="doneTodos" :todo-items="todoItems"></todo-list>
                
                        <form class="row" @submit.prevent="addNewTodo">
                            <todo-input v-model= "newTodo"></todo-input>
                            
                            <todo-button>
                                <template v-slot:button></template>
                            </todo-button>
                        </form> 
                    </li>
                    <todo-Item 
                        v-for = "(item, index) in todoItems" 
                        :key  = "item.id"
                        :is-checked = "item.isChecked"
                        @remove-item = "removeTodoItem(index)"
                        @checked-change = "item.isChecked = $event"
                        @create-item = "editNewTodo(index)"
                    >
                        {{item.text}}
                    </todo-Item>
                </ul>
            </div>
        </div>
</template>

<script>
import preloaderComponent from './components/Preloader.vue';
import todoButtonComponent from './components/TodoButtonComponents.vue';
import todoHeaderComponent from './components/TodoHeaderComponent.vue';
import todoInputComponent from './components/TodoInputComponent.vue';
import todoListComponent from './components/TodoListComponent.vue';
import todoItemComponent from './components/TodoItem.vue';
export default {
  components: {
        preloader: preloaderComponent,
        todoItem: todoItemComponent,
        todoHeader: todoHeaderComponent,
        todoList: todoListComponent,
        todoInput: todoInputComponent,
        todoButton: todoButtonComponent
    },
    data() {
      return {
        isChecked: false,
        isLoading: true,
        newTodo: '',
        todoItems: [
            { id: 1, text: 'Переписать тест по Javascript', isChecked: false },
            { id: 2, text: 'Повторить Git', isChecked: false },
            { id: 3, text: 'Доделать проект по JS', isChecked: false },
            { id: 4, text: 'Выучить Vue.js', isChecked: false },
            { id: 5, text: 'Повторить HTML&CSS', isChecked: false }
        ]
      }
    },
    computed: {
        doneTodos() {
            return this.todoItems.filter(item => item.isChecked);
        }
    },
    created() {
        this.hidePreloader();
    },
    watch: {
        doneTodos(newValue) {
            if (!this.todoItems.length) {
                M.toast({ html: 'Список дел пуст!' });
            }
            else if (newValue.length === this.todoItems.length) {
                M.toast({ html: 'Все дела выполнены!' });
            }
        }
    },
    methods: {
        addNewTodo() {
            if (!this.newTodo.length) return;

            this.todoItems.push({
                id        : this.todoItems.length + 1,
                text      : this.newTodo,
                isChecked : false
            });

            this.newTodo = '';
        },

        hidePreloader() {
            setTimeout(() => this.isLoading = false, 1000);
        },

        removeTodoItem(itemIdx) {
            this.todoItems.splice(itemIdx, 1);
        },

        editNewTodo(itemIdx) {
            let newEdit = prompt('Введите новое задание');
            this.todoItems[itemIdx].text = newEdit;
        }
    }
}
</script>

<style lang="scss">
  html, body, #app {
      height: 100%;
  }

  #app {
      padding: 3rem 1rem;
  }

  #toast-container {
      top   : 1%;
      right : 2%;
  }

  form.row {
      display       : flex;
      align-items   : center;
      margin-bottom : 0;
  }

  form.row .col.s11 {
      margin-left: 0;
  }

  span.badge.new {
      position    : absolute;
      right       : 8px;
      top         : 8px;
      font-weight : 400;
  }
</style>
