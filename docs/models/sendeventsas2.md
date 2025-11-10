# SendEventsAs2

## Example Usage

```typescript
import { SendEventsAs2 } from "cribl-control-plane/models";

let value: SendEventsAs2 = "udm";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"unstructured" | "udm" | Unrecognized<string>
```