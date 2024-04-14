import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { ClientDataContextType, useClientsData } from "@/context/ClientsDataProvider";

export default function SideBarAccounts() {

	const [, , , , accountsList, , 
		currentAccountId, setCurrentAccountId,]: ClientDataContextType = useClientsData();

	function handleAccClick(acc: string){
		setCurrentAccountId(acc)
	}

	return (
		<div className="h-full rounded-3xl bg-white flex flex-col min-w-[350px]">
			<div className="text-sm h-[35px] p-4 flex items-center">
				Счета клиента
			</div>
			<div className="text-[11px] h-[35px] px-4 bg-secondary-medium flex items-center mb-1">
				id счета
			</div>
			<ScrollArea className="w-100% grow">
				{accountsList.length !== 0 && (
					<>
						{accountsList.map((acc) => {
							const accId = acc.length > 34 ? acc.substring(0, 35) : acc;
							const isActive = acc === currentAccountId
							return (
								<Button
									variant="link"
									className={`${isActive && "underline"} w-full p-2 mb-1 border-b justify-start pl-10`}
									key={accId}
									onClick={() => handleAccClick(acc)}
								>
									{accId}
								</Button>
							);
						})}
					</>
				)}
			</ScrollArea>
		</div>
	);
}
