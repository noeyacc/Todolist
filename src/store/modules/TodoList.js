
const state = {
  todoList: [
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
  ]
};

const actions = {
  // 新增清單項目
  createTodoItem({ commit }, payload) {
    commit("setTodoItem", payload)
  },
  // 編輯清單項目
  editTodoItem({ commit }, payload) {
    commit("setTodoItem", payload)
  },
  // 刪除清單項目
  deleteTodoItem({ commit }, payload) {
    commit("setDeleteTodoItem", payload)
  },
  // 變更清單項目狀態
  changeTodoItem({ commit }, payload) {
    commit("setChangeTodoItem", payload)
  }
};

const mutations = {
  // 存入vuex
  setTodoItem(state, payload) {
    let list = state.todoList
    const isAdd = list.findIndex(i => i.id === payload.id) === -1
    const editIdx = list.findIndex(i => i.id === payload.id)
    isAdd && (list.push(payload))
    isAdd || (list[editIdx] = {...list[editIdx], ...payload})
    state.todoList = list
  },
  // 刪除清單項目
  setDeleteTodoItem(state, payload) {
    const id = payload
    let list = state.todoList
    list = list.filter(i => i.id !== id)
    state.todoList = list
  },
  // 變更清單項目狀態
  setChangeTodoItem(state, payload) {
    const id = payload.id
    const isCompletedValue = payload.isCompleted
    const idx = state.todoList.findIndex(i => i.id === id)
    state.todoList[idx].isCompleted = isCompletedValue
  }
};

const getters = {
  todoList: state => state.todoList
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
