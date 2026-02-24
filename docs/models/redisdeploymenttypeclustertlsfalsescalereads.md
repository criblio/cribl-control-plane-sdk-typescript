# RedisDeploymentTypeClusterTlsFalseScaleReads

Which nodes read commands should be sent to

## Example Usage

```typescript
import { RedisDeploymentTypeClusterTlsFalseScaleReads } from "cribl-control-plane/models";

let value: RedisDeploymentTypeClusterTlsFalseScaleReads = "master";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"master" | "replica" | "all" | Unrecognized<string>
```