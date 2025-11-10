# UDMType5

Defines the specific format for UDM events sent to Google SecOps. This must match the type of UDM data being sent.

## Example Usage

```typescript
import { UDMType5 } from "cribl-control-plane/models";

let value: UDMType5 = "entities";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"entities" | "logs" | Unrecognized<string>
```