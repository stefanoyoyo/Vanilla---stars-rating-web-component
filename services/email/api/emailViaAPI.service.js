export default class EmailViaAPI {

  api_config = `{
    "host": "https://api.sendgrid.com/v3/",
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
            "email":"john.doe@example.com",
            "name":"John Doe"
          }
        ],
        "subject":"Hello, World!"
      }],
        "content": [
          {
            "type": "text/plain", 
            "value": "Heya!"
          }
        ],
        "from": {
          "email":"sam.smith@example.com",
          "name":"Sam Smith"
        },
        "reply_to": {
          "email":"sam.smith@example.com",
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
      this.API_CONFIG.url, 
      this.API_CONFIG.headers,
      this.API_CONFIG.data
    );
  }

  // Example POST method implementation:
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  async postData(url = '', headers = {}, data = {}) {
    // Default options are marked with *
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