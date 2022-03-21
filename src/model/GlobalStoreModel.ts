import { LoginModel } from "./authweb/LoginModel"
import { EventModel } from "./eventweb/EventModel"
import { NavModel } from "./hooksystem/NavModel"
import { OrderModel } from "./orderweb/OrderModel"
import { ProductModel } from "./productweb/ProductModel"
import { UserModel } from "./userweb/UserModel"

export interface GlobalStoreModel {
    globalStore: EventModel & LoginModel & NavModel & OrderModel & ProductModel & UserModel
    handlerList: any
    on: any
    emit: any
}
