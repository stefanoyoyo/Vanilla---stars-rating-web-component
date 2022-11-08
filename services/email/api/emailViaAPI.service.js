export default class EmailViaAPI {

  api_config = `{
    "keyId": "dK3ieZq0RUiPs451CLChKg",
    "headers" : {
      "Authorization": "Bearer dK3ieZq0RUiPs451CLChKg",
      "Content-Type": "application/json"
    },
    "url" : "https://api.sendgrid.com/v3/mail/send",
    "data" : {
      "personalizations": [
      {
        "to":[
          {
            "email":"xcwomi@telegmail.com",
            "name":"John Doe"
          }
        ],
        "subject":"Hello, World from email API!"
      }],
        "content": [
          {
            "type": "text/plain", 
            "value": "Heya!"
          }
        ],
        "from": {
          "email":"smtp.stefano@outlook.it",
          "name":"Sam Smith"
        },
        "reply_to": {
          "email":"smtp.stefano@outlook.it",
          "name":"Sam Smith"
        }
      }
  }`;

  constructor() {
    this.API_CONFIG = JSON.parse(this.api_config);
  }  
  
  send(mailto,subject, body) {
    console.log('send email via API');
    console.log(this.API_CONFIG);
    
    this.postData(
      // this.API_CONFIG.url, 
      'http://sendgrid-nodejs-oxailstudiosnode.7e14.starter-us-west-2.openshiftapps.com',
      this.API_CONFIG.headers,
      this.API_CONFIG.data
    );
  }

  // Example POST method implementation:
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  async postData(url = '', headers = {}, data = {}) {
    // method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // url: '/v3/mail/send',
    // headers,
    // body: data
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if (header != null) headers = headers;

    return response.json(); // parses JSON response into native JavaScript objects
  }
}