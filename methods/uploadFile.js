const {google} = require('googleapis')

// Google Authentication credentials init
const auth = new google.auth.GoogleAuth({
    keyFile: "../credentials",
    scopes: ["https://www.googleapis.com/auth/drive"],
});

const uploadFile = async (fileObject, parentFolder) => {
    const bufferStream = new stream.PassThrough();
    bufferStream.end(fileObject["data"]);
    const { data } = await google
        .drive({
            version: "v3",
            auth: auth,
        })
        .files.create({
            media: {
                mimeType: fileObject["mimetype"],
                body: bufferStream,
            },
            requestBody: {
                name: fileObject["name"],
                parents: [parentFolder],
            },
        });
};

module.exports = uploadFile;