# InputS3Mode

With Smart mode, PQ will write events to the filesystem only when it detects backpressure from the processing engine. With Always On mode, PQ will always write events directly to the queue before forwarding them to the processing engine.

## Example Usage

```typescript
import { InputS3Mode } from "cribl-control-plane/models";

let value: InputS3Mode = "always";
```

## Values

```typescript
"smart" | "always"
```