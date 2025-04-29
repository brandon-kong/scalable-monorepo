import type {
    Account,
    Session,
    User,
    VerificationRequest,
} from "@prisma/client";

export interface Database {
    User: User;
    Session: Session;
    Account: Account;
    VerificationRequest: VerificationRequest;
}
