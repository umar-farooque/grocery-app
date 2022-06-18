import cache from "./cache";

let prefix = "cart";

const getItems = async () => {
  let data = await cache.get(prefix);
  return data ? data : null;
};

const saveStorage = async (value) => {
  let data = await cache.get(prefix);

  if (data == null) {
    let data = [];
    data.push({ value });
    cache.store(prefix, data);
  } else {
    let exist = data.filter((data) => data.value.id == value.id);
    if (exist.length) {
      console.log("exist");
      data.forEach((d) => {
        if (d.value.id == value.id) {
          d.value.count++;
        }
        return;
      });

      // console.log("-------->", data);
      cache.store(prefix, data);
      // console.log("increased");
      return;
      //   console.log("exist");
      //   ++exist[0].value.count;
      //   data = [...data, exist[0]];
      //   // data.push(exist[0]);
      //   return cache.store(prefix, data);
    }
    console.log("not exist");
    data.push({ value });
    cache.store(prefix, data);
  }
};

const incrementItem = async (value) => {
  try {
    let data = await cache.get(prefix);
    data.forEach((data) =>
      data.value.id == value.id ? ++data.value.count : data.value
    );
    return cache.store(prefix, data);
  } catch (error) {
    console.log(error);
  }
};
const decrementItem = async (value) => {
  try {
    let data = await cache.get(prefix);
    data.forEach((data) =>
      data.value.id == value.id ? --data.value.count : data.value
    );
    // console.log("------>", data);
    return cache.store(prefix, data);
  } catch (error) {
    console.log(error);
  }
};
const deleteItem = async (value) => {
  try {
    let data = await cache.get(prefix);
    // console.log("-------->", data);
    let newData = data.filter((data) => data.value.id != value.id);

    return cache.store(prefix, newData.length ? newData : null);
  } catch (error) {
    console.log(error);
  }
};

const updateQuantity = async (price, quantity, value) => {
  let data = await cache.get(prefix);
  data.forEach((data) => {
    if (data.value.id == value.id) {
      data.value.quantity = quantity;
      data.value.price = price;
    }
  });
  return cache.store(prefix, data);
};

export default {
  getItems,
  saveStorage,
  incrementItem,
  decrementItem,
  deleteItem,
  updateQuantity,
};
