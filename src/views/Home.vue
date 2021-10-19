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
      <img src="../assets/images/index_logo.svg" width="165" alt="logo">
    </div>

    <div class="container-fluid d-flex justify-content-end w-100 px-0">
      <div class="slider-title">
          <h1>
            植物と暮らそう
            <br>
            小さな自然と四季を見つめながら
            <br>
            何気ない日常を 心地よく 豊かに
            <br>
            緑で、気取りを。
          </h1>
      </div>
      <div class="slider flex-shrink-0">
        <img src="../assets/images/slider_image_1.jpg" alt="...">
      </div>
    </div>

    <nav class="navbar menu">
      <div class="container justify-content-center">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a href="#" class="nav-link">HOME</a>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">PRODUCTS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/product" class="nav-link">SHOPPING GUIDE</router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid d-flex justify-content-start w-100 mt-5 px-0 pt-3">
      <div class="thumbnail week flex-shrink-0"></div>
      <div class="info week d-flex flex-column align-self-center">
        <h2 class="title text-center">群生ユーフォルビア<br>
        <span class="subtitle">this week's special</span>
        </h2>
        <p class="heading fs-6 fw-bold mb-1">密集する株がおりなすフォルム</p>
        <p class="intro">ユーフォルビアには様々な種類がいて、形も様々ですが魅力的な群生を作る種も多いです。
KIDORIオススメの群生株を今回入荷致しました。</p>
      </div>
    </div>

    <div class="item week container-fluid w-100 py-5">
      <div class="row container-xl d-flex justify-content-evenly">
        <div class="col-sm-6 col-md-3">
          <div class="card h-100 border-0">
            <img src="https://ki-do-ri.jp/contents/wp-content/uploads/2018/10/IMG_5759.jpg" class="card-img-top" alt="...">
            <div class="card-body p-0">
            <p class="card-text pt-1">子吹きが作る独特なフォルム</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="card h-100 border-0">
            <img src="https://ki-do-ri.jp/contents/wp-content/uploads/2018/10/IMG_5791.jpg" class="card-img-top" alt="...">
            <div class="card-body p-0">
            <p class="card-text pt-1">一株一株の存在感</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="card h-100 border-0">
            <img src="https://ki-do-ri.jp/contents/wp-content/uploads/2018/10/IMG_5814.jpg" class="card-img-top" alt="...">
            <div class="card-body p-0">
            <p class="card-text pt-1">見事な球状の群生</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="card h-100 border-0">
            <img src="https://ki-do-ri.jp/contents/wp-content/uploads/2018/10/IMG_6370.jpg" class="card-img-top" alt="...">
            <div class="card-body p-0">
            <p class="card-text pt-1">KIDORIのオススメユーフォルビアの群生株</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

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

.slider-title {
  width: 18%;
  z-index: 1;
  flex-shrink: 0;
  margin-right: -8%;
  margin-top: -5.5%;
  h1 {
    font-size: 25px;
    line-height: 64px;
    font-weight: 500;
    letter-spacing: 4px;
    font-family: 'Noto Serif JP', serif;
    writing-mode: vertical-rl;
    -webkit-writing-mode: vertical-rl;
  }
}

.slider {
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
    background: url(../assets/images/background_week_big.jpg)no-repeat 0% 50%;
    background-size: cover;
  }
}

.info {
  width: 30%;
  height: 420px;
  background-color: rgba(244,244,244,0.5);
  padding: 70px;
  margin-left: -13%;
  z-index: 1;
  h2 {
    letter-spacing: 3px;
    background: url(../assets/images/background_small.svg) no-repeat bottom center;
    margin-bottom: 30px;
    padding-bottom: 70px;
    span {
      font-family: "Times New Roman", serif;
      font-size: 17px;
      letter-spacing: normal;
    }
    &::after {
      content: '';
      display: block;
      width: 150px;
      margin: 0 auto;
      border-bottom: 2px solid #000;
    }
  }
  p.intro {
    font-size: 13px;
  }
}

.item {
  background: #f4e3cc;
  .row {
    max-width: 1020px;
    margin: 0 auto;
    .card {
      background: #f4e3cc;
    }
    .card-text {
      font-size: 13px;
    }
  }
}

</style>


<script>

import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Footer,
  },
};
</script>
