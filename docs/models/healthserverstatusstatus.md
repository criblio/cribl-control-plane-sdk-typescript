# HealthServerStatusStatus

Health state: <code>healthy</code>, <code>standby</code>, or <code>shutting down</code>.

## Example Usage

```typescript
import { HealthServerStatusStatus } from "cribl-control-plane/models";

let value: HealthServerStatusStatus = "standby";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"healthy" | "shutting down" | "standby" | Unrecognized<string>
```