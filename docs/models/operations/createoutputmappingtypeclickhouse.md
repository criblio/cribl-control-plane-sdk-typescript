# CreateOutputMappingTypeClickHouse

How event fields are mapped to ClickHouse columns.

## Example Usage

```typescript
import { CreateOutputMappingTypeClickHouse } from "cribl-control-plane/models/operations";

let value: CreateOutputMappingTypeClickHouse = "automatic";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"automatic" | "custom" | Unrecognized<string>
```