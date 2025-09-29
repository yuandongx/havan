import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import type { SearchInputProps } from "./_type";

export function SearchInput(props: SearchInputProps) {
    const { handleSearch } = props;
    return (
        <Paper elevation={4} sx={{ display: 'flex', alignItems: 'center' }} style={{ margin: '1px 0', padding: '2px, 0' }}>
            <InputBase placeholder="Search" onChange={(e) => handleSearch(e.target.value)}>
            </InputBase>
            <IconButton>
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}