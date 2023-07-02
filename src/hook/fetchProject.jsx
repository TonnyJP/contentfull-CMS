import React from "react";
import { createClient } from "contentful";

 const client = createClient({
        space: import.meta.env.VITE_API_KEY,
        environment: 'master',
        accessToken: import.meta.env.VITE_ACCESS_TOKEN
    })

export const useFetchProject = () => {
    const [projects, setProjects] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false)

    const getEntries = async() => {
        try {
            const entries = await client.getEntries({content_type: "projects"});
            if(entries){
                const allEntries = entries.items.map((item) => {
                    const {title, url, image} = item.fields;
                    const id = item.sys.id;
                    const img = image?.fields?.file?.url
                    return {title, url,img,id}
                })
                setProjects(allEntries)
                setIsLoading(false)
            }
        } catch (error) {
            setIsError(true);
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        getEntries()
    },[])

    return {isError, isLoading, projects}
}