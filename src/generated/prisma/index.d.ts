
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Otp
 * 
 */
export type Otp = $Result.DefaultSelection<Prisma.$OtpPayload>
/**
 * Model IndividualProfile
 * 
 */
export type IndividualProfile = $Result.DefaultSelection<Prisma.$IndividualProfilePayload>
/**
 * Model CorporateProfile
 * 
 */
export type CorporateProfile = $Result.DefaultSelection<Prisma.$CorporateProfilePayload>
/**
 * Model KycDocument
 * 
 */
export type KycDocument = $Result.DefaultSelection<Prisma.$KycDocumentPayload>
/**
 * Model Beneficiary
 * 
 */
export type Beneficiary = $Result.DefaultSelection<Prisma.$BeneficiaryPayload>
/**
 * Model RemittanceTransfer
 * 
 */
export type RemittanceTransfer = $Result.DefaultSelection<Prisma.$RemittanceTransferPayload>
/**
 * Model FxRate
 * 
 */
export type FxRate = $Result.DefaultSelection<Prisma.$FxRatePayload>
/**
 * Model CompanyBankAccount
 * 
 */
export type CompanyBankAccount = $Result.DefaultSelection<Prisma.$CompanyBankAccountPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  INDIVIDUAL: 'INDIVIDUAL',
  CORPORATE: 'CORPORATE'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const KycStatus: {
  PENDING: 'PENDING',
  SUBMITTED: 'SUBMITTED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  SUSPENDED: 'SUSPENDED'
};

export type KycStatus = (typeof KycStatus)[keyof typeof KycStatus]


export const DocumentType: {
  PASSPORT_FRONT: 'PASSPORT_FRONT',
  PASSPORT_BACK: 'PASSPORT_BACK',
  WORK_PERMIT_FRONT: 'WORK_PERMIT_FRONT',
  WORK_PERMIT_BACK: 'WORK_PERMIT_BACK',
  NATIONAL_ID_FRONT: 'NATIONAL_ID_FRONT',
  NATIONAL_ID_BACK: 'NATIONAL_ID_BACK',
  OTHER_GOVT_ID: 'OTHER_GOVT_ID',
  CERTIFICATE_OF_INCORPORATION: 'CERTIFICATE_OF_INCORPORATION',
  TRADING_LICENSE: 'TRADING_LICENSE',
  CR12: 'CR12',
  REGULATORY_LICENSE: 'REGULATORY_LICENSE',
  PROOF_OF_ADDRESS: 'PROOF_OF_ADDRESS',
  DIRECTOR_ID: 'DIRECTOR_ID',
  SHAREHOLDER_ID: 'SHAREHOLDER_ID',
  REPRESENTATIVE_ID: 'REPRESENTATIVE_ID'
};

export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType]


export const DocumentStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus]


export const DeliveryChannel: {
  BANK_TRANSFER: 'BANK_TRANSFER',
  MOBILE_MONEY: 'MOBILE_MONEY'
};

export type DeliveryChannel = (typeof DeliveryChannel)[keyof typeof DeliveryChannel]


export const OtpType: {
  EMAIL: 'EMAIL',
  PHONE: 'PHONE'
};

export type OtpType = (typeof OtpType)[keyof typeof OtpType]


export const RemittanceStatus: {
  DRAFT: 'DRAFT',
  PENDING_PAYMENT: 'PENDING_PAYMENT',
  PAYMENT_SUBMITTED: 'PAYMENT_SUBMITTED',
  UNDER_REVIEW: 'UNDER_REVIEW',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type RemittanceStatus = (typeof RemittanceStatus)[keyof typeof RemittanceStatus]


export const PayInMethod: {
  BANK_TRANSFER: 'BANK_TRANSFER',
  MOBILE_MONEY: 'MOBILE_MONEY'
};

export type PayInMethod = (typeof PayInMethod)[keyof typeof PayInMethod]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type KycStatus = $Enums.KycStatus

export const KycStatus: typeof $Enums.KycStatus

export type DocumentType = $Enums.DocumentType

export const DocumentType: typeof $Enums.DocumentType

export type DocumentStatus = $Enums.DocumentStatus

export const DocumentStatus: typeof $Enums.DocumentStatus

export type DeliveryChannel = $Enums.DeliveryChannel

export const DeliveryChannel: typeof $Enums.DeliveryChannel

export type OtpType = $Enums.OtpType

export const OtpType: typeof $Enums.OtpType

export type RemittanceStatus = $Enums.RemittanceStatus

export const RemittanceStatus: typeof $Enums.RemittanceStatus

export type PayInMethod = $Enums.PayInMethod

export const PayInMethod: typeof $Enums.PayInMethod

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.OtpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.individualProfile`: Exposes CRUD operations for the **IndividualProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IndividualProfiles
    * const individualProfiles = await prisma.individualProfile.findMany()
    * ```
    */
  get individualProfile(): Prisma.IndividualProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.corporateProfile`: Exposes CRUD operations for the **CorporateProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CorporateProfiles
    * const corporateProfiles = await prisma.corporateProfile.findMany()
    * ```
    */
  get corporateProfile(): Prisma.CorporateProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kycDocument`: Exposes CRUD operations for the **KycDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KycDocuments
    * const kycDocuments = await prisma.kycDocument.findMany()
    * ```
    */
  get kycDocument(): Prisma.KycDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.beneficiary`: Exposes CRUD operations for the **Beneficiary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beneficiaries
    * const beneficiaries = await prisma.beneficiary.findMany()
    * ```
    */
  get beneficiary(): Prisma.BeneficiaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.remittanceTransfer`: Exposes CRUD operations for the **RemittanceTransfer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RemittanceTransfers
    * const remittanceTransfers = await prisma.remittanceTransfer.findMany()
    * ```
    */
  get remittanceTransfer(): Prisma.RemittanceTransferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fxRate`: Exposes CRUD operations for the **FxRate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FxRates
    * const fxRates = await prisma.fxRate.findMany()
    * ```
    */
  get fxRate(): Prisma.FxRateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyBankAccount`: Exposes CRUD operations for the **CompanyBankAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyBankAccounts
    * const companyBankAccounts = await prisma.companyBankAccount.findMany()
    * ```
    */
  get companyBankAccount(): Prisma.CompanyBankAccountDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Otp: 'Otp',
    IndividualProfile: 'IndividualProfile',
    CorporateProfile: 'CorporateProfile',
    KycDocument: 'KycDocument',
    Beneficiary: 'Beneficiary',
    RemittanceTransfer: 'RemittanceTransfer',
    FxRate: 'FxRate',
    CompanyBankAccount: 'CompanyBankAccount'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "otp" | "individualProfile" | "corporateProfile" | "kycDocument" | "beneficiary" | "remittanceTransfer" | "fxRate" | "companyBankAccount"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Otp: {
        payload: Prisma.$OtpPayload<ExtArgs>
        fields: Prisma.OtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
          }
        }
      }
      IndividualProfile: {
        payload: Prisma.$IndividualProfilePayload<ExtArgs>
        fields: Prisma.IndividualProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndividualProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndividualProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndividualProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndividualProfilePayload>
          }
          findFirst: {
            args: Prisma.IndividualProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndividualProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndividualProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndividualProfilePayload>
          }
          findMany: {
            args: Prisma.IndividualProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndividualProfilePayload>[]
          }
          create: {
            args: Prisma.IndividualProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndividualProfilePayload>
          }
          createMany: {
            args: Prisma.IndividualProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndividualProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndividualProfilePayload>[]
          }
          delete: {
            args: Prisma.IndividualProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndividualProfilePayload>
          }
          update: {
            args: Prisma.IndividualProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndividualProfilePayload>
          }
          deleteMany: {
            args: Prisma.IndividualProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndividualProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndividualProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndividualProfilePayload>[]
          }
          upsert: {
            args: Prisma.IndividualProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndividualProfilePayload>
          }
          aggregate: {
            args: Prisma.IndividualProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndividualProfile>
          }
          groupBy: {
            args: Prisma.IndividualProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndividualProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndividualProfileCountArgs<ExtArgs>
            result: $Utils.Optional<IndividualProfileCountAggregateOutputType> | number
          }
        }
      }
      CorporateProfile: {
        payload: Prisma.$CorporateProfilePayload<ExtArgs>
        fields: Prisma.CorporateProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CorporateProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorporateProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CorporateProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorporateProfilePayload>
          }
          findFirst: {
            args: Prisma.CorporateProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorporateProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CorporateProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorporateProfilePayload>
          }
          findMany: {
            args: Prisma.CorporateProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorporateProfilePayload>[]
          }
          create: {
            args: Prisma.CorporateProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorporateProfilePayload>
          }
          createMany: {
            args: Prisma.CorporateProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CorporateProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorporateProfilePayload>[]
          }
          delete: {
            args: Prisma.CorporateProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorporateProfilePayload>
          }
          update: {
            args: Prisma.CorporateProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorporateProfilePayload>
          }
          deleteMany: {
            args: Prisma.CorporateProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CorporateProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CorporateProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorporateProfilePayload>[]
          }
          upsert: {
            args: Prisma.CorporateProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CorporateProfilePayload>
          }
          aggregate: {
            args: Prisma.CorporateProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCorporateProfile>
          }
          groupBy: {
            args: Prisma.CorporateProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CorporateProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CorporateProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CorporateProfileCountAggregateOutputType> | number
          }
        }
      }
      KycDocument: {
        payload: Prisma.$KycDocumentPayload<ExtArgs>
        fields: Prisma.KycDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KycDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KycDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload>
          }
          findFirst: {
            args: Prisma.KycDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KycDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload>
          }
          findMany: {
            args: Prisma.KycDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload>[]
          }
          create: {
            args: Prisma.KycDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload>
          }
          createMany: {
            args: Prisma.KycDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KycDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload>[]
          }
          delete: {
            args: Prisma.KycDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload>
          }
          update: {
            args: Prisma.KycDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload>
          }
          deleteMany: {
            args: Prisma.KycDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KycDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KycDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload>[]
          }
          upsert: {
            args: Prisma.KycDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KycDocumentPayload>
          }
          aggregate: {
            args: Prisma.KycDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKycDocument>
          }
          groupBy: {
            args: Prisma.KycDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<KycDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.KycDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<KycDocumentCountAggregateOutputType> | number
          }
        }
      }
      Beneficiary: {
        payload: Prisma.$BeneficiaryPayload<ExtArgs>
        fields: Prisma.BeneficiaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BeneficiaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BeneficiaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload>
          }
          findFirst: {
            args: Prisma.BeneficiaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BeneficiaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload>
          }
          findMany: {
            args: Prisma.BeneficiaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload>[]
          }
          create: {
            args: Prisma.BeneficiaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload>
          }
          createMany: {
            args: Prisma.BeneficiaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BeneficiaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload>[]
          }
          delete: {
            args: Prisma.BeneficiaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload>
          }
          update: {
            args: Prisma.BeneficiaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload>
          }
          deleteMany: {
            args: Prisma.BeneficiaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BeneficiaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BeneficiaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload>[]
          }
          upsert: {
            args: Prisma.BeneficiaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BeneficiaryPayload>
          }
          aggregate: {
            args: Prisma.BeneficiaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBeneficiary>
          }
          groupBy: {
            args: Prisma.BeneficiaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BeneficiaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BeneficiaryCountArgs<ExtArgs>
            result: $Utils.Optional<BeneficiaryCountAggregateOutputType> | number
          }
        }
      }
      RemittanceTransfer: {
        payload: Prisma.$RemittanceTransferPayload<ExtArgs>
        fields: Prisma.RemittanceTransferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RemittanceTransferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemittanceTransferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RemittanceTransferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemittanceTransferPayload>
          }
          findFirst: {
            args: Prisma.RemittanceTransferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemittanceTransferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RemittanceTransferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemittanceTransferPayload>
          }
          findMany: {
            args: Prisma.RemittanceTransferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemittanceTransferPayload>[]
          }
          create: {
            args: Prisma.RemittanceTransferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemittanceTransferPayload>
          }
          createMany: {
            args: Prisma.RemittanceTransferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RemittanceTransferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemittanceTransferPayload>[]
          }
          delete: {
            args: Prisma.RemittanceTransferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemittanceTransferPayload>
          }
          update: {
            args: Prisma.RemittanceTransferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemittanceTransferPayload>
          }
          deleteMany: {
            args: Prisma.RemittanceTransferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RemittanceTransferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RemittanceTransferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemittanceTransferPayload>[]
          }
          upsert: {
            args: Prisma.RemittanceTransferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemittanceTransferPayload>
          }
          aggregate: {
            args: Prisma.RemittanceTransferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRemittanceTransfer>
          }
          groupBy: {
            args: Prisma.RemittanceTransferGroupByArgs<ExtArgs>
            result: $Utils.Optional<RemittanceTransferGroupByOutputType>[]
          }
          count: {
            args: Prisma.RemittanceTransferCountArgs<ExtArgs>
            result: $Utils.Optional<RemittanceTransferCountAggregateOutputType> | number
          }
        }
      }
      FxRate: {
        payload: Prisma.$FxRatePayload<ExtArgs>
        fields: Prisma.FxRateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FxRateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FxRateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload>
          }
          findFirst: {
            args: Prisma.FxRateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FxRateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload>
          }
          findMany: {
            args: Prisma.FxRateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload>[]
          }
          create: {
            args: Prisma.FxRateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload>
          }
          createMany: {
            args: Prisma.FxRateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FxRateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload>[]
          }
          delete: {
            args: Prisma.FxRateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload>
          }
          update: {
            args: Prisma.FxRateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload>
          }
          deleteMany: {
            args: Prisma.FxRateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FxRateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FxRateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload>[]
          }
          upsert: {
            args: Prisma.FxRateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FxRatePayload>
          }
          aggregate: {
            args: Prisma.FxRateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFxRate>
          }
          groupBy: {
            args: Prisma.FxRateGroupByArgs<ExtArgs>
            result: $Utils.Optional<FxRateGroupByOutputType>[]
          }
          count: {
            args: Prisma.FxRateCountArgs<ExtArgs>
            result: $Utils.Optional<FxRateCountAggregateOutputType> | number
          }
        }
      }
      CompanyBankAccount: {
        payload: Prisma.$CompanyBankAccountPayload<ExtArgs>
        fields: Prisma.CompanyBankAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyBankAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBankAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyBankAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBankAccountPayload>
          }
          findFirst: {
            args: Prisma.CompanyBankAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBankAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyBankAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBankAccountPayload>
          }
          findMany: {
            args: Prisma.CompanyBankAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBankAccountPayload>[]
          }
          create: {
            args: Prisma.CompanyBankAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBankAccountPayload>
          }
          createMany: {
            args: Prisma.CompanyBankAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyBankAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBankAccountPayload>[]
          }
          delete: {
            args: Prisma.CompanyBankAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBankAccountPayload>
          }
          update: {
            args: Prisma.CompanyBankAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBankAccountPayload>
          }
          deleteMany: {
            args: Prisma.CompanyBankAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyBankAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyBankAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBankAccountPayload>[]
          }
          upsert: {
            args: Prisma.CompanyBankAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBankAccountPayload>
          }
          aggregate: {
            args: Prisma.CompanyBankAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyBankAccount>
          }
          groupBy: {
            args: Prisma.CompanyBankAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyBankAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyBankAccountCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyBankAccountCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    otp?: OtpOmit
    individualProfile?: IndividualProfileOmit
    corporateProfile?: CorporateProfileOmit
    kycDocument?: KycDocumentOmit
    beneficiary?: BeneficiaryOmit
    remittanceTransfer?: RemittanceTransferOmit
    fxRate?: FxRateOmit
    companyBankAccount?: CompanyBankAccountOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    documents: number
    beneficiaries: number
    remittanceTransfers: number
    otps: number
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | UserCountOutputTypeCountDocumentsArgs
    beneficiaries?: boolean | UserCountOutputTypeCountBeneficiariesArgs
    remittanceTransfers?: boolean | UserCountOutputTypeCountRemittanceTransfersArgs
    otps?: boolean | UserCountOutputTypeCountOtpsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KycDocumentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBeneficiariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeneficiaryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRemittanceTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RemittanceTransferWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOtpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type BeneficiaryCountOutputType
   */

  export type BeneficiaryCountOutputType = {
    remittanceTransfers: number
  }

  export type BeneficiaryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    remittanceTransfers?: boolean | BeneficiaryCountOutputTypeCountRemittanceTransfersArgs
  }

  // Custom InputTypes
  /**
   * BeneficiaryCountOutputType without action
   */
  export type BeneficiaryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BeneficiaryCountOutputType
     */
    select?: BeneficiaryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BeneficiaryCountOutputType without action
   */
  export type BeneficiaryCountOutputTypeCountRemittanceTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RemittanceTransferWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    country: string | null
    passwordHash: string | null
    name: string | null
    image: string | null
    googleId: string | null
    role: $Enums.UserRole | null
    kycStatus: $Enums.KycStatus | null
    emailVerified: boolean | null
    phoneVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    country: string | null
    passwordHash: string | null
    name: string | null
    image: string | null
    googleId: string | null
    role: $Enums.UserRole | null
    kycStatus: $Enums.KycStatus | null
    emailVerified: boolean | null
    phoneVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    country: number
    passwordHash: number
    name: number
    image: number
    googleId: number
    role: number
    kycStatus: number
    emailVerified: number
    phoneVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    country?: true
    passwordHash?: true
    name?: true
    image?: true
    googleId?: true
    role?: true
    kycStatus?: true
    emailVerified?: true
    phoneVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    country?: true
    passwordHash?: true
    name?: true
    image?: true
    googleId?: true
    role?: true
    kycStatus?: true
    emailVerified?: true
    phoneVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    country?: true
    passwordHash?: true
    name?: true
    image?: true
    googleId?: true
    role?: true
    kycStatus?: true
    emailVerified?: true
    phoneVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    phone: string | null
    country: string | null
    passwordHash: string | null
    name: string | null
    image: string | null
    googleId: string | null
    role: $Enums.UserRole
    kycStatus: $Enums.KycStatus
    emailVerified: boolean
    phoneVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    passwordHash?: boolean
    name?: boolean
    image?: boolean
    googleId?: boolean
    role?: boolean
    kycStatus?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    individualProfile?: boolean | User$individualProfileArgs<ExtArgs>
    corporateProfile?: boolean | User$corporateProfileArgs<ExtArgs>
    documents?: boolean | User$documentsArgs<ExtArgs>
    beneficiaries?: boolean | User$beneficiariesArgs<ExtArgs>
    remittanceTransfers?: boolean | User$remittanceTransfersArgs<ExtArgs>
    otps?: boolean | User$otpsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    passwordHash?: boolean
    name?: boolean
    image?: boolean
    googleId?: boolean
    role?: boolean
    kycStatus?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    passwordHash?: boolean
    name?: boolean
    image?: boolean
    googleId?: boolean
    role?: boolean
    kycStatus?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    passwordHash?: boolean
    name?: boolean
    image?: boolean
    googleId?: boolean
    role?: boolean
    kycStatus?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "country" | "passwordHash" | "name" | "image" | "googleId" | "role" | "kycStatus" | "emailVerified" | "phoneVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    individualProfile?: boolean | User$individualProfileArgs<ExtArgs>
    corporateProfile?: boolean | User$corporateProfileArgs<ExtArgs>
    documents?: boolean | User$documentsArgs<ExtArgs>
    beneficiaries?: boolean | User$beneficiariesArgs<ExtArgs>
    remittanceTransfers?: boolean | User$remittanceTransfersArgs<ExtArgs>
    otps?: boolean | User$otpsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      individualProfile: Prisma.$IndividualProfilePayload<ExtArgs> | null
      corporateProfile: Prisma.$CorporateProfilePayload<ExtArgs> | null
      documents: Prisma.$KycDocumentPayload<ExtArgs>[]
      beneficiaries: Prisma.$BeneficiaryPayload<ExtArgs>[]
      remittanceTransfers: Prisma.$RemittanceTransferPayload<ExtArgs>[]
      otps: Prisma.$OtpPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      phone: string | null
      country: string | null
      passwordHash: string | null
      name: string | null
      image: string | null
      googleId: string | null
      role: $Enums.UserRole
      kycStatus: $Enums.KycStatus
      emailVerified: boolean
      phoneVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    individualProfile<T extends User$individualProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$individualProfileArgs<ExtArgs>>): Prisma__IndividualProfileClient<$Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    corporateProfile<T extends User$corporateProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$corporateProfileArgs<ExtArgs>>): Prisma__CorporateProfileClient<$Result.GetResult<Prisma.$CorporateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    documents<T extends User$documentsArgs<ExtArgs> = {}>(args?: Subset<T, User$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    beneficiaries<T extends User$beneficiariesArgs<ExtArgs> = {}>(args?: Subset<T, User$beneficiariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    remittanceTransfers<T extends User$remittanceTransfersArgs<ExtArgs> = {}>(args?: Subset<T, User$remittanceTransfersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemittanceTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    otps<T extends User$otpsArgs<ExtArgs> = {}>(args?: Subset<T, User$otpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly kycStatus: FieldRef<"User", 'KycStatus'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly phoneVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.individualProfile
   */
  export type User$individualProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndividualProfile
     */
    select?: IndividualProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndividualProfile
     */
    omit?: IndividualProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndividualProfileInclude<ExtArgs> | null
    where?: IndividualProfileWhereInput
  }

  /**
   * User.corporateProfile
   */
  export type User$corporateProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorporateProfile
     */
    select?: CorporateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorporateProfile
     */
    omit?: CorporateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorporateProfileInclude<ExtArgs> | null
    where?: CorporateProfileWhereInput
  }

  /**
   * User.documents
   */
  export type User$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycDocument
     */
    omit?: KycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycDocumentInclude<ExtArgs> | null
    where?: KycDocumentWhereInput
    orderBy?: KycDocumentOrderByWithRelationInput | KycDocumentOrderByWithRelationInput[]
    cursor?: KycDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KycDocumentScalarFieldEnum | KycDocumentScalarFieldEnum[]
  }

  /**
   * User.beneficiaries
   */
  export type User$beneficiariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    where?: BeneficiaryWhereInput
    orderBy?: BeneficiaryOrderByWithRelationInput | BeneficiaryOrderByWithRelationInput[]
    cursor?: BeneficiaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BeneficiaryScalarFieldEnum | BeneficiaryScalarFieldEnum[]
  }

  /**
   * User.remittanceTransfers
   */
  export type User$remittanceTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemittanceTransfer
     */
    select?: RemittanceTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemittanceTransfer
     */
    omit?: RemittanceTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemittanceTransferInclude<ExtArgs> | null
    where?: RemittanceTransferWhereInput
    orderBy?: RemittanceTransferOrderByWithRelationInput | RemittanceTransferOrderByWithRelationInput[]
    cursor?: RemittanceTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RemittanceTransferScalarFieldEnum | RemittanceTransferScalarFieldEnum[]
  }

  /**
   * User.otps
   */
  export type User$otpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    cursor?: OtpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.OtpType | null
    code: string | null
    expiresAt: Date | null
    verified: boolean | null
    createdAt: Date | null
  }

  export type OtpMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.OtpType | null
    code: string | null
    expiresAt: Date | null
    verified: boolean | null
    createdAt: Date | null
  }

  export type OtpCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    code: number
    expiresAt: number
    verified: number
    createdAt: number
    _all: number
  }


  export type OtpMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    code?: true
    expiresAt?: true
    verified?: true
    createdAt?: true
  }

  export type OtpMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    code?: true
    expiresAt?: true
    verified?: true
    createdAt?: true
  }

  export type OtpCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    code?: true
    expiresAt?: true
    verified?: true
    createdAt?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type OtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: OtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.OtpType
    code: string
    expiresAt: Date
    verified: boolean
    createdAt: Date
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type OtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    code?: boolean
    expiresAt?: boolean
    verified?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    code?: boolean
    expiresAt?: boolean
    verified?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    code?: boolean
    expiresAt?: boolean
    verified?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    code?: boolean
    expiresAt?: boolean
    verified?: boolean
    createdAt?: boolean
  }

  export type OtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "code" | "expiresAt" | "verified" | "createdAt", ExtArgs["result"]["otp"]>
  export type OtpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OtpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OtpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Otp"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.OtpType
      code: string
      expiresAt: Date
      verified: boolean
      createdAt: Date
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = $Result.GetResult<Prisma.$OtpPayload, S>

  type OtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface OtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Otp'], meta: { name: 'Otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpFindUniqueArgs>(args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpFindFirstArgs>(args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpFindManyArgs>(args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends OtpCreateArgs>(args: SelectSubset<T, OtpCreateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otps.
     * @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpCreateManyArgs>(args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Otps and returns the data saved in the database.
     * @param {OtpCreateManyAndReturnArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends OtpDeleteArgs>(args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpUpdateArgs>(args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpDeleteManyArgs>(args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpUpdateManyArgs>(args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps and returns the data updated in the database.
     * @param {OtpUpdateManyAndReturnArgs} args - Arguments to update many Otps.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OtpUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends OtpUpsertArgs>(args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Otp model
   */
  readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Otp model
   */
  interface OtpFieldRefs {
    readonly id: FieldRef<"Otp", 'String'>
    readonly userId: FieldRef<"Otp", 'String'>
    readonly type: FieldRef<"Otp", 'OtpType'>
    readonly code: FieldRef<"Otp", 'String'>
    readonly expiresAt: FieldRef<"Otp", 'DateTime'>
    readonly verified: FieldRef<"Otp", 'Boolean'>
    readonly createdAt: FieldRef<"Otp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp create
   */
  export type OtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>
  }

  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp createManyAndReturn
   */
  export type OtpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Otp update
   */
  export type OtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp updateManyAndReturn
   */
  export type OtpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
  }

  /**
   * Otp delete
   */
  export type OtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to delete.
     */
    limit?: number
  }

  /**
   * Otp without action
   */
  export type OtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
  }


  /**
   * Model IndividualProfile
   */

  export type AggregateIndividualProfile = {
    _count: IndividualProfileCountAggregateOutputType | null
    _min: IndividualProfileMinAggregateOutputType | null
    _max: IndividualProfileMaxAggregateOutputType | null
  }

  export type IndividualProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    fullName: string | null
    dateOfBirth: Date | null
    nationality: string | null
    isNational: boolean | null
    passportNumber: string | null
    passportIssue: Date | null
    passportExpiry: Date | null
    workPermitNumber: string | null
    workPermitIssue: Date | null
    workPermitExpiry: Date | null
    nationalIdNumber: string | null
    nationalIdIssue: Date | null
    nationalIdExpiry: Date | null
    residentialAddress: string | null
    country: string | null
    contactEmail: string | null
    contactPhone: string | null
    occupation: string | null
    employerName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IndividualProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    fullName: string | null
    dateOfBirth: Date | null
    nationality: string | null
    isNational: boolean | null
    passportNumber: string | null
    passportIssue: Date | null
    passportExpiry: Date | null
    workPermitNumber: string | null
    workPermitIssue: Date | null
    workPermitExpiry: Date | null
    nationalIdNumber: string | null
    nationalIdIssue: Date | null
    nationalIdExpiry: Date | null
    residentialAddress: string | null
    country: string | null
    contactEmail: string | null
    contactPhone: string | null
    occupation: string | null
    employerName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IndividualProfileCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    middleName: number
    lastName: number
    fullName: number
    dateOfBirth: number
    nationality: number
    isNational: number
    passportNumber: number
    passportIssue: number
    passportExpiry: number
    workPermitNumber: number
    workPermitIssue: number
    workPermitExpiry: number
    nationalIdNumber: number
    nationalIdIssue: number
    nationalIdExpiry: number
    residentialAddress: number
    country: number
    contactEmail: number
    contactPhone: number
    occupation: number
    employerName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IndividualProfileMinAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    fullName?: true
    dateOfBirth?: true
    nationality?: true
    isNational?: true
    passportNumber?: true
    passportIssue?: true
    passportExpiry?: true
    workPermitNumber?: true
    workPermitIssue?: true
    workPermitExpiry?: true
    nationalIdNumber?: true
    nationalIdIssue?: true
    nationalIdExpiry?: true
    residentialAddress?: true
    country?: true
    contactEmail?: true
    contactPhone?: true
    occupation?: true
    employerName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IndividualProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    fullName?: true
    dateOfBirth?: true
    nationality?: true
    isNational?: true
    passportNumber?: true
    passportIssue?: true
    passportExpiry?: true
    workPermitNumber?: true
    workPermitIssue?: true
    workPermitExpiry?: true
    nationalIdNumber?: true
    nationalIdIssue?: true
    nationalIdExpiry?: true
    residentialAddress?: true
    country?: true
    contactEmail?: true
    contactPhone?: true
    occupation?: true
    employerName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IndividualProfileCountAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    middleName?: true
    lastName?: true
    fullName?: true
    dateOfBirth?: true
    nationality?: true
    isNational?: true
    passportNumber?: true
    passportIssue?: true
    passportExpiry?: true
    workPermitNumber?: true
    workPermitIssue?: true
    workPermitExpiry?: true
    nationalIdNumber?: true
    nationalIdIssue?: true
    nationalIdExpiry?: true
    residentialAddress?: true
    country?: true
    contactEmail?: true
    contactPhone?: true
    occupation?: true
    employerName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IndividualProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndividualProfile to aggregate.
     */
    where?: IndividualProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndividualProfiles to fetch.
     */
    orderBy?: IndividualProfileOrderByWithRelationInput | IndividualProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndividualProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndividualProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndividualProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IndividualProfiles
    **/
    _count?: true | IndividualProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndividualProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndividualProfileMaxAggregateInputType
  }

  export type GetIndividualProfileAggregateType<T extends IndividualProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateIndividualProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndividualProfile[P]>
      : GetScalarType<T[P], AggregateIndividualProfile[P]>
  }




  export type IndividualProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndividualProfileWhereInput
    orderBy?: IndividualProfileOrderByWithAggregationInput | IndividualProfileOrderByWithAggregationInput[]
    by: IndividualProfileScalarFieldEnum[] | IndividualProfileScalarFieldEnum
    having?: IndividualProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndividualProfileCountAggregateInputType | true
    _min?: IndividualProfileMinAggregateInputType
    _max?: IndividualProfileMaxAggregateInputType
  }

  export type IndividualProfileGroupByOutputType = {
    id: string
    userId: string
    firstName: string | null
    middleName: string | null
    lastName: string | null
    fullName: string | null
    dateOfBirth: Date | null
    nationality: string | null
    isNational: boolean
    passportNumber: string | null
    passportIssue: Date | null
    passportExpiry: Date | null
    workPermitNumber: string | null
    workPermitIssue: Date | null
    workPermitExpiry: Date | null
    nationalIdNumber: string | null
    nationalIdIssue: Date | null
    nationalIdExpiry: Date | null
    residentialAddress: string | null
    country: string | null
    contactEmail: string | null
    contactPhone: string | null
    occupation: string | null
    employerName: string | null
    createdAt: Date
    updatedAt: Date
    _count: IndividualProfileCountAggregateOutputType | null
    _min: IndividualProfileMinAggregateOutputType | null
    _max: IndividualProfileMaxAggregateOutputType | null
  }

  type GetIndividualProfileGroupByPayload<T extends IndividualProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndividualProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndividualProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndividualProfileGroupByOutputType[P]>
            : GetScalarType<T[P], IndividualProfileGroupByOutputType[P]>
        }
      >
    >


  export type IndividualProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    fullName?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    isNational?: boolean
    passportNumber?: boolean
    passportIssue?: boolean
    passportExpiry?: boolean
    workPermitNumber?: boolean
    workPermitIssue?: boolean
    workPermitExpiry?: boolean
    nationalIdNumber?: boolean
    nationalIdIssue?: boolean
    nationalIdExpiry?: boolean
    residentialAddress?: boolean
    country?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    occupation?: boolean
    employerName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["individualProfile"]>

  export type IndividualProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    fullName?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    isNational?: boolean
    passportNumber?: boolean
    passportIssue?: boolean
    passportExpiry?: boolean
    workPermitNumber?: boolean
    workPermitIssue?: boolean
    workPermitExpiry?: boolean
    nationalIdNumber?: boolean
    nationalIdIssue?: boolean
    nationalIdExpiry?: boolean
    residentialAddress?: boolean
    country?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    occupation?: boolean
    employerName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["individualProfile"]>

  export type IndividualProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    fullName?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    isNational?: boolean
    passportNumber?: boolean
    passportIssue?: boolean
    passportExpiry?: boolean
    workPermitNumber?: boolean
    workPermitIssue?: boolean
    workPermitExpiry?: boolean
    nationalIdNumber?: boolean
    nationalIdIssue?: boolean
    nationalIdExpiry?: boolean
    residentialAddress?: boolean
    country?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    occupation?: boolean
    employerName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["individualProfile"]>

  export type IndividualProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    fullName?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    isNational?: boolean
    passportNumber?: boolean
    passportIssue?: boolean
    passportExpiry?: boolean
    workPermitNumber?: boolean
    workPermitIssue?: boolean
    workPermitExpiry?: boolean
    nationalIdNumber?: boolean
    nationalIdIssue?: boolean
    nationalIdExpiry?: boolean
    residentialAddress?: boolean
    country?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    occupation?: boolean
    employerName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IndividualProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "firstName" | "middleName" | "lastName" | "fullName" | "dateOfBirth" | "nationality" | "isNational" | "passportNumber" | "passportIssue" | "passportExpiry" | "workPermitNumber" | "workPermitIssue" | "workPermitExpiry" | "nationalIdNumber" | "nationalIdIssue" | "nationalIdExpiry" | "residentialAddress" | "country" | "contactEmail" | "contactPhone" | "occupation" | "employerName" | "createdAt" | "updatedAt", ExtArgs["result"]["individualProfile"]>
  export type IndividualProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IndividualProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IndividualProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IndividualProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IndividualProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      firstName: string | null
      middleName: string | null
      lastName: string | null
      fullName: string | null
      dateOfBirth: Date | null
      nationality: string | null
      isNational: boolean
      passportNumber: string | null
      passportIssue: Date | null
      passportExpiry: Date | null
      workPermitNumber: string | null
      workPermitIssue: Date | null
      workPermitExpiry: Date | null
      nationalIdNumber: string | null
      nationalIdIssue: Date | null
      nationalIdExpiry: Date | null
      residentialAddress: string | null
      country: string | null
      contactEmail: string | null
      contactPhone: string | null
      occupation: string | null
      employerName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["individualProfile"]>
    composites: {}
  }

  type IndividualProfileGetPayload<S extends boolean | null | undefined | IndividualProfileDefaultArgs> = $Result.GetResult<Prisma.$IndividualProfilePayload, S>

  type IndividualProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndividualProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndividualProfileCountAggregateInputType | true
    }

  export interface IndividualProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IndividualProfile'], meta: { name: 'IndividualProfile' } }
    /**
     * Find zero or one IndividualProfile that matches the filter.
     * @param {IndividualProfileFindUniqueArgs} args - Arguments to find a IndividualProfile
     * @example
     * // Get one IndividualProfile
     * const individualProfile = await prisma.individualProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndividualProfileFindUniqueArgs>(args: SelectSubset<T, IndividualProfileFindUniqueArgs<ExtArgs>>): Prisma__IndividualProfileClient<$Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IndividualProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndividualProfileFindUniqueOrThrowArgs} args - Arguments to find a IndividualProfile
     * @example
     * // Get one IndividualProfile
     * const individualProfile = await prisma.individualProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndividualProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, IndividualProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndividualProfileClient<$Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndividualProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndividualProfileFindFirstArgs} args - Arguments to find a IndividualProfile
     * @example
     * // Get one IndividualProfile
     * const individualProfile = await prisma.individualProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndividualProfileFindFirstArgs>(args?: SelectSubset<T, IndividualProfileFindFirstArgs<ExtArgs>>): Prisma__IndividualProfileClient<$Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IndividualProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndividualProfileFindFirstOrThrowArgs} args - Arguments to find a IndividualProfile
     * @example
     * // Get one IndividualProfile
     * const individualProfile = await prisma.individualProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndividualProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, IndividualProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndividualProfileClient<$Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IndividualProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndividualProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IndividualProfiles
     * const individualProfiles = await prisma.individualProfile.findMany()
     * 
     * // Get first 10 IndividualProfiles
     * const individualProfiles = await prisma.individualProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const individualProfileWithIdOnly = await prisma.individualProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndividualProfileFindManyArgs>(args?: SelectSubset<T, IndividualProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IndividualProfile.
     * @param {IndividualProfileCreateArgs} args - Arguments to create a IndividualProfile.
     * @example
     * // Create one IndividualProfile
     * const IndividualProfile = await prisma.individualProfile.create({
     *   data: {
     *     // ... data to create a IndividualProfile
     *   }
     * })
     * 
     */
    create<T extends IndividualProfileCreateArgs>(args: SelectSubset<T, IndividualProfileCreateArgs<ExtArgs>>): Prisma__IndividualProfileClient<$Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IndividualProfiles.
     * @param {IndividualProfileCreateManyArgs} args - Arguments to create many IndividualProfiles.
     * @example
     * // Create many IndividualProfiles
     * const individualProfile = await prisma.individualProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndividualProfileCreateManyArgs>(args?: SelectSubset<T, IndividualProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IndividualProfiles and returns the data saved in the database.
     * @param {IndividualProfileCreateManyAndReturnArgs} args - Arguments to create many IndividualProfiles.
     * @example
     * // Create many IndividualProfiles
     * const individualProfile = await prisma.individualProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IndividualProfiles and only return the `id`
     * const individualProfileWithIdOnly = await prisma.individualProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndividualProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, IndividualProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IndividualProfile.
     * @param {IndividualProfileDeleteArgs} args - Arguments to delete one IndividualProfile.
     * @example
     * // Delete one IndividualProfile
     * const IndividualProfile = await prisma.individualProfile.delete({
     *   where: {
     *     // ... filter to delete one IndividualProfile
     *   }
     * })
     * 
     */
    delete<T extends IndividualProfileDeleteArgs>(args: SelectSubset<T, IndividualProfileDeleteArgs<ExtArgs>>): Prisma__IndividualProfileClient<$Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IndividualProfile.
     * @param {IndividualProfileUpdateArgs} args - Arguments to update one IndividualProfile.
     * @example
     * // Update one IndividualProfile
     * const individualProfile = await prisma.individualProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndividualProfileUpdateArgs>(args: SelectSubset<T, IndividualProfileUpdateArgs<ExtArgs>>): Prisma__IndividualProfileClient<$Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IndividualProfiles.
     * @param {IndividualProfileDeleteManyArgs} args - Arguments to filter IndividualProfiles to delete.
     * @example
     * // Delete a few IndividualProfiles
     * const { count } = await prisma.individualProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndividualProfileDeleteManyArgs>(args?: SelectSubset<T, IndividualProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndividualProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndividualProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IndividualProfiles
     * const individualProfile = await prisma.individualProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndividualProfileUpdateManyArgs>(args: SelectSubset<T, IndividualProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IndividualProfiles and returns the data updated in the database.
     * @param {IndividualProfileUpdateManyAndReturnArgs} args - Arguments to update many IndividualProfiles.
     * @example
     * // Update many IndividualProfiles
     * const individualProfile = await prisma.individualProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IndividualProfiles and only return the `id`
     * const individualProfileWithIdOnly = await prisma.individualProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IndividualProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, IndividualProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IndividualProfile.
     * @param {IndividualProfileUpsertArgs} args - Arguments to update or create a IndividualProfile.
     * @example
     * // Update or create a IndividualProfile
     * const individualProfile = await prisma.individualProfile.upsert({
     *   create: {
     *     // ... data to create a IndividualProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IndividualProfile we want to update
     *   }
     * })
     */
    upsert<T extends IndividualProfileUpsertArgs>(args: SelectSubset<T, IndividualProfileUpsertArgs<ExtArgs>>): Prisma__IndividualProfileClient<$Result.GetResult<Prisma.$IndividualProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IndividualProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndividualProfileCountArgs} args - Arguments to filter IndividualProfiles to count.
     * @example
     * // Count the number of IndividualProfiles
     * const count = await prisma.individualProfile.count({
     *   where: {
     *     // ... the filter for the IndividualProfiles we want to count
     *   }
     * })
    **/
    count<T extends IndividualProfileCountArgs>(
      args?: Subset<T, IndividualProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndividualProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IndividualProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndividualProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IndividualProfileAggregateArgs>(args: Subset<T, IndividualProfileAggregateArgs>): Prisma.PrismaPromise<GetIndividualProfileAggregateType<T>>

    /**
     * Group by IndividualProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndividualProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IndividualProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndividualProfileGroupByArgs['orderBy'] }
        : { orderBy?: IndividualProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IndividualProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndividualProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IndividualProfile model
   */
  readonly fields: IndividualProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IndividualProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndividualProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IndividualProfile model
   */
  interface IndividualProfileFieldRefs {
    readonly id: FieldRef<"IndividualProfile", 'String'>
    readonly userId: FieldRef<"IndividualProfile", 'String'>
    readonly firstName: FieldRef<"IndividualProfile", 'String'>
    readonly middleName: FieldRef<"IndividualProfile", 'String'>
    readonly lastName: FieldRef<"IndividualProfile", 'String'>
    readonly fullName: FieldRef<"IndividualProfile", 'String'>
    readonly dateOfBirth: FieldRef<"IndividualProfile", 'DateTime'>
    readonly nationality: FieldRef<"IndividualProfile", 'String'>
    readonly isNational: FieldRef<"IndividualProfile", 'Boolean'>
    readonly passportNumber: FieldRef<"IndividualProfile", 'String'>
    readonly passportIssue: FieldRef<"IndividualProfile", 'DateTime'>
    readonly passportExpiry: FieldRef<"IndividualProfile", 'DateTime'>
    readonly workPermitNumber: FieldRef<"IndividualProfile", 'String'>
    readonly workPermitIssue: FieldRef<"IndividualProfile", 'DateTime'>
    readonly workPermitExpiry: FieldRef<"IndividualProfile", 'DateTime'>
    readonly nationalIdNumber: FieldRef<"IndividualProfile", 'String'>
    readonly nationalIdIssue: FieldRef<"IndividualProfile", 'DateTime'>
    readonly nationalIdExpiry: FieldRef<"IndividualProfile", 'DateTime'>
    readonly residentialAddress: FieldRef<"IndividualProfile", 'String'>
    readonly country: FieldRef<"IndividualProfile", 'String'>
    readonly contactEmail: FieldRef<"IndividualProfile", 'String'>
    readonly contactPhone: FieldRef<"IndividualProfile", 'String'>
    readonly occupation: FieldRef<"IndividualProfile", 'String'>
    readonly employerName: FieldRef<"IndividualProfile", 'String'>
    readonly createdAt: FieldRef<"IndividualProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"IndividualProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IndividualProfile findUnique
   */
  export type IndividualProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndividualProfile
     */
    select?: IndividualProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndividualProfile
     */
    omit?: IndividualProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndividualProfileInclude<ExtArgs> | null
    /**
     * Filter, which IndividualProfile to fetch.
     */
    where: IndividualProfileWhereUniqueInput
  }

  /**
   * IndividualProfile findUniqueOrThrow
   */
  export type IndividualProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndividualProfile
     */
    select?: IndividualProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndividualProfile
     */
    omit?: IndividualProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndividualProfileInclude<ExtArgs> | null
    /**
     * Filter, which IndividualProfile to fetch.
     */
    where: IndividualProfileWhereUniqueInput
  }

  /**
   * IndividualProfile findFirst
   */
  export type IndividualProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndividualProfile
     */
    select?: IndividualProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndividualProfile
     */
    omit?: IndividualProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndividualProfileInclude<ExtArgs> | null
    /**
     * Filter, which IndividualProfile to fetch.
     */
    where?: IndividualProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndividualProfiles to fetch.
     */
    orderBy?: IndividualProfileOrderByWithRelationInput | IndividualProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndividualProfiles.
     */
    cursor?: IndividualProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndividualProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndividualProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndividualProfiles.
     */
    distinct?: IndividualProfileScalarFieldEnum | IndividualProfileScalarFieldEnum[]
  }

  /**
   * IndividualProfile findFirstOrThrow
   */
  export type IndividualProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndividualProfile
     */
    select?: IndividualProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndividualProfile
     */
    omit?: IndividualProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndividualProfileInclude<ExtArgs> | null
    /**
     * Filter, which IndividualProfile to fetch.
     */
    where?: IndividualProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndividualProfiles to fetch.
     */
    orderBy?: IndividualProfileOrderByWithRelationInput | IndividualProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IndividualProfiles.
     */
    cursor?: IndividualProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndividualProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndividualProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndividualProfiles.
     */
    distinct?: IndividualProfileScalarFieldEnum | IndividualProfileScalarFieldEnum[]
  }

  /**
   * IndividualProfile findMany
   */
  export type IndividualProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndividualProfile
     */
    select?: IndividualProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndividualProfile
     */
    omit?: IndividualProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndividualProfileInclude<ExtArgs> | null
    /**
     * Filter, which IndividualProfiles to fetch.
     */
    where?: IndividualProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IndividualProfiles to fetch.
     */
    orderBy?: IndividualProfileOrderByWithRelationInput | IndividualProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IndividualProfiles.
     */
    cursor?: IndividualProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IndividualProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IndividualProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IndividualProfiles.
     */
    distinct?: IndividualProfileScalarFieldEnum | IndividualProfileScalarFieldEnum[]
  }

  /**
   * IndividualProfile create
   */
  export type IndividualProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndividualProfile
     */
    select?: IndividualProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndividualProfile
     */
    omit?: IndividualProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndividualProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a IndividualProfile.
     */
    data: XOR<IndividualProfileCreateInput, IndividualProfileUncheckedCreateInput>
  }

  /**
   * IndividualProfile createMany
   */
  export type IndividualProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IndividualProfiles.
     */
    data: IndividualProfileCreateManyInput | IndividualProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IndividualProfile createManyAndReturn
   */
  export type IndividualProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndividualProfile
     */
    select?: IndividualProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndividualProfile
     */
    omit?: IndividualProfileOmit<ExtArgs> | null
    /**
     * The data used to create many IndividualProfiles.
     */
    data: IndividualProfileCreateManyInput | IndividualProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndividualProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IndividualProfile update
   */
  export type IndividualProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndividualProfile
     */
    select?: IndividualProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndividualProfile
     */
    omit?: IndividualProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndividualProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a IndividualProfile.
     */
    data: XOR<IndividualProfileUpdateInput, IndividualProfileUncheckedUpdateInput>
    /**
     * Choose, which IndividualProfile to update.
     */
    where: IndividualProfileWhereUniqueInput
  }

  /**
   * IndividualProfile updateMany
   */
  export type IndividualProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IndividualProfiles.
     */
    data: XOR<IndividualProfileUpdateManyMutationInput, IndividualProfileUncheckedUpdateManyInput>
    /**
     * Filter which IndividualProfiles to update
     */
    where?: IndividualProfileWhereInput
    /**
     * Limit how many IndividualProfiles to update.
     */
    limit?: number
  }

  /**
   * IndividualProfile updateManyAndReturn
   */
  export type IndividualProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndividualProfile
     */
    select?: IndividualProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IndividualProfile
     */
    omit?: IndividualProfileOmit<ExtArgs> | null
    /**
     * The data used to update IndividualProfiles.
     */
    data: XOR<IndividualProfileUpdateManyMutationInput, IndividualProfileUncheckedUpdateManyInput>
    /**
     * Filter which IndividualProfiles to update
     */
    where?: IndividualProfileWhereInput
    /**
     * Limit how many IndividualProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndividualProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IndividualProfile upsert
   */
  export type IndividualProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndividualProfile
     */
    select?: IndividualProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndividualProfile
     */
    omit?: IndividualProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndividualProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the IndividualProfile to update in case it exists.
     */
    where: IndividualProfileWhereUniqueInput
    /**
     * In case the IndividualProfile found by the `where` argument doesn't exist, create a new IndividualProfile with this data.
     */
    create: XOR<IndividualProfileCreateInput, IndividualProfileUncheckedCreateInput>
    /**
     * In case the IndividualProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndividualProfileUpdateInput, IndividualProfileUncheckedUpdateInput>
  }

  /**
   * IndividualProfile delete
   */
  export type IndividualProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndividualProfile
     */
    select?: IndividualProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndividualProfile
     */
    omit?: IndividualProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndividualProfileInclude<ExtArgs> | null
    /**
     * Filter which IndividualProfile to delete.
     */
    where: IndividualProfileWhereUniqueInput
  }

  /**
   * IndividualProfile deleteMany
   */
  export type IndividualProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IndividualProfiles to delete
     */
    where?: IndividualProfileWhereInput
    /**
     * Limit how many IndividualProfiles to delete.
     */
    limit?: number
  }

  /**
   * IndividualProfile without action
   */
  export type IndividualProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndividualProfile
     */
    select?: IndividualProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IndividualProfile
     */
    omit?: IndividualProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndividualProfileInclude<ExtArgs> | null
  }


  /**
   * Model CorporateProfile
   */

  export type AggregateCorporateProfile = {
    _count: CorporateProfileCountAggregateOutputType | null
    _min: CorporateProfileMinAggregateOutputType | null
    _max: CorporateProfileMaxAggregateOutputType | null
  }

  export type CorporateProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    businessName: string | null
    natureOfBusiness: string | null
    businessAddress: string | null
    registrationNumber: string | null
    incorporationDate: Date | null
    tradingLicenseNumber: string | null
    tradingLicenseIssue: Date | null
    tradingLicenseExpiry: Date | null
    regulatoryLicenseNumber: string | null
    regulatoryLicenseIssue: Date | null
    regulatoryLicenseExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CorporateProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    businessName: string | null
    natureOfBusiness: string | null
    businessAddress: string | null
    registrationNumber: string | null
    incorporationDate: Date | null
    tradingLicenseNumber: string | null
    tradingLicenseIssue: Date | null
    tradingLicenseExpiry: Date | null
    regulatoryLicenseNumber: string | null
    regulatoryLicenseIssue: Date | null
    regulatoryLicenseExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CorporateProfileCountAggregateOutputType = {
    id: number
    userId: number
    businessName: number
    natureOfBusiness: number
    businessAddress: number
    registrationNumber: number
    incorporationDate: number
    tradingLicenseNumber: number
    tradingLicenseIssue: number
    tradingLicenseExpiry: number
    regulatoryLicenseNumber: number
    regulatoryLicenseIssue: number
    regulatoryLicenseExpiry: number
    keyPersonnel: number
    shareholders: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CorporateProfileMinAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    natureOfBusiness?: true
    businessAddress?: true
    registrationNumber?: true
    incorporationDate?: true
    tradingLicenseNumber?: true
    tradingLicenseIssue?: true
    tradingLicenseExpiry?: true
    regulatoryLicenseNumber?: true
    regulatoryLicenseIssue?: true
    regulatoryLicenseExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CorporateProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    natureOfBusiness?: true
    businessAddress?: true
    registrationNumber?: true
    incorporationDate?: true
    tradingLicenseNumber?: true
    tradingLicenseIssue?: true
    tradingLicenseExpiry?: true
    regulatoryLicenseNumber?: true
    regulatoryLicenseIssue?: true
    regulatoryLicenseExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CorporateProfileCountAggregateInputType = {
    id?: true
    userId?: true
    businessName?: true
    natureOfBusiness?: true
    businessAddress?: true
    registrationNumber?: true
    incorporationDate?: true
    tradingLicenseNumber?: true
    tradingLicenseIssue?: true
    tradingLicenseExpiry?: true
    regulatoryLicenseNumber?: true
    regulatoryLicenseIssue?: true
    regulatoryLicenseExpiry?: true
    keyPersonnel?: true
    shareholders?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CorporateProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CorporateProfile to aggregate.
     */
    where?: CorporateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CorporateProfiles to fetch.
     */
    orderBy?: CorporateProfileOrderByWithRelationInput | CorporateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CorporateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CorporateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CorporateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CorporateProfiles
    **/
    _count?: true | CorporateProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CorporateProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CorporateProfileMaxAggregateInputType
  }

  export type GetCorporateProfileAggregateType<T extends CorporateProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCorporateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCorporateProfile[P]>
      : GetScalarType<T[P], AggregateCorporateProfile[P]>
  }




  export type CorporateProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CorporateProfileWhereInput
    orderBy?: CorporateProfileOrderByWithAggregationInput | CorporateProfileOrderByWithAggregationInput[]
    by: CorporateProfileScalarFieldEnum[] | CorporateProfileScalarFieldEnum
    having?: CorporateProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CorporateProfileCountAggregateInputType | true
    _min?: CorporateProfileMinAggregateInputType
    _max?: CorporateProfileMaxAggregateInputType
  }

  export type CorporateProfileGroupByOutputType = {
    id: string
    userId: string
    businessName: string | null
    natureOfBusiness: string | null
    businessAddress: string | null
    registrationNumber: string | null
    incorporationDate: Date | null
    tradingLicenseNumber: string | null
    tradingLicenseIssue: Date | null
    tradingLicenseExpiry: Date | null
    regulatoryLicenseNumber: string | null
    regulatoryLicenseIssue: Date | null
    regulatoryLicenseExpiry: Date | null
    keyPersonnel: JsonValue | null
    shareholders: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: CorporateProfileCountAggregateOutputType | null
    _min: CorporateProfileMinAggregateOutputType | null
    _max: CorporateProfileMaxAggregateOutputType | null
  }

  type GetCorporateProfileGroupByPayload<T extends CorporateProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CorporateProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CorporateProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CorporateProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CorporateProfileGroupByOutputType[P]>
        }
      >
    >


  export type CorporateProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    natureOfBusiness?: boolean
    businessAddress?: boolean
    registrationNumber?: boolean
    incorporationDate?: boolean
    tradingLicenseNumber?: boolean
    tradingLicenseIssue?: boolean
    tradingLicenseExpiry?: boolean
    regulatoryLicenseNumber?: boolean
    regulatoryLicenseIssue?: boolean
    regulatoryLicenseExpiry?: boolean
    keyPersonnel?: boolean
    shareholders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corporateProfile"]>

  export type CorporateProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    natureOfBusiness?: boolean
    businessAddress?: boolean
    registrationNumber?: boolean
    incorporationDate?: boolean
    tradingLicenseNumber?: boolean
    tradingLicenseIssue?: boolean
    tradingLicenseExpiry?: boolean
    regulatoryLicenseNumber?: boolean
    regulatoryLicenseIssue?: boolean
    regulatoryLicenseExpiry?: boolean
    keyPersonnel?: boolean
    shareholders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corporateProfile"]>

  export type CorporateProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    businessName?: boolean
    natureOfBusiness?: boolean
    businessAddress?: boolean
    registrationNumber?: boolean
    incorporationDate?: boolean
    tradingLicenseNumber?: boolean
    tradingLicenseIssue?: boolean
    tradingLicenseExpiry?: boolean
    regulatoryLicenseNumber?: boolean
    regulatoryLicenseIssue?: boolean
    regulatoryLicenseExpiry?: boolean
    keyPersonnel?: boolean
    shareholders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["corporateProfile"]>

  export type CorporateProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    businessName?: boolean
    natureOfBusiness?: boolean
    businessAddress?: boolean
    registrationNumber?: boolean
    incorporationDate?: boolean
    tradingLicenseNumber?: boolean
    tradingLicenseIssue?: boolean
    tradingLicenseExpiry?: boolean
    regulatoryLicenseNumber?: boolean
    regulatoryLicenseIssue?: boolean
    regulatoryLicenseExpiry?: boolean
    keyPersonnel?: boolean
    shareholders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CorporateProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "businessName" | "natureOfBusiness" | "businessAddress" | "registrationNumber" | "incorporationDate" | "tradingLicenseNumber" | "tradingLicenseIssue" | "tradingLicenseExpiry" | "regulatoryLicenseNumber" | "regulatoryLicenseIssue" | "regulatoryLicenseExpiry" | "keyPersonnel" | "shareholders" | "createdAt" | "updatedAt", ExtArgs["result"]["corporateProfile"]>
  export type CorporateProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CorporateProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CorporateProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CorporateProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CorporateProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      businessName: string | null
      natureOfBusiness: string | null
      businessAddress: string | null
      registrationNumber: string | null
      incorporationDate: Date | null
      tradingLicenseNumber: string | null
      tradingLicenseIssue: Date | null
      tradingLicenseExpiry: Date | null
      regulatoryLicenseNumber: string | null
      regulatoryLicenseIssue: Date | null
      regulatoryLicenseExpiry: Date | null
      keyPersonnel: Prisma.JsonValue | null
      shareholders: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["corporateProfile"]>
    composites: {}
  }

  type CorporateProfileGetPayload<S extends boolean | null | undefined | CorporateProfileDefaultArgs> = $Result.GetResult<Prisma.$CorporateProfilePayload, S>

  type CorporateProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CorporateProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CorporateProfileCountAggregateInputType | true
    }

  export interface CorporateProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CorporateProfile'], meta: { name: 'CorporateProfile' } }
    /**
     * Find zero or one CorporateProfile that matches the filter.
     * @param {CorporateProfileFindUniqueArgs} args - Arguments to find a CorporateProfile
     * @example
     * // Get one CorporateProfile
     * const corporateProfile = await prisma.corporateProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CorporateProfileFindUniqueArgs>(args: SelectSubset<T, CorporateProfileFindUniqueArgs<ExtArgs>>): Prisma__CorporateProfileClient<$Result.GetResult<Prisma.$CorporateProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CorporateProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CorporateProfileFindUniqueOrThrowArgs} args - Arguments to find a CorporateProfile
     * @example
     * // Get one CorporateProfile
     * const corporateProfile = await prisma.corporateProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CorporateProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CorporateProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CorporateProfileClient<$Result.GetResult<Prisma.$CorporateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CorporateProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorporateProfileFindFirstArgs} args - Arguments to find a CorporateProfile
     * @example
     * // Get one CorporateProfile
     * const corporateProfile = await prisma.corporateProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CorporateProfileFindFirstArgs>(args?: SelectSubset<T, CorporateProfileFindFirstArgs<ExtArgs>>): Prisma__CorporateProfileClient<$Result.GetResult<Prisma.$CorporateProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CorporateProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorporateProfileFindFirstOrThrowArgs} args - Arguments to find a CorporateProfile
     * @example
     * // Get one CorporateProfile
     * const corporateProfile = await prisma.corporateProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CorporateProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CorporateProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CorporateProfileClient<$Result.GetResult<Prisma.$CorporateProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CorporateProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorporateProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CorporateProfiles
     * const corporateProfiles = await prisma.corporateProfile.findMany()
     * 
     * // Get first 10 CorporateProfiles
     * const corporateProfiles = await prisma.corporateProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const corporateProfileWithIdOnly = await prisma.corporateProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CorporateProfileFindManyArgs>(args?: SelectSubset<T, CorporateProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CorporateProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CorporateProfile.
     * @param {CorporateProfileCreateArgs} args - Arguments to create a CorporateProfile.
     * @example
     * // Create one CorporateProfile
     * const CorporateProfile = await prisma.corporateProfile.create({
     *   data: {
     *     // ... data to create a CorporateProfile
     *   }
     * })
     * 
     */
    create<T extends CorporateProfileCreateArgs>(args: SelectSubset<T, CorporateProfileCreateArgs<ExtArgs>>): Prisma__CorporateProfileClient<$Result.GetResult<Prisma.$CorporateProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CorporateProfiles.
     * @param {CorporateProfileCreateManyArgs} args - Arguments to create many CorporateProfiles.
     * @example
     * // Create many CorporateProfiles
     * const corporateProfile = await prisma.corporateProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CorporateProfileCreateManyArgs>(args?: SelectSubset<T, CorporateProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CorporateProfiles and returns the data saved in the database.
     * @param {CorporateProfileCreateManyAndReturnArgs} args - Arguments to create many CorporateProfiles.
     * @example
     * // Create many CorporateProfiles
     * const corporateProfile = await prisma.corporateProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CorporateProfiles and only return the `id`
     * const corporateProfileWithIdOnly = await prisma.corporateProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CorporateProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CorporateProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CorporateProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CorporateProfile.
     * @param {CorporateProfileDeleteArgs} args - Arguments to delete one CorporateProfile.
     * @example
     * // Delete one CorporateProfile
     * const CorporateProfile = await prisma.corporateProfile.delete({
     *   where: {
     *     // ... filter to delete one CorporateProfile
     *   }
     * })
     * 
     */
    delete<T extends CorporateProfileDeleteArgs>(args: SelectSubset<T, CorporateProfileDeleteArgs<ExtArgs>>): Prisma__CorporateProfileClient<$Result.GetResult<Prisma.$CorporateProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CorporateProfile.
     * @param {CorporateProfileUpdateArgs} args - Arguments to update one CorporateProfile.
     * @example
     * // Update one CorporateProfile
     * const corporateProfile = await prisma.corporateProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CorporateProfileUpdateArgs>(args: SelectSubset<T, CorporateProfileUpdateArgs<ExtArgs>>): Prisma__CorporateProfileClient<$Result.GetResult<Prisma.$CorporateProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CorporateProfiles.
     * @param {CorporateProfileDeleteManyArgs} args - Arguments to filter CorporateProfiles to delete.
     * @example
     * // Delete a few CorporateProfiles
     * const { count } = await prisma.corporateProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CorporateProfileDeleteManyArgs>(args?: SelectSubset<T, CorporateProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CorporateProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorporateProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CorporateProfiles
     * const corporateProfile = await prisma.corporateProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CorporateProfileUpdateManyArgs>(args: SelectSubset<T, CorporateProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CorporateProfiles and returns the data updated in the database.
     * @param {CorporateProfileUpdateManyAndReturnArgs} args - Arguments to update many CorporateProfiles.
     * @example
     * // Update many CorporateProfiles
     * const corporateProfile = await prisma.corporateProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CorporateProfiles and only return the `id`
     * const corporateProfileWithIdOnly = await prisma.corporateProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CorporateProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, CorporateProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CorporateProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CorporateProfile.
     * @param {CorporateProfileUpsertArgs} args - Arguments to update or create a CorporateProfile.
     * @example
     * // Update or create a CorporateProfile
     * const corporateProfile = await prisma.corporateProfile.upsert({
     *   create: {
     *     // ... data to create a CorporateProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CorporateProfile we want to update
     *   }
     * })
     */
    upsert<T extends CorporateProfileUpsertArgs>(args: SelectSubset<T, CorporateProfileUpsertArgs<ExtArgs>>): Prisma__CorporateProfileClient<$Result.GetResult<Prisma.$CorporateProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CorporateProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorporateProfileCountArgs} args - Arguments to filter CorporateProfiles to count.
     * @example
     * // Count the number of CorporateProfiles
     * const count = await prisma.corporateProfile.count({
     *   where: {
     *     // ... the filter for the CorporateProfiles we want to count
     *   }
     * })
    **/
    count<T extends CorporateProfileCountArgs>(
      args?: Subset<T, CorporateProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CorporateProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CorporateProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorporateProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CorporateProfileAggregateArgs>(args: Subset<T, CorporateProfileAggregateArgs>): Prisma.PrismaPromise<GetCorporateProfileAggregateType<T>>

    /**
     * Group by CorporateProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorporateProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CorporateProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CorporateProfileGroupByArgs['orderBy'] }
        : { orderBy?: CorporateProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CorporateProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCorporateProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CorporateProfile model
   */
  readonly fields: CorporateProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CorporateProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CorporateProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CorporateProfile model
   */
  interface CorporateProfileFieldRefs {
    readonly id: FieldRef<"CorporateProfile", 'String'>
    readonly userId: FieldRef<"CorporateProfile", 'String'>
    readonly businessName: FieldRef<"CorporateProfile", 'String'>
    readonly natureOfBusiness: FieldRef<"CorporateProfile", 'String'>
    readonly businessAddress: FieldRef<"CorporateProfile", 'String'>
    readonly registrationNumber: FieldRef<"CorporateProfile", 'String'>
    readonly incorporationDate: FieldRef<"CorporateProfile", 'DateTime'>
    readonly tradingLicenseNumber: FieldRef<"CorporateProfile", 'String'>
    readonly tradingLicenseIssue: FieldRef<"CorporateProfile", 'DateTime'>
    readonly tradingLicenseExpiry: FieldRef<"CorporateProfile", 'DateTime'>
    readonly regulatoryLicenseNumber: FieldRef<"CorporateProfile", 'String'>
    readonly regulatoryLicenseIssue: FieldRef<"CorporateProfile", 'DateTime'>
    readonly regulatoryLicenseExpiry: FieldRef<"CorporateProfile", 'DateTime'>
    readonly keyPersonnel: FieldRef<"CorporateProfile", 'Json'>
    readonly shareholders: FieldRef<"CorporateProfile", 'Json'>
    readonly createdAt: FieldRef<"CorporateProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"CorporateProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CorporateProfile findUnique
   */
  export type CorporateProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorporateProfile
     */
    select?: CorporateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorporateProfile
     */
    omit?: CorporateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorporateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CorporateProfile to fetch.
     */
    where: CorporateProfileWhereUniqueInput
  }

  /**
   * CorporateProfile findUniqueOrThrow
   */
  export type CorporateProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorporateProfile
     */
    select?: CorporateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorporateProfile
     */
    omit?: CorporateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorporateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CorporateProfile to fetch.
     */
    where: CorporateProfileWhereUniqueInput
  }

  /**
   * CorporateProfile findFirst
   */
  export type CorporateProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorporateProfile
     */
    select?: CorporateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorporateProfile
     */
    omit?: CorporateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorporateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CorporateProfile to fetch.
     */
    where?: CorporateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CorporateProfiles to fetch.
     */
    orderBy?: CorporateProfileOrderByWithRelationInput | CorporateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CorporateProfiles.
     */
    cursor?: CorporateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CorporateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CorporateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CorporateProfiles.
     */
    distinct?: CorporateProfileScalarFieldEnum | CorporateProfileScalarFieldEnum[]
  }

  /**
   * CorporateProfile findFirstOrThrow
   */
  export type CorporateProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorporateProfile
     */
    select?: CorporateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorporateProfile
     */
    omit?: CorporateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorporateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CorporateProfile to fetch.
     */
    where?: CorporateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CorporateProfiles to fetch.
     */
    orderBy?: CorporateProfileOrderByWithRelationInput | CorporateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CorporateProfiles.
     */
    cursor?: CorporateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CorporateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CorporateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CorporateProfiles.
     */
    distinct?: CorporateProfileScalarFieldEnum | CorporateProfileScalarFieldEnum[]
  }

  /**
   * CorporateProfile findMany
   */
  export type CorporateProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorporateProfile
     */
    select?: CorporateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorporateProfile
     */
    omit?: CorporateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorporateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CorporateProfiles to fetch.
     */
    where?: CorporateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CorporateProfiles to fetch.
     */
    orderBy?: CorporateProfileOrderByWithRelationInput | CorporateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CorporateProfiles.
     */
    cursor?: CorporateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CorporateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CorporateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CorporateProfiles.
     */
    distinct?: CorporateProfileScalarFieldEnum | CorporateProfileScalarFieldEnum[]
  }

  /**
   * CorporateProfile create
   */
  export type CorporateProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorporateProfile
     */
    select?: CorporateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorporateProfile
     */
    omit?: CorporateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorporateProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a CorporateProfile.
     */
    data: XOR<CorporateProfileCreateInput, CorporateProfileUncheckedCreateInput>
  }

  /**
   * CorporateProfile createMany
   */
  export type CorporateProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CorporateProfiles.
     */
    data: CorporateProfileCreateManyInput | CorporateProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CorporateProfile createManyAndReturn
   */
  export type CorporateProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorporateProfile
     */
    select?: CorporateProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CorporateProfile
     */
    omit?: CorporateProfileOmit<ExtArgs> | null
    /**
     * The data used to create many CorporateProfiles.
     */
    data: CorporateProfileCreateManyInput | CorporateProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorporateProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CorporateProfile update
   */
  export type CorporateProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorporateProfile
     */
    select?: CorporateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorporateProfile
     */
    omit?: CorporateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorporateProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a CorporateProfile.
     */
    data: XOR<CorporateProfileUpdateInput, CorporateProfileUncheckedUpdateInput>
    /**
     * Choose, which CorporateProfile to update.
     */
    where: CorporateProfileWhereUniqueInput
  }

  /**
   * CorporateProfile updateMany
   */
  export type CorporateProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CorporateProfiles.
     */
    data: XOR<CorporateProfileUpdateManyMutationInput, CorporateProfileUncheckedUpdateManyInput>
    /**
     * Filter which CorporateProfiles to update
     */
    where?: CorporateProfileWhereInput
    /**
     * Limit how many CorporateProfiles to update.
     */
    limit?: number
  }

  /**
   * CorporateProfile updateManyAndReturn
   */
  export type CorporateProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorporateProfile
     */
    select?: CorporateProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CorporateProfile
     */
    omit?: CorporateProfileOmit<ExtArgs> | null
    /**
     * The data used to update CorporateProfiles.
     */
    data: XOR<CorporateProfileUpdateManyMutationInput, CorporateProfileUncheckedUpdateManyInput>
    /**
     * Filter which CorporateProfiles to update
     */
    where?: CorporateProfileWhereInput
    /**
     * Limit how many CorporateProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorporateProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CorporateProfile upsert
   */
  export type CorporateProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorporateProfile
     */
    select?: CorporateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorporateProfile
     */
    omit?: CorporateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorporateProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the CorporateProfile to update in case it exists.
     */
    where: CorporateProfileWhereUniqueInput
    /**
     * In case the CorporateProfile found by the `where` argument doesn't exist, create a new CorporateProfile with this data.
     */
    create: XOR<CorporateProfileCreateInput, CorporateProfileUncheckedCreateInput>
    /**
     * In case the CorporateProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CorporateProfileUpdateInput, CorporateProfileUncheckedUpdateInput>
  }

  /**
   * CorporateProfile delete
   */
  export type CorporateProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorporateProfile
     */
    select?: CorporateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorporateProfile
     */
    omit?: CorporateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorporateProfileInclude<ExtArgs> | null
    /**
     * Filter which CorporateProfile to delete.
     */
    where: CorporateProfileWhereUniqueInput
  }

  /**
   * CorporateProfile deleteMany
   */
  export type CorporateProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CorporateProfiles to delete
     */
    where?: CorporateProfileWhereInput
    /**
     * Limit how many CorporateProfiles to delete.
     */
    limit?: number
  }

  /**
   * CorporateProfile without action
   */
  export type CorporateProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CorporateProfile
     */
    select?: CorporateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CorporateProfile
     */
    omit?: CorporateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CorporateProfileInclude<ExtArgs> | null
  }


  /**
   * Model KycDocument
   */

  export type AggregateKycDocument = {
    _count: KycDocumentCountAggregateOutputType | null
    _avg: KycDocumentAvgAggregateOutputType | null
    _sum: KycDocumentSumAggregateOutputType | null
    _min: KycDocumentMinAggregateOutputType | null
    _max: KycDocumentMaxAggregateOutputType | null
  }

  export type KycDocumentAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type KycDocumentSumAggregateOutputType = {
    fileSize: number | null
  }

  export type KycDocumentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    documentType: $Enums.DocumentType | null
    fileName: string | null
    fileUrl: string | null
    fileSize: number | null
    mimeType: string | null
    status: $Enums.DocumentStatus | null
    uploadedAt: Date | null
  }

  export type KycDocumentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    documentType: $Enums.DocumentType | null
    fileName: string | null
    fileUrl: string | null
    fileSize: number | null
    mimeType: string | null
    status: $Enums.DocumentStatus | null
    uploadedAt: Date | null
  }

  export type KycDocumentCountAggregateOutputType = {
    id: number
    userId: number
    documentType: number
    fileName: number
    fileUrl: number
    fileSize: number
    mimeType: number
    status: number
    uploadedAt: number
    _all: number
  }


  export type KycDocumentAvgAggregateInputType = {
    fileSize?: true
  }

  export type KycDocumentSumAggregateInputType = {
    fileSize?: true
  }

  export type KycDocumentMinAggregateInputType = {
    id?: true
    userId?: true
    documentType?: true
    fileName?: true
    fileUrl?: true
    fileSize?: true
    mimeType?: true
    status?: true
    uploadedAt?: true
  }

  export type KycDocumentMaxAggregateInputType = {
    id?: true
    userId?: true
    documentType?: true
    fileName?: true
    fileUrl?: true
    fileSize?: true
    mimeType?: true
    status?: true
    uploadedAt?: true
  }

  export type KycDocumentCountAggregateInputType = {
    id?: true
    userId?: true
    documentType?: true
    fileName?: true
    fileUrl?: true
    fileSize?: true
    mimeType?: true
    status?: true
    uploadedAt?: true
    _all?: true
  }

  export type KycDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KycDocument to aggregate.
     */
    where?: KycDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycDocuments to fetch.
     */
    orderBy?: KycDocumentOrderByWithRelationInput | KycDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KycDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KycDocuments
    **/
    _count?: true | KycDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KycDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KycDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KycDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KycDocumentMaxAggregateInputType
  }

  export type GetKycDocumentAggregateType<T extends KycDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateKycDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKycDocument[P]>
      : GetScalarType<T[P], AggregateKycDocument[P]>
  }




  export type KycDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KycDocumentWhereInput
    orderBy?: KycDocumentOrderByWithAggregationInput | KycDocumentOrderByWithAggregationInput[]
    by: KycDocumentScalarFieldEnum[] | KycDocumentScalarFieldEnum
    having?: KycDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KycDocumentCountAggregateInputType | true
    _avg?: KycDocumentAvgAggregateInputType
    _sum?: KycDocumentSumAggregateInputType
    _min?: KycDocumentMinAggregateInputType
    _max?: KycDocumentMaxAggregateInputType
  }

  export type KycDocumentGroupByOutputType = {
    id: string
    userId: string
    documentType: $Enums.DocumentType
    fileName: string
    fileUrl: string
    fileSize: number | null
    mimeType: string | null
    status: $Enums.DocumentStatus
    uploadedAt: Date
    _count: KycDocumentCountAggregateOutputType | null
    _avg: KycDocumentAvgAggregateOutputType | null
    _sum: KycDocumentSumAggregateOutputType | null
    _min: KycDocumentMinAggregateOutputType | null
    _max: KycDocumentMaxAggregateOutputType | null
  }

  type GetKycDocumentGroupByPayload<T extends KycDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KycDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KycDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KycDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], KycDocumentGroupByOutputType[P]>
        }
      >
    >


  export type KycDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    documentType?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    mimeType?: boolean
    status?: boolean
    uploadedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kycDocument"]>

  export type KycDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    documentType?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    mimeType?: boolean
    status?: boolean
    uploadedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kycDocument"]>

  export type KycDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    documentType?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    mimeType?: boolean
    status?: boolean
    uploadedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kycDocument"]>

  export type KycDocumentSelectScalar = {
    id?: boolean
    userId?: boolean
    documentType?: boolean
    fileName?: boolean
    fileUrl?: boolean
    fileSize?: boolean
    mimeType?: boolean
    status?: boolean
    uploadedAt?: boolean
  }

  export type KycDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "documentType" | "fileName" | "fileUrl" | "fileSize" | "mimeType" | "status" | "uploadedAt", ExtArgs["result"]["kycDocument"]>
  export type KycDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KycDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KycDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $KycDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KycDocument"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      documentType: $Enums.DocumentType
      fileName: string
      fileUrl: string
      fileSize: number | null
      mimeType: string | null
      status: $Enums.DocumentStatus
      uploadedAt: Date
    }, ExtArgs["result"]["kycDocument"]>
    composites: {}
  }

  type KycDocumentGetPayload<S extends boolean | null | undefined | KycDocumentDefaultArgs> = $Result.GetResult<Prisma.$KycDocumentPayload, S>

  type KycDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KycDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KycDocumentCountAggregateInputType | true
    }

  export interface KycDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KycDocument'], meta: { name: 'KycDocument' } }
    /**
     * Find zero or one KycDocument that matches the filter.
     * @param {KycDocumentFindUniqueArgs} args - Arguments to find a KycDocument
     * @example
     * // Get one KycDocument
     * const kycDocument = await prisma.kycDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KycDocumentFindUniqueArgs>(args: SelectSubset<T, KycDocumentFindUniqueArgs<ExtArgs>>): Prisma__KycDocumentClient<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KycDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KycDocumentFindUniqueOrThrowArgs} args - Arguments to find a KycDocument
     * @example
     * // Get one KycDocument
     * const kycDocument = await prisma.kycDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KycDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, KycDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KycDocumentClient<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KycDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycDocumentFindFirstArgs} args - Arguments to find a KycDocument
     * @example
     * // Get one KycDocument
     * const kycDocument = await prisma.kycDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KycDocumentFindFirstArgs>(args?: SelectSubset<T, KycDocumentFindFirstArgs<ExtArgs>>): Prisma__KycDocumentClient<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KycDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycDocumentFindFirstOrThrowArgs} args - Arguments to find a KycDocument
     * @example
     * // Get one KycDocument
     * const kycDocument = await prisma.kycDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KycDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, KycDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__KycDocumentClient<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KycDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KycDocuments
     * const kycDocuments = await prisma.kycDocument.findMany()
     * 
     * // Get first 10 KycDocuments
     * const kycDocuments = await prisma.kycDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kycDocumentWithIdOnly = await prisma.kycDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KycDocumentFindManyArgs>(args?: SelectSubset<T, KycDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KycDocument.
     * @param {KycDocumentCreateArgs} args - Arguments to create a KycDocument.
     * @example
     * // Create one KycDocument
     * const KycDocument = await prisma.kycDocument.create({
     *   data: {
     *     // ... data to create a KycDocument
     *   }
     * })
     * 
     */
    create<T extends KycDocumentCreateArgs>(args: SelectSubset<T, KycDocumentCreateArgs<ExtArgs>>): Prisma__KycDocumentClient<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KycDocuments.
     * @param {KycDocumentCreateManyArgs} args - Arguments to create many KycDocuments.
     * @example
     * // Create many KycDocuments
     * const kycDocument = await prisma.kycDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KycDocumentCreateManyArgs>(args?: SelectSubset<T, KycDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KycDocuments and returns the data saved in the database.
     * @param {KycDocumentCreateManyAndReturnArgs} args - Arguments to create many KycDocuments.
     * @example
     * // Create many KycDocuments
     * const kycDocument = await prisma.kycDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KycDocuments and only return the `id`
     * const kycDocumentWithIdOnly = await prisma.kycDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KycDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, KycDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KycDocument.
     * @param {KycDocumentDeleteArgs} args - Arguments to delete one KycDocument.
     * @example
     * // Delete one KycDocument
     * const KycDocument = await prisma.kycDocument.delete({
     *   where: {
     *     // ... filter to delete one KycDocument
     *   }
     * })
     * 
     */
    delete<T extends KycDocumentDeleteArgs>(args: SelectSubset<T, KycDocumentDeleteArgs<ExtArgs>>): Prisma__KycDocumentClient<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KycDocument.
     * @param {KycDocumentUpdateArgs} args - Arguments to update one KycDocument.
     * @example
     * // Update one KycDocument
     * const kycDocument = await prisma.kycDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KycDocumentUpdateArgs>(args: SelectSubset<T, KycDocumentUpdateArgs<ExtArgs>>): Prisma__KycDocumentClient<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KycDocuments.
     * @param {KycDocumentDeleteManyArgs} args - Arguments to filter KycDocuments to delete.
     * @example
     * // Delete a few KycDocuments
     * const { count } = await prisma.kycDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KycDocumentDeleteManyArgs>(args?: SelectSubset<T, KycDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KycDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KycDocuments
     * const kycDocument = await prisma.kycDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KycDocumentUpdateManyArgs>(args: SelectSubset<T, KycDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KycDocuments and returns the data updated in the database.
     * @param {KycDocumentUpdateManyAndReturnArgs} args - Arguments to update many KycDocuments.
     * @example
     * // Update many KycDocuments
     * const kycDocument = await prisma.kycDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KycDocuments and only return the `id`
     * const kycDocumentWithIdOnly = await prisma.kycDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KycDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, KycDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KycDocument.
     * @param {KycDocumentUpsertArgs} args - Arguments to update or create a KycDocument.
     * @example
     * // Update or create a KycDocument
     * const kycDocument = await prisma.kycDocument.upsert({
     *   create: {
     *     // ... data to create a KycDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KycDocument we want to update
     *   }
     * })
     */
    upsert<T extends KycDocumentUpsertArgs>(args: SelectSubset<T, KycDocumentUpsertArgs<ExtArgs>>): Prisma__KycDocumentClient<$Result.GetResult<Prisma.$KycDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KycDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycDocumentCountArgs} args - Arguments to filter KycDocuments to count.
     * @example
     * // Count the number of KycDocuments
     * const count = await prisma.kycDocument.count({
     *   where: {
     *     // ... the filter for the KycDocuments we want to count
     *   }
     * })
    **/
    count<T extends KycDocumentCountArgs>(
      args?: Subset<T, KycDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KycDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KycDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KycDocumentAggregateArgs>(args: Subset<T, KycDocumentAggregateArgs>): Prisma.PrismaPromise<GetKycDocumentAggregateType<T>>

    /**
     * Group by KycDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KycDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KycDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KycDocumentGroupByArgs['orderBy'] }
        : { orderBy?: KycDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KycDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKycDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KycDocument model
   */
  readonly fields: KycDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KycDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KycDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KycDocument model
   */
  interface KycDocumentFieldRefs {
    readonly id: FieldRef<"KycDocument", 'String'>
    readonly userId: FieldRef<"KycDocument", 'String'>
    readonly documentType: FieldRef<"KycDocument", 'DocumentType'>
    readonly fileName: FieldRef<"KycDocument", 'String'>
    readonly fileUrl: FieldRef<"KycDocument", 'String'>
    readonly fileSize: FieldRef<"KycDocument", 'Int'>
    readonly mimeType: FieldRef<"KycDocument", 'String'>
    readonly status: FieldRef<"KycDocument", 'DocumentStatus'>
    readonly uploadedAt: FieldRef<"KycDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KycDocument findUnique
   */
  export type KycDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycDocument
     */
    omit?: KycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KycDocument to fetch.
     */
    where: KycDocumentWhereUniqueInput
  }

  /**
   * KycDocument findUniqueOrThrow
   */
  export type KycDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycDocument
     */
    omit?: KycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KycDocument to fetch.
     */
    where: KycDocumentWhereUniqueInput
  }

  /**
   * KycDocument findFirst
   */
  export type KycDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycDocument
     */
    omit?: KycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KycDocument to fetch.
     */
    where?: KycDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycDocuments to fetch.
     */
    orderBy?: KycDocumentOrderByWithRelationInput | KycDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KycDocuments.
     */
    cursor?: KycDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KycDocuments.
     */
    distinct?: KycDocumentScalarFieldEnum | KycDocumentScalarFieldEnum[]
  }

  /**
   * KycDocument findFirstOrThrow
   */
  export type KycDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycDocument
     */
    omit?: KycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KycDocument to fetch.
     */
    where?: KycDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycDocuments to fetch.
     */
    orderBy?: KycDocumentOrderByWithRelationInput | KycDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KycDocuments.
     */
    cursor?: KycDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KycDocuments.
     */
    distinct?: KycDocumentScalarFieldEnum | KycDocumentScalarFieldEnum[]
  }

  /**
   * KycDocument findMany
   */
  export type KycDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycDocument
     */
    omit?: KycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KycDocuments to fetch.
     */
    where?: KycDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KycDocuments to fetch.
     */
    orderBy?: KycDocumentOrderByWithRelationInput | KycDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KycDocuments.
     */
    cursor?: KycDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KycDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KycDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KycDocuments.
     */
    distinct?: KycDocumentScalarFieldEnum | KycDocumentScalarFieldEnum[]
  }

  /**
   * KycDocument create
   */
  export type KycDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycDocument
     */
    omit?: KycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a KycDocument.
     */
    data: XOR<KycDocumentCreateInput, KycDocumentUncheckedCreateInput>
  }

  /**
   * KycDocument createMany
   */
  export type KycDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KycDocuments.
     */
    data: KycDocumentCreateManyInput | KycDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KycDocument createManyAndReturn
   */
  export type KycDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KycDocument
     */
    omit?: KycDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many KycDocuments.
     */
    data: KycDocumentCreateManyInput | KycDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KycDocument update
   */
  export type KycDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycDocument
     */
    omit?: KycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a KycDocument.
     */
    data: XOR<KycDocumentUpdateInput, KycDocumentUncheckedUpdateInput>
    /**
     * Choose, which KycDocument to update.
     */
    where: KycDocumentWhereUniqueInput
  }

  /**
   * KycDocument updateMany
   */
  export type KycDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KycDocuments.
     */
    data: XOR<KycDocumentUpdateManyMutationInput, KycDocumentUncheckedUpdateManyInput>
    /**
     * Filter which KycDocuments to update
     */
    where?: KycDocumentWhereInput
    /**
     * Limit how many KycDocuments to update.
     */
    limit?: number
  }

  /**
   * KycDocument updateManyAndReturn
   */
  export type KycDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KycDocument
     */
    omit?: KycDocumentOmit<ExtArgs> | null
    /**
     * The data used to update KycDocuments.
     */
    data: XOR<KycDocumentUpdateManyMutationInput, KycDocumentUncheckedUpdateManyInput>
    /**
     * Filter which KycDocuments to update
     */
    where?: KycDocumentWhereInput
    /**
     * Limit how many KycDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KycDocument upsert
   */
  export type KycDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycDocument
     */
    omit?: KycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the KycDocument to update in case it exists.
     */
    where: KycDocumentWhereUniqueInput
    /**
     * In case the KycDocument found by the `where` argument doesn't exist, create a new KycDocument with this data.
     */
    create: XOR<KycDocumentCreateInput, KycDocumentUncheckedCreateInput>
    /**
     * In case the KycDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KycDocumentUpdateInput, KycDocumentUncheckedUpdateInput>
  }

  /**
   * KycDocument delete
   */
  export type KycDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycDocument
     */
    omit?: KycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycDocumentInclude<ExtArgs> | null
    /**
     * Filter which KycDocument to delete.
     */
    where: KycDocumentWhereUniqueInput
  }

  /**
   * KycDocument deleteMany
   */
  export type KycDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KycDocuments to delete
     */
    where?: KycDocumentWhereInput
    /**
     * Limit how many KycDocuments to delete.
     */
    limit?: number
  }

  /**
   * KycDocument without action
   */
  export type KycDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KycDocument
     */
    select?: KycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KycDocument
     */
    omit?: KycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KycDocumentInclude<ExtArgs> | null
  }


  /**
   * Model Beneficiary
   */

  export type AggregateBeneficiary = {
    _count: BeneficiaryCountAggregateOutputType | null
    _min: BeneficiaryMinAggregateOutputType | null
    _max: BeneficiaryMaxAggregateOutputType | null
  }

  export type BeneficiaryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    deliveryChannel: $Enums.DeliveryChannel | null
    fullName: string | null
    country: string | null
    bankName: string | null
    accountNumber: string | null
    swiftBic: string | null
    mobileMoneyProvider: string | null
    mobileNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BeneficiaryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    deliveryChannel: $Enums.DeliveryChannel | null
    fullName: string | null
    country: string | null
    bankName: string | null
    accountNumber: string | null
    swiftBic: string | null
    mobileMoneyProvider: string | null
    mobileNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BeneficiaryCountAggregateOutputType = {
    id: number
    userId: number
    deliveryChannel: number
    fullName: number
    country: number
    bankName: number
    accountNumber: number
    swiftBic: number
    mobileMoneyProvider: number
    mobileNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BeneficiaryMinAggregateInputType = {
    id?: true
    userId?: true
    deliveryChannel?: true
    fullName?: true
    country?: true
    bankName?: true
    accountNumber?: true
    swiftBic?: true
    mobileMoneyProvider?: true
    mobileNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BeneficiaryMaxAggregateInputType = {
    id?: true
    userId?: true
    deliveryChannel?: true
    fullName?: true
    country?: true
    bankName?: true
    accountNumber?: true
    swiftBic?: true
    mobileMoneyProvider?: true
    mobileNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BeneficiaryCountAggregateInputType = {
    id?: true
    userId?: true
    deliveryChannel?: true
    fullName?: true
    country?: true
    bankName?: true
    accountNumber?: true
    swiftBic?: true
    mobileMoneyProvider?: true
    mobileNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BeneficiaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beneficiary to aggregate.
     */
    where?: BeneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beneficiaries to fetch.
     */
    orderBy?: BeneficiaryOrderByWithRelationInput | BeneficiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BeneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Beneficiaries
    **/
    _count?: true | BeneficiaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BeneficiaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BeneficiaryMaxAggregateInputType
  }

  export type GetBeneficiaryAggregateType<T extends BeneficiaryAggregateArgs> = {
        [P in keyof T & keyof AggregateBeneficiary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBeneficiary[P]>
      : GetScalarType<T[P], AggregateBeneficiary[P]>
  }




  export type BeneficiaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BeneficiaryWhereInput
    orderBy?: BeneficiaryOrderByWithAggregationInput | BeneficiaryOrderByWithAggregationInput[]
    by: BeneficiaryScalarFieldEnum[] | BeneficiaryScalarFieldEnum
    having?: BeneficiaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BeneficiaryCountAggregateInputType | true
    _min?: BeneficiaryMinAggregateInputType
    _max?: BeneficiaryMaxAggregateInputType
  }

  export type BeneficiaryGroupByOutputType = {
    id: string
    userId: string
    deliveryChannel: $Enums.DeliveryChannel
    fullName: string
    country: string | null
    bankName: string | null
    accountNumber: string | null
    swiftBic: string | null
    mobileMoneyProvider: string | null
    mobileNumber: string | null
    createdAt: Date
    updatedAt: Date
    _count: BeneficiaryCountAggregateOutputType | null
    _min: BeneficiaryMinAggregateOutputType | null
    _max: BeneficiaryMaxAggregateOutputType | null
  }

  type GetBeneficiaryGroupByPayload<T extends BeneficiaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BeneficiaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BeneficiaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BeneficiaryGroupByOutputType[P]>
            : GetScalarType<T[P], BeneficiaryGroupByOutputType[P]>
        }
      >
    >


  export type BeneficiarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deliveryChannel?: boolean
    fullName?: boolean
    country?: boolean
    bankName?: boolean
    accountNumber?: boolean
    swiftBic?: boolean
    mobileMoneyProvider?: boolean
    mobileNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    remittanceTransfers?: boolean | Beneficiary$remittanceTransfersArgs<ExtArgs>
    _count?: boolean | BeneficiaryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beneficiary"]>

  export type BeneficiarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deliveryChannel?: boolean
    fullName?: boolean
    country?: boolean
    bankName?: boolean
    accountNumber?: boolean
    swiftBic?: boolean
    mobileMoneyProvider?: boolean
    mobileNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beneficiary"]>

  export type BeneficiarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deliveryChannel?: boolean
    fullName?: boolean
    country?: boolean
    bankName?: boolean
    accountNumber?: boolean
    swiftBic?: boolean
    mobileMoneyProvider?: boolean
    mobileNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["beneficiary"]>

  export type BeneficiarySelectScalar = {
    id?: boolean
    userId?: boolean
    deliveryChannel?: boolean
    fullName?: boolean
    country?: boolean
    bankName?: boolean
    accountNumber?: boolean
    swiftBic?: boolean
    mobileMoneyProvider?: boolean
    mobileNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BeneficiaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "deliveryChannel" | "fullName" | "country" | "bankName" | "accountNumber" | "swiftBic" | "mobileMoneyProvider" | "mobileNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["beneficiary"]>
  export type BeneficiaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    remittanceTransfers?: boolean | Beneficiary$remittanceTransfersArgs<ExtArgs>
    _count?: boolean | BeneficiaryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BeneficiaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BeneficiaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BeneficiaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Beneficiary"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      remittanceTransfers: Prisma.$RemittanceTransferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      deliveryChannel: $Enums.DeliveryChannel
      fullName: string
      country: string | null
      bankName: string | null
      accountNumber: string | null
      swiftBic: string | null
      mobileMoneyProvider: string | null
      mobileNumber: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["beneficiary"]>
    composites: {}
  }

  type BeneficiaryGetPayload<S extends boolean | null | undefined | BeneficiaryDefaultArgs> = $Result.GetResult<Prisma.$BeneficiaryPayload, S>

  type BeneficiaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BeneficiaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BeneficiaryCountAggregateInputType | true
    }

  export interface BeneficiaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Beneficiary'], meta: { name: 'Beneficiary' } }
    /**
     * Find zero or one Beneficiary that matches the filter.
     * @param {BeneficiaryFindUniqueArgs} args - Arguments to find a Beneficiary
     * @example
     * // Get one Beneficiary
     * const beneficiary = await prisma.beneficiary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BeneficiaryFindUniqueArgs>(args: SelectSubset<T, BeneficiaryFindUniqueArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Beneficiary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BeneficiaryFindUniqueOrThrowArgs} args - Arguments to find a Beneficiary
     * @example
     * // Get one Beneficiary
     * const beneficiary = await prisma.beneficiary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BeneficiaryFindUniqueOrThrowArgs>(args: SelectSubset<T, BeneficiaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Beneficiary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryFindFirstArgs} args - Arguments to find a Beneficiary
     * @example
     * // Get one Beneficiary
     * const beneficiary = await prisma.beneficiary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BeneficiaryFindFirstArgs>(args?: SelectSubset<T, BeneficiaryFindFirstArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Beneficiary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryFindFirstOrThrowArgs} args - Arguments to find a Beneficiary
     * @example
     * // Get one Beneficiary
     * const beneficiary = await prisma.beneficiary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BeneficiaryFindFirstOrThrowArgs>(args?: SelectSubset<T, BeneficiaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Beneficiaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beneficiaries
     * const beneficiaries = await prisma.beneficiary.findMany()
     * 
     * // Get first 10 Beneficiaries
     * const beneficiaries = await prisma.beneficiary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const beneficiaryWithIdOnly = await prisma.beneficiary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BeneficiaryFindManyArgs>(args?: SelectSubset<T, BeneficiaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Beneficiary.
     * @param {BeneficiaryCreateArgs} args - Arguments to create a Beneficiary.
     * @example
     * // Create one Beneficiary
     * const Beneficiary = await prisma.beneficiary.create({
     *   data: {
     *     // ... data to create a Beneficiary
     *   }
     * })
     * 
     */
    create<T extends BeneficiaryCreateArgs>(args: SelectSubset<T, BeneficiaryCreateArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Beneficiaries.
     * @param {BeneficiaryCreateManyArgs} args - Arguments to create many Beneficiaries.
     * @example
     * // Create many Beneficiaries
     * const beneficiary = await prisma.beneficiary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BeneficiaryCreateManyArgs>(args?: SelectSubset<T, BeneficiaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Beneficiaries and returns the data saved in the database.
     * @param {BeneficiaryCreateManyAndReturnArgs} args - Arguments to create many Beneficiaries.
     * @example
     * // Create many Beneficiaries
     * const beneficiary = await prisma.beneficiary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Beneficiaries and only return the `id`
     * const beneficiaryWithIdOnly = await prisma.beneficiary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BeneficiaryCreateManyAndReturnArgs>(args?: SelectSubset<T, BeneficiaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Beneficiary.
     * @param {BeneficiaryDeleteArgs} args - Arguments to delete one Beneficiary.
     * @example
     * // Delete one Beneficiary
     * const Beneficiary = await prisma.beneficiary.delete({
     *   where: {
     *     // ... filter to delete one Beneficiary
     *   }
     * })
     * 
     */
    delete<T extends BeneficiaryDeleteArgs>(args: SelectSubset<T, BeneficiaryDeleteArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Beneficiary.
     * @param {BeneficiaryUpdateArgs} args - Arguments to update one Beneficiary.
     * @example
     * // Update one Beneficiary
     * const beneficiary = await prisma.beneficiary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BeneficiaryUpdateArgs>(args: SelectSubset<T, BeneficiaryUpdateArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Beneficiaries.
     * @param {BeneficiaryDeleteManyArgs} args - Arguments to filter Beneficiaries to delete.
     * @example
     * // Delete a few Beneficiaries
     * const { count } = await prisma.beneficiary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BeneficiaryDeleteManyArgs>(args?: SelectSubset<T, BeneficiaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beneficiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beneficiaries
     * const beneficiary = await prisma.beneficiary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BeneficiaryUpdateManyArgs>(args: SelectSubset<T, BeneficiaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beneficiaries and returns the data updated in the database.
     * @param {BeneficiaryUpdateManyAndReturnArgs} args - Arguments to update many Beneficiaries.
     * @example
     * // Update many Beneficiaries
     * const beneficiary = await prisma.beneficiary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Beneficiaries and only return the `id`
     * const beneficiaryWithIdOnly = await prisma.beneficiary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BeneficiaryUpdateManyAndReturnArgs>(args: SelectSubset<T, BeneficiaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Beneficiary.
     * @param {BeneficiaryUpsertArgs} args - Arguments to update or create a Beneficiary.
     * @example
     * // Update or create a Beneficiary
     * const beneficiary = await prisma.beneficiary.upsert({
     *   create: {
     *     // ... data to create a Beneficiary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Beneficiary we want to update
     *   }
     * })
     */
    upsert<T extends BeneficiaryUpsertArgs>(args: SelectSubset<T, BeneficiaryUpsertArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Beneficiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryCountArgs} args - Arguments to filter Beneficiaries to count.
     * @example
     * // Count the number of Beneficiaries
     * const count = await prisma.beneficiary.count({
     *   where: {
     *     // ... the filter for the Beneficiaries we want to count
     *   }
     * })
    **/
    count<T extends BeneficiaryCountArgs>(
      args?: Subset<T, BeneficiaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BeneficiaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Beneficiary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BeneficiaryAggregateArgs>(args: Subset<T, BeneficiaryAggregateArgs>): Prisma.PrismaPromise<GetBeneficiaryAggregateType<T>>

    /**
     * Group by Beneficiary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BeneficiaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BeneficiaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BeneficiaryGroupByArgs['orderBy'] }
        : { orderBy?: BeneficiaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BeneficiaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBeneficiaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Beneficiary model
   */
  readonly fields: BeneficiaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Beneficiary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BeneficiaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    remittanceTransfers<T extends Beneficiary$remittanceTransfersArgs<ExtArgs> = {}>(args?: Subset<T, Beneficiary$remittanceTransfersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemittanceTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Beneficiary model
   */
  interface BeneficiaryFieldRefs {
    readonly id: FieldRef<"Beneficiary", 'String'>
    readonly userId: FieldRef<"Beneficiary", 'String'>
    readonly deliveryChannel: FieldRef<"Beneficiary", 'DeliveryChannel'>
    readonly fullName: FieldRef<"Beneficiary", 'String'>
    readonly country: FieldRef<"Beneficiary", 'String'>
    readonly bankName: FieldRef<"Beneficiary", 'String'>
    readonly accountNumber: FieldRef<"Beneficiary", 'String'>
    readonly swiftBic: FieldRef<"Beneficiary", 'String'>
    readonly mobileMoneyProvider: FieldRef<"Beneficiary", 'String'>
    readonly mobileNumber: FieldRef<"Beneficiary", 'String'>
    readonly createdAt: FieldRef<"Beneficiary", 'DateTime'>
    readonly updatedAt: FieldRef<"Beneficiary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Beneficiary findUnique
   */
  export type BeneficiaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiary to fetch.
     */
    where: BeneficiaryWhereUniqueInput
  }

  /**
   * Beneficiary findUniqueOrThrow
   */
  export type BeneficiaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiary to fetch.
     */
    where: BeneficiaryWhereUniqueInput
  }

  /**
   * Beneficiary findFirst
   */
  export type BeneficiaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiary to fetch.
     */
    where?: BeneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beneficiaries to fetch.
     */
    orderBy?: BeneficiaryOrderByWithRelationInput | BeneficiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beneficiaries.
     */
    cursor?: BeneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beneficiaries.
     */
    distinct?: BeneficiaryScalarFieldEnum | BeneficiaryScalarFieldEnum[]
  }

  /**
   * Beneficiary findFirstOrThrow
   */
  export type BeneficiaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiary to fetch.
     */
    where?: BeneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beneficiaries to fetch.
     */
    orderBy?: BeneficiaryOrderByWithRelationInput | BeneficiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beneficiaries.
     */
    cursor?: BeneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beneficiaries.
     */
    distinct?: BeneficiaryScalarFieldEnum | BeneficiaryScalarFieldEnum[]
  }

  /**
   * Beneficiary findMany
   */
  export type BeneficiaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    /**
     * Filter, which Beneficiaries to fetch.
     */
    where?: BeneficiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beneficiaries to fetch.
     */
    orderBy?: BeneficiaryOrderByWithRelationInput | BeneficiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Beneficiaries.
     */
    cursor?: BeneficiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beneficiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beneficiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beneficiaries.
     */
    distinct?: BeneficiaryScalarFieldEnum | BeneficiaryScalarFieldEnum[]
  }

  /**
   * Beneficiary create
   */
  export type BeneficiaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    /**
     * The data needed to create a Beneficiary.
     */
    data: XOR<BeneficiaryCreateInput, BeneficiaryUncheckedCreateInput>
  }

  /**
   * Beneficiary createMany
   */
  export type BeneficiaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Beneficiaries.
     */
    data: BeneficiaryCreateManyInput | BeneficiaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Beneficiary createManyAndReturn
   */
  export type BeneficiaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * The data used to create many Beneficiaries.
     */
    data: BeneficiaryCreateManyInput | BeneficiaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Beneficiary update
   */
  export type BeneficiaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    /**
     * The data needed to update a Beneficiary.
     */
    data: XOR<BeneficiaryUpdateInput, BeneficiaryUncheckedUpdateInput>
    /**
     * Choose, which Beneficiary to update.
     */
    where: BeneficiaryWhereUniqueInput
  }

  /**
   * Beneficiary updateMany
   */
  export type BeneficiaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Beneficiaries.
     */
    data: XOR<BeneficiaryUpdateManyMutationInput, BeneficiaryUncheckedUpdateManyInput>
    /**
     * Filter which Beneficiaries to update
     */
    where?: BeneficiaryWhereInput
    /**
     * Limit how many Beneficiaries to update.
     */
    limit?: number
  }

  /**
   * Beneficiary updateManyAndReturn
   */
  export type BeneficiaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * The data used to update Beneficiaries.
     */
    data: XOR<BeneficiaryUpdateManyMutationInput, BeneficiaryUncheckedUpdateManyInput>
    /**
     * Filter which Beneficiaries to update
     */
    where?: BeneficiaryWhereInput
    /**
     * Limit how many Beneficiaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Beneficiary upsert
   */
  export type BeneficiaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    /**
     * The filter to search for the Beneficiary to update in case it exists.
     */
    where: BeneficiaryWhereUniqueInput
    /**
     * In case the Beneficiary found by the `where` argument doesn't exist, create a new Beneficiary with this data.
     */
    create: XOR<BeneficiaryCreateInput, BeneficiaryUncheckedCreateInput>
    /**
     * In case the Beneficiary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BeneficiaryUpdateInput, BeneficiaryUncheckedUpdateInput>
  }

  /**
   * Beneficiary delete
   */
  export type BeneficiaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    /**
     * Filter which Beneficiary to delete.
     */
    where: BeneficiaryWhereUniqueInput
  }

  /**
   * Beneficiary deleteMany
   */
  export type BeneficiaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beneficiaries to delete
     */
    where?: BeneficiaryWhereInput
    /**
     * Limit how many Beneficiaries to delete.
     */
    limit?: number
  }

  /**
   * Beneficiary.remittanceTransfers
   */
  export type Beneficiary$remittanceTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemittanceTransfer
     */
    select?: RemittanceTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemittanceTransfer
     */
    omit?: RemittanceTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemittanceTransferInclude<ExtArgs> | null
    where?: RemittanceTransferWhereInput
    orderBy?: RemittanceTransferOrderByWithRelationInput | RemittanceTransferOrderByWithRelationInput[]
    cursor?: RemittanceTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RemittanceTransferScalarFieldEnum | RemittanceTransferScalarFieldEnum[]
  }

  /**
   * Beneficiary without action
   */
  export type BeneficiaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
  }


  /**
   * Model RemittanceTransfer
   */

  export type AggregateRemittanceTransfer = {
    _count: RemittanceTransferCountAggregateOutputType | null
    _avg: RemittanceTransferAvgAggregateOutputType | null
    _sum: RemittanceTransferSumAggregateOutputType | null
    _min: RemittanceTransferMinAggregateOutputType | null
    _max: RemittanceTransferMaxAggregateOutputType | null
  }

  export type RemittanceTransferAvgAggregateOutputType = {
    currentStep: number | null
    payAmount: Decimal | null
    receiveAmount: Decimal | null
    fxRateSnapshot: Decimal | null
    feeAmount: Decimal | null
  }

  export type RemittanceTransferSumAggregateOutputType = {
    currentStep: number | null
    payAmount: Decimal | null
    receiveAmount: Decimal | null
    fxRateSnapshot: Decimal | null
    feeAmount: Decimal | null
  }

  export type RemittanceTransferMinAggregateOutputType = {
    id: string | null
    userId: string | null
    referenceCode: string | null
    status: $Enums.RemittanceStatus | null
    currentStep: number | null
    senderCountryIso2: string | null
    payCurrency: string | null
    payAmount: Decimal | null
    recipientCountryLabel: string | null
    recipientCountryIso2: string | null
    receiveCurrency: string | null
    receiveAmount: Decimal | null
    fxRateSnapshot: Decimal | null
    feeAmount: Decimal | null
    quoteExpiresAt: Date | null
    beneficiaryId: string | null
    sourceOfIncome: string | null
    transferPurpose: string | null
    relationshipToRecipient: string | null
    complianceAccepted: boolean | null
    payInMethod: $Enums.PayInMethod | null
    payerPhone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RemittanceTransferMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    referenceCode: string | null
    status: $Enums.RemittanceStatus | null
    currentStep: number | null
    senderCountryIso2: string | null
    payCurrency: string | null
    payAmount: Decimal | null
    recipientCountryLabel: string | null
    recipientCountryIso2: string | null
    receiveCurrency: string | null
    receiveAmount: Decimal | null
    fxRateSnapshot: Decimal | null
    feeAmount: Decimal | null
    quoteExpiresAt: Date | null
    beneficiaryId: string | null
    sourceOfIncome: string | null
    transferPurpose: string | null
    relationshipToRecipient: string | null
    complianceAccepted: boolean | null
    payInMethod: $Enums.PayInMethod | null
    payerPhone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RemittanceTransferCountAggregateOutputType = {
    id: number
    userId: number
    referenceCode: number
    status: number
    currentStep: number
    senderCountryIso2: number
    payCurrency: number
    payAmount: number
    recipientCountryLabel: number
    recipientCountryIso2: number
    receiveCurrency: number
    receiveAmount: number
    fxRateSnapshot: number
    feeAmount: number
    quoteExpiresAt: number
    beneficiaryId: number
    sourceOfIncome: number
    transferPurpose: number
    relationshipToRecipient: number
    complianceAccepted: number
    payInMethod: number
    payerPhone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RemittanceTransferAvgAggregateInputType = {
    currentStep?: true
    payAmount?: true
    receiveAmount?: true
    fxRateSnapshot?: true
    feeAmount?: true
  }

  export type RemittanceTransferSumAggregateInputType = {
    currentStep?: true
    payAmount?: true
    receiveAmount?: true
    fxRateSnapshot?: true
    feeAmount?: true
  }

  export type RemittanceTransferMinAggregateInputType = {
    id?: true
    userId?: true
    referenceCode?: true
    status?: true
    currentStep?: true
    senderCountryIso2?: true
    payCurrency?: true
    payAmount?: true
    recipientCountryLabel?: true
    recipientCountryIso2?: true
    receiveCurrency?: true
    receiveAmount?: true
    fxRateSnapshot?: true
    feeAmount?: true
    quoteExpiresAt?: true
    beneficiaryId?: true
    sourceOfIncome?: true
    transferPurpose?: true
    relationshipToRecipient?: true
    complianceAccepted?: true
    payInMethod?: true
    payerPhone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RemittanceTransferMaxAggregateInputType = {
    id?: true
    userId?: true
    referenceCode?: true
    status?: true
    currentStep?: true
    senderCountryIso2?: true
    payCurrency?: true
    payAmount?: true
    recipientCountryLabel?: true
    recipientCountryIso2?: true
    receiveCurrency?: true
    receiveAmount?: true
    fxRateSnapshot?: true
    feeAmount?: true
    quoteExpiresAt?: true
    beneficiaryId?: true
    sourceOfIncome?: true
    transferPurpose?: true
    relationshipToRecipient?: true
    complianceAccepted?: true
    payInMethod?: true
    payerPhone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RemittanceTransferCountAggregateInputType = {
    id?: true
    userId?: true
    referenceCode?: true
    status?: true
    currentStep?: true
    senderCountryIso2?: true
    payCurrency?: true
    payAmount?: true
    recipientCountryLabel?: true
    recipientCountryIso2?: true
    receiveCurrency?: true
    receiveAmount?: true
    fxRateSnapshot?: true
    feeAmount?: true
    quoteExpiresAt?: true
    beneficiaryId?: true
    sourceOfIncome?: true
    transferPurpose?: true
    relationshipToRecipient?: true
    complianceAccepted?: true
    payInMethod?: true
    payerPhone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RemittanceTransferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RemittanceTransfer to aggregate.
     */
    where?: RemittanceTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemittanceTransfers to fetch.
     */
    orderBy?: RemittanceTransferOrderByWithRelationInput | RemittanceTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RemittanceTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemittanceTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemittanceTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RemittanceTransfers
    **/
    _count?: true | RemittanceTransferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RemittanceTransferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RemittanceTransferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RemittanceTransferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RemittanceTransferMaxAggregateInputType
  }

  export type GetRemittanceTransferAggregateType<T extends RemittanceTransferAggregateArgs> = {
        [P in keyof T & keyof AggregateRemittanceTransfer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRemittanceTransfer[P]>
      : GetScalarType<T[P], AggregateRemittanceTransfer[P]>
  }




  export type RemittanceTransferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RemittanceTransferWhereInput
    orderBy?: RemittanceTransferOrderByWithAggregationInput | RemittanceTransferOrderByWithAggregationInput[]
    by: RemittanceTransferScalarFieldEnum[] | RemittanceTransferScalarFieldEnum
    having?: RemittanceTransferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RemittanceTransferCountAggregateInputType | true
    _avg?: RemittanceTransferAvgAggregateInputType
    _sum?: RemittanceTransferSumAggregateInputType
    _min?: RemittanceTransferMinAggregateInputType
    _max?: RemittanceTransferMaxAggregateInputType
  }

  export type RemittanceTransferGroupByOutputType = {
    id: string
    userId: string
    referenceCode: string
    status: $Enums.RemittanceStatus
    currentStep: number
    senderCountryIso2: string | null
    payCurrency: string | null
    payAmount: Decimal | null
    recipientCountryLabel: string | null
    recipientCountryIso2: string | null
    receiveCurrency: string | null
    receiveAmount: Decimal | null
    fxRateSnapshot: Decimal | null
    feeAmount: Decimal | null
    quoteExpiresAt: Date | null
    beneficiaryId: string | null
    sourceOfIncome: string | null
    transferPurpose: string | null
    relationshipToRecipient: string | null
    complianceAccepted: boolean
    payInMethod: $Enums.PayInMethod | null
    payerPhone: string | null
    createdAt: Date
    updatedAt: Date
    _count: RemittanceTransferCountAggregateOutputType | null
    _avg: RemittanceTransferAvgAggregateOutputType | null
    _sum: RemittanceTransferSumAggregateOutputType | null
    _min: RemittanceTransferMinAggregateOutputType | null
    _max: RemittanceTransferMaxAggregateOutputType | null
  }

  type GetRemittanceTransferGroupByPayload<T extends RemittanceTransferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RemittanceTransferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RemittanceTransferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RemittanceTransferGroupByOutputType[P]>
            : GetScalarType<T[P], RemittanceTransferGroupByOutputType[P]>
        }
      >
    >


  export type RemittanceTransferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    referenceCode?: boolean
    status?: boolean
    currentStep?: boolean
    senderCountryIso2?: boolean
    payCurrency?: boolean
    payAmount?: boolean
    recipientCountryLabel?: boolean
    recipientCountryIso2?: boolean
    receiveCurrency?: boolean
    receiveAmount?: boolean
    fxRateSnapshot?: boolean
    feeAmount?: boolean
    quoteExpiresAt?: boolean
    beneficiaryId?: boolean
    sourceOfIncome?: boolean
    transferPurpose?: boolean
    relationshipToRecipient?: boolean
    complianceAccepted?: boolean
    payInMethod?: boolean
    payerPhone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    beneficiary?: boolean | RemittanceTransfer$beneficiaryArgs<ExtArgs>
  }, ExtArgs["result"]["remittanceTransfer"]>

  export type RemittanceTransferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    referenceCode?: boolean
    status?: boolean
    currentStep?: boolean
    senderCountryIso2?: boolean
    payCurrency?: boolean
    payAmount?: boolean
    recipientCountryLabel?: boolean
    recipientCountryIso2?: boolean
    receiveCurrency?: boolean
    receiveAmount?: boolean
    fxRateSnapshot?: boolean
    feeAmount?: boolean
    quoteExpiresAt?: boolean
    beneficiaryId?: boolean
    sourceOfIncome?: boolean
    transferPurpose?: boolean
    relationshipToRecipient?: boolean
    complianceAccepted?: boolean
    payInMethod?: boolean
    payerPhone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    beneficiary?: boolean | RemittanceTransfer$beneficiaryArgs<ExtArgs>
  }, ExtArgs["result"]["remittanceTransfer"]>

  export type RemittanceTransferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    referenceCode?: boolean
    status?: boolean
    currentStep?: boolean
    senderCountryIso2?: boolean
    payCurrency?: boolean
    payAmount?: boolean
    recipientCountryLabel?: boolean
    recipientCountryIso2?: boolean
    receiveCurrency?: boolean
    receiveAmount?: boolean
    fxRateSnapshot?: boolean
    feeAmount?: boolean
    quoteExpiresAt?: boolean
    beneficiaryId?: boolean
    sourceOfIncome?: boolean
    transferPurpose?: boolean
    relationshipToRecipient?: boolean
    complianceAccepted?: boolean
    payInMethod?: boolean
    payerPhone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    beneficiary?: boolean | RemittanceTransfer$beneficiaryArgs<ExtArgs>
  }, ExtArgs["result"]["remittanceTransfer"]>

  export type RemittanceTransferSelectScalar = {
    id?: boolean
    userId?: boolean
    referenceCode?: boolean
    status?: boolean
    currentStep?: boolean
    senderCountryIso2?: boolean
    payCurrency?: boolean
    payAmount?: boolean
    recipientCountryLabel?: boolean
    recipientCountryIso2?: boolean
    receiveCurrency?: boolean
    receiveAmount?: boolean
    fxRateSnapshot?: boolean
    feeAmount?: boolean
    quoteExpiresAt?: boolean
    beneficiaryId?: boolean
    sourceOfIncome?: boolean
    transferPurpose?: boolean
    relationshipToRecipient?: boolean
    complianceAccepted?: boolean
    payInMethod?: boolean
    payerPhone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RemittanceTransferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "referenceCode" | "status" | "currentStep" | "senderCountryIso2" | "payCurrency" | "payAmount" | "recipientCountryLabel" | "recipientCountryIso2" | "receiveCurrency" | "receiveAmount" | "fxRateSnapshot" | "feeAmount" | "quoteExpiresAt" | "beneficiaryId" | "sourceOfIncome" | "transferPurpose" | "relationshipToRecipient" | "complianceAccepted" | "payInMethod" | "payerPhone" | "createdAt" | "updatedAt", ExtArgs["result"]["remittanceTransfer"]>
  export type RemittanceTransferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    beneficiary?: boolean | RemittanceTransfer$beneficiaryArgs<ExtArgs>
  }
  export type RemittanceTransferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    beneficiary?: boolean | RemittanceTransfer$beneficiaryArgs<ExtArgs>
  }
  export type RemittanceTransferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    beneficiary?: boolean | RemittanceTransfer$beneficiaryArgs<ExtArgs>
  }

  export type $RemittanceTransferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RemittanceTransfer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      beneficiary: Prisma.$BeneficiaryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      referenceCode: string
      status: $Enums.RemittanceStatus
      currentStep: number
      senderCountryIso2: string | null
      payCurrency: string | null
      payAmount: Prisma.Decimal | null
      recipientCountryLabel: string | null
      recipientCountryIso2: string | null
      receiveCurrency: string | null
      receiveAmount: Prisma.Decimal | null
      fxRateSnapshot: Prisma.Decimal | null
      feeAmount: Prisma.Decimal | null
      quoteExpiresAt: Date | null
      beneficiaryId: string | null
      sourceOfIncome: string | null
      transferPurpose: string | null
      relationshipToRecipient: string | null
      complianceAccepted: boolean
      payInMethod: $Enums.PayInMethod | null
      payerPhone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["remittanceTransfer"]>
    composites: {}
  }

  type RemittanceTransferGetPayload<S extends boolean | null | undefined | RemittanceTransferDefaultArgs> = $Result.GetResult<Prisma.$RemittanceTransferPayload, S>

  type RemittanceTransferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RemittanceTransferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RemittanceTransferCountAggregateInputType | true
    }

  export interface RemittanceTransferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RemittanceTransfer'], meta: { name: 'RemittanceTransfer' } }
    /**
     * Find zero or one RemittanceTransfer that matches the filter.
     * @param {RemittanceTransferFindUniqueArgs} args - Arguments to find a RemittanceTransfer
     * @example
     * // Get one RemittanceTransfer
     * const remittanceTransfer = await prisma.remittanceTransfer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RemittanceTransferFindUniqueArgs>(args: SelectSubset<T, RemittanceTransferFindUniqueArgs<ExtArgs>>): Prisma__RemittanceTransferClient<$Result.GetResult<Prisma.$RemittanceTransferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RemittanceTransfer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RemittanceTransferFindUniqueOrThrowArgs} args - Arguments to find a RemittanceTransfer
     * @example
     * // Get one RemittanceTransfer
     * const remittanceTransfer = await prisma.remittanceTransfer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RemittanceTransferFindUniqueOrThrowArgs>(args: SelectSubset<T, RemittanceTransferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RemittanceTransferClient<$Result.GetResult<Prisma.$RemittanceTransferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RemittanceTransfer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemittanceTransferFindFirstArgs} args - Arguments to find a RemittanceTransfer
     * @example
     * // Get one RemittanceTransfer
     * const remittanceTransfer = await prisma.remittanceTransfer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RemittanceTransferFindFirstArgs>(args?: SelectSubset<T, RemittanceTransferFindFirstArgs<ExtArgs>>): Prisma__RemittanceTransferClient<$Result.GetResult<Prisma.$RemittanceTransferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RemittanceTransfer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemittanceTransferFindFirstOrThrowArgs} args - Arguments to find a RemittanceTransfer
     * @example
     * // Get one RemittanceTransfer
     * const remittanceTransfer = await prisma.remittanceTransfer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RemittanceTransferFindFirstOrThrowArgs>(args?: SelectSubset<T, RemittanceTransferFindFirstOrThrowArgs<ExtArgs>>): Prisma__RemittanceTransferClient<$Result.GetResult<Prisma.$RemittanceTransferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RemittanceTransfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemittanceTransferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RemittanceTransfers
     * const remittanceTransfers = await prisma.remittanceTransfer.findMany()
     * 
     * // Get first 10 RemittanceTransfers
     * const remittanceTransfers = await prisma.remittanceTransfer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const remittanceTransferWithIdOnly = await prisma.remittanceTransfer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RemittanceTransferFindManyArgs>(args?: SelectSubset<T, RemittanceTransferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemittanceTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RemittanceTransfer.
     * @param {RemittanceTransferCreateArgs} args - Arguments to create a RemittanceTransfer.
     * @example
     * // Create one RemittanceTransfer
     * const RemittanceTransfer = await prisma.remittanceTransfer.create({
     *   data: {
     *     // ... data to create a RemittanceTransfer
     *   }
     * })
     * 
     */
    create<T extends RemittanceTransferCreateArgs>(args: SelectSubset<T, RemittanceTransferCreateArgs<ExtArgs>>): Prisma__RemittanceTransferClient<$Result.GetResult<Prisma.$RemittanceTransferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RemittanceTransfers.
     * @param {RemittanceTransferCreateManyArgs} args - Arguments to create many RemittanceTransfers.
     * @example
     * // Create many RemittanceTransfers
     * const remittanceTransfer = await prisma.remittanceTransfer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RemittanceTransferCreateManyArgs>(args?: SelectSubset<T, RemittanceTransferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RemittanceTransfers and returns the data saved in the database.
     * @param {RemittanceTransferCreateManyAndReturnArgs} args - Arguments to create many RemittanceTransfers.
     * @example
     * // Create many RemittanceTransfers
     * const remittanceTransfer = await prisma.remittanceTransfer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RemittanceTransfers and only return the `id`
     * const remittanceTransferWithIdOnly = await prisma.remittanceTransfer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RemittanceTransferCreateManyAndReturnArgs>(args?: SelectSubset<T, RemittanceTransferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemittanceTransferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RemittanceTransfer.
     * @param {RemittanceTransferDeleteArgs} args - Arguments to delete one RemittanceTransfer.
     * @example
     * // Delete one RemittanceTransfer
     * const RemittanceTransfer = await prisma.remittanceTransfer.delete({
     *   where: {
     *     // ... filter to delete one RemittanceTransfer
     *   }
     * })
     * 
     */
    delete<T extends RemittanceTransferDeleteArgs>(args: SelectSubset<T, RemittanceTransferDeleteArgs<ExtArgs>>): Prisma__RemittanceTransferClient<$Result.GetResult<Prisma.$RemittanceTransferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RemittanceTransfer.
     * @param {RemittanceTransferUpdateArgs} args - Arguments to update one RemittanceTransfer.
     * @example
     * // Update one RemittanceTransfer
     * const remittanceTransfer = await prisma.remittanceTransfer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RemittanceTransferUpdateArgs>(args: SelectSubset<T, RemittanceTransferUpdateArgs<ExtArgs>>): Prisma__RemittanceTransferClient<$Result.GetResult<Prisma.$RemittanceTransferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RemittanceTransfers.
     * @param {RemittanceTransferDeleteManyArgs} args - Arguments to filter RemittanceTransfers to delete.
     * @example
     * // Delete a few RemittanceTransfers
     * const { count } = await prisma.remittanceTransfer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RemittanceTransferDeleteManyArgs>(args?: SelectSubset<T, RemittanceTransferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RemittanceTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemittanceTransferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RemittanceTransfers
     * const remittanceTransfer = await prisma.remittanceTransfer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RemittanceTransferUpdateManyArgs>(args: SelectSubset<T, RemittanceTransferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RemittanceTransfers and returns the data updated in the database.
     * @param {RemittanceTransferUpdateManyAndReturnArgs} args - Arguments to update many RemittanceTransfers.
     * @example
     * // Update many RemittanceTransfers
     * const remittanceTransfer = await prisma.remittanceTransfer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RemittanceTransfers and only return the `id`
     * const remittanceTransferWithIdOnly = await prisma.remittanceTransfer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RemittanceTransferUpdateManyAndReturnArgs>(args: SelectSubset<T, RemittanceTransferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemittanceTransferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RemittanceTransfer.
     * @param {RemittanceTransferUpsertArgs} args - Arguments to update or create a RemittanceTransfer.
     * @example
     * // Update or create a RemittanceTransfer
     * const remittanceTransfer = await prisma.remittanceTransfer.upsert({
     *   create: {
     *     // ... data to create a RemittanceTransfer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RemittanceTransfer we want to update
     *   }
     * })
     */
    upsert<T extends RemittanceTransferUpsertArgs>(args: SelectSubset<T, RemittanceTransferUpsertArgs<ExtArgs>>): Prisma__RemittanceTransferClient<$Result.GetResult<Prisma.$RemittanceTransferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RemittanceTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemittanceTransferCountArgs} args - Arguments to filter RemittanceTransfers to count.
     * @example
     * // Count the number of RemittanceTransfers
     * const count = await prisma.remittanceTransfer.count({
     *   where: {
     *     // ... the filter for the RemittanceTransfers we want to count
     *   }
     * })
    **/
    count<T extends RemittanceTransferCountArgs>(
      args?: Subset<T, RemittanceTransferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RemittanceTransferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RemittanceTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemittanceTransferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RemittanceTransferAggregateArgs>(args: Subset<T, RemittanceTransferAggregateArgs>): Prisma.PrismaPromise<GetRemittanceTransferAggregateType<T>>

    /**
     * Group by RemittanceTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemittanceTransferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RemittanceTransferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RemittanceTransferGroupByArgs['orderBy'] }
        : { orderBy?: RemittanceTransferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RemittanceTransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRemittanceTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RemittanceTransfer model
   */
  readonly fields: RemittanceTransferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RemittanceTransfer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RemittanceTransferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    beneficiary<T extends RemittanceTransfer$beneficiaryArgs<ExtArgs> = {}>(args?: Subset<T, RemittanceTransfer$beneficiaryArgs<ExtArgs>>): Prisma__BeneficiaryClient<$Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RemittanceTransfer model
   */
  interface RemittanceTransferFieldRefs {
    readonly id: FieldRef<"RemittanceTransfer", 'String'>
    readonly userId: FieldRef<"RemittanceTransfer", 'String'>
    readonly referenceCode: FieldRef<"RemittanceTransfer", 'String'>
    readonly status: FieldRef<"RemittanceTransfer", 'RemittanceStatus'>
    readonly currentStep: FieldRef<"RemittanceTransfer", 'Int'>
    readonly senderCountryIso2: FieldRef<"RemittanceTransfer", 'String'>
    readonly payCurrency: FieldRef<"RemittanceTransfer", 'String'>
    readonly payAmount: FieldRef<"RemittanceTransfer", 'Decimal'>
    readonly recipientCountryLabel: FieldRef<"RemittanceTransfer", 'String'>
    readonly recipientCountryIso2: FieldRef<"RemittanceTransfer", 'String'>
    readonly receiveCurrency: FieldRef<"RemittanceTransfer", 'String'>
    readonly receiveAmount: FieldRef<"RemittanceTransfer", 'Decimal'>
    readonly fxRateSnapshot: FieldRef<"RemittanceTransfer", 'Decimal'>
    readonly feeAmount: FieldRef<"RemittanceTransfer", 'Decimal'>
    readonly quoteExpiresAt: FieldRef<"RemittanceTransfer", 'DateTime'>
    readonly beneficiaryId: FieldRef<"RemittanceTransfer", 'String'>
    readonly sourceOfIncome: FieldRef<"RemittanceTransfer", 'String'>
    readonly transferPurpose: FieldRef<"RemittanceTransfer", 'String'>
    readonly relationshipToRecipient: FieldRef<"RemittanceTransfer", 'String'>
    readonly complianceAccepted: FieldRef<"RemittanceTransfer", 'Boolean'>
    readonly payInMethod: FieldRef<"RemittanceTransfer", 'PayInMethod'>
    readonly payerPhone: FieldRef<"RemittanceTransfer", 'String'>
    readonly createdAt: FieldRef<"RemittanceTransfer", 'DateTime'>
    readonly updatedAt: FieldRef<"RemittanceTransfer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RemittanceTransfer findUnique
   */
  export type RemittanceTransferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemittanceTransfer
     */
    select?: RemittanceTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemittanceTransfer
     */
    omit?: RemittanceTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemittanceTransferInclude<ExtArgs> | null
    /**
     * Filter, which RemittanceTransfer to fetch.
     */
    where: RemittanceTransferWhereUniqueInput
  }

  /**
   * RemittanceTransfer findUniqueOrThrow
   */
  export type RemittanceTransferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemittanceTransfer
     */
    select?: RemittanceTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemittanceTransfer
     */
    omit?: RemittanceTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemittanceTransferInclude<ExtArgs> | null
    /**
     * Filter, which RemittanceTransfer to fetch.
     */
    where: RemittanceTransferWhereUniqueInput
  }

  /**
   * RemittanceTransfer findFirst
   */
  export type RemittanceTransferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemittanceTransfer
     */
    select?: RemittanceTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemittanceTransfer
     */
    omit?: RemittanceTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemittanceTransferInclude<ExtArgs> | null
    /**
     * Filter, which RemittanceTransfer to fetch.
     */
    where?: RemittanceTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemittanceTransfers to fetch.
     */
    orderBy?: RemittanceTransferOrderByWithRelationInput | RemittanceTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RemittanceTransfers.
     */
    cursor?: RemittanceTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemittanceTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemittanceTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemittanceTransfers.
     */
    distinct?: RemittanceTransferScalarFieldEnum | RemittanceTransferScalarFieldEnum[]
  }

  /**
   * RemittanceTransfer findFirstOrThrow
   */
  export type RemittanceTransferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemittanceTransfer
     */
    select?: RemittanceTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemittanceTransfer
     */
    omit?: RemittanceTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemittanceTransferInclude<ExtArgs> | null
    /**
     * Filter, which RemittanceTransfer to fetch.
     */
    where?: RemittanceTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemittanceTransfers to fetch.
     */
    orderBy?: RemittanceTransferOrderByWithRelationInput | RemittanceTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RemittanceTransfers.
     */
    cursor?: RemittanceTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemittanceTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemittanceTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemittanceTransfers.
     */
    distinct?: RemittanceTransferScalarFieldEnum | RemittanceTransferScalarFieldEnum[]
  }

  /**
   * RemittanceTransfer findMany
   */
  export type RemittanceTransferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemittanceTransfer
     */
    select?: RemittanceTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemittanceTransfer
     */
    omit?: RemittanceTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemittanceTransferInclude<ExtArgs> | null
    /**
     * Filter, which RemittanceTransfers to fetch.
     */
    where?: RemittanceTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemittanceTransfers to fetch.
     */
    orderBy?: RemittanceTransferOrderByWithRelationInput | RemittanceTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RemittanceTransfers.
     */
    cursor?: RemittanceTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemittanceTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemittanceTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemittanceTransfers.
     */
    distinct?: RemittanceTransferScalarFieldEnum | RemittanceTransferScalarFieldEnum[]
  }

  /**
   * RemittanceTransfer create
   */
  export type RemittanceTransferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemittanceTransfer
     */
    select?: RemittanceTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemittanceTransfer
     */
    omit?: RemittanceTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemittanceTransferInclude<ExtArgs> | null
    /**
     * The data needed to create a RemittanceTransfer.
     */
    data: XOR<RemittanceTransferCreateInput, RemittanceTransferUncheckedCreateInput>
  }

  /**
   * RemittanceTransfer createMany
   */
  export type RemittanceTransferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RemittanceTransfers.
     */
    data: RemittanceTransferCreateManyInput | RemittanceTransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RemittanceTransfer createManyAndReturn
   */
  export type RemittanceTransferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemittanceTransfer
     */
    select?: RemittanceTransferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RemittanceTransfer
     */
    omit?: RemittanceTransferOmit<ExtArgs> | null
    /**
     * The data used to create many RemittanceTransfers.
     */
    data: RemittanceTransferCreateManyInput | RemittanceTransferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemittanceTransferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RemittanceTransfer update
   */
  export type RemittanceTransferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemittanceTransfer
     */
    select?: RemittanceTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemittanceTransfer
     */
    omit?: RemittanceTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemittanceTransferInclude<ExtArgs> | null
    /**
     * The data needed to update a RemittanceTransfer.
     */
    data: XOR<RemittanceTransferUpdateInput, RemittanceTransferUncheckedUpdateInput>
    /**
     * Choose, which RemittanceTransfer to update.
     */
    where: RemittanceTransferWhereUniqueInput
  }

  /**
   * RemittanceTransfer updateMany
   */
  export type RemittanceTransferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RemittanceTransfers.
     */
    data: XOR<RemittanceTransferUpdateManyMutationInput, RemittanceTransferUncheckedUpdateManyInput>
    /**
     * Filter which RemittanceTransfers to update
     */
    where?: RemittanceTransferWhereInput
    /**
     * Limit how many RemittanceTransfers to update.
     */
    limit?: number
  }

  /**
   * RemittanceTransfer updateManyAndReturn
   */
  export type RemittanceTransferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemittanceTransfer
     */
    select?: RemittanceTransferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RemittanceTransfer
     */
    omit?: RemittanceTransferOmit<ExtArgs> | null
    /**
     * The data used to update RemittanceTransfers.
     */
    data: XOR<RemittanceTransferUpdateManyMutationInput, RemittanceTransferUncheckedUpdateManyInput>
    /**
     * Filter which RemittanceTransfers to update
     */
    where?: RemittanceTransferWhereInput
    /**
     * Limit how many RemittanceTransfers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemittanceTransferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RemittanceTransfer upsert
   */
  export type RemittanceTransferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemittanceTransfer
     */
    select?: RemittanceTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemittanceTransfer
     */
    omit?: RemittanceTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemittanceTransferInclude<ExtArgs> | null
    /**
     * The filter to search for the RemittanceTransfer to update in case it exists.
     */
    where: RemittanceTransferWhereUniqueInput
    /**
     * In case the RemittanceTransfer found by the `where` argument doesn't exist, create a new RemittanceTransfer with this data.
     */
    create: XOR<RemittanceTransferCreateInput, RemittanceTransferUncheckedCreateInput>
    /**
     * In case the RemittanceTransfer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RemittanceTransferUpdateInput, RemittanceTransferUncheckedUpdateInput>
  }

  /**
   * RemittanceTransfer delete
   */
  export type RemittanceTransferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemittanceTransfer
     */
    select?: RemittanceTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemittanceTransfer
     */
    omit?: RemittanceTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemittanceTransferInclude<ExtArgs> | null
    /**
     * Filter which RemittanceTransfer to delete.
     */
    where: RemittanceTransferWhereUniqueInput
  }

  /**
   * RemittanceTransfer deleteMany
   */
  export type RemittanceTransferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RemittanceTransfers to delete
     */
    where?: RemittanceTransferWhereInput
    /**
     * Limit how many RemittanceTransfers to delete.
     */
    limit?: number
  }

  /**
   * RemittanceTransfer.beneficiary
   */
  export type RemittanceTransfer$beneficiaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Beneficiary
     */
    select?: BeneficiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Beneficiary
     */
    omit?: BeneficiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BeneficiaryInclude<ExtArgs> | null
    where?: BeneficiaryWhereInput
  }

  /**
   * RemittanceTransfer without action
   */
  export type RemittanceTransferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemittanceTransfer
     */
    select?: RemittanceTransferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemittanceTransfer
     */
    omit?: RemittanceTransferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemittanceTransferInclude<ExtArgs> | null
  }


  /**
   * Model FxRate
   */

  export type AggregateFxRate = {
    _count: FxRateCountAggregateOutputType | null
    _avg: FxRateAvgAggregateOutputType | null
    _sum: FxRateSumAggregateOutputType | null
    _min: FxRateMinAggregateOutputType | null
    _max: FxRateMaxAggregateOutputType | null
  }

  export type FxRateAvgAggregateOutputType = {
    rate: Decimal | null
    feePercent: Decimal | null
    feeFixed: Decimal | null
  }

  export type FxRateSumAggregateOutputType = {
    rate: Decimal | null
    feePercent: Decimal | null
    feeFixed: Decimal | null
  }

  export type FxRateMinAggregateOutputType = {
    id: string | null
    fromCurrency: string | null
    toCurrency: string | null
    rate: Decimal | null
    feePercent: Decimal | null
    feeFixed: Decimal | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FxRateMaxAggregateOutputType = {
    id: string | null
    fromCurrency: string | null
    toCurrency: string | null
    rate: Decimal | null
    feePercent: Decimal | null
    feeFixed: Decimal | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FxRateCountAggregateOutputType = {
    id: number
    fromCurrency: number
    toCurrency: number
    rate: number
    feePercent: number
    feeFixed: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FxRateAvgAggregateInputType = {
    rate?: true
    feePercent?: true
    feeFixed?: true
  }

  export type FxRateSumAggregateInputType = {
    rate?: true
    feePercent?: true
    feeFixed?: true
  }

  export type FxRateMinAggregateInputType = {
    id?: true
    fromCurrency?: true
    toCurrency?: true
    rate?: true
    feePercent?: true
    feeFixed?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FxRateMaxAggregateInputType = {
    id?: true
    fromCurrency?: true
    toCurrency?: true
    rate?: true
    feePercent?: true
    feeFixed?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FxRateCountAggregateInputType = {
    id?: true
    fromCurrency?: true
    toCurrency?: true
    rate?: true
    feePercent?: true
    feeFixed?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FxRateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FxRate to aggregate.
     */
    where?: FxRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FxRates to fetch.
     */
    orderBy?: FxRateOrderByWithRelationInput | FxRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FxRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FxRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FxRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FxRates
    **/
    _count?: true | FxRateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FxRateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FxRateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FxRateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FxRateMaxAggregateInputType
  }

  export type GetFxRateAggregateType<T extends FxRateAggregateArgs> = {
        [P in keyof T & keyof AggregateFxRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFxRate[P]>
      : GetScalarType<T[P], AggregateFxRate[P]>
  }




  export type FxRateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FxRateWhereInput
    orderBy?: FxRateOrderByWithAggregationInput | FxRateOrderByWithAggregationInput[]
    by: FxRateScalarFieldEnum[] | FxRateScalarFieldEnum
    having?: FxRateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FxRateCountAggregateInputType | true
    _avg?: FxRateAvgAggregateInputType
    _sum?: FxRateSumAggregateInputType
    _min?: FxRateMinAggregateInputType
    _max?: FxRateMaxAggregateInputType
  }

  export type FxRateGroupByOutputType = {
    id: string
    fromCurrency: string
    toCurrency: string
    rate: Decimal
    feePercent: Decimal
    feeFixed: Decimal
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: FxRateCountAggregateOutputType | null
    _avg: FxRateAvgAggregateOutputType | null
    _sum: FxRateSumAggregateOutputType | null
    _min: FxRateMinAggregateOutputType | null
    _max: FxRateMaxAggregateOutputType | null
  }

  type GetFxRateGroupByPayload<T extends FxRateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FxRateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FxRateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FxRateGroupByOutputType[P]>
            : GetScalarType<T[P], FxRateGroupByOutputType[P]>
        }
      >
    >


  export type FxRateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromCurrency?: boolean
    toCurrency?: boolean
    rate?: boolean
    feePercent?: boolean
    feeFixed?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fxRate"]>

  export type FxRateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromCurrency?: boolean
    toCurrency?: boolean
    rate?: boolean
    feePercent?: boolean
    feeFixed?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fxRate"]>

  export type FxRateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromCurrency?: boolean
    toCurrency?: boolean
    rate?: boolean
    feePercent?: boolean
    feeFixed?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fxRate"]>

  export type FxRateSelectScalar = {
    id?: boolean
    fromCurrency?: boolean
    toCurrency?: boolean
    rate?: boolean
    feePercent?: boolean
    feeFixed?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FxRateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromCurrency" | "toCurrency" | "rate" | "feePercent" | "feeFixed" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["fxRate"]>

  export type $FxRatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FxRate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromCurrency: string
      toCurrency: string
      rate: Prisma.Decimal
      feePercent: Prisma.Decimal
      feeFixed: Prisma.Decimal
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fxRate"]>
    composites: {}
  }

  type FxRateGetPayload<S extends boolean | null | undefined | FxRateDefaultArgs> = $Result.GetResult<Prisma.$FxRatePayload, S>

  type FxRateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FxRateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FxRateCountAggregateInputType | true
    }

  export interface FxRateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FxRate'], meta: { name: 'FxRate' } }
    /**
     * Find zero or one FxRate that matches the filter.
     * @param {FxRateFindUniqueArgs} args - Arguments to find a FxRate
     * @example
     * // Get one FxRate
     * const fxRate = await prisma.fxRate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FxRateFindUniqueArgs>(args: SelectSubset<T, FxRateFindUniqueArgs<ExtArgs>>): Prisma__FxRateClient<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FxRate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FxRateFindUniqueOrThrowArgs} args - Arguments to find a FxRate
     * @example
     * // Get one FxRate
     * const fxRate = await prisma.fxRate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FxRateFindUniqueOrThrowArgs>(args: SelectSubset<T, FxRateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FxRateClient<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FxRate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxRateFindFirstArgs} args - Arguments to find a FxRate
     * @example
     * // Get one FxRate
     * const fxRate = await prisma.fxRate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FxRateFindFirstArgs>(args?: SelectSubset<T, FxRateFindFirstArgs<ExtArgs>>): Prisma__FxRateClient<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FxRate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxRateFindFirstOrThrowArgs} args - Arguments to find a FxRate
     * @example
     * // Get one FxRate
     * const fxRate = await prisma.fxRate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FxRateFindFirstOrThrowArgs>(args?: SelectSubset<T, FxRateFindFirstOrThrowArgs<ExtArgs>>): Prisma__FxRateClient<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FxRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxRateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FxRates
     * const fxRates = await prisma.fxRate.findMany()
     * 
     * // Get first 10 FxRates
     * const fxRates = await prisma.fxRate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fxRateWithIdOnly = await prisma.fxRate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FxRateFindManyArgs>(args?: SelectSubset<T, FxRateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FxRate.
     * @param {FxRateCreateArgs} args - Arguments to create a FxRate.
     * @example
     * // Create one FxRate
     * const FxRate = await prisma.fxRate.create({
     *   data: {
     *     // ... data to create a FxRate
     *   }
     * })
     * 
     */
    create<T extends FxRateCreateArgs>(args: SelectSubset<T, FxRateCreateArgs<ExtArgs>>): Prisma__FxRateClient<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FxRates.
     * @param {FxRateCreateManyArgs} args - Arguments to create many FxRates.
     * @example
     * // Create many FxRates
     * const fxRate = await prisma.fxRate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FxRateCreateManyArgs>(args?: SelectSubset<T, FxRateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FxRates and returns the data saved in the database.
     * @param {FxRateCreateManyAndReturnArgs} args - Arguments to create many FxRates.
     * @example
     * // Create many FxRates
     * const fxRate = await prisma.fxRate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FxRates and only return the `id`
     * const fxRateWithIdOnly = await prisma.fxRate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FxRateCreateManyAndReturnArgs>(args?: SelectSubset<T, FxRateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FxRate.
     * @param {FxRateDeleteArgs} args - Arguments to delete one FxRate.
     * @example
     * // Delete one FxRate
     * const FxRate = await prisma.fxRate.delete({
     *   where: {
     *     // ... filter to delete one FxRate
     *   }
     * })
     * 
     */
    delete<T extends FxRateDeleteArgs>(args: SelectSubset<T, FxRateDeleteArgs<ExtArgs>>): Prisma__FxRateClient<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FxRate.
     * @param {FxRateUpdateArgs} args - Arguments to update one FxRate.
     * @example
     * // Update one FxRate
     * const fxRate = await prisma.fxRate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FxRateUpdateArgs>(args: SelectSubset<T, FxRateUpdateArgs<ExtArgs>>): Prisma__FxRateClient<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FxRates.
     * @param {FxRateDeleteManyArgs} args - Arguments to filter FxRates to delete.
     * @example
     * // Delete a few FxRates
     * const { count } = await prisma.fxRate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FxRateDeleteManyArgs>(args?: SelectSubset<T, FxRateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FxRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxRateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FxRates
     * const fxRate = await prisma.fxRate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FxRateUpdateManyArgs>(args: SelectSubset<T, FxRateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FxRates and returns the data updated in the database.
     * @param {FxRateUpdateManyAndReturnArgs} args - Arguments to update many FxRates.
     * @example
     * // Update many FxRates
     * const fxRate = await prisma.fxRate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FxRates and only return the `id`
     * const fxRateWithIdOnly = await prisma.fxRate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FxRateUpdateManyAndReturnArgs>(args: SelectSubset<T, FxRateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FxRate.
     * @param {FxRateUpsertArgs} args - Arguments to update or create a FxRate.
     * @example
     * // Update or create a FxRate
     * const fxRate = await prisma.fxRate.upsert({
     *   create: {
     *     // ... data to create a FxRate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FxRate we want to update
     *   }
     * })
     */
    upsert<T extends FxRateUpsertArgs>(args: SelectSubset<T, FxRateUpsertArgs<ExtArgs>>): Prisma__FxRateClient<$Result.GetResult<Prisma.$FxRatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FxRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxRateCountArgs} args - Arguments to filter FxRates to count.
     * @example
     * // Count the number of FxRates
     * const count = await prisma.fxRate.count({
     *   where: {
     *     // ... the filter for the FxRates we want to count
     *   }
     * })
    **/
    count<T extends FxRateCountArgs>(
      args?: Subset<T, FxRateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FxRateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FxRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxRateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FxRateAggregateArgs>(args: Subset<T, FxRateAggregateArgs>): Prisma.PrismaPromise<GetFxRateAggregateType<T>>

    /**
     * Group by FxRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FxRateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FxRateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FxRateGroupByArgs['orderBy'] }
        : { orderBy?: FxRateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FxRateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFxRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FxRate model
   */
  readonly fields: FxRateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FxRate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FxRateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FxRate model
   */
  interface FxRateFieldRefs {
    readonly id: FieldRef<"FxRate", 'String'>
    readonly fromCurrency: FieldRef<"FxRate", 'String'>
    readonly toCurrency: FieldRef<"FxRate", 'String'>
    readonly rate: FieldRef<"FxRate", 'Decimal'>
    readonly feePercent: FieldRef<"FxRate", 'Decimal'>
    readonly feeFixed: FieldRef<"FxRate", 'Decimal'>
    readonly active: FieldRef<"FxRate", 'Boolean'>
    readonly createdAt: FieldRef<"FxRate", 'DateTime'>
    readonly updatedAt: FieldRef<"FxRate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FxRate findUnique
   */
  export type FxRateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * Filter, which FxRate to fetch.
     */
    where: FxRateWhereUniqueInput
  }

  /**
   * FxRate findUniqueOrThrow
   */
  export type FxRateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * Filter, which FxRate to fetch.
     */
    where: FxRateWhereUniqueInput
  }

  /**
   * FxRate findFirst
   */
  export type FxRateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * Filter, which FxRate to fetch.
     */
    where?: FxRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FxRates to fetch.
     */
    orderBy?: FxRateOrderByWithRelationInput | FxRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FxRates.
     */
    cursor?: FxRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FxRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FxRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FxRates.
     */
    distinct?: FxRateScalarFieldEnum | FxRateScalarFieldEnum[]
  }

  /**
   * FxRate findFirstOrThrow
   */
  export type FxRateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * Filter, which FxRate to fetch.
     */
    where?: FxRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FxRates to fetch.
     */
    orderBy?: FxRateOrderByWithRelationInput | FxRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FxRates.
     */
    cursor?: FxRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FxRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FxRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FxRates.
     */
    distinct?: FxRateScalarFieldEnum | FxRateScalarFieldEnum[]
  }

  /**
   * FxRate findMany
   */
  export type FxRateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * Filter, which FxRates to fetch.
     */
    where?: FxRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FxRates to fetch.
     */
    orderBy?: FxRateOrderByWithRelationInput | FxRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FxRates.
     */
    cursor?: FxRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FxRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FxRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FxRates.
     */
    distinct?: FxRateScalarFieldEnum | FxRateScalarFieldEnum[]
  }

  /**
   * FxRate create
   */
  export type FxRateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * The data needed to create a FxRate.
     */
    data: XOR<FxRateCreateInput, FxRateUncheckedCreateInput>
  }

  /**
   * FxRate createMany
   */
  export type FxRateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FxRates.
     */
    data: FxRateCreateManyInput | FxRateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FxRate createManyAndReturn
   */
  export type FxRateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * The data used to create many FxRates.
     */
    data: FxRateCreateManyInput | FxRateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FxRate update
   */
  export type FxRateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * The data needed to update a FxRate.
     */
    data: XOR<FxRateUpdateInput, FxRateUncheckedUpdateInput>
    /**
     * Choose, which FxRate to update.
     */
    where: FxRateWhereUniqueInput
  }

  /**
   * FxRate updateMany
   */
  export type FxRateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FxRates.
     */
    data: XOR<FxRateUpdateManyMutationInput, FxRateUncheckedUpdateManyInput>
    /**
     * Filter which FxRates to update
     */
    where?: FxRateWhereInput
    /**
     * Limit how many FxRates to update.
     */
    limit?: number
  }

  /**
   * FxRate updateManyAndReturn
   */
  export type FxRateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * The data used to update FxRates.
     */
    data: XOR<FxRateUpdateManyMutationInput, FxRateUncheckedUpdateManyInput>
    /**
     * Filter which FxRates to update
     */
    where?: FxRateWhereInput
    /**
     * Limit how many FxRates to update.
     */
    limit?: number
  }

  /**
   * FxRate upsert
   */
  export type FxRateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * The filter to search for the FxRate to update in case it exists.
     */
    where: FxRateWhereUniqueInput
    /**
     * In case the FxRate found by the `where` argument doesn't exist, create a new FxRate with this data.
     */
    create: XOR<FxRateCreateInput, FxRateUncheckedCreateInput>
    /**
     * In case the FxRate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FxRateUpdateInput, FxRateUncheckedUpdateInput>
  }

  /**
   * FxRate delete
   */
  export type FxRateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
    /**
     * Filter which FxRate to delete.
     */
    where: FxRateWhereUniqueInput
  }

  /**
   * FxRate deleteMany
   */
  export type FxRateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FxRates to delete
     */
    where?: FxRateWhereInput
    /**
     * Limit how many FxRates to delete.
     */
    limit?: number
  }

  /**
   * FxRate without action
   */
  export type FxRateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FxRate
     */
    select?: FxRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FxRate
     */
    omit?: FxRateOmit<ExtArgs> | null
  }


  /**
   * Model CompanyBankAccount
   */

  export type AggregateCompanyBankAccount = {
    _count: CompanyBankAccountCountAggregateOutputType | null
    _avg: CompanyBankAccountAvgAggregateOutputType | null
    _sum: CompanyBankAccountSumAggregateOutputType | null
    _min: CompanyBankAccountMinAggregateOutputType | null
    _max: CompanyBankAccountMaxAggregateOutputType | null
  }

  export type CompanyBankAccountAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type CompanyBankAccountSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type CompanyBankAccountMinAggregateOutputType = {
    id: string | null
    bankName: string | null
    accountName: string | null
    accountNumber: string | null
    swiftBic: string | null
    iban: string | null
    currency: string | null
    countryNote: string | null
    instructions: string | null
    active: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyBankAccountMaxAggregateOutputType = {
    id: string | null
    bankName: string | null
    accountName: string | null
    accountNumber: string | null
    swiftBic: string | null
    iban: string | null
    currency: string | null
    countryNote: string | null
    instructions: string | null
    active: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyBankAccountCountAggregateOutputType = {
    id: number
    bankName: number
    accountName: number
    accountNumber: number
    swiftBic: number
    iban: number
    currency: number
    countryNote: number
    instructions: number
    active: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyBankAccountAvgAggregateInputType = {
    sortOrder?: true
  }

  export type CompanyBankAccountSumAggregateInputType = {
    sortOrder?: true
  }

  export type CompanyBankAccountMinAggregateInputType = {
    id?: true
    bankName?: true
    accountName?: true
    accountNumber?: true
    swiftBic?: true
    iban?: true
    currency?: true
    countryNote?: true
    instructions?: true
    active?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyBankAccountMaxAggregateInputType = {
    id?: true
    bankName?: true
    accountName?: true
    accountNumber?: true
    swiftBic?: true
    iban?: true
    currency?: true
    countryNote?: true
    instructions?: true
    active?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyBankAccountCountAggregateInputType = {
    id?: true
    bankName?: true
    accountName?: true
    accountNumber?: true
    swiftBic?: true
    iban?: true
    currency?: true
    countryNote?: true
    instructions?: true
    active?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyBankAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyBankAccount to aggregate.
     */
    where?: CompanyBankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyBankAccounts to fetch.
     */
    orderBy?: CompanyBankAccountOrderByWithRelationInput | CompanyBankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyBankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyBankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyBankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyBankAccounts
    **/
    _count?: true | CompanyBankAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyBankAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanyBankAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyBankAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyBankAccountMaxAggregateInputType
  }

  export type GetCompanyBankAccountAggregateType<T extends CompanyBankAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyBankAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyBankAccount[P]>
      : GetScalarType<T[P], AggregateCompanyBankAccount[P]>
  }




  export type CompanyBankAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyBankAccountWhereInput
    orderBy?: CompanyBankAccountOrderByWithAggregationInput | CompanyBankAccountOrderByWithAggregationInput[]
    by: CompanyBankAccountScalarFieldEnum[] | CompanyBankAccountScalarFieldEnum
    having?: CompanyBankAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyBankAccountCountAggregateInputType | true
    _avg?: CompanyBankAccountAvgAggregateInputType
    _sum?: CompanyBankAccountSumAggregateInputType
    _min?: CompanyBankAccountMinAggregateInputType
    _max?: CompanyBankAccountMaxAggregateInputType
  }

  export type CompanyBankAccountGroupByOutputType = {
    id: string
    bankName: string
    accountName: string
    accountNumber: string
    swiftBic: string | null
    iban: string | null
    currency: string
    countryNote: string | null
    instructions: string | null
    active: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: CompanyBankAccountCountAggregateOutputType | null
    _avg: CompanyBankAccountAvgAggregateOutputType | null
    _sum: CompanyBankAccountSumAggregateOutputType | null
    _min: CompanyBankAccountMinAggregateOutputType | null
    _max: CompanyBankAccountMaxAggregateOutputType | null
  }

  type GetCompanyBankAccountGroupByPayload<T extends CompanyBankAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyBankAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyBankAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyBankAccountGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyBankAccountGroupByOutputType[P]>
        }
      >
    >


  export type CompanyBankAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankName?: boolean
    accountName?: boolean
    accountNumber?: boolean
    swiftBic?: boolean
    iban?: boolean
    currency?: boolean
    countryNote?: boolean
    instructions?: boolean
    active?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["companyBankAccount"]>

  export type CompanyBankAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankName?: boolean
    accountName?: boolean
    accountNumber?: boolean
    swiftBic?: boolean
    iban?: boolean
    currency?: boolean
    countryNote?: boolean
    instructions?: boolean
    active?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["companyBankAccount"]>

  export type CompanyBankAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankName?: boolean
    accountName?: boolean
    accountNumber?: boolean
    swiftBic?: boolean
    iban?: boolean
    currency?: boolean
    countryNote?: boolean
    instructions?: boolean
    active?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["companyBankAccount"]>

  export type CompanyBankAccountSelectScalar = {
    id?: boolean
    bankName?: boolean
    accountName?: boolean
    accountNumber?: boolean
    swiftBic?: boolean
    iban?: boolean
    currency?: boolean
    countryNote?: boolean
    instructions?: boolean
    active?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyBankAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bankName" | "accountName" | "accountNumber" | "swiftBic" | "iban" | "currency" | "countryNote" | "instructions" | "active" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["companyBankAccount"]>

  export type $CompanyBankAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyBankAccount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bankName: string
      accountName: string
      accountNumber: string
      swiftBic: string | null
      iban: string | null
      currency: string
      countryNote: string | null
      instructions: string | null
      active: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["companyBankAccount"]>
    composites: {}
  }

  type CompanyBankAccountGetPayload<S extends boolean | null | undefined | CompanyBankAccountDefaultArgs> = $Result.GetResult<Prisma.$CompanyBankAccountPayload, S>

  type CompanyBankAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyBankAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyBankAccountCountAggregateInputType | true
    }

  export interface CompanyBankAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyBankAccount'], meta: { name: 'CompanyBankAccount' } }
    /**
     * Find zero or one CompanyBankAccount that matches the filter.
     * @param {CompanyBankAccountFindUniqueArgs} args - Arguments to find a CompanyBankAccount
     * @example
     * // Get one CompanyBankAccount
     * const companyBankAccount = await prisma.companyBankAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyBankAccountFindUniqueArgs>(args: SelectSubset<T, CompanyBankAccountFindUniqueArgs<ExtArgs>>): Prisma__CompanyBankAccountClient<$Result.GetResult<Prisma.$CompanyBankAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyBankAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyBankAccountFindUniqueOrThrowArgs} args - Arguments to find a CompanyBankAccount
     * @example
     * // Get one CompanyBankAccount
     * const companyBankAccount = await prisma.companyBankAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyBankAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyBankAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyBankAccountClient<$Result.GetResult<Prisma.$CompanyBankAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyBankAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBankAccountFindFirstArgs} args - Arguments to find a CompanyBankAccount
     * @example
     * // Get one CompanyBankAccount
     * const companyBankAccount = await prisma.companyBankAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyBankAccountFindFirstArgs>(args?: SelectSubset<T, CompanyBankAccountFindFirstArgs<ExtArgs>>): Prisma__CompanyBankAccountClient<$Result.GetResult<Prisma.$CompanyBankAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyBankAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBankAccountFindFirstOrThrowArgs} args - Arguments to find a CompanyBankAccount
     * @example
     * // Get one CompanyBankAccount
     * const companyBankAccount = await prisma.companyBankAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyBankAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyBankAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyBankAccountClient<$Result.GetResult<Prisma.$CompanyBankAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyBankAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBankAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyBankAccounts
     * const companyBankAccounts = await prisma.companyBankAccount.findMany()
     * 
     * // Get first 10 CompanyBankAccounts
     * const companyBankAccounts = await prisma.companyBankAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyBankAccountWithIdOnly = await prisma.companyBankAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyBankAccountFindManyArgs>(args?: SelectSubset<T, CompanyBankAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyBankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyBankAccount.
     * @param {CompanyBankAccountCreateArgs} args - Arguments to create a CompanyBankAccount.
     * @example
     * // Create one CompanyBankAccount
     * const CompanyBankAccount = await prisma.companyBankAccount.create({
     *   data: {
     *     // ... data to create a CompanyBankAccount
     *   }
     * })
     * 
     */
    create<T extends CompanyBankAccountCreateArgs>(args: SelectSubset<T, CompanyBankAccountCreateArgs<ExtArgs>>): Prisma__CompanyBankAccountClient<$Result.GetResult<Prisma.$CompanyBankAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyBankAccounts.
     * @param {CompanyBankAccountCreateManyArgs} args - Arguments to create many CompanyBankAccounts.
     * @example
     * // Create many CompanyBankAccounts
     * const companyBankAccount = await prisma.companyBankAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyBankAccountCreateManyArgs>(args?: SelectSubset<T, CompanyBankAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyBankAccounts and returns the data saved in the database.
     * @param {CompanyBankAccountCreateManyAndReturnArgs} args - Arguments to create many CompanyBankAccounts.
     * @example
     * // Create many CompanyBankAccounts
     * const companyBankAccount = await prisma.companyBankAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyBankAccounts and only return the `id`
     * const companyBankAccountWithIdOnly = await prisma.companyBankAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyBankAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyBankAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyBankAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanyBankAccount.
     * @param {CompanyBankAccountDeleteArgs} args - Arguments to delete one CompanyBankAccount.
     * @example
     * // Delete one CompanyBankAccount
     * const CompanyBankAccount = await prisma.companyBankAccount.delete({
     *   where: {
     *     // ... filter to delete one CompanyBankAccount
     *   }
     * })
     * 
     */
    delete<T extends CompanyBankAccountDeleteArgs>(args: SelectSubset<T, CompanyBankAccountDeleteArgs<ExtArgs>>): Prisma__CompanyBankAccountClient<$Result.GetResult<Prisma.$CompanyBankAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyBankAccount.
     * @param {CompanyBankAccountUpdateArgs} args - Arguments to update one CompanyBankAccount.
     * @example
     * // Update one CompanyBankAccount
     * const companyBankAccount = await prisma.companyBankAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyBankAccountUpdateArgs>(args: SelectSubset<T, CompanyBankAccountUpdateArgs<ExtArgs>>): Prisma__CompanyBankAccountClient<$Result.GetResult<Prisma.$CompanyBankAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyBankAccounts.
     * @param {CompanyBankAccountDeleteManyArgs} args - Arguments to filter CompanyBankAccounts to delete.
     * @example
     * // Delete a few CompanyBankAccounts
     * const { count } = await prisma.companyBankAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyBankAccountDeleteManyArgs>(args?: SelectSubset<T, CompanyBankAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyBankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBankAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyBankAccounts
     * const companyBankAccount = await prisma.companyBankAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyBankAccountUpdateManyArgs>(args: SelectSubset<T, CompanyBankAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyBankAccounts and returns the data updated in the database.
     * @param {CompanyBankAccountUpdateManyAndReturnArgs} args - Arguments to update many CompanyBankAccounts.
     * @example
     * // Update many CompanyBankAccounts
     * const companyBankAccount = await prisma.companyBankAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyBankAccounts and only return the `id`
     * const companyBankAccountWithIdOnly = await prisma.companyBankAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyBankAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyBankAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyBankAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanyBankAccount.
     * @param {CompanyBankAccountUpsertArgs} args - Arguments to update or create a CompanyBankAccount.
     * @example
     * // Update or create a CompanyBankAccount
     * const companyBankAccount = await prisma.companyBankAccount.upsert({
     *   create: {
     *     // ... data to create a CompanyBankAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyBankAccount we want to update
     *   }
     * })
     */
    upsert<T extends CompanyBankAccountUpsertArgs>(args: SelectSubset<T, CompanyBankAccountUpsertArgs<ExtArgs>>): Prisma__CompanyBankAccountClient<$Result.GetResult<Prisma.$CompanyBankAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyBankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBankAccountCountArgs} args - Arguments to filter CompanyBankAccounts to count.
     * @example
     * // Count the number of CompanyBankAccounts
     * const count = await prisma.companyBankAccount.count({
     *   where: {
     *     // ... the filter for the CompanyBankAccounts we want to count
     *   }
     * })
    **/
    count<T extends CompanyBankAccountCountArgs>(
      args?: Subset<T, CompanyBankAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyBankAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyBankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBankAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyBankAccountAggregateArgs>(args: Subset<T, CompanyBankAccountAggregateArgs>): Prisma.PrismaPromise<GetCompanyBankAccountAggregateType<T>>

    /**
     * Group by CompanyBankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBankAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyBankAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyBankAccountGroupByArgs['orderBy'] }
        : { orderBy?: CompanyBankAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyBankAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyBankAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyBankAccount model
   */
  readonly fields: CompanyBankAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyBankAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyBankAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanyBankAccount model
   */
  interface CompanyBankAccountFieldRefs {
    readonly id: FieldRef<"CompanyBankAccount", 'String'>
    readonly bankName: FieldRef<"CompanyBankAccount", 'String'>
    readonly accountName: FieldRef<"CompanyBankAccount", 'String'>
    readonly accountNumber: FieldRef<"CompanyBankAccount", 'String'>
    readonly swiftBic: FieldRef<"CompanyBankAccount", 'String'>
    readonly iban: FieldRef<"CompanyBankAccount", 'String'>
    readonly currency: FieldRef<"CompanyBankAccount", 'String'>
    readonly countryNote: FieldRef<"CompanyBankAccount", 'String'>
    readonly instructions: FieldRef<"CompanyBankAccount", 'String'>
    readonly active: FieldRef<"CompanyBankAccount", 'Boolean'>
    readonly sortOrder: FieldRef<"CompanyBankAccount", 'Int'>
    readonly createdAt: FieldRef<"CompanyBankAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"CompanyBankAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanyBankAccount findUnique
   */
  export type CompanyBankAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBankAccount
     */
    select?: CompanyBankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyBankAccount
     */
    omit?: CompanyBankAccountOmit<ExtArgs> | null
    /**
     * Filter, which CompanyBankAccount to fetch.
     */
    where: CompanyBankAccountWhereUniqueInput
  }

  /**
   * CompanyBankAccount findUniqueOrThrow
   */
  export type CompanyBankAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBankAccount
     */
    select?: CompanyBankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyBankAccount
     */
    omit?: CompanyBankAccountOmit<ExtArgs> | null
    /**
     * Filter, which CompanyBankAccount to fetch.
     */
    where: CompanyBankAccountWhereUniqueInput
  }

  /**
   * CompanyBankAccount findFirst
   */
  export type CompanyBankAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBankAccount
     */
    select?: CompanyBankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyBankAccount
     */
    omit?: CompanyBankAccountOmit<ExtArgs> | null
    /**
     * Filter, which CompanyBankAccount to fetch.
     */
    where?: CompanyBankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyBankAccounts to fetch.
     */
    orderBy?: CompanyBankAccountOrderByWithRelationInput | CompanyBankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyBankAccounts.
     */
    cursor?: CompanyBankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyBankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyBankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyBankAccounts.
     */
    distinct?: CompanyBankAccountScalarFieldEnum | CompanyBankAccountScalarFieldEnum[]
  }

  /**
   * CompanyBankAccount findFirstOrThrow
   */
  export type CompanyBankAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBankAccount
     */
    select?: CompanyBankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyBankAccount
     */
    omit?: CompanyBankAccountOmit<ExtArgs> | null
    /**
     * Filter, which CompanyBankAccount to fetch.
     */
    where?: CompanyBankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyBankAccounts to fetch.
     */
    orderBy?: CompanyBankAccountOrderByWithRelationInput | CompanyBankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyBankAccounts.
     */
    cursor?: CompanyBankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyBankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyBankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyBankAccounts.
     */
    distinct?: CompanyBankAccountScalarFieldEnum | CompanyBankAccountScalarFieldEnum[]
  }

  /**
   * CompanyBankAccount findMany
   */
  export type CompanyBankAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBankAccount
     */
    select?: CompanyBankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyBankAccount
     */
    omit?: CompanyBankAccountOmit<ExtArgs> | null
    /**
     * Filter, which CompanyBankAccounts to fetch.
     */
    where?: CompanyBankAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyBankAccounts to fetch.
     */
    orderBy?: CompanyBankAccountOrderByWithRelationInput | CompanyBankAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyBankAccounts.
     */
    cursor?: CompanyBankAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyBankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyBankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyBankAccounts.
     */
    distinct?: CompanyBankAccountScalarFieldEnum | CompanyBankAccountScalarFieldEnum[]
  }

  /**
   * CompanyBankAccount create
   */
  export type CompanyBankAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBankAccount
     */
    select?: CompanyBankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyBankAccount
     */
    omit?: CompanyBankAccountOmit<ExtArgs> | null
    /**
     * The data needed to create a CompanyBankAccount.
     */
    data: XOR<CompanyBankAccountCreateInput, CompanyBankAccountUncheckedCreateInput>
  }

  /**
   * CompanyBankAccount createMany
   */
  export type CompanyBankAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyBankAccounts.
     */
    data: CompanyBankAccountCreateManyInput | CompanyBankAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyBankAccount createManyAndReturn
   */
  export type CompanyBankAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBankAccount
     */
    select?: CompanyBankAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyBankAccount
     */
    omit?: CompanyBankAccountOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyBankAccounts.
     */
    data: CompanyBankAccountCreateManyInput | CompanyBankAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyBankAccount update
   */
  export type CompanyBankAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBankAccount
     */
    select?: CompanyBankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyBankAccount
     */
    omit?: CompanyBankAccountOmit<ExtArgs> | null
    /**
     * The data needed to update a CompanyBankAccount.
     */
    data: XOR<CompanyBankAccountUpdateInput, CompanyBankAccountUncheckedUpdateInput>
    /**
     * Choose, which CompanyBankAccount to update.
     */
    where: CompanyBankAccountWhereUniqueInput
  }

  /**
   * CompanyBankAccount updateMany
   */
  export type CompanyBankAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyBankAccounts.
     */
    data: XOR<CompanyBankAccountUpdateManyMutationInput, CompanyBankAccountUncheckedUpdateManyInput>
    /**
     * Filter which CompanyBankAccounts to update
     */
    where?: CompanyBankAccountWhereInput
    /**
     * Limit how many CompanyBankAccounts to update.
     */
    limit?: number
  }

  /**
   * CompanyBankAccount updateManyAndReturn
   */
  export type CompanyBankAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBankAccount
     */
    select?: CompanyBankAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyBankAccount
     */
    omit?: CompanyBankAccountOmit<ExtArgs> | null
    /**
     * The data used to update CompanyBankAccounts.
     */
    data: XOR<CompanyBankAccountUpdateManyMutationInput, CompanyBankAccountUncheckedUpdateManyInput>
    /**
     * Filter which CompanyBankAccounts to update
     */
    where?: CompanyBankAccountWhereInput
    /**
     * Limit how many CompanyBankAccounts to update.
     */
    limit?: number
  }

  /**
   * CompanyBankAccount upsert
   */
  export type CompanyBankAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBankAccount
     */
    select?: CompanyBankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyBankAccount
     */
    omit?: CompanyBankAccountOmit<ExtArgs> | null
    /**
     * The filter to search for the CompanyBankAccount to update in case it exists.
     */
    where: CompanyBankAccountWhereUniqueInput
    /**
     * In case the CompanyBankAccount found by the `where` argument doesn't exist, create a new CompanyBankAccount with this data.
     */
    create: XOR<CompanyBankAccountCreateInput, CompanyBankAccountUncheckedCreateInput>
    /**
     * In case the CompanyBankAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyBankAccountUpdateInput, CompanyBankAccountUncheckedUpdateInput>
  }

  /**
   * CompanyBankAccount delete
   */
  export type CompanyBankAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBankAccount
     */
    select?: CompanyBankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyBankAccount
     */
    omit?: CompanyBankAccountOmit<ExtArgs> | null
    /**
     * Filter which CompanyBankAccount to delete.
     */
    where: CompanyBankAccountWhereUniqueInput
  }

  /**
   * CompanyBankAccount deleteMany
   */
  export type CompanyBankAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyBankAccounts to delete
     */
    where?: CompanyBankAccountWhereInput
    /**
     * Limit how many CompanyBankAccounts to delete.
     */
    limit?: number
  }

  /**
   * CompanyBankAccount without action
   */
  export type CompanyBankAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBankAccount
     */
    select?: CompanyBankAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyBankAccount
     */
    omit?: CompanyBankAccountOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    country: 'country',
    passwordHash: 'passwordHash',
    name: 'name',
    image: 'image',
    googleId: 'googleId',
    role: 'role',
    kycStatus: 'kycStatus',
    emailVerified: 'emailVerified',
    phoneVerified: 'phoneVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    code: 'code',
    expiresAt: 'expiresAt',
    verified: 'verified',
    createdAt: 'createdAt'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const IndividualProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    fullName: 'fullName',
    dateOfBirth: 'dateOfBirth',
    nationality: 'nationality',
    isNational: 'isNational',
    passportNumber: 'passportNumber',
    passportIssue: 'passportIssue',
    passportExpiry: 'passportExpiry',
    workPermitNumber: 'workPermitNumber',
    workPermitIssue: 'workPermitIssue',
    workPermitExpiry: 'workPermitExpiry',
    nationalIdNumber: 'nationalIdNumber',
    nationalIdIssue: 'nationalIdIssue',
    nationalIdExpiry: 'nationalIdExpiry',
    residentialAddress: 'residentialAddress',
    country: 'country',
    contactEmail: 'contactEmail',
    contactPhone: 'contactPhone',
    occupation: 'occupation',
    employerName: 'employerName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IndividualProfileScalarFieldEnum = (typeof IndividualProfileScalarFieldEnum)[keyof typeof IndividualProfileScalarFieldEnum]


  export const CorporateProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    businessName: 'businessName',
    natureOfBusiness: 'natureOfBusiness',
    businessAddress: 'businessAddress',
    registrationNumber: 'registrationNumber',
    incorporationDate: 'incorporationDate',
    tradingLicenseNumber: 'tradingLicenseNumber',
    tradingLicenseIssue: 'tradingLicenseIssue',
    tradingLicenseExpiry: 'tradingLicenseExpiry',
    regulatoryLicenseNumber: 'regulatoryLicenseNumber',
    regulatoryLicenseIssue: 'regulatoryLicenseIssue',
    regulatoryLicenseExpiry: 'regulatoryLicenseExpiry',
    keyPersonnel: 'keyPersonnel',
    shareholders: 'shareholders',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CorporateProfileScalarFieldEnum = (typeof CorporateProfileScalarFieldEnum)[keyof typeof CorporateProfileScalarFieldEnum]


  export const KycDocumentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    documentType: 'documentType',
    fileName: 'fileName',
    fileUrl: 'fileUrl',
    fileSize: 'fileSize',
    mimeType: 'mimeType',
    status: 'status',
    uploadedAt: 'uploadedAt'
  };

  export type KycDocumentScalarFieldEnum = (typeof KycDocumentScalarFieldEnum)[keyof typeof KycDocumentScalarFieldEnum]


  export const BeneficiaryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    deliveryChannel: 'deliveryChannel',
    fullName: 'fullName',
    country: 'country',
    bankName: 'bankName',
    accountNumber: 'accountNumber',
    swiftBic: 'swiftBic',
    mobileMoneyProvider: 'mobileMoneyProvider',
    mobileNumber: 'mobileNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BeneficiaryScalarFieldEnum = (typeof BeneficiaryScalarFieldEnum)[keyof typeof BeneficiaryScalarFieldEnum]


  export const RemittanceTransferScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    referenceCode: 'referenceCode',
    status: 'status',
    currentStep: 'currentStep',
    senderCountryIso2: 'senderCountryIso2',
    payCurrency: 'payCurrency',
    payAmount: 'payAmount',
    recipientCountryLabel: 'recipientCountryLabel',
    recipientCountryIso2: 'recipientCountryIso2',
    receiveCurrency: 'receiveCurrency',
    receiveAmount: 'receiveAmount',
    fxRateSnapshot: 'fxRateSnapshot',
    feeAmount: 'feeAmount',
    quoteExpiresAt: 'quoteExpiresAt',
    beneficiaryId: 'beneficiaryId',
    sourceOfIncome: 'sourceOfIncome',
    transferPurpose: 'transferPurpose',
    relationshipToRecipient: 'relationshipToRecipient',
    complianceAccepted: 'complianceAccepted',
    payInMethod: 'payInMethod',
    payerPhone: 'payerPhone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RemittanceTransferScalarFieldEnum = (typeof RemittanceTransferScalarFieldEnum)[keyof typeof RemittanceTransferScalarFieldEnum]


  export const FxRateScalarFieldEnum: {
    id: 'id',
    fromCurrency: 'fromCurrency',
    toCurrency: 'toCurrency',
    rate: 'rate',
    feePercent: 'feePercent',
    feeFixed: 'feeFixed',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FxRateScalarFieldEnum = (typeof FxRateScalarFieldEnum)[keyof typeof FxRateScalarFieldEnum]


  export const CompanyBankAccountScalarFieldEnum: {
    id: 'id',
    bankName: 'bankName',
    accountName: 'accountName',
    accountNumber: 'accountNumber',
    swiftBic: 'swiftBic',
    iban: 'iban',
    currency: 'currency',
    countryNote: 'countryNote',
    instructions: 'instructions',
    active: 'active',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyBankAccountScalarFieldEnum = (typeof CompanyBankAccountScalarFieldEnum)[keyof typeof CompanyBankAccountScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'KycStatus'
   */
  export type EnumKycStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycStatus'>
    


  /**
   * Reference to a field of type 'KycStatus[]'
   */
  export type ListEnumKycStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'OtpType'
   */
  export type EnumOtpTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OtpType'>
    


  /**
   * Reference to a field of type 'OtpType[]'
   */
  export type ListEnumOtpTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OtpType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DocumentType'
   */
  export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>
    


  /**
   * Reference to a field of type 'DocumentType[]'
   */
  export type ListEnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType[]'>
    


  /**
   * Reference to a field of type 'DocumentStatus'
   */
  export type EnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus'>
    


  /**
   * Reference to a field of type 'DocumentStatus[]'
   */
  export type ListEnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus[]'>
    


  /**
   * Reference to a field of type 'DeliveryChannel'
   */
  export type EnumDeliveryChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryChannel'>
    


  /**
   * Reference to a field of type 'DeliveryChannel[]'
   */
  export type ListEnumDeliveryChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryChannel[]'>
    


  /**
   * Reference to a field of type 'RemittanceStatus'
   */
  export type EnumRemittanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RemittanceStatus'>
    


  /**
   * Reference to a field of type 'RemittanceStatus[]'
   */
  export type ListEnumRemittanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RemittanceStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PayInMethod'
   */
  export type EnumPayInMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayInMethod'>
    


  /**
   * Reference to a field of type 'PayInMethod[]'
   */
  export type ListEnumPayInMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayInMethod[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    kycStatus?: EnumKycStatusFilter<"User"> | $Enums.KycStatus
    emailVerified?: BoolFilter<"User"> | boolean
    phoneVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    individualProfile?: XOR<IndividualProfileNullableScalarRelationFilter, IndividualProfileWhereInput> | null
    corporateProfile?: XOR<CorporateProfileNullableScalarRelationFilter, CorporateProfileWhereInput> | null
    documents?: KycDocumentListRelationFilter
    beneficiaries?: BeneficiaryListRelationFilter
    remittanceTransfers?: RemittanceTransferListRelationFilter
    otps?: OtpListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    role?: SortOrder
    kycStatus?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    individualProfile?: IndividualProfileOrderByWithRelationInput
    corporateProfile?: CorporateProfileOrderByWithRelationInput
    documents?: KycDocumentOrderByRelationAggregateInput
    beneficiaries?: BeneficiaryOrderByRelationAggregateInput
    remittanceTransfers?: RemittanceTransferOrderByRelationAggregateInput
    otps?: OtpOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    country?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    kycStatus?: EnumKycStatusFilter<"User"> | $Enums.KycStatus
    emailVerified?: BoolFilter<"User"> | boolean
    phoneVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    individualProfile?: XOR<IndividualProfileNullableScalarRelationFilter, IndividualProfileWhereInput> | null
    corporateProfile?: XOR<CorporateProfileNullableScalarRelationFilter, CorporateProfileWhereInput> | null
    documents?: KycDocumentListRelationFilter
    beneficiaries?: BeneficiaryListRelationFilter
    remittanceTransfers?: RemittanceTransferListRelationFilter
    otps?: OtpListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email" | "phone" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    role?: SortOrder
    kycStatus?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    kycStatus?: EnumKycStatusWithAggregatesFilter<"User"> | $Enums.KycStatus
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    phoneVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    id?: StringFilter<"Otp"> | string
    userId?: StringFilter<"Otp"> | string
    type?: EnumOtpTypeFilter<"Otp"> | $Enums.OtpType
    code?: StringFilter<"Otp"> | string
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
    verified?: BoolFilter<"Otp"> | boolean
    createdAt?: DateTimeFilter<"Otp"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OtpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    userId?: StringFilter<"Otp"> | string
    type?: EnumOtpTypeFilter<"Otp"> | $Enums.OtpType
    code?: StringFilter<"Otp"> | string
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
    verified?: BoolFilter<"Otp"> | boolean
    createdAt?: DateTimeFilter<"Otp"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    _count?: OtpCountOrderByAggregateInput
    _max?: OtpMaxOrderByAggregateInput
    _min?: OtpMinOrderByAggregateInput
  }

  export type OtpScalarWhereWithAggregatesInput = {
    AND?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    OR?: OtpScalarWhereWithAggregatesInput[]
    NOT?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Otp"> | string
    userId?: StringWithAggregatesFilter<"Otp"> | string
    type?: EnumOtpTypeWithAggregatesFilter<"Otp"> | $Enums.OtpType
    code?: StringWithAggregatesFilter<"Otp"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
    verified?: BoolWithAggregatesFilter<"Otp"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
  }

  export type IndividualProfileWhereInput = {
    AND?: IndividualProfileWhereInput | IndividualProfileWhereInput[]
    OR?: IndividualProfileWhereInput[]
    NOT?: IndividualProfileWhereInput | IndividualProfileWhereInput[]
    id?: StringFilter<"IndividualProfile"> | string
    userId?: StringFilter<"IndividualProfile"> | string
    firstName?: StringNullableFilter<"IndividualProfile"> | string | null
    middleName?: StringNullableFilter<"IndividualProfile"> | string | null
    lastName?: StringNullableFilter<"IndividualProfile"> | string | null
    fullName?: StringNullableFilter<"IndividualProfile"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"IndividualProfile"> | Date | string | null
    nationality?: StringNullableFilter<"IndividualProfile"> | string | null
    isNational?: BoolFilter<"IndividualProfile"> | boolean
    passportNumber?: StringNullableFilter<"IndividualProfile"> | string | null
    passportIssue?: DateTimeNullableFilter<"IndividualProfile"> | Date | string | null
    passportExpiry?: DateTimeNullableFilter<"IndividualProfile"> | Date | string | null
    workPermitNumber?: StringNullableFilter<"IndividualProfile"> | string | null
    workPermitIssue?: DateTimeNullableFilter<"IndividualProfile"> | Date | string | null
    workPermitExpiry?: DateTimeNullableFilter<"IndividualProfile"> | Date | string | null
    nationalIdNumber?: StringNullableFilter<"IndividualProfile"> | string | null
    nationalIdIssue?: DateTimeNullableFilter<"IndividualProfile"> | Date | string | null
    nationalIdExpiry?: DateTimeNullableFilter<"IndividualProfile"> | Date | string | null
    residentialAddress?: StringNullableFilter<"IndividualProfile"> | string | null
    country?: StringNullableFilter<"IndividualProfile"> | string | null
    contactEmail?: StringNullableFilter<"IndividualProfile"> | string | null
    contactPhone?: StringNullableFilter<"IndividualProfile"> | string | null
    occupation?: StringNullableFilter<"IndividualProfile"> | string | null
    employerName?: StringNullableFilter<"IndividualProfile"> | string | null
    createdAt?: DateTimeFilter<"IndividualProfile"> | Date | string
    updatedAt?: DateTimeFilter<"IndividualProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type IndividualProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    isNational?: SortOrder
    passportNumber?: SortOrderInput | SortOrder
    passportIssue?: SortOrderInput | SortOrder
    passportExpiry?: SortOrderInput | SortOrder
    workPermitNumber?: SortOrderInput | SortOrder
    workPermitIssue?: SortOrderInput | SortOrder
    workPermitExpiry?: SortOrderInput | SortOrder
    nationalIdNumber?: SortOrderInput | SortOrder
    nationalIdIssue?: SortOrderInput | SortOrder
    nationalIdExpiry?: SortOrderInput | SortOrder
    residentialAddress?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    employerName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type IndividualProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: IndividualProfileWhereInput | IndividualProfileWhereInput[]
    OR?: IndividualProfileWhereInput[]
    NOT?: IndividualProfileWhereInput | IndividualProfileWhereInput[]
    firstName?: StringNullableFilter<"IndividualProfile"> | string | null
    middleName?: StringNullableFilter<"IndividualProfile"> | string | null
    lastName?: StringNullableFilter<"IndividualProfile"> | string | null
    fullName?: StringNullableFilter<"IndividualProfile"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"IndividualProfile"> | Date | string | null
    nationality?: StringNullableFilter<"IndividualProfile"> | string | null
    isNational?: BoolFilter<"IndividualProfile"> | boolean
    passportNumber?: StringNullableFilter<"IndividualProfile"> | string | null
    passportIssue?: DateTimeNullableFilter<"IndividualProfile"> | Date | string | null
    passportExpiry?: DateTimeNullableFilter<"IndividualProfile"> | Date | string | null
    workPermitNumber?: StringNullableFilter<"IndividualProfile"> | string | null
    workPermitIssue?: DateTimeNullableFilter<"IndividualProfile"> | Date | string | null
    workPermitExpiry?: DateTimeNullableFilter<"IndividualProfile"> | Date | string | null
    nationalIdNumber?: StringNullableFilter<"IndividualProfile"> | string | null
    nationalIdIssue?: DateTimeNullableFilter<"IndividualProfile"> | Date | string | null
    nationalIdExpiry?: DateTimeNullableFilter<"IndividualProfile"> | Date | string | null
    residentialAddress?: StringNullableFilter<"IndividualProfile"> | string | null
    country?: StringNullableFilter<"IndividualProfile"> | string | null
    contactEmail?: StringNullableFilter<"IndividualProfile"> | string | null
    contactPhone?: StringNullableFilter<"IndividualProfile"> | string | null
    occupation?: StringNullableFilter<"IndividualProfile"> | string | null
    employerName?: StringNullableFilter<"IndividualProfile"> | string | null
    createdAt?: DateTimeFilter<"IndividualProfile"> | Date | string
    updatedAt?: DateTimeFilter<"IndividualProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type IndividualProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrderInput | SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    isNational?: SortOrder
    passportNumber?: SortOrderInput | SortOrder
    passportIssue?: SortOrderInput | SortOrder
    passportExpiry?: SortOrderInput | SortOrder
    workPermitNumber?: SortOrderInput | SortOrder
    workPermitIssue?: SortOrderInput | SortOrder
    workPermitExpiry?: SortOrderInput | SortOrder
    nationalIdNumber?: SortOrderInput | SortOrder
    nationalIdIssue?: SortOrderInput | SortOrder
    nationalIdExpiry?: SortOrderInput | SortOrder
    residentialAddress?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    employerName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IndividualProfileCountOrderByAggregateInput
    _max?: IndividualProfileMaxOrderByAggregateInput
    _min?: IndividualProfileMinOrderByAggregateInput
  }

  export type IndividualProfileScalarWhereWithAggregatesInput = {
    AND?: IndividualProfileScalarWhereWithAggregatesInput | IndividualProfileScalarWhereWithAggregatesInput[]
    OR?: IndividualProfileScalarWhereWithAggregatesInput[]
    NOT?: IndividualProfileScalarWhereWithAggregatesInput | IndividualProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IndividualProfile"> | string
    userId?: StringWithAggregatesFilter<"IndividualProfile"> | string
    firstName?: StringNullableWithAggregatesFilter<"IndividualProfile"> | string | null
    middleName?: StringNullableWithAggregatesFilter<"IndividualProfile"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"IndividualProfile"> | string | null
    fullName?: StringNullableWithAggregatesFilter<"IndividualProfile"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"IndividualProfile"> | Date | string | null
    nationality?: StringNullableWithAggregatesFilter<"IndividualProfile"> | string | null
    isNational?: BoolWithAggregatesFilter<"IndividualProfile"> | boolean
    passportNumber?: StringNullableWithAggregatesFilter<"IndividualProfile"> | string | null
    passportIssue?: DateTimeNullableWithAggregatesFilter<"IndividualProfile"> | Date | string | null
    passportExpiry?: DateTimeNullableWithAggregatesFilter<"IndividualProfile"> | Date | string | null
    workPermitNumber?: StringNullableWithAggregatesFilter<"IndividualProfile"> | string | null
    workPermitIssue?: DateTimeNullableWithAggregatesFilter<"IndividualProfile"> | Date | string | null
    workPermitExpiry?: DateTimeNullableWithAggregatesFilter<"IndividualProfile"> | Date | string | null
    nationalIdNumber?: StringNullableWithAggregatesFilter<"IndividualProfile"> | string | null
    nationalIdIssue?: DateTimeNullableWithAggregatesFilter<"IndividualProfile"> | Date | string | null
    nationalIdExpiry?: DateTimeNullableWithAggregatesFilter<"IndividualProfile"> | Date | string | null
    residentialAddress?: StringNullableWithAggregatesFilter<"IndividualProfile"> | string | null
    country?: StringNullableWithAggregatesFilter<"IndividualProfile"> | string | null
    contactEmail?: StringNullableWithAggregatesFilter<"IndividualProfile"> | string | null
    contactPhone?: StringNullableWithAggregatesFilter<"IndividualProfile"> | string | null
    occupation?: StringNullableWithAggregatesFilter<"IndividualProfile"> | string | null
    employerName?: StringNullableWithAggregatesFilter<"IndividualProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IndividualProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IndividualProfile"> | Date | string
  }

  export type CorporateProfileWhereInput = {
    AND?: CorporateProfileWhereInput | CorporateProfileWhereInput[]
    OR?: CorporateProfileWhereInput[]
    NOT?: CorporateProfileWhereInput | CorporateProfileWhereInput[]
    id?: StringFilter<"CorporateProfile"> | string
    userId?: StringFilter<"CorporateProfile"> | string
    businessName?: StringNullableFilter<"CorporateProfile"> | string | null
    natureOfBusiness?: StringNullableFilter<"CorporateProfile"> | string | null
    businessAddress?: StringNullableFilter<"CorporateProfile"> | string | null
    registrationNumber?: StringNullableFilter<"CorporateProfile"> | string | null
    incorporationDate?: DateTimeNullableFilter<"CorporateProfile"> | Date | string | null
    tradingLicenseNumber?: StringNullableFilter<"CorporateProfile"> | string | null
    tradingLicenseIssue?: DateTimeNullableFilter<"CorporateProfile"> | Date | string | null
    tradingLicenseExpiry?: DateTimeNullableFilter<"CorporateProfile"> | Date | string | null
    regulatoryLicenseNumber?: StringNullableFilter<"CorporateProfile"> | string | null
    regulatoryLicenseIssue?: DateTimeNullableFilter<"CorporateProfile"> | Date | string | null
    regulatoryLicenseExpiry?: DateTimeNullableFilter<"CorporateProfile"> | Date | string | null
    keyPersonnel?: JsonNullableFilter<"CorporateProfile">
    shareholders?: JsonNullableFilter<"CorporateProfile">
    createdAt?: DateTimeFilter<"CorporateProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CorporateProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CorporateProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrderInput | SortOrder
    natureOfBusiness?: SortOrderInput | SortOrder
    businessAddress?: SortOrderInput | SortOrder
    registrationNumber?: SortOrderInput | SortOrder
    incorporationDate?: SortOrderInput | SortOrder
    tradingLicenseNumber?: SortOrderInput | SortOrder
    tradingLicenseIssue?: SortOrderInput | SortOrder
    tradingLicenseExpiry?: SortOrderInput | SortOrder
    regulatoryLicenseNumber?: SortOrderInput | SortOrder
    regulatoryLicenseIssue?: SortOrderInput | SortOrder
    regulatoryLicenseExpiry?: SortOrderInput | SortOrder
    keyPersonnel?: SortOrderInput | SortOrder
    shareholders?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CorporateProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CorporateProfileWhereInput | CorporateProfileWhereInput[]
    OR?: CorporateProfileWhereInput[]
    NOT?: CorporateProfileWhereInput | CorporateProfileWhereInput[]
    businessName?: StringNullableFilter<"CorporateProfile"> | string | null
    natureOfBusiness?: StringNullableFilter<"CorporateProfile"> | string | null
    businessAddress?: StringNullableFilter<"CorporateProfile"> | string | null
    registrationNumber?: StringNullableFilter<"CorporateProfile"> | string | null
    incorporationDate?: DateTimeNullableFilter<"CorporateProfile"> | Date | string | null
    tradingLicenseNumber?: StringNullableFilter<"CorporateProfile"> | string | null
    tradingLicenseIssue?: DateTimeNullableFilter<"CorporateProfile"> | Date | string | null
    tradingLicenseExpiry?: DateTimeNullableFilter<"CorporateProfile"> | Date | string | null
    regulatoryLicenseNumber?: StringNullableFilter<"CorporateProfile"> | string | null
    regulatoryLicenseIssue?: DateTimeNullableFilter<"CorporateProfile"> | Date | string | null
    regulatoryLicenseExpiry?: DateTimeNullableFilter<"CorporateProfile"> | Date | string | null
    keyPersonnel?: JsonNullableFilter<"CorporateProfile">
    shareholders?: JsonNullableFilter<"CorporateProfile">
    createdAt?: DateTimeFilter<"CorporateProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CorporateProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type CorporateProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrderInput | SortOrder
    natureOfBusiness?: SortOrderInput | SortOrder
    businessAddress?: SortOrderInput | SortOrder
    registrationNumber?: SortOrderInput | SortOrder
    incorporationDate?: SortOrderInput | SortOrder
    tradingLicenseNumber?: SortOrderInput | SortOrder
    tradingLicenseIssue?: SortOrderInput | SortOrder
    tradingLicenseExpiry?: SortOrderInput | SortOrder
    regulatoryLicenseNumber?: SortOrderInput | SortOrder
    regulatoryLicenseIssue?: SortOrderInput | SortOrder
    regulatoryLicenseExpiry?: SortOrderInput | SortOrder
    keyPersonnel?: SortOrderInput | SortOrder
    shareholders?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CorporateProfileCountOrderByAggregateInput
    _max?: CorporateProfileMaxOrderByAggregateInput
    _min?: CorporateProfileMinOrderByAggregateInput
  }

  export type CorporateProfileScalarWhereWithAggregatesInput = {
    AND?: CorporateProfileScalarWhereWithAggregatesInput | CorporateProfileScalarWhereWithAggregatesInput[]
    OR?: CorporateProfileScalarWhereWithAggregatesInput[]
    NOT?: CorporateProfileScalarWhereWithAggregatesInput | CorporateProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CorporateProfile"> | string
    userId?: StringWithAggregatesFilter<"CorporateProfile"> | string
    businessName?: StringNullableWithAggregatesFilter<"CorporateProfile"> | string | null
    natureOfBusiness?: StringNullableWithAggregatesFilter<"CorporateProfile"> | string | null
    businessAddress?: StringNullableWithAggregatesFilter<"CorporateProfile"> | string | null
    registrationNumber?: StringNullableWithAggregatesFilter<"CorporateProfile"> | string | null
    incorporationDate?: DateTimeNullableWithAggregatesFilter<"CorporateProfile"> | Date | string | null
    tradingLicenseNumber?: StringNullableWithAggregatesFilter<"CorporateProfile"> | string | null
    tradingLicenseIssue?: DateTimeNullableWithAggregatesFilter<"CorporateProfile"> | Date | string | null
    tradingLicenseExpiry?: DateTimeNullableWithAggregatesFilter<"CorporateProfile"> | Date | string | null
    regulatoryLicenseNumber?: StringNullableWithAggregatesFilter<"CorporateProfile"> | string | null
    regulatoryLicenseIssue?: DateTimeNullableWithAggregatesFilter<"CorporateProfile"> | Date | string | null
    regulatoryLicenseExpiry?: DateTimeNullableWithAggregatesFilter<"CorporateProfile"> | Date | string | null
    keyPersonnel?: JsonNullableWithAggregatesFilter<"CorporateProfile">
    shareholders?: JsonNullableWithAggregatesFilter<"CorporateProfile">
    createdAt?: DateTimeWithAggregatesFilter<"CorporateProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CorporateProfile"> | Date | string
  }

  export type KycDocumentWhereInput = {
    AND?: KycDocumentWhereInput | KycDocumentWhereInput[]
    OR?: KycDocumentWhereInput[]
    NOT?: KycDocumentWhereInput | KycDocumentWhereInput[]
    id?: StringFilter<"KycDocument"> | string
    userId?: StringFilter<"KycDocument"> | string
    documentType?: EnumDocumentTypeFilter<"KycDocument"> | $Enums.DocumentType
    fileName?: StringFilter<"KycDocument"> | string
    fileUrl?: StringFilter<"KycDocument"> | string
    fileSize?: IntNullableFilter<"KycDocument"> | number | null
    mimeType?: StringNullableFilter<"KycDocument"> | string | null
    status?: EnumDocumentStatusFilter<"KycDocument"> | $Enums.DocumentStatus
    uploadedAt?: DateTimeFilter<"KycDocument"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type KycDocumentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    status?: SortOrder
    uploadedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type KycDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KycDocumentWhereInput | KycDocumentWhereInput[]
    OR?: KycDocumentWhereInput[]
    NOT?: KycDocumentWhereInput | KycDocumentWhereInput[]
    userId?: StringFilter<"KycDocument"> | string
    documentType?: EnumDocumentTypeFilter<"KycDocument"> | $Enums.DocumentType
    fileName?: StringFilter<"KycDocument"> | string
    fileUrl?: StringFilter<"KycDocument"> | string
    fileSize?: IntNullableFilter<"KycDocument"> | number | null
    mimeType?: StringNullableFilter<"KycDocument"> | string | null
    status?: EnumDocumentStatusFilter<"KycDocument"> | $Enums.DocumentStatus
    uploadedAt?: DateTimeFilter<"KycDocument"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type KycDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    status?: SortOrder
    uploadedAt?: SortOrder
    _count?: KycDocumentCountOrderByAggregateInput
    _avg?: KycDocumentAvgOrderByAggregateInput
    _max?: KycDocumentMaxOrderByAggregateInput
    _min?: KycDocumentMinOrderByAggregateInput
    _sum?: KycDocumentSumOrderByAggregateInput
  }

  export type KycDocumentScalarWhereWithAggregatesInput = {
    AND?: KycDocumentScalarWhereWithAggregatesInput | KycDocumentScalarWhereWithAggregatesInput[]
    OR?: KycDocumentScalarWhereWithAggregatesInput[]
    NOT?: KycDocumentScalarWhereWithAggregatesInput | KycDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KycDocument"> | string
    userId?: StringWithAggregatesFilter<"KycDocument"> | string
    documentType?: EnumDocumentTypeWithAggregatesFilter<"KycDocument"> | $Enums.DocumentType
    fileName?: StringWithAggregatesFilter<"KycDocument"> | string
    fileUrl?: StringWithAggregatesFilter<"KycDocument"> | string
    fileSize?: IntNullableWithAggregatesFilter<"KycDocument"> | number | null
    mimeType?: StringNullableWithAggregatesFilter<"KycDocument"> | string | null
    status?: EnumDocumentStatusWithAggregatesFilter<"KycDocument"> | $Enums.DocumentStatus
    uploadedAt?: DateTimeWithAggregatesFilter<"KycDocument"> | Date | string
  }

  export type BeneficiaryWhereInput = {
    AND?: BeneficiaryWhereInput | BeneficiaryWhereInput[]
    OR?: BeneficiaryWhereInput[]
    NOT?: BeneficiaryWhereInput | BeneficiaryWhereInput[]
    id?: StringFilter<"Beneficiary"> | string
    userId?: StringFilter<"Beneficiary"> | string
    deliveryChannel?: EnumDeliveryChannelFilter<"Beneficiary"> | $Enums.DeliveryChannel
    fullName?: StringFilter<"Beneficiary"> | string
    country?: StringNullableFilter<"Beneficiary"> | string | null
    bankName?: StringNullableFilter<"Beneficiary"> | string | null
    accountNumber?: StringNullableFilter<"Beneficiary"> | string | null
    swiftBic?: StringNullableFilter<"Beneficiary"> | string | null
    mobileMoneyProvider?: StringNullableFilter<"Beneficiary"> | string | null
    mobileNumber?: StringNullableFilter<"Beneficiary"> | string | null
    createdAt?: DateTimeFilter<"Beneficiary"> | Date | string
    updatedAt?: DateTimeFilter<"Beneficiary"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    remittanceTransfers?: RemittanceTransferListRelationFilter
  }

  export type BeneficiaryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    deliveryChannel?: SortOrder
    fullName?: SortOrder
    country?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    accountNumber?: SortOrderInput | SortOrder
    swiftBic?: SortOrderInput | SortOrder
    mobileMoneyProvider?: SortOrderInput | SortOrder
    mobileNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    remittanceTransfers?: RemittanceTransferOrderByRelationAggregateInput
  }

  export type BeneficiaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BeneficiaryWhereInput | BeneficiaryWhereInput[]
    OR?: BeneficiaryWhereInput[]
    NOT?: BeneficiaryWhereInput | BeneficiaryWhereInput[]
    userId?: StringFilter<"Beneficiary"> | string
    deliveryChannel?: EnumDeliveryChannelFilter<"Beneficiary"> | $Enums.DeliveryChannel
    fullName?: StringFilter<"Beneficiary"> | string
    country?: StringNullableFilter<"Beneficiary"> | string | null
    bankName?: StringNullableFilter<"Beneficiary"> | string | null
    accountNumber?: StringNullableFilter<"Beneficiary"> | string | null
    swiftBic?: StringNullableFilter<"Beneficiary"> | string | null
    mobileMoneyProvider?: StringNullableFilter<"Beneficiary"> | string | null
    mobileNumber?: StringNullableFilter<"Beneficiary"> | string | null
    createdAt?: DateTimeFilter<"Beneficiary"> | Date | string
    updatedAt?: DateTimeFilter<"Beneficiary"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    remittanceTransfers?: RemittanceTransferListRelationFilter
  }, "id">

  export type BeneficiaryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    deliveryChannel?: SortOrder
    fullName?: SortOrder
    country?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    accountNumber?: SortOrderInput | SortOrder
    swiftBic?: SortOrderInput | SortOrder
    mobileMoneyProvider?: SortOrderInput | SortOrder
    mobileNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BeneficiaryCountOrderByAggregateInput
    _max?: BeneficiaryMaxOrderByAggregateInput
    _min?: BeneficiaryMinOrderByAggregateInput
  }

  export type BeneficiaryScalarWhereWithAggregatesInput = {
    AND?: BeneficiaryScalarWhereWithAggregatesInput | BeneficiaryScalarWhereWithAggregatesInput[]
    OR?: BeneficiaryScalarWhereWithAggregatesInput[]
    NOT?: BeneficiaryScalarWhereWithAggregatesInput | BeneficiaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Beneficiary"> | string
    userId?: StringWithAggregatesFilter<"Beneficiary"> | string
    deliveryChannel?: EnumDeliveryChannelWithAggregatesFilter<"Beneficiary"> | $Enums.DeliveryChannel
    fullName?: StringWithAggregatesFilter<"Beneficiary"> | string
    country?: StringNullableWithAggregatesFilter<"Beneficiary"> | string | null
    bankName?: StringNullableWithAggregatesFilter<"Beneficiary"> | string | null
    accountNumber?: StringNullableWithAggregatesFilter<"Beneficiary"> | string | null
    swiftBic?: StringNullableWithAggregatesFilter<"Beneficiary"> | string | null
    mobileMoneyProvider?: StringNullableWithAggregatesFilter<"Beneficiary"> | string | null
    mobileNumber?: StringNullableWithAggregatesFilter<"Beneficiary"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Beneficiary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Beneficiary"> | Date | string
  }

  export type RemittanceTransferWhereInput = {
    AND?: RemittanceTransferWhereInput | RemittanceTransferWhereInput[]
    OR?: RemittanceTransferWhereInput[]
    NOT?: RemittanceTransferWhereInput | RemittanceTransferWhereInput[]
    id?: StringFilter<"RemittanceTransfer"> | string
    userId?: StringFilter<"RemittanceTransfer"> | string
    referenceCode?: StringFilter<"RemittanceTransfer"> | string
    status?: EnumRemittanceStatusFilter<"RemittanceTransfer"> | $Enums.RemittanceStatus
    currentStep?: IntFilter<"RemittanceTransfer"> | number
    senderCountryIso2?: StringNullableFilter<"RemittanceTransfer"> | string | null
    payCurrency?: StringNullableFilter<"RemittanceTransfer"> | string | null
    payAmount?: DecimalNullableFilter<"RemittanceTransfer"> | Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: StringNullableFilter<"RemittanceTransfer"> | string | null
    recipientCountryIso2?: StringNullableFilter<"RemittanceTransfer"> | string | null
    receiveCurrency?: StringNullableFilter<"RemittanceTransfer"> | string | null
    receiveAmount?: DecimalNullableFilter<"RemittanceTransfer"> | Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: DecimalNullableFilter<"RemittanceTransfer"> | Decimal | DecimalJsLike | number | string | null
    feeAmount?: DecimalNullableFilter<"RemittanceTransfer"> | Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: DateTimeNullableFilter<"RemittanceTransfer"> | Date | string | null
    beneficiaryId?: StringNullableFilter<"RemittanceTransfer"> | string | null
    sourceOfIncome?: StringNullableFilter<"RemittanceTransfer"> | string | null
    transferPurpose?: StringNullableFilter<"RemittanceTransfer"> | string | null
    relationshipToRecipient?: StringNullableFilter<"RemittanceTransfer"> | string | null
    complianceAccepted?: BoolFilter<"RemittanceTransfer"> | boolean
    payInMethod?: EnumPayInMethodNullableFilter<"RemittanceTransfer"> | $Enums.PayInMethod | null
    payerPhone?: StringNullableFilter<"RemittanceTransfer"> | string | null
    createdAt?: DateTimeFilter<"RemittanceTransfer"> | Date | string
    updatedAt?: DateTimeFilter<"RemittanceTransfer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    beneficiary?: XOR<BeneficiaryNullableScalarRelationFilter, BeneficiaryWhereInput> | null
  }

  export type RemittanceTransferOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    referenceCode?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    senderCountryIso2?: SortOrderInput | SortOrder
    payCurrency?: SortOrderInput | SortOrder
    payAmount?: SortOrderInput | SortOrder
    recipientCountryLabel?: SortOrderInput | SortOrder
    recipientCountryIso2?: SortOrderInput | SortOrder
    receiveCurrency?: SortOrderInput | SortOrder
    receiveAmount?: SortOrderInput | SortOrder
    fxRateSnapshot?: SortOrderInput | SortOrder
    feeAmount?: SortOrderInput | SortOrder
    quoteExpiresAt?: SortOrderInput | SortOrder
    beneficiaryId?: SortOrderInput | SortOrder
    sourceOfIncome?: SortOrderInput | SortOrder
    transferPurpose?: SortOrderInput | SortOrder
    relationshipToRecipient?: SortOrderInput | SortOrder
    complianceAccepted?: SortOrder
    payInMethod?: SortOrderInput | SortOrder
    payerPhone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    beneficiary?: BeneficiaryOrderByWithRelationInput
  }

  export type RemittanceTransferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    referenceCode?: string
    AND?: RemittanceTransferWhereInput | RemittanceTransferWhereInput[]
    OR?: RemittanceTransferWhereInput[]
    NOT?: RemittanceTransferWhereInput | RemittanceTransferWhereInput[]
    userId?: StringFilter<"RemittanceTransfer"> | string
    status?: EnumRemittanceStatusFilter<"RemittanceTransfer"> | $Enums.RemittanceStatus
    currentStep?: IntFilter<"RemittanceTransfer"> | number
    senderCountryIso2?: StringNullableFilter<"RemittanceTransfer"> | string | null
    payCurrency?: StringNullableFilter<"RemittanceTransfer"> | string | null
    payAmount?: DecimalNullableFilter<"RemittanceTransfer"> | Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: StringNullableFilter<"RemittanceTransfer"> | string | null
    recipientCountryIso2?: StringNullableFilter<"RemittanceTransfer"> | string | null
    receiveCurrency?: StringNullableFilter<"RemittanceTransfer"> | string | null
    receiveAmount?: DecimalNullableFilter<"RemittanceTransfer"> | Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: DecimalNullableFilter<"RemittanceTransfer"> | Decimal | DecimalJsLike | number | string | null
    feeAmount?: DecimalNullableFilter<"RemittanceTransfer"> | Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: DateTimeNullableFilter<"RemittanceTransfer"> | Date | string | null
    beneficiaryId?: StringNullableFilter<"RemittanceTransfer"> | string | null
    sourceOfIncome?: StringNullableFilter<"RemittanceTransfer"> | string | null
    transferPurpose?: StringNullableFilter<"RemittanceTransfer"> | string | null
    relationshipToRecipient?: StringNullableFilter<"RemittanceTransfer"> | string | null
    complianceAccepted?: BoolFilter<"RemittanceTransfer"> | boolean
    payInMethod?: EnumPayInMethodNullableFilter<"RemittanceTransfer"> | $Enums.PayInMethod | null
    payerPhone?: StringNullableFilter<"RemittanceTransfer"> | string | null
    createdAt?: DateTimeFilter<"RemittanceTransfer"> | Date | string
    updatedAt?: DateTimeFilter<"RemittanceTransfer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    beneficiary?: XOR<BeneficiaryNullableScalarRelationFilter, BeneficiaryWhereInput> | null
  }, "id" | "referenceCode">

  export type RemittanceTransferOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    referenceCode?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    senderCountryIso2?: SortOrderInput | SortOrder
    payCurrency?: SortOrderInput | SortOrder
    payAmount?: SortOrderInput | SortOrder
    recipientCountryLabel?: SortOrderInput | SortOrder
    recipientCountryIso2?: SortOrderInput | SortOrder
    receiveCurrency?: SortOrderInput | SortOrder
    receiveAmount?: SortOrderInput | SortOrder
    fxRateSnapshot?: SortOrderInput | SortOrder
    feeAmount?: SortOrderInput | SortOrder
    quoteExpiresAt?: SortOrderInput | SortOrder
    beneficiaryId?: SortOrderInput | SortOrder
    sourceOfIncome?: SortOrderInput | SortOrder
    transferPurpose?: SortOrderInput | SortOrder
    relationshipToRecipient?: SortOrderInput | SortOrder
    complianceAccepted?: SortOrder
    payInMethod?: SortOrderInput | SortOrder
    payerPhone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RemittanceTransferCountOrderByAggregateInput
    _avg?: RemittanceTransferAvgOrderByAggregateInput
    _max?: RemittanceTransferMaxOrderByAggregateInput
    _min?: RemittanceTransferMinOrderByAggregateInput
    _sum?: RemittanceTransferSumOrderByAggregateInput
  }

  export type RemittanceTransferScalarWhereWithAggregatesInput = {
    AND?: RemittanceTransferScalarWhereWithAggregatesInput | RemittanceTransferScalarWhereWithAggregatesInput[]
    OR?: RemittanceTransferScalarWhereWithAggregatesInput[]
    NOT?: RemittanceTransferScalarWhereWithAggregatesInput | RemittanceTransferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RemittanceTransfer"> | string
    userId?: StringWithAggregatesFilter<"RemittanceTransfer"> | string
    referenceCode?: StringWithAggregatesFilter<"RemittanceTransfer"> | string
    status?: EnumRemittanceStatusWithAggregatesFilter<"RemittanceTransfer"> | $Enums.RemittanceStatus
    currentStep?: IntWithAggregatesFilter<"RemittanceTransfer"> | number
    senderCountryIso2?: StringNullableWithAggregatesFilter<"RemittanceTransfer"> | string | null
    payCurrency?: StringNullableWithAggregatesFilter<"RemittanceTransfer"> | string | null
    payAmount?: DecimalNullableWithAggregatesFilter<"RemittanceTransfer"> | Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: StringNullableWithAggregatesFilter<"RemittanceTransfer"> | string | null
    recipientCountryIso2?: StringNullableWithAggregatesFilter<"RemittanceTransfer"> | string | null
    receiveCurrency?: StringNullableWithAggregatesFilter<"RemittanceTransfer"> | string | null
    receiveAmount?: DecimalNullableWithAggregatesFilter<"RemittanceTransfer"> | Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: DecimalNullableWithAggregatesFilter<"RemittanceTransfer"> | Decimal | DecimalJsLike | number | string | null
    feeAmount?: DecimalNullableWithAggregatesFilter<"RemittanceTransfer"> | Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: DateTimeNullableWithAggregatesFilter<"RemittanceTransfer"> | Date | string | null
    beneficiaryId?: StringNullableWithAggregatesFilter<"RemittanceTransfer"> | string | null
    sourceOfIncome?: StringNullableWithAggregatesFilter<"RemittanceTransfer"> | string | null
    transferPurpose?: StringNullableWithAggregatesFilter<"RemittanceTransfer"> | string | null
    relationshipToRecipient?: StringNullableWithAggregatesFilter<"RemittanceTransfer"> | string | null
    complianceAccepted?: BoolWithAggregatesFilter<"RemittanceTransfer"> | boolean
    payInMethod?: EnumPayInMethodNullableWithAggregatesFilter<"RemittanceTransfer"> | $Enums.PayInMethod | null
    payerPhone?: StringNullableWithAggregatesFilter<"RemittanceTransfer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RemittanceTransfer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RemittanceTransfer"> | Date | string
  }

  export type FxRateWhereInput = {
    AND?: FxRateWhereInput | FxRateWhereInput[]
    OR?: FxRateWhereInput[]
    NOT?: FxRateWhereInput | FxRateWhereInput[]
    id?: StringFilter<"FxRate"> | string
    fromCurrency?: StringFilter<"FxRate"> | string
    toCurrency?: StringFilter<"FxRate"> | string
    rate?: DecimalFilter<"FxRate"> | Decimal | DecimalJsLike | number | string
    feePercent?: DecimalFilter<"FxRate"> | Decimal | DecimalJsLike | number | string
    feeFixed?: DecimalFilter<"FxRate"> | Decimal | DecimalJsLike | number | string
    active?: BoolFilter<"FxRate"> | boolean
    createdAt?: DateTimeFilter<"FxRate"> | Date | string
    updatedAt?: DateTimeFilter<"FxRate"> | Date | string
  }

  export type FxRateOrderByWithRelationInput = {
    id?: SortOrder
    fromCurrency?: SortOrder
    toCurrency?: SortOrder
    rate?: SortOrder
    feePercent?: SortOrder
    feeFixed?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FxRateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fromCurrency_toCurrency?: FxRateFromCurrencyToCurrencyCompoundUniqueInput
    AND?: FxRateWhereInput | FxRateWhereInput[]
    OR?: FxRateWhereInput[]
    NOT?: FxRateWhereInput | FxRateWhereInput[]
    fromCurrency?: StringFilter<"FxRate"> | string
    toCurrency?: StringFilter<"FxRate"> | string
    rate?: DecimalFilter<"FxRate"> | Decimal | DecimalJsLike | number | string
    feePercent?: DecimalFilter<"FxRate"> | Decimal | DecimalJsLike | number | string
    feeFixed?: DecimalFilter<"FxRate"> | Decimal | DecimalJsLike | number | string
    active?: BoolFilter<"FxRate"> | boolean
    createdAt?: DateTimeFilter<"FxRate"> | Date | string
    updatedAt?: DateTimeFilter<"FxRate"> | Date | string
  }, "id" | "fromCurrency_toCurrency">

  export type FxRateOrderByWithAggregationInput = {
    id?: SortOrder
    fromCurrency?: SortOrder
    toCurrency?: SortOrder
    rate?: SortOrder
    feePercent?: SortOrder
    feeFixed?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FxRateCountOrderByAggregateInput
    _avg?: FxRateAvgOrderByAggregateInput
    _max?: FxRateMaxOrderByAggregateInput
    _min?: FxRateMinOrderByAggregateInput
    _sum?: FxRateSumOrderByAggregateInput
  }

  export type FxRateScalarWhereWithAggregatesInput = {
    AND?: FxRateScalarWhereWithAggregatesInput | FxRateScalarWhereWithAggregatesInput[]
    OR?: FxRateScalarWhereWithAggregatesInput[]
    NOT?: FxRateScalarWhereWithAggregatesInput | FxRateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FxRate"> | string
    fromCurrency?: StringWithAggregatesFilter<"FxRate"> | string
    toCurrency?: StringWithAggregatesFilter<"FxRate"> | string
    rate?: DecimalWithAggregatesFilter<"FxRate"> | Decimal | DecimalJsLike | number | string
    feePercent?: DecimalWithAggregatesFilter<"FxRate"> | Decimal | DecimalJsLike | number | string
    feeFixed?: DecimalWithAggregatesFilter<"FxRate"> | Decimal | DecimalJsLike | number | string
    active?: BoolWithAggregatesFilter<"FxRate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FxRate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FxRate"> | Date | string
  }

  export type CompanyBankAccountWhereInput = {
    AND?: CompanyBankAccountWhereInput | CompanyBankAccountWhereInput[]
    OR?: CompanyBankAccountWhereInput[]
    NOT?: CompanyBankAccountWhereInput | CompanyBankAccountWhereInput[]
    id?: StringFilter<"CompanyBankAccount"> | string
    bankName?: StringFilter<"CompanyBankAccount"> | string
    accountName?: StringFilter<"CompanyBankAccount"> | string
    accountNumber?: StringFilter<"CompanyBankAccount"> | string
    swiftBic?: StringNullableFilter<"CompanyBankAccount"> | string | null
    iban?: StringNullableFilter<"CompanyBankAccount"> | string | null
    currency?: StringFilter<"CompanyBankAccount"> | string
    countryNote?: StringNullableFilter<"CompanyBankAccount"> | string | null
    instructions?: StringNullableFilter<"CompanyBankAccount"> | string | null
    active?: BoolFilter<"CompanyBankAccount"> | boolean
    sortOrder?: IntFilter<"CompanyBankAccount"> | number
    createdAt?: DateTimeFilter<"CompanyBankAccount"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyBankAccount"> | Date | string
  }

  export type CompanyBankAccountOrderByWithRelationInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountName?: SortOrder
    accountNumber?: SortOrder
    swiftBic?: SortOrderInput | SortOrder
    iban?: SortOrderInput | SortOrder
    currency?: SortOrder
    countryNote?: SortOrderInput | SortOrder
    instructions?: SortOrderInput | SortOrder
    active?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyBankAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyBankAccountWhereInput | CompanyBankAccountWhereInput[]
    OR?: CompanyBankAccountWhereInput[]
    NOT?: CompanyBankAccountWhereInput | CompanyBankAccountWhereInput[]
    bankName?: StringFilter<"CompanyBankAccount"> | string
    accountName?: StringFilter<"CompanyBankAccount"> | string
    accountNumber?: StringFilter<"CompanyBankAccount"> | string
    swiftBic?: StringNullableFilter<"CompanyBankAccount"> | string | null
    iban?: StringNullableFilter<"CompanyBankAccount"> | string | null
    currency?: StringFilter<"CompanyBankAccount"> | string
    countryNote?: StringNullableFilter<"CompanyBankAccount"> | string | null
    instructions?: StringNullableFilter<"CompanyBankAccount"> | string | null
    active?: BoolFilter<"CompanyBankAccount"> | boolean
    sortOrder?: IntFilter<"CompanyBankAccount"> | number
    createdAt?: DateTimeFilter<"CompanyBankAccount"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyBankAccount"> | Date | string
  }, "id">

  export type CompanyBankAccountOrderByWithAggregationInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountName?: SortOrder
    accountNumber?: SortOrder
    swiftBic?: SortOrderInput | SortOrder
    iban?: SortOrderInput | SortOrder
    currency?: SortOrder
    countryNote?: SortOrderInput | SortOrder
    instructions?: SortOrderInput | SortOrder
    active?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyBankAccountCountOrderByAggregateInput
    _avg?: CompanyBankAccountAvgOrderByAggregateInput
    _max?: CompanyBankAccountMaxOrderByAggregateInput
    _min?: CompanyBankAccountMinOrderByAggregateInput
    _sum?: CompanyBankAccountSumOrderByAggregateInput
  }

  export type CompanyBankAccountScalarWhereWithAggregatesInput = {
    AND?: CompanyBankAccountScalarWhereWithAggregatesInput | CompanyBankAccountScalarWhereWithAggregatesInput[]
    OR?: CompanyBankAccountScalarWhereWithAggregatesInput[]
    NOT?: CompanyBankAccountScalarWhereWithAggregatesInput | CompanyBankAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompanyBankAccount"> | string
    bankName?: StringWithAggregatesFilter<"CompanyBankAccount"> | string
    accountName?: StringWithAggregatesFilter<"CompanyBankAccount"> | string
    accountNumber?: StringWithAggregatesFilter<"CompanyBankAccount"> | string
    swiftBic?: StringNullableWithAggregatesFilter<"CompanyBankAccount"> | string | null
    iban?: StringNullableWithAggregatesFilter<"CompanyBankAccount"> | string | null
    currency?: StringWithAggregatesFilter<"CompanyBankAccount"> | string
    countryNote?: StringNullableWithAggregatesFilter<"CompanyBankAccount"> | string | null
    instructions?: StringNullableWithAggregatesFilter<"CompanyBankAccount"> | string | null
    active?: BoolWithAggregatesFilter<"CompanyBankAccount"> | boolean
    sortOrder?: IntWithAggregatesFilter<"CompanyBankAccount"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CompanyBankAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompanyBankAccount"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileCreateNestedOneWithoutUserInput
    corporateProfile?: CorporateProfileCreateNestedOneWithoutUserInput
    documents?: KycDocumentCreateNestedManyWithoutUserInput
    beneficiaries?: BeneficiaryCreateNestedManyWithoutUserInput
    remittanceTransfers?: RemittanceTransferCreateNestedManyWithoutUserInput
    otps?: OtpCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileUncheckedCreateNestedOneWithoutUserInput
    corporateProfile?: CorporateProfileUncheckedCreateNestedOneWithoutUserInput
    documents?: KycDocumentUncheckedCreateNestedManyWithoutUserInput
    beneficiaries?: BeneficiaryUncheckedCreateNestedManyWithoutUserInput
    remittanceTransfers?: RemittanceTransferUncheckedCreateNestedManyWithoutUserInput
    otps?: OtpUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUpdateOneWithoutUserNestedInput
    corporateProfile?: CorporateProfileUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUpdateManyWithoutUserNestedInput
    beneficiaries?: BeneficiaryUpdateManyWithoutUserNestedInput
    remittanceTransfers?: RemittanceTransferUpdateManyWithoutUserNestedInput
    otps?: OtpUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUncheckedUpdateOneWithoutUserNestedInput
    corporateProfile?: CorporateProfileUncheckedUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUncheckedUpdateManyWithoutUserNestedInput
    beneficiaries?: BeneficiaryUncheckedUpdateManyWithoutUserNestedInput
    remittanceTransfers?: RemittanceTransferUncheckedUpdateManyWithoutUserNestedInput
    otps?: OtpUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateInput = {
    id?: string
    type: $Enums.OtpType
    code: string
    expiresAt: Date | string
    verified?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOtpsInput
  }

  export type OtpUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.OtpType
    code: string
    expiresAt: Date | string
    verified?: boolean
    createdAt?: Date | string
  }

  export type OtpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumOtpTypeFieldUpdateOperationsInput | $Enums.OtpType
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOtpsNestedInput
  }

  export type OtpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumOtpTypeFieldUpdateOperationsInput | $Enums.OtpType
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.OtpType
    code: string
    expiresAt: Date | string
    verified?: boolean
    createdAt?: Date | string
  }

  export type OtpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumOtpTypeFieldUpdateOperationsInput | $Enums.OtpType
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumOtpTypeFieldUpdateOperationsInput | $Enums.OtpType
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndividualProfileCreateInput = {
    id?: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    fullName?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    isNational?: boolean
    passportNumber?: string | null
    passportIssue?: Date | string | null
    passportExpiry?: Date | string | null
    workPermitNumber?: string | null
    workPermitIssue?: Date | string | null
    workPermitExpiry?: Date | string | null
    nationalIdNumber?: string | null
    nationalIdIssue?: Date | string | null
    nationalIdExpiry?: Date | string | null
    residentialAddress?: string | null
    country?: string | null
    contactEmail?: string | null
    contactPhone?: string | null
    occupation?: string | null
    employerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIndividualProfileInput
  }

  export type IndividualProfileUncheckedCreateInput = {
    id?: string
    userId: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    fullName?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    isNational?: boolean
    passportNumber?: string | null
    passportIssue?: Date | string | null
    passportExpiry?: Date | string | null
    workPermitNumber?: string | null
    workPermitIssue?: Date | string | null
    workPermitExpiry?: Date | string | null
    nationalIdNumber?: string | null
    nationalIdIssue?: Date | string | null
    nationalIdExpiry?: Date | string | null
    residentialAddress?: string | null
    country?: string | null
    contactEmail?: string | null
    contactPhone?: string | null
    occupation?: string | null
    employerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndividualProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    isNational?: BoolFieldUpdateOperationsInput | boolean
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workPermitNumber?: NullableStringFieldUpdateOperationsInput | string | null
    workPermitIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workPermitExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationalIdIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalIdExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    residentialAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    employerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIndividualProfileNestedInput
  }

  export type IndividualProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    isNational?: BoolFieldUpdateOperationsInput | boolean
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workPermitNumber?: NullableStringFieldUpdateOperationsInput | string | null
    workPermitIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workPermitExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationalIdIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalIdExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    residentialAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    employerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndividualProfileCreateManyInput = {
    id?: string
    userId: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    fullName?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    isNational?: boolean
    passportNumber?: string | null
    passportIssue?: Date | string | null
    passportExpiry?: Date | string | null
    workPermitNumber?: string | null
    workPermitIssue?: Date | string | null
    workPermitExpiry?: Date | string | null
    nationalIdNumber?: string | null
    nationalIdIssue?: Date | string | null
    nationalIdExpiry?: Date | string | null
    residentialAddress?: string | null
    country?: string | null
    contactEmail?: string | null
    contactPhone?: string | null
    occupation?: string | null
    employerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndividualProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    isNational?: BoolFieldUpdateOperationsInput | boolean
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workPermitNumber?: NullableStringFieldUpdateOperationsInput | string | null
    workPermitIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workPermitExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationalIdIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalIdExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    residentialAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    employerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndividualProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    isNational?: BoolFieldUpdateOperationsInput | boolean
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workPermitNumber?: NullableStringFieldUpdateOperationsInput | string | null
    workPermitIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workPermitExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationalIdIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalIdExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    residentialAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    employerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CorporateProfileCreateInput = {
    id?: string
    businessName?: string | null
    natureOfBusiness?: string | null
    businessAddress?: string | null
    registrationNumber?: string | null
    incorporationDate?: Date | string | null
    tradingLicenseNumber?: string | null
    tradingLicenseIssue?: Date | string | null
    tradingLicenseExpiry?: Date | string | null
    regulatoryLicenseNumber?: string | null
    regulatoryLicenseIssue?: Date | string | null
    regulatoryLicenseExpiry?: Date | string | null
    keyPersonnel?: NullableJsonNullValueInput | InputJsonValue
    shareholders?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCorporateProfileInput
  }

  export type CorporateProfileUncheckedCreateInput = {
    id?: string
    userId: string
    businessName?: string | null
    natureOfBusiness?: string | null
    businessAddress?: string | null
    registrationNumber?: string | null
    incorporationDate?: Date | string | null
    tradingLicenseNumber?: string | null
    tradingLicenseIssue?: Date | string | null
    tradingLicenseExpiry?: Date | string | null
    regulatoryLicenseNumber?: string | null
    regulatoryLicenseIssue?: Date | string | null
    regulatoryLicenseExpiry?: Date | string | null
    keyPersonnel?: NullableJsonNullValueInput | InputJsonValue
    shareholders?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CorporateProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    natureOfBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    incorporationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradingLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tradingLicenseIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradingLicenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regulatoryLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    regulatoryLicenseIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regulatoryLicenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    keyPersonnel?: NullableJsonNullValueInput | InputJsonValue
    shareholders?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCorporateProfileNestedInput
  }

  export type CorporateProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    natureOfBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    incorporationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradingLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tradingLicenseIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradingLicenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regulatoryLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    regulatoryLicenseIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regulatoryLicenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    keyPersonnel?: NullableJsonNullValueInput | InputJsonValue
    shareholders?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CorporateProfileCreateManyInput = {
    id?: string
    userId: string
    businessName?: string | null
    natureOfBusiness?: string | null
    businessAddress?: string | null
    registrationNumber?: string | null
    incorporationDate?: Date | string | null
    tradingLicenseNumber?: string | null
    tradingLicenseIssue?: Date | string | null
    tradingLicenseExpiry?: Date | string | null
    regulatoryLicenseNumber?: string | null
    regulatoryLicenseIssue?: Date | string | null
    regulatoryLicenseExpiry?: Date | string | null
    keyPersonnel?: NullableJsonNullValueInput | InputJsonValue
    shareholders?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CorporateProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    natureOfBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    incorporationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradingLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tradingLicenseIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradingLicenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regulatoryLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    regulatoryLicenseIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regulatoryLicenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    keyPersonnel?: NullableJsonNullValueInput | InputJsonValue
    shareholders?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CorporateProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    natureOfBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    incorporationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradingLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tradingLicenseIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradingLicenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regulatoryLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    regulatoryLicenseIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regulatoryLicenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    keyPersonnel?: NullableJsonNullValueInput | InputJsonValue
    shareholders?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycDocumentCreateInput = {
    id?: string
    documentType: $Enums.DocumentType
    fileName: string
    fileUrl: string
    fileSize?: number | null
    mimeType?: string | null
    status?: $Enums.DocumentStatus
    uploadedAt?: Date | string
    user: UserCreateNestedOneWithoutDocumentsInput
  }

  export type KycDocumentUncheckedCreateInput = {
    id?: string
    userId: string
    documentType: $Enums.DocumentType
    fileName: string
    fileUrl: string
    fileSize?: number | null
    mimeType?: string | null
    status?: $Enums.DocumentStatus
    uploadedAt?: Date | string
  }

  export type KycDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type KycDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycDocumentCreateManyInput = {
    id?: string
    userId: string
    documentType: $Enums.DocumentType
    fileName: string
    fileUrl: string
    fileSize?: number | null
    mimeType?: string | null
    status?: $Enums.DocumentStatus
    uploadedAt?: Date | string
  }

  export type KycDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiaryCreateInput = {
    id?: string
    deliveryChannel: $Enums.DeliveryChannel
    fullName: string
    country?: string | null
    bankName?: string | null
    accountNumber?: string | null
    swiftBic?: string | null
    mobileMoneyProvider?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBeneficiariesInput
    remittanceTransfers?: RemittanceTransferCreateNestedManyWithoutBeneficiaryInput
  }

  export type BeneficiaryUncheckedCreateInput = {
    id?: string
    userId: string
    deliveryChannel: $Enums.DeliveryChannel
    fullName: string
    country?: string | null
    bankName?: string | null
    accountNumber?: string | null
    swiftBic?: string | null
    mobileMoneyProvider?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    remittanceTransfers?: RemittanceTransferUncheckedCreateNestedManyWithoutBeneficiaryInput
  }

  export type BeneficiaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    fullName?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    swiftBic?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyProvider?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBeneficiariesNestedInput
    remittanceTransfers?: RemittanceTransferUpdateManyWithoutBeneficiaryNestedInput
  }

  export type BeneficiaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    fullName?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    swiftBic?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyProvider?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    remittanceTransfers?: RemittanceTransferUncheckedUpdateManyWithoutBeneficiaryNestedInput
  }

  export type BeneficiaryCreateManyInput = {
    id?: string
    userId: string
    deliveryChannel: $Enums.DeliveryChannel
    fullName: string
    country?: string | null
    bankName?: string | null
    accountNumber?: string | null
    swiftBic?: string | null
    mobileMoneyProvider?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeneficiaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    fullName?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    swiftBic?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyProvider?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    fullName?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    swiftBic?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyProvider?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemittanceTransferCreateInput = {
    id?: string
    referenceCode: string
    status?: $Enums.RemittanceStatus
    currentStep?: number
    senderCountryIso2?: string | null
    payCurrency?: string | null
    payAmount?: Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: string | null
    recipientCountryIso2?: string | null
    receiveCurrency?: string | null
    receiveAmount?: Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: Decimal | DecimalJsLike | number | string | null
    feeAmount?: Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: Date | string | null
    sourceOfIncome?: string | null
    transferPurpose?: string | null
    relationshipToRecipient?: string | null
    complianceAccepted?: boolean
    payInMethod?: $Enums.PayInMethod | null
    payerPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRemittanceTransfersInput
    beneficiary?: BeneficiaryCreateNestedOneWithoutRemittanceTransfersInput
  }

  export type RemittanceTransferUncheckedCreateInput = {
    id?: string
    userId: string
    referenceCode: string
    status?: $Enums.RemittanceStatus
    currentStep?: number
    senderCountryIso2?: string | null
    payCurrency?: string | null
    payAmount?: Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: string | null
    recipientCountryIso2?: string | null
    receiveCurrency?: string | null
    receiveAmount?: Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: Decimal | DecimalJsLike | number | string | null
    feeAmount?: Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: Date | string | null
    beneficiaryId?: string | null
    sourceOfIncome?: string | null
    transferPurpose?: string | null
    relationshipToRecipient?: string | null
    complianceAccepted?: boolean
    payInMethod?: $Enums.PayInMethod | null
    payerPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemittanceTransferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: EnumRemittanceStatusFieldUpdateOperationsInput | $Enums.RemittanceStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    senderCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    payCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    payAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: NullableStringFieldUpdateOperationsInput | string | null
    recipientCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    receiveCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    receiveAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    feeAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceOfIncome?: NullableStringFieldUpdateOperationsInput | string | null
    transferPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipToRecipient?: NullableStringFieldUpdateOperationsInput | string | null
    complianceAccepted?: BoolFieldUpdateOperationsInput | boolean
    payInMethod?: NullableEnumPayInMethodFieldUpdateOperationsInput | $Enums.PayInMethod | null
    payerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRemittanceTransfersNestedInput
    beneficiary?: BeneficiaryUpdateOneWithoutRemittanceTransfersNestedInput
  }

  export type RemittanceTransferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: EnumRemittanceStatusFieldUpdateOperationsInput | $Enums.RemittanceStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    senderCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    payCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    payAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: NullableStringFieldUpdateOperationsInput | string | null
    recipientCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    receiveCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    receiveAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    feeAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    beneficiaryId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceOfIncome?: NullableStringFieldUpdateOperationsInput | string | null
    transferPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipToRecipient?: NullableStringFieldUpdateOperationsInput | string | null
    complianceAccepted?: BoolFieldUpdateOperationsInput | boolean
    payInMethod?: NullableEnumPayInMethodFieldUpdateOperationsInput | $Enums.PayInMethod | null
    payerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemittanceTransferCreateManyInput = {
    id?: string
    userId: string
    referenceCode: string
    status?: $Enums.RemittanceStatus
    currentStep?: number
    senderCountryIso2?: string | null
    payCurrency?: string | null
    payAmount?: Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: string | null
    recipientCountryIso2?: string | null
    receiveCurrency?: string | null
    receiveAmount?: Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: Decimal | DecimalJsLike | number | string | null
    feeAmount?: Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: Date | string | null
    beneficiaryId?: string | null
    sourceOfIncome?: string | null
    transferPurpose?: string | null
    relationshipToRecipient?: string | null
    complianceAccepted?: boolean
    payInMethod?: $Enums.PayInMethod | null
    payerPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemittanceTransferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: EnumRemittanceStatusFieldUpdateOperationsInput | $Enums.RemittanceStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    senderCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    payCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    payAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: NullableStringFieldUpdateOperationsInput | string | null
    recipientCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    receiveCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    receiveAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    feeAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceOfIncome?: NullableStringFieldUpdateOperationsInput | string | null
    transferPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipToRecipient?: NullableStringFieldUpdateOperationsInput | string | null
    complianceAccepted?: BoolFieldUpdateOperationsInput | boolean
    payInMethod?: NullableEnumPayInMethodFieldUpdateOperationsInput | $Enums.PayInMethod | null
    payerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemittanceTransferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: EnumRemittanceStatusFieldUpdateOperationsInput | $Enums.RemittanceStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    senderCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    payCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    payAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: NullableStringFieldUpdateOperationsInput | string | null
    recipientCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    receiveCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    receiveAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    feeAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    beneficiaryId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceOfIncome?: NullableStringFieldUpdateOperationsInput | string | null
    transferPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipToRecipient?: NullableStringFieldUpdateOperationsInput | string | null
    complianceAccepted?: BoolFieldUpdateOperationsInput | boolean
    payInMethod?: NullableEnumPayInMethodFieldUpdateOperationsInput | $Enums.PayInMethod | null
    payerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FxRateCreateInput = {
    id?: string
    fromCurrency: string
    toCurrency: string
    rate: Decimal | DecimalJsLike | number | string
    feePercent?: Decimal | DecimalJsLike | number | string
    feeFixed?: Decimal | DecimalJsLike | number | string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FxRateUncheckedCreateInput = {
    id?: string
    fromCurrency: string
    toCurrency: string
    rate: Decimal | DecimalJsLike | number | string
    feePercent?: Decimal | DecimalJsLike | number | string
    feeFixed?: Decimal | DecimalJsLike | number | string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FxRateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromCurrency?: StringFieldUpdateOperationsInput | string
    toCurrency?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    feePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    feeFixed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FxRateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromCurrency?: StringFieldUpdateOperationsInput | string
    toCurrency?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    feePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    feeFixed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FxRateCreateManyInput = {
    id?: string
    fromCurrency: string
    toCurrency: string
    rate: Decimal | DecimalJsLike | number | string
    feePercent?: Decimal | DecimalJsLike | number | string
    feeFixed?: Decimal | DecimalJsLike | number | string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FxRateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromCurrency?: StringFieldUpdateOperationsInput | string
    toCurrency?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    feePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    feeFixed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FxRateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromCurrency?: StringFieldUpdateOperationsInput | string
    toCurrency?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    feePercent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    feeFixed?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyBankAccountCreateInput = {
    id?: string
    bankName: string
    accountName: string
    accountNumber: string
    swiftBic?: string | null
    iban?: string | null
    currency: string
    countryNote?: string | null
    instructions?: string | null
    active?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyBankAccountUncheckedCreateInput = {
    id?: string
    bankName: string
    accountName: string
    accountNumber: string
    swiftBic?: string | null
    iban?: string | null
    currency: string
    countryNote?: string | null
    instructions?: string | null
    active?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyBankAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    swiftBic?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    countryNote?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyBankAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    swiftBic?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    countryNote?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyBankAccountCreateManyInput = {
    id?: string
    bankName: string
    accountName: string
    accountNumber: string
    swiftBic?: string | null
    iban?: string | null
    currency: string
    countryNote?: string | null
    instructions?: string | null
    active?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyBankAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    swiftBic?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    countryNote?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyBankAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bankName?: StringFieldUpdateOperationsInput | string
    accountName?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    swiftBic?: NullableStringFieldUpdateOperationsInput | string | null
    iban?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    countryNote?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumKycStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusFilter<$PrismaModel> | $Enums.KycStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IndividualProfileNullableScalarRelationFilter = {
    is?: IndividualProfileWhereInput | null
    isNot?: IndividualProfileWhereInput | null
  }

  export type CorporateProfileNullableScalarRelationFilter = {
    is?: CorporateProfileWhereInput | null
    isNot?: CorporateProfileWhereInput | null
  }

  export type KycDocumentListRelationFilter = {
    every?: KycDocumentWhereInput
    some?: KycDocumentWhereInput
    none?: KycDocumentWhereInput
  }

  export type BeneficiaryListRelationFilter = {
    every?: BeneficiaryWhereInput
    some?: BeneficiaryWhereInput
    none?: BeneficiaryWhereInput
  }

  export type RemittanceTransferListRelationFilter = {
    every?: RemittanceTransferWhereInput
    some?: RemittanceTransferWhereInput
    none?: RemittanceTransferWhereInput
  }

  export type OtpListRelationFilter = {
    every?: OtpWhereInput
    some?: OtpWhereInput
    none?: OtpWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type KycDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BeneficiaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RemittanceTransferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OtpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    image?: SortOrder
    googleId?: SortOrder
    role?: SortOrder
    kycStatus?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    image?: SortOrder
    googleId?: SortOrder
    role?: SortOrder
    kycStatus?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    image?: SortOrder
    googleId?: SortOrder
    role?: SortOrder
    kycStatus?: SortOrder
    emailVerified?: SortOrder
    phoneVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumKycStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusWithAggregatesFilter<$PrismaModel> | $Enums.KycStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycStatusFilter<$PrismaModel>
    _max?: NestedEnumKycStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type EnumOtpTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpType | EnumOtpTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OtpType[] | ListEnumOtpTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtpType[] | ListEnumOtpTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtpTypeFilter<$PrismaModel> | $Enums.OtpType
  }

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumOtpTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpType | EnumOtpTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OtpType[] | ListEnumOtpTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtpType[] | ListEnumOtpTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtpTypeWithAggregatesFilter<$PrismaModel> | $Enums.OtpType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOtpTypeFilter<$PrismaModel>
    _max?: NestedEnumOtpTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IndividualProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    isNational?: SortOrder
    passportNumber?: SortOrder
    passportIssue?: SortOrder
    passportExpiry?: SortOrder
    workPermitNumber?: SortOrder
    workPermitIssue?: SortOrder
    workPermitExpiry?: SortOrder
    nationalIdNumber?: SortOrder
    nationalIdIssue?: SortOrder
    nationalIdExpiry?: SortOrder
    residentialAddress?: SortOrder
    country?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    occupation?: SortOrder
    employerName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndividualProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    isNational?: SortOrder
    passportNumber?: SortOrder
    passportIssue?: SortOrder
    passportExpiry?: SortOrder
    workPermitNumber?: SortOrder
    workPermitIssue?: SortOrder
    workPermitExpiry?: SortOrder
    nationalIdNumber?: SortOrder
    nationalIdIssue?: SortOrder
    nationalIdExpiry?: SortOrder
    residentialAddress?: SortOrder
    country?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    occupation?: SortOrder
    employerName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndividualProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    fullName?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    isNational?: SortOrder
    passportNumber?: SortOrder
    passportIssue?: SortOrder
    passportExpiry?: SortOrder
    workPermitNumber?: SortOrder
    workPermitIssue?: SortOrder
    workPermitExpiry?: SortOrder
    nationalIdNumber?: SortOrder
    nationalIdIssue?: SortOrder
    nationalIdExpiry?: SortOrder
    residentialAddress?: SortOrder
    country?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    occupation?: SortOrder
    employerName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CorporateProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    natureOfBusiness?: SortOrder
    businessAddress?: SortOrder
    registrationNumber?: SortOrder
    incorporationDate?: SortOrder
    tradingLicenseNumber?: SortOrder
    tradingLicenseIssue?: SortOrder
    tradingLicenseExpiry?: SortOrder
    regulatoryLicenseNumber?: SortOrder
    regulatoryLicenseIssue?: SortOrder
    regulatoryLicenseExpiry?: SortOrder
    keyPersonnel?: SortOrder
    shareholders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CorporateProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    natureOfBusiness?: SortOrder
    businessAddress?: SortOrder
    registrationNumber?: SortOrder
    incorporationDate?: SortOrder
    tradingLicenseNumber?: SortOrder
    tradingLicenseIssue?: SortOrder
    tradingLicenseExpiry?: SortOrder
    regulatoryLicenseNumber?: SortOrder
    regulatoryLicenseIssue?: SortOrder
    regulatoryLicenseExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CorporateProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    businessName?: SortOrder
    natureOfBusiness?: SortOrder
    businessAddress?: SortOrder
    registrationNumber?: SortOrder
    incorporationDate?: SortOrder
    tradingLicenseNumber?: SortOrder
    tradingLicenseIssue?: SortOrder
    tradingLicenseExpiry?: SortOrder
    regulatoryLicenseNumber?: SortOrder
    regulatoryLicenseIssue?: SortOrder
    regulatoryLicenseExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type EnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
  }

  export type KycDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    status?: SortOrder
    uploadedAt?: SortOrder
  }

  export type KycDocumentAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type KycDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    status?: SortOrder
    uploadedAt?: SortOrder
  }

  export type KycDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    documentType?: SortOrder
    fileName?: SortOrder
    fileUrl?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    status?: SortOrder
    uploadedAt?: SortOrder
  }

  export type KycDocumentSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type EnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type EnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
  }

  export type EnumDeliveryChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryChannel | EnumDeliveryChannelFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryChannelFilter<$PrismaModel> | $Enums.DeliveryChannel
  }

  export type BeneficiaryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deliveryChannel?: SortOrder
    fullName?: SortOrder
    country?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    swiftBic?: SortOrder
    mobileMoneyProvider?: SortOrder
    mobileNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BeneficiaryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deliveryChannel?: SortOrder
    fullName?: SortOrder
    country?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    swiftBic?: SortOrder
    mobileMoneyProvider?: SortOrder
    mobileNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BeneficiaryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deliveryChannel?: SortOrder
    fullName?: SortOrder
    country?: SortOrder
    bankName?: SortOrder
    accountNumber?: SortOrder
    swiftBic?: SortOrder
    mobileMoneyProvider?: SortOrder
    mobileNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDeliveryChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryChannel | EnumDeliveryChannelFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryChannelWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryChannelFilter<$PrismaModel>
    _max?: NestedEnumDeliveryChannelFilter<$PrismaModel>
  }

  export type EnumRemittanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RemittanceStatus | EnumRemittanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RemittanceStatus[] | ListEnumRemittanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RemittanceStatus[] | ListEnumRemittanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRemittanceStatusFilter<$PrismaModel> | $Enums.RemittanceStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumPayInMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PayInMethod | EnumPayInMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PayInMethod[] | ListEnumPayInMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PayInMethod[] | ListEnumPayInMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPayInMethodNullableFilter<$PrismaModel> | $Enums.PayInMethod | null
  }

  export type BeneficiaryNullableScalarRelationFilter = {
    is?: BeneficiaryWhereInput | null
    isNot?: BeneficiaryWhereInput | null
  }

  export type RemittanceTransferCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    referenceCode?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    senderCountryIso2?: SortOrder
    payCurrency?: SortOrder
    payAmount?: SortOrder
    recipientCountryLabel?: SortOrder
    recipientCountryIso2?: SortOrder
    receiveCurrency?: SortOrder
    receiveAmount?: SortOrder
    fxRateSnapshot?: SortOrder
    feeAmount?: SortOrder
    quoteExpiresAt?: SortOrder
    beneficiaryId?: SortOrder
    sourceOfIncome?: SortOrder
    transferPurpose?: SortOrder
    relationshipToRecipient?: SortOrder
    complianceAccepted?: SortOrder
    payInMethod?: SortOrder
    payerPhone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemittanceTransferAvgOrderByAggregateInput = {
    currentStep?: SortOrder
    payAmount?: SortOrder
    receiveAmount?: SortOrder
    fxRateSnapshot?: SortOrder
    feeAmount?: SortOrder
  }

  export type RemittanceTransferMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    referenceCode?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    senderCountryIso2?: SortOrder
    payCurrency?: SortOrder
    payAmount?: SortOrder
    recipientCountryLabel?: SortOrder
    recipientCountryIso2?: SortOrder
    receiveCurrency?: SortOrder
    receiveAmount?: SortOrder
    fxRateSnapshot?: SortOrder
    feeAmount?: SortOrder
    quoteExpiresAt?: SortOrder
    beneficiaryId?: SortOrder
    sourceOfIncome?: SortOrder
    transferPurpose?: SortOrder
    relationshipToRecipient?: SortOrder
    complianceAccepted?: SortOrder
    payInMethod?: SortOrder
    payerPhone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemittanceTransferMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    referenceCode?: SortOrder
    status?: SortOrder
    currentStep?: SortOrder
    senderCountryIso2?: SortOrder
    payCurrency?: SortOrder
    payAmount?: SortOrder
    recipientCountryLabel?: SortOrder
    recipientCountryIso2?: SortOrder
    receiveCurrency?: SortOrder
    receiveAmount?: SortOrder
    fxRateSnapshot?: SortOrder
    feeAmount?: SortOrder
    quoteExpiresAt?: SortOrder
    beneficiaryId?: SortOrder
    sourceOfIncome?: SortOrder
    transferPurpose?: SortOrder
    relationshipToRecipient?: SortOrder
    complianceAccepted?: SortOrder
    payInMethod?: SortOrder
    payerPhone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RemittanceTransferSumOrderByAggregateInput = {
    currentStep?: SortOrder
    payAmount?: SortOrder
    receiveAmount?: SortOrder
    fxRateSnapshot?: SortOrder
    feeAmount?: SortOrder
  }

  export type EnumRemittanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RemittanceStatus | EnumRemittanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RemittanceStatus[] | ListEnumRemittanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RemittanceStatus[] | ListEnumRemittanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRemittanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.RemittanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRemittanceStatusFilter<$PrismaModel>
    _max?: NestedEnumRemittanceStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumPayInMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayInMethod | EnumPayInMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PayInMethod[] | ListEnumPayInMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PayInMethod[] | ListEnumPayInMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPayInMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PayInMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPayInMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPayInMethodNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type FxRateFromCurrencyToCurrencyCompoundUniqueInput = {
    fromCurrency: string
    toCurrency: string
  }

  export type FxRateCountOrderByAggregateInput = {
    id?: SortOrder
    fromCurrency?: SortOrder
    toCurrency?: SortOrder
    rate?: SortOrder
    feePercent?: SortOrder
    feeFixed?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FxRateAvgOrderByAggregateInput = {
    rate?: SortOrder
    feePercent?: SortOrder
    feeFixed?: SortOrder
  }

  export type FxRateMaxOrderByAggregateInput = {
    id?: SortOrder
    fromCurrency?: SortOrder
    toCurrency?: SortOrder
    rate?: SortOrder
    feePercent?: SortOrder
    feeFixed?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FxRateMinOrderByAggregateInput = {
    id?: SortOrder
    fromCurrency?: SortOrder
    toCurrency?: SortOrder
    rate?: SortOrder
    feePercent?: SortOrder
    feeFixed?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FxRateSumOrderByAggregateInput = {
    rate?: SortOrder
    feePercent?: SortOrder
    feeFixed?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CompanyBankAccountCountOrderByAggregateInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountName?: SortOrder
    accountNumber?: SortOrder
    swiftBic?: SortOrder
    iban?: SortOrder
    currency?: SortOrder
    countryNote?: SortOrder
    instructions?: SortOrder
    active?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyBankAccountAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type CompanyBankAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountName?: SortOrder
    accountNumber?: SortOrder
    swiftBic?: SortOrder
    iban?: SortOrder
    currency?: SortOrder
    countryNote?: SortOrder
    instructions?: SortOrder
    active?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyBankAccountMinOrderByAggregateInput = {
    id?: SortOrder
    bankName?: SortOrder
    accountName?: SortOrder
    accountNumber?: SortOrder
    swiftBic?: SortOrder
    iban?: SortOrder
    currency?: SortOrder
    countryNote?: SortOrder
    instructions?: SortOrder
    active?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyBankAccountSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type IndividualProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<IndividualProfileCreateWithoutUserInput, IndividualProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: IndividualProfileCreateOrConnectWithoutUserInput
    connect?: IndividualProfileWhereUniqueInput
  }

  export type CorporateProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<CorporateProfileCreateWithoutUserInput, CorporateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CorporateProfileCreateOrConnectWithoutUserInput
    connect?: CorporateProfileWhereUniqueInput
  }

  export type KycDocumentCreateNestedManyWithoutUserInput = {
    create?: XOR<KycDocumentCreateWithoutUserInput, KycDocumentUncheckedCreateWithoutUserInput> | KycDocumentCreateWithoutUserInput[] | KycDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycDocumentCreateOrConnectWithoutUserInput | KycDocumentCreateOrConnectWithoutUserInput[]
    createMany?: KycDocumentCreateManyUserInputEnvelope
    connect?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
  }

  export type BeneficiaryCreateNestedManyWithoutUserInput = {
    create?: XOR<BeneficiaryCreateWithoutUserInput, BeneficiaryUncheckedCreateWithoutUserInput> | BeneficiaryCreateWithoutUserInput[] | BeneficiaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BeneficiaryCreateOrConnectWithoutUserInput | BeneficiaryCreateOrConnectWithoutUserInput[]
    createMany?: BeneficiaryCreateManyUserInputEnvelope
    connect?: BeneficiaryWhereUniqueInput | BeneficiaryWhereUniqueInput[]
  }

  export type RemittanceTransferCreateNestedManyWithoutUserInput = {
    create?: XOR<RemittanceTransferCreateWithoutUserInput, RemittanceTransferUncheckedCreateWithoutUserInput> | RemittanceTransferCreateWithoutUserInput[] | RemittanceTransferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RemittanceTransferCreateOrConnectWithoutUserInput | RemittanceTransferCreateOrConnectWithoutUserInput[]
    createMany?: RemittanceTransferCreateManyUserInputEnvelope
    connect?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
  }

  export type OtpCreateNestedManyWithoutUserInput = {
    create?: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput> | OtpCreateWithoutUserInput[] | OtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpCreateOrConnectWithoutUserInput | OtpCreateOrConnectWithoutUserInput[]
    createMany?: OtpCreateManyUserInputEnvelope
    connect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type IndividualProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<IndividualProfileCreateWithoutUserInput, IndividualProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: IndividualProfileCreateOrConnectWithoutUserInput
    connect?: IndividualProfileWhereUniqueInput
  }

  export type CorporateProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CorporateProfileCreateWithoutUserInput, CorporateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CorporateProfileCreateOrConnectWithoutUserInput
    connect?: CorporateProfileWhereUniqueInput
  }

  export type KycDocumentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<KycDocumentCreateWithoutUserInput, KycDocumentUncheckedCreateWithoutUserInput> | KycDocumentCreateWithoutUserInput[] | KycDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycDocumentCreateOrConnectWithoutUserInput | KycDocumentCreateOrConnectWithoutUserInput[]
    createMany?: KycDocumentCreateManyUserInputEnvelope
    connect?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
  }

  export type BeneficiaryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BeneficiaryCreateWithoutUserInput, BeneficiaryUncheckedCreateWithoutUserInput> | BeneficiaryCreateWithoutUserInput[] | BeneficiaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BeneficiaryCreateOrConnectWithoutUserInput | BeneficiaryCreateOrConnectWithoutUserInput[]
    createMany?: BeneficiaryCreateManyUserInputEnvelope
    connect?: BeneficiaryWhereUniqueInput | BeneficiaryWhereUniqueInput[]
  }

  export type RemittanceTransferUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RemittanceTransferCreateWithoutUserInput, RemittanceTransferUncheckedCreateWithoutUserInput> | RemittanceTransferCreateWithoutUserInput[] | RemittanceTransferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RemittanceTransferCreateOrConnectWithoutUserInput | RemittanceTransferCreateOrConnectWithoutUserInput[]
    createMany?: RemittanceTransferCreateManyUserInputEnvelope
    connect?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
  }

  export type OtpUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput> | OtpCreateWithoutUserInput[] | OtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpCreateOrConnectWithoutUserInput | OtpCreateOrConnectWithoutUserInput[]
    createMany?: OtpCreateManyUserInputEnvelope
    connect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumKycStatusFieldUpdateOperationsInput = {
    set?: $Enums.KycStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IndividualProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<IndividualProfileCreateWithoutUserInput, IndividualProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: IndividualProfileCreateOrConnectWithoutUserInput
    upsert?: IndividualProfileUpsertWithoutUserInput
    disconnect?: IndividualProfileWhereInput | boolean
    delete?: IndividualProfileWhereInput | boolean
    connect?: IndividualProfileWhereUniqueInput
    update?: XOR<XOR<IndividualProfileUpdateToOneWithWhereWithoutUserInput, IndividualProfileUpdateWithoutUserInput>, IndividualProfileUncheckedUpdateWithoutUserInput>
  }

  export type CorporateProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<CorporateProfileCreateWithoutUserInput, CorporateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CorporateProfileCreateOrConnectWithoutUserInput
    upsert?: CorporateProfileUpsertWithoutUserInput
    disconnect?: CorporateProfileWhereInput | boolean
    delete?: CorporateProfileWhereInput | boolean
    connect?: CorporateProfileWhereUniqueInput
    update?: XOR<XOR<CorporateProfileUpdateToOneWithWhereWithoutUserInput, CorporateProfileUpdateWithoutUserInput>, CorporateProfileUncheckedUpdateWithoutUserInput>
  }

  export type KycDocumentUpdateManyWithoutUserNestedInput = {
    create?: XOR<KycDocumentCreateWithoutUserInput, KycDocumentUncheckedCreateWithoutUserInput> | KycDocumentCreateWithoutUserInput[] | KycDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycDocumentCreateOrConnectWithoutUserInput | KycDocumentCreateOrConnectWithoutUserInput[]
    upsert?: KycDocumentUpsertWithWhereUniqueWithoutUserInput | KycDocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KycDocumentCreateManyUserInputEnvelope
    set?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
    disconnect?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
    delete?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
    connect?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
    update?: KycDocumentUpdateWithWhereUniqueWithoutUserInput | KycDocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KycDocumentUpdateManyWithWhereWithoutUserInput | KycDocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KycDocumentScalarWhereInput | KycDocumentScalarWhereInput[]
  }

  export type BeneficiaryUpdateManyWithoutUserNestedInput = {
    create?: XOR<BeneficiaryCreateWithoutUserInput, BeneficiaryUncheckedCreateWithoutUserInput> | BeneficiaryCreateWithoutUserInput[] | BeneficiaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BeneficiaryCreateOrConnectWithoutUserInput | BeneficiaryCreateOrConnectWithoutUserInput[]
    upsert?: BeneficiaryUpsertWithWhereUniqueWithoutUserInput | BeneficiaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BeneficiaryCreateManyUserInputEnvelope
    set?: BeneficiaryWhereUniqueInput | BeneficiaryWhereUniqueInput[]
    disconnect?: BeneficiaryWhereUniqueInput | BeneficiaryWhereUniqueInput[]
    delete?: BeneficiaryWhereUniqueInput | BeneficiaryWhereUniqueInput[]
    connect?: BeneficiaryWhereUniqueInput | BeneficiaryWhereUniqueInput[]
    update?: BeneficiaryUpdateWithWhereUniqueWithoutUserInput | BeneficiaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BeneficiaryUpdateManyWithWhereWithoutUserInput | BeneficiaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BeneficiaryScalarWhereInput | BeneficiaryScalarWhereInput[]
  }

  export type RemittanceTransferUpdateManyWithoutUserNestedInput = {
    create?: XOR<RemittanceTransferCreateWithoutUserInput, RemittanceTransferUncheckedCreateWithoutUserInput> | RemittanceTransferCreateWithoutUserInput[] | RemittanceTransferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RemittanceTransferCreateOrConnectWithoutUserInput | RemittanceTransferCreateOrConnectWithoutUserInput[]
    upsert?: RemittanceTransferUpsertWithWhereUniqueWithoutUserInput | RemittanceTransferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RemittanceTransferCreateManyUserInputEnvelope
    set?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
    disconnect?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
    delete?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
    connect?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
    update?: RemittanceTransferUpdateWithWhereUniqueWithoutUserInput | RemittanceTransferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RemittanceTransferUpdateManyWithWhereWithoutUserInput | RemittanceTransferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RemittanceTransferScalarWhereInput | RemittanceTransferScalarWhereInput[]
  }

  export type OtpUpdateManyWithoutUserNestedInput = {
    create?: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput> | OtpCreateWithoutUserInput[] | OtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpCreateOrConnectWithoutUserInput | OtpCreateOrConnectWithoutUserInput[]
    upsert?: OtpUpsertWithWhereUniqueWithoutUserInput | OtpUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OtpCreateManyUserInputEnvelope
    set?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    disconnect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    delete?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    connect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    update?: OtpUpdateWithWhereUniqueWithoutUserInput | OtpUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OtpUpdateManyWithWhereWithoutUserInput | OtpUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OtpScalarWhereInput | OtpScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type IndividualProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<IndividualProfileCreateWithoutUserInput, IndividualProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: IndividualProfileCreateOrConnectWithoutUserInput
    upsert?: IndividualProfileUpsertWithoutUserInput
    disconnect?: IndividualProfileWhereInput | boolean
    delete?: IndividualProfileWhereInput | boolean
    connect?: IndividualProfileWhereUniqueInput
    update?: XOR<XOR<IndividualProfileUpdateToOneWithWhereWithoutUserInput, IndividualProfileUpdateWithoutUserInput>, IndividualProfileUncheckedUpdateWithoutUserInput>
  }

  export type CorporateProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CorporateProfileCreateWithoutUserInput, CorporateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CorporateProfileCreateOrConnectWithoutUserInput
    upsert?: CorporateProfileUpsertWithoutUserInput
    disconnect?: CorporateProfileWhereInput | boolean
    delete?: CorporateProfileWhereInput | boolean
    connect?: CorporateProfileWhereUniqueInput
    update?: XOR<XOR<CorporateProfileUpdateToOneWithWhereWithoutUserInput, CorporateProfileUpdateWithoutUserInput>, CorporateProfileUncheckedUpdateWithoutUserInput>
  }

  export type KycDocumentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<KycDocumentCreateWithoutUserInput, KycDocumentUncheckedCreateWithoutUserInput> | KycDocumentCreateWithoutUserInput[] | KycDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KycDocumentCreateOrConnectWithoutUserInput | KycDocumentCreateOrConnectWithoutUserInput[]
    upsert?: KycDocumentUpsertWithWhereUniqueWithoutUserInput | KycDocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KycDocumentCreateManyUserInputEnvelope
    set?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
    disconnect?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
    delete?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
    connect?: KycDocumentWhereUniqueInput | KycDocumentWhereUniqueInput[]
    update?: KycDocumentUpdateWithWhereUniqueWithoutUserInput | KycDocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KycDocumentUpdateManyWithWhereWithoutUserInput | KycDocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KycDocumentScalarWhereInput | KycDocumentScalarWhereInput[]
  }

  export type BeneficiaryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BeneficiaryCreateWithoutUserInput, BeneficiaryUncheckedCreateWithoutUserInput> | BeneficiaryCreateWithoutUserInput[] | BeneficiaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BeneficiaryCreateOrConnectWithoutUserInput | BeneficiaryCreateOrConnectWithoutUserInput[]
    upsert?: BeneficiaryUpsertWithWhereUniqueWithoutUserInput | BeneficiaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BeneficiaryCreateManyUserInputEnvelope
    set?: BeneficiaryWhereUniqueInput | BeneficiaryWhereUniqueInput[]
    disconnect?: BeneficiaryWhereUniqueInput | BeneficiaryWhereUniqueInput[]
    delete?: BeneficiaryWhereUniqueInput | BeneficiaryWhereUniqueInput[]
    connect?: BeneficiaryWhereUniqueInput | BeneficiaryWhereUniqueInput[]
    update?: BeneficiaryUpdateWithWhereUniqueWithoutUserInput | BeneficiaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BeneficiaryUpdateManyWithWhereWithoutUserInput | BeneficiaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BeneficiaryScalarWhereInput | BeneficiaryScalarWhereInput[]
  }

  export type RemittanceTransferUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RemittanceTransferCreateWithoutUserInput, RemittanceTransferUncheckedCreateWithoutUserInput> | RemittanceTransferCreateWithoutUserInput[] | RemittanceTransferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RemittanceTransferCreateOrConnectWithoutUserInput | RemittanceTransferCreateOrConnectWithoutUserInput[]
    upsert?: RemittanceTransferUpsertWithWhereUniqueWithoutUserInput | RemittanceTransferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RemittanceTransferCreateManyUserInputEnvelope
    set?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
    disconnect?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
    delete?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
    connect?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
    update?: RemittanceTransferUpdateWithWhereUniqueWithoutUserInput | RemittanceTransferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RemittanceTransferUpdateManyWithWhereWithoutUserInput | RemittanceTransferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RemittanceTransferScalarWhereInput | RemittanceTransferScalarWhereInput[]
  }

  export type OtpUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput> | OtpCreateWithoutUserInput[] | OtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpCreateOrConnectWithoutUserInput | OtpCreateOrConnectWithoutUserInput[]
    upsert?: OtpUpsertWithWhereUniqueWithoutUserInput | OtpUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OtpCreateManyUserInputEnvelope
    set?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    disconnect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    delete?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    connect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    update?: OtpUpdateWithWhereUniqueWithoutUserInput | OtpUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OtpUpdateManyWithWhereWithoutUserInput | OtpUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OtpScalarWhereInput | OtpScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutOtpsInput = {
    create?: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumOtpTypeFieldUpdateOperationsInput = {
    set?: $Enums.OtpType
  }

  export type UserUpdateOneRequiredWithoutOtpsNestedInput = {
    create?: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpsInput
    upsert?: UserUpsertWithoutOtpsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOtpsInput, UserUpdateWithoutOtpsInput>, UserUncheckedUpdateWithoutOtpsInput>
  }

  export type UserCreateNestedOneWithoutIndividualProfileInput = {
    create?: XOR<UserCreateWithoutIndividualProfileInput, UserUncheckedCreateWithoutIndividualProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutIndividualProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutIndividualProfileNestedInput = {
    create?: XOR<UserCreateWithoutIndividualProfileInput, UserUncheckedCreateWithoutIndividualProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutIndividualProfileInput
    upsert?: UserUpsertWithoutIndividualProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIndividualProfileInput, UserUpdateWithoutIndividualProfileInput>, UserUncheckedUpdateWithoutIndividualProfileInput>
  }

  export type UserCreateNestedOneWithoutCorporateProfileInput = {
    create?: XOR<UserCreateWithoutCorporateProfileInput, UserUncheckedCreateWithoutCorporateProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCorporateProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCorporateProfileNestedInput = {
    create?: XOR<UserCreateWithoutCorporateProfileInput, UserUncheckedCreateWithoutCorporateProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCorporateProfileInput
    upsert?: UserUpsertWithoutCorporateProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCorporateProfileInput, UserUpdateWithoutCorporateProfileInput>, UserUncheckedUpdateWithoutCorporateProfileInput>
  }

  export type UserCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType
  }

  export type EnumDocumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.DocumentStatus
  }

  export type UserUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    upsert?: UserUpsertWithoutDocumentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocumentsInput, UserUpdateWithoutDocumentsInput>, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserCreateNestedOneWithoutBeneficiariesInput = {
    create?: XOR<UserCreateWithoutBeneficiariesInput, UserUncheckedCreateWithoutBeneficiariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBeneficiariesInput
    connect?: UserWhereUniqueInput
  }

  export type RemittanceTransferCreateNestedManyWithoutBeneficiaryInput = {
    create?: XOR<RemittanceTransferCreateWithoutBeneficiaryInput, RemittanceTransferUncheckedCreateWithoutBeneficiaryInput> | RemittanceTransferCreateWithoutBeneficiaryInput[] | RemittanceTransferUncheckedCreateWithoutBeneficiaryInput[]
    connectOrCreate?: RemittanceTransferCreateOrConnectWithoutBeneficiaryInput | RemittanceTransferCreateOrConnectWithoutBeneficiaryInput[]
    createMany?: RemittanceTransferCreateManyBeneficiaryInputEnvelope
    connect?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
  }

  export type RemittanceTransferUncheckedCreateNestedManyWithoutBeneficiaryInput = {
    create?: XOR<RemittanceTransferCreateWithoutBeneficiaryInput, RemittanceTransferUncheckedCreateWithoutBeneficiaryInput> | RemittanceTransferCreateWithoutBeneficiaryInput[] | RemittanceTransferUncheckedCreateWithoutBeneficiaryInput[]
    connectOrCreate?: RemittanceTransferCreateOrConnectWithoutBeneficiaryInput | RemittanceTransferCreateOrConnectWithoutBeneficiaryInput[]
    createMany?: RemittanceTransferCreateManyBeneficiaryInputEnvelope
    connect?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
  }

  export type EnumDeliveryChannelFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryChannel
  }

  export type UserUpdateOneRequiredWithoutBeneficiariesNestedInput = {
    create?: XOR<UserCreateWithoutBeneficiariesInput, UserUncheckedCreateWithoutBeneficiariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBeneficiariesInput
    upsert?: UserUpsertWithoutBeneficiariesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBeneficiariesInput, UserUpdateWithoutBeneficiariesInput>, UserUncheckedUpdateWithoutBeneficiariesInput>
  }

  export type RemittanceTransferUpdateManyWithoutBeneficiaryNestedInput = {
    create?: XOR<RemittanceTransferCreateWithoutBeneficiaryInput, RemittanceTransferUncheckedCreateWithoutBeneficiaryInput> | RemittanceTransferCreateWithoutBeneficiaryInput[] | RemittanceTransferUncheckedCreateWithoutBeneficiaryInput[]
    connectOrCreate?: RemittanceTransferCreateOrConnectWithoutBeneficiaryInput | RemittanceTransferCreateOrConnectWithoutBeneficiaryInput[]
    upsert?: RemittanceTransferUpsertWithWhereUniqueWithoutBeneficiaryInput | RemittanceTransferUpsertWithWhereUniqueWithoutBeneficiaryInput[]
    createMany?: RemittanceTransferCreateManyBeneficiaryInputEnvelope
    set?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
    disconnect?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
    delete?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
    connect?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
    update?: RemittanceTransferUpdateWithWhereUniqueWithoutBeneficiaryInput | RemittanceTransferUpdateWithWhereUniqueWithoutBeneficiaryInput[]
    updateMany?: RemittanceTransferUpdateManyWithWhereWithoutBeneficiaryInput | RemittanceTransferUpdateManyWithWhereWithoutBeneficiaryInput[]
    deleteMany?: RemittanceTransferScalarWhereInput | RemittanceTransferScalarWhereInput[]
  }

  export type RemittanceTransferUncheckedUpdateManyWithoutBeneficiaryNestedInput = {
    create?: XOR<RemittanceTransferCreateWithoutBeneficiaryInput, RemittanceTransferUncheckedCreateWithoutBeneficiaryInput> | RemittanceTransferCreateWithoutBeneficiaryInput[] | RemittanceTransferUncheckedCreateWithoutBeneficiaryInput[]
    connectOrCreate?: RemittanceTransferCreateOrConnectWithoutBeneficiaryInput | RemittanceTransferCreateOrConnectWithoutBeneficiaryInput[]
    upsert?: RemittanceTransferUpsertWithWhereUniqueWithoutBeneficiaryInput | RemittanceTransferUpsertWithWhereUniqueWithoutBeneficiaryInput[]
    createMany?: RemittanceTransferCreateManyBeneficiaryInputEnvelope
    set?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
    disconnect?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
    delete?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
    connect?: RemittanceTransferWhereUniqueInput | RemittanceTransferWhereUniqueInput[]
    update?: RemittanceTransferUpdateWithWhereUniqueWithoutBeneficiaryInput | RemittanceTransferUpdateWithWhereUniqueWithoutBeneficiaryInput[]
    updateMany?: RemittanceTransferUpdateManyWithWhereWithoutBeneficiaryInput | RemittanceTransferUpdateManyWithWhereWithoutBeneficiaryInput[]
    deleteMany?: RemittanceTransferScalarWhereInput | RemittanceTransferScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRemittanceTransfersInput = {
    create?: XOR<UserCreateWithoutRemittanceTransfersInput, UserUncheckedCreateWithoutRemittanceTransfersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRemittanceTransfersInput
    connect?: UserWhereUniqueInput
  }

  export type BeneficiaryCreateNestedOneWithoutRemittanceTransfersInput = {
    create?: XOR<BeneficiaryCreateWithoutRemittanceTransfersInput, BeneficiaryUncheckedCreateWithoutRemittanceTransfersInput>
    connectOrCreate?: BeneficiaryCreateOrConnectWithoutRemittanceTransfersInput
    connect?: BeneficiaryWhereUniqueInput
  }

  export type EnumRemittanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.RemittanceStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableEnumPayInMethodFieldUpdateOperationsInput = {
    set?: $Enums.PayInMethod | null
  }

  export type UserUpdateOneRequiredWithoutRemittanceTransfersNestedInput = {
    create?: XOR<UserCreateWithoutRemittanceTransfersInput, UserUncheckedCreateWithoutRemittanceTransfersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRemittanceTransfersInput
    upsert?: UserUpsertWithoutRemittanceTransfersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRemittanceTransfersInput, UserUpdateWithoutRemittanceTransfersInput>, UserUncheckedUpdateWithoutRemittanceTransfersInput>
  }

  export type BeneficiaryUpdateOneWithoutRemittanceTransfersNestedInput = {
    create?: XOR<BeneficiaryCreateWithoutRemittanceTransfersInput, BeneficiaryUncheckedCreateWithoutRemittanceTransfersInput>
    connectOrCreate?: BeneficiaryCreateOrConnectWithoutRemittanceTransfersInput
    upsert?: BeneficiaryUpsertWithoutRemittanceTransfersInput
    disconnect?: BeneficiaryWhereInput | boolean
    delete?: BeneficiaryWhereInput | boolean
    connect?: BeneficiaryWhereUniqueInput
    update?: XOR<XOR<BeneficiaryUpdateToOneWithWhereWithoutRemittanceTransfersInput, BeneficiaryUpdateWithoutRemittanceTransfersInput>, BeneficiaryUncheckedUpdateWithoutRemittanceTransfersInput>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumKycStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusFilter<$PrismaModel> | $Enums.KycStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumKycStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycStatus[] | ListEnumKycStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumKycStatusWithAggregatesFilter<$PrismaModel> | $Enums.KycStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycStatusFilter<$PrismaModel>
    _max?: NestedEnumKycStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumOtpTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpType | EnumOtpTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OtpType[] | ListEnumOtpTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtpType[] | ListEnumOtpTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtpTypeFilter<$PrismaModel> | $Enums.OtpType
  }

  export type NestedEnumOtpTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpType | EnumOtpTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OtpType[] | ListEnumOtpTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtpType[] | ListEnumOtpTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtpTypeWithAggregatesFilter<$PrismaModel> | $Enums.OtpType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOtpTypeFilter<$PrismaModel>
    _max?: NestedEnumOtpTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type NestedEnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
  }

  export type NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
  }

  export type NestedEnumDeliveryChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryChannel | EnumDeliveryChannelFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryChannelFilter<$PrismaModel> | $Enums.DeliveryChannel
  }

  export type NestedEnumDeliveryChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryChannel | EnumDeliveryChannelFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryChannel[] | ListEnumDeliveryChannelFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryChannelWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryChannelFilter<$PrismaModel>
    _max?: NestedEnumDeliveryChannelFilter<$PrismaModel>
  }

  export type NestedEnumRemittanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RemittanceStatus | EnumRemittanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RemittanceStatus[] | ListEnumRemittanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RemittanceStatus[] | ListEnumRemittanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRemittanceStatusFilter<$PrismaModel> | $Enums.RemittanceStatus
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumPayInMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PayInMethod | EnumPayInMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PayInMethod[] | ListEnumPayInMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PayInMethod[] | ListEnumPayInMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPayInMethodNullableFilter<$PrismaModel> | $Enums.PayInMethod | null
  }

  export type NestedEnumRemittanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RemittanceStatus | EnumRemittanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RemittanceStatus[] | ListEnumRemittanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RemittanceStatus[] | ListEnumRemittanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRemittanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.RemittanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRemittanceStatusFilter<$PrismaModel>
    _max?: NestedEnumRemittanceStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumPayInMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayInMethod | EnumPayInMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PayInMethod[] | ListEnumPayInMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PayInMethod[] | ListEnumPayInMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPayInMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PayInMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPayInMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPayInMethodNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IndividualProfileCreateWithoutUserInput = {
    id?: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    fullName?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    isNational?: boolean
    passportNumber?: string | null
    passportIssue?: Date | string | null
    passportExpiry?: Date | string | null
    workPermitNumber?: string | null
    workPermitIssue?: Date | string | null
    workPermitExpiry?: Date | string | null
    nationalIdNumber?: string | null
    nationalIdIssue?: Date | string | null
    nationalIdExpiry?: Date | string | null
    residentialAddress?: string | null
    country?: string | null
    contactEmail?: string | null
    contactPhone?: string | null
    occupation?: string | null
    employerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndividualProfileUncheckedCreateWithoutUserInput = {
    id?: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    fullName?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    isNational?: boolean
    passportNumber?: string | null
    passportIssue?: Date | string | null
    passportExpiry?: Date | string | null
    workPermitNumber?: string | null
    workPermitIssue?: Date | string | null
    workPermitExpiry?: Date | string | null
    nationalIdNumber?: string | null
    nationalIdIssue?: Date | string | null
    nationalIdExpiry?: Date | string | null
    residentialAddress?: string | null
    country?: string | null
    contactEmail?: string | null
    contactPhone?: string | null
    occupation?: string | null
    employerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndividualProfileCreateOrConnectWithoutUserInput = {
    where: IndividualProfileWhereUniqueInput
    create: XOR<IndividualProfileCreateWithoutUserInput, IndividualProfileUncheckedCreateWithoutUserInput>
  }

  export type CorporateProfileCreateWithoutUserInput = {
    id?: string
    businessName?: string | null
    natureOfBusiness?: string | null
    businessAddress?: string | null
    registrationNumber?: string | null
    incorporationDate?: Date | string | null
    tradingLicenseNumber?: string | null
    tradingLicenseIssue?: Date | string | null
    tradingLicenseExpiry?: Date | string | null
    regulatoryLicenseNumber?: string | null
    regulatoryLicenseIssue?: Date | string | null
    regulatoryLicenseExpiry?: Date | string | null
    keyPersonnel?: NullableJsonNullValueInput | InputJsonValue
    shareholders?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CorporateProfileUncheckedCreateWithoutUserInput = {
    id?: string
    businessName?: string | null
    natureOfBusiness?: string | null
    businessAddress?: string | null
    registrationNumber?: string | null
    incorporationDate?: Date | string | null
    tradingLicenseNumber?: string | null
    tradingLicenseIssue?: Date | string | null
    tradingLicenseExpiry?: Date | string | null
    regulatoryLicenseNumber?: string | null
    regulatoryLicenseIssue?: Date | string | null
    regulatoryLicenseExpiry?: Date | string | null
    keyPersonnel?: NullableJsonNullValueInput | InputJsonValue
    shareholders?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CorporateProfileCreateOrConnectWithoutUserInput = {
    where: CorporateProfileWhereUniqueInput
    create: XOR<CorporateProfileCreateWithoutUserInput, CorporateProfileUncheckedCreateWithoutUserInput>
  }

  export type KycDocumentCreateWithoutUserInput = {
    id?: string
    documentType: $Enums.DocumentType
    fileName: string
    fileUrl: string
    fileSize?: number | null
    mimeType?: string | null
    status?: $Enums.DocumentStatus
    uploadedAt?: Date | string
  }

  export type KycDocumentUncheckedCreateWithoutUserInput = {
    id?: string
    documentType: $Enums.DocumentType
    fileName: string
    fileUrl: string
    fileSize?: number | null
    mimeType?: string | null
    status?: $Enums.DocumentStatus
    uploadedAt?: Date | string
  }

  export type KycDocumentCreateOrConnectWithoutUserInput = {
    where: KycDocumentWhereUniqueInput
    create: XOR<KycDocumentCreateWithoutUserInput, KycDocumentUncheckedCreateWithoutUserInput>
  }

  export type KycDocumentCreateManyUserInputEnvelope = {
    data: KycDocumentCreateManyUserInput | KycDocumentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BeneficiaryCreateWithoutUserInput = {
    id?: string
    deliveryChannel: $Enums.DeliveryChannel
    fullName: string
    country?: string | null
    bankName?: string | null
    accountNumber?: string | null
    swiftBic?: string | null
    mobileMoneyProvider?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    remittanceTransfers?: RemittanceTransferCreateNestedManyWithoutBeneficiaryInput
  }

  export type BeneficiaryUncheckedCreateWithoutUserInput = {
    id?: string
    deliveryChannel: $Enums.DeliveryChannel
    fullName: string
    country?: string | null
    bankName?: string | null
    accountNumber?: string | null
    swiftBic?: string | null
    mobileMoneyProvider?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    remittanceTransfers?: RemittanceTransferUncheckedCreateNestedManyWithoutBeneficiaryInput
  }

  export type BeneficiaryCreateOrConnectWithoutUserInput = {
    where: BeneficiaryWhereUniqueInput
    create: XOR<BeneficiaryCreateWithoutUserInput, BeneficiaryUncheckedCreateWithoutUserInput>
  }

  export type BeneficiaryCreateManyUserInputEnvelope = {
    data: BeneficiaryCreateManyUserInput | BeneficiaryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RemittanceTransferCreateWithoutUserInput = {
    id?: string
    referenceCode: string
    status?: $Enums.RemittanceStatus
    currentStep?: number
    senderCountryIso2?: string | null
    payCurrency?: string | null
    payAmount?: Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: string | null
    recipientCountryIso2?: string | null
    receiveCurrency?: string | null
    receiveAmount?: Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: Decimal | DecimalJsLike | number | string | null
    feeAmount?: Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: Date | string | null
    sourceOfIncome?: string | null
    transferPurpose?: string | null
    relationshipToRecipient?: string | null
    complianceAccepted?: boolean
    payInMethod?: $Enums.PayInMethod | null
    payerPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    beneficiary?: BeneficiaryCreateNestedOneWithoutRemittanceTransfersInput
  }

  export type RemittanceTransferUncheckedCreateWithoutUserInput = {
    id?: string
    referenceCode: string
    status?: $Enums.RemittanceStatus
    currentStep?: number
    senderCountryIso2?: string | null
    payCurrency?: string | null
    payAmount?: Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: string | null
    recipientCountryIso2?: string | null
    receiveCurrency?: string | null
    receiveAmount?: Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: Decimal | DecimalJsLike | number | string | null
    feeAmount?: Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: Date | string | null
    beneficiaryId?: string | null
    sourceOfIncome?: string | null
    transferPurpose?: string | null
    relationshipToRecipient?: string | null
    complianceAccepted?: boolean
    payInMethod?: $Enums.PayInMethod | null
    payerPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemittanceTransferCreateOrConnectWithoutUserInput = {
    where: RemittanceTransferWhereUniqueInput
    create: XOR<RemittanceTransferCreateWithoutUserInput, RemittanceTransferUncheckedCreateWithoutUserInput>
  }

  export type RemittanceTransferCreateManyUserInputEnvelope = {
    data: RemittanceTransferCreateManyUserInput | RemittanceTransferCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OtpCreateWithoutUserInput = {
    id?: string
    type: $Enums.OtpType
    code: string
    expiresAt: Date | string
    verified?: boolean
    createdAt?: Date | string
  }

  export type OtpUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.OtpType
    code: string
    expiresAt: Date | string
    verified?: boolean
    createdAt?: Date | string
  }

  export type OtpCreateOrConnectWithoutUserInput = {
    where: OtpWhereUniqueInput
    create: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
  }

  export type OtpCreateManyUserInputEnvelope = {
    data: OtpCreateManyUserInput | OtpCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IndividualProfileUpsertWithoutUserInput = {
    update: XOR<IndividualProfileUpdateWithoutUserInput, IndividualProfileUncheckedUpdateWithoutUserInput>
    create: XOR<IndividualProfileCreateWithoutUserInput, IndividualProfileUncheckedCreateWithoutUserInput>
    where?: IndividualProfileWhereInput
  }

  export type IndividualProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: IndividualProfileWhereInput
    data: XOR<IndividualProfileUpdateWithoutUserInput, IndividualProfileUncheckedUpdateWithoutUserInput>
  }

  export type IndividualProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    isNational?: BoolFieldUpdateOperationsInput | boolean
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workPermitNumber?: NullableStringFieldUpdateOperationsInput | string | null
    workPermitIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workPermitExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationalIdIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalIdExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    residentialAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    employerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndividualProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    isNational?: BoolFieldUpdateOperationsInput | boolean
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workPermitNumber?: NullableStringFieldUpdateOperationsInput | string | null
    workPermitIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workPermitExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalIdNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationalIdIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationalIdExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    residentialAddress?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    employerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CorporateProfileUpsertWithoutUserInput = {
    update: XOR<CorporateProfileUpdateWithoutUserInput, CorporateProfileUncheckedUpdateWithoutUserInput>
    create: XOR<CorporateProfileCreateWithoutUserInput, CorporateProfileUncheckedCreateWithoutUserInput>
    where?: CorporateProfileWhereInput
  }

  export type CorporateProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: CorporateProfileWhereInput
    data: XOR<CorporateProfileUpdateWithoutUserInput, CorporateProfileUncheckedUpdateWithoutUserInput>
  }

  export type CorporateProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    natureOfBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    incorporationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradingLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tradingLicenseIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradingLicenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regulatoryLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    regulatoryLicenseIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regulatoryLicenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    keyPersonnel?: NullableJsonNullValueInput | InputJsonValue
    shareholders?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CorporateProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    natureOfBusiness?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    incorporationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradingLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tradingLicenseIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradingLicenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regulatoryLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    regulatoryLicenseIssue?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    regulatoryLicenseExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    keyPersonnel?: NullableJsonNullValueInput | InputJsonValue
    shareholders?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycDocumentUpsertWithWhereUniqueWithoutUserInput = {
    where: KycDocumentWhereUniqueInput
    update: XOR<KycDocumentUpdateWithoutUserInput, KycDocumentUncheckedUpdateWithoutUserInput>
    create: XOR<KycDocumentCreateWithoutUserInput, KycDocumentUncheckedCreateWithoutUserInput>
  }

  export type KycDocumentUpdateWithWhereUniqueWithoutUserInput = {
    where: KycDocumentWhereUniqueInput
    data: XOR<KycDocumentUpdateWithoutUserInput, KycDocumentUncheckedUpdateWithoutUserInput>
  }

  export type KycDocumentUpdateManyWithWhereWithoutUserInput = {
    where: KycDocumentScalarWhereInput
    data: XOR<KycDocumentUpdateManyMutationInput, KycDocumentUncheckedUpdateManyWithoutUserInput>
  }

  export type KycDocumentScalarWhereInput = {
    AND?: KycDocumentScalarWhereInput | KycDocumentScalarWhereInput[]
    OR?: KycDocumentScalarWhereInput[]
    NOT?: KycDocumentScalarWhereInput | KycDocumentScalarWhereInput[]
    id?: StringFilter<"KycDocument"> | string
    userId?: StringFilter<"KycDocument"> | string
    documentType?: EnumDocumentTypeFilter<"KycDocument"> | $Enums.DocumentType
    fileName?: StringFilter<"KycDocument"> | string
    fileUrl?: StringFilter<"KycDocument"> | string
    fileSize?: IntNullableFilter<"KycDocument"> | number | null
    mimeType?: StringNullableFilter<"KycDocument"> | string | null
    status?: EnumDocumentStatusFilter<"KycDocument"> | $Enums.DocumentStatus
    uploadedAt?: DateTimeFilter<"KycDocument"> | Date | string
  }

  export type BeneficiaryUpsertWithWhereUniqueWithoutUserInput = {
    where: BeneficiaryWhereUniqueInput
    update: XOR<BeneficiaryUpdateWithoutUserInput, BeneficiaryUncheckedUpdateWithoutUserInput>
    create: XOR<BeneficiaryCreateWithoutUserInput, BeneficiaryUncheckedCreateWithoutUserInput>
  }

  export type BeneficiaryUpdateWithWhereUniqueWithoutUserInput = {
    where: BeneficiaryWhereUniqueInput
    data: XOR<BeneficiaryUpdateWithoutUserInput, BeneficiaryUncheckedUpdateWithoutUserInput>
  }

  export type BeneficiaryUpdateManyWithWhereWithoutUserInput = {
    where: BeneficiaryScalarWhereInput
    data: XOR<BeneficiaryUpdateManyMutationInput, BeneficiaryUncheckedUpdateManyWithoutUserInput>
  }

  export type BeneficiaryScalarWhereInput = {
    AND?: BeneficiaryScalarWhereInput | BeneficiaryScalarWhereInput[]
    OR?: BeneficiaryScalarWhereInput[]
    NOT?: BeneficiaryScalarWhereInput | BeneficiaryScalarWhereInput[]
    id?: StringFilter<"Beneficiary"> | string
    userId?: StringFilter<"Beneficiary"> | string
    deliveryChannel?: EnumDeliveryChannelFilter<"Beneficiary"> | $Enums.DeliveryChannel
    fullName?: StringFilter<"Beneficiary"> | string
    country?: StringNullableFilter<"Beneficiary"> | string | null
    bankName?: StringNullableFilter<"Beneficiary"> | string | null
    accountNumber?: StringNullableFilter<"Beneficiary"> | string | null
    swiftBic?: StringNullableFilter<"Beneficiary"> | string | null
    mobileMoneyProvider?: StringNullableFilter<"Beneficiary"> | string | null
    mobileNumber?: StringNullableFilter<"Beneficiary"> | string | null
    createdAt?: DateTimeFilter<"Beneficiary"> | Date | string
    updatedAt?: DateTimeFilter<"Beneficiary"> | Date | string
  }

  export type RemittanceTransferUpsertWithWhereUniqueWithoutUserInput = {
    where: RemittanceTransferWhereUniqueInput
    update: XOR<RemittanceTransferUpdateWithoutUserInput, RemittanceTransferUncheckedUpdateWithoutUserInput>
    create: XOR<RemittanceTransferCreateWithoutUserInput, RemittanceTransferUncheckedCreateWithoutUserInput>
  }

  export type RemittanceTransferUpdateWithWhereUniqueWithoutUserInput = {
    where: RemittanceTransferWhereUniqueInput
    data: XOR<RemittanceTransferUpdateWithoutUserInput, RemittanceTransferUncheckedUpdateWithoutUserInput>
  }

  export type RemittanceTransferUpdateManyWithWhereWithoutUserInput = {
    where: RemittanceTransferScalarWhereInput
    data: XOR<RemittanceTransferUpdateManyMutationInput, RemittanceTransferUncheckedUpdateManyWithoutUserInput>
  }

  export type RemittanceTransferScalarWhereInput = {
    AND?: RemittanceTransferScalarWhereInput | RemittanceTransferScalarWhereInput[]
    OR?: RemittanceTransferScalarWhereInput[]
    NOT?: RemittanceTransferScalarWhereInput | RemittanceTransferScalarWhereInput[]
    id?: StringFilter<"RemittanceTransfer"> | string
    userId?: StringFilter<"RemittanceTransfer"> | string
    referenceCode?: StringFilter<"RemittanceTransfer"> | string
    status?: EnumRemittanceStatusFilter<"RemittanceTransfer"> | $Enums.RemittanceStatus
    currentStep?: IntFilter<"RemittanceTransfer"> | number
    senderCountryIso2?: StringNullableFilter<"RemittanceTransfer"> | string | null
    payCurrency?: StringNullableFilter<"RemittanceTransfer"> | string | null
    payAmount?: DecimalNullableFilter<"RemittanceTransfer"> | Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: StringNullableFilter<"RemittanceTransfer"> | string | null
    recipientCountryIso2?: StringNullableFilter<"RemittanceTransfer"> | string | null
    receiveCurrency?: StringNullableFilter<"RemittanceTransfer"> | string | null
    receiveAmount?: DecimalNullableFilter<"RemittanceTransfer"> | Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: DecimalNullableFilter<"RemittanceTransfer"> | Decimal | DecimalJsLike | number | string | null
    feeAmount?: DecimalNullableFilter<"RemittanceTransfer"> | Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: DateTimeNullableFilter<"RemittanceTransfer"> | Date | string | null
    beneficiaryId?: StringNullableFilter<"RemittanceTransfer"> | string | null
    sourceOfIncome?: StringNullableFilter<"RemittanceTransfer"> | string | null
    transferPurpose?: StringNullableFilter<"RemittanceTransfer"> | string | null
    relationshipToRecipient?: StringNullableFilter<"RemittanceTransfer"> | string | null
    complianceAccepted?: BoolFilter<"RemittanceTransfer"> | boolean
    payInMethod?: EnumPayInMethodNullableFilter<"RemittanceTransfer"> | $Enums.PayInMethod | null
    payerPhone?: StringNullableFilter<"RemittanceTransfer"> | string | null
    createdAt?: DateTimeFilter<"RemittanceTransfer"> | Date | string
    updatedAt?: DateTimeFilter<"RemittanceTransfer"> | Date | string
  }

  export type OtpUpsertWithWhereUniqueWithoutUserInput = {
    where: OtpWhereUniqueInput
    update: XOR<OtpUpdateWithoutUserInput, OtpUncheckedUpdateWithoutUserInput>
    create: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
  }

  export type OtpUpdateWithWhereUniqueWithoutUserInput = {
    where: OtpWhereUniqueInput
    data: XOR<OtpUpdateWithoutUserInput, OtpUncheckedUpdateWithoutUserInput>
  }

  export type OtpUpdateManyWithWhereWithoutUserInput = {
    where: OtpScalarWhereInput
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyWithoutUserInput>
  }

  export type OtpScalarWhereInput = {
    AND?: OtpScalarWhereInput | OtpScalarWhereInput[]
    OR?: OtpScalarWhereInput[]
    NOT?: OtpScalarWhereInput | OtpScalarWhereInput[]
    id?: StringFilter<"Otp"> | string
    userId?: StringFilter<"Otp"> | string
    type?: EnumOtpTypeFilter<"Otp"> | $Enums.OtpType
    code?: StringFilter<"Otp"> | string
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
    verified?: BoolFilter<"Otp"> | boolean
    createdAt?: DateTimeFilter<"Otp"> | Date | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileCreateNestedOneWithoutUserInput
    corporateProfile?: CorporateProfileCreateNestedOneWithoutUserInput
    documents?: KycDocumentCreateNestedManyWithoutUserInput
    beneficiaries?: BeneficiaryCreateNestedManyWithoutUserInput
    remittanceTransfers?: RemittanceTransferCreateNestedManyWithoutUserInput
    otps?: OtpCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileUncheckedCreateNestedOneWithoutUserInput
    corporateProfile?: CorporateProfileUncheckedCreateNestedOneWithoutUserInput
    documents?: KycDocumentUncheckedCreateNestedManyWithoutUserInput
    beneficiaries?: BeneficiaryUncheckedCreateNestedManyWithoutUserInput
    remittanceTransfers?: RemittanceTransferUncheckedCreateNestedManyWithoutUserInput
    otps?: OtpUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUpdateOneWithoutUserNestedInput
    corporateProfile?: CorporateProfileUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUpdateManyWithoutUserNestedInput
    beneficiaries?: BeneficiaryUpdateManyWithoutUserNestedInput
    remittanceTransfers?: RemittanceTransferUpdateManyWithoutUserNestedInput
    otps?: OtpUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUncheckedUpdateOneWithoutUserNestedInput
    corporateProfile?: CorporateProfileUncheckedUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUncheckedUpdateManyWithoutUserNestedInput
    beneficiaries?: BeneficiaryUncheckedUpdateManyWithoutUserNestedInput
    remittanceTransfers?: RemittanceTransferUncheckedUpdateManyWithoutUserNestedInput
    otps?: OtpUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileCreateNestedOneWithoutUserInput
    corporateProfile?: CorporateProfileCreateNestedOneWithoutUserInput
    documents?: KycDocumentCreateNestedManyWithoutUserInput
    beneficiaries?: BeneficiaryCreateNestedManyWithoutUserInput
    remittanceTransfers?: RemittanceTransferCreateNestedManyWithoutUserInput
    otps?: OtpCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileUncheckedCreateNestedOneWithoutUserInput
    corporateProfile?: CorporateProfileUncheckedCreateNestedOneWithoutUserInput
    documents?: KycDocumentUncheckedCreateNestedManyWithoutUserInput
    beneficiaries?: BeneficiaryUncheckedCreateNestedManyWithoutUserInput
    remittanceTransfers?: RemittanceTransferUncheckedCreateNestedManyWithoutUserInput
    otps?: OtpUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUpdateOneWithoutUserNestedInput
    corporateProfile?: CorporateProfileUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUpdateManyWithoutUserNestedInput
    beneficiaries?: BeneficiaryUpdateManyWithoutUserNestedInput
    remittanceTransfers?: RemittanceTransferUpdateManyWithoutUserNestedInput
    otps?: OtpUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUncheckedUpdateOneWithoutUserNestedInput
    corporateProfile?: CorporateProfileUncheckedUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUncheckedUpdateManyWithoutUserNestedInput
    beneficiaries?: BeneficiaryUncheckedUpdateManyWithoutUserNestedInput
    remittanceTransfers?: RemittanceTransferUncheckedUpdateManyWithoutUserNestedInput
    otps?: OtpUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOtpsInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileCreateNestedOneWithoutUserInput
    corporateProfile?: CorporateProfileCreateNestedOneWithoutUserInput
    documents?: KycDocumentCreateNestedManyWithoutUserInput
    beneficiaries?: BeneficiaryCreateNestedManyWithoutUserInput
    remittanceTransfers?: RemittanceTransferCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOtpsInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileUncheckedCreateNestedOneWithoutUserInput
    corporateProfile?: CorporateProfileUncheckedCreateNestedOneWithoutUserInput
    documents?: KycDocumentUncheckedCreateNestedManyWithoutUserInput
    beneficiaries?: BeneficiaryUncheckedCreateNestedManyWithoutUserInput
    remittanceTransfers?: RemittanceTransferUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOtpsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
  }

  export type UserUpsertWithoutOtpsInput = {
    update: XOR<UserUpdateWithoutOtpsInput, UserUncheckedUpdateWithoutOtpsInput>
    create: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOtpsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOtpsInput, UserUncheckedUpdateWithoutOtpsInput>
  }

  export type UserUpdateWithoutOtpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUpdateOneWithoutUserNestedInput
    corporateProfile?: CorporateProfileUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUpdateManyWithoutUserNestedInput
    beneficiaries?: BeneficiaryUpdateManyWithoutUserNestedInput
    remittanceTransfers?: RemittanceTransferUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOtpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUncheckedUpdateOneWithoutUserNestedInput
    corporateProfile?: CorporateProfileUncheckedUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUncheckedUpdateManyWithoutUserNestedInput
    beneficiaries?: BeneficiaryUncheckedUpdateManyWithoutUserNestedInput
    remittanceTransfers?: RemittanceTransferUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutIndividualProfileInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    corporateProfile?: CorporateProfileCreateNestedOneWithoutUserInput
    documents?: KycDocumentCreateNestedManyWithoutUserInput
    beneficiaries?: BeneficiaryCreateNestedManyWithoutUserInput
    remittanceTransfers?: RemittanceTransferCreateNestedManyWithoutUserInput
    otps?: OtpCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIndividualProfileInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    corporateProfile?: CorporateProfileUncheckedCreateNestedOneWithoutUserInput
    documents?: KycDocumentUncheckedCreateNestedManyWithoutUserInput
    beneficiaries?: BeneficiaryUncheckedCreateNestedManyWithoutUserInput
    remittanceTransfers?: RemittanceTransferUncheckedCreateNestedManyWithoutUserInput
    otps?: OtpUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIndividualProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIndividualProfileInput, UserUncheckedCreateWithoutIndividualProfileInput>
  }

  export type UserUpsertWithoutIndividualProfileInput = {
    update: XOR<UserUpdateWithoutIndividualProfileInput, UserUncheckedUpdateWithoutIndividualProfileInput>
    create: XOR<UserCreateWithoutIndividualProfileInput, UserUncheckedCreateWithoutIndividualProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIndividualProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIndividualProfileInput, UserUncheckedUpdateWithoutIndividualProfileInput>
  }

  export type UserUpdateWithoutIndividualProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corporateProfile?: CorporateProfileUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUpdateManyWithoutUserNestedInput
    beneficiaries?: BeneficiaryUpdateManyWithoutUserNestedInput
    remittanceTransfers?: RemittanceTransferUpdateManyWithoutUserNestedInput
    otps?: OtpUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIndividualProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corporateProfile?: CorporateProfileUncheckedUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUncheckedUpdateManyWithoutUserNestedInput
    beneficiaries?: BeneficiaryUncheckedUpdateManyWithoutUserNestedInput
    remittanceTransfers?: RemittanceTransferUncheckedUpdateManyWithoutUserNestedInput
    otps?: OtpUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCorporateProfileInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileCreateNestedOneWithoutUserInput
    documents?: KycDocumentCreateNestedManyWithoutUserInput
    beneficiaries?: BeneficiaryCreateNestedManyWithoutUserInput
    remittanceTransfers?: RemittanceTransferCreateNestedManyWithoutUserInput
    otps?: OtpCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCorporateProfileInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileUncheckedCreateNestedOneWithoutUserInput
    documents?: KycDocumentUncheckedCreateNestedManyWithoutUserInput
    beneficiaries?: BeneficiaryUncheckedCreateNestedManyWithoutUserInput
    remittanceTransfers?: RemittanceTransferUncheckedCreateNestedManyWithoutUserInput
    otps?: OtpUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCorporateProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCorporateProfileInput, UserUncheckedCreateWithoutCorporateProfileInput>
  }

  export type UserUpsertWithoutCorporateProfileInput = {
    update: XOR<UserUpdateWithoutCorporateProfileInput, UserUncheckedUpdateWithoutCorporateProfileInput>
    create: XOR<UserCreateWithoutCorporateProfileInput, UserUncheckedCreateWithoutCorporateProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCorporateProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCorporateProfileInput, UserUncheckedUpdateWithoutCorporateProfileInput>
  }

  export type UserUpdateWithoutCorporateProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUpdateManyWithoutUserNestedInput
    beneficiaries?: BeneficiaryUpdateManyWithoutUserNestedInput
    remittanceTransfers?: RemittanceTransferUpdateManyWithoutUserNestedInput
    otps?: OtpUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCorporateProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUncheckedUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUncheckedUpdateManyWithoutUserNestedInput
    beneficiaries?: BeneficiaryUncheckedUpdateManyWithoutUserNestedInput
    remittanceTransfers?: RemittanceTransferUncheckedUpdateManyWithoutUserNestedInput
    otps?: OtpUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDocumentsInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileCreateNestedOneWithoutUserInput
    corporateProfile?: CorporateProfileCreateNestedOneWithoutUserInput
    beneficiaries?: BeneficiaryCreateNestedManyWithoutUserInput
    remittanceTransfers?: RemittanceTransferCreateNestedManyWithoutUserInput
    otps?: OtpCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDocumentsInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileUncheckedCreateNestedOneWithoutUserInput
    corporateProfile?: CorporateProfileUncheckedCreateNestedOneWithoutUserInput
    beneficiaries?: BeneficiaryUncheckedCreateNestedManyWithoutUserInput
    remittanceTransfers?: RemittanceTransferUncheckedCreateNestedManyWithoutUserInput
    otps?: OtpUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
  }

  export type UserUpsertWithoutDocumentsInput = {
    update: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUpdateOneWithoutUserNestedInput
    corporateProfile?: CorporateProfileUpdateOneWithoutUserNestedInput
    beneficiaries?: BeneficiaryUpdateManyWithoutUserNestedInput
    remittanceTransfers?: RemittanceTransferUpdateManyWithoutUserNestedInput
    otps?: OtpUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUncheckedUpdateOneWithoutUserNestedInput
    corporateProfile?: CorporateProfileUncheckedUpdateOneWithoutUserNestedInput
    beneficiaries?: BeneficiaryUncheckedUpdateManyWithoutUserNestedInput
    remittanceTransfers?: RemittanceTransferUncheckedUpdateManyWithoutUserNestedInput
    otps?: OtpUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBeneficiariesInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileCreateNestedOneWithoutUserInput
    corporateProfile?: CorporateProfileCreateNestedOneWithoutUserInput
    documents?: KycDocumentCreateNestedManyWithoutUserInput
    remittanceTransfers?: RemittanceTransferCreateNestedManyWithoutUserInput
    otps?: OtpCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBeneficiariesInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileUncheckedCreateNestedOneWithoutUserInput
    corporateProfile?: CorporateProfileUncheckedCreateNestedOneWithoutUserInput
    documents?: KycDocumentUncheckedCreateNestedManyWithoutUserInput
    remittanceTransfers?: RemittanceTransferUncheckedCreateNestedManyWithoutUserInput
    otps?: OtpUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBeneficiariesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBeneficiariesInput, UserUncheckedCreateWithoutBeneficiariesInput>
  }

  export type RemittanceTransferCreateWithoutBeneficiaryInput = {
    id?: string
    referenceCode: string
    status?: $Enums.RemittanceStatus
    currentStep?: number
    senderCountryIso2?: string | null
    payCurrency?: string | null
    payAmount?: Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: string | null
    recipientCountryIso2?: string | null
    receiveCurrency?: string | null
    receiveAmount?: Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: Decimal | DecimalJsLike | number | string | null
    feeAmount?: Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: Date | string | null
    sourceOfIncome?: string | null
    transferPurpose?: string | null
    relationshipToRecipient?: string | null
    complianceAccepted?: boolean
    payInMethod?: $Enums.PayInMethod | null
    payerPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRemittanceTransfersInput
  }

  export type RemittanceTransferUncheckedCreateWithoutBeneficiaryInput = {
    id?: string
    userId: string
    referenceCode: string
    status?: $Enums.RemittanceStatus
    currentStep?: number
    senderCountryIso2?: string | null
    payCurrency?: string | null
    payAmount?: Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: string | null
    recipientCountryIso2?: string | null
    receiveCurrency?: string | null
    receiveAmount?: Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: Decimal | DecimalJsLike | number | string | null
    feeAmount?: Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: Date | string | null
    sourceOfIncome?: string | null
    transferPurpose?: string | null
    relationshipToRecipient?: string | null
    complianceAccepted?: boolean
    payInMethod?: $Enums.PayInMethod | null
    payerPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemittanceTransferCreateOrConnectWithoutBeneficiaryInput = {
    where: RemittanceTransferWhereUniqueInput
    create: XOR<RemittanceTransferCreateWithoutBeneficiaryInput, RemittanceTransferUncheckedCreateWithoutBeneficiaryInput>
  }

  export type RemittanceTransferCreateManyBeneficiaryInputEnvelope = {
    data: RemittanceTransferCreateManyBeneficiaryInput | RemittanceTransferCreateManyBeneficiaryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBeneficiariesInput = {
    update: XOR<UserUpdateWithoutBeneficiariesInput, UserUncheckedUpdateWithoutBeneficiariesInput>
    create: XOR<UserCreateWithoutBeneficiariesInput, UserUncheckedCreateWithoutBeneficiariesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBeneficiariesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBeneficiariesInput, UserUncheckedUpdateWithoutBeneficiariesInput>
  }

  export type UserUpdateWithoutBeneficiariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUpdateOneWithoutUserNestedInput
    corporateProfile?: CorporateProfileUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUpdateManyWithoutUserNestedInput
    remittanceTransfers?: RemittanceTransferUpdateManyWithoutUserNestedInput
    otps?: OtpUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBeneficiariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUncheckedUpdateOneWithoutUserNestedInput
    corporateProfile?: CorporateProfileUncheckedUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUncheckedUpdateManyWithoutUserNestedInput
    remittanceTransfers?: RemittanceTransferUncheckedUpdateManyWithoutUserNestedInput
    otps?: OtpUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RemittanceTransferUpsertWithWhereUniqueWithoutBeneficiaryInput = {
    where: RemittanceTransferWhereUniqueInput
    update: XOR<RemittanceTransferUpdateWithoutBeneficiaryInput, RemittanceTransferUncheckedUpdateWithoutBeneficiaryInput>
    create: XOR<RemittanceTransferCreateWithoutBeneficiaryInput, RemittanceTransferUncheckedCreateWithoutBeneficiaryInput>
  }

  export type RemittanceTransferUpdateWithWhereUniqueWithoutBeneficiaryInput = {
    where: RemittanceTransferWhereUniqueInput
    data: XOR<RemittanceTransferUpdateWithoutBeneficiaryInput, RemittanceTransferUncheckedUpdateWithoutBeneficiaryInput>
  }

  export type RemittanceTransferUpdateManyWithWhereWithoutBeneficiaryInput = {
    where: RemittanceTransferScalarWhereInput
    data: XOR<RemittanceTransferUpdateManyMutationInput, RemittanceTransferUncheckedUpdateManyWithoutBeneficiaryInput>
  }

  export type UserCreateWithoutRemittanceTransfersInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileCreateNestedOneWithoutUserInput
    corporateProfile?: CorporateProfileCreateNestedOneWithoutUserInput
    documents?: KycDocumentCreateNestedManyWithoutUserInput
    beneficiaries?: BeneficiaryCreateNestedManyWithoutUserInput
    otps?: OtpCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRemittanceTransfersInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    name?: string | null
    image?: string | null
    googleId?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileUncheckedCreateNestedOneWithoutUserInput
    corporateProfile?: CorporateProfileUncheckedCreateNestedOneWithoutUserInput
    documents?: KycDocumentUncheckedCreateNestedManyWithoutUserInput
    beneficiaries?: BeneficiaryUncheckedCreateNestedManyWithoutUserInput
    otps?: OtpUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRemittanceTransfersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRemittanceTransfersInput, UserUncheckedCreateWithoutRemittanceTransfersInput>
  }

  export type BeneficiaryCreateWithoutRemittanceTransfersInput = {
    id?: string
    deliveryChannel: $Enums.DeliveryChannel
    fullName: string
    country?: string | null
    bankName?: string | null
    accountNumber?: string | null
    swiftBic?: string | null
    mobileMoneyProvider?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBeneficiariesInput
  }

  export type BeneficiaryUncheckedCreateWithoutRemittanceTransfersInput = {
    id?: string
    userId: string
    deliveryChannel: $Enums.DeliveryChannel
    fullName: string
    country?: string | null
    bankName?: string | null
    accountNumber?: string | null
    swiftBic?: string | null
    mobileMoneyProvider?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BeneficiaryCreateOrConnectWithoutRemittanceTransfersInput = {
    where: BeneficiaryWhereUniqueInput
    create: XOR<BeneficiaryCreateWithoutRemittanceTransfersInput, BeneficiaryUncheckedCreateWithoutRemittanceTransfersInput>
  }

  export type UserUpsertWithoutRemittanceTransfersInput = {
    update: XOR<UserUpdateWithoutRemittanceTransfersInput, UserUncheckedUpdateWithoutRemittanceTransfersInput>
    create: XOR<UserCreateWithoutRemittanceTransfersInput, UserUncheckedCreateWithoutRemittanceTransfersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRemittanceTransfersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRemittanceTransfersInput, UserUncheckedUpdateWithoutRemittanceTransfersInput>
  }

  export type UserUpdateWithoutRemittanceTransfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUpdateOneWithoutUserNestedInput
    corporateProfile?: CorporateProfileUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUpdateManyWithoutUserNestedInput
    beneficiaries?: BeneficiaryUpdateManyWithoutUserNestedInput
    otps?: OtpUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRemittanceTransfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUncheckedUpdateOneWithoutUserNestedInput
    corporateProfile?: CorporateProfileUncheckedUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUncheckedUpdateManyWithoutUserNestedInput
    beneficiaries?: BeneficiaryUncheckedUpdateManyWithoutUserNestedInput
    otps?: OtpUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BeneficiaryUpsertWithoutRemittanceTransfersInput = {
    update: XOR<BeneficiaryUpdateWithoutRemittanceTransfersInput, BeneficiaryUncheckedUpdateWithoutRemittanceTransfersInput>
    create: XOR<BeneficiaryCreateWithoutRemittanceTransfersInput, BeneficiaryUncheckedCreateWithoutRemittanceTransfersInput>
    where?: BeneficiaryWhereInput
  }

  export type BeneficiaryUpdateToOneWithWhereWithoutRemittanceTransfersInput = {
    where?: BeneficiaryWhereInput
    data: XOR<BeneficiaryUpdateWithoutRemittanceTransfersInput, BeneficiaryUncheckedUpdateWithoutRemittanceTransfersInput>
  }

  export type BeneficiaryUpdateWithoutRemittanceTransfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    fullName?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    swiftBic?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyProvider?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBeneficiariesNestedInput
  }

  export type BeneficiaryUncheckedUpdateWithoutRemittanceTransfersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    fullName?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    swiftBic?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyProvider?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycDocumentCreateManyUserInput = {
    id?: string
    documentType: $Enums.DocumentType
    fileName: string
    fileUrl: string
    fileSize?: number | null
    mimeType?: string | null
    status?: $Enums.DocumentStatus
    uploadedAt?: Date | string
  }

  export type BeneficiaryCreateManyUserInput = {
    id?: string
    deliveryChannel: $Enums.DeliveryChannel
    fullName: string
    country?: string | null
    bankName?: string | null
    accountNumber?: string | null
    swiftBic?: string | null
    mobileMoneyProvider?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemittanceTransferCreateManyUserInput = {
    id?: string
    referenceCode: string
    status?: $Enums.RemittanceStatus
    currentStep?: number
    senderCountryIso2?: string | null
    payCurrency?: string | null
    payAmount?: Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: string | null
    recipientCountryIso2?: string | null
    receiveCurrency?: string | null
    receiveAmount?: Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: Decimal | DecimalJsLike | number | string | null
    feeAmount?: Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: Date | string | null
    beneficiaryId?: string | null
    sourceOfIncome?: string | null
    transferPurpose?: string | null
    relationshipToRecipient?: string | null
    complianceAccepted?: boolean
    payInMethod?: $Enums.PayInMethod | null
    payerPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtpCreateManyUserInput = {
    id?: string
    type: $Enums.OtpType
    code: string
    expiresAt: Date | string
    verified?: boolean
    createdAt?: Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type KycDocumentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycDocumentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KycDocumentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileName?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BeneficiaryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    fullName?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    swiftBic?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyProvider?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    remittanceTransfers?: RemittanceTransferUpdateManyWithoutBeneficiaryNestedInput
  }

  export type BeneficiaryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    fullName?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    swiftBic?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyProvider?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    remittanceTransfers?: RemittanceTransferUncheckedUpdateManyWithoutBeneficiaryNestedInput
  }

  export type BeneficiaryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryChannel?: EnumDeliveryChannelFieldUpdateOperationsInput | $Enums.DeliveryChannel
    fullName?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    swiftBic?: NullableStringFieldUpdateOperationsInput | string | null
    mobileMoneyProvider?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemittanceTransferUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: EnumRemittanceStatusFieldUpdateOperationsInput | $Enums.RemittanceStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    senderCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    payCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    payAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: NullableStringFieldUpdateOperationsInput | string | null
    recipientCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    receiveCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    receiveAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    feeAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceOfIncome?: NullableStringFieldUpdateOperationsInput | string | null
    transferPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipToRecipient?: NullableStringFieldUpdateOperationsInput | string | null
    complianceAccepted?: BoolFieldUpdateOperationsInput | boolean
    payInMethod?: NullableEnumPayInMethodFieldUpdateOperationsInput | $Enums.PayInMethod | null
    payerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    beneficiary?: BeneficiaryUpdateOneWithoutRemittanceTransfersNestedInput
  }

  export type RemittanceTransferUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: EnumRemittanceStatusFieldUpdateOperationsInput | $Enums.RemittanceStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    senderCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    payCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    payAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: NullableStringFieldUpdateOperationsInput | string | null
    recipientCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    receiveCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    receiveAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    feeAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    beneficiaryId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceOfIncome?: NullableStringFieldUpdateOperationsInput | string | null
    transferPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipToRecipient?: NullableStringFieldUpdateOperationsInput | string | null
    complianceAccepted?: BoolFieldUpdateOperationsInput | boolean
    payInMethod?: NullableEnumPayInMethodFieldUpdateOperationsInput | $Enums.PayInMethod | null
    payerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemittanceTransferUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: EnumRemittanceStatusFieldUpdateOperationsInput | $Enums.RemittanceStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    senderCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    payCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    payAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: NullableStringFieldUpdateOperationsInput | string | null
    recipientCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    receiveCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    receiveAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    feeAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    beneficiaryId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceOfIncome?: NullableStringFieldUpdateOperationsInput | string | null
    transferPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipToRecipient?: NullableStringFieldUpdateOperationsInput | string | null
    complianceAccepted?: BoolFieldUpdateOperationsInput | boolean
    payInMethod?: NullableEnumPayInMethodFieldUpdateOperationsInput | $Enums.PayInMethod | null
    payerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumOtpTypeFieldUpdateOperationsInput | $Enums.OtpType
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumOtpTypeFieldUpdateOperationsInput | $Enums.OtpType
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumOtpTypeFieldUpdateOperationsInput | $Enums.OtpType
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemittanceTransferCreateManyBeneficiaryInput = {
    id?: string
    userId: string
    referenceCode: string
    status?: $Enums.RemittanceStatus
    currentStep?: number
    senderCountryIso2?: string | null
    payCurrency?: string | null
    payAmount?: Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: string | null
    recipientCountryIso2?: string | null
    receiveCurrency?: string | null
    receiveAmount?: Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: Decimal | DecimalJsLike | number | string | null
    feeAmount?: Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: Date | string | null
    sourceOfIncome?: string | null
    transferPurpose?: string | null
    relationshipToRecipient?: string | null
    complianceAccepted?: boolean
    payInMethod?: $Enums.PayInMethod | null
    payerPhone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RemittanceTransferUpdateWithoutBeneficiaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: EnumRemittanceStatusFieldUpdateOperationsInput | $Enums.RemittanceStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    senderCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    payCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    payAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: NullableStringFieldUpdateOperationsInput | string | null
    recipientCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    receiveCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    receiveAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    feeAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceOfIncome?: NullableStringFieldUpdateOperationsInput | string | null
    transferPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipToRecipient?: NullableStringFieldUpdateOperationsInput | string | null
    complianceAccepted?: BoolFieldUpdateOperationsInput | boolean
    payInMethod?: NullableEnumPayInMethodFieldUpdateOperationsInput | $Enums.PayInMethod | null
    payerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRemittanceTransfersNestedInput
  }

  export type RemittanceTransferUncheckedUpdateWithoutBeneficiaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: EnumRemittanceStatusFieldUpdateOperationsInput | $Enums.RemittanceStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    senderCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    payCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    payAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: NullableStringFieldUpdateOperationsInput | string | null
    recipientCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    receiveCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    receiveAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    feeAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceOfIncome?: NullableStringFieldUpdateOperationsInput | string | null
    transferPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipToRecipient?: NullableStringFieldUpdateOperationsInput | string | null
    complianceAccepted?: BoolFieldUpdateOperationsInput | boolean
    payInMethod?: NullableEnumPayInMethodFieldUpdateOperationsInput | $Enums.PayInMethod | null
    payerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RemittanceTransferUncheckedUpdateManyWithoutBeneficiaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    referenceCode?: StringFieldUpdateOperationsInput | string
    status?: EnumRemittanceStatusFieldUpdateOperationsInput | $Enums.RemittanceStatus
    currentStep?: IntFieldUpdateOperationsInput | number
    senderCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    payCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    payAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    recipientCountryLabel?: NullableStringFieldUpdateOperationsInput | string | null
    recipientCountryIso2?: NullableStringFieldUpdateOperationsInput | string | null
    receiveCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    receiveAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fxRateSnapshot?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    feeAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quoteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceOfIncome?: NullableStringFieldUpdateOperationsInput | string | null
    transferPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipToRecipient?: NullableStringFieldUpdateOperationsInput | string | null
    complianceAccepted?: BoolFieldUpdateOperationsInput | boolean
    payInMethod?: NullableEnumPayInMethodFieldUpdateOperationsInput | $Enums.PayInMethod | null
    payerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}