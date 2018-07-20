<template>
    <div class="tip_mask">
        <div class="tip_modal">
            <div class="tip_content">
                <slot name="tip_content"></slot>
            </div>
            <div class="tip_footer">
                <button class="tip_login tip_button">
                    <slot name="tip_confirm"></slot>
                </button>
                <button class="tip_cancel tip_button">
                <slot name="tip_cancel"></slot>
                </button>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
@import "../scss/color.scss";
.tip_mask {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 3;
  background-color: rgba(51, 51, 51, 0.85);
}

.tip_footer {
  float: right;
}

.tip_cancel {
  background-color: $grey;
}

.tip_modal {
  width: 200px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #dcdcdc;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 4px;
  font-size: 18px;
  z-index: 10;
}

.tip_content {
  margin-bottom: 50px;
}

.tip_button {
  color: $white;
  width: 40px;
  height: 26px;
  border-radius: 4px;
}

.tip_button:hover {
  color: $white;
  background-color: $yellow;
}

.tip_login {
  margin-right: 15px;
  background-color: $orange;
}
</style>
