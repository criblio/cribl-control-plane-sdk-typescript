# BackpressureBehaviorGoogleCloudStorage

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorGoogleCloudStorage } from "cribl-control-plane/models/operations";

let value: BackpressureBehaviorGoogleCloudStorage = "drop";
```

## Values

```typescript
"block" | "drop"
```