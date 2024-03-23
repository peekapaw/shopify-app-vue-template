import { GraphqlQueryError } from "@shopify/shopify-api";
import shopify from "./shopify.js";

const CREATE_DRAFT_MUTATION = `
mutation draftOrderCreate($input: DraftOrderInput!) {
    draftOrderCreate(input: $input) {
      draftOrder {
        id
      }
    }
  }
`;

export default async function createDraftOrder({ session }) {
  // const client = new shopify.api.clients.Graphql({ session });
  // Session is built by the OAuth process
  const client = new shopify.api.clients.Graphql({ session });
  const data = await client.query({
    data: {
      "query": `mutation draftOrderCreate($input: DraftOrderInput!) {
      draftOrderCreate(input: $input) {
        draftOrder {
          id
        }
      }
    }`,
      "variables": {
        "input": {
          "customerId": "gid://shopify/Customer/6819787833501",
          "note": "Test draft order",
          "email": "test.user@shopify.com",
          "taxExempt": true,
          "tags": [
            "foo",
            "bar"
          ],
          "shippingLine": {
            "title": "Custom Shipping",
            "price": 4.55
          },
          "shippingAddress": {
            "address1": "123 Main St",
            "city": "Waterloo",
            "province": "Ontario",
            "country": "Canada",
            "zip": "A1A 1A1"
          },
          "billingAddress": {
            "address1": "456 Main St",
            "city": "Toronto",
            "province": "Ontario",
            "country": "Canada",
            "zip": "Z9Z 9Z9"
          },
          "appliedDiscount": {
            "description": "damaged",
            "value": 5.0,
            "amount": 5.0,
            "valueType": "FIXED_AMOUNT",
            "title": "Custom"
          },
          "lineItems": [
            {
              "title": "Custom product",
              "originalUnitPrice": 14.99,
              "quantity": 5,
              "appliedDiscount": {
                "description": "wholesale",
                "value": 5.0,
                "amount": 3.74,
                "valueType": "PERCENTAGE",
                "title": "Fancy"
              },
              "weight": {
                "value": 1,
                "unit": "KILOGRAMS"
              },
              "customAttributes": [
                {
                  "key": "color",
                  "value": "Gold"
                },
                {
                  "key": "material",
                  "value": "Plastic"
                }
              ]
            },
            {
              "variantId": "gid://shopify/ProductVariant/44163167125661",
              "quantity": 2
            }
          ],
          "customAttributes": [
            {
              "key": "name",
              "value": "Achilles"
            },
            {
              "key": "city",
              "value": "Troy"
            }
          ]
        }
      },
    },
  });
    return data


}