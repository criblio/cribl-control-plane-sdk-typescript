# RedisDeploymentTypeSentinelTlsFalseAuthenticationMethod

## Example Usage

```typescript
import { RedisDeploymentTypeSentinelTlsFalseAuthenticationMethod } from "cribl-control-plane/models";

let value: RedisDeploymentTypeSentinelTlsFalseAuthenticationMethod =
  "textSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "manual" | "credentialsSecret" | "textSecret" | Unrecognized<string>
```