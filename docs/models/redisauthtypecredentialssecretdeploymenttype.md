# RedisAuthTypeCredentialsSecretDeploymentType

How the Redis server is configured. Defaults to Standalone

## Example Usage

```typescript
import { RedisAuthTypeCredentialsSecretDeploymentType } from "cribl-control-plane/models";

let value: RedisAuthTypeCredentialsSecretDeploymentType = "sentinel";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"standalone" | "cluster" | "sentinel" | Unrecognized<string>
```