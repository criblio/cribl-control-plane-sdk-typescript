# AcknowledgmentsKafka

Control the number of required acknowledgments.

## Example Usage

```typescript
import { AcknowledgmentsKafka } from "cribl-control-plane/models/operations";

let value: AcknowledgmentsKafka = -1;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

```typescript
1 | 0 | -1 | Unrecognized<number>
```