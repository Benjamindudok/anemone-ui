<template>
    <a :class="badgeClasses" :href="href" v-if="href">
        <slot></slot>
    </a>
    <span :class="badgeClasses" v-else>
        <slot></slot>
    </span>
</template>

<script lang="ts" src="./badge.ts"></script>
<style lang="scss" src="./badge.scss"></style>
