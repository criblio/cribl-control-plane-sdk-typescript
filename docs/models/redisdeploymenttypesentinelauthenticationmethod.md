# RedisDeploymentTypeSentinelAuthenticationMethod

Authentication method to use when connecting to Redis.

## Example Usage

```typescript
import { RedisDeploymentTypeSentinelAuthenticationMethod } from "cribl-control-plane/models";

let value: RedisDeploymentTypeSentinelAuthenticationMethod = "manual";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "manual" | "credentialsSecret" | "textSecret" | Unrecognized<string>
```