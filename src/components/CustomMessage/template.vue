<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h3>{{ title }}</h3>
        </div>

        <div class="modal-body">
          <div>
            <i class="message-body__icon--warning" v-if="type === 'warning'">
              <svg
                viewBox="64 64 896 896"
                data-icon="exclamation-circle"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
                class
              >
                <path
                  d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                />
                <path
                  d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"
                />
              </svg>
            </i>
            <i class="message-body__icon--error" v-if="type === 'error'">
              <svg
                viewBox="64 64 896 896"
                data-icon="close-circle"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
                class
              >
                <path
                  d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
                />
                <path
                  d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                />
              </svg>
            </i>
          </div>
          <!-- 文字內容 -->
          <div class="ant-modal-confirm-content">{{ content }}</div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn--default" @click="close">
            <span>{{ cancelText }}</span>
          </button>
          <button type="button" class="" @click="confirm">
            <span>{{ confirmText }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  display: table;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  padding: 20px 30px;
  width: 420px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  font-family: Helvetica, Arial, sans-serif;
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #738fdd;
  font-size: 18px;
}

.modal-body {
  display: flex;
  justify-content: flex-start;
  margin: 20px 0;
  min-height: 50px;
  line-height: 22px;
  & [class^="message-body__icon"] {
    display: inline-block;
    margin-right: 5px;
    vertical-align: -0.125em;
    text-align: center;
    text-transform: none;
    font-style: normal;
    font-size: 22px;
    line-height: 0;
  }
  & [class*="--warning"] {
    color: #faad14;
  }
  & [class*="--error"] {
    color: #f31b1e;
  }
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & button {
    display: block;
    padding: 5px 15px;
    min-width: 100px;
    border: 1px solid transparent;
    background-color: #738fdd;
    color: #fff;
    cursor: pointer;
    &:not(:first-of-type) {
      margin-left: 10px;
    }
  }
  & .btn--default {
    border: 1px solid #738fdd;
    background-color: #fff;
    color: #738fdd;
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
