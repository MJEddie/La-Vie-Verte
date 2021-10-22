<template>
  <NavBar></NavBar>
  <main>
    <div class="breadcrumb h-auto mb-5" style="--bs-breadcrumb-divider: '';">
      <ol class="breadcrumb fw-light mb-0">
        <li class="breadcrumb-item px-4">
          <router-link to="/"><span>HOME</span></router-link>
        </li>
        <li class="breadcrumb-item px-4">
          <router-link to="/products"><span>PRODUCTS</span></router-link>
        </li>
        <li class="breadcrumb-item px-4 active" aria-current="page">
          <span>盆栽五葉松</span>
        </li>
      </ol>
    </div>

    <section class="intro text-center">
      <h1 class="title pt-2">PRODUCTS</h1>
      <h2 class="product-name fw-bold">盆栽五葉松</h2>
      <p class="description">美しく完成された五葉松</p>
    </section>

    <section class="info container">
      <div class="card mb-5 w-100 border-0">
        <div class="list row" v-for="item in Product" :key="item.id">
          <div class="col-md-5">
            <!-- <img :src="item.url" alt="" class="w-100" /> -->
            <swiper
              :loop="true"
              :spaceBetween="0"
              :navigation="
                ({ prevEl: '.swiper-button-prev' },
                { nextEl: '.swiper-button-next' })
              "
              :thumbs="{ swiper: thumbsSwiper }"
              class="mySwiper2"
            >
              <swiper-slide
                ><img
                  src="https://ki-do-ri.jp/upload/save_image/02011823_5c54100debe5c.jpg"
                  class="w-100" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://ki-do-ri.jp/upload/save_image/02011823_5c5410252eea0.jpg"
                  class="w-100" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://ki-do-ri.jp/upload/save_image/02011824_5c54104060fe3.jpg"
                  class="w-100" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://ki-do-ri.jp/upload/save_image/02011824_5c541058cca4f.jpg"
                  class="w-100"
              /></swiper-slide>
              ><swiper-slide
                ><img
                  src="https://ki-do-ri.jp/upload/save_image/02011824_5c541060ace97.jpg"
                  class="w-100"
              /></swiper-slide>
              ><swiper-slide
                ><img
                  src="https://ki-do-ri.jp/upload/save_image/02011826_5c5410a8ec235.jpg"
                  class="w-100"
              /></swiper-slide>
            </swiper>
            <swiper
              @swiper="setThumbsSwiper"
              :loop="true"
              :spaceBetween="0"
              :slidesPerView="5"
              :freeMode="true"
              :watchSlidesProgress="true"
              class="mySwiper mt-4"
            >
              <swiper-slide
                ><img
                  src="https://ki-do-ri.jp/upload/save_image/02011823_5c54100debe5c.jpg"
                  style="width: 100px;" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://ki-do-ri.jp/upload/save_image/02011824_5c541035e3d41.jpg"
                  style="width: 100px;" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://ki-do-ri.jp/upload/save_image/02011824_5c5410471d19e.jpg"
                  style="width: 100px;" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://ki-do-ri.jp/upload/save_image/02011824_5c541051f27b8.jpg"
                  style="width: 100px;"
              /></swiper-slide>
              ><swiper-slide
                ><img
                  src="https://ki-do-ri.jp/upload/save_image/02011824_5c54106775f48.jpg"
                  style="width: 100px;"
              /></swiper-slide>
              ><swiper-slide
                ><img
                  src="https://ki-do-ri.jp/upload/save_image/02011825_5c54108e81b45.jpg"
                  style="width: 100px;"
              /></swiper-slide>
            </swiper>
            <div class="swiper-button-prev text-black"></div>
            <div class="swiper-button-next text-black"></div>
          </div>
          <div class="col-md-7 ps-4">
            <div class="card-body pt-0">
              <h5 class="card-title fw-bold">{{ item.title }}</h5>
              <ul class="category ps-0">
                <li class="d-inline-block">
                  <span class="s-icon02">{{ item.category[0] }}</span>
                </li>
                <li class="d-inline-block">
                  <span>{{ item.category[1] }}</span>
                </li>
              </ul>
              <p class="size">{{ item.size[0] }}&ensp;{{ item.size[1] }}</p>
              <p class="price">
                售價 <span class="fs-4 fw-bold">{{ item.price }}</span>
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
                <button type="button" class="wishlist btn btn-black btn-lg">
                  加入收藏
                </button>
              </div>
              <ul class="sub-info mt-4 px-0">
                <li class="gift-card mb-1">
                  <span>メッセージカード無料</span>
                </li>
                <li class="wrapping"><span>ギフトラッピング可</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="intro-block container-fluid w-100">
      <div class="wrap container d-flex">
        <div class="message col-lg-6">
          <div class="pt"><span>Point</span></div>
          <div class="summary bg-white h-100">
            <h3>これぞ盆栽という見事な樹形</h3>
            <p>
              コケ順、枝ぶり、樹形ととても美しい一品です。
              <br />
              <br />
              正面はもちろんですがどの角度からも楽しむことのできます。
            </p>
          </div>
        </div>
        <div class="image col-lg-6">
          <img
            src="https://ki-do-ri.jp/upload/save_image/02011828_5c54112ee02bf.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<style lang="scss" scoped>
@import "~swiper/swiper-bundle.min.css";

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

.intro {
  h1.title {
    font-size: 24px;
    letter-spacing: 0.1em;
    &::after {
      content: "";
      display: block;
      width: 30px;
      margin: 0 auto 50px;
      padding-bottom: 14px;
      border-bottom: 2px solid #000;
    }
  }
  h2.product-name {
    font-family: "Noto Serif JP", serif;
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
  .card-title {
    padding-bottom: 10px;
    margin-bottom: 5px;
  }
  .swiper-button {
    &-prev {
      margin-top: 20%;
      left: -40.5px;
      &::after {
        font-size: 18px;
        font-weight: bold;
      }
    }
    &-next {
      margin-top: 20%;
      left: 500px;
      &::after {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  .card-body {
    h5 {
      font-size: 18px;
      border-bottom: 1px dotted #ccc;
    }
    .category li {
      background: #eae8dc;
      font-size: 12px;
      margin-right: 3px;
      padding: 0 10px;
      list-style: none;
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
    }
    .size {
      font-size: 14px;
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px dotted #ccc;
    }
    .price {
      font-size: 12px;
    }
    .btn-group button {
      font-size: 13px;
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
    .sub-info li {
      list-style: none;
      font-size: 13px;
      &.gift-card span {
        padding-left: 30px;
        background: url(../assets/images/card.svg) no-repeat 0 50%;
      }
      &.wrapping span {
        padding-left: 30px;
        background: url(../assets/images/wrapping.svg) no-repeat 0 50%;
      }
    }
  }
}

.intro-block {
  padding: 64px 0;
  background: #f0eee2;
  .wrap {
    max-width: 1300px;
    padding: 0 50px;
    .message {
      position: relative;
      .pt {
        position: absolute;
        display: block;
        border-style: solid;
        border-width: 40px 40px 0 0;
        border-color: #000 transparent transparent transparent;
        z-index: 200;
        span {
          position: absolute;
          display: block;
          transform: rotate(-45deg);
          width: 50px;
          text-align: center;
          top: -25px;
          left: 5px;
          font-size: 14px;
        }
      }
      .summary {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 70px 50px;
        h3 {
          margin-bottom: 20px;
          font-size: 22px;
        }
        p {
          font-size: 14px;
          line-height: 2em;
        }
      }
    }
    .image img {
      width: 100%;
      height: auto;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export default {
  name: "Product",
  components: {
    NavBar,
    Swiper,
    SwiperSlide,
    Footer,
  },
  data() {
    return {
      thumbsSwiper: null,
      Product: [
        {
          id: 1,
          amount: 1,
          category: ["haconiwa", "盆栽"],
          size: ["器H=5.5cm　W=14cm", "植物　H=17.5 W=31"],
          url:
            "https://ki-do-ri.jp/upload/save_image/02011823_5c5410009a18f.jpg",
          title: "盆栽　五葉松",
          description: "美しく完成された五葉松",
          price: 220000,
        },
      ],
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
};
</script>
