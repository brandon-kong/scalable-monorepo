import type { AdapterAccount, AdapterUser } from "next-auth/adapters";

import type {
    Session,
    VerificationToken,
    Account as dbAccount,
    User as dbUser,
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
