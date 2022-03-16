import {LoginModel} from "@model/LoginModel"

export interface GlobalStoreModel {
    globalStore: LoginModel
    handlerList: any
    on: any
    emit: any
}
