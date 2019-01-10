const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: '11y83f9z',
  dataset: 'production',
  // token: '',
  useCdn: true
})

module.exports = getData

