import { memo } from 'react';
import Shopcard from './components/shopcard';
import ShopHero from './components/shopHero';

const Shop = () => {
  return (
    <div className="Shop">
      <div className='pb-[50px]'>
      <ShopHero/>
      </div>
      <Shopcard/>
    </div>
  );
};

export default memo(Shop);