const { gql, default: request} = require("graphql-request");

const MASTER_URL=process.env.NEXT_PUBLIC_BACKEND_API_URL;

const GetCategory=async()=>{
        const query=gql`
        query Product {
          product(first: 100) {
            createdAt
            description
            id
            name
            price
            assetImage {
              url
            }
          }
        }
        `

        const result=await request(MASTER_URL, query)
        return result;
}

export default{
        GetCategory
}