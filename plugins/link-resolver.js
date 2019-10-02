/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'homepage') {
    return '/'
  }

  if (doc.type === 'product_page') {
    return '/products/' + doc.uid
  }

  if (doc.type === 'erp_page') {
    return '/erp-integration/' + doc.uid
  }

  return '/not-found'
}
