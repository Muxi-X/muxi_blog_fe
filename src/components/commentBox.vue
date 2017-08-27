<template>
    <div>
        <textarea v-model.trim="message" class="editComment" placeholder="你的看法是？"></textarea>
        <div class="buttonBox full-width">
            <button v-on:click="submitComment" class="submitComment">评论</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: ""
            }
        },
        props: ['id'],
        methods: {
            submitComment(e) {
                e.stopPropagation();
                if (this.message) {
                    fetch('/api/v2.0/' + this.id + '/add_comment/', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'token': 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.P5rU9mV7xAVwTKf06RA7o1BOvF9jWLGDpYZ_fohWL6s'
                        },
                        body: JSON.stringify({
                            id: this.id,
                            comment: this.message
                        })
                    }).then(res => {
                        this.message=""
                        //this.$parent.fetchComments()
                        this.$emit('newComment')
                    })
                }
            }
        }
    }
</script>

<style lang='scss'>
@import '../scss/utility.scss';
    .editComment {
        height: 75px;
        width: 380px;
        border: 2px solid #e6e6e6;
    }
    
    .submitComment {
        background-color: #ffc162;
        color: #fff;
        width: 50px;
        height: 30px;
        border-radius: 4px;
    }
    
    .buttonBox {
        margin-top: 15px;
        font-size: 14px;
    }
</style>