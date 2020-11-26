<template>
    <section class="video">
        <div class="container">
            <div class="container__line-one">
                <img src="/img/line-two.png" alt="">
            </div>
            <h2 class="container__title" id="our-work">
                Видео некоторых наших работ
            </h2>
            <p class="container__subtitle">
                Ознакомьтесь с нашей работой в деталях
            </p>
            <div class="video__block">
                <div class="video__bath">
                    <iframe class="video__setting" src="https://www.youtube.com/embed/qyT0bVZGXrI"></iframe>
                </div>
                <div class="video__bath">
                    <iframe class="video__setting" src="https://www.youtube.com/embed/G1eljEtvEF0"></iframe>
                </div>
                <div class="video__bath">
                    <iframe class="video__setting" src="https://www.youtube.com/embed/BCUGPJqzu0k"></iframe>
                </div>
                <div class="video__bath">
                    <iframe class="video__setting" src="https://www.youtube.com/embed/m9GEZkuHOcc"></iframe>
                </div>
                <div class="video__bath">
                    <iframe class="video__setting" src="https://www.youtube.com/embed/8nhZP7_bPcQ"></iframe>
                </div>
                <div class="video__bath">
                    <iframe class="video__setting" src="https://www.youtube.com/embed/QLRD0mpM7_k"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .video__block {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 20px;
        padding-bottom: 100px;
    }

    .video__bath {
        width: 49%;
        height: 318px;
        margin-top: 20px;
    }

    .video__setting {
        width: 100%;
        height: 100%;
      
    }

    .video__other-works {
        text-align: center;
        margin-top: 40px;
        margin-bottom: 100px;
        padding: 40px 0;
        border: 1px dashed #CCCCCC;
    }

    .video__link {
        font-size: 22px;
        color: #129DD8;
    }

    @media (max-width: 740px) {
        .video__bath {
            width: 100%;
        }

        .video__other-works {
            margin-top: 20px;
            padding: 20px 0;
            margin-bottom: 50px;
        }

        .video__link {
            font-size: 16px;
        }
    }
</style>