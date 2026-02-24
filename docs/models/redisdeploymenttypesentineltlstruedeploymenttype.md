# RedisDeploymentTypeSentinelTlsTrueDeploymentType

How the Redis server is configured. Defaults to Standalone

## Example Usage

```typescript
import { RedisDeploymentTypeSentinelTlsTrueDeploymentType } from "cribl-control-plane/models";

let value: RedisDeploymentTypeSentinelTlsTrueDeploymentType = "standalone";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"standalone" | "cluster" | "sentinel" | Unrecognized<string>
```