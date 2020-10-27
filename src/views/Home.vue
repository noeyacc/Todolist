<template>
  <div class="todolist">
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <div class="create__group">
      <div class="create__input" :class="{focus : isCreate}" @click="isCreate = true">
        <p>新增工作事項</p>
        <i class="fa fa-plus"></i>
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
      <div
        class="list__item"
        v-for="(item,index) in list"
        :key="item.id"
        :class="{completed : item.isCompleted}"
      >
        <div class="list__title">
          <el-checkbox v-model="item.isCompleted"></el-checkbox>
          <span class="list__text">{{ item.text }}</span>
          <div class="option">
            <span class="fa fa-pencil" @click="editOpen(item)"></span>
            <span class="fa fa-trash-o" @click="deleteItem(item, index)"></span>
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
export default {
  name: "Home",
  data() {
    return {
      title: "工作事項清單",
      isCreate: false,
      list: [
        {
          id: 1,
          isEdit: false,
          isCompleted: false,
          text: "Jurassic World Evolution"
        },
        {
          id: 2,
          isEdit: false,
          isCompleted: false,
          text: "Write something here"
        }
      ],
      createDefaultText: "內容",
      addItem: "",
      editItem: {
        text: ""
      }
    };
  },
  created() {
    this.addItem = this.createDefaultText;
  },
  methods: {
    createComplete() {
      let data = {
        id: this.list.length + 1,
        isEdit: false,
        isCompleted: false,
        text: this.addItem
      };
      this.list.push(data);
      this.isCreate = !this.isCreate;
      this.addItem = this.createDefaultText;
    },
    editOpen(item) {
      this.editItem.text = item.text;
      item.isEdit = !item.isEdit;
    },
    editClose(item) {
      this.editItem.text = "";
      item.isEdit = !item.isEdit;
    },
    editCompleted(item) {
      item.text = this.editItem.text;
      item.isEdit = !item.isEdit;
    },
    deleteItem(item, val) {
      this.list.splice(val, 1);
    }
  }
};
</script>
