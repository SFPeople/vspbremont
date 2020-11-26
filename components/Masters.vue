<template>
    <section class="masters background">
        <div class="container">
            <div class="container__line-one">
                <img src="/img/line-one.png" alt="">
            </div>
            <h2 class="container__title">
                18 лучших наших мастеров
            </h2>
            <p class="container__subtitle">
                У каждого из представленных специалистов за плечами более 12 лет опыта
            </p>
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
            <div class="masters__block">
                <div class="masters__description">
                    <p>Основной акцент в нашей компании всегда был направлен на повышение качества выполняемых работ. В команде нет ни одного мастера с опытом работы менее 12 лет. Доверяя ремонт нашим специалистам вы можете быть уверены в их ответственном и профессиональном отношении.</p> 
                    <br>
                    <p>Мастера работаю в Санкт-Петербурге с объектами разного уровня. Можно заказать экономный вариант или отделку по дизайн-проекту. Если вы не планируете ремонт туалета, ванной или совмещенного санузла в ближайшее время, то рекомендуем вступить в нашу группу вконтакте. Там возможно более тщательно ознакомиться с информацией, сохранить контакты, получить смету, удалено вести переписку с администратором, задавать ему интересующие вопросы и получать подробные ответы.</p>
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
