/**
 * Created by reube on 28/07/2017.
 */
import { FETCH_POSTS, CREATE_POST, FETCH_POST } from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type){
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            return { ...state, [action.payload.data.id]: action.payload.data };
        default:
            return state;
    }
}