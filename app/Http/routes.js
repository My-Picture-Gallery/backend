'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/images', 'ImageController.showGallery'); 
Route.post('/images', 'ImageController.create'); 

Route.get('/image/:id', 'ImageController.showImageById'); 
Route.put('/image/:id/likeCount', 'ImageController.updateLikeCount'); 