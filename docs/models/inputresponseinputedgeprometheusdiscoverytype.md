# InputResponseInputEdgePrometheusDiscoveryType

Target discovery mechanism. Use static to manually enter a list of targets.

## Example Usage

```typescript
import { InputResponseInputEdgePrometheusDiscoveryType } from "cribl-control-plane/models";

let value: InputResponseInputEdgePrometheusDiscoveryType = "k8s-pods";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"static" | "dns" | "ec2" | "k8s-node" | "k8s-pods" | Unrecognized<string>
```