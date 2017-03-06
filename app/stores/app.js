import { createStore } from 'redux';
import todoApp from '../reducers/app';

const appStore = createStore(todoApp)
export default appStore
