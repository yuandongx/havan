import { useEffect, useState } from "react";
import { StockTable } from "../components/table";
import { getStockList } from "../com/getStock";
import type { TableProps } from "../components/table/_type";

export default function StockShanghai() {
  const [data, setData] = useState<TableProps>({
    columns: [],
    data: [],
  })
  useEffect(() => {
    getStockList().then((res) => res.json()).then(({data}) => {
      setData({
        columns: data.columns,
        data: data.data,
      })
    })
  }, [])
  return (
    <StockTable {...data} />
  )
}