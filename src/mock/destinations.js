import { getRandomArrayElement } from '../utils';
import { getRandomNumber } from '../utils';

const MOCK_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';

export const mockDestinations = [
  {
    id: '1',
    description: getRandomDesciption(),
    name: 'Chamonix',
    pictures: getRandomGallery(),
  },
  {
    id: '2',
    description:
      'Amsterdam, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Amsterdam',
    pictures: getRandomGallery(),
  },
];

function getRandomDesciption() {
  const text = MOCK_TEXT;
  const list = text.split('. ');
  return getRandomArrayElement(list);
}

function getRandomImage() {
  const number = getRandomNumber(100);
  return `https://loremflickr.com/248/152?random=${number}`;
}

function getRandomGallery() {
  return Array.from({ length: getRandomNumber(10) }, () => ({
    src: getRandomImage(),
    description: getRandomDesciption(),
  }));
}
