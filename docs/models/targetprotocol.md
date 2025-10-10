# TargetProtocol

Protocol to use when collecting metrics

## Example Usage

```typescript
import { TargetProtocol } from "cribl-control-plane/models";

let value: TargetProtocol = "https";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"http" | "https" | Unrecognized<string>
```