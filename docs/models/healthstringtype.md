# HealthStringType

## Example Usage

```typescript
import { HealthStringType } from "cribl-control-plane/models";

let value: HealthStringType = "Green";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Green" | "Yellow" | "Red" | "Unknown" | Unrecognized<string>
```