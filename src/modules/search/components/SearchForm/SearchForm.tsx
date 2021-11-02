import { useForm, Controller } from 'react-hook-form';
import SearchInput from 'modules/search/components/SearchInput';
import Button from 'components/Button';
import styles from './searchform.module.css';

type SearchFormType = {
  search: string;
};

const inputRules = {
  required: { value: true, message: 'Please provide a search term *' },
};

type SearchFormProps = {
  onSubmit: (formValue: SearchFormType) => void;
};

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormType>();

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit(onSubmit)} aria-label="search form">
        <Controller
          name="search"
          control={control}
          render={({ field }) => (
            <SearchInput
              {...field}
              wrapperClassName={styles.inputWrapper}
              inputClassName={styles.searchInput}
              error={errors?.search?.message}
            />
          )}
          rules={{ ...inputRules }}
        />
        <Button size="small">
            Search Github
        </Button>
    </form>
  );
};

export default SearchForm;
