const contentful = require('contentful')
export const client = contentful.createClient({
    space: process.env.contentful_space,
    accessToken: process.env.contentful_accessToken,
    host: process.env.contentful_host,
    environment: process.env.contentful_environment
})
