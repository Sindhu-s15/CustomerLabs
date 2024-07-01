import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setSegmentName, removeSchema } from '../features/segment/segmentSlice';
import SchemaDropdown from './SchemaDropdown';
import SchemaItem from './SchemaItem';
import './Drawer.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdArrowBackIos } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import axios from 'axios';
import { Helmet } from 'react-helmet';


interface DrawerProps {
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const segmentName = useSelector((state: RootState) => state.segment.segmentName);
  const schemas = useSelector((state: RootState) => state.segment.schemas);

  const handleSaveSegment = () => {
    console.log(segmentName,schemas, 'logss---->');
    if(segmentName.trim().length === 0 ){
      toast.error('Please enter the name of the segment.');
      return;
    }else if (schemas.length === 0) {
      toast.error('Please add at least one schema.');
      return;
    }else if (segmentName.trim().length != 0 && schemas.length !=0)
   {
    
    const data = {
      segment_name: segmentName,
      schema: schemas,
    };

    // fetch('https://webhook.site/d6079798-3819-47ae-9b41-ec6711669451', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    //   mode: 'cors',
    //   referrerPolicy: 'no-referrer'
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //     toast.success('Segment saved successfully!');
    //     onClose();
    //   })
    //   .catch(error => {
    //     console.error('Error:', error.message);
    //     toast.error(error.message);
    //   });
    // }
    axios.post('https://webhook.site/d6079798-3819-47ae-9b41-ec6711669451', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      console.log('Success:', response.data);
      toast.success('Segment saved successfully!');
      // Close the modal or perform other actions
    })
    .catch(error => {
      console.error('Error:', error.message);
      toast.error(error.message);
    });
  };
  };

  return (
    <div className="drawer-overlay" onClick={onClose}>
       <Helmet>
        <meta name="referrer" content="no-referrer" />
      </Helmet>
      <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
        <div className='titlebg'>
          <MdArrowBackIos color='white'  onClick={onClose} className='backicon'/>
        <h2>Saving Segment</h2>
        </div>
        <div className='bodycontent'>
        <div className='titlecard'>
        <h4 className='title-input'>Enter the Name of the Segment</h4>
        <input
          type="text"
          className='segmentname-button'
          placeholder="Name of the segment"
          value={segmentName}
          onChange={e => dispatch(setSegmentName(e.target.value))}
        />
        </div>
        <div className='drawerbody'>
        <h4 className='textclr'>To save your segment, you need to add the schemas to build the query</h4>
        <div className='colorindicator'>
        <div className='doticon'> <GoDotFill size={20} color='#5ddb78'/><p className='indicatortext'> -User Traits</p></div>
        <div className='doticon'><GoDotFill size={20} color='#d24572'/><p className='indicatortext'> -Group Traits</p></div>
        </div>
        </div>
        <div className="schema-list">
          {schemas.map((schema, index) => (
            <SchemaItem key={index} schema={schema} onRemove={() => dispatch(removeSchema(schema.value))} />
          ))}
        </div>
        <SchemaDropdown />
       
        <div className='groupbtns'>
        <button className="save-button" onClick={handleSaveSegment}>Save the Segment</button>
        <button className="cancel-button" onClick={onClose}>Cancel</button>
        </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Drawer;
