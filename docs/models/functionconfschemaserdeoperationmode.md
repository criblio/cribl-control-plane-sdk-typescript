# FunctionConfSchemaSerdeOperationMode

Extract creates new fields. Reserialize extracts and filters fields, and then reserializes.

## Example Usage

```typescript
import { FunctionConfSchemaSerdeOperationMode } from "cribl-control-plane/models";

let value: FunctionConfSchemaSerdeOperationMode = "extract";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"extract" | "reserialize" | Unrecognized<string>
```