# Endpoint

## Example Usage

```typescript
import { Endpoint } from "cribl-control-plane/models/operations";

let value: Endpoint = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"cloud" | "activeGate" | "manual" | Unrecognized<string>
```