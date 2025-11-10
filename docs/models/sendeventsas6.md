# SendEventsAs6

## Example Usage

```typescript
import { SendEventsAs6 } from "cribl-control-plane/models";

let value: SendEventsAs6 = "unstructured";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"unstructured" | "udm" | Unrecognized<string>
```