<template>
  <NavBar></NavBar>
  <main>
    <div class="breadcrumb h-auto mb-5" style="--bs-breadcrumb-divider: '';">
      <ol class="breadcrumb fw-light mb-0">
        <li class="breadcrumb-item px-4">
          <router-link to="/"><span>HOME</span></router-link>
        </li>
        <li class="breadcrumb-item px-4 active" aria-current="page">
          <span>CONTACT</span>
        </li>
      </ol>
    </div>

    <h1 class="title fs-4 text-center my-5 pb-3">CONTACT US</h1>

    <section class="contact">
      <p class="information">
        謝謝您的主動聯絡，請留下要諮詢的問題，我們將會以最快的速度回覆您。
        <br />
        客服時間｜每日 14:00-21:00
      </p>

      <form>
        <div class="row mb-3">
          <label for="name" class="col-sm-3 col-form-label"
            >您的姓名<span class="text-warning"> ※</span></label
          >
          <div class="col-sm-3">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="姓"
              aria-label="First name"
            />
          </div>
          <div class="col-sm-3">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="名"
              aria-label="Last name"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="phone" class="col-sm-3 col-form-label">電話號碼</label>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="phone" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="email" class="col-sm-3 col-form-label"
            >Email<span class="text-warning"> ※</span></label
          >
          <div class="col-sm-9 gy-3">
            <input type="email" class="form-control mb-2" id="email" />
            <input type="email" class="form-control" id="checkEmail" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="comment" class="col-sm-3 col-form-label"
            >反映內容<span class="text-warning"> ※</span></label
          >
          <div class="col-sm-9">
            <textarea class="form-control" id="comment" rows="5"></textarea>
          </div>
        </div>
      </form>
      <div class="d-grid col-3 mx-auto pt-3">
        <button type="submit" class="btn btn-black">送出</button>
      </div>
    </section>
  </main>
  <Footer></Footer>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Contact",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
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
  &::after {
    content: "";
    width: 1.875rem;
    border-bottom: 2px solid #000;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -15px;
  }
}

section.contact {
  max-width: 920px;
  margin: 0 auto;
  width: 100%;
  font-size: 13px;
  margin-bottom: 100px;
  p {
    margin-bottom: 40px;
  }
  .row {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px dotted #ccc;
    input,
    textarea {
      background: #f8f8f8;
      border-radius: 0;
      border: 1px dotted #aeaeae;
      &:focus {
        border-radius: 5px;
        box-shadow: none;
        border: 1px solid #000;
        outline: 1px solid #000;
      }
      &::-webkit-input-placeholder {
        font-family: "Roboto", "Times New Roman", "Noto Serif JP", sans-serif;
        font-size: 13px;
      }
      &::-moz-placeholder {
        font-family: "Roboto", "Times New Roman", "Noto Serif JP", sans-serif;
        font-size: 13px;
      }
    }
  }
  button:focus {
    box-shadow: none;
  }
}
</style>
