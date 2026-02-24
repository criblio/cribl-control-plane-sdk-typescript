# RedisDeploymentTypeClusterTlsTrueScaleReads

Which nodes read commands should be sent to

## Example Usage

```typescript
import { RedisDeploymentTypeClusterTlsTrueScaleReads } from "cribl-control-plane/models";

let value: RedisDeploymentTypeClusterTlsTrueScaleReads = "replica";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"master" | "replica" | "all" | Unrecognized<string>
```