<template>
	<div>
	<div :class="$style.logo_box">
	    <svg :class="$style.logo" viewBox="0 0 93 93" >
	        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo"></use>
	    </svg>
	    </div>
	    <a href="/" :class="$style.link_box_first">
	        <svg :class="$style.icon" viewBox="0 0 1024 1024">
	            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#home"></use>
	        </svg>
	         <span :class="$style.class_word">Home</span>
	    </a>
	    <a href="/web" :class="$style.link_box">
	        <svg :class="$style.icon" viewBox="0 0 1024 1024">
	            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#web"></use>
	         </svg>
            <span :class="$style.class_word">Web</span>
	    </a>
	    <a href="/design" :class="$style.link_box">
	        <svg :class="$style.icon" viewBox="0 0 1024 1024">
	            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#design"></use>
	        </svg>
	        <span :class="$style.class_word">Design</span>
	    </a>
	    <a href="/android" :class="$style.link_box">
	        <svg :class="$style.icon" viewBox="0 0 1024 1024">
	            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#android"></use>
	        </svg>
	        <span :class="$style.class_word">Android</span>
	    </a>
	    <a href="/product" :class="$style.link_box">
	        <svg :class="$style.icon" viewBox="0 0 1024 1024">
	            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#product"></use>
	        </svg>
	        <span :class="$style.class_word">Product</span>
	    </a>
	    <a href="http://muxistudio.com" :class="$style.link_box">
	        <svg :class="$style.icon" viewBox="0 0 1024 1024">
	            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#about"></use>
	        </svg>
	        <span :class="$style.class_word">About</span>
	    </a>
	</div>
</template>
<script>
</script>
<style lang='scss' module>
.logo_box {
	width: 100%;
	height: 100px;
	margin: 0 auto;

}
.logo {
	margin: 22px auto;
    display: block;
    width: 70px;
    height: auto;
}

.link_box {
	border-bottom: 1px #d9dcdc solid;
	// height: 70px;
	// width: 100%;
	// display: block;
	// font-size: 16px;
	composes: link from "sass-loader!../common.scss";
}

.link_box_first{
	border-top: 1px #d9dcdc solid;
	border-bottom: 1px #d9dcdc solid;
	// height: 70px;
	// width: 100%;
	// display: block;
	// font-size: 16px;
	composes: link from "sass-loader!../common.scss";
}

.icon {
	display: inline-block;
    width: 39px;
    fill: #d9dcdc;
    margin-left: 30px;
    margin-right: 15px;
    vertical-align: middle;
}
.class_word {
	display: inline-block;
    line-height: 70px;
    vertical-align: middle;
}
.link_box_first:hover {
    background: #69cad3;
    color: #fff; 
}
.link_box:hover {
	background: #69cad3;
    color: #fff;
}
</style>