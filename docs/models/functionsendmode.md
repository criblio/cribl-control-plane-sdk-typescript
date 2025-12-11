# FunctionSendMode

In Sender mode, forwards search results directly to the destination. In Metrics mode, accumulates metrics from federated send operators, and forwards the aggregate metrics.

## Example Usage

```typescript
import { FunctionSendMode } from "cribl-control-plane/models";

let value: FunctionSendMode = "sender";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"sender" | "metrics" | Unrecognized<string>
```