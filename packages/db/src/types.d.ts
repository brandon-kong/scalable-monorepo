import type {
    Account,
    Session,
    User,
    VerificationToken,
} from "../generated/prisma";

export interface Database {
    User: User;
    Session: Session;
    Account: Account;
    VerificationToken: VerificationToken;
}

export type { Account, Session, User, VerificationToken };
