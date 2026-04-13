
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
    Otp: 'Otp',
    IndividualProfile: 'IndividualProfile',
    CorporateProfile: 'CorporateProfile',
    KycDocument: 'KycDocument',
    Beneficiary: 'Beneficiary'
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
      modelProps: "user" | "otp" | "individualProfile" | "corporateProfile" | "kycDocument" | "beneficiary"
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
    otp?: OtpOmit
    individualProfile?: IndividualProfileOmit
    corporateProfile?: CorporateProfileOmit
    kycDocument?: KycDocumentOmit
    beneficiary?: BeneficiaryOmit
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
    otps: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | UserCountOutputTypeCountDocumentsArgs
    beneficiaries?: boolean | UserCountOutputTypeCountBeneficiariesArgs
    otps?: boolean | UserCountOutputTypeCountOtpsArgs
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
  export type UserCountOutputTypeCountOtpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
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
    otps?: boolean | User$otpsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    country?: boolean
    passwordHash?: boolean
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
    role?: boolean
    kycStatus?: boolean
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "country" | "passwordHash" | "role" | "kycStatus" | "emailVerified" | "phoneVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    individualProfile?: boolean | User$individualProfileArgs<ExtArgs>
    corporateProfile?: boolean | User$corporateProfileArgs<ExtArgs>
    documents?: boolean | User$documentsArgs<ExtArgs>
    beneficiaries?: boolean | User$beneficiariesArgs<ExtArgs>
    otps?: boolean | User$otpsArgs<ExtArgs>
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
      otps: Prisma.$OtpPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      phone: string | null
      country: string | null
      passwordHash: string | null
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
    otps<T extends User$otpsArgs<ExtArgs> = {}>(args?: Subset<T, User$otpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    role: 'role',
    kycStatus: 'kycStatus',
    emailVerified: 'emailVerified',
    phoneVerified: 'phoneVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
    otps?: OtpListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
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
    otps?: OtpOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    country?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
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
    otps?: OtpListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
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
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    kycStatus?: EnumKycStatusWithAggregatesFilter<"User"> | $Enums.KycStatus
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    phoneVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
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

  export type UserCreateInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
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
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
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
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
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
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
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
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
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
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type OtpListRelationFilter = {
    every?: OtpWhereInput
    some?: OtpWhereInput
    none?: OtpWhereInput
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

  export type OtpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    passwordHash?: SortOrder
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

  export type EnumOtpTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OtpType | EnumOtpTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OtpType[] | ListEnumOtpTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OtpType[] | ListEnumOtpTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOtpTypeFilter<$PrismaModel> | $Enums.OtpType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
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

  export type OtpCreateNestedManyWithoutUserInput = {
    create?: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput> | OtpCreateWithoutUserInput[] | OtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpCreateOrConnectWithoutUserInput | OtpCreateOrConnectWithoutUserInput[]
    createMany?: OtpCreateManyUserInputEnvelope
    connect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
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

  export type OtpUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput> | OtpCreateWithoutUserInput[] | OtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpCreateOrConnectWithoutUserInput | OtpCreateOrConnectWithoutUserInput[]
    createMany?: OtpCreateManyUserInputEnvelope
    connect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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
  }

  export type BeneficiaryCreateOrConnectWithoutUserInput = {
    where: BeneficiaryWhereUniqueInput
    create: XOR<BeneficiaryCreateWithoutUserInput, BeneficiaryUncheckedCreateWithoutUserInput>
  }

  export type BeneficiaryCreateManyUserInputEnvelope = {
    data: BeneficiaryCreateManyUserInput | BeneficiaryCreateManyUserInput[]
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

  export type UserCreateWithoutOtpsInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
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
  }

  export type UserUncheckedCreateWithoutOtpsInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
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
  }

  export type UserUncheckedUpdateWithoutOtpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
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
  }

  export type UserCreateWithoutIndividualProfileInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    corporateProfile?: CorporateProfileCreateNestedOneWithoutUserInput
    documents?: KycDocumentCreateNestedManyWithoutUserInput
    beneficiaries?: BeneficiaryCreateNestedManyWithoutUserInput
    otps?: OtpCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIndividualProfileInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    corporateProfile?: CorporateProfileUncheckedCreateNestedOneWithoutUserInput
    documents?: KycDocumentUncheckedCreateNestedManyWithoutUserInput
    beneficiaries?: BeneficiaryUncheckedCreateNestedManyWithoutUserInput
    otps?: OtpUncheckedCreateNestedManyWithoutUserInput
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
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corporateProfile?: CorporateProfileUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUpdateManyWithoutUserNestedInput
    beneficiaries?: BeneficiaryUpdateManyWithoutUserNestedInput
    otps?: OtpUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIndividualProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    corporateProfile?: CorporateProfileUncheckedUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUncheckedUpdateManyWithoutUserNestedInput
    beneficiaries?: BeneficiaryUncheckedUpdateManyWithoutUserNestedInput
    otps?: OtpUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCorporateProfileInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileCreateNestedOneWithoutUserInput
    documents?: KycDocumentCreateNestedManyWithoutUserInput
    beneficiaries?: BeneficiaryCreateNestedManyWithoutUserInput
    otps?: OtpCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCorporateProfileInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileUncheckedCreateNestedOneWithoutUserInput
    documents?: KycDocumentUncheckedCreateNestedManyWithoutUserInput
    beneficiaries?: BeneficiaryUncheckedCreateNestedManyWithoutUserInput
    otps?: OtpUncheckedCreateNestedManyWithoutUserInput
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
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUpdateManyWithoutUserNestedInput
    beneficiaries?: BeneficiaryUpdateManyWithoutUserNestedInput
    otps?: OtpUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCorporateProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUncheckedUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUncheckedUpdateManyWithoutUserNestedInput
    beneficiaries?: BeneficiaryUncheckedUpdateManyWithoutUserNestedInput
    otps?: OtpUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDocumentsInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileCreateNestedOneWithoutUserInput
    corporateProfile?: CorporateProfileCreateNestedOneWithoutUserInput
    beneficiaries?: BeneficiaryCreateNestedManyWithoutUserInput
    otps?: OtpCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDocumentsInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileUncheckedCreateNestedOneWithoutUserInput
    corporateProfile?: CorporateProfileUncheckedCreateNestedOneWithoutUserInput
    beneficiaries?: BeneficiaryUncheckedCreateNestedManyWithoutUserInput
    otps?: OtpUncheckedCreateNestedManyWithoutUserInput
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
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUpdateOneWithoutUserNestedInput
    corporateProfile?: CorporateProfileUpdateOneWithoutUserNestedInput
    beneficiaries?: BeneficiaryUpdateManyWithoutUserNestedInput
    otps?: OtpUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUncheckedUpdateOneWithoutUserNestedInput
    corporateProfile?: CorporateProfileUncheckedUpdateOneWithoutUserNestedInput
    beneficiaries?: BeneficiaryUncheckedUpdateManyWithoutUserNestedInput
    otps?: OtpUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBeneficiariesInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileCreateNestedOneWithoutUserInput
    corporateProfile?: CorporateProfileCreateNestedOneWithoutUserInput
    documents?: KycDocumentCreateNestedManyWithoutUserInput
    otps?: OtpCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBeneficiariesInput = {
    id?: string
    email?: string | null
    phone?: string | null
    country?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    kycStatus?: $Enums.KycStatus
    emailVerified?: boolean
    phoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    individualProfile?: IndividualProfileUncheckedCreateNestedOneWithoutUserInput
    corporateProfile?: CorporateProfileUncheckedCreateNestedOneWithoutUserInput
    documents?: KycDocumentUncheckedCreateNestedManyWithoutUserInput
    otps?: OtpUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBeneficiariesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBeneficiariesInput, UserUncheckedCreateWithoutBeneficiariesInput>
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
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUpdateOneWithoutUserNestedInput
    corporateProfile?: CorporateProfileUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUpdateManyWithoutUserNestedInput
    otps?: OtpUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBeneficiariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    individualProfile?: IndividualProfileUncheckedUpdateOneWithoutUserNestedInput
    corporateProfile?: CorporateProfileUncheckedUpdateOneWithoutUserNestedInput
    documents?: KycDocumentUncheckedUpdateManyWithoutUserNestedInput
    otps?: OtpUncheckedUpdateManyWithoutUserNestedInput
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

  export type OtpCreateManyUserInput = {
    id?: string
    type: $Enums.OtpType
    code: string
    expiresAt: Date | string
    verified?: boolean
    createdAt?: Date | string
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