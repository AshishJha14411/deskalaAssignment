import {
GET_CANDIDATE,
PROFILE_ERROR,
DATA_DELETED
} from '../actions/types';

const initialState = {
    candidate: [],
    loading: true,
    error: {}
}

function candidateReducer (state=initialState, actions){
    const {type, payload} = actions;

    switch(type){
      
        case DATA_DELETED:
            return{
                ...state,
                candidate: state.filter((data) => data._id !== payload),
                loading: false
            }
    }
}

export default candidateReducer;