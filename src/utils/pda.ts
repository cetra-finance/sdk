import { PublicKey } from "@solana/web3.js";
import { PROGRAM_ID } from "../index";
import BN from "bn.js";

export const CHAMBER_PREFIX = "chamber";
export const CHAMBER_AUTHORITY_PREFIX = "chamber_authority";
export const USER_ACCOUNT_PREFIX = "user_account";

export async function deriveChamberAddress(
    farm: PublicKey,
    baseMint: PublicKey,
    quoteMint: PublicKey,
    nonce: BN,
    programId: PublicKey = PROGRAM_ID
): Promise<[PublicKey, number]> {
    return await PublicKey.findProgramAddress(
        [
            Buffer.from(CHAMBER_PREFIX, "utf-8"),
            farm.toBuffer(),
            baseMint.toBuffer(),
            quoteMint.toBuffer(),
            nonce.toBuffer(),
        ],
        programId
    );
}

export async function deriveChamberAuthorityAddress(
    chamber: PublicKey,
    programId: PublicKey = PROGRAM_ID
): Promise<[PublicKey, number]> {
    return await PublicKey.findProgramAddress(
        [Buffer.from(CHAMBER_AUTHORITY_PREFIX, "utf-8"), chamber.toBuffer()],
        programId
    );
}

export async function deriveUserAccountAddress(
    chamber: PublicKey,
    user: PublicKey,
    programId: PublicKey = PROGRAM_ID
): Promise<[PublicKey, number]> {
    return await PublicKey.findProgramAddress(
        [
            Buffer.from(USER_ACCOUNT_PREFIX, "utf-8"),
            chamber.toBuffer(),
            user.toBuffer(),
        ],
        programId
    );
}
