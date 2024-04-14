import { useClientsData, ClientDataContextType } from "@/context/ClientsDataProvider";
import SearchBar from "@/components/widgets/SearchBar";
import AccountData from "@/components/widgets/AccountData";
import ClientGraphs from "@/components/widgets/ClientGraphs";

const ClientsData = () => {
    const [userPersonalData, setUserPersonalData, currentClientId, setCurrentClientId, accountsList, setAccountsList,
        currentAccountId, setCurrentAccountId, accountData, setAccountData, accountOperationsData, setAccountOperationsData
    ]: ClientDataContextType = useClientsData();

    return (
        <div className="mx-20 my-5">
            <SearchBar />
            <div className="flex gap-14 mt-4 bg-white rounded-3xl p-4 border">
                <div>Клиент: {currentClientId}</div>
                <div>Пол: {userPersonalData.gender === 1 ? 'Mужской' : 'Женский'}</div>
                <div>Возраст: {userPersonalData.age}</div>
            </div>
            <div className="h-[600px]">
                <AccountData />
            </div>
            <div>
                <ClientGraphs />
            </div>
        </div>
    )
}

export default ClientsData