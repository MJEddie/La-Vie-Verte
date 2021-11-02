<template>
  <NavBar></NavBar>
  <main>
    <div class="breadcrumb h-auto mb-0" style="--bs-breadcrumb-divider: '';">
      <ol class="breadcrumb fw-light mb-0">
        <li class="breadcrumb-item px-4">
          <router-link to="/"><span>HOME</span></router-link>
        </li>
        <li class="breadcrumb-item px-4 active" aria-current="page">
          <span>PRODUCTS</span>
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
              <input type="text" class="form-control" />
            </div>
            <div class="list-group mb-3 pb-2">
              <div class="filter-title fs-6 mb-3 pb-2">
                <span class="category c-icon01">商品類型</span>
              </div>
              <div
                id="v-model-multiple-checkboxes"
                class="filter-type pb-3 mb-2"
              >
                <div class="form-check mb-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="部木屋"
                    v-model="categoryFilter"
                  />
                  <label class="form-check-label s-icon01" for="部木屋"
                    >部木屋</label
                  >
                </div>
                <div class="form-check mb-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="箱庭"
                    v-model="categoryFilter"
                  />
                  <label class="form-check-label s-icon02" for="箱庭"
                    >箱庭</label
                  >
                </div>
                <div class="form-check mb-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="禮物"
                    v-model="categoryFilter"
                  />
                  <label class="form-check-label s-icon03" for="禮物"
                    >禮物</label
                  >
                </div>
              </div>
              <div class="filter-title fs-6 mb-3 pb-2">
                <span class="category c-icon02">植物類型</span>
              </div>
              <div
                id="v-model-multiple-checkboxes"
                class="filter-type pb-3 mb-2"
              >
                <div class="form-check mb-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="盆景"
                    v-model="typeFilter"
                  />
                  <label class="form-check-label" for="盆景">盆景</label>
                </div>
                <div class="form-check mb-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="迷你盆景"
                    v-model="typeFilter"
                  />
                  <label class="form-check-label" for="迷你盆景"
                    >迷你盆景</label
                  >
                </div>
                <div class="form-check mb-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="多肉植物"
                    v-model="typeFilter"
                  />
                  <label class="form-check-label" for="多肉植物"
                    >多肉植物</label
                  >
                </div>
                <div class="form-check mb-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="塊根植物"
                    v-model="typeFilter"
                  />
                  <label class="form-check-label" for="塊根植物"
                    >塊根植物</label
                  >
                </div>
                <div class="form-check mb-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="觀葉植物"
                    v-model="typeFilter"
                  />
                  <label class="form-check-label" for="觀葉植物"
                    >觀葉植物</label
                  >
                </div>
              </div>
              <div class="filter-title fs-6 mb-3 pb-2">
                <span class="category c-icon03">尺寸</span>
              </div>
              <div
                id="v-model-multiple-checkboxes"
                class="filter-type pb-3 mb-2"
              >
                <div class="form-check mb-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="small"
                    v-model="sizeFilter"
                  />
                  <label class="form-check-label" for="small"
                    >S (15cm 以下)</label
                  >
                </div>
                <div class="form-check mb-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="medium"
                    v-model="sizeFilter"
                  />
                  <label class="form-check-label" for="medium"
                    >M (15-59cm)</label
                  >
                </div>
                <div class="form-check mb-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="large"
                    v-model="sizeFilter"
                  />
                  <label class="form-check-label" for="large"
                    >L (60-149cm)</label
                  >
                </div>
                <div class="form-check mb-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="extra large"
                    v-model="sizeFilter"
                  />
                  <label class="form-check-label" for="extra large"
                    >XL (150cm 以上)</label
                  >
                </div>
              </div>
              <div class="filter-title fs-6 mb-3 pb-2">
                <span class="category c-icon04">價格</span>
              </div>
              <div
                id="v-model-multiple-checkboxes"
                class="filter-type pb-3 mb-2"
              >
                <div class="form-check mb-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="5000"
                    v-model="priceFilter"
                  />
                  <label class="form-check-label" for="5000">～5000</label>
                </div>
                <div class="form-check mb-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="10000"
                    v-model="priceFilter"
                  />
                  <label class="form-check-label" for="10000"
                    >5001～10000</label
                  >
                </div>
                <div class="form-check mb-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="20000"
                    v-model="priceFilter"
                  />
                  <label class="form-check-label" for="20000"
                    >10001～20000</label
                  >
                </div>
                <div class="form-check mb-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="30000"
                    v-model="priceFilter"
                  />
                  <label class="form-check-label" for="30000"
                    >20001～30000</label
                  >
                </div>
                <div class="form-check mb-1">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="30001"
                    v-model="priceFilter"
                  />
                  <label class="form-check-label" for="30001">30001～</label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-black w-100"
              @click="filterProducts"
            >
              SEARCH
            </button>
          </div>
          <div class="col-md-9">
            <h3 class="title mb-3 pb-2">全商品</h3>
            <div class="switch-view">
              <ul class="switch d-flex justify-content-end">
                <li
                  class="list"
                  :class="{ active: viewMode == 'list' }"
                  @click="switchMode"
                ></li>
                <li
                  class="thumbnail"
                  :class="{ active: viewMode == 'thumbnail' }"
                  @click="switchMode"
                ></li>
              </ul>
            </div>

            <div
              class="row row-cols-1 row-cols-md-3 g-4"
              v-if="viewMode == 'thumbnail'"
            >
              <div
                class="thumbnail col"
                v-for="item in activeProductList"
                :key="item.id"
              >
                <div class="card h-100 border-0">
                  <img
                    :src="item.thumbnail"
                    class="card-img-top"
                    alt=""
                    @click="toProduct(item.id)"
                  />
                  <div class="card-body px-0">
                    <h5 class="card-title fw-bold" @click="toProduct(item.id)">
                      {{ item.title }}
                    </h5>
                    <p class="card-text">
                      售價
                      <span class="price fs-6">&#36; {{ item.price }}</span>
                      <span class="sold text-danger ms-2" v-if="!item.amount"
                        >Sold Out</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3 w-100 border-0" v-else>
              <div
                class="list row g-0"
                v-for="item in activeProductList"
                :key="item.id"
              >
                <div class="col-md-4">
                  <img
                    :src="item.thumbnail"
                    alt=""
                    class="w-100"
                    @click="toProduct(item.id)"
                  />
                </div>
                <div class="col-md-8 ps-4">
                  <div class="card-body pt-0">
                    <h4 class="card-title mb-4 pb-3">{{ item.title }}</h4>
                    <ul class="category ps-0">
                      <li
                        class="d-inline-block"
                        v-for="(tag, index) in item.tag"
                        :key="index"
                      >
                        <span :class="tagFlag(tag)">{{ tag }}</span>
                      </li>
                    </ul>
                    <p class="description">{{ item.description }}</p>
                    <p class="price fw-bold">
                      售價 <span>&#36; {{ item.price }}</span>
                    </p>
                    <div
                      class="btn-group w-100"
                      role="group"
                      aria-label="Button group with nested dropdown"
                      v-if="item.amount > 0"
                    >
                      <div class="btn-group" role="group">
                        <button type="button" class="btn btn-black btn-lg pe-0">
                          數量：
                        </button>
                        <button
                          type="button"
                          class="btn btn-black btn-lg px-3 dropdown-toggle dropdown-toggle-split"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          1
                          <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu bg-primary">
                          <li class="bg-primary">
                            <a class="dropdown-item text-white" href="#">1</a>
                          </li>
                          <li class="bg-primary">
                            <a class="dropdown-item text-white" href="#">2</a>
                          </li>
                          <li class="bg-primary">
                            <a class="dropdown-item text-white" href="#">3</a>
                          </li>
                        </ul>
                      </div>
                      <button type="button" class="cart btn btn-black btn-lg">
                        加入購物車
                      </button>
                      <button
                        type="button"
                        class="wishlist btn btn-black btn-lg"
                      >
                        加入收藏
                      </button>
                    </div>
                    <div class="sold-group d-grid gap-2" v-else>
                      <button
                        class="cart btn btn-black btn-lg rounded-0"
                        type="button"
                        @click="toProduct(item.id)"
                      >
                        商品詳情
                      </button>
                      <div class="bg-danger text-white text-center">
                        Sold Out
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <nav class="my-5" aria-label="Page navigation example">
              <ul class="pagination justify-content-end align-items-center">
                <li class="page-item prev" v-if="prevPageToken">
                  <a class="page-link rounded-2" href="#">&lt;</a>
                </li>
                <li class="page-item active" aria-current="page">
                  <a class="page-link rounded-2" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link rounded-2" href="#">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link rounded-2" href="#">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link rounded-2" href="#">4</a>
                </li>
                <li class="page-item">
                  <a class="page-link rounded-2" href="#">5</a>
                </li>
                <li class="page-item next">
                  <a class="page-link rounded-2" href="#">&gt;</a>
                </li>
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
      viewMode: "thumbnail",
      prevPageToken: false,
      categoryFilter: [],
      typeFilter: [],
      sizeFilter: [],
      priceFilter: [],
      productList: [],
      activeProductList: [],
    };
  },
  mounted() {
    this.axios
      .get("http://localhost:3000/products")
      .then((res) => {
        console.log(res.data);
        this.productList = res.data;
        this.activeProductList = res.data;
      })
      .catch((err) => {
        console.warn(err);
      });
  },
  methods: {
    switchMode(event) {
      this.viewMode = event.target.className;
    },
    filterProducts() {
      const result = [];
      const categoryFilters = this.categoryFilter;
      const typeFilters = this.typeFilter;
      const sizeFilters = this.sizeFilter;

      this.productList.forEach(function (product) {
        function productCategoryFilter(filter) {
          return product.category.indexOf(filter) != -1;
        }
        function productTypeFilter(filter) {
          return product.type.indexOf(filter) != -1;
        }
        function productSizeFilter(filter) {
          return product.size.indexOf(filter) != -1;
        }
        if (
          categoryFilters.some(productCategoryFilter) |
          typeFilters.some(productTypeFilter) |
          sizeFilters.some(productSizeFilter)
        ) {
          result.push(product);
        }
      });
      console.log(result);
      this.activeProductList = result;
    },
    tagFlag(tag) {
      if (tag === "部木屋") {
        return "s-icon01";
      } else if (tag === "箱庭") {
        return "s-icon02";
      } else if (tag === "禮物") {
        return "s-icon03";
      }
    },
    toProduct(id) {
      console.log(id);
      this.$router.push({
        name: "Product",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.breadcrumb {
  font-family: "Roboto", "Noto Sans Japanese", sans-serif;
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
  font-family: Georgia, "Times New Roman", "Noto Serif JP", serif !important;
  font-weight: 500;
  letter-spacing: 0.1em;
  position: relative;
}

h1.title:after {
  content: "";
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
    margin-top: calc((28.8px - 13px) / 2);
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
    border: 1px solid #e5e5e5;
    line-height: 32px;
    font-size: 16px;
    text-align: center;
  }
  &.active a {
    background: #e5e5e5;
    color: #fff;
    border-color: #e5e5e5;
  }
}

.page-item.prev a,
.page-item.next a {
  background: #333;
  color: #fff;
  width: 60px;
}
</style>
