'use strict'

const Image = use('App/Model/Image')

class ImageController {

	* showGallery(request, response){
		response.json({ message: "showGallery method runs"})
	}

	* create(request, response){
		let data = request.only('url', 'description', 'likeCount')
		let image = yield Image.create(data)

		response.json(image)
	}

	// * showImageById(request, response){
	// 	response.json({ message: "showImageById method runs"})
	// }

	// * updateLikeCount(request, response){
	// 	response.json({ message: "updateLikeCount method runs"})
	// }

}

module.exports = ImageController
