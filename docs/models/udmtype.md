# UDMType

Defines the specific format for UDM events sent to Google SecOps. This must match the type of UDM data being sent.

## Example Usage

```typescript
import { UDMType } from "cribl-control-plane/models";

let value: UDMType = "logs";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"entities" | "logs" | Unrecognized<string>
```