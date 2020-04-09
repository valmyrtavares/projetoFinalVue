<template>
  <section>
    <h2>      
      adicionar Produto
    </h2>
    <produtoAdicionar/>
    <h2>Seus Produtos</h2>
    <transition-group mode in-out v-if="usuario_produtos" name="list" tag="ul">
      <li v-for="(produto, index) in usuario_produtos" :key="index" >
        <ProdutoItem :produto="produto">
          {{produto.descricao}}
          <button class="deletar" @click="deletarProduto(produto.id)">Delete</button>
        </ProdutoItem>
      </li>
    </transition-group>
  </section>
</template>
  
       
        

<script>
import produtoAdicionar from '@/components/produtoAdicionar.vue'
import ProdutoItem from '@/components/produtoItem.vue'
 import { mapState, mapActions } from 'vuex';
import { api } from '@/services.js'

export default {
  name:"UsuarioProdutos",
  components:{
    produtoAdicionar,
    ProdutoItem
  },
  computed:{
    ...mapState(["login","usuario","usuario_produtos"])
  },
  methods:{
    ...mapActions(["getUsuarioProdutos"]),

    deletarProduto(id){
      const confirmar = window.confirm("Deseja deletar esse produto")
      if(confirmar)
      api.delete(`/produto/${id}`).then(()=> {
        this.getUsuarioProdutos()
      }).catch((error) => {
        console.log(error.response)
      })
    }
  },
  watch:{
    login(){
      this.getUsuarioProdutos()
    }
  },
  created(){
    if(this.login)
    this.getUsuarioProdutos()
  }
}
</script>

<style scoped>
h2{
  margin-bottom:20px;
}
.list-enter,
  .list-leave-to{
    opacity: 0;
    transform: translate3d(20px, 0 , 0 )

  }

  .list-enter-active,
  .list-leave-active{
    transition: all .3s
  }
  .deletar{
    position:absolute;
    top:0px;
    right:0px;
    background:url(../../assets/remove.svg) no-repeat center center;
    width:24px;
    height:24px;
    text-indent:-140px;
    overflow:hidden;
    cursor:pointer;
    border:none;
  }

</style>