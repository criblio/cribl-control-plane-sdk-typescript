# OutputResponseMappingType

How event fields are mapped to columns.

## Example Usage

```typescript
import { OutputResponseMappingType } from "cribl-control-plane/models";

let value: OutputResponseMappingType = "custom";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"automatic" | "custom" | Unrecognized<string>
```