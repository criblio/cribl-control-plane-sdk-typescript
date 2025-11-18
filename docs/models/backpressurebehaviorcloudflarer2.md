# BackpressureBehaviorCloudflareR2

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorCloudflareR2 } from "cribl-control-plane/models";

let value: BackpressureBehaviorCloudflareR2 = "drop";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"block" | "drop" | Unrecognized<string>
```