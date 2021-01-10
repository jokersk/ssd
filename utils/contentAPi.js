const contentful = require('contentful')
export const client = contentful.createClient({
    space: process.env.contentfull_space,
    accessToken: process.env.contentfull_accessToken,
})