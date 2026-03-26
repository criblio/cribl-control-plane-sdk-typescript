# RedisAuthTypeManualDeploymentType

How the Redis server is configured. Defaults to Standalone

## Example Usage

```typescript
import { RedisAuthTypeManualDeploymentType } from "cribl-control-plane/models";

let value: RedisAuthTypeManualDeploymentType = "standalone";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"standalone" | "cluster" | "sentinel" | Unrecognized<string>
```