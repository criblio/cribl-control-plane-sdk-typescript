# HealthStatusStatus

## Example Usage

```typescript
import { HealthStatusStatus } from "cribl-control-plane/models";

let value: HealthStatusStatus = "healthy";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"healthy" | "shutting down" | "standby" | Unrecognized<string>
```