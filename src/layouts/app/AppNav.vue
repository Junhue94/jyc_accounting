<template>
    <!--Start Nav Wrapper-->
    <div class="nav-wrapper">
        <!--Start Nav List-->
        <ul class="nav">
            <router-link tag="li" :to="{ name: 'contactList' }">
                <a href="#">
                    <i class="fa fa-phone"></i>
                    <span>Contacts</span>
                </a>
            </router-link>
            <li data-toggle="modal" data-target="#logout">
                <a>
                    <i class="fa fa-sign-out"></i>
                    <span>Logout</span>
                </a>
            </li>
        </ul><!--End Nav List-->
    
        <!--Modal - Logout-->
        <div class="modal fade" id="logout" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Confirm Logout?</h4>
                    </div>
                    <div class="modal-footer">
                        <button type="button"
                                class="btn btn-success"
                                data-dismiss="modal"
                                @click="logout"
                        >Yes</button>
                        <button type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                        >No</button>
                    </div>
                </div>
            </div>
        </div><!--End Modal - Logout-->
    </div><!--End Nav Wrapper-->
</template>

<script>
    export default {
        methods: {
            // Logout
            logout() {
                // Remove credentials from localStorage
                localStorage.removeItem('credentials');
                // Redirect page
                this.$router.push({
                    name: 'login'
                });
            }
        }
    };
</script>

<style scoped>
    /*
    * CLASS .nav-wrapper
    */
    .nav-wrapper {
        height: 100%;
        position: relative;
        width: 100%;
    }
    .nav-wrapper ul {
        list-style: none;
        padding: 0;
    }

    /*
    * CLASS .nav
    */
    .nav {
        margin: 0;
        padding: 0;
    }
    .nav a {
        position: relative;
        display: block;
        padding: 15px;
        font-size: 13px;
        color: #999999;
        transition: all .2s ease-in-out;
    }
    .nav a:hover {
        text-decoration: none;
    }
    .nav > li {
        position: relative;
        cursor: pointer;
        margin: 0;
        padding: 0;
        text-align: left;
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        transition: all .2s ease-in-out;
    }
    .nav > li:hover > a {
        background-color: #28262c;
        color: #248aaf;
    }
    .nav > li.active > a {
        background-color: #28262c;
        color: #fafafa;
    }
    .nav > li > a:focus,
    .nav > li > a[aria-expanded=true] {
        color: #fff;
        background-color: #28262C;
    }
    .nav > li > a > i {
        display: inline-block;
        margin-right: 10px;
        width: 20px;
        text-align: center;
        font-size: 16px;
    }
    .nav > li > a > i.fa-angle-right {
        margin: 0;
        text-align: right;
    }
    .nav > li > ul[aria-expanded=true], ul[aria-expanded=false] {
        background-color: #28262C;
    }
    .nav > li > ul > li > a {
        position: relative;
        display: block;
        padding: 13px 0 13px 25px;
    }
    .nav > li > ul > li > a:focus {
        color: white;
        border-left: 2px solid #248aaf;
        text-decoration: none;
    }
</style>