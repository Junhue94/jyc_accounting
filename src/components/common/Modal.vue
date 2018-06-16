<template>
    <div
        class="modal fade"
        role="dialog"
        :id="id"
    >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">
                        <slot name="header"></slot>
                    </h4>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        props: ['id']
    };
</script>

<style scoped lang="scss">

</style>