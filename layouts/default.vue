<template>
    <div>
        <Navbar />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
    export default {
        head () {
            return {
                link: [
                    { rel: 'canonical', href: `https://remont-vspb.ru${this.$route.path}` }
                ]
            }
        }
    }
</script>
