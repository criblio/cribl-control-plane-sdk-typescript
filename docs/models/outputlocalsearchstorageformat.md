# OutputLocalSearchStorageFormat

Data format to use when sending data. Defaults to JSON Compact.

## Example Usage

```typescript
import { OutputLocalSearchStorageFormat } from "cribl-control-plane/models";

let value: OutputLocalSearchStorageFormat = "json-each-row";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json-compact-each-row-with-names" | "json-each-row" | Unrecognized<string>
```