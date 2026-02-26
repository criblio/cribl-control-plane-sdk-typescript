# RedisDeploymentTypeClusterTlsTrueAuthenticationMethod

## Example Usage

```typescript
import { RedisDeploymentTypeClusterTlsTrueAuthenticationMethod } from "cribl-control-plane/models";

let value: RedisDeploymentTypeClusterTlsTrueAuthenticationMethod =
  "credentialsSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "manual" | "credentialsSecret" | "textSecret" | Unrecognized<string>
```