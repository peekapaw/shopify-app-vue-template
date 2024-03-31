import express from "express";
import { v4 as uuidv4 } from 'uuid';
import {
    createDiscountGroup,
    getDiscountGroups,
    updateRecordById,
    deleteDiscountGroup,
    getDiscountGroupsById
} from "../models/discount-group.js";
import shopify from "../shopify.js";
const router = express.Router();
router.post("/create", async (req, res) => {
    let status = 200;
    let error = null;
    try {
        const session = res.locals.shopify.session
        console.log('%c 🍚 session: ', 'font-size:12px;background-color: #7F2B82;color:#fff;', session);
        const discountGroup = req.body
        const payload = _.cloneDeep(discountGroup)
        const id = uuidv4()
        payload.id = id
        payload.shop = session.shop
        return false
        await createDiscountGroup(payload)
    } catch (e) {
        status = 500;
        error = e.message;
    }
    res.status(status).send({ success: status === 200, error });
})
router.get("/list", async (req, res) => {
    let status = 200;
    let error = null;
    let data = []
    const query = req.query
    try {
        // @ts-ignore
        data = await getDiscountGroups(query)
    } catch (e) {
        status = 500;
        error = e.message;
    }
    res.status(status).send({ success: status === 200, error, data });
})
router.get("/detail/:id", async (req, res) => {
    let status = 200;
    let error = null;
    let data = []
    const query = req.params
    try {
        // @ts-ignore
        data = await getDiscountGroupsById(query)
    } catch (e) {
        status = 500;
        error = e.message;
    }
    res.status(status).send({ success: status === 200, error, data });
})

router.post("/update", async (req, res) => {
    let status = 200;
    let error = null;
    try {
        const query = req.body
        console.log('%c 🦑 query: ', 'font-size:12px;background-color: #ED9EC7;color:#fff;', query);
        const data = await updateRecordById(query)
    } catch (e) {
        status = 500;
        error = e.message;
    }
    res.status(status).send({ success: status === 200, error });
})
router.post("/delete", async (req, res) => {
    let status = 200;
    let error = null;
    try {
        const query = req.body
        const id = query.id
        const data = await deleteDiscountGroup(id)
    } catch (e) {
        status = 500;
        error = e.message;
    }
    res.status(status).send({ success: status === 200, error });
})

router.get("/collection", async (req, res) => {
    let status = 200;
    let error = null;
    let data = []
    const query = req.params
    try {
        // @ts-ignore
         data = await shopify.api.rest.CollectionListing.all({
            session: res.locals.shopify.session,
          });
          res.status(200).send(data);

    } catch (e) {
        status = 500;
        error = e.message;
    }
    res.status(status).send({ success: status === 200, error, data });
})

export default router