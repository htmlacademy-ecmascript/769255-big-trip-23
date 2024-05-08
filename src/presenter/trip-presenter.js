import {render} from '../render';
import SortingVew from '../view/sorting-view';
import AddEventView from '../view/add-event-view';
import EditEventView from '../view/edit-event-view';
import TripView from '../view/trip-view';
import EventView from '../view/event-view';

export default class TripPresenter {
  tripView = new TripView();

  constructor({tripContainer, eventsModel}) {
    this.tripContainer = tripContainer;
    this.eventsModel = eventsModel;
  }

  init() {
    render(new SortingVew(), this.tripContainer);
    render(this.tripView, this.tripContainer);
    render(new EditEventView(), this.tripView.getElement());
    render(new AddEventView(), this.tripView.getElement());

    for(let i = 0; i < this.eventsModel.length; i++) {
      render(new EventView({event: this.eventsModel[i]}), this.tripView.getElement());
    }
  }
}
