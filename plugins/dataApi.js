export default function (context, inject) {
  const appId = process.env.ALGOLIA_APP_ID
  const apiKey = process.env.ALGOLIA_SEARCH_KEY

  inject('dataApi', {
      getHome
  })

  async function getHome(homeId) {
    const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
      headers: {
        'X-Algolia-API-Key': apiKey,
        'X-Algolia-Application-Id': appId,
      }
    })
    return await response.json()
  }

}
