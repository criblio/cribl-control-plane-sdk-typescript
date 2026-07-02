# CreateOutputMappingType

How event fields are mapped to columns.

## Example Usage

```typescript
import { CreateOutputMappingType } from "cribl-control-plane/models/operations";

let value: CreateOutputMappingType = "custom";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"automatic" | "custom" | Unrecognized<string>
```