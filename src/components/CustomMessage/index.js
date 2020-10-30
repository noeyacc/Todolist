import vue from "vue";
import modalTemplate from "./template.vue";

const DefaultConstructor = vue.extend(modalTemplate);

/**
 * usage:
 * this.$customMessage(obj)
 *
 * 傳入data 欄位說明：
 * type: modal類型： warning | error
 * title: 訊息標題
 * content: 訊息內容
 * cancelText: 取消按鈕文字,
 * confirmText: 確認按鈕文字,
 * callback: 確認扭函式
 */
function customMessageFunc(data) {
  let type = data.type ? data.type : "error";
  let title = data.title ? data.title : "提示訊息";
  let content = data.content ? data.content : "Hello World";
  let cancelText = data.cancelText ? data.cancelText : "取消";
  let confirmText = data.confirmText ? data.confirmText : "確認";
  let callback = data.onOk;

  const errorDom = new DefaultConstructor({
    el: document.createElement("div"),
    name: "customMessage",
    data() {
      return {
        type,
        title,
        content,
        cancelText,
        confirmText,
        show: false,
      };
    },
    watch: {
      show(val) {
        if (val === true) {
          document.getElementsByTagName("body")[0].style.overflow = "hidden";
        } else {
          document.getElementsByTagName("body")[0].style.overflow = "auto";
        }
      }
    },
    mounted() {
      setTimeout(() => {
        this.show = true;
      }, 100);
    },
    methods: {
      close() {
        this.show = false;
        // 避免dom一直疊加
        setTimeout(() => {
          document.body.removeChild(errorDom.$el);
        }, 100);
      },
      confirm() {
        if (callback && typeof callback == "function") {
          console.log("aaa")
          callback();
          this.close();
        } else {
          this.close();
        }
      }
    }
  });

  document.body.appendChild(errorDom.$el);
}

function registryCustomMessage() {
  vue.prototype.$customMessage = customMessageFunc;
}

export default registryCustomMessage;
