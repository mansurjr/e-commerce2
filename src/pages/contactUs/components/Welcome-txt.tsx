import { memo } from 'react';

const WelcomeTxt = () => {
  return (
    <div className="WelcomeTxt container py-4">
      <h2 className='text-[45px] font-bold py-4'>We believe in sustainable <br />decor. We’re passionate about <br />life at home.</h2>
      <p>Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which <br />can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations,<br />faithful to the shapes of each period, with a touch of the present</p>
    </div>
  );
};

export default memo(WelcomeTxt);