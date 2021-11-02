import { TextField } from "components/Input";
import SearchIcon from "components/Vectors/SearchIcon";
import { InputTextProps } from "components/Input/TextField/TextField";
import styles from './search.module.css';

const SearchInput = (props : InputTextProps) => (
  <TextField {...props} suffix={<SearchIcon className={styles.searchIcon} />} aria-label="search input" />
);

export default SearchInput