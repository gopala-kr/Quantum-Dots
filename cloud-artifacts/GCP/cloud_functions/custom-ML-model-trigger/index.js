const { google } = require('googleapis');
const ml = google.ml('v1');
const projectId = 'quantum-dots-271006';

exports.getPrediction = (req, res) => {

    google.auth.getApplicationDefault( (err, authClient, projectId) => {

        res.header('Content-Type','application/json');
        res.header('Access-Control-Allow-Origin', 'https://storage.googleapis.com');
        res.header('Access-Control-Allow-Headers', 'Content-Type');

        //respond to CORS preflight requests
        if (req.method === 'OPTIONS') {
            res.status(204).send('');
            return;
        }

        if (err) {

            console.log('Authentication failed because of ', err);
            res.status(401).send('Authentication failed');
          
        } else {
          
           // create the full model name which includes the project ID
           const modelName = `projects/quantum-dots-271006/models/CalPredictor1`;
          
            const mleRequestJson = {
                'auth': authClient,
                'name': modelName,
                'resource': {'instances' : req.body.instances}
            }

            ml.projects.predict(mleRequestJson, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(400).send('Something broke, does that model exist?');
                } else {
                    res.status(200).send(JSON.stringify(result.data));
                }
            });
          }
    });
};