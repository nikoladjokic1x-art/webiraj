const fs = require('fs')
const path = require('path')

exports.handler = async function(event) {
  const slug = event.queryStringParameters?.slug
  if (!slug) {
    return {
      statusCode: 404,
      body: 'Prodavnica nije pronađena.'
    }
  }

  const filePath = path.join(process.cwd(), 'store', 'index.html')
  let html
  try {
    html = fs.readFileSync(filePath, 'utf8')
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Greška pri učitavanju prodavnice.'
    }
  }

  const injected = `<script>window.STORE_SLUG = ${JSON.stringify(slug)};</script>`
  const output = html.replace(/<head([^>]*)>/i, `<head$1>${injected}`)

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: output
  }
}
