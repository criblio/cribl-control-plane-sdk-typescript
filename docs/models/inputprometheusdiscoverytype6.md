# InputPrometheusDiscoveryType6

Target discovery mechanism. Use static to manually enter a list of targets.

## Example Usage

```typescript
import { InputPrometheusDiscoveryType6 } from "cribl-control-plane/models";

let value: InputPrometheusDiscoveryType6 = "ec2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"static" | "dns" | "ec2" | Unrecognized<string>
```