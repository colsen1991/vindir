async function getData (payload, path, error) {
  if (payload) {
    return payload
  }

  if (process.client) {
    try {
      const response = await fetch(`/data/${path}`)
      return await response.json()
    } catch (e) {
      error(e)
    }
  }

  if (process.server) {
    return require(`../static/data/${path}`)
  }
}

export default getData
