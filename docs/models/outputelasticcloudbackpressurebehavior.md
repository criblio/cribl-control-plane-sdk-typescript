# OutputElasticCloudBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputElasticCloudBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputElasticCloudBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop" | "queue"
```