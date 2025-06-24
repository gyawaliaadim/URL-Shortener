"use client"

import React, { useState } from 'react'
import Link from 'next/link'
const Shorten = () => {
    const [Url, setUrl] = useState("")
    const [ShortUrl, setShortUrl] = useState("")
    const [Generate, setGenerate] = useState("")


    const validateInputs = (Url, ShortUrl) => {
        if (Url.trim() === "" || ShortUrl.trim() === "") {
            return { success: false, message: "Please fill in all fields" };
        }
        if (ShortUrl.toLowerCase() !== ShortUrl) {
            return { success: false, message: "Short URL must be in lowercase" };
        }
        if (ShortUrl.length < 3) {
            return { success: false, message: "Short URL must be at least 3 characters long" };
        }
        if (!Url.startsWith("http://") && !Url.startsWith("https://")) {
            return { success: false, message: "URL must start with http:// or https://" };
        }
        if (Url.length < 5) {
            return { success: false, message: "URL must be at least 5 characters long" };
        }
        if (ShortUrl.length > 10) {
            return { success: false, message: "Short URL must be at most 10 characters long" };
        }
        if (Url.length > 100) {
            return { success: false, message: "URL must be at most 100 characters long" };
        }
        try {
            new URL(Url);
        }
        catch (error) {
            return { success: false, message: "Invalid URL format" };
        }
        if (ShortUrl.includes(" ")) {
            return { success: false, message: "Short URL cannot contain spaces" };
        }
        try {
            Url(ShortUrl);
            return { success: false, message: "Short URL invalid" };
        }
        catch (error) {
            // do nothing
        }
        if (Url.includes(" ")) {
            return { success: false, message: "URL cannot contain spaces" };
        }
        if (!Url.includes(".") || !Url.split(".")[1]) {
            return { success: false, message: "URL must contain a domain" };
        }
        return { success: true, message: "Processing" };
    };

    const handleClick = async () => {
        console.log(Url, ShortUrl);


        const validationResult = validateInputs(Url, ShortUrl);
        if (!validationResult.success) {
            setGenerate(validationResult);
            return;
        }
        let headersList = {

            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "url": Url,
            "shortUrl": ShortUrl
        });

        let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/generate`, {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        const data = await response.json();
        //    console.log(data);
        setGenerate(data)

        console.log("Data is" + Generate)
        if (data.success) {
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
                        onChange={e => setUrl(e.target.value)}
                        className='bg-white w-full h-10 rounded-full text-black p-4'
                        placeholder="Your URL"
                        type="text" />

                    <input
                        value={ShortUrl}
                        onChange={e => setShortUrl(e.target.value)}
                        className='bg-white w-full h-10 rounded-full text-black p-4' placeholder="Your Desired Short URL"
                        type="text" />

                    <button
                        onClick={handleClick}
                        className='bg-yellow-400 w-[50%] h-10 rounded-full text-black  font-bold cursor-pointer hover:bg-yellow-600'>Generate</button>
                    {
                        Generate.success ?


                            (<div className='flex justify-center items-center h-full w-full flex-col'>
                                <p className='font-bold text-2xl'>Your Short URL:</p>
                                <Link target="_blank" className="text-yellow-400" href={Generate.shortUrl}>{Generate.shortUrl} </Link></div>)
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
