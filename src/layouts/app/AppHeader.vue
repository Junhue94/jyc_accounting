<template>
    <section class="app-header">
        <ul class="nav">
            <li>
                <a>
                    <i class="fa fa-bars"></i>
                </a>
            </li>
        </ul>
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
        box-shadow: 0 2px #d3d3d3;
        z-index: 1;
        
        .nav {
            display: inline-flex;
            
            li {
                border-right: 1px solid #e9e9e9;
                
                a {
                    cursor: pointer;
                }
            }
        }
    }
</style>