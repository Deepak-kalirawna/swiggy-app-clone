export function filterData(searchText, allRestaurant) {
  return allRestaurant.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
