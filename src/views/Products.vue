<style scoped lang="scss">

.breadcrumb {
    font-family: 'Roboto', 'Noto Sans Japanese', sans-serif;
    background: #2f2f2f;
    li {
      background: #a9a9a9;
      transform-origin: 0 100%;
      transform: skewX(25deg);
      font-size: 11px;
      list-style: none;
      border-left: 1px solid #2f2f2f;
      &:last-child {
        background: #2f2f2f;
        color: #fff;
        border-left: none;
      }
      a {
      text-decoration: none;
      color: #2f2f2f;
      }
      span {
      display: block;
      transform: skewX(-25deg);
      }
    }
}

h1.title {
    font-family: Georgia, "Times New Roman", 'Noto Serif JP', serif!important;
    font-weight: 500;
    letter-spacing: 0.1em;
    position: relative;
}

h1.title:after {
    content: '';
    width: 1.875rem;
    border-bottom: 2px solid #000;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -15px;
}

.list.container {
    max-width: 1300px;
}

h3.title {
    font-family: Georgia, "Times New Roman", Times, "serif";
    font-size: 18px;
    margin-bottom: 20px;
    border-bottom: 1px dotted #ccc;
    &:last-of-type {
      font-family: "Noto Serif JP", serif;
      font-weight: 500;
    }
}

.list-group {
  &:first-of-type {
    border-bottom: 1px solid #ccc;
  }
    P {
    font-size: 11px;
    }
    input[type="text"] {
    width: 100%;
    border: 1px dotted #aeaeae;
    background: #f8f8f8;
    &:focus {
        box-shadow: none;
        outline: 2px solid;
        border-radius: 2px;
        }
    }
}

.filter-title {
    border-bottom: 1px dotted #ccc;
}

.filter-type {
    border-bottom: 1px dotted #ccc;
}

.category {
    display: inline-block;
    padding: 0 0 0 30px;
    &.c-icon01 {
         background: url(../assets/images/c_icon01.svg) no-repeat 0% 50%;
    }
    &.c-icon02 {
         background: url(../assets/images/c_icon02.svg) no-repeat 0% 50%;
    }
    &.c-icon03 {
         background: url(../assets/images/c_icon03.svg) no-repeat 0% 50%;
    }
    &.c-icon04 {
         background: url(../assets/images/c_icon04.svg) no-repeat 0% 50%;
    }
}

.form-check {
    font-size: 13px;
    .form-check-input {
    margin-top: calc((28.8px - 13px)/2);
    }
}


.s-icon01 {
    background: url(../assets/images/s_icon01.svg) no-repeat 0% 50%;
    padding: 0 0 0 28px;
}
.s-icon02 {
    background: url(../assets/images/s_icon02.svg) no-repeat 0% 50%;
    padding: 0 0 0 28px;
}
.s-icon03 {
    background: url(../assets/images/s_icon03.svg) no-repeat 0% 50%;
    padding: 0 0 0 28px;
}

.btn-black {
  font-size: 13px;
  &:focus {
      box-shadow: none;
  }
}

.btn-group button {
    font-size: 14px;
    border-radius: 0;
    &:not(:first-child) {
        border-right: 1px solid #ccc;
        margin-left: 0;
    }
    &.cart {
        background: url(../assets/images/cart_w.svg) no-repeat 26% 50%;
        background-color: black;
    }
    &.wishlist {
        background: url(../assets/images/heart_w.svg) no-repeat 30% 50%;
        background-color: black;
    }
}

.sold-group {
    font-size: 14px;
    &.cart {
        background: url(../assets/images/cart_w.svg) no-repeat 40% 50%;
        background-color: black;
    }
}
.col-md-9 {
    position: relative;
}

.switch-view {
    position: absolute;
    top: -10px;
    right: 10px;
    li {
        margin: 0;
        padding: 0 10px;
        list-style: none;
        width: 50px;
        height: 30px;
        cursor: pointer;
    }
    .list {
        background: url(../assets/images/list.svg) no-repeat 50% 50%;
        opacity: 0.5;
        &.active {
            border-right: 1px solid #000;
            opacity: 1;
        }
    }
    .thumbnail {
        background: url(../assets/images/thumb.svg) no-repeat 50% 50%;
        opacity: 0.5;
        &.active {
            border-left: 1px solid #000;
            opacity: 1;
        }
    }
}

