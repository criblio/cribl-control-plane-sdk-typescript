# FormatLocalSearchStorage

Data format to use when sending data. Defaults to JSON Compact.

## Example Usage

```typescript
import { FormatLocalSearchStorage } from "cribl-control-plane/models";

let value: FormatLocalSearchStorage = "json-each-row";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"json-compact-each-row-with-names" | "json-each-row" | Unrecognized<string>
```