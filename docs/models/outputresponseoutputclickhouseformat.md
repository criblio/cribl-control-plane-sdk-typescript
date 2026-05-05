# OutputResponseOutputClickHouseFormat

Data format to use when sending data to ClickHouse. Defaults to JSON Compact.

## Example Usage

```typescript
import { OutputResponseOutputClickHouseFormat } from "cribl-control-plane/models";

let value: OutputResponseOutputClickHouseFormat = "json-each-row";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"json-compact-each-row-with-names" | "json-each-row" | Unrecognized<string>
```