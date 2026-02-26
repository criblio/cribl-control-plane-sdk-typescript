# HealthServerStatusStatus

## Example Usage

```typescript
import { HealthServerStatusStatus } from "cribl-control-plane/models";

let value: HealthServerStatusStatus = "standby";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"shutting down" | "healthy" | "standby" | Unrecognized<string>
```