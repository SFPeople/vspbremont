<template>
    <section class="contract">
        <div class="container">
            <div class="container__line-one">
                <img src="/img/line-two.png" alt="">
            </div>
            <h2 class="container__title">
                {{ contractTitle }}
            </h2>
            <p class="container__subtitle">
                Работаем с предоставлением всех гарантий
            </p>
            <div class="contract__block">
                <client-only>
                    <div class="contract__pages">
                        <div class="contract__page">
                            <img class="contract__img" src="/img/page-1.jpg" alt="Страница 1 договора">
                        </div>
                        <div class="contract__page">
                            <img class="contract__img" src="/img/page-2.jpg" alt="Страница 2 договора">
                        </div>
                        <div class="contract__page">
                            <img class="contract__img" src="/img/page-3.jpg" alt="Страница 3 договора">
                        </div>
                    </div>
                </client-only>
                <p class="contract__description">
                    {{ contractDescription }}
                </p>
                <client-only>
                    <div class="contract__advantages">
                        <div class="contract__advantage contract__advantage_gray">
                            <p class="contract__advantage-text">
                                Более <span class="color-blue">17</span> лет на рынке
                            </p>
                        </div>
                        <div class="contract__advantage">
                            <p class="contract__advantage-text">
                                Бесплатный замер
                            </p>
                        </div>
                        <div class="contract__advantage">
                            <p class="contract__advantage-text">
                                Бесплатная смета
                            </p>
                        </div>
                        <div class="contract__advantage contract__advantage_gray">
                            <p class="contract__advantage-text">
                                Более <span class="color-blue">33 000</span> подписчиков в ВК
                            </p>
                        </div>
                    </div>
                </client-only>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['contractTitle', 'contractDescription']
    }
</script>

<style scoped>
    .contract__block {
        margin-top: 50px;
        margin-bottom: 100px;
    }

    .contract__pages {
        display: flex;
        justify-content: space-between;
    }

    .contract__page {
        width: 30%;
    }

    .contract__img {
        width: 100%;
    }

    .contract__description {
        margin-top: 40px;
    }

    .contract__advantages {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 10px;
        align-items: center;
    }

    .contract__advantage {
        display: flex; 
        justify-content: center; 
        align-items: center;
        margin-top: 30px;
        width: 48.6%;
        height: 148px;
        border: 1px solid #CCCCCC;
    }

    .contract__advantage_gray {
        background-color: #F7F7F7;
    }

    .contract__advantage-text {
        text-transform: uppercase;
        font-size: 24px;
    }

    @media (max-width: 1000px) {
        .contract__advantage-text {
            font-size: 20px;
        }

        .contract__advantage {
            height: 100px;
        }
    }

    @media (max-width: 938px) {
        .contract__block {
            margin-top: 30px;
            margin-bottom: 50px;
        }
        .contract__advantage-text {
            font-size: 16px;
        }
        .contract__description {
            margin-top: 20px;
        }
        .contract__advantages {
            margin-top: 0;
        }
    }

    @media (max-width: 668px) {
        .contract__advantage {
            width: 100%;
            margin-top: 14px;
        }
    }
</style>