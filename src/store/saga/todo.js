import axios from 'axios';
import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import { GET_TODO_REQUEST, getTodoSuccese, getTodoFailure } from './../reducer/list';

function getTodoAPI() {
    return axios.get('http://127.0.0.1:8000/api/todo');
}

function* workGetTodo(){
    try {
        const { data } = yield call(getTodoAPI);
        yield put(getTodoSuccese(data));
    } catch(err) {
        console.log(err);
        yield put(getTodoFailure(err));
    }
}

function* watchGetTodo(){
    yield takeLatest(GET_TODO_REQUEST, workGetTodo);
}

export default function* todo(){
    yield all([fork(watchGetTodo)]);
}