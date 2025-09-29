
export type SearchInputProps = {
    handleSearch: (value: string) => void;
}




export interface TableColumnsType {
  title: string;
  dataIndex: string;
  key: string;
  display?: boolean;
}

export interface TableRow {
    [key: string]: any;
    value: any;
}

export  interface TableProps {
  columns: TableColumnsType[];
  data: TableRow[];
}
