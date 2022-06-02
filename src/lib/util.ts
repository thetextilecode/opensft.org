// Delete Product from List By Id
export const deleteProduct = (list, id) => {
  return list.filter((item) => item.id !== id);
  };
  
  // Find Product Index From List
  export const findProductIndex = (list, slug) => {
    return list.findIndex((item) => item.slug === slug);
  };
  export const findProductIndexById = (list, id) => {
    return list.findIndex((item) => item.id === id);
  };
