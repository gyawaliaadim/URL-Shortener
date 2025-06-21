import clientPromise from "@/lib/mongodb";

export async function POST(req) {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("links")
    const collection = db.collection("url")
    // console.log(`data is ${data} and doc is ${doc}`)
    console.log(body.shortUrl)
    const doc = await collection.findOne({shortUrl: body.shortUrl})
    if(doc){
        return Response.json({success: false, error: true,  message: 'URL already exists!' })
    }


    const result = await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl
    })

  
    return Response.json({ shortUrl:`${process.env.NEXT_PUBLIC_HOST}/${body.shortUrl}`,success: true, message: "Short URL Generated Sucessfully" })
}

