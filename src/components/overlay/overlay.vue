<template>
    <anemone-transitions transition-name="fade">
        <div v-show="show" class="overlay">
            <button class="overlay__close" @click="close">&times;</button>
            <div class="overlay__content" @click.stop>
                <slot></slot>
            </div>
        </div>
    </anemone-transitions>
</template>

<script lang="ts" src="./overlay.ts"></script>
<style lang="scss" src="./overlay.scss"></style>
