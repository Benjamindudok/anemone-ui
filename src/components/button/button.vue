<template>
    <router-link :class="buttonClasses" v-if="href" :to="href">
        <slot></slot>
    </router-link>
    <button :class="buttonClasses" v-else>
        <slot></slot>
    </button>
</template>

<script lang="ts" src="./button.ts"></script>
<style lang="scss" src="./button.scss"></style>
