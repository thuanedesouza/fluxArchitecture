import { createStore } from 'redux';

//reduce of my application
const INITIAL_STATE = {
    data: [
        'React Native',
        'ReactJS', 
        'Another course'
        
    ]
}

// we can separe action from reduces but since this is just one function its ok
function courses (state = INITIAL_STATE,  action){
    switch(action.type){
        case 'ADD_COURSE':
            return {...state, data: [...state.data, action.title]}
        default:
            return state;

    }

}

const store = createStore(courses);

export default store;