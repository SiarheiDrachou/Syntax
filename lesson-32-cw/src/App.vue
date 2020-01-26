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
                                <template v-slot:button> Добавить </template>
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
                        {{item.text | readMore(50, '...')}}
                    </todo-Item>

                    <delete-todo @delete-item = "deleteAllTodoItem()">
                        <template v-slot:delete> Удалить </template>
                    </delete-todo>
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
import deleteButtonComponent from './components/DeleteButtonComponent.vue';
import helpers from "@/mixins/helpers";

export default {
    mixins: [helpers],
    components: {
        preloader: preloaderComponent,
        todoItem: todoItemComponent,
        todoHeader: todoHeaderComponent,
        todoList: todoListComponent,
        todoInput: todoInputComponent,
        todoButton: todoButtonComponent,
        deleteTodo: deleteButtonComponent
    },
    data() {
      return {
        isChecked: false,
        isLoading: true,
        newTodo: '',
        todoItems: []
      }
    },
    computed: {
        doneTodos() {
            return this.todoItems.filter(item => item.isChecked);
        }
    },
    created() {
        this.hidePreloader();

        let todoItems = JSON.parse(localStorage.getItem('todoItems'));
        if(todoItems) {
            this.todoItems = todoItems;
        }
    },
    watch: {
        doneTodos(current, initial) {
            const totalLength = this.todoItems.length;
            if (!totalLength) {
                M.toast({ html: 'Список дел пуст!' });
            }
            else if (current.length > initial.length && current.length === totalLength) {
                M.toast({ html: 'Все дела выполнены!' });
            }
        },
        todoItems(current) {
            localStorage.setItem('todoItems', JSON.stringify(current));
        }
    },
    mounted() {
        if (localStorage.getItem('todoItems')) {
            try {
                this.todoItems = JSON.parse(localStorage.getItem('todoItems'));
            } 
            catch(e) {
                localStorage.removeItem('todoItems');
            }
        }
    },
    methods: {
        saveTodo() {
            const parsed = JSON.stringify(this.todoItems);
            localStorage.setItem('todoItems', parsed);
        },
        addNewTodo() {
            if (!this.newTodo.length) return;

            this.todoItems.push({
                id        : new Date().getTime(),
                text      : this.newTodo,
                isChecked : false
            });
            
            this.newTodo = '';
            this.saveTodo();
        },

        hidePreloader() {
            setTimeout(() => this.isLoading = false, 1000);
        },

        removeTodoItem(itemIdx) {
            this.todoItems.splice(itemIdx, 1);
            this.saveTodo();
        },
        deleteAllTodoItem() {
            this.todoItems.splice(0);
            this.saveTodo();
        },

        editNewTodo(itemIdx) {
            let newEdit = prompt('Введите новое задание');
            this.todoItems[itemIdx].text = newEdit;
            this.saveTodo();
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
