// bucket.js

//1 Actions
const LOAD   = 'bucket/LOAD';
const CREATE   = 'bucket/CREATE';
const DELETE =  'bucket/DELETE';

const LOADED = 'bucket/LOADED';
// const CREATE = 'my-app/widgets/CREATE';
// const UPDATE = 'my-app/widgets/UPDATE';
// const REMOVE = 'my-app/widgets/REMOVE';

//2 Initail State
const initialState = {
  list: ["10", "2", "3"],
  is_loaded: true,
}


//4 Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "bucket/LOAD":{
      // break;
      // if(action.bucket.length>0){
      if(true){
        return({state, is_loaded:true});
      }
      return state;
    }
    case "bucket/CREATE":{
      const new_bucket_list = [...state.list, action.bucketItem]
      return {list: new_bucket_list};
      break;
    }

    case "bucket/DELETE":{
      //const
      //idx와 다른경우만 return하면, 빼기가 된다. 
      const new_bucket_list = state.list.filter((l,idx) => {
        if(idx !== action.bucketItem){
          return l;
        }
      });
      return {list: new_bucket_list};
      //일단 return state;
    }

    case  "bucket/LOADED": {
      return {...state, is_loaded: action.loadState}
    };
    
    default: return state;
  }
}

//3 Action Creators
export const loadBucket = () => {
  return {type: LOAD};
}

export const createBucket = (bucketItem) => {
  return {type: CREATE, bucketItem};
}

export const deleteBucket = (bucketItem) => {
  return {type: DELETE, action: bucketItem};
}

export const isLoaded = (loadState) => {
  return {type: LOADED, loadState};
}

// export function loadWidgets() {
//   return { type: LOAD };
// }

// export function createWidget(widget) {
//   return { type: CREATE, widget };
// }

// export function updateWidget(widget) {
//   return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
//   return { type: REMOVE, widget };
// }

// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }