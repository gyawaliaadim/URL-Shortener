import {readDatabase, writeDatabase} from "@/lib/database.js"

export async function POST(req) {
    const body = await req.json();
    let d=await readDatabase();
    const data=[...d]
    let doc=data.filter((item)=>item.shortUrl==body.shortUrl)
    // console.log(`data is ${data} and doc is ${doc}`)
    console.log(doc)
    if (doc.length > 0) {
        return Response.json({ success: false, message: "Short URL Already Taken" })
    }

    const newData = [...data,{
        url: body.url,
        shortUrl: body.shortUrl
    }]
    let parsedData=JSON.stringify(newData);
    const result= await writeDatabase(parsedData)
// 
    return Response.json({ shortUrl:`${process.env.NEXT_PUBLIC_HOST}/${body.shortUrl}`,success: true, message: "Short URL Generated Sucessfully" })
}

