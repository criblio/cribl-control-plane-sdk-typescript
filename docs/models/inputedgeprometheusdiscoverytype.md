# InputEdgePrometheusDiscoveryType

Target discovery mechanism. Use static to manually enter a list of targets.

## Example Usage

```typescript
import { InputEdgePrometheusDiscoveryType } from "cribl-control-plane/models";

let value: InputEdgePrometheusDiscoveryType = "k8s-node";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"static" | "dns" | "ec2" | "k8s-node" | "k8s-pods" | Unrecognized<string>
```