<template>
    <div class="app-layout">
        <app-header></app-header>
        <app-nav></app-nav>
    </div>
</template>

<script>
    import AppHeader from './AppHeader.vue';
    import AppNav from './AppNav.vue';
    
    export default {
        name: 'AppLayout',
        components: {
            appHeader: AppHeader,
            appNav: AppNav
        }
    };
</script>

<style scoped lang="scss">

</style>