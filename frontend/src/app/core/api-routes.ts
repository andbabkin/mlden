import { environment } from "../../environments/environment";

const default_prefix = environment.apiOrigin + 'api/';

/** Get object with text strings used on the site. */
export const API_CONTENT = default_prefix + 'content';

/** Send a message from site visitor */
export const API_SEND_MSG = default_prefix + 'contact';

/** Get a list of completed projects (array) */
export const API_PORTFOLIO = default_prefix + 'portfolio';

/** Get authenticated user data */
export const API_USER = default_prefix + 'user';
