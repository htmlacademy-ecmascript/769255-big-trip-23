import TripPresenter from './presenter/trip-presenter';
import { render } from './render';
import FiltersView from './view/filters-view';

const tripFiltersElement = document.querySelector('.trip-controls__filters');
const filtersView = new FiltersView();
render(filtersView, tripFiltersElement);

const tripEventsElement = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter({tripContainer: tripEventsElement});

tripPresenter.init();
