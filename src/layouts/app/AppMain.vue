<template>
    <div class="app-main">
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'AppMain'
    };
</script>

<style scoped lang="scss">
    .app-main {
        margin-left: 200px;
    }
    
    // Transition Class
    .slide-fade-enter-active {
        transition: all 0.6s ease;
    }
    .slide-fade-enter {
        transform: translateZ(10px);
        opacity: 0;
    }
</style>