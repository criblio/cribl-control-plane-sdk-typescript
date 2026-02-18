# RedisDeploymentTypeClusterTlsFalseAuthenticationMethod

## Example Usage

```typescript
import { RedisDeploymentTypeClusterTlsFalseAuthenticationMethod } from "cribl-control-plane/models";

let value: RedisDeploymentTypeClusterTlsFalseAuthenticationMethod =
  "textSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "manual" | "credentialsSecret" | "textSecret" | Unrecognized<string>
```