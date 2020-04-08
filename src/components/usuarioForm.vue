<template>
  <form>
      <label for="nome">Nome</label>
      <input type="text" id="nome" name="nome" v-model="nome">
       <label for="email">Email</label>
      <input type="email" id="email" name="email" v-model="email">
        <label for="senha">Senha</label>
      <input type="passwork" id="senha" name="senha" v-model="senha" >
        <label for="cep">Cep</label>
      <input type="number" id="cep" name="cep" v-model="cep" @keyup="preencherCep">
       <label for="numero">Numero</label>
      <input type="number" id="numero" Name="numero" v-model="numero">
       <label for="bairro">Bairro</label>
      <input type="text" id="bairro" Name="bairro" v-model="bairro">
        <label for="rua">Rua</label>
      <input type="text" id="rua" Name="rua" v-model="rua">
         <label for="cidade">Cidade</label>
      <input type="text" id="cidade" Name="cidade" v-model="cidade">
        <label for="estado">Estado</label>
      <input type="text" id="estado" Eame="estado" v-model="estado">
      <div class="button">
          <slot></slot>
      </div>
       </form>
</template>

<script>
import { mapFields } from '@/helpers.js'
import { getCep } from '@/services.js'


export default {
    name:"usuarioForm",
   computed:{
     ...mapFields({
       fields: ["nome","email","senha","rua","cep","numero","bairro","cidade","estado"],
       base: "usuario",
       mutation: "UPDATE_USUARIO"

     })
       
   },
   methods: {
    preencherCep() {
     
      const cep = this.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        getCep(cep).then(response => {
          console.log(response.data)
          this.rua = response.data.logradouro;
          this.bairro = response.data.bairro;
          this.estado = response.data.uf;
          this.cidade = response.data.localidade;
        });
      }
    }
  }

}
</script>
        

<style scoped>

form{
    display:grid;
    grid-template-columns: 80px 1fr;
    align-items:center
}
.button{
    grid-column: 2;
    margin-top: 10px;
}


</style>