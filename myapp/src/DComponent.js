import React, { useContext } from 'react';
import DataContext from './DataContext';

function DComponent() {
    const sharedData = useContext
    (DataContext);
  return (
    <div>
      DComponent
      <p>property recived : {sharedData}</p>
    </div>
  );
};

export default DComponent;
