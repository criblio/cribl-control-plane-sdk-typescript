# CreateInputSystemByPackCompression

Controls whether to support reading compressed data from a forwarder. Select 'Automatic' to match the forwarder's configuration, or 'Disabled' to reject compressed connections.

## Example Usage

```typescript
import { CreateInputSystemByPackCompression } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackCompression = "auto";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"disabled" | "auto" | "always" | Unrecognized<string>
```