# Protocol5

Protocol to use when collecting metrics

## Example Usage

```typescript
import { Protocol5 } from "cribl-control-plane/models";

let value: Protocol5 = "https";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"http" | "https" | Unrecognized<string>
```