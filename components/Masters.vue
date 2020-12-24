<template>
    <section class="masters background">
        <div class="container">
            <div class="container__line-one">
                <img src="/img/line-one.png" alt="">
            </div>
            <h2 class="container__title">
                {{ mastersTitle }}
            </h2>
            <p class="container__subtitle">
                У каждого из представленных специалистов за плечами более 12 лет опыта
            </p>
            <client-only>
                <div class="masters__list">
                    <div class="master">
                        <img src="/img_masters/master_1.png" alt="" class="img-master">
                    </div>
                    <div class="master">
                        <img src="/img_masters/master_2.png" alt="" class="img-master">
                    </div>
                    <div class="master">
                        <img src="/img_masters/master_3.png" alt="" class="img-master">
                    </div>
                    <div class="master">
                        <img src="/img_masters/master_4.png" alt="" class="img-master">
                    </div>
                    <div class="master">
                        <img src="/img_masters/master_5.png" alt="" class="img-master">
                    </div>
                    <div class="master">
                        <img src="/img_masters/master_6.png" alt="" class="img-master">
                    </div>
                    <div class="master">
                        <img src="/img_masters/master_7.png" alt="" class="img-master">
                    </div>
                    <div class="master">
                        <img src="/img_masters/master_8.png" alt="" class="img-master">
                    </div>
                    <div class="master">
                        <img src="/img_masters/master_9.png" alt="" class="img-master">
                    </div>
                    <div class="master">
                        <img src="/img_masters/master_10.png" alt="" class="img-master">
                    </div>
                    <div class="master">
                        <img src="/img_masters/master_11.png" alt="" class="img-master">
                    </div>
                    <div class="master">
                        <img src="/img_masters/master_12.png" alt="" class="img-master">
                    </div>
                    <div class="master">
                        <img src="/img_masters/master_13.png" alt="" class="img-master">
                    </div>
                    <div class="master">
                        <img src="/img_masters/master_14.png" alt="" class="img-master">
                    </div>
                    <div class="master">
                        <img src="/img_masters/master_15.png" alt="" class="img-master">
                    </div>
                    <div class="master">
                        <img src="/img_masters/master_16.png" alt="" class="img-master">
                    </div>
                    <div class="master">
                        <img src="/img_masters/master_17.png" alt="" class="img-master">
                    </div>
                    <div class="master">
                        <img src="/img_masters/master_18.png" alt="" class="img-master">
                    </div>
                </div>
            </client-only>
            <div class="masters__block">
                <div class="masters__description">
                    <p>{{ masterDescriptionOne }}</p> 
                    <br>
                    <p>{{ masterDescriptionTwo }}</p>
                </div>
                <div class="masters__vk">
                    <div id="vk_groups"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['mastersTitle', 'masterDescriptionOne', 'masterDescriptionTwo'],
        mounted () {
            VK.Widgets.Group("vk_groups", { mode: 0, width: "300", height: "493"}, 15028247);  
        },
    }
</script>

<style scoped>
    .masters__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 20px;
    }

    .master {
        margin-top: 30px;
        width: 10.2%; 
        border-radius: 100%;
    }

    .img-master {
        width: 100%;
    }

    .masters__block {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;        
        margin-top: 40px;
        padding-bottom: 100px;
    }

    .masters__description {
        width: calc(100% - 326px);
        height: 493px;
        padding: 30px 30px 0px 30px;
        background-color: #ffffff;
        border: 1px solid #cccccc;
    }

   @media (max-width: 938px) {   
        .masters__block {
            padding-bottom: 50px;
            margin-top: 30px;
        }
        .masters__list {
            margin-top: 0px;
        }
    }

    @media (max-width: 740px) {
        .masters__vk {
            display: none;
        }
        .masters__description {
            width: 100%;
            height: auto;
            padding: 20px 20px 20px 20px;
        }
        .master {
            width: 15%
        }
    }

    @media (max-width: 420px) {
        .master {
            width: 32%;
            margin-top: 10px;
        }
        .masters__list {
            margin-top: 20px;
        }
    }
</style>
