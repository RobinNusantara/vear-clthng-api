// Base
import { Repository } from "@apps/common/base/Repository";

// Repositories
import { UserRepository } from "@apps/repositories/UserRepository";

// Services
import { UserService } from "@apps/services/UserService";

export const modules = [
    // Base
    Repository,
    // Repositories
    UserRepository,
    // Services
    UserService,
];
