# CreateOutputUDMType

Defines the specific format for UDM events sent to Google SecOps. This must match the type of UDM data being sent.

## Example Usage

```typescript
import { CreateOutputUDMType } from "cribl-control-plane/models/operations";

let value: CreateOutputUDMType = "logs";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"entities" | "logs" | Unrecognized<string>
```