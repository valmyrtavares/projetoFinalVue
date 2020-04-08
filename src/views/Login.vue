<template>
  <section class="login">
    <h1>login</h1>
    <form>
        <label for="email"> Email </label>
        <input type="email" name="email" id="email" v-model="login.email">
          <label for="senha"> Senha </label>
        <input type="password" name="senha" id="senha" v-model="login.senha">
        <button class="btn" @click.prevent="logar">Logar</button>
    </form>
    <p class="perdeu">
        <a href="/" target="_black">Perdeu a senha? Clique aqui</a>
    </p>
    <loginCriar/>
   
  </section>
</template>

<script>
import loginCriar from '@/components/loginCriar.vue'

export default {
  name: "Login",
  components:{
      loginCriar
  },
  data(){
      return{
          login:{
              email:"",
              senah:""
          }
      }
  },
  methods:{
      logar(){
          this.$store.dispatch("getUsuario", this.login.email)
          this.$router.push({ name: "usuario" })
      }
  }
};
</script>

<style scoped>
.login{
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
}
h1{
    text-align: center;
    font-size: 2rem;
    margin-top: 40px;
    color: #87f;
}

form{
    display:grid;
}
.btn{
    width: 100%;
    max-width:300px;
    margin-left: auto;
    margin-right:auto;
}
.perdeu{
    text-align: center;
    margin: 20px auto 0 auto;
    
}
    
    


</style>