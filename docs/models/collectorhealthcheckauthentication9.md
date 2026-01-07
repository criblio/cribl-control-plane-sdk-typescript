# CollectorHealthCheckAuthentication9

Authentication method for Discover and Collect REST calls. You can specify API Key–based authentication by adding the appropriate Collect headers.

## Example Usage

```typescript
import { CollectorHealthCheckAuthentication9 } from "cribl-control-plane/models";

let value: CollectorHealthCheckAuthentication9 = "basic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "basicSecret" | "login" | "loginSecret" | "oauth" | "oauthSecret" | Unrecognized<string>
```