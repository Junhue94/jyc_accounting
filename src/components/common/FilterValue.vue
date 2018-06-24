<template>
    <div class="row">
        <div
            v-for="filter in filters"
            class="col-sm-4"
        >
            <div class="input-group row-offset">
                <span class="input-group-addon">{{ filter.name }}</span>
                <select
                    class="filter form-control"
                    title=""
                    v-model="filter.eq"
                    @change="onFilterChange({ filter })"
                >
                    <option value="">All</option>
                    <option
                        v-for="option in filter.selection"
                        :value="option"
                    >{{ option }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FilterValue',
        props: [
            'filters',
            'onFilterChange'
        ]
    };
</script>

<style scoped lang="scss">
    .row {
        padding-bottom: 15px;
    }
</style>