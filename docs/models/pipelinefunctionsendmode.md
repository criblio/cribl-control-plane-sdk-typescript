# PipelineFunctionSendMode

In Sender mode, forwards search results directly to the destination. In Metrics mode, accumulates metrics from federated send operators, and forwards the aggregate metrics.

## Example Usage

```typescript
import { PipelineFunctionSendMode } from "cribl-control-plane/models";

let value: PipelineFunctionSendMode = "metrics";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"sender" | "metrics" | Unrecognized<string>
```