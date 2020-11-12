<template>
    <form class="form" method="POST">
        <input type="text" class="form__name" required placeholder="Ваше имя">
        <input type="number" class="form__number" required placeholder="Ваш телефон">
        <button type="submit" class="form__submit">Оставить заявку</button>
    </form>
</template>


<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form__name, .form__number,.form__submit {
        width: 300px;
        height: 50px;
        margin-top: 20px;
    }

    .form__name, .form__number {
        font-size: 18px;
        padding-left: 10px;
    }

    .form__submit {
        background: #129DD8;
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 700;
        text-align: center;
        border: none;
    }

    @media (max-width: 320px) {
        .form__name, .form__number,.form__submit {
            width: 200px;
        }
    }
</style>