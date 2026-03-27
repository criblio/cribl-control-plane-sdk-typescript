# CreateOutputSystemByPackFormatClickHouse

Data format to use when sending data to ClickHouse. Defaults to JSON Compact.

## Example Usage

```typescript
import { CreateOutputSystemByPackFormatClickHouse } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackFormatClickHouse =
  "json-compact-each-row-with-names";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"json-compact-each-row-with-names" | "json-each-row" | Unrecognized<string>
```