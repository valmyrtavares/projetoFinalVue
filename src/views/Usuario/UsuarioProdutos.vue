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
        </ProdutoItem>
      </li>
    </transition-group>
  </section>
</template>
  
       
        

<script>
import produtoAdicionar from '@/components/produtoAdicionar.vue'
import ProdutoItem from '@/components/produtoItem.vue'
 import { mapState, mapActions } from 'vuex';

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
    ...mapActions(["getUsuarioProdutos"])
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

</style>