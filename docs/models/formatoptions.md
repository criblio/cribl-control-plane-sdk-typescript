# FormatOptions

Data format to use when sending data to ClickHouse. Defaults to JSON Compact.

## Example Usage

```typescript
import { FormatOptions } from "cribl-control-plane/models";

let value: FormatOptions = "json-compact-each-row-with-names";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"json-compact-each-row-with-names" | "json-each-row" | Unrecognized<string>
```