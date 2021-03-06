export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=NrZDVtLvkKu3Y8qh5ANm0CyuxsmCePcU`
  const resp = await fetch(url)
  const data = await resp.json()
  const gifs = data.data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_large.url
    }
  })
  return gifs
}
