import { environment } from "../../environments/environment";

/** Get object with text strings used on the site. */
export const API_CONTENT = environment.apiOrigin + 'api/content';

/** Send a message from site visitor */
export const API_SEND_MSG = environment.apiOrigin + 'api/contact';

/** Get a list of completed projects (array) */
export const API_PORTFOLIO = environment.apiOrigin + 'api/portfolio';
