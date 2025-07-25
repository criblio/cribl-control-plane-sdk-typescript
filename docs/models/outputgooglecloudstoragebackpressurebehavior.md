# OutputGoogleCloudStorageBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputGoogleCloudStorageBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputGoogleCloudStorageBackpressureBehavior = "drop";
```

## Values

```typescript
"block" | "drop"
```