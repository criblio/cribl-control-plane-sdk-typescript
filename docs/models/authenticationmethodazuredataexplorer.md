# AuthenticationMethodAzureDataExplorer

The type of OAuth 2.0 client credentials grant flow to use

## Example Usage

```typescript
import { AuthenticationMethodAzureDataExplorer } from "cribl-control-plane/models";

let value: AuthenticationMethodAzureDataExplorer = "clientSecret";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"clientSecret" | "clientTextSecret" | "certificate" | Unrecognized<string>
```