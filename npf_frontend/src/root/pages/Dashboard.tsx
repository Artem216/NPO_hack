import LineChart from "@/components/entities/LineChart"
import PieChart from "@/components/entities/PieChart"
import { closeAccountsNumberData, closeAccountsQuartalData, closeAccountsYearData } from "@/constants"
import { ILineData } from "@/models"


const Dashboard = () => {

    return (
        <div className="mx-20 my-5">
            {/* <div className="text-3xl">Дашборд</div> */}
            <div className="flex justify-around my-20 gap-3">
                <div className="bg-white p-4 rounded-3xl">
                    <div className="mb-5">Процентное соотношение закрытых счетов, динамика по годам</div>
                    <div style={{ position: "relative", height: "40vh", width: "800px" }}>
                        <LineChart lineData={closeAccountsYearData} dataTitle={'Закрытые счета, %'} />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-3xl">
                    <div className="mb-12 text-center">Соотношение закрытых и действующих счетов</div>
                    <div>
                        <PieChart lineData={closeAccountsNumberData} dataTitle={'Тип счета'} />
                    </div>
                </div>
            </div>
            <div className="bg-white p-4 rounded-3xl w-[70%] h-[65vh] mx-auto mb-10">
                <div className="mb-5">Процентное соотношение закрытых счетов, динамика по кварталам</div>
                <div style={{ position: "relative", height: "60vh"}}>
                    <LineChart lineData={closeAccountsQuartalData} dataTitle={'Закрытые счета, %'} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard