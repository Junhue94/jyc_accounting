<template>
    <div class="app-nav">
        <div class="app-nav-user">
            <img class="user-img" src="../../assets/straw_hat_icon.png" alt="User Avatar"/>
            <p class="user-text">Username</p>
        </div>
        <ul class="nav">
            <router-link tag="li" :to="{ name: 'accountList' }">
                <i class="fa fa-book"></i>
                <span>Accounts</span>
            </router-link>
            <router-link tag="li" :to="{ name: 'contactList' }">
                <i class="fa fa-phone"></i>
                <span>Contacts</span>
            </router-link>
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
    
    .app-nav{
        width: 200px;
        min-height: 100vh;
        padding-top: 25px;
        background: #34323a;
        
        .app-nav-user {
            border-bottom: 1px solid #413f48;
            
            .user-img {
                width: 90px;
                height: 90px;
                display: block;
                margin: 0 auto;
                border-radius: 50%;
            }
            
            .user-text {
                margin: 0;
                padding: 10px 0;
                text-align: center;
                color: $light-gray-default;
            }
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
                
                span {
                    margin-left: 10px;
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
            }
        }
    
        @media screen and (max-width: 768px) {
        
        }
    
        @media screen and (max-width: 480px) {
            display: none;
        }
    }
</style>