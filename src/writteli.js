import path from 'path'
import WritteliLib from 'writteli-lib'
import Showdown from 'showdown'
const Pug = require('pug')

export default class Writteli extends WritteliLib {
  constructor (...args) {
    super(...args)
    this.parser = {
      content: Showdown,
      template: Pug
    }
  }

  compile () {
    this.cms.getConfig()
    console.log(this.cms.config)
  }
}
