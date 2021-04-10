let id = 0;

// 액션 타입 만들기
export const GET_TODO_REQUEST = "GET_TODO_REQUEST";
export const GET_TODO_SUCCESE = "GET_TODO_SUCCESE";
export const GET_TODO_FAILURE = "GET_TODO_FAILURE";

export const TODO_ADD = "list/TODO_ADD";
export const TODO_MODIFY = "list/TODO_MODIFY";
export const TODO_DELETE = "list/TODO_DELETE";
export const TODO_FINISH = "list/TODO_FINISH";

//  액션 함수 만들기
export const getTodoRequest = () => ({
    type: GET_TODO_REQUEST
});
export const getTodoSuccese = (data) => ({
    type: GET_TODO_SUCCESE,
    data
});
export const getTodoFailure = (err) => ({
    type: GET_TODO_FAILURE,
    err
});

export const todoAdd = (title) => { return { type: TODO_ADD, title }};
export const todoModify = (id, title) => ({ type: TODO_MODIFY, id, title });
export const todoDelete = (id) => ({ type: TODO_DELETE, id });
export const todoFinish = id => ({ type: TODO_FINISH, id });

// 초기 상태 선언
const initialState = [];

// 리듀서 선언
export default function list(state = initialState, action){
    switch(action.type){
        case GET_TODO_REQUEST:
            console.log("get todo request");
            return state;
        case GET_TODO_SUCCESE:
            console.log("get todo succese");
            return action.data;
        case GET_TODO_FAILURE:
            console.log("get todo failure: ", action.err);
            return state;
        case TODO_ADD:
            return [
                ...state,
                {
                    id: id++,
                    title: action.title,
                    isComplete: false
                }
            ];
        case TODO_MODIFY:
            return state.map((v) => {
                if(v.id === action.id){
                    v.title = action.title;
                }
                return v;
            });
        case TODO_DELETE:
            return state.filter(state => state.id !== action.id);
        case TODO_FINISH:
            return state.map((v) => {
                if(v.id === action.id){
                    v.isComplete = !v.isComplete;
                }
                return v;
            });
        default:
            return state;
    }
}