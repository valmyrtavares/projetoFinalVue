<template>
  <section class="container">
    <div v-for="produto in produtos" :key="produto.id">
        <img v-if="produto.foto" :src="produto.fotos[0].src" :alt="produto.foto[0].titulo">
        <p class="preco">{{produto.preco}}</p>
        <h2 class="titulo">{{produto.nome}}</h2>
        <p class="preco">{{produto.descricao}}</p>
    </div> 
      
  </section>
</template>


<script>
 import{api} from '../services.js'

export default {
name:"produtosLista",
data(){
    return{
        produtos:{}
    }
},
methods:{
    getProdutos(){
        api.get("http://localhost:3000/produto").then(response => {this.produtos = response.data})
    },
   
},
created(){
    this.getProdutos();
}

}
</script>

<style>

</style>