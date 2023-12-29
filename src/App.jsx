import { Button, Input } from '@material-tailwind/react';
import React from 'react';

const App = () => {
  return (
    <div className='max-w-[1280px] w-full mx-auto my-20'>
      <Input label='User Name'/>
      <br /> <br />
      <Button className='bg-red-300'>Button</Button>
    </div>
  );
};

export default App;