import { mockDestinations } from '../mock/destinations';
import { mockOffers } from '../mock/offers';

export default class EditEventModel {
  offers = mockOffers[0].offers;
  destination = mockDestinations[0];

  getEditEvent() {
    return { offers: this.offers, destination: this.destination };
  }
}
