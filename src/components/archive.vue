
<template>
    <div>
        <div>
            <svg :class="$style.icon" viewBox="0 0 1024 1024">
        	            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#archiveIcon"></use>
        	        </svg>
            <span :class="$style.word">文章归档</span>
        </div>
        <div :class="$style.time">
            <a v-for="item in items" :key="item" :href="'/archive_blogs/'+ item.year +'/' + item.month +'/'">
                <div :class="$style.year">{{item.year}}<span>年</span>
                    <div :class="$style.year">{{item.month}}</div><span>月</span>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: []
            }
        },
        mounted() {
            fetch('/api/v2.0/get_time/').then(res => {
                    return res.json()
                })
                .then(res => {
                    this.items = res.time
                })
        }
    }
</script>

<style lang="scss" module>
    @import '../common.scss';
    .icon {
        width: 25px;
        height: 25px;
        vertical-align: middle;
        margin-right: 5px;
    }
    
    .word,.time {
        font-size: 14px;
    }
    
    .year {
        composes: inline-block from "sass-loader!../utility.scss";
        margin-bottom: 5px;
    }
    
    .time {
        padding: 10px;
    }
</style>