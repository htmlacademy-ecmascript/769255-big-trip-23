import { render } from '../render';
import EventView from '../view/event-view';
import EditEventView from '../view/edit-event-view';
import { remove, replace } from '../framework/render';

export default class EventPresenter {
  #event = null;
  #editEvent = null;
  #eventComponent = null;
  #editEventComponent = null;
  #eventContainer = null;

  constructor(eventContainer) {
    this.#eventContainer = eventContainer;
  }

  init(event) {
    this.#event = event;

    const prevEventComponent = this.#eventComponent;
    const prevEditEvenComponent = this.#editEventComponent;

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

    if(prevEventComponent === null || prevEditEvenComponent === null) {
      render(this.#eventComponent,this.#eventContainer);
      render(this.#editEventComponent, this.#eventContainer);
    }

    if(this.#eventContainer.contains(prevEventComponent.element)){
      replace(this.#eventComponent, prevEventComponent);
    }

    if(this.#eventContainer.contains(prevEditEvenComponent.element)){
      replace(this.#editEventComponent, prevEventComponent)
    }

    // render(this.#eventComponent,this.#eventContainer);
    // render(this.#editEventComponent, this.#eventContainer);

    remove(prevEventComponent);
    remove(prevEditEvenComponent);
  }

  destroy() {
    remove(this.#eventComponent);
    remove(this.#editEventComponent);
  }

  #replaceEventToEdit() {
    replace(this.#editEventComponent, this.#eventComponent);
  }

  #replaceEditToEvent() {
    replace(this.#eventComponent, this.#editEventComponent);
  }

  #escKeyDownHandler = (evt) => {
    if(evt.key === 'Escape'){
      evt.preventDefault();
      this.#replaceEditToEvent();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };
}
