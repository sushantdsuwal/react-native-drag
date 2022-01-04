function generateRandomColor() {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

const BOX_ARRAY = [
  {
    name: 'Box 1',
    color: generateRandomColor(),
    x: 20,
    y: 20,
    height: 120,
    width: 120,
  },
  {
    name: 'Box 2',
    color: generateRandomColor(),
    x: 300,
    y: 40,
    height: 100,
    width: 100,
  },
  {
    name: 'Box 3',
    color: generateRandomColor(),
    x: 100,
    y: 300,
    height: 80,
    width: 80,
  },
  {
    name: 'Box 4',
    color: generateRandomColor(),
    x: 80,
    y: 500,
    height: 100,
    width: 100,
  },
  {
    name: 'Box 5',
    color: generateRandomColor(),
    x: 200,
    y: 200,
    height: 100,
    width: 100,
  },
  {
    name: 'Box 6',
    color: generateRandomColor(),
    x: 200,
    y: 400,
    height: 100,
    width: 100,
  },
];

export default BOX_ARRAY;
