import { useEffect, useState, createContext, useContext, ReactNode } from "react";

class DataStore {
    private map = new Map<string, any>();

    public set(key: string, value: any) {
        this.map.set(key, value);
    }

    public get<T>(key: string): T {
        return this.map.get(key);
    }

    public toString() {
        return JSON.stringify(this.map);
    }
}

const defaultDataStore = new DataStore();
const DataStoreContext = createContext<DataStore>(defaultDataStore);

function DataStoreProvider({ value = defaultDataStore, children }: { value?: DataStore, children: ReactNode }) {
    return (
      <DataStoreContext.Provider value={value}>
        {children}
      </DataStoreContext.Provider>
    );
  }

const useDataStoreContext = (): DataStore => {
    const context = useContext(DataStoreContext);
    if (!context) {
      throw new Error('useDataStoreContext must be used within a DataStoreProvider');
    }
    return context;
  };

function Component1() {
    const [dataStore, setDataStore] = useState(new DataStore());
  
    return (
      <DataStoreProvider value={dataStore}>
        <h1>{`dataStore ${dataStore}!`}</h1>
        <Component2 />
      </DataStoreProvider>
    );
  }
  
  function Component2() {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 />
      </>
    );
  }
  
  function Component3() {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 />
      </>
    );
  }
  
  function Component4() {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 />
      </>
    );
  }
  
  function Component5() {
    const dataStore = useDataStoreContext();

    useEffect(() => {
        dataStore.set("currentComponent", "Component5");
    }, [dataStore]);
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`dataStore ${dataStore.toString()} again!`}</h2>
      </>
    );
  }

export default Component1;
