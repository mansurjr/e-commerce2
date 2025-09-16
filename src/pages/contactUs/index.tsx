import { memo } from 'react';
import WelcomeTxt from './components/Welcome-txt';
import AboutUs from './components/About-us';
import ContactUsIn from './components/Contact-us';
import FotterContactUs from './components/fotter-contact-us';

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <WelcomeTxt/>
      <AboutUs/>
      <ContactUsIn/>
      <FotterContactUs/>
    </div>
  );
};

export default memo(ContactUs);