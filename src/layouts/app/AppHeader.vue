<template>
    <!--Start Section-->
    <section class="header-container">
        <!--Start Header-->
        <header class="top-header clearfix">
            <router-link tag="div" class="logo" :to="{ name: 'index' }">
                <a href="#">JYC</a>
            </router-link>
    
            <!--Menu toggle for mid-sized screen-->
            <div class="menu-button">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </div>
            
            <!--Start Top Nav-->
            <div class="top-nav">
                <ul class="nav-left">
                    <li>
                        <a href="#"
                           class="toggle-min"
                           data-toggle-nav-collapsed-min
                        >
                            <i class="fa fa-bars"></i>
                        </a>
                    </li>
                </ul>
            </div><!--End Top Nav-->
        </header><!--End Header-->
    </section><!--End Section-->
</template>

<style scoped>
    /*
    * CLASS .header-container
    */
    .header-container {
        background-color: #fff;
        left: 0;
        position: fixed;
        right: 0;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
        z-index: 1000;
    }

    /*
    * LOCAL for TAG <a>
    */
    .header-container > .top-header a {
        color: black;
        text-decoration: none;
    }

    /*
    * CLASS .logo
    */
    .header-container > .top-header > .logo {
        position: absolute;
        width: 100%;
        height: 40px;
        background-color: #248aaf;
        color: #fafafa;
        line-height: 40px;
        text-align: center;
    }
    @media (min-width: 768px) {
        .header-container > .top-header > .logo {
            display: inline-block;
            width: 220px;
        }
    }
    .header-container > .top-header .logo > a {
        font-size: 18px;
        vertical-align: middle;
        color: #fafafa;
        text-decoration: none;
    }
    
    /*
    * CLASS .menu-button
    */
    .header-container > .top-header > .menu-button {
        display: block;
        position: absolute;
        top: 2px;
        right: 20px;
        width: 46px;
        padding: 10px 12px;
        border-radius: 4px;
    }
    .header-container > .top-header > .menu-button:hover {
        cursor: pointer;
        background-color: #1b6985;
    }
    .header-container > .top-header > .menu-button .icon-bar {
        display: block;
        width: 22px;
        height: 2px;
        border-radius: 1px;
        background-color: #fff;
    }
    .header-container > .top-header > .menu-button .icon-bar + .icon-bar {
        margin-top: 4px;
    }
    @media (min-width: 768px) {
        .header-container > .top-header > .menu-button {
            display: none;
        }
    }

    /*
    * CLASS .top-nav
    */
    .header-container > .top-header > .top-nav {
        width: 100%;
        height: 40px;
        padding: 40px 0;
    }
    @media (min-width:768px) {
        .header-container > .top-header > .top-nav {
            padding: 0 0 0 220px;
        }
    }
    .header-container > .top-header > .top-nav > ul {
        margin: 0;
        list-style: none;
        font-size: 14px;
    }
    .header-container > .top-header > .top-nav > ul > li {
        float: left;
    }
    .header-container > .top-header > .top-nav > ul > li > a {
        position: relative;
        display: block;
        height: 40px;
        padding: 9px 16px;
    }
    .header-container > .top-header > .top-nav > ul > li > a:hover {
        text-decoration: none;
    }
    .header-container>.top-header > .top-nav > ul > li ul.dropdown-menu a:hover {
        background-color: #248aaf;
        color: #ffffff;
    }
    .header-container > .top-header > .top-nav > ul > li > a.toggle-min {
        display: none;
    }
    @media (min-width:768px) {
        .header-container > .top-header > .top-nav > ul > li > a.toggle-min {
            display: block;
        }
    }
    
    /*
    * CLASS .nav-left
    */
    .header-container > .top-header > .top-nav > .nav-left {
        float: left;
        padding: 0;
    }
    .header-container > .top-header > .top-nav > .nav-left > li {
        border-right: 1px solid #e9e9e9;
    }
    
    /*
    * CLASS .nav-right
    */
    .header-container > .top-header > .top-nav > .nav-right > li > a {
        text-align: center;
        border-left: 1px solid #e9e9e9;
    }
    .header-container > .top-header > .top-nav > .nav-right > li > ul.dropdown-menu {
        right: 10px;
    }
    
    /*
    * CLASS .nav-right
    */
    .header-spinner {
        border-left: 1px solid #e9e9e9;
        padding: 4px 10px 4px 10px;
    }
</style>