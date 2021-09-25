const getdb = () => localStorage.getItem("cartProducts");
const saveDataToLocalDb = (id) => {
  const exits = getdb();
  let localDb = {};
  if (!exits) {
    localDb[id] = 1;
  } else {
    localDb = JSON.parse(exits);
    if (localDb[id]) {
      localDb[id] += 1;
    } else {
      localDb[id] = 1;
    }
  }
  localStorage.setItem("cartProducts", JSON.stringify(localDb));
};
const getLocalDb = () => JSON.parse(getdb());

export { saveDataToLocalDb, getLocalDb };
