<template>
    <list-page>
        <template slot="content">
            <div class="row">
                <div class="col-sm-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            ACCOUNTS
                            <span class="pull-right">
                                <router-link
                                    tag="div"
                                    class="btn btn-success"
                                    :to="{ name: 'accountNew' }"
                                >Add New Account</router-link>
                            </span>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-body">
                            Panel content
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </list-page>
</template>

<script>
    import ListPage from '../common/ListPage';
    
    export default {
        name: 'AccountList',
        components: {
            listPage: ListPage
        }
    };
</script>

<style lang="scss" scoped>

</style>