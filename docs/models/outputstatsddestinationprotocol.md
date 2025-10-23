# OutputStatsdDestinationProtocol

Protocol to use when communicating with the destination.

## Example Usage

```typescript
import { OutputStatsdDestinationProtocol } from "cribl-control-plane/models";

let value: OutputStatsdDestinationProtocol = "tcp";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"udp" | "tcp" | Unrecognized<string>
```