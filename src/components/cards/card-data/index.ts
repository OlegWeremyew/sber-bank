import maestroLogo from '../../../assets/card-logo/maestro-logo.png';
import masterCardLogo from '../../../assets/card-logo/master-card-logo.png';
import visaLogo from '../../../assets/card-logo/visa-logo.png';
import { TypeCards } from '../types';

export const CARDS: TypeCards[] = [
  {
    id: '1-1-2-3-4-5-6-71',
    number: '4562 1122 4595 7852',
    img: masterCardLogo,
    type: 'MasterCard',
    balance: '92510',
  },
  {
    id: '1-1-2-3-4-5-6-72',
    number: '4574 1133 2295 2252',
    img: maestroLogo,
    type: 'Maestro',
    balance: '9240',
  },
  {
    id: '1-1-2-3-4-5-6-73',
    number: '4585 1144 4495 4452',
    img: visaLogo,
    type: 'Visa',
    balance: '43710',
  },
];
