import clientPromise from "@/lib/mongodb"

export async function POST(req) {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("URLShortener")
    const collection = db.collection("URLs")

    const doc = await collection.findOne({ shortUrl: body.shortUrl });
    if (doc) {
        return Response.json({ sucess: false, message: "Short URL Already Taken" })
    }
    const result = await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl
    })

    return Response.json({ shortUrl:`${process.env.NEXT_PUBLIC_HOST}${body.shortUrl}`,success: true, message: "Short URL Generated Sucessfully" })
}