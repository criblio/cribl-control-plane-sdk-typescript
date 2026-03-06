# HealthCheckCollectMethodPostWithBodyAuthentication

Authentication method for Discover and Collect REST calls. You can specify API Key–based authentication by adding the appropriate Collect headers.

## Example Usage

```typescript
import { HealthCheckCollectMethodPostWithBodyAuthentication } from "cribl-control-plane/models";

let value: HealthCheckCollectMethodPostWithBodyAuthentication = "none";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "basic" | "basicSecret" | "login" | "loginSecret" | "oauth" | "oauthSecret" | Unrecognized<string>
```