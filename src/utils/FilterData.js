export function filterData(searchText, allRestaurant) {
  return allRestaurant?.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
