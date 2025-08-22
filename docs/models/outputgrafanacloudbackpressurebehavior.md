# OutputGrafanaCloudBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputGrafanaCloudBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputGrafanaCloudBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```