import { createContext, useContext } from "react";

const TableDataContext = createContext({
    data:[],
    insertRow: (row)=>{},
    deleteRow: (id)=>{},
    editRow: (id,row)=>{},
});

const useTableDataContext = ()=>{
    return useContext(TableDataContext);
}

export {TableDataContext,useTableDataContext};