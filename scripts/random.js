import { response } from 'syncano-server'
import giphyAPI from 'giphy-api'


const giphy = giphyAPI()

giphy.random(ARGS.tag)
  .then(res => {
    response.json(res.data)
  });
