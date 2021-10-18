<template>
  <header>
        <nav class="navbar py-0">
            <div class="container-fluid px-0">
                <a href="#" class="navbar-brand ms-4">
                    <img src="../assets/images/logo.svg" alt="logo">
                </a>
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

        <nav class="navbar menu">
            <div class="container justify-content-center">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">HOME</router-link>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">PRODUCTS</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">SHOPPING GUIDE</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">

  nav li a.nav-link {
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

nav.navbar.menu {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    li a.nav-link {
    padding: 0 2.5rem;
    font-size: 12px;
    }
}

</style>


<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

