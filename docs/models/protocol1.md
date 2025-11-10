# Protocol1

Protocol to use when collecting metrics

## Example Usage

```typescript
import { Protocol1 } from "cribl-control-plane/models";

let value: Protocol1 = "http";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"http" | "https" | Unrecognized<string>
```