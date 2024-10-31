import {useMemo} from 'react';
import countryList from 'react-select-country-list';

type CountrySelectorProps = {
    setFormData: React.Dispatch<React.SetStateAction<any>>
    formData: any
    label: string
    name: string
    formType?: string
}

const CountrySelector = ({setFormData, formData, label, name, formType}: CountrySelectorProps) =>{
    const options = useMemo(() => countryList().getData(), []);
  
    return (
        <label className={`block md:mb-0 grow min-h-[120px] ${formType === 'registration' ? 'md:max-w-[270px]' : ''}`}>
        <span className="text-white font-semibold text-sm">{label}</span>
        <select 
        name={name}
        className='block w-full mt-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
        onChange={(e:any) => setFormData({...formData, country: e.target.value})}>
            {
                options && options.map ((option : any) => {
                    return (
                        <option value={option.label} key={option.value}>{option.label}</option>
                    )
                })
            }
        </select>
      </label>    ) 
  }
  
  export default CountrySelector;


 