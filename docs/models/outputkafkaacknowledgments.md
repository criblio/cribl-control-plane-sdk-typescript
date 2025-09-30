# OutputKafkaAcknowledgments

Control the number of required acknowledgments.

## Example Usage

```typescript
import { OutputKafkaAcknowledgments } from "cribl-control-plane/models";

let value: OutputKafkaAcknowledgments = 1;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

```typescript
1 | 0 | -1 | Unrecognized<number>
```