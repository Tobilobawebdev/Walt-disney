import { createClient } from "next-sanity";

export const config = {
    projectId: process.env.NEXT_PUBLC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production"
};

//set up the sanity client for fetching data in the getprops page function
export const sanityClient = createClient(config);