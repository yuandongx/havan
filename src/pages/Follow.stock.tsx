import type { TableProps } from "../components/table/_type";
import { StockTable } from "../components/table";
import { SearchInput } from "../components/table/Search";
import { Divider } from "@mui/material";
import { useState } from "react";


export default function FollowStockTable(props: TableProps) {
  const [searchValue, setSearchValue] = useState('');
  const search = (value: string) => {
    setSearchValue(value);
  }
  return (
    <>
      <SearchInput handleSearch={search} />
      <Divider />
      <StockTable {...props} />
    </>
  )
}