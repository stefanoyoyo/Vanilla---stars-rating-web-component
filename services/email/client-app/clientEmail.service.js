export default class EmailViaClientApp {

  send(mailto,subject, body) {
    const email = `mailto:${mailto}?subject=${subject}&body=${body}`;
    window.open(email);
  }

}