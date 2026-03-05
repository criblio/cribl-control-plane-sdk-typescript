# CreateOutputFormatClickHouse

Data format to use when sending data to ClickHouse. Defaults to JSON Compact.

## Example Usage

```typescript
import { CreateOutputFormatClickHouse } from "cribl-control-plane/models/operations";

let value: CreateOutputFormatClickHouse = "json-each-row";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"json-compact-each-row-with-names" | "json-each-row" | Unrecognized<string>
```