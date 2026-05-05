# InputResponseInputPrometheusDiscoveryType

Target discovery mechanism. Use static to manually enter a list of targets.

## Example Usage

```typescript
import { InputResponseInputPrometheusDiscoveryType } from "cribl-control-plane/models";

let value: InputResponseInputPrometheusDiscoveryType = "dns";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"static" | "dns" | "ec2" | Unrecognized<string>
```