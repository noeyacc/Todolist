<template>
  <div class="todolist">
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <div class="create__group">
      <div class="create__input" :class="{ focus: isCreate }" @click="isCreate = true">
        <p>新增工作事項</p>
        <aw-icon icon="plus" />
      </div>
      <div class="todo__item" v-if="isCreate">
        <div class="todo__content">
          <textarea v-model="addItem" />
        </div>
        <div class="todo__footer">
          <button type="button" @click="isCreate = !isCreate">取消</button>
          <button type="button" @click="createComplete">新增</button>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="list__item" v-for="item in list" :key="item.id" :class="{ completed: item.isCompleted }">
        <div class="list__title">
          <input type="checkbox" v-model="item.isCompleted" />
          <span class="list__text">{{ item.text }}</span>
          <div class="option">
            <span @click="editOpen(item)"><aw-icon icon="edit"/></span>
            <span @click="deleteItem(item)"><aw-icon icon="trash-alt"/></span>
          </div>
        </div>
        <div class="todo__item" v-if="item.isEdit">
          <div class="todo__content">
            <textarea v-model="editItem.text" />
          </div>
          <div class="todo__footer">
            <button type="button" @click="editClose(item)">取消</button>
            <button type="button" @click="editCompleted(item)">編輯</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { deepCopy } from "@UTIL/other";
export default {
  name: "Home",
  data() {
    return {
      title: "工作事項清單",
      list: [],
      isCreate: false,
      createDefaultText: "內容",
      addItem: "",
      editItem: {}
    };
  },
  computed: {
    ...mapGetters({
      todoList: "TodoList/todoList"
    })
  },
  created() {
    this.getList();
    this.addItem = this.createDefaultText;
  },
  methods: {
    ...mapActions({
      createTodoItem: "TodoList/createTodoItem",
      editTodoItem: "TodoList/editTodoItem",
      deleteTodoItem: "TodoList/deleteTodoItem"
    }),
    // 取得項目清單
    getList() {
      let list = deepCopy(this.todoList || []);
      list = list.map(i => {
        i.isEdit = false;
        return i;
      });
      this.list = list;
    },
    // 送出新增項目
    createComplete() {
      let params = {
        id: this.list[this.list.length - 1].id + 1,
        isCompleted: false,
        text: this.addItem
      };

      this.createTodoItem(params);
      this.isCreate = !this.isCreate;
      this.addItem = this.createDefaultText;
      this.getList();
    },
    // 編輯項目
    editOpen(item) {
      this.editItem = deepCopy(item);
      item.isEdit = !item.isEdit;
      this.$forceUpdate();
    },
    // 關閉編輯項目
    editClose(item) {
      this.editItem = {};
      item.isEdit = !item.isEdit;
    },
    // 送出編輯項目
    editCompleted() {
      let params = {
        id: this.editItem.id,
        text: this.editItem.text
      };
      this.editTodoItem(params);
      this.getList();
    },
    // 刪除項目
    deleteItem(item) {
      this.$customMessage({
        type: "warning",
        content: "確定要刪除此清單項目?",
        onOk: () => {
          console.log("callback");
          this.deleteTodoItem(item.id);
          this.getList();
        }
      });
    }
  }
};
</script>
