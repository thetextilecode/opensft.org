// Filter Resources By Filters

export default (resourceList, filters) => {
  let filteredList = [...resourceList];

  for (const key in filters) {
    if (key !== 'price') {
      if (
        filters[key] === 'featured' ||
        filters[key] === 'trending' ||
        filters[key] === 'lowToHigh' ||
        filters[key] === 'highToLow'
      ) {
        if (filters[key] === 'lowToHigh') {
          filteredList = [
            ...filteredList.sort((a, b) => {
              if (a.price < b.price) return -1;
              if (a.price > b.price) return 1;
            }),
          ];
        } else {
          if (filters[key] === 'highToLow') {
            console.log('hi');
            filteredList = [
              ...filteredList.sort((a, b) => {
                if (b.price < a.price) return -1;
                if (b.price > a.price) return 1;
              }),
            ];
          } else {
            console.log('hi1');
            filteredList = filteredList.filter((item) => item[filters[key]]);
          }
        }
      } else {
        filteredList = filterByKey(filteredList, filters[key], key);
      }
    } else {
      filteredList = filterByPrice(filteredList, filters[key], key);
    }
  }
  return filteredList;
};

// Filter Resource By Price

function filterByPrice(filteredList, price, key) {
  let list = [];

  for (let index = 0; index < filteredList.length; index++) {
    const resource = filteredList[index];
    const resourcePrice = resource[key];

    if (resourcePrice >= price.min && resourcePrice <= price.max) {
      list.push(resource);
    }
  }

  return (filteredList = list);
}

// Filter Resource by key size/category/brand etc

function filterByKey(filteredList, size, key) {
  let list = [];
  if (!size || size.length === 0) return filteredList;
  for (let index = 0; index < filteredList.length; index++) {
    const resource = filteredList[index];

    if (size.indexOf != undefined) {
      const isOk = size && size.indexOf(resource[key]);
      if (isOk !== -1) {
        list.push(resource);
      }
    }
  }

  return (filteredList = list);
}
