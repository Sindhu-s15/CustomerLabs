
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addSchema } from '../features/segment/segmentSlice';
import "./SchemaDropdown.css"
import { GoDotFill } from 'react-icons/go';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Option {
  label: string;
  value: string;
}

const options: Option[] = [
  { label: 'First Name', value: 'first_name', },
  { label: 'Last Name', value: 'last_name' },
  { label: 'Gender', value: 'gender' },
  { label: 'Age', value: 'age' },
  { label: 'Account Name', value: 'account_name' },
  { label: 'City', value: 'city' },
  { label: 'State', value: 'state' },
];

const SchemaDropdown: React.FC = () => {
  const dispatch = useDispatch();
  const schemas = useSelector((state: RootState) => state.segment.schemas);
  const [selectedOption, setSelectedOption] = useState('');

  const handleAddSchema = () => {
    console.log(selectedOption);
    if(selectedOption == ''){
      toast.error('Please Select Any Schema Option');
    }else{
    
    const schema = options.find(option => option.value === selectedOption);
    if (schema) {
      dispatch(addSchema(schema));
      setSelectedOption('');
    }
  }
  };

  const availableOptions = options.filter(option => !schemas.some(schema => schema.value === option.value));

  return (
    <div className='schemabody'>
    <div className="schema-dropdown">
    <GoDotFill color='#e2e4e6' size={20}/>
      <select value={selectedOption} className='dropdownfield' onChange={e => setSelectedOption(e.target.value)}>
        <option value="">Add schema to segment</option>
        {availableOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      </div>
      <a className="add-schema-button"  onClick={handleAddSchema}>+ Add new schema</a>
      <ToastContainer />
    </div>
  );
};

export default SchemaDropdown;
