# BackpressureBehaviorGoogleCloudLogging

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorGoogleCloudLogging } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorGoogleCloudLogging = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```