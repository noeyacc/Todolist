
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
  async CreateTodoItem({ commit }, payload) {
    commit("setTodoItem", payload)
  },
  // async [_M.GET_SPACEX_ROCKETS_DETAIL]({ commit }, payload) {
    
  // }
};

const mutations = {
  // 存入vuex
  setTodoItem(state, payload) {
    const isAdd = state.todoList.findIndex(i => i.id === payload.id)
    isAdd && (state.todoList.push(payload))
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
