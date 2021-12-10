<template>
    <div class="productos">
    <h1 class="productobonito">COMIDA</h1>
    <div class="contProducto">

        <Product />

    </div>
    </div>
</template>

<script>
    import Product from "./Product.vue"

    export default{

        name: 'Item',

        components: {
            Product
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
.productos{
    width: 100%;
    padding: 30px;
}
.productobonito{
    width: 100%;
    text-align: center;
    font-size: 50px;
}

.contProducto{
    height: 500px;
    border: 1px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
</style>