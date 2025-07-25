# OutputMskAcknowledgments

Control the number of required acknowledgments.

## Example Usage

```typescript
import { OutputMskAcknowledgments } from "cribl-control-plane/models/operations";

let value: OutputMskAcknowledgments = 1;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

```typescript
1 | 0 | -1 | Unrecognized<number>
```