import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar"
import { ReactElement, useCallback, useState } from "react";
import TableHoc from "../components/TableHoc";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr:DataType[] = [
  {
    user:"john due",
    amount:444999,
    discount:677,
    quantity:4,
    status:<span className="red">Processing</span>,
    action:<Link to="/admin/transaction/sjhsjhs" >Manage</Link>,

  },
  {
    user:"john due",
    amount:444999,
    discount:677,
    quantity:4,
    status:<span className="green">Shipped</span>,
    action:<Link to="/admin/transaction/sjhsjhs" >Manage</Link>,

  }
]



const Transaction = () => {

  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHoc<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Transaction",
      true
    ),
    []
  );

  return (
    <div className="admin-container">
    <AdminSidebar/>
    <main>

{
  Table()
}
    </main>

 
  </div>
  )
}

export default Transaction
