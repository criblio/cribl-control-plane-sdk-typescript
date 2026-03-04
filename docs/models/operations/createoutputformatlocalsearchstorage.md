# CreateOutputFormatLocalSearchStorage

Data format to use when sending data. Defaults to JSON Compact.

## Example Usage

```typescript
import { CreateOutputFormatLocalSearchStorage } from "cribl-control-plane/models/operations";

let value: CreateOutputFormatLocalSearchStorage = "json-each-row";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"json-compact-each-row-with-names" | "json-each-row" | Unrecognized<string>
```