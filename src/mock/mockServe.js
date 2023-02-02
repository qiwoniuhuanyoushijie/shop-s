import Mock from 'mockjs';
import banner from './banner.json'
import floor from './floor.json'

//第一个参数：接口地址，第二个参数：向这个接口发请求获取到的数据
Mock.mock("/mock/banner",{code:200,data:banner});
Mock.mock('/mock/floor',{code:200,data:floor})


