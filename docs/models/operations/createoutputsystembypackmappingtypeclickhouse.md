# CreateOutputSystemByPackMappingTypeClickHouse

How event fields are mapped to ClickHouse columns.

## Example Usage

```typescript
import { CreateOutputSystemByPackMappingTypeClickHouse } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackMappingTypeClickHouse = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"automatic" | "custom" | Unrecognized<string>
```