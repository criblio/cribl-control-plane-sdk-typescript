# Endpoint2

## Example Usage

```typescript
import { Endpoint2 } from "cribl-control-plane/models";

let value: Endpoint2 = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"cloud" | "activeGate" | "manual" | Unrecognized<string>
```