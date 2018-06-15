<template>
    <div class="app-layout">
        <app-header></app-header>
        <app-nav></app-nav>
        <app-main></app-main>
    </div>
</template>

<script>
    import AppHeader from './AppHeader.vue';
    import AppMain from './AppMain.vue';
    import AppNav from './AppNav.vue';
    
    export default {
        name: 'AppLayout',
        components: {
            appHeader: AppHeader,
            appMain: AppMain,
            appNav: AppNav
        }
    };
</script>

<style scoped lang="scss">

</style>