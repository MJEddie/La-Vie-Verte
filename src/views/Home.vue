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
  width: 28%;
  background-color: #f4f4f4;
  padding: 70px;
  margin-left: -13%;
  z-index: 1;
}

</style>

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
            <router-link to="/product" class="nav-link">PRODUCT</router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid d-flex justify-content-start w-100 my-5 px-0 py-3">
      <div class="thumbnail week flex-shrink-0"></div>
      <div class="info week text-center">
        <h2 class="title">群生ユーフォルビア</h2>
        <small class="subtitle">this week's special</small>
        <p class="heading text-start fw-bold">密集する株がおりなすフォルム</p>
        <p>ユーフォルビアには様々な種類がいて、形も様々ですが魅力的な群生を作る種も多いです。
KIDORIオススメの群生株を今回入荷致しました。</p>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  components: {
    
  },
};
</script>
