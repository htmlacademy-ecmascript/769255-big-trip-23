import { render } from '../render';
import SortingView from '../view/sorting-view';
import AddEventView from '../view/add-event-view';
import EditEventView from '../view/edit-event-view';
import TripView from '../view/trip-view';
import EventView from '../view/event-view';

export default class TripPresenter {
  tripView = new TripView();

  constructor({ tripContainer, eventsModel, editEventModel, addEventModel }) {
    this.tripContainer = tripContainer;
    this.events = eventsModel.getEvents();
    this.editEvent = editEventModel.getEditEvent();
    this.addEvent = addEventModel.getAddEvent();
  }

  init() {
    render(new SortingView(), this.tripContainer);
    render(this.tripView, this.tripContainer);
    render(
      new EditEventView({ event: this.editEvent }),
      this.tripView.getElement()
    );
    render(
      new AddEventView({ event: this.addEvent }),
      this.tripView.getElement()
    );

    for (let i = 0; i < this.events.length; i++) {
      render(
        new EventView({ event: this.events[i] }),
        this.tripView.getElement()
      );
    }
  }
}
