import Sanity from '~/helpers/api'

console.log(process.env)
export default (ctx, inject) => {
  inject('api', () => new Sanity('11y83f9z', 'production'))
}

