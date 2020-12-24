<template>
    <section class="video">
        <div class="container">
            <div class="container__line-one">
                <img src="/img/line-two.png" alt="">
            </div>
            <h2 class="container__title" id="our-work">
                Видео 
            </h2>
            <p class="container__subtitle">
                Ознакомьтесь с нашей работой в деталях
            </p>
            <div class="video__block">
                <div class="video__bath">
                    <iframe src="https://vk.com/video_ext.php?oid=-15028247&id=456239087&hash=e1af710cb8fc7fc1&hd=4" width="1920" height="1080" frameborder="1" allowfullscreen class="video__setting"></iframe>
                </div>
                <div class="video__bath">
                    <iframe src="https://vk.com/video_ext.php?oid=-15028247&id=456239086&hash=35640428497212a1&hd=4" width="1920" height="1080" frameborder="1" allowfullscreen class="video__setting"></iframe>
                </div>
                <div class="video__bath">
                    <iframe src="https://vk.com/video_ext.php?oid=-15028247&id=456239085&hash=7880be75aec1afcc&hd=4" width="1920" height="1080" frameborder="1" allowfullscreen class="video__setting"></iframe>
                </div>
                <div class="video__bath">
                    <iframe src="https://vk.com/video_ext.php?oid=-15028247&id=456239083&hash=6e87aabade472069&hd=4" width="1920" height="1080" frameborder="1" allowfullscreen class="video__setting"></iframe>
                </div>
                <div class="video__bath">
                    <iframe src="https://vk.com/video_ext.php?oid=-15028247&id=456239082&hash=bb4f5a825e57aff8&hd=4" width="1920" height="1080" frameborder="1" allowfullscreen class="video__setting"></iframe>
                </div>
                <div class="video__bath">
                    <iframe src="https://vk.com/video_ext.php?oid=-15028247&id=456239080&hash=cf3a6c1401d6eb88&hd=4" width="1920" height="1080" frameborder="1" allowfullscreen class="video__setting"></iframe>
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

    .video__link {
        font-size: 22px;
        color: #129DD8;
    }

    @media (max-width: 740px) {
        .video__bath {
            width: 100%;
        }

        .video__link {
            font-size: 16px;
        }
    }
</style>