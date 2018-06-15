<template>
    <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
            <slot name="thead"></slot>
            </thead>
            <tbody>
            <slot name="tbody"></slot>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'ListTable'
    };
</script>

<style scoped lang="scss">
    table {
        margin: 0;
    }
</style>