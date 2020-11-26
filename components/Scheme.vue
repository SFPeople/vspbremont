<template>
    <section class="scheme background">
       <div class="container">
            <div class="scheme__line-left">
                <img src="/img/line-one.png" alt="">
            </div>
            <div class="scheme__block">
                <div class="scheme__block-left">
                    <h2 class="scheme__title">
                        Схема работы с нашей компанией
                    </h2>
                    <p class="scheme__description">
                        Для нас очень важно создать условия, при которых вам было бы комфортно с нами сотрудничать. Мы прекрасно понимаем, что для принятия решения необходимо собрать нужную информацию. Вы всегда можете вызвать нашего мастера на бесплатный замер, не беспокоясь, что к вам приедет обычный оценщик с целью уговорить вас на ремонт. С нашей стороны не будет оказано никакого давления. Цель замера - предоставить вам информацию о цене ремонта, требуемых объемах материалов и дать рекомендации. Вы не обязаны принимать решение в тот же момент. Мы с уважением отнесемся и к вашему отказу. Для нас важна наша деятельность.
                    </p>
                    <button class="scheme__btn btn" @click="form = !form">Вызвать на замер</button>
                </div>
                
                <div class="scheme__block-right">
                    <div class="scheme__step">
                        <div class="scheme__block-img">
                            <img src="/img/shag-1.svg" alt="" class="scheme__img">
                        </div>
                        <div class="scheme__block-info">
                            <h3 class="scheme__step-title">
                                Оставьте заявку
                            </h3>
                            <p class="scheme__step-description">
                                Оставить заявку можно любым удобным для вас способом: позвонить, заполнить форму на сайте, написать в группе вк и т.д.
                            </p>
                        </div>
                    </div>
                    <div class="scheme__step">
                        <div class="scheme__block-img">
                            <img src="/img/shag-2.svg" alt="" class="scheme__img">
                        </div>
                        <div class="scheme__block-info">
                            <h3 class="scheme__step-title">
                                Договариваемся о замере
                            </h3>
                            <p class="scheme__step-description">
                                Определяем дату и время для проведения бесплатного замера, который можно провести в любой удобный для вас день недели с 9:00 до 21:00.
                            </p>
                        </div>
                    </div>
                    <div class="scheme__step">
                        <div class="scheme__block-img">
                            <img src="/img/shag-3.svg" alt="" class="scheme__img">
                        </div>
                        <div class="scheme__block-info">
                            <h3 class="scheme__step-title">
                                Проводится оценка
                            </h3>
                            <p class="scheme__step-description">
                                На объект приезжает мастер, который проконсультирует вас, составит смету на работы и, если необходимо, на черновые материалы.
                            </p>
                        </div>
                    </div>
                    <div class="scheme__step">
                        <div class="scheme__block-img">
                            <img src="/img/shag-4.svg" alt="" class="scheme__img">
                        </div>
                        <div class="scheme__block-info">
                            <h3 class="scheme__step-title">
                                Принимается решение
                            </h3>
                            <p class="scheme__step-description">
                                После того как вам будет предоставлена вся необходимая информация, вы принимаете решение подходят ли вам наши услуги или нет.
                            </p>
                        </div>
                    </div>
                    <div class="scheme__step">
                        <div class="scheme__block-img">
                            <img src="/img/shag-5.svg" alt="" class="scheme__img">
                        </div>
                        <div class="scheme__block-info">
                            <h3 class="scheme__step-title">
                                Помощь с подготовкой
                            </h3>
                            <p class="scheme__step-description">
                                Если вам требуется, то нами оказывается помощь с закупкой материалов, различными согласованиями, подготовкой дизайн-проекта и т.д
                            </p>
                        </div>
                    </div>
                    <div class="scheme__step">
                        <div class="scheme__block-img">
                            <img src="/img/shag-6.svg" alt="" class="scheme__img">
                        </div>
                        <div class="scheme__block-info">
                            <h3 class="scheme__step-title">
                                Выполняется ремонт
                            </h3>
                            <p class="scheme__step-description">
                                Наши мастера выполняют в оговоренные в договоре сроки качественный ремонт
                            </p>
                        </div>
                    </div>
                    <div class="scheme__step">
                        <div class="scheme__block-img">
                            <img src="/img/shag-7.svg" alt="" class="scheme__img">
                        </div>
                        <div class="scheme__block-info">
                            <h3 class="scheme__step-title">
                                Оплачивается работа
                            </h3>
                            <p class="scheme__step-description">
                                Оплата работ производится после того, как она будет вами принята
                            </p>
                        </div>
                    </div>
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
    </section>
</template>

<script>
    export default {
        data() {
            return {
                form: false
            }
        }
    }
</script>


<style scoped>
    .scheme__block {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 16px;
        padding-bottom: 100px;
    }

    .scheme__line-left {
        display: flex;
    }

    .scheme__block-left, .scheme__block-right {
        width: 49%
    }

    .scheme__title {
        font-size: 36px;
    }

    .scheme__description {
        margin-top: 16px;
    }

    .scheme__btn {
        width: 100%;
        height: 70px;
        margin-top: 20px;
    }

    .scheme__step {
        display: flex;
    }


    .scheme__step-description {
        font-size: 20px;
    }

    .scheme__block-img {
        max-height: 140px;
    }

    .scheme__block-info {
        margin-left: 18px;
    }

    @media (max-width: 1100px) {
        .scheme__step-description {
            font-size: 16px;
        }
    }

    @media (max-width: 938px) {
        .scheme__block {
            padding-bottom: 50px;
        }

        .scheme__title {
            font-size: 26px;
        }
        
    }

    @media (max-width: 767px) {
        .scheme__block-left, .scheme__block-right {
            width: 100%
        }

        .scheme__block-left {
            margin-bottom: 30px;
        }

        
    }

</style>