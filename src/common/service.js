/*
 项目接口
 */

const BASE_URL = 'https://api.douban.com/v2/';
export const DOU_API = {
    /**
     * 图书搜索 GET
     * q 查询关键字 q和tag必穿其一
     * tag 查询的tag q和tag必传其一
     * start 取结果的offset 默认为0
     * count 取结果的条数 默认为20，最大为100
     */
    book_search: BASE_URL+'book/search',
    /**
     * 图书详情 GET
     */
    book_info: BASE_URL+'book/',
    /**
     * 电影搜索 GET
     */
    movie_search:BASE_URL+'movie/search'
};