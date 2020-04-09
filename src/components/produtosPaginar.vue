<template>

  
 
  <ul v-if="paginasTotal > 1">
      <li v-for="pagina in paginas" :key="pagina">
          <router-link :to="{query:query(pagina)}">{{pagina}}</router-link>
      </li>
  </ul>


</template>

<script>
export default {
    name:"produtosPaginar",
   
    props:{
        produtosPorPagina:{
            type: Number,
            default:1
        },
         produtosTotal:{
            type: Number,
            default:1
        },
    },
    methods:{
        query(pagina){
            return{
                ...this.$route.query,
            _page: pagina

            }
        }
    },
    computed:{
        paginas(){
            const current = Number(this.$route.query._page)
            const range = 9;
            const offset = Math.ceil(range/2)
            const total = this.paginasTotal;
            const pageArray=[];
            for(let i = 1; i<= total; i++){
                 pageArray.push(i)
                
            }
          
             pageArray.splice(0, current - offset)
              pageArray.splice(range, total)
            return pageArray
        },

        paginasTotal(){
            const total = this.produtosTotal / this.produtosPorPagina
            return  Math.ceil(total)
        }
    }
}
</script>
  
<style scoped>
ul{
    grid-column: 1 / -1;
}
li{
    display:inline-block;
}
li a{
    padding: 2px 8px;
    border-radius: 2px;
    margin: 4px
}
ul a.router-link-exact-active{
    background: #87f;
    color:white;
}
ul a:hover{
    background: #87f;
    color:white;
}
</style>
          
            

    

            


