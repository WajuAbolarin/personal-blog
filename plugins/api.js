import Sanity from '~/helpers/api'


export default ({ app }, inject) => {
  inject('api', () => new Sanity)
}

