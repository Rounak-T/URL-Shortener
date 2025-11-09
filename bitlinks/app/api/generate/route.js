// app/api/generate/route.js
import clientPromise from "@/lib/mongodb";

export const runtime = "nodejs";

export async function POST(req) {

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB || "bitlinks");
  const collection = db.collection("url")

  const body = await req.json()

  const doc = await collection.findOne({ shorturl: body.shorturl })
  if (doc) {
    return Response.json({ success: false, error: true, message: "URL already exist" })
  }

  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl
  })

  return new Response(JSON.stringify({ success: true, error: false, message: "URL Generated" }));
}
