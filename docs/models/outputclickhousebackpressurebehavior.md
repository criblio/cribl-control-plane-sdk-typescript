# OutputClickHouseBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputClickHouseBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputClickHouseBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```