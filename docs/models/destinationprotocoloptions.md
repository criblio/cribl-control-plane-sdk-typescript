# DestinationProtocolOptions

Protocol to use when communicating with the destination.

## Example Usage

```typescript
import { DestinationProtocolOptions } from "cribl-control-plane/models";

let value: DestinationProtocolOptions = "tcp";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"udp" | "tcp" | Unrecognized<string>
```