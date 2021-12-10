<template>
    <div class="productCard">
        <div class="contImgBtnProduc">
            <img src="../assets/Screenshot_8.png" alt=".../" />
            <button>+</button>
        </div>
        <div class="contDatosProduc">
            <h3>NombreProducto</h3>
            <h4>Gramos</h4>
            <h4>$xxxx</h4>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.productCard{
    width: 220px;
    padding-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}

.contImgBtnProduc{
    width: 90%;
    overflow: hidden;
}

.contImgBtnProduc img{
    width: 100%;
}

.contImgBtnProduc button{
    position: relative;    
    bottom: 17px;
    left: 168px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
}

.contDatosProduc{
    width: 90%;
    padding-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
}

</style>