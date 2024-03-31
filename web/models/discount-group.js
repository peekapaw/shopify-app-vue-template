import db from '../db/conn.js'
import { ObjectId } from "mongodb";
import _ from 'lodash'
export function createDiscountGroup(discountGroup) {
  return db
    .collection('discount-group')
    .insertOne(discountGroup)
    .then(result => result.insertedId).catch(e => console.error(e))
}

export function getDiscountGroups(params) {
  const query = {};
  if (params && params.customerTag) {
    query.customerTag = params.customerTag;
  }
  return db
    .collection('discount-group')
    .find(query)
    .toArray()
    .then(result => result).catch(e => console.error(e));
}
export function getDiscountGroupsById(params) {
  const query = {};
  if (params && params.customerTag) {
    query.id = params.id;
  }
  return db
    .collection('discount-group')
    .findOne(query)
    .then(result => result).catch(e => console.error(e));
}

export async function updateRecordById(discountGroup) {
  if (!discountGroup || !discountGroup.id) {
    throw new Error('Invalid discount group data: ' + JSON.stringify(discountGroup));
  }
  const payload = _.omit(discountGroup, ['id']);
  const result = await db
    .collection('discount-group')
    .updateOne({ id: discountGroup.id }, { $set: payload });
  return result.modifiedCount > 0 ? discountGroup : null;
}

// delete collection
export async function deleteDiscountGroup(id) {
  if (typeof id !== 'string') {
    throw new Error('Invalid id type: ' + id);
  }
  const result = await db
    .collection('discount-group')
    .deleteOne({ id });
  if (result.deletedCount === 0) {
    throw new Error('Document not found with id: ' + id);
  }
  return true;
}


