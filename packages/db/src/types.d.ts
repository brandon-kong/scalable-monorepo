import type {
    Account,
    Session,
    User,
    VerificationRequest,
} from "../generated/prisma";

export interface Database {
    User: User;
    Session: Session;
    Account: Account;
    VerificationRequest: VerificationRequest;
}

export type {
    Account,
    Session,
    User,
    VerificationRequest,
}