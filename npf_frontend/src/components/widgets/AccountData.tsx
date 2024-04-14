import SideBarAccounts from "../entities/SideBarAccounts"
import CardSmile from "../entities/CardSmile"
import { ClientDataContextType, useClientsData } from "@/context/ClientsDataProvider";
import CardNumber from "../entities/CardNumber";

const AccountData = () => {
    const [userPersonalData, setUserPersonalData, currentClientId, setCurrentClientId, accountsList, setAccountsList,
        currentAccountId, setCurrentAccountId, accountData, setAccountData, accountOperationsData, setAccountOperationsData,
        accountPredict, setAccountPredict
    ]: ClientDataContextType = useClientsData();

    return (
        <div className="h-full my-10 flex bg-main-dark bg-opacity-20 rounded-3xl">
            <SideBarAccounts />
            <div className="w-full">
                <div className="rounded-r-3xl px-4 pt-2">
                    Счет: {currentAccountId}
                </div>
                {accountData.length > 0 &&
                    <div className="flex gap-5 justify-around p-4 my-11">
                        <div>
                            <CardSmile prediction={accountPredict.quarterly_forecast}/>
                            {/* <CardSmile prediction={0.95}/> */}

                            <div className="my-8 text-center">
                                <span className="mr-10">Год: {accountData[0].year}</span>
                                <span>Квартал: {accountData[0].quartal}</span>
                            </div>
                        </div>
                        <div>
                            <div className="mt-[-40px] mb-5">
                                <CardNumber title={"Сумма НПО взносов в квартале"} number={String(accountData[0].pmnts_sum_per_qrtr)} />
                            </div>
                            <div>
                                <CardNumber title={"Сумма НПО взносов в году"} number={String(accountData[0].pmnts_sum_per_year)} />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default AccountData