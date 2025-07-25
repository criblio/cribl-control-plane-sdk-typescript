# OutputClickHouseFormat

Data format to use when sending data to ClickHouse. Defaults to JSON Compact.

## Example Usage

```typescript
import { OutputClickHouseFormat } from "cribl-control-plane/models";

let value: OutputClickHouseFormat = "json-compact-each-row-with-names";
```

## Values

```typescript
"json-compact-each-row-with-names" | "json-each-row"
```