import service from './request'
export default {
    login(data){
        return service.post('auth/jwt/login/', data)
    },
    // refresh_token(data){
    //     return service.post('api-token-refresh', data)
    // },
    getCourses(){
        return service.get('rate/student/courses/')
    },
    updateScore(data){
        return service.post('rate/student/update/', data)
    }
}
