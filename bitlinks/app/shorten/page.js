"use client"
import React, { useState } from 'react'
import Link from 'next/link'

function Shorten() {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                alert(data.message);
                setgenerated(shorturl);
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className='flex justify-center p-2'>
            <div className='text-black flex flex-col gap-6 p-2 items-center'>
                <h1>Generate shorter URLs</h1>
                <div className='flex flex-col gap-4 '>
                    <input value={url} className="bg-white p-2" type='text' placeholder='Enter your URL' onChange={e => { seturl(e.target.value) }} />
                    <input value={shorturl} className="bg-white p-2" type='text' placeholder='Enter your preferred URL' onChange={e => { setshorturl(e.target.value) }} />
                    <button onClick={generate} className="rounded-lg bg-black text-white px-3 py-1">Generate</button>
                </div>
                {generated && <><span>Your Link</span>
                    <Link href={generated}><code>{`http://localhost:3000/${generated}`}</code></Link></>}
            </div>
        </div>
    )
}

export default Shorten
