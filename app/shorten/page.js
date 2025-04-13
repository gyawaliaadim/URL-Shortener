"use client"

import React, {useState} from 'react'
import Link from 'next/link'
const Shorten = () => {
    const [Url, setUrl] = useState("")
    const [ShortUrl, setShortUrl] = useState("")
    const [Generate, setGenerate]=useState("")

    const handleClick = async ()=>{
        console.log(Url, ShortUrl);
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
           }
           
           let bodyContent = JSON.stringify({
             "url":Url,
             "shortUrl":ShortUrl
           });
           
           let response = await fetch("http://localhost:3000/api/generate", { 
             method: "POST",
             body: bodyContent,
             headers: headersList
           });
           
           const data = await response.json();
        //    console.log(data);
           setGenerate(data)

           console.log("Data is" +  Generate)
        if(data.success){
            setUrl("");
            setShortUrl("");
        }   

    }

    return (
        <div className="bg-[url('/background.svg')] flex justify-center items-center w-full h-[calc(100vh-10rem)]  bg-repeat bg-contain  ">
            <div className='max-w-[635px]flex flex-col justify-center items-center  bg-gray-900 p-10 rounded-4xl gap-10'>
                <h1 className='font-extrabold text-4xl text-yellow-400 mb-2 max-[575px]:text-3xl text-center'>Shorten your URLs</h1>
                <div className='flex gap-3 flex-col w-full justify-center items-center '>

                    <input value={Url}
                    onChange={e=>setUrl(e.target.value)}
                    className='bg-white w-full h-10 rounded-full text-black p-4'
                    placeholder="Your URL"
                    type="text" />

                    <input
                    value={ShortUrl}
                    onChange={e=>setShortUrl(e.target.value)}
                    className='bg-white w-full h-10 rounded-full text-black p-4' placeholder="Your Desired Short URL" 
                    type="text" />

                    <button 
                    onClick={handleClick}
                    className='bg-yellow-400 w-[50%] h-10 rounded-full text-black  font-bold cursor-pointer hover:bg-yellow-600'>Generate</button>
                    {
                        Generate.success ? 


                        (<div className='flex justify-center items-center h-full w-full flex-col'><p className='font-bold text-2xl'>Your Short URL:</p><Link target="_blank" className="text-yellow-400" href={Generate.shortUrl}>{Generate.shortUrl} </Link></div>)
                            :
                        (<div>
                            {Generate.message}
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Shorten
