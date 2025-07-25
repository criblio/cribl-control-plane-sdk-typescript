# OutputKafkaBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputKafkaBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputKafkaBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```