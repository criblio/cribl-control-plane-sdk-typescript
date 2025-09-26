# OutputGoogleCloudStorageBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputGoogleCloudStorageBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputGoogleCloudStorageBackpressureBehavior = "drop";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"block" | "drop" | Unrecognized<string>
```