import 'dotenv/config'
import Sanity from '~/helpers/api'

console.log(process.env)
export default (ctx, inject) => {
  inject('api', () => new Sanity(ctx.env.SANITY_PROJECT_ID, ctx.env.SANITY_DATA_SET ))
}

