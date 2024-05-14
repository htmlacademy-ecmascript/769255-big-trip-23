import { EVENT_TYPES } from '../const';

export const mockOffers = [
  {
    type: EVENT_TYPES.FLIGHT,
    offers: [
      {
        id: '3',
        title: 'Upgrade to a business class',
        price: 405,
      },
      {
        id: '4',
        title: 'Add meal',
        price: 17,
      },
    ],
  },
];
