<template>
    <div class="well pull-right">
        <slot name="button"></slot>
    </div>
</template>

<script>
    export default {
        name: 'ButtonRow'
    };
</script>

<style scoped lang="scss">
    .well {
        margin: 0;
        padding: 0 0 15px 0;
        background: transparent;
        border: none;
        box-shadow: none;
    }
</style>