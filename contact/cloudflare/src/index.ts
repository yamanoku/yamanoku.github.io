import type { ContactEnv } from "./env";
import { handleContact } from "./handler";

export default {
  fetch(request: Request, env: ContactEnv): Promise<Response> {
    return handleContact(request, env);
  }
};
