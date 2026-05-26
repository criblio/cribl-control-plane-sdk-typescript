# InputResponseCompression

Controls whether to support reading compressed data from a forwarder. Select 'Automatic' to match the forwarder's configuration, or 'Disabled' to reject compressed connections.

## Example Usage

```typescript
import { InputResponseCompression } from "cribl-control-plane/models";

let value: InputResponseCompression = "auto";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"disabled" | "auto" | "always" | Unrecognized<string>
```