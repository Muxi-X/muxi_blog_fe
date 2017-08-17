<template>
    <div>
        <button :class="$style.sign_box">
	        <a href = "https://user.muxixyz.com/" :class="$style.sign">登录 / 注册</a>
	    </button>
	</div>
</template>
<style lang='scss' module>
.sign {
	line-height: 25px;
}
.sign_box,.sign {
	composes: full-width from "sass-loader!../scss/utility.scss";
	composes: full-height from "sass-loader!../scss/utility.scss";
}
.sign_box:hover {
    background: #ffc162;
	a { 
		color: #ffffff;
	}
}
</style>