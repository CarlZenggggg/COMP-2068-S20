const express = require('express');
const app = express();
const https = require('https');

app.get('/', (Request, Response) => {
    https.get('https://insult.mattbas.org/api/insult', resp =>{ 
        resp.on('data', chunk => {
            Response.send(`
                <http>
                    <head><title>Oh Snap</title></head>

                    <body>
                        <h1>OH SNAP!</h1>
                        <p style="font-size: 24px; color: green;">
                            ${chunk.toString()}!
                        </p>
                    </body>
                </http>
            `);
        });
    });
});

app.listen(process.env.PORT || 3000);