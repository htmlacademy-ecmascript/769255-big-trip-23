import { render } from '../render';
import SortingView from '../view/sorting-view';
import AddEventView from '../view/add-event-view';
import EditEventView from '../view/edit-event-view';
import TripView from '../view/trip-view';
import EventView from '../view/event-view';
import { replace } from '../framework/render';

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
    const escKeyDownHandler = (evt) => {
      if(evt.key === 'Escape'){
        evt.preventDefault();
        replaceEditToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const eventComponent = new EventView({
      event,
      onClick:  () => {
        replaceEventToEdit();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });
    const editEventComponent = new EditEventView({
      event: this.#editEvent,
      onSubmit: () => {
        replaceEditToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onClick: () => {
        replaceEditToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replaceEventToEdit() {
      replace(editEventComponent, eventComponent);
    }

    function replaceEditToEvent() {
      replace(eventComponent, editEventComponent);
    }

    render(eventComponent,this.#tripView.element);
    render(editEventComponent, this.#tripView.element);
  }

  init() {
    render(new SortingView(), this.#tripContainer);
    render(this.#tripView, this.#tripContainer);

    render(
      new AddEventView({ event: this.#addEvent }),
      this.#tripView.element
    );

    for (let i = 0; i < this.#events.length; i++) {
      this.#renderEvent(this.#events[i]);
    }
  }
}
