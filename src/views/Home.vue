<template>
  <section>
  <h1>&#128077; Compre ou venda&#128077;</h1>
  <produtosLista/>
  <produtosBuscar/>


  </section>

  
</template>

<script>
  import produtosBuscar from "@/components/produtosBuscar.vue"
   import produtosLista from "@/components/produtosLista.vue"


export default {
  name: 'Home',
  components:{
    produtosBuscar,
    produtosLista
  }
 
}
</script>
<style scoped>
h1{
  font-size:2rem;
  color:#87f;
}

</style>
