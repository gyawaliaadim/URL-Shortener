import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"


export default async function Page({ params }) {
    const shortUrl = (await params).shortURL

    const client = await clientPromise;
    const db = client.db("links")
    const collection = db.collection("url")

    const doc = await collection.findOne({shortUrl: shortUrl})
    
    console.log(doc)
    if(doc){
         redirect(doc.url)
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }
  }