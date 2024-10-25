import React, { useMemo } from 'react';
import countryList from 'react-select-country-list';
import SelectInput from './SelectInput';

type CountrySelectorProps = {
    setFormData: (e:any) => void
    formData: any
}

const CountrySelector = ({setFormData, formData}: CountrySelectorProps) =>{
    const options = useMemo(() => countryList().getData(), []);
  
    return (
        <SelectInput customClass='max-w-[270px]' options={options} label={'Country*'} name='country' onChange={(e:any) => setFormData({...formData, country: e?.target.value})}/>
    ) 
  }
  
  export default CountrySelector;
