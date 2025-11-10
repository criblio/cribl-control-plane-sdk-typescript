# Protocol6

Protocol to use when collecting metrics

## Example Usage

```typescript
import { Protocol6 } from "cribl-control-plane/models";

let value: Protocol6 = "http";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"http" | "https" | Unrecognized<string>
```