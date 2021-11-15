const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors());

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

const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})

app.post("/", async (req, res) => {


    // console.log(req.body.data);

    const data = {
        image: {
            content: Buffer.from(req.body.data, 'base64')
        }
    }

    detectText(data).then(result => {
        console.log(result);
        res.send(result);
    })

        .catch((err) => {
            res.send(err);
            console.log(err);
        })
})
