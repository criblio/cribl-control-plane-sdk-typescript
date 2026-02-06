# HealthStringType

## Example Usage

```typescript
import { HealthStringType } from "cribl-control-plane/models";

let value: HealthStringType = "Green";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Green" | "Yellow" | "Red" | "Unknown" | Unrecognized<string>
```