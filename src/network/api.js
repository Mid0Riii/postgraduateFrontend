import service from "@/network/requests";

export default {
    login(data){
        return service.post('login/',data)
    },
    setDeparture(data){
        return service.post('semester/departure/', data)
    },
    getAnnouncement(){
        return service.get("comm/ann")
    },
    getAddressBook(){
        return service.get("basic/addressbook")
    },
    getScore(){
        return service.get("semester/score")
    },
    changePassword(data){
        return service.post("auth/",data)
    },
    getScholarship(){
        return service.get("scholarship/scholarship")
    },
    postScholarshipApply(data){
        return service.post("scholarship/apply/",data)
    },
    getScholarshipApply(){
        return service.get("scholarship/apply")
    },
    retriveScholarshipApply(id){
        return service.get("scholarship/apply/"+id)
    },
    updateScholarchipApply(id,data){
        return service.patch("scholarship/apply/"+id+'/',data)
    },
    deleteScholarshipApply(id){
        return service.delete("scholarship/apply/"+id)
    },
    getStudent() {
        return service.get("basic/info")
    },
    getPoverty() {
        return service.get("basic/poverty")
    },
        getSemester(){
        return service.get("semester/list")
    },
    getDeparture(){
        return service.get("semester/departure")
    },
    getAuth(){
        return service.get("auth")
    },
    updatePoverty(id,data){
        return service.patch("basic/poverty/"+id+'/',data)
    },
}
