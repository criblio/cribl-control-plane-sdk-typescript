# RestAuthenticationNoneRestDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBodyDiscoverType

Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task.

## Example Usage

```typescript
import {
  RestAuthenticationNoneRestDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBodyDiscoverType,
} from "cribl-control-plane/models";

let value:
  RestAuthenticationNoneRestDiscoveryDiscoverTypeHttpDiscoverMethodPostWithBodyDiscoverType =
    "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"http" | "json" | "list" | "none" | Unrecognized<string>
```