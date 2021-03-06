import {request} from './request'
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  }) 
}
export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.desc = itemInfo.desc
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cfans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodssCount = shopInfo.cGoods
  }
}

export class GoodsParam {
  constructor(info, rule) {
    this.image = info.image ? info.image : '';
    this.info = info.set
    this.sizes = rule.tables
  }
}