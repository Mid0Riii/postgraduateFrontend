import service from "@/network/requests";

export default {
    login(data){
        return service.post('login/',data)
    },
    getAnnouncement(){
        return service.get("comm/ann")
    },
    getAddressBook(){
        return service.get("basic/addressbook")
    },
    getScore(){
        return service.get("semester/score")
    }
}
