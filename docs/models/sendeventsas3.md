# SendEventsAs3

## Example Usage

```typescript
import { SendEventsAs3 } from "cribl-control-plane/models";

let value: SendEventsAs3 = "unstructured";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"unstructured" | "udm" | Unrecognized<string>
```