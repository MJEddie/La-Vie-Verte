<template>
  <NavBar></NavBar>
  <main>
    <div class="breadcrumb h-auto mb-5" style="--bs-breadcrumb-divider: ''">
        <ol class="breadcrumb fw-light mb-0">
            <li class="breadcrumb-item px-4">
                <a href="#">
                    <span>HOME</span>
                </a>
            </li>
            <li class="breadcrumb-item px-4">
                <span>PRODUCTS</span>
            </li>
            <li class="breadcrumb-item px-4 active" aria-current="page">
                <span>盆栽五葉松</span>
            </li>
        </ol>
    </div>

    <section class="intro text-center">
      <h1 class="title py-3">PRODUCTS</h1>
      <h2 class="product-name fw-bold">盆栽五葉松</h2>
      <p class="description">美しく完成された五葉松</p>
    </section>

    <section class="info container">
      <div class="card mb-3 w-100 border-0">
          <div class="list row g-0" v-for="item in Product" :key="item.id">
              <div class="col-md-5">
                  <img :src="item.url" alt="" class="w-100">
              </div>
              <div class="col-md-7 ps-4">
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
                                  <li class="bg-primary"><a class="dropdown-item text-white" href="#">2</a></li>
                                  <li class="bg-primary"><a class="dropdown-item text-white" href="#">3</a></li>
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
    </section>
  </main>
  <Footer></Footer>
</template>

<style lang="scss" scoped>

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

.intro {
  h1.title {
  font-size: 24px;
  letter-spacing: 0.1em;
  &::after {
    content: '';
    display: block;
    width: 30px;
    margin: 0 auto 50px;
    padding-bottom: 14px;
    border-bottom: 2px solid #000;
    }
  }
  h2.product-name {
    font-family: 'Noto Serif JP', serif;
    font-size: 18px;
    line-height: 1em;
    letter-spacing: 3px;
    padding-bottom: 20px;
  }
  p {
    font-size: 14px;
    line-height: 2em;
  }
}

section.info {
  max-width: 1300px;
  padding: 70px 50px 0 50px;
}

</style>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Product",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
        Product: [
            {
                id: 1,
                amount: 1,
                category: ['haconiwa', '盆栽'],
                url : 'https://ki-do-ri.jp/upload/save_image/02011823_5c5410009a18f.jpg',
                title: '盆栽　五葉松',
                description: '美しく完成された五葉松',
                price: 220000,
            },
        ],
    }
  },
};
</script>