.thumbnail .card-title {
    font-size: 13px;
}

.thumbnail .card-text {
    font-size: 12px;
}

.list.row {
    padding-bottom: 70px;
    .card-title {
        border-bottom: 1px dotted #ccc;
    }
    li {
        background: #eae8dc;
        font-size: 12px;
        margin-right: 3px;
        padding: 0 10px;
        list-style: none;
    }
}

.description {
    font-size: 14px;
    margin-bottom: 10px;
}

.price {
    font-size: 14px;
    span {
        font-size: 18px;
    }
}

.page-item {
    min-width: 30px;
    line-height: 32px;
    &:not(:first-of-type) {
        margin-left: 10px;
    }
    a {
        color: #333;
        padding: 0 5px;
        border: 1px solid #E5E5E5;
        line-height: 32px;
        font-size: 16px;
        text-align: center;
    }
    &.active a {
        background: #E5E5E5;
        color: #fff;
        border-color: #E5E5E5;
    }
}

.page-item.prev a, .page-item.next a{
    background: #333;
    color: #fff;
    width: 60px;
}

</style>

<template>
  <NavBar></NavBar>
  <main>
    <div class="breadcrumb h-auto mb-0" style="--bs-breadcrumb-divider: ''">
        <ol class="breadcrumb fw-light mb-0">
            <li class="breadcrumb-item px-4">
                <a href="#">
                    <span>HOME</span>
                </a>
            </li>
            <li class="breadcrumb-item px-4 active" aria-current="page">
                <span>PRODUCTS 全商品</span>
            </li>
        </ol>
    </div>

    <h1 class="title fs-4 text-center my-5 pb-3">PRODUCTS</h1>

    <section>
        <div class="list container">
            <div class="row justify-content-evenly">
                <div class="col-md-2">
                    <h3 class="title mb-3 pb-2">SEARCH ITEM</h3>
                    <div class="list-group mb-2 pb-3">
                        <p class="m-0">關鍵字</p>
                        <input type="text" class="form-control">
                    </div>
                    <div class="list-group mb-3 pb-2">
                        <div class="filter-title fs-6 mb-3 pb-2">
                            <span class="category c-icon01">商品類型</span>
                        </div>
                        <div  id="v-model-multiple-checkboxes" class="filter-type pb-3 mb-2">
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" value="部屋木" v-model="filterItems">
                                <label class="form-check-label s-icon01" for="部屋木">部屋木</label>
                            </div>
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" value="haconiwa" v-model="filterItems">
                                <label class="form-check-label s-icon02" for="haconiwa">haconiwa</label>
                            </div>
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" value="ひととき" v-model="filterItems">
                                <label class="form-check-label s-icon03" for="ひととき">ひととき</label>
                            </div>
                        </div>
                        <div class="filter-title fs-6 mb-3 pb-2">
                            <span class="category c-icon02">植物類型</span>
                        </div>
                        <div id="v-model-multiple-checkboxes" class="filter-type pb-3 mb-2">
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" value="盆景" v-model="filterItems">
                                <label class="form-check-label" for="盆景">盆景</label>
                            </div>
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" value="迷你盆景" v-model="filterItems">
                                <label class="form-check-label" for="迷你盆景">迷你盆景</label>
                            </div>
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" value="多肉植物" v-model="filterItems">
                                <label class="form-check-label" for="多肉植物">多肉植物</label>
                            </div>
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" value="塊根植物" v-model="filterItems">
                                <label class="form-check-label" for="塊根植物">塊根植物</label>
                            </div>
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" value="觀葉植物" v-model="filterItems">
                                <label class="form-check-label" for="觀葉植物">觀葉植物</label>
                            </div>
                        </div>
                        <div class="filter-title fs-6 mb-3 pb-2">
                            <span class="category c-icon03">尺寸</span>
                        </div>
                        <div id="v-model-multiple-checkboxes" class="filter-type pb-3 mb-2">
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" value="small" v-model="filterItems">
                                <label class="form-check-label" for="small">S (15cm 以下)</label>
                            </div>
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" value="medium" v-model="filterItems">
                                <label class="form-check-label" for="medium">M (15-59cm)</label>
                            </div>
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" value="large" v-model="filterItems">
                                <label class="form-check-label" for="large">L (60-149cm)</label>
                            </div>
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" value="extra large" v-model="filterItems">
                                <label class="form-check-label" for="extra large">XL (150cm 以上)</label>
                            </div>
                        </div>
                        <div class="filter-title fs-6 mb-3 pb-2">
                            <span class="category c-icon04">價格</span>
                        </div>
                        <div id="v-model-multiple-checkboxes" class="filter-type pb-3 mb-2">
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" value="small" v-model="filterItems">
                                <label class="form-check-label" for="small">～5000</label>
                            </div>
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" value="medium" v-model="filterItems">
                                <label class="form-check-label" for="medium">5001～10000</label>
                            </div>
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" value="large" v-model="filterItems">
                                <label class="form-check-label" for="large">10001～20000</label>
                            </div>
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" value="extra large" v-model="filterItems">
                                <label class="form-check-label" for="extra large">20001～30000</label>
                            </div>
                            <div class="form-check mb-1">
                                <input class="form-check-input" type="checkbox" value="extra large" v-model="filterItems">
                                <label class="form-check-label" for="extra large">30001～</label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-black w-100">SEARCH</button>
                </div>
                <div class="col-md-9">
                    <h3 class="title mb-3 pb-2">全商品</h3>
                    <div class="switch-view">
                        <ul class="switch d-flex justify-content-end">
                            <li class="list" :class="{'active': viewMode == 'list'}" @click="switchMode"></li>
                            <li class="thumbnail" :class="{'active': viewMode == 'thumbnail'}" @click="switchMode"></li>
                        </ul>
                    </div>

                    <div class="row row-cols-1 row-cols-md-3 g-4" v-if="viewMode == 'thumbnail'">
                        <div class="thumbnail col"  v-for="item in productList" :key="item.id">
                            <div class="card h-100 border-0">
                                <img :src= "item.url" class="card-img-top" alt="">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">{{ item.title }}</h5>
                                    <p class="card-text">售價 <span class="price fs-6">&#36; {{ item.price }}</span> <span class="sold text-danger ms-2" v-if="!item.amount">Sold Out</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 w-100 border-0" v-else>
                        <div class="list row g-0" v-for="item in productList" :key="item.id">
                            <div class="col-md-4">
                                <img :src="item.url" alt="" class="w-100">
                            </div>
                            <div class="col-md-8 ps-4">
                                <div class="card-body pt-0">
                                    <h4 class="card-title mb-4 pb-3">{{ item.title }}</h4>
                                    <ul class="category ps-0">
                                        <li class="d-inline-block"><span class="s-icon02">{{ item.category[0] }}</span></li>
                                        <li class="d-inline-block"><span>{{ item.category[1] }}</span></li>
                                    </ul>
                                    <p class="description">{{ item.description }}</p>
                                    <p class="price fw-bold">售價 <span>&#36; {{ item.price }}</span></p>
                                    <div class="btn-group w-100" role="group" aria-label="Button group with nested dropdown" v-if="item.amount > 0">
                                        <div class="btn-group" role="group">
                                            <button type="button" class="btn btn-black btn-lg pe-0">數量：</button>
                                            <button type="button" class="btn btn-black btn-lg px-3 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">1
                                                <span class="visually-hidden">Toggle Dropdown</span>
                                            </button>
                                            <ul class="dropdown-menu bg-primary">
                                                <li class="bg-primary"><a class="dropdown-item text-white" href="#">1</a></li>
                                                <li class="bg-primary"><a class="dropdown-item  text-white" href="#">2</a></li>
                                                <li class="bg-primary"><a class="dropdown-item  text-white" href="#">3</a></li>
                                            </ul>
                                        </div>
                                        <button type="button" class="cart btn btn-black btn-lg">加入購物車</button>
                                        <button type="button" class="wishlist btn btn-black btn-lg">加入收藏</button>
                                    </div>
                                    <div class="sold-group d-grid gap-2" v-else>
                                        <button class="cart btn btn-black btn-lg rounded-0" type="button">加入購物車</button>
                                        <div class="bg-danger text-white text-center">Sold Out</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav class="my-5" aria-label="Page navigation example">
                        <ul class="pagination justify-content-end align-items-center">
                            <li class="page-item prev" v-if="prevPageToken"><a class="page-link rounded-2" href="#">&lt;</a></li>
                            <li class="page-item active" aria-current="page"><a class="page-link rounded-2" href="#">1</a></li>
                            <li class="page-item"><a class="page-link rounded-2" href="#">2</a></li>
                            <li class="page-item"><a class="page-link rounded-2" href="#">3</a></li>
                            <li class="page-item"><a class="page-link rounded-2" href="#">4</a></li>
                            <li class="page-item"><a class="page-link rounded-2" href="#">5</a></li>
                            <li class="page-item next"><a class="page-link rounded-2" href="#">&gt;</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
  </main>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Products",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
        viewMode: 'thumbnail',
        prevPageToken: false,
        filterItems: [],
        productList: [
            {
                id: 1,
                amount: 1,
                category: ['haconiwa', '盆栽'],
                url : 'https://ki-do-ri.jp/upload/save_image/02011823_5c5410009a18f.jpg',
                title: '盆栽　五葉松',
                description: '美しく完成された五葉松',
                price: 220000,
            },
            {
                id: 2,
                amount: 0,
                category: ['haconiwa', 'ひととき', '盆栽'], 
                url: 'https://ki-do-ri.jp/upload/save_image/01211129_5c452e9d515cc.jpg',
                title: '盆栽　紫杜松',
                description: '美しい葉色の紫杜松',
                price: 4400,
            },
            {
                id: 3,
                amount: 1,
                category: ['部屋木', 'haconiwa', '迷你盆景', '觀葉植物'],
                title: '蕎麦猪口　ポトス・エンジョイ',
                url: 'https://ki-do-ri.jp/upload/save_image/02051345_5c5914f25352b.jpg',
                description: '爽やかな蕎麦猪口と爽やかなエンジョイを合わせました',
                price: 2200,
            },
            {
                id: 4,
                amount: 1,
                category: ['haconiwa', '盆栽'],
                url : 'https://ki-do-ri.jp/upload/save_image/02011823_5c5410009a18f.jpg',
                title: '盆栽　五葉松',
                description: '美しく完成された五葉松',
                price: 220000,
            },
            {
                id: 5,
                amount: 1,
                category: ['haconiwa', 'ひととき', '盆栽'],
                url: 'https://ki-do-ri.jp/upload/save_image/01211129_5c452e9d515cc.jpg',
                title: '盆栽　紫杜松',
                description: '美しい葉色の紫杜松',
                price: 4400,
            },
            {
                id: 6,
                amount: 0,
                category: ['部屋木', 'haconiwa', '迷你盆景', '觀葉植物'],
                title: '蕎麦猪口　ポトス・エンジョイ',
                url: 'https://ki-do-ri.jp/upload/save_image/02051345_5c5914f25352b.jpg',
                description: '爽やかな蕎麦猪口と爽やかなエンジョイを合わせました',
                price: 2200,
            },
            {
                id: 7,
                amount: 1,
                category: ['haconiwa', '盆栽'],
                url : 'https://ki-do-ri.jp/upload/save_image/02011823_5c5410009a18f.jpg',
                title: '盆栽　五葉松',
                description: '美しく完成された五葉松',
                price: 220000,
            },
            {
                id: 8,
                amount: 1,
                category: ['haconiwa', 'ひととき', '盆栽'],
                url: 'https://ki-do-ri.jp/upload/save_image/01211129_5c452e9d515cc.jpg',
                title: '盆栽　紫杜松',
                description: '美しい葉色の紫杜松',
                price: 4400,
            },
            {
                id: 9,
                amount: 1,
                category: ['部屋木', 'haconiwa', '迷你盆景', '觀葉植物'],
                title: '蕎麦猪口　ポトス・エンジョイ',
                url: 'https://ki-do-ri.jp/upload/save_image/02051345_5c5914f25352b.jpg',
                description: '爽やかな蕎麦猪口と爽やかなエンジョイを合わせました',
                price: 2200,
            },
        ]
    }
  },
  methods: {
    switchMode(event) {
        this.viewMode = event.target.className;
        }
  },
};
</script>
