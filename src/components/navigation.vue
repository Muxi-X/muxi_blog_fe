<template>
	<div>
		<a href="/" :class="$style.logo_box">
			<svg :class="$style.logo" viewBox="0 0 93 93">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo"></use>
			</svg>
		</a>
		<a href="/" :class="$style.link_box_first">
			<svg :class="$style.icon" viewBox="0 0 1024 1024">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#homeIcon"></use>
			</svg>
			<span :class="$style.class_word">Home</span>
		</a>
		<a href="/web" :class="$style.link_box">
			<svg :class="$style.icon" viewBox="0 0 1024 1024">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#webIcon"></use>
			</svg>
			<span :class="$style.class_word">Web</span>
		</a>
		<a href="/design" :class="$style.link_box">
			<svg :class="$style.icon" viewBox="0 0 1024 1024">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#designIcon"></use>
			</svg>
			<span :class="$style.class_word">Design</span>
		</a>
		<a href="/android" :class="$style.link_box">
			<svg :class="$style.icon" viewBox="0 0 1024 1024">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#androidIcon"></use>
			</svg>
			<span :class="$style.class_word">Android</span>
		</a>
		<a href="/product" :class="$style.link_box">
			<svg :class="$style.icon" viewBox="0 0 1024 1024">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#productIcon"></use>
			</svg>
			<span :class="$style.class_word">Product</span>
		</a>
		<a href="http://muxistudio.com" :class="$style.link_box">
			<svg :class="$style.icon" viewBox="0 0 1024 1024">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#about"></use>
			</svg>
			<span :class="$style.class_word">About</span>
		</a>
		<a href="/send" :class="$style.logo_box">
			<svg :class="$style.send" viewBox="0 0 1024 1024">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sendIcon"></use>
			</svg>
		</a>
	</div>
</template>
<script>
</script>
<style lang='scss' module>
.logo_box {
	width: 100%;
	height: 100px;
	composes: margin from "sass-loader!../scss/common.scss";
}

.logo {
	width: 70px;
	height: auto;
}
.send, .logo {
	margin: 22px auto;
	display: block;
}
.send {
	height: 45px;
    margin-top: 50px;
}
.link_box,.link_box_first {
	border-bottom: 1px #d9dcdc solid;
	composes: link from "sass-loader!../scss/common.scss";
}

.link_box_first {
	border-top: 1px #d9dcdc solid;
}

.icon {
	composes: inline-block from "sass-loader!../scss/common.scss";
	margin-left: 30px;
	width: 39px;
	margin-right: 15px;
	vertical-align: middle;
}

.class_word {
	display: inline-block;
	line-height: 70px;
	vertical-align: middle;
}

.link_box_first:hover,.link_box:hover {
	background: #69cad3;
	color: #fff;
}
</style>