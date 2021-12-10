<template>
    <div class="Item">
        <Productos />
    </div>
</template>

<script>

    import Productos from "./Productos.vue"

    export default{
        name: 'Item',

        components: {
            Productos
        },

        data: function(){
        },

        methods:{
        },
        
        created: function(){
        }

    }
</script>

<style scoped>
.Item {
    width: 100%;
}
</style>
