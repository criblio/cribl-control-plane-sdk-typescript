# OutputGrafanaCloudBackpressureBehavior1

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputGrafanaCloudBackpressureBehavior1 } from "cribl-control-plane/models";

let value: OutputGrafanaCloudBackpressureBehavior1 = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```