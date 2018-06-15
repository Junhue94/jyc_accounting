<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <slot name="heading"></slot>
                </div>
                <div class="panel-body">
                    <slot name="body"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Panel'
    };
</script>

<style scoped lang="scss">
    .panel {
        margin: 0;
        
        .panel-heading {
            font-weight: bold;
        }
    }
</style>