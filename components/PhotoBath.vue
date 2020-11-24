<template>
    <section class="photo">
        <div class="container">
            <div class="container__line-one">
                <img src="~assets/img/line-two.png" alt="">
            </div>
            <h2 class="container__title">
                Фото ремонтов
            </h2>
            <p class="container__subtitle">
                Здесь представлено несколько последних наших работ
            </p>

            <div class="photo__block">
                <div class="photo__work">
                    <client-only>
                        <vue-picture-swipe :items="work5"></vue-picture-swipe>
                        <div class="photo__footer">
                            <div class="photo__sum">16 фото</div>
                            <div><img src="~assets/img/camera.png" alt="camera" class="photo__icon-camera"></div>
                        </div>                    
                    </client-only>
                </div>
                <div class="photo__work">
                    <client-only>
                        <vue-picture-swipe :items="work2"></vue-picture-swipe>
                        <div class="photo__footer">
                            <div class="photo__sum">12 фото</div>
                            <div><img src="~assets/img/camera.png" alt="camera" class="photo__icon-camera"></div>
                        </div>                    
                    </client-only>
                </div>
                <div class="photo__work">
                    <client-only>
                        <vue-picture-swipe :items="work3"></vue-picture-swipe>
                        <div class="photo__footer">
                            <div class="photo__sum">6 фото</div>
                            <div><img src="~assets/img/camera.png" alt="camera" class="photo__icon-camera"></div>
                        </div>                    
                    </client-only>
                </div>
                <div class="photo__work">
                    <client-only>
                        <vue-picture-swipe :items="work1"></vue-picture-swipe>
                        <div class="photo__footer">
                            <div class="photo__sum">10 фото</div>
                            <div><img src="~assets/img/camera.png" alt="camera" class="photo__icon-camera"></div>
                        </div>                    
                    </client-only>
                </div>
                <div class="photo__work">
                    <client-only>
                        <vue-picture-swipe :items="work4"></vue-picture-swipe>
                        <div class="photo__footer">
                            <div class="photo__sum">12 фото</div>
                            <div><img src="~assets/img/camera.png" alt="camera" class="photo__icon-camera"></div>
                        </div>                    
                    </client-only>
                </div>
                <div class="photo__work">
                    <client-only>
                        <vue-picture-swipe :items="work6"></vue-picture-swipe>
                        <div class="photo__footer">
                            <div class="photo__sum">7 фото</div>
                            <div><img src="~assets/img/camera.png" alt="camera" class="photo__icon-camera"></div>
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
                    { src: '/img_bath/bath_1-6.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_1-7.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_1-8.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_1-9.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_1-10.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_1-1.jpg', thumbnail: '/img_bath/bath_1-1-mini.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_1-2.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_1-3.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_1-4.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_1-5.jpg', w: 1280, h: 853 },
                ],
                work2: [
                    { src: '/img_bath/bath_2-7.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_2-8.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_2-9.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_2-10.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_2-11.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_2-12.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_2-1.jpg', thumbnail: '/img_bath/mini-2.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_2-2.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_2-3.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_2-4.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_2-5.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_2-6.jpg', w: 1280, h: 853 },
                ],
                work3: [
                    { src: '/img_bath/bath_3-4.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_3-5.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_3-6.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_3-1.jpg', thumbnail: '/img_bath/mini-3.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_3-2.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_3-3.jpg', w: 1280, h: 853 },
                ],
                work4: [
                    { src: '/img_bath/bath_4-7.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_4-8.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_4-9.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_4-10.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_4-11.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_4-12.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_4-1.jpg', thumbnail: '/img_bath/mini-4.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_4-2.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_4-3.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_4-4.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_4-5.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_4-6.jpg', w: 1280, h: 853 },
                ],
                work5: [
                    { src: '/img_bath/bath_5-9.jpg',  w: 1280, h: 853 },
                    { src: '/img_bath/bath_5-10.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_5-11.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_5-12.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_5-13.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_5-14.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_5-15.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_5-16.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_5-1.jpg', thumbnail: 'img_bath/mini-5.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_5-2.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_5-3.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_5-4.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_5-5.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_5-6.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_5-7.jpg', w: 1280, h: 853 },
                    { src: '/img_bath/bath_5-8.jpg', w: 1280, h: 853 },
                ],
                work6: [
                    { src: '/img_bath/bath_6-5.jpg',  w: 1280, h: 960 },
                    { src: '/img_bath/bath_6-6.jpg', w: 1280, h: 960 },
                    { src: '/img_bath/bath_6-7.jpg', w: 1280, h: 960 },
                    { src: '/img_bath/bath_6-1.jpg', thumbnail: '/img_bath/mini-6.jpg', w: 1280, h: 960 },
                    { src: '/img_bath/bath_6-2.jpg', w: 1280, h: 960 },
                    { src: '/img_bath/bath_6-3.jpg', w: 1280, h: 960 },
                    { src: '/img_bath/bath_6-4.jpg', w: 1280, h: 960 },
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