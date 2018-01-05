const gql = require('../utils/api-client')

const LIST_QUERY = `
  query {
    organisation {
      sites {
        name
        slug
        createdAt
      }
    }
  }
`

const list = async () => {
  try {
    const response = await gql.request(LIST_QUERY)
    return response.organisation.sites
  } catch (e) {
    throw e.response.errors
  }
}

module.exports = {
  list
}
