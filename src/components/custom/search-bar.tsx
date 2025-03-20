import React from 'react'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Spinner from './spinner';

type TSearchBar = {
  value: string;
  setValue: (val: string) => void;
  isLoading: boolean;
  submit: () => void;
}

const SearchBar = ({
  value,
  setValue,
  isLoading,
  submit
}: TSearchBar) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Enter a keyword'
      />
      <Button type="submit" onClick={submit} disabled={!value}>
        Search
        {isLoading ? <Spinner /> : <></>}
      </Button>
    </div>
  )
}

export default SearchBar
