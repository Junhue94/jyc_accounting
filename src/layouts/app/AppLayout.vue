<template>
    <div class="app-layout">
        <!--Layout Header-->
        <app-header></app-header>
        <!--Layout Body-->
        <div class="main-container">
            <!--Navbar-->
            <app-nav class="nav-container"></app-nav>
            
            <!--Content-->
            <transition name="slide-fade">
                <router-view class="content-container"></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import AppHeader from './AppHeader.vue';
    import AppNav from './AppNav.vue';
    
    export default {
        components: {
            appHeader: AppHeader,
            appNav: AppNav
        }
    };
</script>

<style scoped>
    /*
    * CLASS .app-layout
    */
    .app-layout {
        min-height: 100%;
        position: static;
        background: #eaeaea;
    }
    
    /*
    * CLASS .main-container
    */
    @media (min-width: 768px) {
        .app-layout > .main-container {
            min-height: 100%;
            padding-top: 40px;
        }
    }
    .app-layout > .main-container:before {
        content: " ";
        line-height: 0;
        z-index: -2;
        position: absolute;
        display: block;
        width: 100%;
        max-width: inherit;
        top: 0;
        bottom: 0;
        background-color: #eaeaea;
    }
    .app-layout > .main-container {
        position: static;
    }
    .app-layout > .main-container:before {
        position: static;
    }
    /*
    * CLASS .nav-container
    */
    .app-layout > .main-container > .nav-container:before {
        content: " ";
        position: fixed;
        display: block;
        top: 0;
        bottom: 0;
        width: inherit;
        background-color: #34323a;
    }
    .app-layout > .main-container > .nav-container {
        position: static;
        bottom: 0;
        float: left;
        display: none;
        width: 220px;
        border: 0 solid #1b1a1f;
        border-right-width: 1px;
        background-color: #34323a;
    }
    @media (min-width:768px) {
        .app-layout > .main-container > .nav-container {
            display: block;
            top: 40px;
        }
    }
    
    /*
    * CLASS .content-container
    */
    .app-layout > .main-container .content-container {
        overflow: hidden;
        min-height: 100%;
        margin-left: 0;
        background-color: #eaeaea;
    }

    /*
    * TRANSITION CLASS
    */
    .slide-fade-enter-active {
        transition: all 0.6s ease;
    }
    .slide-fade-enter {
        transform: translateZ(10px);
        opacity: 0;
    }
</style>