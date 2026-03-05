# RedisDeploymentTypeClusterTlsTrueScaleReads

Which nodes read commands should be sent to

## Example Usage

```typescript
import { RedisDeploymentTypeClusterTlsTrueScaleReads } from "cribl-control-plane/models";

let value: RedisDeploymentTypeClusterTlsTrueScaleReads = "replica";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"master" | "replica" | "all" | Unrecognized<string>
```