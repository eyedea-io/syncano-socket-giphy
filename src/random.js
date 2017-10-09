import giphyAPI from 'giphy-api'
import Syncano from 'syncano-server'

export default (ctx) => {
  const {response} = Syncano(ctx)
  const giphy = giphyAPI()

  return giphy.random(ctx.args.tag)
    .then(res => {
      return response.json(res.data)
    })
    .catch(err => {
      return response.json({message: err.message})
    })
}
