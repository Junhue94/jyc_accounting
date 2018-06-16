<template>
    <div class="app-nav">
        <ul class="nav">
            <li class="user">
                <img class="user-img" src="../../assets/straw_hat_icon.png" alt="User Avatar"/>
                <p class="user-text">Username</p>
            </li>
            <router-link tag="li" :to="{ name: 'accountList' }">
                <i class="fa fa-book"></i>
                <span>Accounts</span>
            </router-link>
            <router-link tag="li" :to="{ name: 'stockList' }">
                <i class="fa fa-building-o"></i>
                <span>Stocks</span>
            </router-link>
            <li data-toggle="modal" data-target="#logout">
                <i class="fa fa-cog"></i>
                <span>Settings</span>
            </li>
            <li data-toggle="modal" data-target="#logout">
                <i class="fa fa-sign-out"></i>
                <span>Logout</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'AppNav'
    };
</script>

<style scoped lang="scss">
    @import "../../styles/variables";
    
    .app-nav {
        width: 200px;
        min-height: 100vh;
        background: #34323a;
        float: left;
        
        &::before {
            content: "";
            position: fixed;
            display: block;
            top: 0;
            bottom: 0;
            width: inherit;
            background-color: #34323a;
        }
        
        .nav {
            li {
                padding: 12px 18px;
                color: $light-gray-default;
                position: relative;
                cursor: pointer;
                text-align: left;
                border-bottom: 1px solid #413f48;
                transition: all 0.2s ease-in-out;
    
                &.user {
                    padding: 20px 18px;
                    border-bottom: 1px solid #413f48;
                    cursor: auto;
        
                    .user-img {
                        width: 90px;
                        height: 90px;
                        display: block;
                        margin: 0 auto;
                        border-radius: 50%;
                        border: 2px solid $white-default;
                    }
        
                    .user-text {
                        margin: 0;
                        padding-top: 10px;
                        text-align: center;
                        color: $light-gray-default;
                    }
    
                    &:hover {
                        background-color: #34323a;
                    }
                }
                
                &.router-link-active {
                    background-color: $black-default;
                    border-left: 3px solid $green-default;
                    color: $white-default;
                }
                
                &:hover {
                    background-color: $black-default;
                    color: $white-default;
                }
                
                span {
                    margin-left: 10px;
                }
            }
        }
    }
</style>