# BackpressureBehaviorCloudwatch

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorCloudwatch } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorCloudwatch = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```