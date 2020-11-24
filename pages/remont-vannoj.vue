<template>
    <main>
        <ServiceBath />
        <PriceBath />
        <Videobath />
        <Scheme />
        <PhotoBath />        
        <!-- <Questions /> -->
        <Masters />
        <Contract />
    </main>
</template>

<script>
    export default {
        head() {
            return {
                title: "Тестовый тайтл",
                meta: [
                    {
                        hid: "description",
                        name: "description",
                        content: "тестовый дескрипшен"
                    }
                ]
            }
        }
    }
</script>