<template>
  <NavBar></NavBar>
  <main>
    <div class="breadcrumb h-auto mb-5" style="--bs-breadcrumb-divider: ''">
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

    <section class="info container-xxl">
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
                  style="width: 100px" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://ki-do-ri.jp/upload/save_image/02011824_5c541035e3d41.jpg"
                  style="width: 100px" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://ki-do-ri.jp/upload/save_image/02011824_5c5410471d19e.jpg"
                  style="width: 100px" /></swiper-slide
              ><swiper-slide
                ><img
                  src="https://ki-do-ri.jp/upload/save_image/02011824_5c541051f27b8.jpg"
                  style="width: 100px"
              /></swiper-slide>
              ><swiper-slide
                ><img
                  src="https://ki-do-ri.jp/upload/save_image/02011824_5c54106775f48.jpg"
                  style="width: 100px"
              /></swiper-slide>
              ><swiper-slide
                ><img
                  src="https://ki-do-ri.jp/upload/save_image/02011825_5c54108e81b45.jpg"
                  style="width: 100px"
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
                    class="
                      btn btn-black btn-lg
                      px-3
                      dropdown-toggle dropdown-toggle-split
                    "
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
      <div class="wrap container-xxl d-flex">
        <div class="row gx-0">
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
    </div>

    <div class="spec container-xxl">
      <div class="row gx-0 justify-content-between">
        <div class="detail col-lg-6">
          <div class="d-flex justify-content-between">
            <div class="item d-flex align-items-center">
              <span>難易度</span>
            </div>
            <div class="progress rounded-0 bg-transparent my-3 w-100">
              <div
                class="progress-bar bg-gray-light"
                role="progressbar"
                style="width: 20%"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <div
                class="progress-bar bg-gray-mild"
                role="progressbar"
                style="width: 20%"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <div
                class="progress-bar bg-green-light"
                role="progressbar"
                style="width: 20%"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <div class="item d-flex align-items-center">
              <span>レア度</span>
            </div>
            <div class="progress rounded-0 bg-transparent my-3 w-100">
              <div
                class="progress-bar bg-gray-light"
                role="progressbar"
                style="width: 20%"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <div
                class="progress-bar bg-gray-mild"
                role="progressbar"
                style="width: 20%"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <div
                class="progress-bar bg-green-light"
                role="progressbar"
                style="width: 20%"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <div
                class="progress-bar bg-green-mild"
                role="progressbar"
                style="width: 20%"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <div
                class="progress-bar bg-green-dark"
                role="progressbar"
                style="width: 20%"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div class="item d-flex"><span>日&emsp;照</span></div>
            <div class="sunshine-progress my-3 w-100">
              <dd>
                <div class="bar mx-1">
                  <div class="dot">
                    <span class="level">1</span>
                  </div>
                  <div class="dot">
                    <span class="level">2</span>
                  </div>
                  <div class="dot">
                    <span class="level">3</span>
                  </div>
                  <div class="dot">
                    <span class="level active">4</span>
                  </div>
                  <div class="dot">
                    <span class="level">5</span>
                  </div>
                </div>
              </dd>
            </div>
          </div>
          <div class="icons my-5 d-flex flex-column justify-content-between">
            <div class="thumbnails d-flex flex-row">
              <div class="thumbnail">
                <img
                  src="../assets/images/icon_002.svg"
                  alt=""
                  width="50"
                  height="50"
                />
                <p class="text-center">本格派</p>
              </div>
              <div class="thumbnail">
                <img
                  src="../assets/images/icon_004.svg"
                  alt=""
                  width="50"
                  height="50"
                />
                <p class="text-center">外が好き</p>
              </div>
              <div class="thumbnail">
                <img
                  src="../assets/images/icon_010.svg"
                  alt=""
                  width="50"
                  height="50"
                />
                <p class="text-center">常緑</p>
              </div>
            </div>
            <p>各種アイコン・グラフについての詳細はこちらをご確認ください。</p>
          </div>
        </div>
        <div class="expert col-lg-6 p-2">
          <div class="wrap border border-1 border-black">
            <h3>六三四<span>のオススメPOINT</span></h3>
            <p>
              素晴らしいですね!
              <br />
              本当に大木のような素晴らしい小品盆栽ですね。
            </p>
          </div>
        </div>
        <div class="notes col-lg12">
          <p>
            <b>&#9670;商品注意事項</b>
            <br />
            商品はその他でも販売しているため、売切れる場合がございますがご了承ください。当店の取扱植物は一点モノが多く、撮影時期から生育による変型などで画像と異なることがあります。商品の返品は植物ですので原則お受けしておりません。但し、運送中の事故等による破損の場合は商品ご到着後3日以内にご連絡いただければ、ご返金にて対応させて頂きます。
          </p>
        </div>
      </div>
    </div>

    <div class="related-items container mb-5">
      <h2 class="title text-center">
        関連した商品<br />
        <span class="subtitle">Related Items</span>
      </h2>
      <div class="row d-flex flex-row justify-content-evenly">
        <div class="col-sm-6 col-md-3 px-2">
          <div class="card h-100 border-0">
            <img
              src="https://ki-do-ri.jp/upload/save_image/07091822_5b432958a0768.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body p-0">
              <h5 class="card-title fw-bold pt-2">盆栽八ツ房エゴノキ石付 M</h5>
              <p class="card-text">
                販売価格： <span class="price">￥12,960 (税込)</span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 px-2">
          <div class="card h-100 border-0">
            <img
              src="https://ki-do-ri.jp/upload/save_image/07101922_5b44890375034.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body p-0">
              <h5 class="card-title fw-bold pt-2">盆栽黒松</h5>
              <p class="card-text">
                販売価格： <span class="price">￥216,000(税込)</span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 px-2">
          <div class="card h-100 border-0">
            <img
              src="https://ki-do-ri.jp/upload/save_image/08141549_5b727b8dec622.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body p-0">
              <h5 class="card-title fw-bold pt-2">盆栽石化桧no.4</h5>
              <p class="card-text">
                販売価格： <span class="price">￥129,600(税込)</span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 px-2">
          <div class="card h-100 border-0">
            <img
              src="https://ki-do-ri.jp/upload/save_image/09051414_5b8f6641e876c.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body p-0">
              <h5 class="card-title fw-bold pt-2">盆栽楓</h5>
              <p class="card-text">
                販売価格： <span class="price">￥43,200(税込)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

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
          url: "https://ki-do-ri.jp/upload/save_image/02011823_5c5410009a18f.jpg",
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

