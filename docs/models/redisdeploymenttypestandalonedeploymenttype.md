# RedisDeploymentTypeStandaloneDeploymentType

How the Redis server is configured. Defaults to Standalone

## Example Usage

```typescript
import { RedisDeploymentTypeStandaloneDeploymentType } from "cribl-control-plane/models";

let value: RedisDeploymentTypeStandaloneDeploymentType = "cluster";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"standalone" | "cluster" | "sentinel" | Unrecognized<string>
```