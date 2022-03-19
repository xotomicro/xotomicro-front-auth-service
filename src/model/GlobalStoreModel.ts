import {LoginModel} from "@model/authweb/LoginModel"

export interface GlobalStoreModel {
    globalStore: LoginModel
    handlerList: any
    on: any
    emit: any
}
