# DiscoveryTypeEdgePrometheus

Target discovery mechanism. Use static to manually enter a list of targets.

## Example Usage

```typescript
import { DiscoveryTypeEdgePrometheus } from "cribl-control-plane/models/operations";

let value: DiscoveryTypeEdgePrometheus = "dns";
```

## Values

```typescript
"static" | "dns" | "ec2" | "k8s-node" | "k8s-pods"
```