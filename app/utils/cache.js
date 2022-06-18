import AsyncStorage from "@react-native-async-storage/async-storage";

const store = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("cache error", error);
  }
};

const get = async (key) => {
  try {
    let item = await AsyncStorage.getItem(key);
    item = JSON.parse(item);

    if (!item) return null;
    return item;
  } catch (error) {
    console.error("cache error", error);
  }
};

export default { store, get };
