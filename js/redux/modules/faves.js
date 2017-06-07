import { fireBaseUrl } from '../../config/api';
import { formatSessionData } from '../../lib/dataFormatHelper';
// ACTIONS
const GET_FAVES_LOADING = 'GET_FAVES_LOADING';
const GET_FAVES_ERROR = 'GET_FAVES_ERROR';
const GET_FAVES = 'GET_FAVES';

// ACTION CREATORS
const getFavesLoading = () => ({ type: GET_FAVES_LOADING });
const getFavesError = (error) => ({ type: GET_FAVES_ERROR, payload: error });
const getFaves = (favedSessions, faveIds) => ({ type: GET_FAVES, payload: {favedSessions: favedSessions, faveIds: faveIds } });
import { queryFaves } from '../../config/models';

export const _fetchFaves = () => (dispatch) => {
  const faveIds = queryFaves();
  dispatch(getFavesLoading());
  return fetch(`${fireBaseUrl}/sessions.json`)
    .then( response => response.json() )
    .then( sessions => sessions.filter( session => {
      if(faveIds.includes(session.session_id)){
        return session;
      }
    }) )
    .then( filteredSessions => dispatch(getFaves(filteredSessions, faveIds)))
    .catch( error => dispatch(getFavesError(error)))
};
//Reducer
export default function reducer( state = {
  isLoading: false,
  favesData: {
    dataBlob: {},
    sectionIds: [],
    rowIds: []
  },
  faveIds: [],
  error:'',
}, action ){
  switch(action.type){
    case GET_FAVES_LOADING: {
      return Object.assign({}, state, {
        isLoading: true,
        error: ''
      });
    }
    case GET_FAVES_ERROR: {
      return Object.assign({}, state, {
        isLoading:false,
        error: action.payload
      });
    }
    case GET_FAVES: {
      // console.log(action.payload)
      console.log('action.payload.favedSessions', action.payload.favedSessions);
      let formattedData = formatSessionData(action.payload.favedSessions)
      console.log('formattedData', formattedData);

      return Object.assign({}, state, {
        isLoading:false,
        favedSessions: formattedData,
        faveIds: action.payload.faveIds
      });
    }
    default: {
      return state;
    }
  }
}
