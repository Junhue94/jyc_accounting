<template>
    <section class="app-header">
        <div>Header</div>
    </section>
</template>

<script>
    export default {
        name: 'AppHeader'
    };
</script>

<style scoped lang="scss">
    @import "../../styles/variables";
    
    .app-header {
        height: 40px;
        width: 100%;
        margin-left: 200px;
        display: grid;
        position: fixed;
        background-color: $white-default;
        box-shadow: 0 2px #bfbfbf;
    
        @media screen and (max-width: 768px) {
        
        }
    
        @media screen and (max-width: 480px) {
            margin-left: 0;
        }
    }
</style>