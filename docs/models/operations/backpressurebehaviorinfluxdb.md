# BackpressureBehaviorInfluxdb

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorInfluxdb } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorInfluxdb = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```