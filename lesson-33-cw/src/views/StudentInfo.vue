<template>
    <b-card :title="student.name">

    </b-card>
</template>

<script>
    export default {
        data() {
            return {
                student: {}
            };
        },
        watch: {
            $route: {
                immediate: true,
                handler(to) {
                    this.student = this.$parent.students.find(item => item.id == to.params.id);
                }
            }
        }
    }
</script>