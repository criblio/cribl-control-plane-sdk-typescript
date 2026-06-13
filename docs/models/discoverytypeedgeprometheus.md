# DiscoveryTypeEdgePrometheus

Target discovery mechanism. Use static to manually enter a list of targets.

## Example Usage

```typescript
import { DiscoveryTypeEdgePrometheus } from "cribl-control-plane/models";

let value: DiscoveryTypeEdgePrometheus = "ec2";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"static" | "dns" | "ec2" | "k8s-node" | "k8s-pods" | "k8s-service-monitor" | "http_sd" | Unrecognized<string>
```