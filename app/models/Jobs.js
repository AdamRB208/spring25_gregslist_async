
export class Jobs {
  constructor(data) {
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
    this.creatorId = data.creatorId
    this.id = data.id
  }
}





// const exampleDataFromAPI = {
//   "job": {
//     "company": {
//       "type": "String",
//       "required": true,
//       "maxLength": 100
//     },
//     "jobTitle": {
//       "type": "String",
//       "required": true,
//       "maxLength": 100
//     },
//     "hours": {
//       "type": "Number",
//       "required": true
//     },
//     "rate": {
//       "type": "Number",
//       "required": true
//     },
//     "description": {
//       "type": "String",
//       "maxLength": 5000
//     },
//     "creatorId": {
//       "type": "SchemaObjectId",
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
//   "note": {
//     "title": {
//       "type": "String",
//       "required": true,
//       "minLength": 3,
//       "maxLength": 15
//     },
//     "body": {
//       "type": "String",
//       "required": true,
//       "minLength": 3,
//       "maxLength": 500
//     },
//     "creatorName": {
//       "type": "String",
//       "required": true,
//       "minLength": 2,
//       "maxLength": 50
//     },
//     "color": {
//       "type": "String",
//       "required": true,
//       "validate": [null, "you must pass a valid color hexcode"
//       ]
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

// }