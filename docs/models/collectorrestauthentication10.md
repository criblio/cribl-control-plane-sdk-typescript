# CollectorRestAuthentication10

Authentication method for Discover and Collect REST calls. You can specify API key–based authentication by adding the appropriate Collect headers.

## Example Usage

```typescript
import { CollectorRestAuthentication10 } from "cribl-control-plane/models";

let value: CollectorRestAuthentication10 = "oauthSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "basicSecret" | "login" | "loginSecret" | "oauth" | "oauthSecret" | "google_oauth" | "google_oauthSecret" | "hmac" | Unrecognized<string>
```