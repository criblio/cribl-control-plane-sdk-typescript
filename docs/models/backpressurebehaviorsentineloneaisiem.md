# BackpressureBehaviorSentinelOneAiSiem

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { BackpressureBehaviorSentinelOneAiSiem } from "cribl-control-plane/models";

let value: BackpressureBehaviorSentinelOneAiSiem = "drop";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"block" | "drop" | "queue" | Unrecognized<string>
```