import {observable} from 'mobx'
import {AsyncStorage} from 'react-native'

import api from '../config/API'
import FetchApi from '../utils/FetchApi'
import encodeURI from '../utils/EncodeURI'

class AuthStore {

  //@observable isLoading = false;
  //@observable isLogin = false;
  // @observable token = null;
  // @observable loginUser = null;
  // @observable profileComp = null;
  // @observable loginEmp = null;

  
  // get link API
  constructor() {
    this.fetch = new FetchApi(api.base_url);
  }

  async getDivisi(param) {
    const res = await this.fetch.get('divisi',{
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
    }, JSON.stringify(param))

    const {success, result} = res;
    console.log('response getDivisi : ', res)
    return res;
  }

  async postDivisi(param) {
    const res = await this.fetch.post('divisi',{
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
    }, JSON.stringify(param))

    const {success, result} = res;
    console.log('response postDivisi : ', res)
    return res;
  }

}

const authStore = new AuthStore()
export default authStore