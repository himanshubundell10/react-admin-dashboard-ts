import { Column } from "react-table";
import TableHOC from "./TableHoc";


interface DataTypes{
    id:string;
    quantity:number;
    discount:number;
    amount:number;
    status:string;
}

const columns:Column<DataTypes>[] = [
    {
        Header: "ID",
        accessor: "id",
    },
    {
        Header: "Quantity",
        accessor: "quantity",
    },
    {
        Header: "Discount",
        accessor: "discount",
    },
    {
        Header: "Amount",
        accessor: "amount",
    },
    {
        Header: "Status",
        accessor: "status",
    },
]

const DashboardTable = ({data=[]}:{data:DataTypes[]}) => {

    return (
        TableHOC<DataTypes>(columns, data, "transaction-box", "Top Transaction")()
    )
}

export default DashboardTable
