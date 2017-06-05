import { fireBaseUrl } from '../../config/api';
import { formatSessionData } from '../../lib/dataFormatHelper';
// ACTIONS
const GET_SESSION_LOADING = 'GET_SESSION_LOADING';
const GET_SESSION_ERROR = 'GET_SESSION_ERROR';
const GET_SESSION = 'GET_SESSION';

// ACTION CREATORS
const getSessionLoading = () => ({ type: GET_SESSION_LOADING });
const getSessionError = (error) => ({ type: GET_SESSION_ERROR, payload: error });
const getSession = (session) => ({ type: GET_SESSION, payload: session });

//Reducer
export default function reducer( state = {
  isLoading: false,
  sessionData: {
    dataBlob: {},
    sectionIds: [],
    rowIds: []
  },
  error:''
}, action ){
  switch(action.type){
    case GET_SESSION_LOADING: {
      return Object.assign({}, state, {
        isLoading: true,
        error: ''
      });
    }
    case GET_SESSION_ERROR: {
      return Object.assign({}, state, {
        isLoading:false,
        error: action.payload
      });
    }
    case GET_SESSION: {
      let formattedData = formatSessionData(action.payload)
      return Object.assign({}, state, {
        isLoading: false,
        error: '',
        sessionData: formattedData
      });
    }
    default: {
      return state;
    }
  }
}
