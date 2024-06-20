import { nanoid } from 'nanoid';
import { getRandomArrayElement } from '../utils';
import { TRANSPORT_TYPES } from '../const';

export const mockEvents = [
  {
    basePrice: 800,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: '1',
    isFavorite: false,
    offers: ['1'],
    type: TRANSPORT_TYPES.TAXI
  },
  {
    basePrice: 2400,
    dateFrom: '2019-08-10T22:55:56.845Z',
    dateTo: '2019-08-11T11:22:13.375Z',
    destination: '2',
    isFavorite: false,
    offers: ['1'],
    type: TRANSPORT_TYPES.FLIGHT
  },
  {
    basePrice: 12,
    dateFrom: '2019-09-10T10:55:56.845Z',
    dateTo: '2019-09-11T11:11:13.375Z',
    destination: '2',
    isFavorite: true,
    offers: ['2'],
    type: TRANSPORT_TYPES.BUS
  }
];

export function getRandomEvent() {
  return {
    id: nanoid(),
    ...getRandomArrayElement(mockEvents)};
}
