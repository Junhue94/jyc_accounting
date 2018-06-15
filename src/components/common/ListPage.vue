<template>
    <div class="page">
        <slot name="content"></slot>
    </div>
</template>

<script>
    export default {
        name: 'ListPage'
    };
</script>

<style scoped lang="scss">
    .page {
        padding: 55px 15px 0 15px;
    }
</style>