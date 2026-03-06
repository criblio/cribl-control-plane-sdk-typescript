# RedisAuthTypeNoneDeploymentType

How the Redis server is configured. Defaults to Standalone

## Example Usage

```typescript
import { RedisAuthTypeNoneDeploymentType } from "cribl-control-plane/models";

let value: RedisAuthTypeNoneDeploymentType = "standalone";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"standalone" | "cluster" | "sentinel" | Unrecognized<string>
```