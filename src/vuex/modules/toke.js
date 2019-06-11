import { reqShops,reqLocation,reqRecommend } from '../../api'
import {SHOPS,LOCATION_NOW,RECOMMENT} from '../mutation_types'
const state = {
  latitude: 40.10038,
  longitude : 116.36867,
  shops: [],
  location: '',
  recomments:[]
}

const actions = {
  async getShopList ({commit,state}) {
    const { latitude, longitude } = state
    const result =await reqShops( latitude, longitude )
    if (result.code===0) {
      commit(SHOPS ,result.data)
    }  
    },
  async getLocation ({commit,state}) {
    const { latitude, longitude } = state   
    const result =await reqLocation( latitude, longitude )
    if (result.code===0) {
      commit(LOCATION_NOW,result.data)
    }  
    },
  async getRecomment ({commit}) {
    const result =await reqRecommend()
    if (result.code===0) {
      commit(RECOMMENT,result.data)
    }  
    },
    
}

const mutations = {
  [SHOPS] (state,shoplist) {
    state.shops = shoplist
    },
  [LOCATION_NOW] (state,loction) {
    state.location = loction
  },
  [RECOMMENT] (state,recomments) {
    state.recomments = recomments
  }
}

const getters = {
  
}

export default {
  state,
  actions,
  mutations,
  getters
}