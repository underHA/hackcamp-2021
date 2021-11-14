const { text } = require('express');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


async function detectText(fileName) {

    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */

    // Performs text detection on the local file
    try {

        const [result] = await client.textDetection(fileName);
        const detections = result.textAnnotations;
        var page = [];
        detections.forEach(text => page.push(text.description));
        var pageSpace = page[0];
        return pageSpace;
    }
    catch (e) {
        console.log(e);
        throw e;
    }
}



app.listen(8080, () => {
    console.log('listening on port 8080');
})

app.get("/", async (req, res) => {


    console.log(req.body.image);
    const data = {
        image: {
            content: Buffer.from(req.body.image, 'base64')
        }
    }


    detectText(data).then(result => {
        res.send(result);
    })

        .catch((err) => {
            res.send(err);
        })
})
