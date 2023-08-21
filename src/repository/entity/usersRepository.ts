import Repository from "..";
import { USER_RESOURCE } from "../../constants";
export default {
    getall: (token:string) => Repository.get(`${USER_RESOURCE}/`, {}, token, null),
    getDetail: (id: string) => Repository.get(`${USER_RESOURCE}/${id}`),
};