.spec {
  padding: 64px 50px;
  .item {
    width: 64px;
    span {
      font-size: 13px;
      line-height: 14px;
    }
  }
  .sunshine-progress {
    .bar {
      height: 14px;
      position: relative;
      .dot {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 50%;
        margin-left: -4px;
        z-index: 30;
        &:nth-child(1) {
          left: 0;
        }
        &:nth-child(2) {
          left: 25%;
        }
        &:nth-child(3) {
          left: 50%;
        }
        &:nth-child(4) {
          left: 75%;
        }
        &:nth-child(5) {
          left: 100%;
        }
        .level {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 8px;
          background: #a5a5a5;
          text-indent: -9999px;
          z-index: 10;
          &.active {
            background: #dd081c;
            border: 3px solid #f49c00;
            margin-top: -3px;
            box-sizing: content-box;
          }
        }
      }
      &::after {
        content: "";
        display: block;
        border-bottom: 2px solid #d1d1d1;
        position: absolute;
        top: 50%;
        margin-top: 3px;
        left: 0;
        right: 0;
      }
    }
  }
  .icons {
    p {
      font-size: 13px;
    }
    .thumbnails {
      .thumbnail {
        width: 100px;
        img {
          display: block;
          margin: 0 auto;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
  .expert {
    width: 46%;
    height: calc(216px + 18px);
    border: 1px solid #dbdbdb;
    .wrap {
      padding: 30px;
      h3 {
        margin-bottom: 20px;
        padding: 15px 0 15px 80px;
        font-size: 31px;
        letter-spacing: 3px;
        font-family: "Noto Serif JP", serif;
        background: url(../assets/images/avatar.svg) no-repeat 0 50%;
        span {
          font-size: 18px;
        }
      }
      p {
        font-size: 13px;
        line-height: 2em;
      }
    }
  }
  .notes {
    padding: 30px 0;
    border-top: 1px dotted #ccc;
    border-bottom: 1px dotted #ccc;
    p {
      font-size: 13px;
      line-height: 2em;
    }
  }
}

.related-items {
  max-width: 1020px;
  margin: 0 auto;
  h2 {
    letter-spacing: 3px;
    margin: 30px 0 60px;
    padding-bottom: 18px;
    span {
      font-family: "Times New Roman", serif;
      font-size: 17px;
      letter-spacing: normal;
    }
    &::after {
      content: "";
      display: block;
      width: 100px;
      margin: 20px auto 0;
      border-bottom: 2px solid #000;
    }
  }
  .card-title {
    font-size: 12px;
  }
  .card-text {
    font-size: 13px;
  }
}
</style>
