import Location from '@/assets/svgs/contact/location.svg';
import Email from '@/assets/svgs/contact/email.svg';
import Phone from '@/assets/svgs/contact/phone.svg';

interface Info {
  icon: string;
  text: string;
  type?: 'email' | 'phone';
  alt: string;
}

const contactInfo: Info[] = [
  {
    icon: Location,
    text: '103 High Street, Girton, CB3 0QQ',
    alt: 'Address',
  },
  {
    icon: Email,
    text: 'pastor@girtonbaptistchurch.org.uk',
    type: 'email',
    alt: 'Email',
  },
  {
    icon: Phone,
    text: '+44 1223 279289',
    type: 'phone',
    alt: 'Phone',
  },
];

export default contactInfo;
