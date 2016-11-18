'use strict'

const Schema = use('Schema')

class ImagesTableSchema extends Schema {

    up () {
    this.create('images', (table) => {
      table.increments()
      table.timestamps()
      table.string('url')
      table.string('description')
      table.integer('likeCount')
    })
  }

  down () {
    this.drop('images')
  }

}

module.exports = ImagesTableSchema
