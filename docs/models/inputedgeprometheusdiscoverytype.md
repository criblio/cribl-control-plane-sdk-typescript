# InputEdgePrometheusDiscoveryType

Target discovery mechanism. Use static to manually enter a list of targets.

## Example Usage

```typescript
import { InputEdgePrometheusDiscoveryType } from "cribl-control-plane/models";

let value: InputEdgePrometheusDiscoveryType = "k8s-node";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"static" | "dns" | "ec2" | "k8s-node" | "k8s-pods" | Unrecognized<string>
```