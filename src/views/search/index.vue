<template>
    <div>
        <TypeNav />
        <div class="main">
            <div class="py-container">
                <!--bread-->
                <div class="bread">
                    <ul class="fl sui-breadcrumb">
                        <li>
                            <a href="#">全部结果</a>
                        </li>
                    </ul>
                    <ul class="fl sui-tag">
                        <!-- 商品的名字的面包屑的地方 -->
                        <li class="with-x" v-show="searchParams.categoryName">
                            {{ searchParams.categoryName }}
                            <i @click="removeCategoryName">x</i>
                        </li>
                        <!-- 关键字面包屑的地方 -->
                        <li class="with-x" v-show="searchParams.keyword">
                            {{ searchParams.keyword }}<i @click="removeKeyword">×</i>
                        </li>
                    </ul>
                    <!-- 品牌的面包屑 -->
                    <li class="with-x" v-show="searchParams.trademark">
                        {{ searchParams.trademark.split(":")[1]
}}<i @click="removeTradeMark">×</i>
                    </li>
                    <li class="with-x" v-for="(attrValue, index) in searchParams.props" :key="index">
                        {{ attrValue.split(":")[1]
}}<i @click="removeAttr(index)">×</i>
                    </li>
                </div>
                <!--selector-->
                <SearchSelector @getTradeMark="getTradeMark" @getAttrAndAttrValue="getAttrAndAttrValue">
                </SearchSelector>
                <!-- 注册子组件 -->

                <!--details-->
                <div class="details clearfix">
                    <div class="sui-navbar">
                        <div class="navbar-inner filter">
                            <ul class="sui-nav">
                                <li :class="{ active: isOne }" @click="sort(1)">
                                    <a href="#">综合

                                        <span v-show="isOne" class="iconfont"
                                            :class="{ 'icon-xiafan': isDesc, 'icon-shangfan': isAsc }"></span>
                                    </a>
                                </li>
                                <li :class="{ active: isTwo }" @click="sort(2)">
                                    <a>价格
                                        <span v-show="isTwo" class="iconfont"
                                            :class="{ 'icon-xiafan': isDesc, 'icon-shangfan': isAsc }"></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 商品展示区 -->
                    <div class="goods-list">
                        <ul class="yui3-g">
                            <li class="yui3-u-1-5" v-for="(good, index) in goodsList" :key="good.id">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <router-link :to="`/detail/${good.id}`"><img
                                                :src="good.defaultImg" /></router-link>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html" :title="good.title">{{ good.title }}</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>{{ good.id }}</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank"
                                            class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/search/mobile02.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                                            (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank"
                                            class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/search/mobile03.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                                            (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank"
                                            class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/search/mobile04.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                                            (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank"
                                            class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/search/mobile05.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                                            (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank"
                                            class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/search/mobile06.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                                            (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank"
                                            class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/search/mobile01.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                                            (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank"
                                            class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/search/mobile02.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                                            (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank"
                                            class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/search/mobile03.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                                            (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank"
                                            class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-5">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/search/mobile04.png" />
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"
                                            title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">Apple苹果iPhone 6s
                                            (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                                            (A1699)</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank"
                                            class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- 需要分页的地方 -->
                    <div class="fr page">
                        <Pagination :total="total" :pageSize="searchParams.pageSize"
                        :pageNo="searchParams.pageNo" :pageCount="5" @currentPage="currentPage"
                        ></Pagination>
                    </div>
                </div>
                <!--hotsale-->
                <div class="clearfix hot-sale">
                    <h4 class="title">热卖商品</h4>
                    <div class="hot-list">
                        <ul class="yui3-g">
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/search/like_01.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>4088.00</i>
                                        </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/search/like_03.png" />
                                    </div>
                                    <div class="attr">
                                        <em>金属A面，360°翻转，APP下单省300！</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>4088.00</i>
                                        </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/search/like_04.png" />
                                    </div>
                                    <div class="attr">
                                        <em>256SSD商务大咖，完爆职场，APP下单立减200</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>4068.00</i>
                                        </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有20人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/search/like_02.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>4088.00</i>
                                        </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import SearchSelector from './SearchSelector/SearchSelector.vue'
export default {
    name: 'search',

    data() {
        return {
            searchParams: {
                category1Id: "", //一级分类的id
                category2Id: "", //二级分类的id
                category3Id: "", //三级分类的id
                categoryName: "", //商品的名字
                keyword: "", //用户搜索的关键字
                props: [], //商品属性的搜索条件
                trademark: "", //品牌的搜索条件
                order: "1:desc", //排序的参数 【默认初始值:1:desc】
                pageNo: 1, //当前分页器的页码  【默认初始值:1】
                pageSize: 3, //代表当前一页显示几条数据 【默认初始值:10】
            },
        };
    },
    beforeMount() {
        Object.assign(this.searchParams, this.$route.query, this.$route.params)
    },
    mounted() {
        this.getData();
    },

    methods: {
        //发请求，获取搜索模块的数据
        getData() {
            this.$store.dispatch("getSearchList", this.searchParams)
        },
        //清楚面包屑-商品名字
        removeCategoryName() {
            this.searchParams.categoryName = undefined;
            this.searchParams.category1Id = undefined;
            this.searchParams.category2Id = undefined;
            this.searchParams.category3Id = undefined;
            this.$router.push({ name: "search", params: this.$route.params })
        },
        //面包屑移除关键字的回调
        removeKeyword() {
            this.searchParams.keyword = undefined;
            this.$router.push({ name: 'search', query: this.$route.query })
            this.$bus.$emit('clearKeyword')
        },
        //面包屑清楚品牌回调
        removeTradeMark() {
            this.searchParams.trademark = '';
            this.getData();
        },
        //子组件给父组件传递数据的自定义事件
        getTradeMark(tmId, tmName) {
            this.searchParams.trademark = `${tmId}:${tmName}`;
            this.getData();
        },
        //子组件给父组件传递商品属性与属性值的自定义事件回调
        getAttrAndAttrValue(attrId, attrName, attrValue) {
            let newprops = `${attrId}:${attrValue}:${attrName}`;
            if (this.searchParams.props.indexOf(newprops) == -1) {
                this.searchParams.props.push(newprops);
                //再次发请求展示数据
                this.getData();
            }
        },
        removeAttr(index) {
            this.searchParams.props.splice(index, 1);
            this.getData();
        },
        sort(flag) {
            let originFlag = this.searchParams.order.split(":")[0];
            let originSortType = this.searchParams.order.split(":")[1];
            let newOder = "";
            if (flag == originFlag) {
                newOder = `${originFlag}:${originSortType == "desc" ? "asc" : "desc"}`
            } else {
                newOder = `${flag}:desc`
            }
            this.searchParams.order = newOder;
            this.getData();
        }
    },
    computed: {
        ...mapGetters(['goodsList']),
        ...mapState({
            total: state.search.searchList.total
        }),
        isOne() {
            return this.searchParams.order.indexOf('1') != -1;
        },
        isTwo() {
            return this.searchParams.order.indexOf('2') != -1;
        },
        isDesc() {
            return this.searchParams.order.indexOf("desc") != -1;
        },
        isAsc() {
            return this.searchParams.order.indexOf("asc") != -1;
        }

    },
    components: {
        SearchSelector,
    },
    watch: {
        $route() {
            this.searchParams.category1Id = undefined;
            this.searchParams.category2Id = undefined;
            this.searchParams.category3Id = undefined;
            Object.assign(this.searchParams, this.$route.query, this.$route.params);
            this.getDate()
        }
    }


};
</script>

<style lang="less" scoped>

</style>