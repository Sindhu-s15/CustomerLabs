
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Drawer from './Drawer';
import { resetSegment } from '../features/segment/segmentSlice';


const SaveSegmentButton: React.FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const dispatch = useDispatch();

  const handleOpenDrawer = () => {
    dispatch(resetSegment());
    setShowDrawer(true);
  };

  return (
    <>
      <button className="save-segment-button" onClick={handleOpenDrawer}>
        Save segment
      </button>
      {showDrawer && <Drawer onClose={() => setShowDrawer(false)} />}
    </>
  );
};

export default SaveSegmentButton;
