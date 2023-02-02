<template>
  <div id="app">
    <Header v-show="$route.meta.show"></Header>
    <router-view/>
   <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
/* import {reqBaseCategoryList} from '@/api/index' */
export default {
    name: 'app',

    data() {
        return {
            
        };
    },
/*     async mounted(){
     const result=await  reqBaseCategoryList();
     console.log(result)
    }, */

    methods: {
      
    },
    components:{
      Header,
      Footer
    }
};
</script>

<style lang="less" scoped>

</style>