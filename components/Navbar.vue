<template>
    <header class="header">
        <div class="header__container">

            <!-- Левый блок шапки -->
            <div class="header__left-block">
                <div class="header__burger" @click="turn = !turn">
                    <span class="burger__span"></span>
                </div>  

                <div class="header__logo">
                    <nuxt-link to="/" no-prefetch><img src="~assets/img/logo.svg" alt=""></nuxt-link>
                </div>

                <ul class="header__ul"> 
                    <li>
                        <a class="header__link" href="#our-price">Цены</a>
                    </li>
                    <li>
                        <a class="header__link" href="#our-work">Наши работы</a>
                    </li>
                    <li>
                        <a class="header__link" href="#" @click="turn = !turn">Услуги</a>
                    </li>
                </ul>
            </div>

            
            <!-- Правый блок шапки -->
            <div class="header__right-block">
                <div class="header__icon-phone">
                    <img src="~assets/img/telefon.png" alt="">
                </div>
                <div class="header__contacts">
                    <a href="tel:+79522711182" class="header__num header__num-one">8 (952) 27-111-82</a>
                    <a href="tel:+78129811186" class="header__num header__num-two">8 (812) 98-111-86</a>
                </div>
                <button class="header__btn btn"  @click="form = !form">Обратный звонок</button>
            </div>
            
            <!-- Модальное окно для услуг-->
            <div class="overlay" v-bind:class="{overlay_v: turn}" @click="turn = !turn">
                <div class="popup">
                    <div class="close-popup"></div>
                    <nav class="header__services">
                        <nuxt-link to="/" no-prefetch class="header__service">Ремонт квартир</nuxt-link>
                        <nuxt-link to="/remont-vannoj" no-prefetch class="header__service">Ремонт ванной</nuxt-link>
                    </nav>
                </div>
            </div>

            <!-- Форма заявки -->
            <div class="overlay" v-bind:class="{overlay_v: form}" >
                <div class="popup">
                    <div class="close-popup" @click="form = !form"></div>
                    <Form />
                </div>
            </div>
        </div>
    </header>
</template>


<script>
  export default {
    data() {
      return {
        turn: false,
        form: false
      }
    }
  }
</script>


<style scoped>
    .header {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0; 
        z-index: 10;
        border-bottom: 1px solid rgb(247, 247, 247, 0.5);
    }

    .header__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1160px;
        margin: 0 auto;
        padding: 15px;
    }

    .header__btn {
        width: 222px;
        height: 50px;
    }

    /* Левый блок шапки */
    .header__left-block {
        display: flex;
        align-items: center;
    }

    .header__logo {
        margin-right: 20px;
        cursor: pointer;
    }

    .header__ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .header__link {
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        display: block;
        padding: 0 30px;
    }

    .header__link:hover {
        color: #129DD8;
    }

    /* Правый блок шапки */
    .header__right-block {
        display: flex;
        align-items: center;
    }

    .header__contacts {
        display: flex;
        flex-direction: column;
        padding: 0 30px;
    }
    
    .header__num {
        color: #fff;
        text-decoration: none;
    }

    /* Модальное окно */
    .header__services {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .header__service {
        text-decoration: none;
        color: #000;
        padding: 10px 60px;
        font-size: 24px;
        font-weight: 500;
    }

    .header__service:hover {
        color: #129DD8;
    }

    

    @media (max-width: 1000px) {
        .header__logo, .header__ul {
            display: none;
        }

        /* кнопка меню >>>*/
        .header__burger {
            display: block;
            position: relative;
            width: 25px;
            height: 19px;
            cursor: pointer;
        }

        .header__burger:before, 
        .header__burger:after, 
        .burger__span {
            position: absolute;
            left: 0;
            content: "";
            background: #fff;
            width: 100%;
            height: 3px;
        }

        .header__burger:before {
            top: 0;
        }

        .burger__span {
            top: 8px; 
        }

        .header__burger:after {
            bottom: 0;
        }
        /* <<< кнопка меню */

        
    }

    @media (max-width: 700px) { 
        .header__icon-phone, .header__num-two, .header__btn {
            display: none;
        }
        .header__contacts {
            padding-right: 0px;
        }
    }

    @media (max-width: 425px) {
        .header__service {
            padding: 10px 20px;
            font-size: 20px;
        }
    }
</style>