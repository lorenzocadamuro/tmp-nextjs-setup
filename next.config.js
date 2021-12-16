const content = require('./content.json')

const pages = {
  "homepage": '/',
  "blog": '/blog',
  "post": '/post',
}

const translateType = (type) => {
  const page = pages?.[type]

  if (!page) {
    throw new Error(`Type ${type} not found.`)
  }

  return page
}

module.exports = {
  reactStrictMode: true,
  exportPathMap: async function () {
    return content.reduce((pages, props) => {
      try {
        const page = translateType(props.type)

        return {
          ...pages,
          [props.slug]: { page, query: props }
        }
      } catch (error) {
        console.log('\x1b[31m', `An error occurred: ${error}`)

        process.exit()
      }
    }, {})
  },
}
