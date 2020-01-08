import { 
    login,
    logout
} from "../actions/actionNames";
const initialState = {
    isLoggedIn:false,
    userName:'',
    books:[],
    bookModal:false,
    updateModal:false,
    updateBook:{},
    updateIndex:0,
    genres:[]
}

export default (state = initialState,action)=>{
    switch(action.type){
        case login:
        return{
            ...state,
            isLoggedIn:true,
            userName:action.payload
        }
        case logout:
        return {
            ...state,
            isLoggedIn:false,
            userName:''
        }
        default:
        return state
    }
}