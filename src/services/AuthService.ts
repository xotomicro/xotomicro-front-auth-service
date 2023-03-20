import {globalEventDistributor} from "../App"

export function setToken(token: string) {
    sessionStorage.setItem("token", token)
    globalEventDistributor.emit("login", token)
}

export function getToken() {
    return sessionStorage.getItem("token")
}

export function getUsername() {
    return globalEventDistributor ? globalEventDistributor.globalStore.username : ""
}
