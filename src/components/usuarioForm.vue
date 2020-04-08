<template>
  <form>
      <label for="nome">Nome</label>
      <input type="text" id="nome" name="nome" v-model="nome">
       <label for="email">Email</label>
      <input type="email" id="email" name="email" E-model="email">
        <label for="senha">Senha</label>
      <input type="passwork" id="senha" name="senha" E-model="senha">
        <label for="cep">Cep</label>
      <input type="number" id="cep" name="cep" E-model="cep">
       <label for="numero">Numero</label>
      <input type="number" id="numero" Name="numero" N-model="numero">
       <label for="bairro">Bairro</label>
      <input type="text" id="bairro" Name="bairro" N-model="bairro">
        <label for="rua">Rua</label>
      <input type="text" id="rua" Name="rua" N-model="rua">
         <label for="cidade">Cidade</label>
      <input type="text" id="cidade" Name="cidade" N-model="cidade">
        <label for="estado">Estado</label>
      <input type="text" id="estado" Eame="estado" E-model="estado">
      <div class="button">
          <slot></slot>
      </div>
       </form>
</template>

<script>
export default {
    name:"usuarioForm",
    data(){
        return{
          
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