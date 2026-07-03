# RedisDeploymentTypeStandaloneAuthenticationMethod

Authentication method to use when connecting to Redis.

## Example Usage

```typescript
import { RedisDeploymentTypeStandaloneAuthenticationMethod } from "cribl-control-plane/models";

let value: RedisDeploymentTypeStandaloneAuthenticationMethod = "textSecret";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "manual" | "credentialsSecret" | "textSecret" | Unrecognized<string>
```