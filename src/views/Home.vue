<template>
  <header class="mb-4">
    <nav class="navbar py-0">
      <div class="container-fluid px-0 justify-content-end">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link login" href="#">LOGIN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link signup" href="#">SIGN UP</a>
          </li>
          <li class="nav-item">
            <a class="nav-link wish" href="#">WISH LIST</a>
          </li>
          <li class="nav-item">
            <a class="nav-link cart" href="#">CART</a>
          </li>
          <li class="nav-item">
            <span class="nav-link search" href="#"></span>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <main>
    <div class="logo d-flex justify-content-center mb-5">
      <img src="../assets/images/index_logo.svg" width="165" alt="logo" />
    </div>

    <div class="container-fluid d-flex justify-content-end w-100 px-0">
      <div class="carousel-title">
        <h1>
          植物と暮らそう
          <br />
          小さな自然と四季を見つめながら
          <br />
          何気ない日常を 心地よく 豊かに
          <br />
          緑で、気取りを。
        </h1>
      </div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="5000">
            <img
              src="../assets/images/slider_image_1.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <img
              src="../assets/images/slider_image_2.jpg"
              class="d-block w-100"
              alt=""
            />
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <img
              src="../assets/images/slider_image_3.jpg"
              class="d-block w-100"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <nav class="navbar menu">
      <div class="container justify-content-center">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <router-link to="/" class="nav-link">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">PRODUCTS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/product" class="nav-link"
              >SHOPPING GUIDE</router-link
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>

    <section class="week">
      <div
        class="container-fluid d-flex justify-content-start w-100 mt-5 px-0 pt-3"
      >
        <div class="thumbnail week flex-shrink-0"></div>
        <div class="info week d-flex flex-column align-self-center">
          <h2 class="title text-center">
            群生ユーフォルビア<br />
            <span class="subtitle">this week's special</span>
          </h2>
          <p class="heading fs-6 fw-bold mb-1">密集する株がおりなすフォルム</p>
          <p class="intro">
            ユーフォルビアには様々な種類がいて、形も様々ですが魅力的な群生を作る種も多いです。
            KIDORIオススメの群生株を今回入荷致しました。
          </p>
        </div>
      </div>

      <div class="item week container-fluid w-100 py-5 mb-5">
        <div class="row container-xl d-flex justify-content-evenly">
          <div
            class="col-sm-6 col-md-3"
            v-for="item in weekItems"
            :key="item.id"
          >
            <div class="card h-100 border-0">
              <img
                :src="item.thumbnail"
                class="card-img-top"
                alt="..."
                @click="toProduct(item.id)"
              />
              <div class="card-body p-0">
                <p class="card-text pt-1">{{ item.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="new-arrival">
      <div
        class="container-fluid d-flex justify-content-end w-100 mt-5 px-0 pt-3"
      >
        <div class="info new-arrival d-flex flex-column align-self-center">
          <h2 class="title text-center">
            新入荷<br />
            <span class="subtitle">New Arrival</span>
          </h2>
          <p class="heading fs-6 fw-bold mb-1">
            観葉や多肉盆栽、本格盆栽など入荷中
          </p>
          <p class="intro">
            KIDORIならではの観葉盆栽や多肉盆栽を作りました。厳選のコウチョウギなどもオススメです。
          </p>
        </div>
        <div class="thumbnail new-arrival flex-shrink-0"></div>
      </div>

      <div class="item new-arrival container-fluid w-100 py-5 mb-5">
        <div class="row container-xl d-flex justify-content-evenly">
          <div
            class="col-sm-6 col-md-3"
            v-for="item in newArrivals"
            :key="item.id"
          >
            <div class="card h-100 border-0">
              <img
                :src="item.thumbnail"
                class="card-img-top"
                alt="..."
                @click="toProduct(item.id)"
              />
              <div class="card-body p-0">
                <p class="card-text pt-1">{{ item.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="recommend container mb-5">
      <h2 class="title text-center">
        ピックアップ<br />
        <span class="subtitle">Pick Up</span>
      </h2>
      <div class="row d-flex flex-row justify-content-evenly">
        <div
          class="col-sm-6 col-md-3 px-2"
          v-for="item in rankItems"
          :key="item.id"
        >
          <div class="card h-100 border-0">
            <img
              :src="item.thumbnail"
              class="card-img-top"
              alt="..."
              @click="toProduct(item.id)"
            />
            <div class="card-body p-0">
              <h5 class="card-title fw-bold pt-2">{{ item.title }}</h5>
              <p class="card-text">
                販售價格： <span class="price">{{ item.price }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="concept text-center my-3">
      <div class="logo">
        <img src="../assets/images/logo.svg" alt="" />
      </div>
      <h2>あなたの日々を彩る緑</h2>
      <p class="jp fs-6">
        一つ一つ、職人の手で仕上げられた、個性豊かなKIDORIの植物たち。
        <br />
        特別な一鉢を暮らしに添えて
        <br />
        何気ない日常を 心地よく 豊かに
        <br />
        緑で、気取りを。
      </p>
      <p class="en">
        <b>“Green” will bring some color to your everyday life.</b>
        <br />
        KIDORI plants, each perfected by craftsmen,are full of uniqueness.
        <br />
        Add comfort and richness to your simple everyday life with a special
        pot.
        <br />
        A sense of “green” with KIDORI.
      </p>
    </div>
  </main>
  <Footer></Footer>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Footer,
  },
  data() {
    return {
      weekSpecial: [],
      newArrivals: [],
      rankItems: [],
    };
  },
  mounted() {
    this.axios
      .all([
        this.getWeekItems(),
        this.getNewArrivalsItems(),
        this.getRankItems(),
      ])
      .then(
        this.axios.spread((WeekItems, NewArrivals, RankItems) => {
          console.log(WeekItems, NewArrivals, RankItems);
          this.weekSpecial = WeekItems.data;
          this.newArrivals = NewArrivals.data;
          this.rankItems = RankItems.data;
        })
      )
      .catch((err) => {
        console.warn(err);
      });
  },
  methods: {
    getWeekItems() {
      return this.axios.get("http://localhost:3000/weeks");
    },
    getNewArrivalsItems() {
      return this.axios.get("http://localhost:3000/new");
    },
    getRankItems() {
      return this.axios.get("http://localhost:3000/rank");
    },
  },
};
</script>

<style scoped lang="scss">
nav li .nav-link {
  color: #000;
  line-height: 60px;
  height: 60px;
  font-size: 13px;
  font-family: "Times New Roman", Times, "serif";
  padding: 0 1.875rem;
  &.login {
    background: url(../assets/images/lock.svg) no-repeat 0 50%;
  }
  &.signup {
    background: url(../assets/images/account.svg) no-repeat 0 50%;
  }
  &.wish {
    background: url(../assets/images/heart.svg) no-repeat 0 50%;
  }
  &.cart {
    background: url(../assets/images/cart.svg) no-repeat 0 50%;
  }
}

nav ul li span.nav-link.search {
  width: 60px;
  height: 60px;
  background: url(../assets/images/search.svg) no-repeat 50% 50%;
  background-color: #000;
  background-size: 24px 24px;
  cursor: pointer;
}

.carousel-title {
  width: 18%;
  z-index: 10;
  flex-shrink: 0;
  margin-right: -8%;
  margin-top: -5.5%;
  h1 {
    font-size: 25px;
    line-height: 64px;
    font-weight: 500;
    letter-spacing: 4px;
    font-family: "Noto Serif JP", serif;
    writing-mode: vertical-rl;
    -webkit-writing-mode: vertical-rl;
  }
}

.carousel.slide {
  position: relative;
  width: 82%;
  img {
    width: 100%;
    height: 448px;
  }
}

nav.navbar.menu li a.nav-link {
  padding: 0 2.5rem;
  font-size: 12px;
}

.thumbnail {
  position: relative;
  width: 72%;
  height: 500px;
  overflow: hidden;
  &.week {
    background: url(../assets/images/background_week_big.jpg) no-repeat 0% 50%;
    background-size: cover;
  }
  &.new-arrival {
    background: url(../assets/images/background_new-arrival_big.jpg) no-repeat
      0% 50%;
    background-size: cover;
  }
}

.info {
  width: 30%;
  height: 420px;
  background-color: rgba(244, 244, 244, 0.5);
  padding: 70px;
  z-index: 1;
  &.week {
    margin-left: -13%;
  }
  &.new-arrival {
    margin-right: -13%;
  }
  h2 {
    letter-spacing: 3px;
    background: url(../assets/images/background_small.svg) no-repeat bottom
      center;
    margin-bottom: 30px;
    padding-bottom: 70px;
    span {
      font-family: "Times New Roman", serif;
      font-size: 17px;
      letter-spacing: normal;
    }
    &::after {
      content: "";
      display: block;
      width: 150px;
      margin: 20px auto 0;
      border-bottom: 2px solid #000;
    }
  }
  p.intro {
    font-size: 13px;
  }
}

.item {
  &.week {
    background: #f4e3cc;
  }
  .card {
    background: #f4e3cc;
  }
  &.new-arrival {
    background: #1e445b;
    .card {
      background: #1e445b;
    }
  }
  .row {
    max-width: 1020px;
    margin: 0 auto;
    .card-text {
      font-size: 13px;
    }
  }
}

.recommend {
  max-width: 1020px;
  margin: 0 auto;
  h2 {
    letter-spacing: 3px;
    margin: 110px 0 60px;
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

.concept {
  letter-spacing: 1px;
  padding: 90px 0;
  .logo img {
    width: 275px;
    height: auto;
  }
  h2 {
    margin: 50px 0;
    font-family: "Noto Serif JP", serif;
    font-size: 26px;
    line-height: 2.2em;
  }
  .jp {
    margin-bottom: 30px;
    line-height: 1.8em;
  }
  .en {
    font-size: 15px;
    line-height: 1.8em;
    font-family: "Times New Roman", serif;
  }
}
</style>
