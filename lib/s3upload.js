// File is for command-line testing
// uploading files to AWS S3

require('dotenv').config()
// Require AWS Software Development Kit
const AWS = require('aws-sdk')

// Define bucket name to use
const bucket = 'photo-project'

// Create S3 Service module instance
const s3 = new AWS.S3()
// console.log(s3)

module.exports = (key, body, mimetype) => {
  // Create object of params for upload call:
  const params = {
    Bucket: bucket,
    ACL: 'public-read'
  }
  return new Promise((resolve, reject) => {
    // Add key and body params to object
    params.Key = Date.now() + '_' + key
    params.Body = body
    params.ContentType = mimetype
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
