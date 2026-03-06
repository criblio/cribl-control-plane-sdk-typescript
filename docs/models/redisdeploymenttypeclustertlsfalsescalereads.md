# RedisDeploymentTypeClusterTlsFalseScaleReads

Which nodes read commands should be sent to

## Example Usage

```typescript
import { RedisDeploymentTypeClusterTlsFalseScaleReads } from "cribl-control-plane/models";

let value: RedisDeploymentTypeClusterTlsFalseScaleReads = "master";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"master" | "replica" | "all" | Unrecognized<string>
```