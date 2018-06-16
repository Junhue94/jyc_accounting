<template>
    <form :id="id" class="form form-horizontal" autocomplete="off">
        <slot name="fields"></slot>
    </form>
</template>

<script>
    export default {
        name: 'FormPage',
        props: ['id']
    };
</script>

<style scoped lang="scss">
    .label-input {
        width: 100%;
        font-weight: normal;
    }
</style>