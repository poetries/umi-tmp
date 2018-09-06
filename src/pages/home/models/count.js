import {delay} from '../../../utils/delay'
import key from 'keymaster'

export default {
  namespace: 'count',
  state: {
    record: 0,
    current: 0
  },
   subscriptions: {
      keyboardWatcher({ dispatch }) {
          key('⌘+up, ctrl+up', () => { dispatch({type:'add'}) });
      },
  },
  reducers: {
    add(state) {
      const newCurrent = state.current + 1;
      return { ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    minus(state) {
      return { ...state, current: state.current - 1 };
    },
    async(state){
      return { ...state, current: state.current + 10 };
    }
  },
  effects: {
    // 调用 dispatch(addAsync())
    *addAsync(action, { call, put }) {
      yield call(delay,500)
      yield put({type:'async'})
    }
},

 

};
