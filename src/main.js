import { render } from './render';
import TripPresenter from './presenter/trip-presenter';
import FiltersView from './view/filters-view';
import EventsModel from './model/events-model';
import EventEditModel from './model/edit-event-model';
import AddEventModel from './model/add-event-model';

const tripFiltersElement = document.querySelector('.trip-controls__filters');
const filtersView = new FiltersView();
render(filtersView, tripFiltersElement);

const tripEventsElement = document.querySelector('.trip-events');
const eventsModel = new EventsModel();
const editEventModel = new EventEditModel();
const addEventModel = new AddEventModel();
const tripPresenter = new TripPresenter({
  tripContainer: tripEventsElement,
  eventsModel,
  editEventModel,
  addEventModel,
});

tripPresenter.init();
