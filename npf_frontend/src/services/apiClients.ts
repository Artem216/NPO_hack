import axios from "axios";
import { BASE_URL } from "../config";
import { IAccountAllData, IOperationData, IPredictData, IUserData } from "@/models";


const ApiClients = {
    async getUserData(user_id: string) {
        const response = await axios.get<IUserData>(
            `${BASE_URL}/api/v1/user/get_user?user_id=${user_id}`
        );
        return response;
    },
    async getAccountAllData(npo_account_id : string) {
        const response = await axios.get<IAccountAllData[]>(
            `${BASE_URL}/api/v1/npo_account/?npo_account_id=${npo_account_id}`
        );
        return response;
    },
    async getAccountOperationData(npo_account_id : string) {
        const response = await axios.get<IOperationData>(
            `${BASE_URL}/api/v1/npo_account/operation_data?user_id=${npo_account_id}`
        );
        return response;
    },
    async getAccountPredict(npo_account_id : string) {
        const response = await axios.get<IPredictData[]>(
            `${BASE_URL}/api/v1/predicts/?npo_account_id=${npo_account_id}`
        );
        return response;
    },
};
export default ApiClients;
