# RedisDeploymentTypeSentinelTlsTrueDeploymentType

How the Redis server is configured. Defaults to Standalone

## Example Usage

```typescript
import { RedisDeploymentTypeSentinelTlsTrueDeploymentType } from "cribl-control-plane/models";

let value: RedisDeploymentTypeSentinelTlsTrueDeploymentType = "standalone";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"standalone" | "cluster" | "sentinel" | Unrecognized<string>
```