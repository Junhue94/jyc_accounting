<template>
    <div class="table-responsive">
        <table class="table table-bordered">
            <thead>
            <slot name="thead"></slot>
            </thead>
            <tbody>
            <slot name="tbody"></slot>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'ListTable'
    };
</script>

<style scoped lang="scss">
    table.table.table-bordered {
        margin: 0;
        
        thead {
            tr {
                th {
                    text-align: center;
                    vertical-align: middle;
                    font-size: 12px;
                }
            }
        }
        
        tbody {
            tr {
                cursor: pointer;
                
                td {
                    text-align: center;
                    vertical-align: middle;
                    font-size: 12px;
                }
            }
        }
    }
</style>