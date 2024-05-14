import { mockDestinations } from '../mock/destinations';
import { mockOffers } from '../mock/offers';

export default class AddEventModel {
  offers = mockOffers[0].offers;
  destination = mockDestinations[0];

  getAddEvent() {
    return { offers: this.offers, destination: this.destination };
  }
}
