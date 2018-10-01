<template>
    <aui-base class="app">
        <a href="#" @click="showAboutVueOverlay = true">About Vue</a>

        <aui-overlay :show="showAboutVueOverlay" @close="showAboutVueOverlay = false">
            <img alt="Vue logo" src="../assets/logo.png">
            <aui-hello-world msg="Welcome to Your Vue.js + TypeScript App"></aui-hello-world>
        </aui-overlay>
    </aui-base>
</template>

<script lang="ts" src="./app.ts"></script>

<style lang="scss" src="./app.scss"></style>
