# InputPrometheusDiscoveryType7

Target discovery mechanism. Use static to manually enter a list of targets.

## Example Usage

```typescript
import { InputPrometheusDiscoveryType7 } from "cribl-control-plane/models";

let value: InputPrometheusDiscoveryType7 = "static";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"static" | "dns" | "ec2" | Unrecognized<string>
```