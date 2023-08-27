import React from 'react';
import DataContext from './DataContext';
import BComponent from './BComponent';

function AComponent() {
    const Vishatnama = "herfegqeu8agfviuergcfjerafceugcvuwegvugewve";
  return (
    <div>
      <DataContext.Provider>
        <div>
        AComponent
        <BComponent/>
        </div>
      </DataContext.Provider>
    </div>
  )
}

export default AComponent;
