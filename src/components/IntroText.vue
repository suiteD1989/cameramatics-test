<template>
    <v-row>
        <v-col :col="12">
            <h1>{{ this.introText }}</h1>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'IntroText',
    data() {
        return {
            introText: 'Parsed binary GPS data visualised on Google Maps'
        }
    }
}
</script>

<style lang="scss" scoped>
    h1 {
        text-align: center;
    }
</style>