

export default class Store {
    protected static fetchData<T>(key: string): T[] {
        let serialized = sessionStorage.getItem(key);

        if (serialized != null) {
            return JSON.parse(serialized);
        }

        return [];
    }


    protected static saveData<T>(key: string, data: T[]) {
        let serialized = JSON.stringify(data);
        sessionStorage.setItem(key, serialized);
    }
}
