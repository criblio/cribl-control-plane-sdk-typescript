# RedisAuthTypeManualDeploymentType

How the Redis server is configured. Defaults to Standalone

## Example Usage

```typescript
import { RedisAuthTypeManualDeploymentType } from "cribl-control-plane/models";

let value: RedisAuthTypeManualDeploymentType = "standalone";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"standalone" | "cluster" | "sentinel" | Unrecognized<string>
```