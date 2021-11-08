<style scoped lang="scss">
footer {
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 50px;
}

nav {
  border-bottom: 1px dotted #ddd;
  li {
    margin: 0 47px;
    font-size: 12px;
  }
  a {
    color: #000;
  }
}

.logo {
  padding: 40px 0 20px;
}

.copyright {
  font-family: "Microsoft JhengHei", 微軟正黑體, sans-serif;
  font-size: 10px;
  letter-spacing: 1px;
}
</style>

<template>
  <footer class="w-100">
    <nav class="navbar footer">
      <div class="container justify-content-center">
        <ul class="nav justify-content-between">
          <li class="nav-item">
            <a href="#" target="_blank" class="nav-link">SHOPPING GUIDE</a>
          </li>
          <li class="nav-item">
            <a href="#" target="_blank" class="nav-link">與我們聯絡</a>
          </li>
          <li class="nav-item">
            <a href="#" target="_blank" class="nav-link">個人資料保護方針</a>
          </li>
          <li class="nav-item d-flex justify-content-end">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="nav-link"
            >
              <img src="../assets/images/fb.svg" alt="" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="nav-link"
            >
              <img src="../assets/images/ig.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="logo d-flex justify-content-center">
      <a href="#">
        <img src="../assets/images/flogo.svg" alt="" />
      </a>
    </div>
    <p class="copyright text-center mb-0">
      NICK &copy; 2021 COPYRIGHT &emsp;本網站僅做為個人學習使用，非商業用途
    </p>
  </footer>
</template>
