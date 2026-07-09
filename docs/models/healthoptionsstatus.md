# HealthOptionsStatus

Overall health status of the Source or Destination.

## Example Usage

```typescript
import { HealthOptionsStatus } from "cribl-control-plane/models";

let value: HealthOptionsStatus = "Yellow";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Green" | "Red" | "Unknown" | "Yellow" | Unrecognized<string>
```