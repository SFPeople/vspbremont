<template>
    <section class="price background">
        <div class="container">
            <div class="container__line-one">
                <img src="/img/line-one.png" alt="">
            </div>
            <h2 class="container__title" id="our-price">
                Примерная стоимость
            </h2>
            <p class="container__subtitle">
                Рассчитайте стоимость ванной, туалета или совмещенного санузла
            </p>

            <div class="price__block"> 
                <!-- левый блок -->
                <div class="price__block-left" @change="sumResult">
                    <div class="price__block-left-1">
                        <p class="price__form-title">Помещение</p>
                        <select class="price__form-option" v-model="typeRoom">
                            <option class="price__option">Туалет</option>
                            <option class="price__option">Ванная</option>
                            <option class="price__option">Совмещенный с/у</option>
                        </select>
                    </div>
                    <div class="price__block-left-2" >
                        <p class="price__form-title">Тип ремонта</p>
                        <select class="price__form-option" v-model="typeRepair">
                            <option class="price__option">Эконом</option>
                            <option class="price__option">Капитальный</option>
                            <option class="price__option">Дизайнерский</option>
                        </select>
                    </div>
                    <div class="price__block-left-3">
                        <p class="price__form-title">Тип дома</p>
                        <select class="price__form-option" v-model="typeHome">
                            <option class="price__option">Новостройка</option>
                            <option class="price__option">Вторичка</option>
                            <option class="price__option">Старый фонд</option>
                        </select>
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
                    <button class="price__btn btn" @click="form = !form">Вызвать на бесплатный замер</button>
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
                result: 32000,
                typeRoom: 'Ванная',
                typeRepair: "Эконом",
                typeHome: "Новостройка",
                form: false,
            }
        },
        methods: {
            sumResult() {
                let counter = 0;
                
                if (this.typeRoom == "Туалет" && this.typeRepair == "Эконом" &&  this.typeHome == "Новостройка") {
                    counter = 14000;
                } else if (this.typeRoom == "Туалет" && this.typeRepair == "Капитальный" &&  this.typeHome == "Новостройка") {
                    counter = 24000;
                } else if (this.typeRoom == "Туалет" && this.typeRepair == "Дизайнерский" &&  this.typeHome == "Новостройка") {
                    counter = 37000;
                } else if (this.typeRoom == "Туалет" && this.typeRepair == "Эконом" &&  this.typeHome == "Вторичка") {
                    counter = 16000;
                } else if (this.typeRoom == "Туалет" && this.typeRepair == "Капитальный" &&  this.typeHome == "Вторичка") {
                    counter = 26000;
                } else if (this.typeRoom == "Туалет" && this.typeRepair == "Дизайнерский" &&  this.typeHome == "Вторичка") {
                    counter = 39000;
                } else if (this.typeRoom == "Туалет" && this.typeRepair == "Эконом" &&  this.typeHome == "Старый фонд") {
                    counter = 18000;
                } else if (this.typeRoom == "Туалет" && this.typeRepair == "Капитальный" &&  this.typeHome == "Старый фонд") {
                    counter = 28000;
                } else if (this.typeRoom == "Туалет" && this.typeRepair == "Дизайнерский" &&  this.typeHome == "Старый фонд") {
                    counter = 41000;
                } else if (this.typeRoom == "Ванная" && this.typeRepair == "Эконом" &&  this.typeHome == "Новостройка") {
                    counter = 32000;
                } else if (this.typeRoom == "Ванная" && this.typeRepair == "Капитальный" &&  this.typeHome == "Новостройка") {
                    counter = 52000;
                } else if (this.typeRoom == "Ванная" && this.typeRepair == "Дизайнерский" &&  this.typeHome == "Новостройка") {
                    counter = 72000;
                } else if (this.typeRoom == "Ванная" && this.typeRepair == "Эконом" &&  this.typeHome == "Вторичка") {
                    counter = 33000;
                } else if (this.typeRoom == "Ванная" && this.typeRepair == "Капитальный" &&  this.typeHome == "Вторичка") {
                    counter = 54000;
                } else if (this.typeRoom == "Ванная" && this.typeRepair == "Дизайнерский" &&  this.typeHome == "Вторичка") {
                    counter = 78000;
                } else if (this.typeRoom == "Ванная" && this.typeRepair == "Эконом" &&  this.typeHome == "Старый фонд") {
                    counter = 38000;
                } else if (this.typeRoom == "Ванная" && this.typeRepair == "Капитальный" &&  this.typeHome == "Старый фонд") {
                    counter = 58000;
                } else if (this.typeRoom == "Ванная" && this.typeRepair == "Дизайнерский" &&  this.typeHome == "Старый фонд") {
                    counter = 86000;
                } else if (this.typeRoom == "Совмещенный с/у" && this.typeRepair == "Эконом" &&  this.typeHome == "Новостройка") {
                    counter = 38000;
                } else if (this.typeRoom == "Совмещенный с/у" && this.typeRepair == "Капитальный" &&  this.typeHome == "Новостройка") {
                    counter = 64000;
                } else if (this.typeRoom == "Совмещенный с/у" && this.typeRepair == "Дизайнерский" &&  this.typeHome == "Новостройка") {
                    counter = 88000;
                } else if (this.typeRoom == "Совмещенный с/у" && this.typeRepair == "Эконом" &&  this.typeHome == "Вторичка") {
                    counter = 42000;
                } else if (this.typeRoom == "Совмещенный с/у" && this.typeRepair == "Капитальный" &&  this.typeHome == "Вторичка") {
                    counter = 68000;
                } else if (this.typeRoom == "Совмещенный с/у" && this.typeRepair == "Дизайнерский" &&  this.typeHome == "Вторичка") {
                    counter = 92000;
                } else if (this.typeRoom == "Совмещенный с/у" && this.typeRepair == "Эконом" &&  this.typeHome == "Старый фонд") {
                    counter = 46000;
                } else if (this.typeRoom == "Совмещенный с/у" && this.typeRepair == "Капитальный" &&  this.typeHome == "Старый фонд") {
                    counter = 76000;
                } else if (this.typeRoom == "Совмещенный с/у" && this.typeRepair == "Дизайнерский" &&  this.typeHome == "Старый фонд") {
                    counter = 98000;
                }
                
                return this.result = counter;
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

    .price__block-left-1, .price__block-left-2, .price__block-left-3 {
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
    
    .price__form-option {
        height: 50px;
        border: 1px solid #CCCCCC;
        border-radius: 4px;
        padding-left: 10px;
        background-color: #ffffff;
        font-size: 16px;
        color: #575448;
    }

    .price__form-option {
        width: calc(100% - 156px);
    }

    .price__option {
        font-size: 16px;
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

        .price__form-option {
            width: 100%;
        }

        .price__form-option {
            margin-bottom: 18px;
        }

        .price__form-option {
            margin-top: 10px;
        }
    } 
</style>