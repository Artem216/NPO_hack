import { ILineData } from "@/models"
import LineChart from "../entities/LineChart"
import PieChart from "../entities/PieChart"
import { ClientDataContextType, useClientsData } from "@/context/ClientsDataProvider";
import { useEffect, useState } from "react";


const ClientGraphs = () => {
    const [userPersonalData, setUserPersonalData, currentClientId, setCurrentClientId, accountsList, setAccountsList,
        currentAccountId, setCurrentAccountId, accountData, setAccountData, accountOperationsData, setAccountOperationsData
    ]: ClientDataContextType = useClientsData();

    const [lineData, setLineData] = useState<ILineData | null>(null);
    const [pieData, setPieData] = useState<ILineData | null>(null);

    // const data: ILineData = {
    //     labels: ['1', '2', '3', '4'],
    //     data: [12, 4562, 97, 432]
    // }

    // const dataPie: ILineData = {
    //     labels: ['Начисление дохода', 'Поступление взносов'],
    //     data: [12, 42]
    // }

    useEffect(() => {
        if (accountData.length > 0) {
            const data: ILineData = {
                labels: accountData.map(acc => `${acc.year} Квартал ${acc.quartal}`),
                data: accountData.map(acc => acc.pmnts_sum_per_qrtr)
            }

            const dataPie: ILineData = {
                labels: ['Начисление дохода', 'Поступление взносов'],
                data: [accountOperationsData.operation_0, accountOperationsData.operation_1]
            }


            setLineData(data)
            setPieData(dataPie)
        }


    }, [accountData, currentAccountId, userPersonalData])

    return (
        <div className="flex justify-around my-20 gap-3">
            {lineData && pieData && 
                <>
                    <div className="bg-white p-4 rounded-3xl">
                        <div className="mb-5">Сумма взносов клиента по кварталам</div>
                        <div style={{ position: "relative", height: "40vh", width: "800px" }}>
                            <LineChart lineData={lineData} dataTitle={'Клиентские взносы'} />
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-3xl">
                        <div className="mb-12 text-center">Тип операции по счету клиента</div>
                        <div>
                            <PieChart lineData={pieData} dataTitle={'Тип операции'} />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default ClientGraphs