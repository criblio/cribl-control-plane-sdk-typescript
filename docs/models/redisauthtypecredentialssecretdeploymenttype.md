# RedisAuthTypeCredentialsSecretDeploymentType

How the Redis server is configured. Defaults to Standalone

## Example Usage

```typescript
import { RedisAuthTypeCredentialsSecretDeploymentType } from "cribl-control-plane/models";

let value: RedisAuthTypeCredentialsSecretDeploymentType = "sentinel";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"standalone" | "cluster" | "sentinel" | Unrecognized<string>
```