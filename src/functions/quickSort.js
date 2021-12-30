function partition(items, left, right, key) {
  var pivot = items[Math.floor((right + left) / 2)][key],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i][key] < pivot) {
      i++;
    }
    while (items[j][key] > pivot) {
      j--;
    }
    if (i <= j) {
      var temp = items[i];
      items[i] = items[j];
      items[j] = temp;
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right, key) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right, key);
    if (left < index - 1) {
      quickSort(items, left, index - 1, key);
    }
    if (index < right) {
      quickSort(items, index, right, key);
    }
  }
  return items;
}

export default quickSort;
