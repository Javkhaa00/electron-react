const AWS = require('aws-sdk');
// const express = require('express');
// const fs = require('fs');
// const path = require('path');

const s3 = new AWS.S3({
    endpoint: 'http://192.168.1.21:31008/',
    apiVersion: "2006-03-01"
});

var bucketParams = {
    Bucket: 'ceph-bkt-ede97f14-b647-4c28-bfe1-a61f098c5fe9',
    Delimiter: '/',
    Prefix: ''
};

// Call S3 to obtain a list of the buckets
s3.listBuckets(function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data.Buckets);
    }
});

// Call S3 to obtain a list of the objects in the bucket
s3.listObjects(bucketParams, function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});

// var uploadParams = { Bucket: process.argv[2], Key: '', Body: '' };
// var file = process.argv[3];

// // Configure the file stream and obtain the upload parameters
// var fileStream = fs.createReadStream(file);
// fileStream.on('error', function (err) {
//     console.log('File Error', err);
// });
// uploadParams.Body = fileStream;
// uploadParams.Key = path.basename(file);

// // call S3 to retrieve upload file to specified bucket
// s3.upload(uploadParams, function (err, data) {
//     if (err) {
//         console.log("Error", err);
//     } if (data) {
//         console.log("Upload Success", data.Location);
//     }
// });
