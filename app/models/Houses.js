

export class Houses {
  constructor(data) {
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.id = data.id
  }

}




// const exampleDataFromAPI = {
//   "house": {
//     "bedrooms": {
//       "type": "Number",
//       "required": true
//     },
//     "bathrooms": {
//       "type": "Number",
//       "required": true
//     },
//     "levels": {
//       "type": "Number",
//       "required": true
//     },
//     "imgUrl": {
//       "type": "String",
//       "maxLength": 500
//     },
//     "year": {
//       "type": "Number",
//       "required": true
//     },
//     "price": {
//       "type": "Number",
//       "required": true
//     },
//     "description": {
//       "type": "String",
//       "maxLength": 5000
//     },
//     "creatorId": {
//       "type": "SchemaObjectId",
//       "required": true,
//       "ref": "Account"
//     },
//     "creator": {
//       "path": "creator",
//       "getters": [],
//       "setters": [null],
//       "options": {
//         "justOne": true,
//         "foreignField": "_id",
//         "localField": "creatorId",
//         "ref": "Account"
//       },
//       "virtual": true
//     },
//     "id": {
//       "path": "id",
//       "getters": [null],
//       "setters": [],
//       "options": {

//       },
//       "virtual": true
//     },
//     "timestamps": true
//   },
//   "image": {
//     "id": {
//       "type": "String"
//     },
//     "collection": {
//       "type": "String",
//       "enum": [
//         "morning",
//         "noon",
//         "night",
//         "cats"
//       ]
//     },
//     "slug": {
//       "type": "String"
//     },
//     "height": {
//       "type": "Number",
//       "comments": "Y Dimension of the raw image"
//     },
//     "width": {
//       "type": "Number",
//       "comments": "X Dimension of the raw image"
//     },
//     "originalLink": {
//       "type": "String",
//       "comments": "URL linking back to the original image unsplash page"
//     },
//     "imgUrls": {
//       "raw": {
//         "type": "String",
//         "comments": "Full resolution image ⚠️Can sometimes be upwards of 8k"
//       },
//       "full": {
//         "type": "String",
//         "comments": "Large Ultra HD resolution image"
//       },
//       "regular": {
//         "type": "String"
//       },
//       "small": {
//         "type": "String"
//       },
//       "thumb": {
//         "type": "String",
//         "comments": "Much smaller image, good for previews"
//       },
//       "small_s3": {
//         "type": "String",
//         "comments": "URL to download a smaller version of the image"
//       }
//     },
//     "description": {
//       "type": "String"
//     },
//     "altDescription": {
//       "type": "String",
//       "comments": "Description for \"alt\" attribute if used in img element"
//     },
//     "attribution": {
//       "type": "String",
//       "comments": "Author or source of image"
//     },
//     "color": {
//       "type": "String",
//       "comments": "Average color of image"
//     },
//     "comments": [
//       "Images will pull a random image from Unsplash, using the time of day to find and appropriate \u003Ci\u003Einspiring\u003C/i\u003E image.",
//       "\u003Ckbd\u003Ecollection\u003C/kbd\u003E can be queried for a specific collection ignoring the time of day, or \u003Ckbd\u003Ehour\u003C/kbd\u003E can be passed to always get a specific hour.",
//       "\u003Cb\u003Ecats\u003C/b\u003E is an extra collection that can only be accessed by a query."
//     ]
//   },

// }