import { EVENT_TYPES } from "../const";

const mockOffers = [{
  type: EVENT_TYPES.TAXI,
  offers: [{
  id: '1',
  title: 'Upgrade to a business class',
  price: 120
  }]},
  {
    type: EVENT_TYPES.BUS,
    offers: [{
    id: '2',
    title: 'Upgrade',
    price: 20
    }]},
    {
      type: EVENT_TYPES.FLIGHT,
      offers: [{
      id: '3',
      title: 'Upgrade to a business class',
      price: 405
      }]}
    ]
