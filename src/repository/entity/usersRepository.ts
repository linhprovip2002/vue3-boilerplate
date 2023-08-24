import Repository from "..";
import { USER_RESOURCE } from "../../constants";
interface params {
    page:number,
    limit:number
}
export default {
    getall: (token: string, params?: params) => {
        console.log(params);
        if (params) {
            const url = `${USER_RESOURCE}/?page=${params.page}&limit=${params.limit}`;
            return Repository.get(url,{},token);
        } else {
            const url = `${USER_RESOURCE}/`;
            return Repository.get(url, {}, token);
        }
    },
    getDetail: (id: string,token:string) => Repository.get(`${USER_RESOURCE}/${id}`,{},token),
};