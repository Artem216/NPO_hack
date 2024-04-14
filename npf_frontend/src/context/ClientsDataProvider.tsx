import { IAccUserId, IAccountAllData, IOperationData, IPredictData, IUserPersonalData } from "@/models";
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
import ApiClients from "@/services/apiClients";
import { toast } from "@/components/ui/use-toast";
import storage from "@/lib/storage";

export type ClientDataContextType = [
    IUserPersonalData,
    Dispatch<SetStateAction<IUserPersonalData>>,
    string,
    Dispatch<SetStateAction<string>>,
    string[],
    Dispatch<SetStateAction<string[]>>,
    string,
    Dispatch<SetStateAction<string>>,
    IAccountAllData[],
    Dispatch<SetStateAction<IAccountAllData[]>>,
    IOperationData,
    Dispatch<SetStateAction<IOperationData>>,
    IPredictData,
    Dispatch<SetStateAction<IPredictData>>,
];

const mockUserPeraonalData: IUserPersonalData = {
    user_id: '',
    gender: 1,
    age: 0,
}

const mockAccountData: IAccountAllData = {
    id: 1,
    npo_account_id: '',
    year: 2004,
    quartal: '1',
    pmnts_sum_per_qrtr: 0,
    pmnts_sum_per_year: 0,
}

const mockOperationaData: IOperationData = {
    operation_0: 2,
    operation_1: 2
}

const mockPredict: IPredictData = {
    npo_account_id: '',
    quarterly_forecast: 0.1,
    yearly_forecast: 0.1,
}

const ClientDataContext = createContext<ClientDataContextType>([
    mockUserPeraonalData,
    () => { },
    '',
    () => { },
    [],
    () => { },
    '',
    () => { },
    [],
    () => { },
    mockOperationaData,
    () => { },
    mockPredict,
    () => { },

]);

interface ClientsDataProviderProps {
    children: ReactNode;
    // socketUuid: string;
    // messageListDefault: IMessage[];
    // modelType: string;
}

export const ClientsDataProvider = ({
    children,
}: ClientsDataProviderProps) => {
    const [userPersonalData, setUserPersonalData] = useState<IUserPersonalData>(mockUserPeraonalData)
    const [accountsList, setAccountsList] = useState<string[]>([])
    const [currentClientId, setCurrentClientId] = useState(storage.getClientId() ? storage.getClientId() : '');
    const [currentAccountId, setCurrentAccountId] = useState('');
    const [accountData, setAccountData] = useState<IAccountAllData[]>([])
    const [accountOperationsData, setAccountOperationsData] = useState<IOperationData>(mockOperationaData)
    const [accountPredict, setAccountPredict] = useState<IPredictData>(mockPredict)


    useEffect(() => {
        const fetchUserPersonalData = async () => {
            if (currentClientId !== '') {
                try {
                    let response = await ApiClients.getUserData(currentClientId);
                    if(response.data.acc.length > 0){
                        setUserPersonalData(response.data.user[0]);
                        setAccountsList(response.data.acc.map((accData: IAccUserId) => accData.npo_account_id));
                        setCurrentAccountId(response.data.acc[0].npo_account_id)
                        storage.setClientId(currentClientId)
                    }
                } catch (error) {
                    console.log(error);
                    return toast({
                        title: "Клиента с таким id нет в базе данных",
                        variant: "destructive",
                    });
                } 
            }

        };

        fetchUserPersonalData();

    }, [currentClientId]);

    useEffect(() => {
        const fetchCurrentAccData = async () => {
            if (currentAccountId !== '') {
                try {
                    let response = await ApiClients.getAccountAllData(currentAccountId);
                    setAccountData(response.data);
                } catch (error) {
                    console.log(error);
                }
            }

        };

        const fetchCurrentAccOperationsData= async () => {
            if (currentAccountId !== '') {
                try {
                    let response = await ApiClients.getAccountOperationData(currentAccountId);
                    setAccountOperationsData(response.data);
                } catch (error) {
                    console.log(error);
                }
            }

        };

        const fetchCurrentAccPredict= async () => {
            if (currentAccountId !== '') {
                try {
                    let response = await ApiClients.getAccountPredict(currentAccountId);
                    setAccountPredict(response.data[0]);
                } catch (error) {
                    console.log(error);
                }
            }

        };

        fetchCurrentAccData();
        fetchCurrentAccOperationsData();
        fetchCurrentAccPredict();

    }, [currentAccountId]);

    return (
        <ClientDataContext.Provider
            value={[userPersonalData, setUserPersonalData, currentClientId, setCurrentClientId, accountsList, setAccountsList,
                currentAccountId, setCurrentAccountId, accountData, setAccountData, accountOperationsData, setAccountOperationsData,
                accountPredict, setAccountPredict
            ]}
        >
            {children}
        </ClientDataContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useClientsData() {
    return useContext(ClientDataContext);
}
