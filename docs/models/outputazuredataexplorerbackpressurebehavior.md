# OutputAzureDataExplorerBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputAzureDataExplorerBackpressureBehavior } from "cribl-control-plane/models";

let value: OutputAzureDataExplorerBackpressureBehavior = "block";
```

## Values

```typescript
"block" | "drop" | "queue"
```