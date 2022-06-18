import client from "./client";

const endPointCategory = "/category";
const endPointBeautyStore = "/beauty-store";
const endPointBakeryStore = "/bakery-store";
const endPointCleaningStore = "/cleaning-store";
const endPointSnacksStore = "/snacks-store";
const endPointDrinksStore = "/drinks-store";
const endPointGourmetStore = "/gourmet-store";
const endPointPersonalCare = "/personal-care";
const endPointBrands = "/brands";

const endPointTopSelling = "/top-selling";
const endPointDeals = "/top-deals";
const endPointSkinCare = "/skin-care";
const endPointHairCare = "/hair-care";
const endPointBakery = "/bakery";
const endPointHousehold = "/household-deals";
const endPointOrders = "/orders";

const getCategory = () => client.get(endPointCategory);

const getCategoryItem = (item) => client.get(`${endPointCategory}/${item}`);

const getBeautyStore = () => client.get(endPointBeautyStore);

const getBeautyStoreItems = (item) =>
  client.get(`${endPointBeautyStore}/${item}`);

const getBakeryStore = () => client.get(endPointBakeryStore);

const getBakeryStoreItem = (item) =>
  client.get(`${endPointBakeryStore}/${item}`);

const getCleaningStore = () => client.get(endPointCleaningStore);

const getCleaningStoreItem = (item) =>
  client.get(`${endPointCleaningStore}/${item}`);

const getSnackStore = () => client.get(`${endPointSnacksStore}`);

const getSnackStoreItem = (item) =>
  client.get(`${endPointSnacksStore}/${item}`);

const getDrinksStore = () => client.get(endPointDrinksStore);

const getDrinksStoreItem = (item) =>
  client.get(`${endPointDrinksStore}/${item}`);

const getPersonalStore = () => client.get(endPointPersonalCare);

const getPersonalStoreItem = (item) =>
  client.get(`${endPointPersonalCare}/${item}`);
const getGourmetStore = () => client.get(endPointGourmetStore);

const getGourmetStoreItem = (item) =>
  client.get(`${endPointGourmetStore}/${item}`);

const getBrands = () => client.get(endPointBrands);
const getOrders = () => client.get(endPointOrders);

//deals apis
const getTopSelling = () => client.get(`${endPointTopSelling}`);
const getTopDeals = () => client.get(`${endPointDeals}`);
const getSkinCareDeals = () => client.get(`${endPointSkinCare}`);
const getHairCareDeals = () => client.get(`${endPointHairCare}`);
const getBakeryDeals = () => client.get(`${endPointBakery}`);
const getHouseHoldDeals = () => client.get(`${endPointHousehold}`);

export default {
  getCategory,
  getCategoryItem,
  getBakeryDeals,
  getBakeryStore,
  getBakeryStoreItem,
  getBeautyStore,
  getBeautyStoreItems,
  getBrands,
  getCleaningStore,
  getCleaningStoreItem,
  getDrinksStore,
  getDrinksStore,
  getDrinksStoreItem,
  getPersonalStore,
  getPersonalStoreItem,
  getGourmetStore,
  getGourmetStoreItem,
  getSnackStore,
  getSnackStoreItem,
  getTopDeals,
  getHairCareDeals,
  getSkinCareDeals,
  getHouseHoldDeals,
  getTopSelling,
  getOrders,
};
