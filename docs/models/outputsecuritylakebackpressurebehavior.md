# OutputSecurityLakeBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputSecurityLakeBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputSecurityLakeBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop"
```