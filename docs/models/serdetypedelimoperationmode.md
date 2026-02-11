# SerdeTypeDelimOperationMode

Extract creates new fields. Reserialize extracts and filters fields, and then reserializes.

## Example Usage

```typescript
import { SerdeTypeDelimOperationMode } from "cribl-control-plane/models";

let value: SerdeTypeDelimOperationMode = "reserialize";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"extract" | "reserialize" | Unrecognized<string>
```