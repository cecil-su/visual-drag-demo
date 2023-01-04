import { Effect } from '@umijs/max';

interface AppModal {
  namespace: string;
  state: any;
  effects: {
    state: Effect;
    addComponent: Effect;
    recordSnapshot: Effect;
  };
  reducers: any;
}

const app: AppModal = {
  namespace: 'app',
  state: {
    editMode: 'edit',
    canvasStyleData: {
      width: 1200,
      height: 740,
      scale: 100,
      color: '#000',
      opacity: 1,
      background: '#fff',
      fontSize: 14,
    },
    isInEditor: false,
    componentData: [],
    curComponent: null,
    curComponentIndex: null,
    isClickComponent: false,
  },

  effects: {
    *state({ payload }, { put }) {
      yield put({
        type: 'UPDATE_STATE',
        payload,
      });
    },
    *addComponent() {},
    *recordSnapshot() {},
  },

  reducers: {
    UPDATE_STATE(state: any, { payload = {} }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default app;
