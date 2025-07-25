# FormatClickHouse

Data format to use when sending data to ClickHouse. Defaults to JSON Compact.

## Example Usage

```typescript
import { FormatClickHouse } from "cribl-control-plane/models/operations";

let value: FormatClickHouse = "json-compact-each-row-with-names";
```

## Values

```typescript
"json-compact-each-row-with-names" | "json-each-row"
```