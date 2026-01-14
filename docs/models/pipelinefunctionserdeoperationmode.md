# PipelineFunctionSerdeOperationMode

Extract creates new fields. Reserialize extracts and filters fields, and then reserializes.

## Example Usage

```typescript
import { PipelineFunctionSerdeOperationMode } from "cribl-control-plane/models";

let value: PipelineFunctionSerdeOperationMode = "reserialize";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"extract" | "reserialize" | Unrecognized<string>
```