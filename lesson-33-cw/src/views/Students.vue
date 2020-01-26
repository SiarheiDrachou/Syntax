<template>
    <b-row>
        <b-col>
          <b-list-group>
                <b-list-group-item 
                    v-for = "item in students"
                    :key = "item.id"
                    :to = "{ name: 'student', params: { id: item.id } }"
                    :active = "item.id == $route.params.id"
                >
                    {{item.name}}
                </b-list-group-item>
            </b-list-group>
        </b-col>
        
        <b-col>
          <router-view></router-view>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        data() {
            return {
                students: [
                    {id:1, name:'sergey', projects:2, email:'google@gmail.com'},
                    {id:2, name:'nina', projects:2, email:'google@gmail.com'},
                    {id:3, name:'andrey', projects:0, email:'google@gmail.com'}
                ]
            };
        }
    }
</script>