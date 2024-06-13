﻿import { render } from "../render";
import EventView from "../view/event-view";
import EditEventView from "../view/edit-event-view";

export default class EventPresenter {
  #event = null;
  #editEvent = null;
  #eventComponent = null;
  #editEventComponent = null;
  #eventContainer = null;

constructor(eventContainer) {
  this.#eventContainer = eventContainer;
}

  #replaceEventToEdit() {
    replace(editEventComponent, eventComponent);
  }

  #replaceEditToEvent() {
    replace(eventComponent, editEventComponent);
  }

  #escKeyDownHandler = (evt) => {
    if(evt.key === 'Escape'){
      evt.preventDefault();
      replaceEditToEvent();
      document.removeEventListener('keydown', escKeyDownHandler);
    }
  };

  init(event) {
    this.#event = event;

    this.#eventComponent = new EventView({
      event: this.#event,
      onClick:  () => {
        this.#replaceEventToEdit();
        document.addEventListener('keydown', this.#escKeyDownHandler);
      }
    });

    this.#editEventComponent = new EditEventView({
      //event: this.#editEvent,
      event: this.#event,

      onSubmit: () => {
        this.#replaceEditToEvent();
        document.removeEventListener('keydown', this.#escKeyDownHandler);
      },
      onClick: () => {
        this.#replaceEditToEvent();
        document.removeEventListener('keydown', this.#escKeyDownHandler);
      }
    });

    render(this.#eventComponent,this.#eventContainer);
    render(this.#editEventComponent, this.#eventContainer);
  }
}