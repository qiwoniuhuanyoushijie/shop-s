<template>
  <div>
    <TypeNav></TypeNav>
   <ListContainer></ListContainer>
   <Recommend></Recommend>
   <Rank> </Rank>
    <Like></Like>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :floor="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>

import Brand from "./brand";
import ListContainer from "./listContainer";
import Recommend from "./recommend";
import Rank from "./rank";
import Like from "./like";
import Floor from "./floor";
//从仓库中获取floorlist
import { mapState } from "vuex";
export default {
  name: "home",

  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("getFloorList");
    this.$store.dispatch("getBannerList");
  },

  methods: {},
  components: {
    Brand,
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
  },
  computed:{
    ...mapState({
      floorList:(state)=>state.home.floorList
    })
  }
};
</script>

<style lang="less" scoped>
</style>


