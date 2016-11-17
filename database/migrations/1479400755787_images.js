'use strict'

const Schema = use('Schema')

class ImagesTableSchema extends Schema {

  up () {
    this.table('images', (table) => {
      table.increments()
      table.string('name')
      table.string('url')
      table.integer('likeCount')
    })
  }

  down () {
    this.table('images', (table) => {
      this.drop('images')
    })
  }

}

module.exports = ImagesTableSchema