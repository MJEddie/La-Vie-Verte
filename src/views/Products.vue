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
                            <div class="filter-type pb-3 mb-2">
                                <div class="form-check mb-1">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label s-icon01" for="flexCheckDefault">
    部屋木
  </label>
                                </div>
                                <div class="form-check mb-1">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                    <label class="form-check-label s-icon02" for="flexCheckChecked">
    haconiwa
  </label>
                                </div>
                                <div class="form-check mb-1">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                    <label class="form-check-label
                                    s-icon03" for="flexCheckChecked">
    ひととき
  </label>
                                </div>
                            </div>
                            <div class="filter-title fs-6 mb-3 pb-2">
                                <span class="category c-icon02">植物類型</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <h3 class="title mb-3 pb-2">全商品
                        </h3>
                        <ul>
                          <li v-for="product in productLists" :key="product.id">
                            {{ product.name }}
                            {{ product.price}}
                          </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Products",
  components: {
    NavBar,
  },
  data() {
    return { productLists: [
      {
        'id': 1,
        'name': 'myname',
        'price': '50',
      },
       {
         'id': 2,
        'name': 'myname',
        'price': '50',
      }
    ] }
  },
};
</script>

<style scoped>
.list.container {
    max-width: 1300px;
}

h3.title {
    font-family: Georgia, "Times New Roman", Times, "serif";
    font-size: 18px;
    border-bottom: 1px dotted #ccc;
}

.list-group {
    border-bottom: 1px dotted #ccc;
}

.list-group P {
    font-size: 11px;
}

.list-group input[type="text"] {
    width: 100%;
    border: 1px dotted #aeaeae;
    padding: 10px 5px;
    background: #f8f8f8;
    border-radius: 0;
}

.filter-title {
    border-bottom: 1px dotted #ccc;
}

.filter-type {
    border-bottom: 1px dotted #ccc;
}

.category.c-icon01 {
    display: inline-block;
    background: url(../assets/images/c_icon01.svg) no-repeat 0% 50%;
    padding: 0 0 0 30px;
}

.category.c-icon02 {
    display: inline-block;
    background: url(../assets/images/c_icon02.svg) no-repeat 0% 50%;
    padding: 0 0 0 30px;
}

.form-check {
    font-size: 13px;
}

.form-check-label.s-icon01 {
    background: url(../assets/images/s_icon01.svg) no-repeat 0% 50%;
    padding: 0 0 0 28px;
}

.form-check-label.s-icon02 {
    background: url(../assets/images/s_icon02.svg) no-repeat 0% 50%;
    padding: 0 0 0 28px;
}

.form-check-label.s-icon03 {
    background: url(../assets/images/s_icon03.svg) no-repeat 0% 50%;
    padding: 0 0 0 28px;
}

</style>
