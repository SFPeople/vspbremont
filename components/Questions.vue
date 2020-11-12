<template>
    <section class="questions">
        <div class="container">
            <div class="container__line-one">
                <img src="~assets/img/line-two.png" alt="">
            </div>
            <h2 class="container__title">
                Часто задаваемые вопросы
            </h2>
            <p class="container__subtitle">
                Здесь вы можете найти интересующий вас вопрос
            </p>
            <div class="questions__block">
                <div class="question__block" @click="conditionTwo = !conditionTwo">
                    <p>Как определяется стоимость ремонта?</p>
                    <div class="question__add" v-if="!conditionTwo">
                        <img src="~assets/img/add.svg" alt="">
                    </div>
                    <div class="question__minus" v-else>
                        <img src="~assets/img/minus.svg" alt="">
                    </div>
                </div>
                <div class="question__answer" v-if="conditionTwo">
                    <p>Стоимость ремонта рассчитывается исходя из объемов и видов работ. После замера вам будет предоставлена смета с перечнем и стоимостью работ. Таким образом вам будет более удобно принять решение подходят ли вам наши услуги или нет.</p>
                </div>

                <div class="question__block" @click="conditionThree = !conditionThree">
                    <p>Кто покупает материалы?</p>
                    <div class="question__add" v-if="!conditionThree">
                        <img src="~assets/img/add.svg" alt="">
                    </div>
                    <div class="question__minus" v-else>
                        <img src="~assets/img/minus.svg" alt="">
                    </div>
                </div>
                <div class="question__answer" v-if="conditionThree">
                    <p>Закупка материалов осуществляется удобным для вас способом. <br>
                    Во-первых, мастер может самостоятельно заказать материалы. Вам нужно их будет только оплатить при доставке. <br>
                    Во-вторых, мастер может составить список и вы сможете осуществить закупку лично. <br>
                    В-третьих, вы можете совместно с мастером осуществить закупку.</p>
                </div>
                
                <div class="question__block" @click="conditionOne = !conditionOne">
                    <p>Можно ли будет пользоваться унитазом во время ремонта? </p>
                    <div class="question__add" v-if="!conditionOne">
                        <img src="~assets/img/add.svg" alt="">
                    </div>
                    <div class="question__minus" v-else>
                        <img src="~assets/img/minus.svg" alt="">
                    </div>
                </div>
                <div class="question__answer" v-if="conditionOne">
                    <p>Да, в процее ремонта унитазом можно будет пользоваться. Каждый день мастер будет устанавливать его на временные крепления.</p>
                </div>

                

                
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                conditionOne: false,
                conditionTwo: false,
                conditionThree: false,
            }
        }
    }
</script>

<style scoped>
    .questions__block {
        margin-top: 40px;
        padding-bottom: 100px;
    }
    
    .question__block {
        background: #F7F7F7;
        min-height: 70px;
        margin-top: 10px;
        padding: 23px 60px 23px 18px;
        border: 1px solid #cccccc;
        cursor: pointer;

        position: relative;
    }

    .question__block:hover {
        border: 2px solid #129DD8;
    }

    .question__add {
        position: absolute;
        right: 20px;
        top: 50%;
        margin-top: -13px; /* так как иконка 26px */
    }

    .question__minus {
        position: absolute;
        right: 20px;
        top: 50%;
        margin-top: -13px;
    }

    .question__answer {
        display: block;
        background: #ffffff;
        min-height: 100px;
        padding: 18px;
        border: 1px solid #cccccc;
        border-top: none;
    }

    @media (max-width: 938px) {   
        .questions__block {
            margin-top: 30px;
            padding-bottom: 50px;
        }
    }

</style>