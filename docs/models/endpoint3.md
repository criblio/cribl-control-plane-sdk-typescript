# Endpoint3

## Example Usage

```typescript
import { Endpoint3 } from "cribl-control-plane/models";

let value: Endpoint3 = "activeGate";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"cloud" | "activeGate" | "manual" | Unrecognized<string>
```