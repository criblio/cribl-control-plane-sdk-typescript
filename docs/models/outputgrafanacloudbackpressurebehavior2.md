# OutputGrafanaCloudBackpressureBehavior2

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputGrafanaCloudBackpressureBehavior2 } from "cribl-control-plane/models";

let value: OutputGrafanaCloudBackpressureBehavior2 = "queue";
```

## Values

```typescript
"block" | "drop" | "queue"
```