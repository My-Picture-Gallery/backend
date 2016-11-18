'use strict'

// Question : How does Image model work ? 
// It is used like a constructor to create 1 new image. 
// It is also used like a table of records to pull the whole gallery of images. 
// What gives?

const Image = use('App/Model/Image')

class ImageController {

	* showGallery(request, response){
		let gallery = yield Image.query().select("*")

		response.json(gallery)
	}

	* create(request, response){
		let data = request.only('url', 'description', 'likeCount')
		let image = yield Image.create(data)
		image.likeCount = 0; 
		let newImage = yield image.save()

		response.json(newImage)
	}

	* showImageById(request, response){
		let imageId = request.param('id')
		let image = yield Image.query().where('id', imageId)

		response.json(image)
	}

	* updateLikeCount(request, response){
		let imageId = request.param('id')
		let image = yield Image.findBy('id', imageId)

		image.likeCount += 1

		yield image.save()
		response.json(image)
	}

}

module.exports = ImageController
