import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ClientDataContextType, useClientsData } from "@/context/ClientsDataProvider";
import storage from "@/lib/storage";

export default function SearchBar() {
  const [userPersonalData, setUserPersonalData, currentClientId, setCurrentClientId, accountsList, setAccountsList,
    currentAccountId, setCurrentAccountId, accountData, setAccountData, accountOperationsData, setAccountOperationsData,
    accountPredict, setAccountPredict
]: ClientDataContextType = useClientsData();

  const [searchValue, setSearchValue] = useState(storage.getClientId() ? storage.getClientId() : '');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };


  function handleSearchButton() {
    setCurrentClientId(searchValue)
  }

  return (
    <div className="flex justify-between">
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[75%] lg:w-[90%]"
        value={searchValue}
        onChange={handleInputChange}
      />
      <Button onClick={handleSearchButton}>
        Найти
      </Button>
    </div>
  )
}