<template>
    <anemone-base class="app">
        <a href="#" @click="showAboutVueOverlay = true">About Vue</a>

        <anemone-overlay :show="showAboutVueOverlay" @close="showAboutVueOverlay = false">
            <img alt="Vue logo" src="../assets/logo.png">
            <anemone-hello-world msg="Welcome to Your Vue.js + TypeScript App"></anemone-hello-world>
        </anemone-overlay>
    </anemone-base>
</template>

<script lang="ts" src="./app.ts"></script>

<style lang="scss" src="./app.scss"></style>
