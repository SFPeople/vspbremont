<template>
    <section class="price background">
        <div class="container">
            <div class="container__line-one">
                <img src="~assets/img/line-one.png" alt="">
            </div>
            <h2 class="container__title" id="our-price">
                Калькулятор ремонта
            </h2>
            <p class="container__subtitle">
                Рассчитайте стоимость вашего ремонта прямо сейчас
            </p>

            <div class="price__block"> 
                <!-- левый блок -->
                <div class="price__block-left" @change="sumResult">
                    <div class="price__block-left-1" >
                        <p class="price__form-title">Тип ремонта</p>
                        <select class="price__form-option" v-model="typeRepair">
                            <option class="price__option">Эконом</option>
                            <option class="price__option">Капитальный</option>
                            <option class="price__option">Дизайнерский</option>
                        </select>
                    </div>
                    <div class="price__block-left-2">
                        <p class="price__form-title">Тип дома</p>
                        <select class="price__form-option" v-model="typeHome">
                            <option class="price__option">Новостройка</option>
                            <option class="price__option">Вторичка</option>
                            <option class="price__option">Старый фонд</option>
                        </select>
                    </div>
                    <div class="price__block-left-3">
                        <p class="price__form-title">Площадь</p>
                        <div class="price__form-checkbox">
                            <div>
                                <input class="price__space" type="number" v-model="space">
                            </div>
                            <div class="price__checkbox-do">
                                <div class="price__cy">
                                    С/У
                                </div>
                                <input class="price__checkbox" type="checkbox" @change="cheackbox = !cheackbox" >
                            </div>
                        </div>
                    </div>
                </div>

                <!-- правый блок -->
                <div class="price__block-right">
                    <div class="price__result center-align">
                        <p class="price__title">Стоимость ремонта</p>
                        <p class="price__num"><span class="price__num-bold">{{ result }}</span> руб.</p>
                    </div>
                    <div class="price__note center-align">
                        <p>Стоимость <span class="price__note-bold">без учет материалов!</span></p>
                        <p>Для точного расчета вызовите мастера на замер.</p>
                    </div>
                    <button class="price__btn btn" @click="form = !form">Заказать расчет с материалами</button>
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
                result: 0,
                typeRepair: "Эконом",
                typeHome: "Новостройка",
                space: null,
                cheackbox: false,
                form: false
            }
        },
        methods: {
            sumResult() {
                let counter = 0;
                let bathroom = 0;

                if (this.typeRepair == "Эконом" &&  this.typeHome == "Новостройка") {
                    counter = 2800;
                    bathroom = 25324;
                } else if (this.typeRepair == "Эконом" &&  this.typeHome == "Вторичка") {
                    counter = 3360;
                    bathroom = 30389;
                } else if (this.typeRepair == "Эконом" &&  this.typeHome == "Старый фонд") {
                    counter = 7650;
                    bathroom = 43051;
                } else if (this.typeRepair == "Капитальный" &&  this.typeHome == "Новостройка") {
                    counter = 4500;
                    bathroom = 65218;
                } else if (this.typeRepair == "Капитальный" &&  this.typeHome == "Вторичка") {
                    counter = 5400;
                    bathroom = 78261;
                } else if (this.typeRepair == "Капитальный" &&  this.typeHome == "Старый фонд") {
                    counter = 7650;
                    bathroom = 110870;
                } else if (this.typeRepair == "Дизайнерский" &&  this.typeHome == "Новостройка") {
                    counter = 7000;
                    bathroom = 79026;
                } else if (this.typeRepair == "Дизайнерский" &&  this.typeHome == "Вторичка") {
                    counter = 8400;
                    bathroom = 94830;
                } else if (this.typeRepair == "Дизайнерский" &&  this.typeHome == "Старый фонд") {
                    counter = 11900;
                    bathroom = 134343;
                }
                
                if (this.cheackbox) {
                    return this.result = counter * this.space + bathroom;
                }

                return this.result = counter * this.space;
            }
        }
    }
</script>

<style scoped>
    .price__block {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 50px;
        padding-bottom: 100px;
    }

    .price__block-left, .price__block-right {
        width: 49%;
    }

    .price__block-left-1, .price__block-left-2, .price__block-left-3, .price__form-checkbox, .price__checkbox-do {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

   
    /* Левый блок */
    .price__block-left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 186px;
    }
    
    .price__form-title {
        text-transform: uppercase;
    }
    
    .price__form-option,  .price__space {
        height: 50px;
        border: 1px solid #CCCCCC;
        border-radius: 4px;
        padding-left: 10px;
        background-color: #ffffff;
        font-size: 16px;
        color: #575448;
    }

    .price__form-option, .price__form-checkbox {
        width: calc(100% - 156px);
    }

    .price__space {
        width: 100px;
    }

    .price__option {
        font-size: 16px;
    }

    .price__cy {
        margin-right: 20px;
    }

    .price__checkbox {
        width: 22px;
        height: 22px;
    }


    /* Правый блок */
    .price__block-right {
        text-align: center;
        color: #fff;
    }
    
    .price__result {
        width: 100%;
        height: 186px;
        border-radius: 4px;
        background: #1E333F;
        text-transform: uppercase;
    }

    .price__title {
        font-size: 16px;
    }

    .price__num {
        font-size: 22px;
    }

    .price__num-bold {
        font-size: 36px;
        font-weight: 700;
    }

    .price__note {
        height: 90px;
        color: #000000;

    }

    .price__note-bold {
        font-weight: 700;
    }

    .price__btn {
        width: 100%;
        height: 70px;
    }
    
    @media (max-width: 938px) {
        .price__block {
            margin-top: 30px;
            padding-bottom: 50px;
        }
    }


    @media (max-width: 767px) {
        .price__block-left, .price__block-right {
            width: 100%;
        }

        .price__block-right {
            margin-top: 30px;
        } 
    }

    @media (max-width: 420px) {
        .price__block {
            margin-top: 20px;
        }
        
        .price__block-left-1, .price__block-left-2, .price__block-left-3 {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .price__block-left {
            height: auto;
        }

        .price__form-option, .price__form-checkbox {
            width: 100%;
        }

        .price__form-option {
            margin-bottom: 18px;
        }

        .price__form-option, .price__space {
            margin-top: 10px;
        }
    } 
</style>