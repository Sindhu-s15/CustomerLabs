
import React from 'react';
import './SchemaItem.css';
import { GoDotFill } from "react-icons/go";
import { IoRemoveOutline } from "react-icons/io5";

interface Schema {
  label: string;
  value: string;
}

interface SchemaItemProps {
  schema: Schema;
  onRemove: () => void;
}

const SchemaItem: React.FC<SchemaItemProps> = ({ schema, onRemove }) => {
    console.log(schema,'schema lost----->')
  return (
    <div className='schemagroup'>
        <GoDotFill style={{marginTop : 12}} color={schema.value == 'account_name' ? '#d24572' : '#5ddb78'} size={20}/>
    <div className="schema-item">
       
      {schema.label}
      {/* <button className="remove-schema-button" onClick={onRemove}></button> */}
      <IoRemoveOutline  size={20} color='#657a93' onClick={onRemove}/>
    </div>
    
    </div>
  );
};

export default SchemaItem;
