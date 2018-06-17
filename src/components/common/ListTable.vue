<template>
    <div>
        <div class="table-responsive">
            <table class="table table-bordered table-striped">
                <thead>
                <tr>
                    <th
                        v-for="header in headerList"
                        @click="findList({ sortField: header.field, sortSeq: setSortSeq(header.field) })"
                    >{{ header.name }}
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="data in dataList"
                    @click="dataListClick(data._id)"
                >
                    <td
                        v-for="header in headerList"
                    >{{ dataFilter(header.filter, data[header.field]) }}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    
        <div class="row paginate">
            <div class="col-sm-4">
                <div class="input-group row-offset">
                    <span class="input-group-addon">Rows</span>
                    <select
                        class="form-control"
                        title="rowOffset"
                        v-model="paginationDetails.offset"
                    >
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="0">All</option>
                    </select>
                </div>
            </div>
            <div class="col-sm-8">
                <nav class="pull-right">
                    <ul class="pagination">
                        <li class="active">
                            <a><span>&laquo;</span></a>
                        </li>
                        <li class="disabled">
                            <a><span>&nbsp;&lsaquo;</span></a>
                        </li>
                        <li v-for="page in paginationDetails.totalPage">
                            <a>{{ page }}</a>
                        </li>
                        <li>
                            <a><span>&rsaquo;&nbsp;</span></a>
                        </li>
                        <li>
                            <a><span>&raquo;</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    
    export default {
        name: 'ListTable',
        props: [
            'headerList',
            'dataList',
            'dataListClick',
            'findList',
            'paginationDetails'
        ],
        data() {
            return {
                sortField: null,
                sortSeq: null
            };
        },
        watch: {
            // watch page offset to fetch data from API
            'paginationDetails.offset'(newValue, oldValue) {
                if (parseInt(newValue) !== parseInt(oldValue)) {
                    // set to first page when offset changes
                    this.findList({ offset: parseInt(newValue), currentPage: 1 });
                }
            }
        },
        methods: {
            dataFilter(filter, value) {
                if (filter) {
                    return Vue.filter(filter)(value);
                }
                return value;
            },
            setSortSeq(sortField) {
                if (this.sortField === sortField) {
                    switch(this.sortSeq) {
                    case 'asc':
                        this.sortSeq = 'desc';
                        break;
                    case 'desc':
                        this.sortSeq = 'asc';
                        break;
                    default:
                        this.sortSeq = 'asc';
                    }
                }
                else {
                    this.sortField = sortField;
                    this.sortSeq = 'asc';
                }
                return this.sortSeq;
            }
        }
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
                    cursor: pointer;
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
    
    .paginate {
        .row-offset {
            margin-top: 30px;
        }
        
        nav {
            ul.pagination {
                margin: 30px 0 0 0;
                
                li {
                    cursor: pointer;
                }
            }
        }
    }
</style>