
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
  async createTodoItem({ commit }, payload) {
    commit("setTodoItem", payload)
  },
  // 編輯清單項目
  async editTodoItem({ commit }, payload) {
    commit("setTodoItem", payload)
  },
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
    console.log('state.todoList: ', state.todoList);
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
