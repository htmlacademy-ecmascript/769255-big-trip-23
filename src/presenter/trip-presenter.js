import { render } from '../render';
import SortingView from '../view/sorting-view';
import AddEventView from '../view/add-event-view';
import TripView from '../view/trip-view';
import EventPresenter from './event-presenter';

export default class TripPresenter {
  #tripContainer = null;
  #events = null;
  #editEvent = null;
  #addEvent = null;
  #tripView = new TripView();

  constructor({ tripContainer, eventsModel, editEventModel, addEventModel }) {
    this.#tripContainer = tripContainer;
    this.#events = eventsModel.events;
    this.#editEvent = editEventModel.editEvent;
    this.#addEvent = addEventModel.addEvent;
  }

  #renderEvent(event) {
    const eventPresenter = new EventPresenter(this.#tripView.element);
    eventPresenter.init(event);
  }

  #renderEvents() {
    for (let i = 0; i < this.#events.length; i++) {
      this.#renderEvent(this.#events[i]);
    }
  }

  #renderSort() {
    render(new SortingView(), this.#tripContainer);
  }

  #renderAddEvent() {
    render(
      new AddEventView({ event: this.#addEvent }),
      this.#tripView.element
    );
  }

  init() {
    this.#renderSort();
    render(this.#tripView, this.#tripContainer);
    this.#renderAddEvent();
    this.#renderEvents();
  }
}
