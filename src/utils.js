import dayjs from 'dayjs';

const DATE_FORMATE = 'MMM DD';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomNumber(number) {
  return Math.floor(Math.random() * number);
}

function humanizeEventDate(eventDate) {
  return eventDate ? dayjs(eventDate).format(DATE_FORMATE) : '';
}

export { getRandomArrayElement, getRandomNumber, humanizeEventDate };
