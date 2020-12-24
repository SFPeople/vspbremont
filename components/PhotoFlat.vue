<template>
    <section class="photo">
        <div class="container">
            <div class="container__line-one">
                <img src="/img/line-two.png" alt="">
            </div>
            <h2 class="container__title" id="our-work">
                Примеры работ
            </h2>
            <p class="container__subtitle">
                Здесь представлено несколько последних наших работ
            </p>

            <div class="photo__block">
                <div class="photo__work">
                    <client-only>
                        <vue-picture-swipe :items="work1"></vue-picture-swipe>
                        <div class="photo__footer">
                            <div class="photo__sum">16 фото</div>
                            <div><img src="/img/camera.png" alt="camera" class="photo__icon-camera"></div>
                        </div>                    
                    </client-only>
                </div>
                <div class="photo__work">
                    <client-only>
                        <vue-picture-swipe :items="work2"></vue-picture-swipe>
                        <div class="photo__footer">
                            <div class="photo__sum">16 фото</div>
                            <div><img src="/img/camera.png" alt="camera" class="photo__icon-camera"></div>
                        </div>                    
                    </client-only>
                </div>
                <div class="photo__work">
                    <client-only>
                        <vue-picture-swipe :items="work3"></vue-picture-swipe>
                        <div class="photo__footer">
                            <div class="photo__sum">12 фото</div>
                            <div><img src="/img/camera.png" alt="camera" class="photo__icon-camera"></div>
                        </div>                    
                    </client-only>
                </div>
                <div class="photo__work">
                    <client-only>
                        <vue-picture-swipe :items="work4"></vue-picture-swipe>
                        <div class="photo__footer">
                            <div class="photo__sum">22 фото</div>
                            <div><img src="/img/camera.png" alt="camera" class="photo__icon-camera"></div>
                        </div>                    
                    </client-only>
                </div>
                <div class="photo__work">
                    <client-only>
                        <vue-picture-swipe :items="work5"></vue-picture-swipe>
                        <div class="photo__footer">
                            <div class="photo__sum">29 фото</div>
                            <div><img src="/img/camera.png" alt="camera" class="photo__icon-camera"></div>
                        </div>                    
                    </client-only>
                </div>
                <div class="photo__work">
                    <client-only>
                        <vue-picture-swipe :items="work6"></vue-picture-swipe>
                        <div class="photo__footer">
                            <div class="photo__sum">34 фото</div>
                            <div><img src="/img/camera.png" alt="camera" class="photo__icon-camera"></div>
                        </div>                   
                    </client-only>
                </div>
            </div>
            
            <div class="photo__other-works">
                <p>Другие наши объекты смотрите в группе:</p>
                <a href="https://vk.com/vspbremont" class="photo__link">https://vk.com/vspbremont</a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                work1: [
                    { src: '/img_flat/flat_1-9.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_1-10.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_1-11.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_1-12.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_1-13.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_1-14.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_1-15.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_1-16.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_1-1.jpg', thumbnail: '/img_flat/flat_mini-1.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_1-2.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_1-3.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_1-4.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_1-5.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_1-6.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_1-7.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_1-8.jpg', w: 1280, h: 960 },
                ],
                work2: [
                    { src: '/img_flat/flat_2-9.jpg', w: 800, h: 600 },
                    { src: '/img_flat/flat_2-10.jpg', w: 800, h: 600 },
                    { src: '/img_flat/flat_2-11.jpg', w: 800, h: 600 },
                    { src: '/img_flat/flat_2-12.jpg', w: 800, h: 600 },
                    { src: '/img_flat/flat_2-13.jpg', w: 800, h: 600 },
                    { src: '/img_flat/flat_2-14.jpg', w: 800, h: 600 },
                    { src: '/img_flat/flat_2-15.jpg', w: 800, h: 600 },
                    { src: '/img_flat/flat_2-16.jpg', w: 800, h: 600 },
                    { src: '/img_flat/flat_2-1.jpg', thumbnail: '/img_flat/flat_mini-2.jpg', w: 800, h: 600 },
                    { src: '/img_flat/flat_2-2.jpg', w: 800, h: 600 },
                    { src: '/img_flat/flat_2-3.jpg', w: 800, h: 600 },
                    { src: '/img_flat/flat_2-4.jpg', w: 800, h: 600 },
                    { src: '/img_flat/flat_2-5.jpg', w: 800, h: 600 },
                    { src: '/img_flat/flat_2-6.jpg', w: 800, h: 600 },
                    { src: '/img_flat/flat_2-7.jpg', w: 800, h: 600 },
                    { src: '/img_flat/flat_2-8.jpg', w: 800, h: 600 },
                ],
                work3: [
                    { src: '/img_flat/flat_3-7.jpg', w: 851, h: 638 },
                    { src: '/img_flat/flat_3-8.jpg', w: 851, h: 638 },
                    { src: '/img_flat/flat_3-9.jpg', w: 851, h: 638 },
                    { src: '/img_flat/flat_3-10.jpg', w: 851, h: 638 },
                    { src: '/img_flat/flat_3-11.jpg', w: 478, h: 638 },
                    { src: '/img_flat/flat_3-12.jpg', w: 851, h: 638 },
                    { src: '/img_flat/flat_3-1.jpg', thumbnail: '/img_flat/flat_mini-3.jpg', w: 851, h: 638 },
                    { src: '/img_flat/flat_3-2.jpg', w: 851, h: 638 },
                    { src: '/img_flat/flat_3-3.jpg', w: 851, h: 638 },
                    { src: '/img_flat/flat_3-4.jpg', w: 851, h: 638 },
                    { src: '/img_flat/flat_3-5.jpg', w: 478, h: 638 },
                    { src: '/img_flat/flat_3-6.jpg', w: 851, h: 638 },
                ],
                work4: [
                    { src: '/img_flat/flat_4-12.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_4-13.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_4-14.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_4-15.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_4-16.jpg', w: 1000, h: 750 },
                    { src: '/img_flat/flat_4-17.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_4-18.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_4-19.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_4-20.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_4-21.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_4-22.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_4-1.jpg', thumbnail: '/img_flat/flat_mini-4.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_4-2.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_4-3.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_4-4.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_4-5.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_4-6.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_4-7.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_4-8.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_4-9.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_4-10.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_4-11.jpg', w: 1280, h: 960 },
                ],
                work5: [
                    { src: '/img_flat/flat_5-16.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-17.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-18.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-19.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-20.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-21.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-22.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-23.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-24.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_5-25.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-26.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-27.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-28.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-29.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-1.jpg', thumbnail: '/img_flat/flat_mini-5.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_5-2.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_5-3.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_5-4.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-5.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_5-6.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-7.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-8.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-9.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_5-10.jpg', w: 1280, h: 960 },
                    { src: '/img_flat/flat_5-11.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-12.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-13.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-14.jpg', w: 810, h: 1080 },
                    { src: '/img_flat/flat_5-15.jpg', w: 810, h: 1080 },
                ],
                work6: [
                    { src: '/img_flat/flat_6-17.jpg', w: 1280, h: 853 },
                    { src: '/img_flat/flat_6-18.jpg', w: 682, h: 1024 },
                    { src: '/img_flat/flat_6-19.jpg', w: 1280, h: 853 },
                    { src: '/img_flat/flat_6-20.jpg', w: 1280, h: 853 },
                    { src: '/img_flat/flat_6-21.jpg', w: 682, h: 1024 },
                    { src: '/img_flat/flat_6-22.jpg', w: 1280, h: 853 },
                    { src: '/img_flat/flat_6-23.jpg', w: 682, h: 1024 },
                    { src: '/img_flat/flat_6-24.jpg', w: 682, h: 1024 },
                    { src: '/img_flat/flat_6-25.jpg', w: 682, h: 1024 },
                    { src: '/img_flat/flat_6-26.jpg', w: 682, h: 1024 },
                    { src: '/img_flat/flat_6-27.jpg', w: 682, h: 1024 },
                    { src: '/img_flat/flat_6-28.jpg', w: 682, h: 1024 },
                    { src: '/img_flat/flat_6-29.jpg', w: 682, h: 1024 },
                    { src: '/img_flat/flat_6-30.jpg', w: 1280, h: 853 },
                    { src: '/img_flat/flat_6-31.jpg', w: 682, h: 1024 },
                    { src: '/img_flat/flat_6-32.jpg', w: 682, h: 1024 },
                    { src: '/img_flat/flat_6-33.jpg', w: 682, h: 1024 },
                    { src: '/img_flat/flat_6-34.jpg', w: 682, h: 1024 },
                    { src: '/img_flat/flat_6-1.jpg', thumbnail: '/img_flat/flat_mini-6.jpg', w: 1280, h: 853 },
                    { src: '/img_flat/flat_6-2.jpg', w: 1280, h: 853 },
                    { src: '/img_flat/flat_6-3.jpg', w: 1280, h: 853 },
                    { src: '/img_flat/flat_6-4.jpg', w: 1280, h: 853 },
                    { src: '/img_flat/flat_6-5.jpg', w: 1280, h: 853 },
                    { src: '/img_flat/flat_6-6.jpg', w: 1280, h: 853 },
                    { src: '/img_flat/flat_6-7.jpg', w: 1280, h: 853 },
                    { src: '/img_flat/flat_6-8.jpg', w: 682, h: 1024 },
                    { src: '/img_flat/flat_6-9.jpg', w: 1280, h: 853 },
                    { src: '/img_flat/flat_6-10.jpg', w: 1280, h: 853 },
                    { src: '/img_flat/flat_6-11.jpg', w: 1280, h: 853 },
                    { src: '/img_flat/flat_6-12.jpg', w: 1280, h: 853 },
                    { src: '/img_flat/flat_6-13.jpg', w: 1280, h: 853 },
                    { src: '/img_flat/flat_6-14.jpg', w: 1280, h: 853 },
                    { src: '/img_flat/flat_6-15.jpg', w: 682, h: 1024 },
                    { src: '/img_flat/flat_6-16.jpg', w: 1280, h: 853 }, 
                ],
            };
        }
    }
</script>

<style scoped>
    .photo__block {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .photo__work {
        position: relative;
        width: 49%;
        height: 390px;
        margin-top: 20px;
        background: cadetblue;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .photo__footer {
        display: flex;
        justify-content: center; 
        align-items: center;
        
        width: 100%;
        height: 46px;
        position: absolute;
        bottom: 0;
        z-index: 10;
        background-color: rgb(255, 255, 255, 0.8);
    }

    .photo__sum {
        margin-right: 10px;
        font-size: 15px;
        color: #575448;
    }

    .photo__other-works {
        text-align: center;
        margin-top: 40px;
        margin-bottom: 100px;
        padding: 40px 0;
        border: 1px dashed #CCCCCC;
    }

    .photo__link {
        font-size: 22px;
        color: #129DD8;
    }

    @media (max-width: 938px) {
        .photo__block {
            margin-top: 10px;
        }

        .photo__link {
            font-size: 18px;
        }
        
        .photo__other-works {
            margin-bottom: 50px;
        }
    }
    
    @media (max-width: 600px) {
        .photo__work {
            width: 100%;
        }
    }
</style>