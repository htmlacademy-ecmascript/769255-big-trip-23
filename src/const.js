const TAXI = 'taxi';
const BUS = 'bus';
const TRAIN = 'train';
const SHIP = 'ship';
const DRIVE = 'drive';
const FLIGHT = 'flight';

const CHECK_IN = 'check-in';
const SIGHTSEEING = 'sightseeing';
const RESTAURANT = 'restaurant';

export const TRANSPORT_TYPES = {TAXI, BUS, TRAIN, SHIP, DRIVE, FLIGHT};
export const STATE_TYPES = {CHECK_IN, SIGHTSEEING, RESTAURANT};
export const EVENT_TYPES = {...TRANSPORT_TYPES, ...STATE_TYPES};
