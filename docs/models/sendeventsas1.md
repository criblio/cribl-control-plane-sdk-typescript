# SendEventsAs1

## Example Usage

```typescript
import { SendEventsAs1 } from "cribl-control-plane/models";

let value: SendEventsAs1 = "udm";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"unstructured" | "udm" | Unrecognized<string>
```