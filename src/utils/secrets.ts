import { InfisicalSDK } from '@infisical/sdk'
import { validate as uuidValidate } from 'uuid'

const client = new InfisicalSDK({
//   siteUrl: "your-infisical-instance.com" // Optional, defaults to https://app.infisical.com
});

const clientId = process.env.INFISICAL_CLIENT_ID || import.meta.env.INFISICAL_CLIENT_ID;
const clientSecret = process.env.INFISICAL_CLIENT_SECRET || import.meta.env.INFISICAL_CLIENT_SECRET;
const environment = process.env.INFISICAL_ENVIRONMENT || import.meta.env.INFISICAL_ENVIRONMENT;
const projectId = process.env.INFISICAL_PROJECT_ID || import.meta.env.INFISICAL_PROJECT_ID;
const secretPath = process.env.INFISICAL_SECRET_PATH || import.meta.env.INFISICAL_SECRET_PATH;

if (!clientId || !clientSecret || !environment || !projectId) {
  throw new Error("Missing Infisical environment variables");
}

// Authenticate with Infisical
await client.auth().universalAuth.login({
  clientId,
  clientSecret,
});

// obtain formspark endpoint
const FORMSPARK_ENDPOINT = await client.secrets().getSecret({
  environment,
  projectId,
  secretPath,
  secretName: "FORMSPARK_ENDPOINT",
}).then(secret => secret.secretValue);

if (!/^https:\/\/submit-form\.com\/[a-zA-Z0-9+/_\-]{9}$/.test(FORMSPARK_ENDPOINT)) {
  throw new Error(`FORMSPARK_ENDPOINT is not a valid formspark endpoint: ${FORMSPARK_ENDPOINT} (expected format: https://submit-form.com/<9-character-id>)`);
}

// obtain botpoison public key
const BOTPOISON_PUBLIC_KEY = await client.secrets().getSecret({
  environment,
  projectId,
  secretPath,
  secretName: "BOTPOISON_PUBLIC_KEY",
}).then(secret => secret.secretValue);

if (!/^pk_/.test(BOTPOISON_PUBLIC_KEY)
 || !uuidValidate(BOTPOISON_PUBLIC_KEY.slice(3))) {
  throw new Error(`BOTPOISON_PUBLIC_KEY is not a valid botpoison public key: ${BOTPOISON_PUBLIC_KEY} (expected format: pk_<uuid>`);
}

// these values WILL BE SHIPPED TO THE CLIENT. we don't want to accidentally show the client the
// wrong secret. thats why i decided to assert their format with regex...
export const CONTACT_FORM_SECRETS = {
  FORMSPARK_ENDPOINT,
  BOTPOISON_PUBLIC_KEY,
} as const;
