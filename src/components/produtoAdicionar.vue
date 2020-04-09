<template>
  <form class="adicionar-produto">
    <label for="nome">Nome</label>    
    <input type="text" id="noem" name="nome" v-model="produto.nome">
     <label for="preco">Preço</label>    
    <input type="text" id="preco" name="preco" v-model="produto.preco">
      <label for="fotos">Fotos</label>    
    <input type="file" id="fotos" name="fotos" ref="fotos">
      <label id>Descrição</label>  
    <textarea v-model="produto.descricao" name="preco" id="preco"></textarea>
    <input class="btn" type="button" value="adicionar Produto" @click.prevent="adicionarProduto">
  </form>
</template>

<script>
import {api} from '@/services.js'
export default {
    name:"produtoAdicionar",
    data(){
      return{
        produto:{
          nome:"",
          preco:"",
          descricao:"",
          fotos:null
        }
      }
    },
    methods:{
      formatarProduto(){
        this.produto.usuario_id = this.$store.state.usuario.id
      },

      adicionarProduto(){
        this.formatarProduto();
        api.post("/produto", this.produto).then(()=>{
          this.$store.dispatch("getUsuarioProdutos")
        })

      }
    }

}
</script>

<style scoped>
  .adicionar-produto{
    display:grid;
    grid-template-columns: 100px, 1fr;
    align-items: center;
    margin-bottom: 60px;
  }
  .btn{
    grid-column: 2;
  }

  

</style>