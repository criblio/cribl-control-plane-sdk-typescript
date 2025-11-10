# InputEdgePrometheusDiscoveryType12

Target discovery mechanism. Use static to manually enter a list of targets.

## Example Usage

```typescript
import { InputEdgePrometheusDiscoveryType12 } from "cribl-control-plane/models";

let value: InputEdgePrometheusDiscoveryType12 = "ec2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"static" | "dns" | "ec2" | "k8s-node" | "k8s-pods" | Unrecognized<string>
```