import { MongoClient } from "mongodb";
const connectionString = process.env.ATLAS_URI || "mongodb://adminwellen:pkpadminwellen@127.0.0.1:27017";
const client = new MongoClient(connectionString, { useUnifiedTopology: true });
let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}
let db = conn.db("pkp-wholesale-price");
export default db;
