import queryString from 'query-string'
import {
    queryPoetry
} from '../services';

export default {
  namespace: 'poetry',
  state: {
    poetryList:[]
  },
   subscriptions: {
    setup({ dispatch, history }) {
      // 监听路由的变化，请求页面数据
      return history.listen(({ pathname, search }) => {
        const query = queryString.parse(search)
        
        // 监听首页路由加载数据
        if (pathname === '/') {
          dispatch({ type: 'fetchPoetry'})
        }
      })
    }
  },
  reducers: {
    savePoetryList(state,action){
      return {
        ...state,
        poetryList:action.payload.list
      }
    },
  },
  effects: {
        // 异步 dispatch(fetchPoetry())最后返回的结果经由savePoetryList处理
    *fetchPoetry(action,{call, put}){
        let list = yield call(()=>queryPoetry())
        yield put({type:'savePoetryList',payload:{list}})
        }
    }
};
