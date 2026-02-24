# HealthCheckCollectMethodPostWithBodyAuthentication

Authentication method for Discover and Collect REST calls. You can specify API Key–based authentication by adding the appropriate Collect headers.

## Example Usage

```typescript
import { HealthCheckCollectMethodPostWithBodyAuthentication } from "cribl-control-plane/models";

let value: HealthCheckCollectMethodPostWithBodyAuthentication = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "basic" | "basicSecret" | "login" | "loginSecret" | "oauth" | "oauthSecret" | Unrecognized<string>
```