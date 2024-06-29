import { useState } from "react";

export function BlogCard() {
    return (
        <>
            <BlogTitle  intialTitle="Samsnun 20"  />
            <BlogTitle intialTitle="iPhone 21" />
            <BlogTitle intialTitle="Xiaomi X" />
        </>
    )
}


function BlogTitle({intialTitle = ""}) {

    const [title, setTitle] = useState(intialTitle)


    function handleInputChange(event) {
        setTitle(event.target.value)

        
    }

    return (
        <div>
        <h1>{title}</h1>
        <input value={title} onChange={handleInputChange}/>
        </div>

    )
}








