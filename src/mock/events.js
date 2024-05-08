import { getRandomArrayElement } from "../utils";
import { TRANSPORT_TYPES } from "../const";

//структура точки маршрутаы
const mockTripEvent = {
  base_price: 1200,
  date_from: "2019-07-10T22:55:56.845Z",
  date_to: "2019-07-11T11:22:13.375Z",
  destination: '1',
  is_favorite: false,
  offers: ['1'],
  type: TRANSPORT_TYPES.TAXI
}

export const mockEvents = [
  {
    base_price: 800,
    date_from: "2019-07-10T22:55:56.845Z",
    date_to: "2019-07-11T11:22:13.375Z",
    destination: '1',
    is_favorite: false,
    offers: ['1'],
    type: TRANSPORT_TYPES.TAXI
  },
  {
    base_price: 2400,
    date_from: "2019-08-10T22:55:56.845Z",
    date_to: "2019-08-11T11:22:13.375Z",
    destination: '2',
    is_favorite: false,
    offers: ['1'],
    type: TRANSPORT_TYPES.FLIGHT
  },
  {
    base_price: 12,
    date_from: "2019-09-10T10:55:56.845Z",
    date_to: "2019-09-11T11:11:13.375Z",
    destination: '2',
    is_favorite: true,
    offers: ['2'],
    type: TRANSPORT_TYPES.BUS
  }
];



export function getRandomEvent() {
  return getRandomArrayElement(mockEvents);
}
