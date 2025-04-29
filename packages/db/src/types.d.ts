import type { AdapterUser, AdapterAccount } from "next-auth/adapters";

import type {
    Account as dbAccount,
    User as dbUser,
    Session,
    VerificationToken,
} from "../generated/prisma";

interface User extends AdapterUser, dbUser {}
interface Account extends AdapterAccount, dbAccount {}

export interface Database {
    User: User;
    Session: Session;
    Account: Account;
    VerificationToken: VerificationToken;
}

export type { Account, Session, User, VerificationToken };
