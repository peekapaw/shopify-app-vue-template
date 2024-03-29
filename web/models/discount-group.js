import db from '../db/conn.js'
export function createDiscountGroup(discountGroup) {
    return db
        .collection('discount-group')
        .insertOne(discountGroup)
        .then(result => result.insertedId).catch(e => console.error(e))
}

export function getDiscountGroups() {
    return db
        .collection('discount-group')
        .find()
        .toArray()
        .then(result => result).catch(e => console.error(e))
}
export function updateRecordById(discountGroup) {
    return db
        .collection('discount-group')
        .updateOne({ _id: discountGroup._id }, { $set: discountGroup })
        .then(result => result).catch(e => console.error(e))
}