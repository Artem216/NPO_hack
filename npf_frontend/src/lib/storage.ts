const storagePrefix = "npf";

const storage = {
    getClientId: () => {
        return JSON.parse(
            window.localStorage.getItem(`${storagePrefix}clientId`) as string,
        );
    },
    setClientId: (token: string) => {
        window.localStorage.setItem(
            `${storagePrefix}clientId`,
            JSON.stringify(token),
        );
    },
    clearClientId: () => {
        window.localStorage.removeItem(`${storagePrefix}clientId`);
    },
};

export default storage;
