import { AppState } from "../AppState.js"

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

  get deleteButton() {
    const user = AppState.identity

    if (user == null) {
      return ''
    }

    if (this.creatorId != user.id) {
      return ''
    }

    return `
    <button onclick="app.jobsController.deleteJob('${this.id} ${this.creatorId}')" class="btn btn-outline-danger">
        Delete Car
      </button>
    `
  }


  get card() {
    return `
    <div class="col-12">
          <div class="row bg-light shadow car-border" style="border-color: rgba(6, 94, 134, 0.66);">
            <div class="col-12">
              <div class="d-flex flex-column justify-content-between h-100">
                <div>
                  <p class="fs-3 mb-1">${this.company}</p>
                  <div class="pt-3">
                    <p>${this.jobTitle}</p>
                    <p>${this.hours}: 0</p>
                    <p>${this.rate}: $0</p>
                  </div>
                  <div class="d-flex mt-1 justify-content-between align-items-center">
                    <p class="fs-3">${this.description}</p>
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit recusandae sed sint voluptate
                    eligendi molestiae consequuntur quibusdam iusto perferendis ad!</p>
                </div>
                <div class="text-end mb-1">
                  <button class="btn btn-outline-danger">
                    ${this.deleteButton}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    `
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