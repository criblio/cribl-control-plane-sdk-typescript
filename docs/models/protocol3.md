# Protocol3

Protocol to use when collecting metrics

## Example Usage

```typescript
import { Protocol3 } from "cribl-control-plane/models";

let value: Protocol3 = "https";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"http" | "https" | Unrecognized<string>
```