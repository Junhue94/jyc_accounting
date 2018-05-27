<template>
    <div>
        <!--Start Container-->
        <div class="container">
            <!--Start Form-->
            <form class="form-login" role="form">
                <h2 class="form-login-logo">
                    <img src="../assets/logo.png">
                </h2>
                
                <div class="form-login-section">
                    <input type="text"
                           class="form-control no-bottom-br margin-adjustment"
                           placeholder="Server Public Key"
                           autofocus
                           v-model="credentials.serverkey"
                    >
                    <input type="password"
                           class="form-control no-top-br"
                           placeholder="Server Secret Key"
                           v-model="credentials.serverpass"
                    >
                </div>
                
                <div class="form-login-section">
                    <input type="text"
                           class="form-control no-bottom-br margin-adjustment"
                           placeholder="Database Name"
                           v-model="credentials.database"
                    >
                    <input type="text"
                           class="form-control no-bottom-br no-top-br"
                           placeholder="Username"
                           v-model="credentials.username"
                    >
                    <input type="password"
                           class="form-control no-top-br"
                           placeholder="Password"
                           v-model="credentials.password"
                    >
                </div>
                
                <div class="form-login-section">
                    <button class="btn btn-lg btn-primary btn-block"
                            type="button"
                            @click="login"
                    >Login</button>
                </div>
            
                <div class="alert alert-warning">
                    <b>Confidential Information!</b>
                    <p>Please only login on computers that you absolutely trust.</p>
                </div>
    
                <transition name="slide-fade">
                    <div v-if="invalidLogin" class="alert alert-danger invalid">Invalid login details!</div>
                </transition>
            </form><!--End Form-->
        </div><!--End Container-->
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    
    export default {
        methods: {
            ...mapActions('auth', {
                create: 'login',
                invalidLogin: 'invalidLogin'
            }),
            // User Authentication
            login() {
                this.create(this.credentials)
                    .then((res) => {
                        return this.$router.push({
                            name: 'patient'
                        });
                    })
                    .catch((err) => {
                        this.invalidLogin();
                    });
            }
        },
        computed: {
            ...mapGetters('auth', {
                fetchCredentials: 'credentials',
                fetchInvalidLogin: 'invalidLogin'
            }),
            credentials() {
                return this.fetchCredentials;
            },
            invalidLogin() {
                return this.fetchInvalidLogin;
            }
        }
    };
</script>

<style scoped>
    /*
    * CLASS .form-login
    */
    .form-login {
        max-width: 500px;
        padding: 15px;
        margin: 20px auto;
    }
    
    /*
    * TAG img
    */
    .form-login > .form-login-logo > img {
        margin: 0 auto;
        display: block;
        width: 80px;
    }
    
    /*
    * CLASS .form-login-section
    */
    .form-login .form-login-section {
        margin-bottom: 15px;
    }

    /*
    * CLASS .form-control
    */
    .form-login .form-control {
        position: relative;
        font-size: 16px;
        height: auto;
        padding: 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    
    .form-login .form-control:focus {
        z-index: 2;
    }

    .form-login .form-control.no-top-br {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .form-login .form-control.no-bottom-br {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .form-login .form-control.no-bottom-br.no-top-br {
        margin-bottom: -2px;
    }

    .form-login .form-control.margin-adjustment {
        margin-bottom: -1px;
    }

    /*
    * CLASS .alert
    */
    .form-login .alert,
    .form-login .alert b,
    .form-login .alert p {
        text-align: center;
    }
    
    /*
    * CLASS .loggingin .invalid
    */
    .form-login .loggingin,
    .form-login .invalid {
        font-weight: bold;
    }
    
    /*
    * TRANSITION CLASS
    */
    .slide-fade-enter-active {
        transition: all .5s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(30px);
        opacity: 0;
    }
</style>