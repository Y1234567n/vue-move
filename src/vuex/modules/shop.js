import {reqInfo,reqGoods,reqRatings} from '../../api'
import {GETGOODS,GETSATINGS,GETINFOS} from '../mutation_types'
const state = {
  info: {},
  goods: {},
  ratings: []
}

const actions = {
  async getInfo({commit}){
    const resule = await reqInfo()
    if (resule.code === 0) {
      commit(GETINFOS,resule.data)
    }
  },
  async getgoods({commit}){
    const resule = await reqGoods()
    if (resule.code === 0) {
      commit(GETGOODS,resule.data)
    }
  },
  async getstaings({commit}){
    const resule = await reqRatings()
    if (resule.code === 0) {
      commit(GETSATINGS,resule.data)
    }
  },



}

const mutations = {
  [GETINFOS] (state,data) {
    state.info = data
  },
  [GETGOODS] (state,data) {
    state.goods = data
  },
  [GETSATINGS] (state,data) {
    state.ratings = data
  },

}

const getters = {
  
}

export default {
  state,
  actions,
  mutations,
  getters
}