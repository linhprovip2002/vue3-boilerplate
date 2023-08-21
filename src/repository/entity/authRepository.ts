import Repository from "..";
import { AUTH_RESOURCE } from "../../constants";
export default {
    login: (payload: any) => Repository.post(`${AUTH_RESOURCE}/login`, payload).catch((error) => console.log("loi client" + error)),
    register: (payload: any) => Repository.post(`${AUTH_RESOURCE}/register`, payload),
};


