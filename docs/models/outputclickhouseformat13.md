# OutputClickHouseFormat13

Data format to use when sending data to ClickHouse. Defaults to JSON Compact.

## Example Usage

```typescript
import { OutputClickHouseFormat13 } from "cribl-control-plane/models";

let value: OutputClickHouseFormat13 = "json-compact-each-row-with-names";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json-compact-each-row-with-names" | "json-each-row" | Unrecognized<string>
```