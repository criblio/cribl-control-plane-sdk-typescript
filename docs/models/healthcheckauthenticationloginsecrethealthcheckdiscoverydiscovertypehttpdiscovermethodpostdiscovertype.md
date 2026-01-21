# HealthCheckAuthenticationLoginSecretHealthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPostDiscoverType

Defines how task discovery will be performed. Use None to skip the discovery. Use HTTP Request to make a REST call to discover tasks. Use Item List to enumerate items for collect to retrieve. Use JSON Response to manually define discover tasks as a JSON array of objects. Each entry returned by the discover operation will result in a collect task.

## Example Usage

```typescript
import {
  HealthCheckAuthenticationLoginSecretHealthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPostDiscoverType,
} from "cribl-control-plane/models";

let value:
  HealthCheckAuthenticationLoginSecretHealthCheckDiscoveryDiscoverTypeHttpDiscoverMethodPostDiscoverType =
    "http";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"http" | "json" | "list" | "none" | Unrecognized<string>
```