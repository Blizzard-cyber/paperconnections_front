import router from '../router'
import { createStore } from 'vuex'

export default new .Store({
    state: {
        isLogin: false,
        user: {
            imageUrl: '',
            nickname: '',
            username: '',
            website: ''
        }
    },
    mutations: {
        setLogin(state, user) {
            localStorage.setItem('user', JSON.stringify(user));
            state.user = user;
            state.isLogin = true;            
        },
        getUser(state) {
            if(localStorage.getItem('user')) {
                state.isLogin = true;
                state.user = JSON.parse(localStorage.getItem('user'));
            }
        },
        signOut(state) {
            localStorage.setItem('user','');
            state.isLogin = false;
            state.user = '',
            router.push({ name: 'login' })
        }
    }
})