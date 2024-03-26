import db from '../db/conn.js'
export function createDiscountGroup(discountGroup) {
    return db
        .collection('discount-group')
        .insertOne(discountGroup)
        .then(result => result.insertedId)
}