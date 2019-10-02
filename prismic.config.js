// prismic.config.js

import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

const config = {
  baseUrl: 'https://newdevtest.cdn.prismic.io/api/v2',
  access_token: 'MC5YWXZIelJBQUFCOEFlQlp1.Nwnvv73vv70X77-9A--_vSBK77-977-977-977-9eO-_ve-_vTNG77-977-977-9FQLvv73vv73vv70M77-9GDLvv70'
}

export const initApi = req => {
  return Prismic.getApi(config.baseUrl, {
    accessToken: config.access_token,
    req: req
  })
}


export const generatePageData = (documentType, data) => {
  switch (documentType) {
    case 'homepage':
      return {
        content: data,
        slices: data.body,
      }
  }
  switch (documentType) {
    case 'product_page':
      return {
        content: data,
        slices: data.body,
      }
  }
}