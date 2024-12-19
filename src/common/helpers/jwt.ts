import jwt from "jsonwebtoken";
import { env } from "@/common/utils/envConfig";

const { SECRET } = env;

/**
 * Creates a JSON Web Token (JWT) based on the provided payload.
 *
 * @param {object} payload - The data to be encoded in the JWT.
 * @return {string} The generated JWT.
 */
export function createToken(payload: object): string {
  return jwt.sign(payload, SECRET, { expiresIn: "1800s" });
}

/**
 * Verifies a given JSON Web Token (JWT) using the secret key.
 *
 * @param {string} token - The JWT to be verified.
 * @return {object} The decoded payload if verification is successful.
 * @throws {Error} If the token is invalid or verification fails.
 */
export function verifyToken(token: string): { id: string } | null {
  try {
    return jwt.verify(token, SECRET) as { id: string }; 
  } catch (error: any) {
    if (error.name === "TokenExpiredError") {
      throw new Error("TokenExpiredError");
    } else if (error.name === "JsonWebTokenError") {
      throw new Error("InvalidTokenError");
    }
    throw error;
  }
}

