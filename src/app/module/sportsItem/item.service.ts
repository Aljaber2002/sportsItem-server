import { ObjectId } from 'mongodb';
import { ProductModel } from './item.model';
import { TitemOptionalPayload, Tproduct, TqueryItem } from './item.type';
import { GetPropertyAsArray } from './getPropertyAsArray';

const createProductIndb = async (payload: Tproduct) => {
  payload.status = 'active';
  const mainPrice = parseInt(payload.price as string);
  const mainQuantity = parseInt(payload.quantity as string);
  //   console.log(mainPrice);
  payload.price = mainPrice;
  payload.quantity = mainQuantity;
  const createProduct = await ProductModel.create(payload);
  return createProduct;
};
const getProductsfromdbwithQuery = async (payload: TitemOptionalPayload) => {
  const {
    name,
    price,
    quantity,
    size,
    condition,
    color,
    material,
    type,
    brand,
  } = payload;
  const query: TqueryItem = {};
  const mainPrice = parseInt(price as string);
  //   console.log(mainPrice);
  if (name) {
    query.name = name;
  }
  if (price) {
    query.price = { $lte: mainPrice };
  }
  if (quantity) {
    query.quantity = quantity;
  }
  if (size) {
    query.size = size;
  }
  if (condition) {
    query.condition = condition;
  }
  if (color) {
    query.color = color;
  }
  if (material) {
    query.material = material;
  }
  if (type) {
    query.type = type;
  }
  if (brand) {
    query.brand = brand;
  }

  const getAllproducts = await ProductModel.find(query).exec();

  return getAllproducts;
};
const getAllproducts = async () => {
  const getAllproducts = await ProductModel.find({}).exec();
  return getAllproducts;
};
const updateStatusIndb = async (payload: string) => {
  const filter = { _id: new ObjectId(payload) };
  const updateDocument = { status: 'inactive' }; // Update the status field to "active"

  const updatedDoc = await ProductModel.findOneAndUpdate(
    filter,
    updateDocument,
    {
      upsert: true,
    },
  );
  //   console.log(updatedDoc);
  return updatedDoc;
};
const deleteSportsItemfromdb = async () => {
  const filter = { status: 'inactive' };
  const deletedItem = await ProductModel.deleteMany(filter);
  return deletedItem;
};
const updateProductIntodb = async (payload: TitemOptionalPayload) => {
  const {
    name,
    price,
    quantity,
    brand,
    type,
    size,
    color,
    material,
    condition,
    id,
  } = payload;

  const filter = { _id: new ObjectId(id) };
  //   console.log(filter);
  //   console.log(payload);
  const mainPrice = parseInt(price as string);
  //   console.log(mainPrice);
  const mainQuantity = parseInt(quantity as string);
  const updateDocument: TitemOptionalPayload = {}; // Update the status field to "active"
  if (name) {
    updateDocument.name = name;
  }
  if (price) {
    updateDocument.price = mainPrice;
  }
  if (quantity) {
    updateDocument.quantity = mainQuantity;
  }
  if (size) {
    updateDocument.size = size;
  }
  if (condition) {
    updateDocument.condition = condition;
  }
  if (color) {
    updateDocument.color = color;
  }
  if (material) {
    updateDocument.material = material;
  }
  if (type) {
    updateDocument.type = type;
  }
  if (brand) {
    updateDocument.brand = brand;
  }
  //   console.log(updateDocument);

  const updatedDoc = await ProductModel.findOneAndUpdate(
    filter,
    updateDocument,
    {
      upsert: true,
    },
  );
  //   console.log(updatedDoc);
  return updatedDoc;
};
const filterDocBYsearch = async (payload: TitemOptionalPayload) => {
  const { searchQuery } = payload;
  const namesOfProduct = await GetPropertyAsArray('name');
  //   const prices = await GetPropertyAsArray('price');
  const quantityList = await GetPropertyAsArray('quantity');
  const brands = await GetPropertyAsArray('brand');
  const types = await GetPropertyAsArray('type');
  const colors = await GetPropertyAsArray('color');
  const materials = await GetPropertyAsArray('material');
  const condition = await GetPropertyAsArray('condition');
  // console.log(materials);
  // console.log(searchQuery);
  const searchQueryObj: TitemOptionalPayload = {};
  if (namesOfProduct.includes(searchQuery)) {
    searchQueryObj.name = searchQuery;
    const targetedDoc = await ProductModel.find(searchQueryObj).exec();
    // console.log(targetedDoc);

    return targetedDoc;
  }

  if (quantityList.includes(searchQuery)) {
    searchQueryObj.quantity = searchQuery;
    const targetedDoc = await ProductModel.find(searchQueryObj).exec();

    return targetedDoc;
  }
  if (brands.includes(searchQuery)) {
    searchQueryObj.brand = searchQuery;
    const targetedDoc = await ProductModel.find(searchQueryObj).exec();

    return targetedDoc;
  }
  if (types.includes(searchQuery)) {
    searchQueryObj.type = searchQuery;
    const targetedDoc = await ProductModel.find(searchQueryObj).exec();

    return targetedDoc;
  }
  if (colors.includes(searchQuery)) {
    // console.log(colors.includes(searchQuery));
    searchQueryObj.color = searchQuery;
    const targetedDoc = await ProductModel.find(searchQueryObj).exec();
    // console.log(targetedDoc);

    return targetedDoc;
  }
  if (materials.includes(searchQuery)) {
    searchQueryObj.material = searchQuery;
    const targetedDoc = await ProductModel.find(searchQueryObj).exec();

    return targetedDoc;
  }
  if (materials.includes(searchQuery)) {
    searchQueryObj.material = searchQuery;
    const targetedDoc = await ProductModel.find(searchQueryObj).exec();

    return targetedDoc;
  }
  if (condition.includes(searchQuery)) {
    searchQueryObj.condition = searchQuery;
    const targetedDoc = await ProductModel.find(searchQueryObj).exec();

    return targetedDoc;
  } else if (/^-?\d*\.?\d+$/.test(searchQuery as string)) {
    const mainPrice = parseInt(searchQuery as string);
    //   searchQueryObj.price = searchQuery;
    const targetedDoc = await ProductModel.find({
      price: { $lte: mainPrice },
    }).exec();
    return targetedDoc;
  } else if (searchQuery) {
    throw new Error('no product exist');
  }
  // const targetedDoc = await ProductModel.find(searchQueryObj);

  // return targetedDoc;
};
export const sportsItemService = {
  createProductIndb,
  getAllproducts,
  updateStatusIndb,
  deleteSportsItemfromdb,
  filterDocBYsearch,
  updateProductIntodb,

  getProductsfromdbwithQuery,
};
