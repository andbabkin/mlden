const API_ORIGIN = 'http://localhost/mlden/htdocs/api/'; // dev
//const API_ORIGIN = 'http://malachiteden.com/mlden/public/api/'; // prod 1
//const API_ORIGIN = 'http://malachiteden.com/api/'; // prod 2

/** Get object with text strings used on the site. */
export const API_CONTENT = API_ORIGIN + 'content';

/** Send a message from site visitor */
export const API_SEND_MSG = API_ORIGIN + 'contact';

/** Get a list of completed projects (array) */
export const API_PORTFOLIO = API_ORIGIN + 'portfolio';
