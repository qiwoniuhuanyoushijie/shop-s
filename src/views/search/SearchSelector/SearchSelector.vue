<template>
    <div class="clearfix selector">
        <div class="type-wrap logo">
            <div class="fl key brand">品牌</div>
            <div class="value logos">
                <ul class="logo-list">
                   <li v-for="(trademark,index) in trademark.tmId"
                   @click="$emit('getTradeMark',trademark.tmId,trademark.tmName)"
                   >{{trademark.tmName}}</li>
                </ul>
            </div>
            <div class="ext">
                <a href="javascript:void(0);" class="sui-btn">多选</a>
                <a href="javascript:void(0);">更多</a>
            </div>
        </div>
        <!-- 商品属性 -->
        <div class="type-wrap" v-for="(attr,index) in attrsList" :key="attr.attrId">
            <div class="fl key">{{attr.attrName}}</div>
            <div class="fl value">
                <ul class="type-list">
                    <li v-for="(attrValue,index) in attr.attrVauList" :key="index">
                        <a @click="$emit('getAttrAndAttrValue',attr.attrId,attr.attrName,attrValue)">{{attrValue}}</a>
                    </li>
                  
                </ul>
            </div>
            <div class="fl ext"></div>
        </div>
        <div class="type-wrap">
            <div class="fl key">显示屏尺寸</div>
            <div class="fl value">
                <ul class="type-list">
                    <li>
                        <a>4.0-4.9英寸</a>
                    </li>
                    <li>
                        <a>4.0-4.9英寸</a>
                    </li>
                </ul>
            </div>
            <div class="fl ext"></div>
        </div>
        <div class="type-wrap" v-for="(attr,index) in attrsList" :key="attr.id">
            <div class="fl key">{{attr.attrName}}</div>
            <div class="fl value">
                <ul class="type-list">
                    <li v-for="(attrValue,index) in  attr.attrValueList" :key="index">
                        <a @click="$emit('getAttrAndAttrValue',attr.attrId,attr.attrName,attrValue)">{{attrValue}}</a>
                    </li>
             
                </ul>
            </div>
            <div class="fl ext"></div>
        </div>


    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'searchSelector',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    computed:{
        ...mapGetters(['trademarkList','attrsList'])
    }
};
</script>

<style lang="less" scoped>

</style>