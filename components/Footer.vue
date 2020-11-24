<template>
    <footer class="footer background">
        <div class="footer__block container">
            <div class="footer__about-us">
                <div class="footer__about-us-block">
                    <div class="footer__about-us-logo">
                        <img class="footer__about-us-img" src="~assets/img/logo.svg" alt="">
                    </div>
                    <p class="footer__about-us-name">
                        РЕМОНТвСПб
                    </p>
                </div>
                <p class="footer__about-us-description">
                    Компания существует с 2004 года и имеет колоссальный опыт в сфере ремонтов помещений разного типа. 
                </p>
            </div>
            <div class="footer__address">
                <p class="footer__title">Контакты</p>
                <div class="footer__address-item footer__address_mrg footer__address_border">
                    <img src="~assets/img/map.svg" alt="">
                    <p class="footer__address-data">г. Санкт-Петербург, ул.Марата 86А</p>
                </div>
                <div class="footer__address-item footer__address_border">
                    <div><img src="~assets/img/telefon.png" alt=""></div>
                    <p class="footer__address-data">8 (952) 27-111-82</p>
                </div>
                <div class="footer__address-item footer__address_border">
                    <div><img src="~assets/img/telefon.png" alt=""></div>
                    <p class="footer__address-data">8 (812) 98-111-86</p>
                </div>
                <div class="footer__address-item footer__address_border">
                    <div><img src="~assets/img/mail.svg" alt=""></div>
                    <p class="footer__address-data">vspb-remont@yandex.ru</p>
                </div>
                <div class="footer__address-item">
                    <div><img src="~assets/img/graph.svg" alt=""></div>
                    <p class="footer__address-data">понедельник-воскресенье с 9:00 до 21:00</p>
                </div>
            </div>
            <div class="footer__form">
                <p class="footer__title">Отправить заявку</p>
                <form action="">
                    <input type="text" class="footer__form-name" required placeholder="Ваше имя">
                    <input type="number" class="footer__form-phone" required placeholder="Ваш телефон">
                    <button type="submit" class="footer__form-submit">Отправить</button>
                </form>
            </div>
        </div>
        <div class="footer__bottom-line center-align">
            <p class="footer__copy">&copy; 2004-2021. Все права защищены</p>
        </div>
    </footer>
</template>

<style scoped>
    .footer__block {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-bottom: 50px;
    }

    .footer__about-us, .footer__address, .footer__form {
        width: 32%;
    }
        
    .footer__title {
        text-transform: uppercase;
        font-weight: 700;
    }   

    .footer__about-us-block {
        display: flex;
        align-items: center;
    }

    .footer__about-us-logo {
        width: 40px;
    }

    .footer__about-us-img {
        width: 100%;
    }

    .footer__about-us-name {
        margin-left: 20px;
        font-weight: 700;
        font-size: 36px;
    }

    .footer__about-us-description {
        margin-top: 22px;
    }

    .footer__address-item {
        display: flex;
        align-items: center;
    }

    .footer__address-data {
        margin-left: 14px;
    }

    .footer__address_border {
        border-bottom: 1px solid #E6E5E5;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .footer__address_mrg {
        margin-top: 10px;
    }

    .footer__form-name, .footer__form-phone {
        margin-top: 20px;
        width: 100%;
        height: 50px;
        border: 1px solid #CCCCCC;
        border-radius: 4px;
        font-size: 18px;
        padding-left: 10px;
    }

    .footer__form-submit {
        margin-top: 20px;
        height: 50px;
        width: 154px;
        border-radius: 4px;
        background: #129DD8;
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 700;
        text-align: center;
        border: none;
    }

    .footer__form-submit:hover {
        background: #108CC2;
    }

    .footer__bottom-line {
        height: 100px;
        background: #1E333F;
    }

    .footer__copy {
        text-align: center;
        color: #F7F7F7;
    }

    @media (max-width: 938px) {   
        .footer__about-us {
            width: 100%;
        }

        .footer__address, .footer__form {
            width: 48%;
            margin-top: 20px;
        }

        .footer__about-us-name {
            font-size: 24px;
        }
    }

    @media (max-width: 600px) {
        .footer__address, .footer__form {
            width: 100%;
            margin-top: 24px;
            
        }
    }
</style>
