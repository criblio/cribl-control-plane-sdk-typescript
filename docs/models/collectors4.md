# Collectors4

## Example Usage

```typescript
import { Collectors4 } from "cribl-control-plane/models";

let value: Collectors4 = {
  hostsfile: {},
  interfaces: {},
  disk: {},
  metadata: {},
  routes: {},
  dns: {},
  user: {},
  firewall: {},
  services: {},
  ports: {},
  loginUsers: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `hostsfile`                                                              | [models.HostsFile4](../models/hostsfile4.md)                             | :heavy_minus_sign:                                                       | Creates events based on entries collected from the hosts file            |
| `interfaces`                                                             | [models.Interfaces4](../models/interfaces4.md)                           | :heavy_minus_sign:                                                       | Creates events for each of the host’s network interfaces                 |
| `disk`                                                                   | [models.DisksAndFileSystems4](../models/disksandfilesystems4.md)         | :heavy_minus_sign:                                                       | Creates events for physical disks, partitions, and file systems          |
| `metadata`                                                               | [models.HostInfo4](../models/hostinfo4.md)                               | :heavy_minus_sign:                                                       | Creates events based on the host system’s current state                  |
| `routes`                                                                 | [models.InputSystemStateRoutes4](../models/inputsystemstateroutes4.md)   | :heavy_minus_sign:                                                       | Creates events based on entries collected from the host’s network routes |
| `dns`                                                                    | [models.Dns4](../models/dns4.md)                                         | :heavy_minus_sign:                                                       | Creates events for DNS resolvers and search entries                      |
| `user`                                                                   | [models.UsersAndGroups4](../models/usersandgroups4.md)                   | :heavy_minus_sign:                                                       | Creates events for local users and groups                                |
| `firewall`                                                               | [models.Firewall4](../models/firewall4.md)                               | :heavy_minus_sign:                                                       | Creates events for Firewall rules entries                                |
| `services`                                                               | [models.Services4](../models/services4.md)                               | :heavy_minus_sign:                                                       | Creates events from the list of services                                 |
| `ports`                                                                  | [models.ListeningPorts4](../models/listeningports4.md)                   | :heavy_minus_sign:                                                       | Creates events from list of listening ports                              |
| `loginUsers`                                                             | [models.LoggedInUsers4](../models/loggedinusers4.md)                     | :heavy_minus_sign:                                                       | Creates events from list of logged-in users                              |