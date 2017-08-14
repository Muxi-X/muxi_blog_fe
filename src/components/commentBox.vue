<template>
    <div>
        <textarea v-model.trim="message" :class="$style.editComment" placeholder="你的看法？"></textarea>
        <div :class="$style.buttonBox">
            <button v-on:click="submit" :class="$style.submitComment">评论</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                "message": ""
            }
        },
        created(){
            this.$parent.Cmessage = ""
        },
        methods: {
            submit() {
                this.$emit('submit')
                this.$parent.Cmessage = this.message
            }
        }
    }
</script>

<style lang='scss' module>
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
        composes: full-width from "sass-loader!../utility.scss";
        margin-top: 15px;
        font-size: 14px;
    }
</style>