<template>
    <div>
        <div>
            <svg class="archive_icon vertical_align" viewBox="0 0 1024 1024">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#archiveIcon"></use>
            </svg>
            <span class="archive_word">文章归档</span>
        </div>
        <div class="archive_time">
            <a v-for="item in items" :key="items.indexOf(item)" :href="'/archiveBlogs/'+ item.year +'/' + item.month +'/'">
                <div class="archive_year inline_block">{{item.year}}
                    <span>年</span>
                    <div class="archive_year inline_block">{{item.month}}</div>
                    <span>月</span>
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

<style lang="scss">
@import '../scss/pc.scss';
@import '../scss/utility.scss';
.archive_icon {
    width: 25px;
    height: 25px;
    margin-right: 5px;
}

.archive_word,
.archive_time {
    font-size: 14px;
}

.archive_year {
    margin-bottom: 5px;
}

.archive_time {
    padding: 10px;
}
</style>