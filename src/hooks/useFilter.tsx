import { useState } from 'react';
import { FilterParams } from '@/types/Filter.ts';


export const useFilter = () => {


  const [filterParams, setFilterParams] = useState<FilterParams>({})



  const isActive = ():boolean =>{
    return !!(filterParams.genres || filterParams.year || filterParams.ratingMin || filterParams.sortBy);
  }


const onClear = () =>{
    setFilterParams(prevState => ({
      ...prevState,
      genres:undefined,
      year:undefined,
      ratingMin: undefined,
      sortBy: undefined
    }))
}






  return{
    setFilterParams,
    isActive,
    onClear,
  };
};


