# MappingTypeClickHouse

How event fields are mapped to ClickHouse columns.

## Example Usage

```typescript
import { MappingTypeClickHouse } from "cribl-control-plane/models";

let value: MappingTypeClickHouse = "custom";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"automatic" | "custom" | Unrecognized<string>
```