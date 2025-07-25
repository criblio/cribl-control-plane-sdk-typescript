# OutputElasticBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputElasticBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputElasticBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```