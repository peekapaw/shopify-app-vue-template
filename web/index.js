// @ts-check
import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import serveStatic from "serve-static";
import _ from "lodash";
import shopify from "./shopify.js";
import productCreator from "./product-creator.js";
import createDraftOrder from "./discount-creator.js";
import GDPRWebhookHandlers from "./gdpr.js";
import { v4 as uuidv4 } from 'uuid';
import {
  createDiscountGroup,
  getDiscountGroups,
  updateRecordById,
  deleteDiscountGroup,
  getDiscountGroupsById
} from "./models/discount-group.js";
const PORT = parseInt(
  process.env.BACKEND_PORT || process.env.PORT || "3000",
  10
);

const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`;

const app = express();

// Set up Shopify authentication and webhook handling
app.get(shopify.config.auth.path, shopify.auth.begin());
app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(),
  shopify.redirectToShopifyOrAppRoot()
);
app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers })
);

// If you are adding routes outside of the /api path, remember to
// also add a proxy rule for them in web/frontend/vite.config.js

app.use("/api/*", shopify.validateAuthenticatedSession());

app.use(express.json());

app.get("/api/products/count", async (_req, res) => {
  const countData = await shopify.api.rest.Product.count({
    session: res.locals.shopify.session,
  });
  res.status(200).send(countData);
});

app.get("/api/products/create", async (_req, res) => {
  let status = 200;
  let error = null;

  try {
    await productCreator(res.locals.shopify.session);
  } catch (e) {
    console.log(`Failed to process products/create: ${e.message}`);
    status = 500;
    error = e.message;
  }
  res.status(status).send({ success: status === 200, error });
});
app.post("/api/discount-groups/create", async (req, res) => {
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
app.get("/api/discount-groups/list", async (req, res) => {
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
app.get("/api/discount-groups/detail/:id", async (req, res) => {
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

app.post("/api/discount-groups/update", async (req, res) => {
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
app.post("/api/discount-groups/delete", async (req, res) => {
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
app.get("/api/draftorder/create", async (_req, res) => {
  let status = 200;
  let error = null;
  try {
    const draftOrderData = await createDraftOrder({ session: res.locals.shopify.session })
  } catch (e) {
    status = 500;
    error = e.message;
  }
  res.status(status).send({ success: status === 200, error });

})
app.use(shopify.cspHeaders());
app.use(serveStatic(STATIC_PATH, { index: false }));

app.use("/*", shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
  return res
    .status(200)
    .set("Content-Type", "text/html")
    .send(readFileSync(join(STATIC_PATH, "index.html")));
});

app.listen(PORT);
