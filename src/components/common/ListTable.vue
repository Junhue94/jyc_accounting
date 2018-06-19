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
                    @click="onDataListClick(data._id)"
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
                        v-model="queryParams.offset"
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
                        <li
                            :class="{ active: isFirstPage }"
                            @click="changePage(1)"
                        ><a><span>&laquo;</span></a>
                        </li>
                        <li
                            :class="{ disabled: isFirstPage }"
                            @click="changePage('previous')"
                        ><a><span>&nbsp;&lsaquo;</span></a>
                        </li>
                        <li
                            v-for="page in pageRange"
                            :class="{ active: page === queryParams.currentPage }"
                            @click="changePage(page)"
                        ><a>{{ page }}</a>
                        </li>
                        <li
                            :class="{ disabled: isLastPage }"
                            @click="changePage('next')"
                        ><a><span>&rsaquo;&nbsp;</span></a>
                        </li>
                        <li
                            :class="{ active: isLastPage }"
                            @click="changePage(queryParams.totalPage)"
                        ><a><span>&raquo;</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import _ from 'lodash';
    
    export default {
        name: 'ListTable',
        props: [
            'headerList',
            'dataList',
            'onDataListClick',
            'findList',
            'queryParams'
        ],
        data() {
            return {
                sortField: null,
                sortSeq: null,
                isFirstPage: true,
                isLastPage: false,
                pageRange: []
            };
        },
        watch: {
            // watch page offset to fetch data from API
            'queryParams.offset'(newValue, oldValue) {
                if (parseInt(newValue) !== parseInt(oldValue)) {
                    // set to first page when offset changes
                    return this.findList({ offset: parseInt(newValue), currentPage: 1 });
                }
            },
            // watch current page to disable pagination buttons
            'queryParams.currentPage'(newValue) {
                const { totalPage } = this.queryParams;
                if (parseInt(newValue) === 1) {
                    this.isFirstPage = true;
                }
                else if (this.isFirstPage) {
                    this.isFirstPage = false;
                }
    
                if (parseInt(newValue) === totalPage) {
                    this.isLastPage = true;
                }
                else if (this.isLastPage) {
                    this.isLastPage = false;
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
            },
            changePage(page) {
                const { offset, currentPage, totalPage } = this.queryParams;
                let newPage;
                
                // set page number
                if (page === 'previous') {
                    newPage = currentPage - 1;
                }
                else if (page === 'next') {
                    newPage = currentPage + 1;
                }
                else {
                    newPage = page;
                }
                
                // set page range
                if (totalPage <= 5) {
                    this.pageRange = _.range(1, totalPage + 1);
                }
                else if (newPage + 2 >= totalPage) {
                    const pages = (newPage - 2 <= totalPage - 4) ? newPage - 2 : totalPage - 4;
                    this.pageRange = _.range(pages, totalPage + 1);
                }
                else if (newPage - 2 <= 1) {
                    const pages = (newPage + 3 >= 6) ? newPage + 3 : 6;
                    this.pageRange = _.range(1, pages);
                }
                else {
                    this.pageRange = _.range(newPage - 2, newPage + 3);
                }
                
                if (newPage >= 1 && newPage <= totalPage && newPage !== currentPage) {
                    return this.findList({ offset, currentPage: newPage });
                }
            }
        },
        created() {
            this.changePage(1);
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