# OutputSyslogBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputSyslogBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputSyslogBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```