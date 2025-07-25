# OutputGoogleCloudLoggingBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputGoogleCloudLoggingBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputGoogleCloudLoggingBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```