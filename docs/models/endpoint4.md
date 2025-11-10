# Endpoint4

## Example Usage

```typescript
import { Endpoint4 } from "cribl-control-plane/models";

let value: Endpoint4 = "cloud";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"cloud" | "activeGate" | "manual" | Unrecognized<string>
```