# OutputAzureDataExplorerBackpressureBehavior

How to handle events when all receivers are exerting backpressure

## Example Usage

```typescript
import { OutputAzureDataExplorerBackpressureBehavior } from "cribl-control-plane/models/operations";

let value: OutputAzureDataExplorerBackpressureBehavior = "block";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"block" | "drop" | "queue" | Unrecognized<string>
```