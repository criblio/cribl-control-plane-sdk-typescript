# InputPrometheusDiscoveryType

Target discovery mechanism. Use static to manually enter a list of targets.

## Example Usage

```typescript
import { InputPrometheusDiscoveryType } from "cribl-control-plane/models";

let value: InputPrometheusDiscoveryType = "ec2";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"static" | "dns" | "ec2" | Unrecognized<string>
```