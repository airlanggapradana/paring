
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
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model NurseProfile
 * 
 */
export type NurseProfile = $Result.DefaultSelection<Prisma.$NurseProfilePayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model CareLog
 * 
 */
export type CareLog = $Result.DefaultSelection<Prisma.$CareLogPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PaymentStatus: {
  PENDING: 'PENDING',
  SETTLEMENT: 'SETTLEMENT',
  EXPIRE: 'EXPIRE',
  CANCEL: 'CANCEL',
  DENY: 'DENY',
  REFUND: 'REFUND'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const Role: {
  ADMIN: 'ADMIN',
  FAMILY: 'FAMILY',
  NURSE: 'NURSE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ServiceType: {
  VISIT: 'VISIT',
  LIVE_IN: 'LIVE_IN',
  LIVE_OUT: 'LIVE_OUT'
};

export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType]


export const AppointmentStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  ONGOING: 'ONGOING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const ServiceName: {
  MEDIS: 'MEDIS',
  NON_MEDIS: 'NON_MEDIS'
};

export type ServiceName = (typeof ServiceName)[keyof typeof ServiceName]

}

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ServiceType = $Enums.ServiceType

export const ServiceType: typeof $Enums.ServiceType

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type ServiceName = $Enums.ServiceName

export const ServiceName: typeof $Enums.ServiceName

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
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nurseProfile`: Exposes CRUD operations for the **NurseProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NurseProfiles
    * const nurseProfiles = await prisma.nurseProfile.findMany()
    * ```
    */
  get nurseProfile(): Prisma.NurseProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.careLog`: Exposes CRUD operations for the **CareLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CareLogs
    * const careLogs = await prisma.careLog.findMany()
    * ```
    */
  get careLog(): Prisma.CareLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
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
    Patient: 'Patient',
    NurseProfile: 'NurseProfile',
    Appointment: 'Appointment',
    Payment: 'Payment',
    CareLog: 'CareLog',
    ActivityLog: 'ActivityLog'
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
      modelProps: "user" | "patient" | "nurseProfile" | "appointment" | "payment" | "careLog" | "activityLog"
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
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      NurseProfile: {
        payload: Prisma.$NurseProfilePayload<ExtArgs>
        fields: Prisma.NurseProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NurseProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NurseProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseProfilePayload>
          }
          findFirst: {
            args: Prisma.NurseProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NurseProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseProfilePayload>
          }
          findMany: {
            args: Prisma.NurseProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseProfilePayload>[]
          }
          create: {
            args: Prisma.NurseProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseProfilePayload>
          }
          createMany: {
            args: Prisma.NurseProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NurseProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseProfilePayload>[]
          }
          delete: {
            args: Prisma.NurseProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseProfilePayload>
          }
          update: {
            args: Prisma.NurseProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseProfilePayload>
          }
          deleteMany: {
            args: Prisma.NurseProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NurseProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NurseProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseProfilePayload>[]
          }
          upsert: {
            args: Prisma.NurseProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NurseProfilePayload>
          }
          aggregate: {
            args: Prisma.NurseProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNurseProfile>
          }
          groupBy: {
            args: Prisma.NurseProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<NurseProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.NurseProfileCountArgs<ExtArgs>
            result: $Utils.Optional<NurseProfileCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      CareLog: {
        payload: Prisma.$CareLogPayload<ExtArgs>
        fields: Prisma.CareLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareLogPayload>
          }
          findFirst: {
            args: Prisma.CareLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareLogPayload>
          }
          findMany: {
            args: Prisma.CareLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareLogPayload>[]
          }
          create: {
            args: Prisma.CareLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareLogPayload>
          }
          createMany: {
            args: Prisma.CareLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CareLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareLogPayload>[]
          }
          delete: {
            args: Prisma.CareLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareLogPayload>
          }
          update: {
            args: Prisma.CareLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareLogPayload>
          }
          deleteMany: {
            args: Prisma.CareLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CareLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CareLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareLogPayload>[]
          }
          upsert: {
            args: Prisma.CareLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareLogPayload>
          }
          aggregate: {
            args: Prisma.CareLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareLog>
          }
          groupBy: {
            args: Prisma.CareLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CareLogCountArgs<ExtArgs>
            result: $Utils.Optional<CareLogCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
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
    patient?: PatientOmit
    nurseProfile?: NurseProfileOmit
    appointment?: AppointmentOmit
    payment?: PaymentOmit
    careLog?: CareLogOmit
    activityLog?: ActivityLogOmit
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
    patients: number
    careLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | UserCountOutputTypeCountPatientsArgs
    careLogs?: boolean | UserCountOutputTypeCountCareLogsArgs
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
  export type UserCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCareLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareLogWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    appointments: number
    medicalLogs: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | PatientCountOutputTypeCountAppointmentsArgs
    medicalLogs?: boolean | PatientCountOutputTypeCountMedicalLogsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountMedicalLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareLogWhereInput
  }


  /**
   * Count Type NurseProfileCountOutputType
   */

  export type NurseProfileCountOutputType = {
    appointments: number
  }

  export type NurseProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | NurseProfileCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * NurseProfileCountOutputType without action
   */
  export type NurseProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseProfileCountOutputType
     */
    select?: NurseProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NurseProfileCountOutputType without action
   */
  export type NurseProfileCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type AppointmentCountOutputType
   */

  export type AppointmentCountOutputType = {
    careLogs: number
    payments: number
  }

  export type AppointmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careLogs?: boolean | AppointmentCountOutputTypeCountCareLogsArgs
    payments?: boolean | AppointmentCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCountOutputType
     */
    select?: AppointmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountCareLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareLogWhereInput
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type CareLogCountOutputType
   */

  export type CareLogCountOutputType = {
    activityLog: number
  }

  export type CareLogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityLog?: boolean | CareLogCountOutputTypeCountActivityLogArgs
  }

  // Custom InputTypes
  /**
   * CareLogCountOutputType without action
   */
  export type CareLogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareLogCountOutputType
     */
    select?: CareLogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CareLogCountOutputType without action
   */
  export type CareLogCountOutputTypeCountActivityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
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
    passwordHash: string | null
    fullName: string | null
    phoneNumber: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    fullName: string | null
    phoneNumber: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    fullName: number
    phoneNumber: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    fullName?: true
    phoneNumber?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    fullName?: true
    phoneNumber?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    fullName?: true
    phoneNumber?: true
    role?: true
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
    email: string
    passwordHash: string
    fullName: string
    phoneNumber: string
    role: $Enums.Role
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
    passwordHash?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patients?: boolean | User$patientsArgs<ExtArgs>
    nurseProfile?: boolean | User$nurseProfileArgs<ExtArgs>
    careLogs?: boolean | User$careLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "fullName" | "phoneNumber" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | User$patientsArgs<ExtArgs>
    nurseProfile?: boolean | User$nurseProfileArgs<ExtArgs>
    careLogs?: boolean | User$careLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      patients: Prisma.$PatientPayload<ExtArgs>[]
      nurseProfile: Prisma.$NurseProfilePayload<ExtArgs> | null
      careLogs: Prisma.$CareLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      fullName: string
      phoneNumber: string
      role: $Enums.Role
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
    patients<T extends User$patientsArgs<ExtArgs> = {}>(args?: Subset<T, User$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nurseProfile<T extends User$nurseProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$nurseProfileArgs<ExtArgs>>): Prisma__NurseProfileClient<$Result.GetResult<Prisma.$NurseProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    careLogs<T extends User$careLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$careLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
   * User.patients
   */
  export type User$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * User.nurseProfile
   */
  export type User$nurseProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseProfile
     */
    select?: NurseProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseProfile
     */
    omit?: NurseProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseProfileInclude<ExtArgs> | null
    where?: NurseProfileWhereInput
  }

  /**
   * User.careLogs
   */
  export type User$careLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareLog
     */
    select?: CareLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareLog
     */
    omit?: CareLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareLogInclude<ExtArgs> | null
    where?: CareLogWhereInput
    orderBy?: CareLogOrderByWithRelationInput | CareLogOrderByWithRelationInput[]
    cursor?: CareLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CareLogScalarFieldEnum | CareLogScalarFieldEnum[]
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
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    weight: number | null
    height: number | null
  }

  export type PatientSumAggregateOutputType = {
    weight: number | null
    height: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    familyId: string | null
    name: string | null
    dateOfBirth: Date | null
    weight: number | null
    height: number | null
    medicalHistory: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    familyId: string | null
    name: string | null
    dateOfBirth: Date | null
    weight: number | null
    height: number | null
    medicalHistory: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    familyId: number
    name: number
    dateOfBirth: number
    weight: number
    height: number
    medicalHistory: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    weight?: true
    height?: true
  }

  export type PatientSumAggregateInputType = {
    weight?: true
    height?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    familyId?: true
    name?: true
    dateOfBirth?: true
    weight?: true
    height?: true
    medicalHistory?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    familyId?: true
    name?: true
    dateOfBirth?: true
    weight?: true
    height?: true
    medicalHistory?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    familyId?: true
    name?: true
    dateOfBirth?: true
    weight?: true
    height?: true
    medicalHistory?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    familyId: string
    name: string
    dateOfBirth: Date
    weight: number | null
    height: number | null
    medicalHistory: string | null
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyId?: boolean
    name?: boolean
    dateOfBirth?: boolean
    weight?: boolean
    height?: boolean
    medicalHistory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    family?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    medicalLogs?: boolean | Patient$medicalLogsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyId?: boolean
    name?: boolean
    dateOfBirth?: boolean
    weight?: boolean
    height?: boolean
    medicalHistory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    family?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyId?: boolean
    name?: boolean
    dateOfBirth?: boolean
    weight?: boolean
    height?: boolean
    medicalHistory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    family?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    familyId?: boolean
    name?: boolean
    dateOfBirth?: boolean
    weight?: boolean
    height?: boolean
    medicalHistory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "familyId" | "name" | "dateOfBirth" | "weight" | "height" | "medicalHistory" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    medicalLogs?: boolean | Patient$medicalLogsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      family: Prisma.$UserPayload<ExtArgs>
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      medicalLogs: Prisma.$CareLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      familyId: string
      name: string
      dateOfBirth: Date
      weight: number | null
      height: number | null
      medicalHistory: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
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
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    family<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointments<T extends Patient$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicalLogs<T extends Patient$medicalLogsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$medicalLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly familyId: FieldRef<"Patient", 'String'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly dateOfBirth: FieldRef<"Patient", 'DateTime'>
    readonly weight: FieldRef<"Patient", 'Float'>
    readonly height: FieldRef<"Patient", 'Float'>
    readonly medicalHistory: FieldRef<"Patient", 'String'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.appointments
   */
  export type Patient$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Patient.medicalLogs
   */
  export type Patient$medicalLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareLog
     */
    select?: CareLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareLog
     */
    omit?: CareLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareLogInclude<ExtArgs> | null
    where?: CareLogWhereInput
    orderBy?: CareLogOrderByWithRelationInput | CareLogOrderByWithRelationInput[]
    cursor?: CareLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CareLogScalarFieldEnum | CareLogScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model NurseProfile
   */

  export type AggregateNurseProfile = {
    _count: NurseProfileCountAggregateOutputType | null
    _avg: NurseProfileAvgAggregateOutputType | null
    _sum: NurseProfileSumAggregateOutputType | null
    _min: NurseProfileMinAggregateOutputType | null
    _max: NurseProfileMaxAggregateOutputType | null
  }

  export type NurseProfileAvgAggregateOutputType = {
    experienceYears: number | null
    rating: number | null
  }

  export type NurseProfileSumAggregateOutputType = {
    experienceYears: number | null
    rating: number | null
  }

  export type NurseProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    specialization: string | null
    experienceYears: number | null
    rating: number | null
    isVerified: boolean | null
  }

  export type NurseProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    specialization: string | null
    experienceYears: number | null
    rating: number | null
    isVerified: boolean | null
  }

  export type NurseProfileCountAggregateOutputType = {
    id: number
    userId: number
    specialization: number
    experienceYears: number
    rating: number
    isVerified: number
    _all: number
  }


  export type NurseProfileAvgAggregateInputType = {
    experienceYears?: true
    rating?: true
  }

  export type NurseProfileSumAggregateInputType = {
    experienceYears?: true
    rating?: true
  }

  export type NurseProfileMinAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    experienceYears?: true
    rating?: true
    isVerified?: true
  }

  export type NurseProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    experienceYears?: true
    rating?: true
    isVerified?: true
  }

  export type NurseProfileCountAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    experienceYears?: true
    rating?: true
    isVerified?: true
    _all?: true
  }

  export type NurseProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NurseProfile to aggregate.
     */
    where?: NurseProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NurseProfiles to fetch.
     */
    orderBy?: NurseProfileOrderByWithRelationInput | NurseProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NurseProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NurseProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NurseProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NurseProfiles
    **/
    _count?: true | NurseProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NurseProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NurseProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NurseProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NurseProfileMaxAggregateInputType
  }

  export type GetNurseProfileAggregateType<T extends NurseProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateNurseProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNurseProfile[P]>
      : GetScalarType<T[P], AggregateNurseProfile[P]>
  }




  export type NurseProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NurseProfileWhereInput
    orderBy?: NurseProfileOrderByWithAggregationInput | NurseProfileOrderByWithAggregationInput[]
    by: NurseProfileScalarFieldEnum[] | NurseProfileScalarFieldEnum
    having?: NurseProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NurseProfileCountAggregateInputType | true
    _avg?: NurseProfileAvgAggregateInputType
    _sum?: NurseProfileSumAggregateInputType
    _min?: NurseProfileMinAggregateInputType
    _max?: NurseProfileMaxAggregateInputType
  }

  export type NurseProfileGroupByOutputType = {
    id: string
    userId: string
    specialization: string
    experienceYears: number
    rating: number
    isVerified: boolean
    _count: NurseProfileCountAggregateOutputType | null
    _avg: NurseProfileAvgAggregateOutputType | null
    _sum: NurseProfileSumAggregateOutputType | null
    _min: NurseProfileMinAggregateOutputType | null
    _max: NurseProfileMaxAggregateOutputType | null
  }

  type GetNurseProfileGroupByPayload<T extends NurseProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NurseProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NurseProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NurseProfileGroupByOutputType[P]>
            : GetScalarType<T[P], NurseProfileGroupByOutputType[P]>
        }
      >
    >


  export type NurseProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    experienceYears?: boolean
    rating?: boolean
    isVerified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | NurseProfile$appointmentsArgs<ExtArgs>
    _count?: boolean | NurseProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nurseProfile"]>

  export type NurseProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    experienceYears?: boolean
    rating?: boolean
    isVerified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nurseProfile"]>

  export type NurseProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    experienceYears?: boolean
    rating?: boolean
    isVerified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nurseProfile"]>

  export type NurseProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    specialization?: boolean
    experienceYears?: boolean
    rating?: boolean
    isVerified?: boolean
  }

  export type NurseProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "specialization" | "experienceYears" | "rating" | "isVerified", ExtArgs["result"]["nurseProfile"]>
  export type NurseProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | NurseProfile$appointmentsArgs<ExtArgs>
    _count?: boolean | NurseProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NurseProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NurseProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NurseProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NurseProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      specialization: string
      experienceYears: number
      rating: number
      isVerified: boolean
    }, ExtArgs["result"]["nurseProfile"]>
    composites: {}
  }

  type NurseProfileGetPayload<S extends boolean | null | undefined | NurseProfileDefaultArgs> = $Result.GetResult<Prisma.$NurseProfilePayload, S>

  type NurseProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NurseProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NurseProfileCountAggregateInputType | true
    }

  export interface NurseProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NurseProfile'], meta: { name: 'NurseProfile' } }
    /**
     * Find zero or one NurseProfile that matches the filter.
     * @param {NurseProfileFindUniqueArgs} args - Arguments to find a NurseProfile
     * @example
     * // Get one NurseProfile
     * const nurseProfile = await prisma.nurseProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NurseProfileFindUniqueArgs>(args: SelectSubset<T, NurseProfileFindUniqueArgs<ExtArgs>>): Prisma__NurseProfileClient<$Result.GetResult<Prisma.$NurseProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NurseProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NurseProfileFindUniqueOrThrowArgs} args - Arguments to find a NurseProfile
     * @example
     * // Get one NurseProfile
     * const nurseProfile = await prisma.nurseProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NurseProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, NurseProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NurseProfileClient<$Result.GetResult<Prisma.$NurseProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NurseProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseProfileFindFirstArgs} args - Arguments to find a NurseProfile
     * @example
     * // Get one NurseProfile
     * const nurseProfile = await prisma.nurseProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NurseProfileFindFirstArgs>(args?: SelectSubset<T, NurseProfileFindFirstArgs<ExtArgs>>): Prisma__NurseProfileClient<$Result.GetResult<Prisma.$NurseProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NurseProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseProfileFindFirstOrThrowArgs} args - Arguments to find a NurseProfile
     * @example
     * // Get one NurseProfile
     * const nurseProfile = await prisma.nurseProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NurseProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, NurseProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__NurseProfileClient<$Result.GetResult<Prisma.$NurseProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NurseProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NurseProfiles
     * const nurseProfiles = await prisma.nurseProfile.findMany()
     * 
     * // Get first 10 NurseProfiles
     * const nurseProfiles = await prisma.nurseProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nurseProfileWithIdOnly = await prisma.nurseProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NurseProfileFindManyArgs>(args?: SelectSubset<T, NurseProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NurseProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NurseProfile.
     * @param {NurseProfileCreateArgs} args - Arguments to create a NurseProfile.
     * @example
     * // Create one NurseProfile
     * const NurseProfile = await prisma.nurseProfile.create({
     *   data: {
     *     // ... data to create a NurseProfile
     *   }
     * })
     * 
     */
    create<T extends NurseProfileCreateArgs>(args: SelectSubset<T, NurseProfileCreateArgs<ExtArgs>>): Prisma__NurseProfileClient<$Result.GetResult<Prisma.$NurseProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NurseProfiles.
     * @param {NurseProfileCreateManyArgs} args - Arguments to create many NurseProfiles.
     * @example
     * // Create many NurseProfiles
     * const nurseProfile = await prisma.nurseProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NurseProfileCreateManyArgs>(args?: SelectSubset<T, NurseProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NurseProfiles and returns the data saved in the database.
     * @param {NurseProfileCreateManyAndReturnArgs} args - Arguments to create many NurseProfiles.
     * @example
     * // Create many NurseProfiles
     * const nurseProfile = await prisma.nurseProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NurseProfiles and only return the `id`
     * const nurseProfileWithIdOnly = await prisma.nurseProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NurseProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, NurseProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NurseProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NurseProfile.
     * @param {NurseProfileDeleteArgs} args - Arguments to delete one NurseProfile.
     * @example
     * // Delete one NurseProfile
     * const NurseProfile = await prisma.nurseProfile.delete({
     *   where: {
     *     // ... filter to delete one NurseProfile
     *   }
     * })
     * 
     */
    delete<T extends NurseProfileDeleteArgs>(args: SelectSubset<T, NurseProfileDeleteArgs<ExtArgs>>): Prisma__NurseProfileClient<$Result.GetResult<Prisma.$NurseProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NurseProfile.
     * @param {NurseProfileUpdateArgs} args - Arguments to update one NurseProfile.
     * @example
     * // Update one NurseProfile
     * const nurseProfile = await prisma.nurseProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NurseProfileUpdateArgs>(args: SelectSubset<T, NurseProfileUpdateArgs<ExtArgs>>): Prisma__NurseProfileClient<$Result.GetResult<Prisma.$NurseProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NurseProfiles.
     * @param {NurseProfileDeleteManyArgs} args - Arguments to filter NurseProfiles to delete.
     * @example
     * // Delete a few NurseProfiles
     * const { count } = await prisma.nurseProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NurseProfileDeleteManyArgs>(args?: SelectSubset<T, NurseProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NurseProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NurseProfiles
     * const nurseProfile = await prisma.nurseProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NurseProfileUpdateManyArgs>(args: SelectSubset<T, NurseProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NurseProfiles and returns the data updated in the database.
     * @param {NurseProfileUpdateManyAndReturnArgs} args - Arguments to update many NurseProfiles.
     * @example
     * // Update many NurseProfiles
     * const nurseProfile = await prisma.nurseProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NurseProfiles and only return the `id`
     * const nurseProfileWithIdOnly = await prisma.nurseProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends NurseProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, NurseProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NurseProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NurseProfile.
     * @param {NurseProfileUpsertArgs} args - Arguments to update or create a NurseProfile.
     * @example
     * // Update or create a NurseProfile
     * const nurseProfile = await prisma.nurseProfile.upsert({
     *   create: {
     *     // ... data to create a NurseProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NurseProfile we want to update
     *   }
     * })
     */
    upsert<T extends NurseProfileUpsertArgs>(args: SelectSubset<T, NurseProfileUpsertArgs<ExtArgs>>): Prisma__NurseProfileClient<$Result.GetResult<Prisma.$NurseProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NurseProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseProfileCountArgs} args - Arguments to filter NurseProfiles to count.
     * @example
     * // Count the number of NurseProfiles
     * const count = await prisma.nurseProfile.count({
     *   where: {
     *     // ... the filter for the NurseProfiles we want to count
     *   }
     * })
    **/
    count<T extends NurseProfileCountArgs>(
      args?: Subset<T, NurseProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NurseProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NurseProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NurseProfileAggregateArgs>(args: Subset<T, NurseProfileAggregateArgs>): Prisma.PrismaPromise<GetNurseProfileAggregateType<T>>

    /**
     * Group by NurseProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NurseProfileGroupByArgs} args - Group by arguments.
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
      T extends NurseProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NurseProfileGroupByArgs['orderBy'] }
        : { orderBy?: NurseProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NurseProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNurseProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NurseProfile model
   */
  readonly fields: NurseProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NurseProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NurseProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointments<T extends NurseProfile$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, NurseProfile$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the NurseProfile model
   */
  interface NurseProfileFieldRefs {
    readonly id: FieldRef<"NurseProfile", 'String'>
    readonly userId: FieldRef<"NurseProfile", 'String'>
    readonly specialization: FieldRef<"NurseProfile", 'String'>
    readonly experienceYears: FieldRef<"NurseProfile", 'Int'>
    readonly rating: FieldRef<"NurseProfile", 'Float'>
    readonly isVerified: FieldRef<"NurseProfile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * NurseProfile findUnique
   */
  export type NurseProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseProfile
     */
    select?: NurseProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseProfile
     */
    omit?: NurseProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseProfileInclude<ExtArgs> | null
    /**
     * Filter, which NurseProfile to fetch.
     */
    where: NurseProfileWhereUniqueInput
  }

  /**
   * NurseProfile findUniqueOrThrow
   */
  export type NurseProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseProfile
     */
    select?: NurseProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseProfile
     */
    omit?: NurseProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseProfileInclude<ExtArgs> | null
    /**
     * Filter, which NurseProfile to fetch.
     */
    where: NurseProfileWhereUniqueInput
  }

  /**
   * NurseProfile findFirst
   */
  export type NurseProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseProfile
     */
    select?: NurseProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseProfile
     */
    omit?: NurseProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseProfileInclude<ExtArgs> | null
    /**
     * Filter, which NurseProfile to fetch.
     */
    where?: NurseProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NurseProfiles to fetch.
     */
    orderBy?: NurseProfileOrderByWithRelationInput | NurseProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NurseProfiles.
     */
    cursor?: NurseProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NurseProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NurseProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NurseProfiles.
     */
    distinct?: NurseProfileScalarFieldEnum | NurseProfileScalarFieldEnum[]
  }

  /**
   * NurseProfile findFirstOrThrow
   */
  export type NurseProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseProfile
     */
    select?: NurseProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseProfile
     */
    omit?: NurseProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseProfileInclude<ExtArgs> | null
    /**
     * Filter, which NurseProfile to fetch.
     */
    where?: NurseProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NurseProfiles to fetch.
     */
    orderBy?: NurseProfileOrderByWithRelationInput | NurseProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NurseProfiles.
     */
    cursor?: NurseProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NurseProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NurseProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NurseProfiles.
     */
    distinct?: NurseProfileScalarFieldEnum | NurseProfileScalarFieldEnum[]
  }

  /**
   * NurseProfile findMany
   */
  export type NurseProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseProfile
     */
    select?: NurseProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseProfile
     */
    omit?: NurseProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseProfileInclude<ExtArgs> | null
    /**
     * Filter, which NurseProfiles to fetch.
     */
    where?: NurseProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NurseProfiles to fetch.
     */
    orderBy?: NurseProfileOrderByWithRelationInput | NurseProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NurseProfiles.
     */
    cursor?: NurseProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NurseProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NurseProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NurseProfiles.
     */
    distinct?: NurseProfileScalarFieldEnum | NurseProfileScalarFieldEnum[]
  }

  /**
   * NurseProfile create
   */
  export type NurseProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseProfile
     */
    select?: NurseProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseProfile
     */
    omit?: NurseProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a NurseProfile.
     */
    data: XOR<NurseProfileCreateInput, NurseProfileUncheckedCreateInput>
  }

  /**
   * NurseProfile createMany
   */
  export type NurseProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NurseProfiles.
     */
    data: NurseProfileCreateManyInput | NurseProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NurseProfile createManyAndReturn
   */
  export type NurseProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseProfile
     */
    select?: NurseProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NurseProfile
     */
    omit?: NurseProfileOmit<ExtArgs> | null
    /**
     * The data used to create many NurseProfiles.
     */
    data: NurseProfileCreateManyInput | NurseProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NurseProfile update
   */
  export type NurseProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseProfile
     */
    select?: NurseProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseProfile
     */
    omit?: NurseProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a NurseProfile.
     */
    data: XOR<NurseProfileUpdateInput, NurseProfileUncheckedUpdateInput>
    /**
     * Choose, which NurseProfile to update.
     */
    where: NurseProfileWhereUniqueInput
  }

  /**
   * NurseProfile updateMany
   */
  export type NurseProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NurseProfiles.
     */
    data: XOR<NurseProfileUpdateManyMutationInput, NurseProfileUncheckedUpdateManyInput>
    /**
     * Filter which NurseProfiles to update
     */
    where?: NurseProfileWhereInput
    /**
     * Limit how many NurseProfiles to update.
     */
    limit?: number
  }

  /**
   * NurseProfile updateManyAndReturn
   */
  export type NurseProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseProfile
     */
    select?: NurseProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NurseProfile
     */
    omit?: NurseProfileOmit<ExtArgs> | null
    /**
     * The data used to update NurseProfiles.
     */
    data: XOR<NurseProfileUpdateManyMutationInput, NurseProfileUncheckedUpdateManyInput>
    /**
     * Filter which NurseProfiles to update
     */
    where?: NurseProfileWhereInput
    /**
     * Limit how many NurseProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NurseProfile upsert
   */
  export type NurseProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseProfile
     */
    select?: NurseProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseProfile
     */
    omit?: NurseProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the NurseProfile to update in case it exists.
     */
    where: NurseProfileWhereUniqueInput
    /**
     * In case the NurseProfile found by the `where` argument doesn't exist, create a new NurseProfile with this data.
     */
    create: XOR<NurseProfileCreateInput, NurseProfileUncheckedCreateInput>
    /**
     * In case the NurseProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NurseProfileUpdateInput, NurseProfileUncheckedUpdateInput>
  }

  /**
   * NurseProfile delete
   */
  export type NurseProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseProfile
     */
    select?: NurseProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseProfile
     */
    omit?: NurseProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseProfileInclude<ExtArgs> | null
    /**
     * Filter which NurseProfile to delete.
     */
    where: NurseProfileWhereUniqueInput
  }

  /**
   * NurseProfile deleteMany
   */
  export type NurseProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NurseProfiles to delete
     */
    where?: NurseProfileWhereInput
    /**
     * Limit how many NurseProfiles to delete.
     */
    limit?: number
  }

  /**
   * NurseProfile.appointments
   */
  export type NurseProfile$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * NurseProfile without action
   */
  export type NurseProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NurseProfile
     */
    select?: NurseProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NurseProfile
     */
    omit?: NurseProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NurseProfileInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    nurseId: string | null
    serviceType: $Enums.ServiceType | null
    serviceName: $Enums.ServiceName | null
    status: $Enums.AppointmentStatus | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    nurseId: string | null
    serviceType: $Enums.ServiceType | null
    serviceName: $Enums.ServiceName | null
    status: $Enums.AppointmentStatus | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    patientId: number
    nurseId: number
    serviceType: number
    serviceName: number
    status: number
    dueDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true
    patientId?: true
    nurseId?: true
    serviceType?: true
    serviceName?: true
    status?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    patientId?: true
    nurseId?: true
    serviceType?: true
    serviceName?: true
    status?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    patientId?: true
    nurseId?: true
    serviceType?: true
    serviceName?: true
    status?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    patientId: string
    nurseId: string
    serviceType: $Enums.ServiceType
    serviceName: $Enums.ServiceName
    status: $Enums.AppointmentStatus
    dueDate: Date
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    nurseId?: boolean
    serviceType?: boolean
    serviceName?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    nurse?: boolean | NurseProfileDefaultArgs<ExtArgs>
    careLogs?: boolean | Appointment$careLogsArgs<ExtArgs>
    payments?: boolean | Appointment$paymentsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    nurseId?: boolean
    serviceType?: boolean
    serviceName?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    nurse?: boolean | NurseProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    nurseId?: boolean
    serviceType?: boolean
    serviceName?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    nurse?: boolean | NurseProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    patientId?: boolean
    nurseId?: boolean
    serviceType?: boolean
    serviceName?: boolean
    status?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "nurseId" | "serviceType" | "serviceName" | "status" | "dueDate" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    nurse?: boolean | NurseProfileDefaultArgs<ExtArgs>
    careLogs?: boolean | Appointment$careLogsArgs<ExtArgs>
    payments?: boolean | Appointment$paymentsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    nurse?: boolean | NurseProfileDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    nurse?: boolean | NurseProfileDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      nurse: Prisma.$NurseProfilePayload<ExtArgs>
      careLogs: Prisma.$CareLogPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      nurseId: string
      serviceType: $Enums.ServiceType
      serviceName: $Enums.ServiceName
      status: $Enums.AppointmentStatus
      dueDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nurse<T extends NurseProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NurseProfileDefaultArgs<ExtArgs>>): Prisma__NurseProfileClient<$Result.GetResult<Prisma.$NurseProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    careLogs<T extends Appointment$careLogsArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$careLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Appointment$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly patientId: FieldRef<"Appointment", 'String'>
    readonly nurseId: FieldRef<"Appointment", 'String'>
    readonly serviceType: FieldRef<"Appointment", 'ServiceType'>
    readonly serviceName: FieldRef<"Appointment", 'ServiceName'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly dueDate: FieldRef<"Appointment", 'DateTime'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.careLogs
   */
  export type Appointment$careLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareLog
     */
    select?: CareLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareLog
     */
    omit?: CareLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareLogInclude<ExtArgs> | null
    where?: CareLogWhereInput
    orderBy?: CareLogOrderByWithRelationInput | CareLogOrderByWithRelationInput[]
    cursor?: CareLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CareLogScalarFieldEnum | CareLogScalarFieldEnum[]
  }

  /**
   * Appointment.payments
   */
  export type Appointment$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    midtransOrderId: string | null
    amount: number | null
    status: $Enums.PaymentStatus | null
    paymentMethod: string | null
    snapToken: string | null
    snapRedirectUrl: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    midtransOrderId: string | null
    amount: number | null
    status: $Enums.PaymentStatus | null
    paymentMethod: string | null
    snapToken: string | null
    snapRedirectUrl: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    appointmentId: number
    midtransOrderId: number
    amount: number
    status: number
    paymentMethod: number
    snapToken: number
    snapRedirectUrl: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    appointmentId?: true
    midtransOrderId?: true
    amount?: true
    status?: true
    paymentMethod?: true
    snapToken?: true
    snapRedirectUrl?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    appointmentId?: true
    midtransOrderId?: true
    amount?: true
    status?: true
    paymentMethod?: true
    snapToken?: true
    snapRedirectUrl?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    appointmentId?: true
    midtransOrderId?: true
    amount?: true
    status?: true
    paymentMethod?: true
    snapToken?: true
    snapRedirectUrl?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    appointmentId: string
    midtransOrderId: string
    amount: number
    status: $Enums.PaymentStatus
    paymentMethod: string | null
    snapToken: string | null
    snapRedirectUrl: string | null
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    midtransOrderId?: boolean
    amount?: boolean
    status?: boolean
    paymentMethod?: boolean
    snapToken?: boolean
    snapRedirectUrl?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    midtransOrderId?: boolean
    amount?: boolean
    status?: boolean
    paymentMethod?: boolean
    snapToken?: boolean
    snapRedirectUrl?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    midtransOrderId?: boolean
    amount?: boolean
    status?: boolean
    paymentMethod?: boolean
    snapToken?: boolean
    snapRedirectUrl?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    appointmentId?: boolean
    midtransOrderId?: boolean
    amount?: boolean
    status?: boolean
    paymentMethod?: boolean
    snapToken?: boolean
    snapRedirectUrl?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointmentId" | "midtransOrderId" | "amount" | "status" | "paymentMethod" | "snapToken" | "snapRedirectUrl" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appointmentId: string
      midtransOrderId: string
      amount: number
      status: $Enums.PaymentStatus
      paymentMethod: string | null
      snapToken: string | null
      snapRedirectUrl: string | null
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly appointmentId: FieldRef<"Payment", 'String'>
    readonly midtransOrderId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly paymentMethod: FieldRef<"Payment", 'String'>
    readonly snapToken: FieldRef<"Payment", 'String'>
    readonly snapRedirectUrl: FieldRef<"Payment", 'String'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model CareLog
   */

  export type AggregateCareLog = {
    _count: CareLogCountAggregateOutputType | null
    _avg: CareLogAvgAggregateOutputType | null
    _sum: CareLogSumAggregateOutputType | null
    _min: CareLogMinAggregateOutputType | null
    _max: CareLogMaxAggregateOutputType | null
  }

  export type CareLogAvgAggregateOutputType = {
    systolic: number | null
    diastolic: number | null
    bloodSugar: number | null
    cholesterol: number | null
    uricAcid: number | null
    moodScore: number | null
  }

  export type CareLogSumAggregateOutputType = {
    systolic: number | null
    diastolic: number | null
    bloodSugar: number | null
    cholesterol: number | null
    uricAcid: number | null
    moodScore: number | null
  }

  export type CareLogMinAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    patientId: string | null
    nurseId: string | null
    systolic: number | null
    diastolic: number | null
    bloodSugar: number | null
    cholesterol: number | null
    uricAcid: number | null
    woundCondition: string | null
    moodScore: number | null
    clinicalNotes: string | null
    recordedAt: Date | null
    updatedAt: Date | null
  }

  export type CareLogMaxAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    patientId: string | null
    nurseId: string | null
    systolic: number | null
    diastolic: number | null
    bloodSugar: number | null
    cholesterol: number | null
    uricAcid: number | null
    woundCondition: string | null
    moodScore: number | null
    clinicalNotes: string | null
    recordedAt: Date | null
    updatedAt: Date | null
  }

  export type CareLogCountAggregateOutputType = {
    id: number
    appointmentId: number
    patientId: number
    nurseId: number
    systolic: number
    diastolic: number
    bloodSugar: number
    cholesterol: number
    uricAcid: number
    woundCondition: number
    moodScore: number
    clinicalNotes: number
    recordedAt: number
    updatedAt: number
    _all: number
  }


  export type CareLogAvgAggregateInputType = {
    systolic?: true
    diastolic?: true
    bloodSugar?: true
    cholesterol?: true
    uricAcid?: true
    moodScore?: true
  }

  export type CareLogSumAggregateInputType = {
    systolic?: true
    diastolic?: true
    bloodSugar?: true
    cholesterol?: true
    uricAcid?: true
    moodScore?: true
  }

  export type CareLogMinAggregateInputType = {
    id?: true
    appointmentId?: true
    patientId?: true
    nurseId?: true
    systolic?: true
    diastolic?: true
    bloodSugar?: true
    cholesterol?: true
    uricAcid?: true
    woundCondition?: true
    moodScore?: true
    clinicalNotes?: true
    recordedAt?: true
    updatedAt?: true
  }

  export type CareLogMaxAggregateInputType = {
    id?: true
    appointmentId?: true
    patientId?: true
    nurseId?: true
    systolic?: true
    diastolic?: true
    bloodSugar?: true
    cholesterol?: true
    uricAcid?: true
    woundCondition?: true
    moodScore?: true
    clinicalNotes?: true
    recordedAt?: true
    updatedAt?: true
  }

  export type CareLogCountAggregateInputType = {
    id?: true
    appointmentId?: true
    patientId?: true
    nurseId?: true
    systolic?: true
    diastolic?: true
    bloodSugar?: true
    cholesterol?: true
    uricAcid?: true
    woundCondition?: true
    moodScore?: true
    clinicalNotes?: true
    recordedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CareLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareLog to aggregate.
     */
    where?: CareLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareLogs to fetch.
     */
    orderBy?: CareLogOrderByWithRelationInput | CareLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CareLogs
    **/
    _count?: true | CareLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CareLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CareLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareLogMaxAggregateInputType
  }

  export type GetCareLogAggregateType<T extends CareLogAggregateArgs> = {
        [P in keyof T & keyof AggregateCareLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareLog[P]>
      : GetScalarType<T[P], AggregateCareLog[P]>
  }




  export type CareLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareLogWhereInput
    orderBy?: CareLogOrderByWithAggregationInput | CareLogOrderByWithAggregationInput[]
    by: CareLogScalarFieldEnum[] | CareLogScalarFieldEnum
    having?: CareLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareLogCountAggregateInputType | true
    _avg?: CareLogAvgAggregateInputType
    _sum?: CareLogSumAggregateInputType
    _min?: CareLogMinAggregateInputType
    _max?: CareLogMaxAggregateInputType
  }

  export type CareLogGroupByOutputType = {
    id: string
    appointmentId: string
    patientId: string
    nurseId: string
    systolic: number | null
    diastolic: number | null
    bloodSugar: number | null
    cholesterol: number | null
    uricAcid: number | null
    woundCondition: string | null
    moodScore: number | null
    clinicalNotes: string | null
    recordedAt: Date
    updatedAt: Date
    _count: CareLogCountAggregateOutputType | null
    _avg: CareLogAvgAggregateOutputType | null
    _sum: CareLogSumAggregateOutputType | null
    _min: CareLogMinAggregateOutputType | null
    _max: CareLogMaxAggregateOutputType | null
  }

  type GetCareLogGroupByPayload<T extends CareLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareLogGroupByOutputType[P]>
            : GetScalarType<T[P], CareLogGroupByOutputType[P]>
        }
      >
    >


  export type CareLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    patientId?: boolean
    nurseId?: boolean
    systolic?: boolean
    diastolic?: boolean
    bloodSugar?: boolean
    cholesterol?: boolean
    uricAcid?: boolean
    woundCondition?: boolean
    moodScore?: boolean
    clinicalNotes?: boolean
    recordedAt?: boolean
    updatedAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    nurse?: boolean | UserDefaultArgs<ExtArgs>
    activityLog?: boolean | CareLog$activityLogArgs<ExtArgs>
    _count?: boolean | CareLogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careLog"]>

  export type CareLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    patientId?: boolean
    nurseId?: boolean
    systolic?: boolean
    diastolic?: boolean
    bloodSugar?: boolean
    cholesterol?: boolean
    uricAcid?: boolean
    woundCondition?: boolean
    moodScore?: boolean
    clinicalNotes?: boolean
    recordedAt?: boolean
    updatedAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    nurse?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careLog"]>

  export type CareLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    patientId?: boolean
    nurseId?: boolean
    systolic?: boolean
    diastolic?: boolean
    bloodSugar?: boolean
    cholesterol?: boolean
    uricAcid?: boolean
    woundCondition?: boolean
    moodScore?: boolean
    clinicalNotes?: boolean
    recordedAt?: boolean
    updatedAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    nurse?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careLog"]>

  export type CareLogSelectScalar = {
    id?: boolean
    appointmentId?: boolean
    patientId?: boolean
    nurseId?: boolean
    systolic?: boolean
    diastolic?: boolean
    bloodSugar?: boolean
    cholesterol?: boolean
    uricAcid?: boolean
    woundCondition?: boolean
    moodScore?: boolean
    clinicalNotes?: boolean
    recordedAt?: boolean
    updatedAt?: boolean
  }

  export type CareLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointmentId" | "patientId" | "nurseId" | "systolic" | "diastolic" | "bloodSugar" | "cholesterol" | "uricAcid" | "woundCondition" | "moodScore" | "clinicalNotes" | "recordedAt" | "updatedAt", ExtArgs["result"]["careLog"]>
  export type CareLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    nurse?: boolean | UserDefaultArgs<ExtArgs>
    activityLog?: boolean | CareLog$activityLogArgs<ExtArgs>
    _count?: boolean | CareLogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CareLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    nurse?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CareLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    nurse?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CareLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CareLog"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
      patient: Prisma.$PatientPayload<ExtArgs>
      nurse: Prisma.$UserPayload<ExtArgs>
      activityLog: Prisma.$ActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appointmentId: string
      patientId: string
      nurseId: string
      systolic: number | null
      diastolic: number | null
      bloodSugar: number | null
      cholesterol: number | null
      uricAcid: number | null
      woundCondition: string | null
      moodScore: number | null
      clinicalNotes: string | null
      recordedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["careLog"]>
    composites: {}
  }

  type CareLogGetPayload<S extends boolean | null | undefined | CareLogDefaultArgs> = $Result.GetResult<Prisma.$CareLogPayload, S>

  type CareLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CareLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareLogCountAggregateInputType | true
    }

  export interface CareLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CareLog'], meta: { name: 'CareLog' } }
    /**
     * Find zero or one CareLog that matches the filter.
     * @param {CareLogFindUniqueArgs} args - Arguments to find a CareLog
     * @example
     * // Get one CareLog
     * const careLog = await prisma.careLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareLogFindUniqueArgs>(args: SelectSubset<T, CareLogFindUniqueArgs<ExtArgs>>): Prisma__CareLogClient<$Result.GetResult<Prisma.$CareLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CareLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareLogFindUniqueOrThrowArgs} args - Arguments to find a CareLog
     * @example
     * // Get one CareLog
     * const careLog = await prisma.careLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareLogFindUniqueOrThrowArgs>(args: SelectSubset<T, CareLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CareLogClient<$Result.GetResult<Prisma.$CareLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareLogFindFirstArgs} args - Arguments to find a CareLog
     * @example
     * // Get one CareLog
     * const careLog = await prisma.careLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareLogFindFirstArgs>(args?: SelectSubset<T, CareLogFindFirstArgs<ExtArgs>>): Prisma__CareLogClient<$Result.GetResult<Prisma.$CareLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareLogFindFirstOrThrowArgs} args - Arguments to find a CareLog
     * @example
     * // Get one CareLog
     * const careLog = await prisma.careLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareLogFindFirstOrThrowArgs>(args?: SelectSubset<T, CareLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CareLogClient<$Result.GetResult<Prisma.$CareLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CareLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CareLogs
     * const careLogs = await prisma.careLog.findMany()
     * 
     * // Get first 10 CareLogs
     * const careLogs = await prisma.careLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careLogWithIdOnly = await prisma.careLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CareLogFindManyArgs>(args?: SelectSubset<T, CareLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CareLog.
     * @param {CareLogCreateArgs} args - Arguments to create a CareLog.
     * @example
     * // Create one CareLog
     * const CareLog = await prisma.careLog.create({
     *   data: {
     *     // ... data to create a CareLog
     *   }
     * })
     * 
     */
    create<T extends CareLogCreateArgs>(args: SelectSubset<T, CareLogCreateArgs<ExtArgs>>): Prisma__CareLogClient<$Result.GetResult<Prisma.$CareLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CareLogs.
     * @param {CareLogCreateManyArgs} args - Arguments to create many CareLogs.
     * @example
     * // Create many CareLogs
     * const careLog = await prisma.careLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CareLogCreateManyArgs>(args?: SelectSubset<T, CareLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CareLogs and returns the data saved in the database.
     * @param {CareLogCreateManyAndReturnArgs} args - Arguments to create many CareLogs.
     * @example
     * // Create many CareLogs
     * const careLog = await prisma.careLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CareLogs and only return the `id`
     * const careLogWithIdOnly = await prisma.careLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CareLogCreateManyAndReturnArgs>(args?: SelectSubset<T, CareLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CareLog.
     * @param {CareLogDeleteArgs} args - Arguments to delete one CareLog.
     * @example
     * // Delete one CareLog
     * const CareLog = await prisma.careLog.delete({
     *   where: {
     *     // ... filter to delete one CareLog
     *   }
     * })
     * 
     */
    delete<T extends CareLogDeleteArgs>(args: SelectSubset<T, CareLogDeleteArgs<ExtArgs>>): Prisma__CareLogClient<$Result.GetResult<Prisma.$CareLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CareLog.
     * @param {CareLogUpdateArgs} args - Arguments to update one CareLog.
     * @example
     * // Update one CareLog
     * const careLog = await prisma.careLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CareLogUpdateArgs>(args: SelectSubset<T, CareLogUpdateArgs<ExtArgs>>): Prisma__CareLogClient<$Result.GetResult<Prisma.$CareLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CareLogs.
     * @param {CareLogDeleteManyArgs} args - Arguments to filter CareLogs to delete.
     * @example
     * // Delete a few CareLogs
     * const { count } = await prisma.careLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CareLogDeleteManyArgs>(args?: SelectSubset<T, CareLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CareLogs
     * const careLog = await prisma.careLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CareLogUpdateManyArgs>(args: SelectSubset<T, CareLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareLogs and returns the data updated in the database.
     * @param {CareLogUpdateManyAndReturnArgs} args - Arguments to update many CareLogs.
     * @example
     * // Update many CareLogs
     * const careLog = await prisma.careLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CareLogs and only return the `id`
     * const careLogWithIdOnly = await prisma.careLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends CareLogUpdateManyAndReturnArgs>(args: SelectSubset<T, CareLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CareLog.
     * @param {CareLogUpsertArgs} args - Arguments to update or create a CareLog.
     * @example
     * // Update or create a CareLog
     * const careLog = await prisma.careLog.upsert({
     *   create: {
     *     // ... data to create a CareLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CareLog we want to update
     *   }
     * })
     */
    upsert<T extends CareLogUpsertArgs>(args: SelectSubset<T, CareLogUpsertArgs<ExtArgs>>): Prisma__CareLogClient<$Result.GetResult<Prisma.$CareLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CareLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareLogCountArgs} args - Arguments to filter CareLogs to count.
     * @example
     * // Count the number of CareLogs
     * const count = await prisma.careLog.count({
     *   where: {
     *     // ... the filter for the CareLogs we want to count
     *   }
     * })
    **/
    count<T extends CareLogCountArgs>(
      args?: Subset<T, CareLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CareLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CareLogAggregateArgs>(args: Subset<T, CareLogAggregateArgs>): Prisma.PrismaPromise<GetCareLogAggregateType<T>>

    /**
     * Group by CareLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareLogGroupByArgs} args - Group by arguments.
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
      T extends CareLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareLogGroupByArgs['orderBy'] }
        : { orderBy?: CareLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CareLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CareLog model
   */
  readonly fields: CareLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CareLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nurse<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activityLog<T extends CareLog$activityLogArgs<ExtArgs> = {}>(args?: Subset<T, CareLog$activityLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CareLog model
   */
  interface CareLogFieldRefs {
    readonly id: FieldRef<"CareLog", 'String'>
    readonly appointmentId: FieldRef<"CareLog", 'String'>
    readonly patientId: FieldRef<"CareLog", 'String'>
    readonly nurseId: FieldRef<"CareLog", 'String'>
    readonly systolic: FieldRef<"CareLog", 'Int'>
    readonly diastolic: FieldRef<"CareLog", 'Int'>
    readonly bloodSugar: FieldRef<"CareLog", 'Float'>
    readonly cholesterol: FieldRef<"CareLog", 'Float'>
    readonly uricAcid: FieldRef<"CareLog", 'Float'>
    readonly woundCondition: FieldRef<"CareLog", 'String'>
    readonly moodScore: FieldRef<"CareLog", 'Int'>
    readonly clinicalNotes: FieldRef<"CareLog", 'String'>
    readonly recordedAt: FieldRef<"CareLog", 'DateTime'>
    readonly updatedAt: FieldRef<"CareLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CareLog findUnique
   */
  export type CareLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareLog
     */
    select?: CareLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareLog
     */
    omit?: CareLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareLogInclude<ExtArgs> | null
    /**
     * Filter, which CareLog to fetch.
     */
    where: CareLogWhereUniqueInput
  }

  /**
   * CareLog findUniqueOrThrow
   */
  export type CareLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareLog
     */
    select?: CareLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareLog
     */
    omit?: CareLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareLogInclude<ExtArgs> | null
    /**
     * Filter, which CareLog to fetch.
     */
    where: CareLogWhereUniqueInput
  }

  /**
   * CareLog findFirst
   */
  export type CareLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareLog
     */
    select?: CareLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareLog
     */
    omit?: CareLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareLogInclude<ExtArgs> | null
    /**
     * Filter, which CareLog to fetch.
     */
    where?: CareLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareLogs to fetch.
     */
    orderBy?: CareLogOrderByWithRelationInput | CareLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareLogs.
     */
    cursor?: CareLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareLogs.
     */
    distinct?: CareLogScalarFieldEnum | CareLogScalarFieldEnum[]
  }

  /**
   * CareLog findFirstOrThrow
   */
  export type CareLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareLog
     */
    select?: CareLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareLog
     */
    omit?: CareLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareLogInclude<ExtArgs> | null
    /**
     * Filter, which CareLog to fetch.
     */
    where?: CareLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareLogs to fetch.
     */
    orderBy?: CareLogOrderByWithRelationInput | CareLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareLogs.
     */
    cursor?: CareLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareLogs.
     */
    distinct?: CareLogScalarFieldEnum | CareLogScalarFieldEnum[]
  }

  /**
   * CareLog findMany
   */
  export type CareLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareLog
     */
    select?: CareLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareLog
     */
    omit?: CareLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareLogInclude<ExtArgs> | null
    /**
     * Filter, which CareLogs to fetch.
     */
    where?: CareLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareLogs to fetch.
     */
    orderBy?: CareLogOrderByWithRelationInput | CareLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CareLogs.
     */
    cursor?: CareLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareLogs.
     */
    distinct?: CareLogScalarFieldEnum | CareLogScalarFieldEnum[]
  }

  /**
   * CareLog create
   */
  export type CareLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareLog
     */
    select?: CareLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareLog
     */
    omit?: CareLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareLogInclude<ExtArgs> | null
    /**
     * The data needed to create a CareLog.
     */
    data: XOR<CareLogCreateInput, CareLogUncheckedCreateInput>
  }

  /**
   * CareLog createMany
   */
  export type CareLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CareLogs.
     */
    data: CareLogCreateManyInput | CareLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CareLog createManyAndReturn
   */
  export type CareLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareLog
     */
    select?: CareLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CareLog
     */
    omit?: CareLogOmit<ExtArgs> | null
    /**
     * The data used to create many CareLogs.
     */
    data: CareLogCreateManyInput | CareLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CareLog update
   */
  export type CareLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareLog
     */
    select?: CareLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareLog
     */
    omit?: CareLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareLogInclude<ExtArgs> | null
    /**
     * The data needed to update a CareLog.
     */
    data: XOR<CareLogUpdateInput, CareLogUncheckedUpdateInput>
    /**
     * Choose, which CareLog to update.
     */
    where: CareLogWhereUniqueInput
  }

  /**
   * CareLog updateMany
   */
  export type CareLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CareLogs.
     */
    data: XOR<CareLogUpdateManyMutationInput, CareLogUncheckedUpdateManyInput>
    /**
     * Filter which CareLogs to update
     */
    where?: CareLogWhereInput
    /**
     * Limit how many CareLogs to update.
     */
    limit?: number
  }

  /**
   * CareLog updateManyAndReturn
   */
  export type CareLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareLog
     */
    select?: CareLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CareLog
     */
    omit?: CareLogOmit<ExtArgs> | null
    /**
     * The data used to update CareLogs.
     */
    data: XOR<CareLogUpdateManyMutationInput, CareLogUncheckedUpdateManyInput>
    /**
     * Filter which CareLogs to update
     */
    where?: CareLogWhereInput
    /**
     * Limit how many CareLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CareLog upsert
   */
  export type CareLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareLog
     */
    select?: CareLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareLog
     */
    omit?: CareLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareLogInclude<ExtArgs> | null
    /**
     * The filter to search for the CareLog to update in case it exists.
     */
    where: CareLogWhereUniqueInput
    /**
     * In case the CareLog found by the `where` argument doesn't exist, create a new CareLog with this data.
     */
    create: XOR<CareLogCreateInput, CareLogUncheckedCreateInput>
    /**
     * In case the CareLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareLogUpdateInput, CareLogUncheckedUpdateInput>
  }

  /**
   * CareLog delete
   */
  export type CareLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareLog
     */
    select?: CareLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareLog
     */
    omit?: CareLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareLogInclude<ExtArgs> | null
    /**
     * Filter which CareLog to delete.
     */
    where: CareLogWhereUniqueInput
  }

  /**
   * CareLog deleteMany
   */
  export type CareLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareLogs to delete
     */
    where?: CareLogWhereInput
    /**
     * Limit how many CareLogs to delete.
     */
    limit?: number
  }

  /**
   * CareLog.activityLog
   */
  export type CareLog$activityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * CareLog without action
   */
  export type CareLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareLog
     */
    select?: CareLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareLog
     */
    omit?: CareLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareLogInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    careLogId: string | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    careLogId: string | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    notes: number
    createdAt: number
    updatedAt: number
    careLogId: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    careLogId?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    careLogId?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    careLogId?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    notes: string
    createdAt: Date
    updatedAt: Date
    careLogId: string
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    careLogId?: boolean
    careLog?: boolean | CareLogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    careLogId?: boolean
    careLog?: boolean | CareLogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    careLogId?: boolean
    careLog?: boolean | CareLogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    careLogId?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "notes" | "createdAt" | "updatedAt" | "careLogId", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careLog?: boolean | CareLogDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careLog?: boolean | CareLogDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careLog?: boolean | CareLogDefaultArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      careLog: Prisma.$CareLogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      notes: string
      createdAt: Date
      updatedAt: Date
      careLogId: string
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
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
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    careLog<T extends CareLogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CareLogDefaultArgs<ExtArgs>>): Prisma__CareLogClient<$Result.GetResult<Prisma.$CareLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly notes: FieldRef<"ActivityLog", 'String'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
    readonly updatedAt: FieldRef<"ActivityLog", 'DateTime'>
    readonly careLogId: FieldRef<"ActivityLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
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
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    phoneNumber: 'phoneNumber',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    familyId: 'familyId',
    name: 'name',
    dateOfBirth: 'dateOfBirth',
    weight: 'weight',
    height: 'height',
    medicalHistory: 'medicalHistory',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const NurseProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    specialization: 'specialization',
    experienceYears: 'experienceYears',
    rating: 'rating',
    isVerified: 'isVerified'
  };

  export type NurseProfileScalarFieldEnum = (typeof NurseProfileScalarFieldEnum)[keyof typeof NurseProfileScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    nurseId: 'nurseId',
    serviceType: 'serviceType',
    serviceName: 'serviceName',
    status: 'status',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    midtransOrderId: 'midtransOrderId',
    amount: 'amount',
    status: 'status',
    paymentMethod: 'paymentMethod',
    snapToken: 'snapToken',
    snapRedirectUrl: 'snapRedirectUrl',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const CareLogScalarFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    patientId: 'patientId',
    nurseId: 'nurseId',
    systolic: 'systolic',
    diastolic: 'diastolic',
    bloodSugar: 'bloodSugar',
    cholesterol: 'cholesterol',
    uricAcid: 'uricAcid',
    woundCondition: 'woundCondition',
    moodScore: 'moodScore',
    clinicalNotes: 'clinicalNotes',
    recordedAt: 'recordedAt',
    updatedAt: 'updatedAt'
  };

  export type CareLogScalarFieldEnum = (typeof CareLogScalarFieldEnum)[keyof typeof CareLogScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    careLogId: 'careLogId'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ServiceType'
   */
  export type EnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType'>
    


  /**
   * Reference to a field of type 'ServiceType[]'
   */
  export type ListEnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType[]'>
    


  /**
   * Reference to a field of type 'ServiceName'
   */
  export type EnumServiceNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceName'>
    


  /**
   * Reference to a field of type 'ServiceName[]'
   */
  export type ListEnumServiceNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceName[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    patients?: PatientListRelationFilter
    nurseProfile?: XOR<NurseProfileNullableScalarRelationFilter, NurseProfileWhereInput> | null
    careLogs?: CareLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patients?: PatientOrderByRelationAggregateInput
    nurseProfile?: NurseProfileOrderByWithRelationInput
    careLogs?: CareLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    patients?: PatientListRelationFilter
    nurseProfile?: XOR<NurseProfileNullableScalarRelationFilter, NurseProfileWhereInput> | null
    careLogs?: CareLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    familyId?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeFilter<"Patient"> | Date | string
    weight?: FloatNullableFilter<"Patient"> | number | null
    height?: FloatNullableFilter<"Patient"> | number | null
    medicalHistory?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    family?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
    medicalLogs?: CareLogListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    familyId?: SortOrder
    name?: SortOrder
    dateOfBirth?: SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    medicalHistory?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    family?: UserOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
    medicalLogs?: CareLogOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    familyId?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeFilter<"Patient"> | Date | string
    weight?: FloatNullableFilter<"Patient"> | number | null
    height?: FloatNullableFilter<"Patient"> | number | null
    medicalHistory?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    family?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
    medicalLogs?: CareLogListRelationFilter
  }, "id">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    familyId?: SortOrder
    name?: SortOrder
    dateOfBirth?: SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    medicalHistory?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    familyId?: StringWithAggregatesFilter<"Patient"> | string
    name?: StringWithAggregatesFilter<"Patient"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    weight?: FloatNullableWithAggregatesFilter<"Patient"> | number | null
    height?: FloatNullableWithAggregatesFilter<"Patient"> | number | null
    medicalHistory?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type NurseProfileWhereInput = {
    AND?: NurseProfileWhereInput | NurseProfileWhereInput[]
    OR?: NurseProfileWhereInput[]
    NOT?: NurseProfileWhereInput | NurseProfileWhereInput[]
    id?: StringFilter<"NurseProfile"> | string
    userId?: StringFilter<"NurseProfile"> | string
    specialization?: StringFilter<"NurseProfile"> | string
    experienceYears?: IntFilter<"NurseProfile"> | number
    rating?: FloatFilter<"NurseProfile"> | number
    isVerified?: BoolFilter<"NurseProfile"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
  }

  export type NurseProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    experienceYears?: SortOrder
    rating?: SortOrder
    isVerified?: SortOrder
    user?: UserOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type NurseProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: NurseProfileWhereInput | NurseProfileWhereInput[]
    OR?: NurseProfileWhereInput[]
    NOT?: NurseProfileWhereInput | NurseProfileWhereInput[]
    specialization?: StringFilter<"NurseProfile"> | string
    experienceYears?: IntFilter<"NurseProfile"> | number
    rating?: FloatFilter<"NurseProfile"> | number
    isVerified?: BoolFilter<"NurseProfile"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
  }, "id" | "userId">

  export type NurseProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    experienceYears?: SortOrder
    rating?: SortOrder
    isVerified?: SortOrder
    _count?: NurseProfileCountOrderByAggregateInput
    _avg?: NurseProfileAvgOrderByAggregateInput
    _max?: NurseProfileMaxOrderByAggregateInput
    _min?: NurseProfileMinOrderByAggregateInput
    _sum?: NurseProfileSumOrderByAggregateInput
  }

  export type NurseProfileScalarWhereWithAggregatesInput = {
    AND?: NurseProfileScalarWhereWithAggregatesInput | NurseProfileScalarWhereWithAggregatesInput[]
    OR?: NurseProfileScalarWhereWithAggregatesInput[]
    NOT?: NurseProfileScalarWhereWithAggregatesInput | NurseProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NurseProfile"> | string
    userId?: StringWithAggregatesFilter<"NurseProfile"> | string
    specialization?: StringWithAggregatesFilter<"NurseProfile"> | string
    experienceYears?: IntWithAggregatesFilter<"NurseProfile"> | number
    rating?: FloatWithAggregatesFilter<"NurseProfile"> | number
    isVerified?: BoolWithAggregatesFilter<"NurseProfile"> | boolean
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    patientId?: StringFilter<"Appointment"> | string
    nurseId?: StringFilter<"Appointment"> | string
    serviceType?: EnumServiceTypeFilter<"Appointment"> | $Enums.ServiceType
    serviceName?: EnumServiceNameFilter<"Appointment"> | $Enums.ServiceName
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    dueDate?: DateTimeFilter<"Appointment"> | Date | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    nurse?: XOR<NurseProfileScalarRelationFilter, NurseProfileWhereInput>
    careLogs?: CareLogListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    nurseId?: SortOrder
    serviceType?: SortOrder
    serviceName?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    nurse?: NurseProfileOrderByWithRelationInput
    careLogs?: CareLogOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    patientId?: StringFilter<"Appointment"> | string
    nurseId?: StringFilter<"Appointment"> | string
    serviceType?: EnumServiceTypeFilter<"Appointment"> | $Enums.ServiceType
    serviceName?: EnumServiceNameFilter<"Appointment"> | $Enums.ServiceName
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    dueDate?: DateTimeFilter<"Appointment"> | Date | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    nurse?: XOR<NurseProfileScalarRelationFilter, NurseProfileWhereInput>
    careLogs?: CareLogListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    nurseId?: SortOrder
    serviceType?: SortOrder
    serviceName?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    patientId?: StringWithAggregatesFilter<"Appointment"> | string
    nurseId?: StringWithAggregatesFilter<"Appointment"> | string
    serviceType?: EnumServiceTypeWithAggregatesFilter<"Appointment"> | $Enums.ServiceType
    serviceName?: EnumServiceNameWithAggregatesFilter<"Appointment"> | $Enums.ServiceName
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    dueDate?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    appointmentId?: StringFilter<"Payment"> | string
    midtransOrderId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    snapToken?: StringNullableFilter<"Payment"> | string | null
    snapRedirectUrl?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    midtransOrderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    snapToken?: SortOrderInput | SortOrder
    snapRedirectUrl?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    midtransOrderId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    appointmentId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    snapToken?: StringNullableFilter<"Payment"> | string | null
    snapRedirectUrl?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }, "id" | "midtransOrderId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    midtransOrderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    snapToken?: SortOrderInput | SortOrder
    snapRedirectUrl?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    appointmentId?: StringWithAggregatesFilter<"Payment"> | string
    midtransOrderId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    snapToken?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    snapRedirectUrl?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type CareLogWhereInput = {
    AND?: CareLogWhereInput | CareLogWhereInput[]
    OR?: CareLogWhereInput[]
    NOT?: CareLogWhereInput | CareLogWhereInput[]
    id?: StringFilter<"CareLog"> | string
    appointmentId?: StringFilter<"CareLog"> | string
    patientId?: StringFilter<"CareLog"> | string
    nurseId?: StringFilter<"CareLog"> | string
    systolic?: IntNullableFilter<"CareLog"> | number | null
    diastolic?: IntNullableFilter<"CareLog"> | number | null
    bloodSugar?: FloatNullableFilter<"CareLog"> | number | null
    cholesterol?: FloatNullableFilter<"CareLog"> | number | null
    uricAcid?: FloatNullableFilter<"CareLog"> | number | null
    woundCondition?: StringNullableFilter<"CareLog"> | string | null
    moodScore?: IntNullableFilter<"CareLog"> | number | null
    clinicalNotes?: StringNullableFilter<"CareLog"> | string | null
    recordedAt?: DateTimeFilter<"CareLog"> | Date | string
    updatedAt?: DateTimeFilter<"CareLog"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    nurse?: XOR<UserScalarRelationFilter, UserWhereInput>
    activityLog?: ActivityLogListRelationFilter
  }

  export type CareLogOrderByWithRelationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    patientId?: SortOrder
    nurseId?: SortOrder
    systolic?: SortOrderInput | SortOrder
    diastolic?: SortOrderInput | SortOrder
    bloodSugar?: SortOrderInput | SortOrder
    cholesterol?: SortOrderInput | SortOrder
    uricAcid?: SortOrderInput | SortOrder
    woundCondition?: SortOrderInput | SortOrder
    moodScore?: SortOrderInput | SortOrder
    clinicalNotes?: SortOrderInput | SortOrder
    recordedAt?: SortOrder
    updatedAt?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
    nurse?: UserOrderByWithRelationInput
    activityLog?: ActivityLogOrderByRelationAggregateInput
  }

  export type CareLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CareLogWhereInput | CareLogWhereInput[]
    OR?: CareLogWhereInput[]
    NOT?: CareLogWhereInput | CareLogWhereInput[]
    appointmentId?: StringFilter<"CareLog"> | string
    patientId?: StringFilter<"CareLog"> | string
    nurseId?: StringFilter<"CareLog"> | string
    systolic?: IntNullableFilter<"CareLog"> | number | null
    diastolic?: IntNullableFilter<"CareLog"> | number | null
    bloodSugar?: FloatNullableFilter<"CareLog"> | number | null
    cholesterol?: FloatNullableFilter<"CareLog"> | number | null
    uricAcid?: FloatNullableFilter<"CareLog"> | number | null
    woundCondition?: StringNullableFilter<"CareLog"> | string | null
    moodScore?: IntNullableFilter<"CareLog"> | number | null
    clinicalNotes?: StringNullableFilter<"CareLog"> | string | null
    recordedAt?: DateTimeFilter<"CareLog"> | Date | string
    updatedAt?: DateTimeFilter<"CareLog"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    nurse?: XOR<UserScalarRelationFilter, UserWhereInput>
    activityLog?: ActivityLogListRelationFilter
  }, "id">

  export type CareLogOrderByWithAggregationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    patientId?: SortOrder
    nurseId?: SortOrder
    systolic?: SortOrderInput | SortOrder
    diastolic?: SortOrderInput | SortOrder
    bloodSugar?: SortOrderInput | SortOrder
    cholesterol?: SortOrderInput | SortOrder
    uricAcid?: SortOrderInput | SortOrder
    woundCondition?: SortOrderInput | SortOrder
    moodScore?: SortOrderInput | SortOrder
    clinicalNotes?: SortOrderInput | SortOrder
    recordedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CareLogCountOrderByAggregateInput
    _avg?: CareLogAvgOrderByAggregateInput
    _max?: CareLogMaxOrderByAggregateInput
    _min?: CareLogMinOrderByAggregateInput
    _sum?: CareLogSumOrderByAggregateInput
  }

  export type CareLogScalarWhereWithAggregatesInput = {
    AND?: CareLogScalarWhereWithAggregatesInput | CareLogScalarWhereWithAggregatesInput[]
    OR?: CareLogScalarWhereWithAggregatesInput[]
    NOT?: CareLogScalarWhereWithAggregatesInput | CareLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CareLog"> | string
    appointmentId?: StringWithAggregatesFilter<"CareLog"> | string
    patientId?: StringWithAggregatesFilter<"CareLog"> | string
    nurseId?: StringWithAggregatesFilter<"CareLog"> | string
    systolic?: IntNullableWithAggregatesFilter<"CareLog"> | number | null
    diastolic?: IntNullableWithAggregatesFilter<"CareLog"> | number | null
    bloodSugar?: FloatNullableWithAggregatesFilter<"CareLog"> | number | null
    cholesterol?: FloatNullableWithAggregatesFilter<"CareLog"> | number | null
    uricAcid?: FloatNullableWithAggregatesFilter<"CareLog"> | number | null
    woundCondition?: StringNullableWithAggregatesFilter<"CareLog"> | string | null
    moodScore?: IntNullableWithAggregatesFilter<"CareLog"> | number | null
    clinicalNotes?: StringNullableWithAggregatesFilter<"CareLog"> | string | null
    recordedAt?: DateTimeWithAggregatesFilter<"CareLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CareLog"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    notes?: StringFilter<"ActivityLog"> | string
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    updatedAt?: DateTimeFilter<"ActivityLog"> | Date | string
    careLogId?: StringFilter<"ActivityLog"> | string
    careLog?: XOR<CareLogScalarRelationFilter, CareLogWhereInput>
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    careLogId?: SortOrder
    careLog?: CareLogOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    notes?: StringFilter<"ActivityLog"> | string
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    updatedAt?: DateTimeFilter<"ActivityLog"> | Date | string
    careLogId?: StringFilter<"ActivityLog"> | string
    careLog?: XOR<CareLogScalarRelationFilter, CareLogWhereInput>
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    careLogId?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    notes?: StringWithAggregatesFilter<"ActivityLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
    careLogId?: StringWithAggregatesFilter<"ActivityLog"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientCreateNestedManyWithoutFamilyInput
    nurseProfile?: NurseProfileCreateNestedOneWithoutUserInput
    careLogs?: CareLogCreateNestedManyWithoutNurseInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutFamilyInput
    nurseProfile?: NurseProfileUncheckedCreateNestedOneWithoutUserInput
    careLogs?: CareLogUncheckedCreateNestedManyWithoutNurseInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUpdateManyWithoutFamilyNestedInput
    nurseProfile?: NurseProfileUpdateOneWithoutUserNestedInput
    careLogs?: CareLogUpdateManyWithoutNurseNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutFamilyNestedInput
    nurseProfile?: NurseProfileUncheckedUpdateOneWithoutUserNestedInput
    careLogs?: CareLogUncheckedUpdateManyWithoutNurseNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    id?: string
    name: string
    dateOfBirth: Date | string
    weight?: number | null
    height?: number | null
    medicalHistory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    family: UserCreateNestedOneWithoutPatientsInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    medicalLogs?: CareLogCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    familyId: string
    name: string
    dateOfBirth: Date | string
    weight?: number | null
    height?: number | null
    medicalHistory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    medicalLogs?: CareLogUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: UserUpdateOneRequiredWithoutPatientsNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    medicalLogs?: CareLogUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    familyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    medicalLogs?: CareLogUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    familyId: string
    name: string
    dateOfBirth: Date | string
    weight?: number | null
    height?: number | null
    medicalHistory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    familyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NurseProfileCreateInput = {
    id?: string
    specialization: string
    experienceYears: number
    rating?: number
    isVerified?: boolean
    user: UserCreateNestedOneWithoutNurseProfileInput
    appointments?: AppointmentCreateNestedManyWithoutNurseInput
  }

  export type NurseProfileUncheckedCreateInput = {
    id?: string
    userId: string
    specialization: string
    experienceYears: number
    rating?: number
    isVerified?: boolean
    appointments?: AppointmentUncheckedCreateNestedManyWithoutNurseInput
  }

  export type NurseProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    experienceYears?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutNurseProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutNurseNestedInput
  }

  export type NurseProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    experienceYears?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    appointments?: AppointmentUncheckedUpdateManyWithoutNurseNestedInput
  }

  export type NurseProfileCreateManyInput = {
    id?: string
    userId: string
    specialization: string
    experienceYears: number
    rating?: number
    isVerified?: boolean
  }

  export type NurseProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    experienceYears?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NurseProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    experienceYears?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AppointmentCreateInput = {
    id?: string
    serviceType: $Enums.ServiceType
    serviceName: $Enums.ServiceName
    status?: $Enums.AppointmentStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    nurse: NurseProfileCreateNestedOneWithoutAppointmentsInput
    careLogs?: CareLogCreateNestedManyWithoutAppointmentInput
    payments?: PaymentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    patientId: string
    nurseId: string
    serviceType: $Enums.ServiceType
    serviceName: $Enums.ServiceName
    status?: $Enums.AppointmentStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    careLogs?: CareLogUncheckedCreateNestedManyWithoutAppointmentInput
    payments?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    serviceName?: EnumServiceNameFieldUpdateOperationsInput | $Enums.ServiceName
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    nurse?: NurseProfileUpdateOneRequiredWithoutAppointmentsNestedInput
    careLogs?: CareLogUpdateManyWithoutAppointmentNestedInput
    payments?: PaymentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    nurseId?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    serviceName?: EnumServiceNameFieldUpdateOperationsInput | $Enums.ServiceName
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careLogs?: CareLogUncheckedUpdateManyWithoutAppointmentNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: string
    patientId: string
    nurseId: string
    serviceType: $Enums.ServiceType
    serviceName: $Enums.ServiceName
    status?: $Enums.AppointmentStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    serviceName?: EnumServiceNameFieldUpdateOperationsInput | $Enums.ServiceName
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    nurseId?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    serviceName?: EnumServiceNameFieldUpdateOperationsInput | $Enums.ServiceName
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    midtransOrderId: string
    amount: number
    status?: $Enums.PaymentStatus
    paymentMethod?: string | null
    snapToken?: string | null
    snapRedirectUrl?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    appointmentId: string
    midtransOrderId: string
    amount: number
    status?: $Enums.PaymentStatus
    paymentMethod?: string | null
    snapToken?: string | null
    snapRedirectUrl?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    midtransOrderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    snapRedirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    midtransOrderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    snapRedirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    appointmentId: string
    midtransOrderId: string
    amount: number
    status?: $Enums.PaymentStatus
    paymentMethod?: string | null
    snapToken?: string | null
    snapRedirectUrl?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    midtransOrderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    snapRedirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    midtransOrderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    snapRedirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareLogCreateInput = {
    id?: string
    systolic?: number | null
    diastolic?: number | null
    bloodSugar?: number | null
    cholesterol?: number | null
    uricAcid?: number | null
    woundCondition?: string | null
    moodScore?: number | null
    clinicalNotes?: string | null
    recordedAt?: Date | string
    updatedAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutCareLogsInput
    patient: PatientCreateNestedOneWithoutMedicalLogsInput
    nurse: UserCreateNestedOneWithoutCareLogsInput
    activityLog?: ActivityLogCreateNestedManyWithoutCareLogInput
  }

  export type CareLogUncheckedCreateInput = {
    id?: string
    appointmentId: string
    patientId: string
    nurseId: string
    systolic?: number | null
    diastolic?: number | null
    bloodSugar?: number | null
    cholesterol?: number | null
    uricAcid?: number | null
    woundCondition?: string | null
    moodScore?: number | null
    clinicalNotes?: string | null
    recordedAt?: Date | string
    updatedAt?: Date | string
    activityLog?: ActivityLogUncheckedCreateNestedManyWithoutCareLogInput
  }

  export type CareLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    systolic?: NullableIntFieldUpdateOperationsInput | number | null
    diastolic?: NullableIntFieldUpdateOperationsInput | number | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    uricAcid?: NullableFloatFieldUpdateOperationsInput | number | null
    woundCondition?: NullableStringFieldUpdateOperationsInput | string | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    clinicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutCareLogsNestedInput
    patient?: PatientUpdateOneRequiredWithoutMedicalLogsNestedInput
    nurse?: UserUpdateOneRequiredWithoutCareLogsNestedInput
    activityLog?: ActivityLogUpdateManyWithoutCareLogNestedInput
  }

  export type CareLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    nurseId?: StringFieldUpdateOperationsInput | string
    systolic?: NullableIntFieldUpdateOperationsInput | number | null
    diastolic?: NullableIntFieldUpdateOperationsInput | number | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    uricAcid?: NullableFloatFieldUpdateOperationsInput | number | null
    woundCondition?: NullableStringFieldUpdateOperationsInput | string | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    clinicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLog?: ActivityLogUncheckedUpdateManyWithoutCareLogNestedInput
  }

  export type CareLogCreateManyInput = {
    id?: string
    appointmentId: string
    patientId: string
    nurseId: string
    systolic?: number | null
    diastolic?: number | null
    bloodSugar?: number | null
    cholesterol?: number | null
    uricAcid?: number | null
    woundCondition?: string | null
    moodScore?: number | null
    clinicalNotes?: string | null
    recordedAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    systolic?: NullableIntFieldUpdateOperationsInput | number | null
    diastolic?: NullableIntFieldUpdateOperationsInput | number | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    uricAcid?: NullableFloatFieldUpdateOperationsInput | number | null
    woundCondition?: NullableStringFieldUpdateOperationsInput | string | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    clinicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    nurseId?: StringFieldUpdateOperationsInput | string
    systolic?: NullableIntFieldUpdateOperationsInput | number | null
    diastolic?: NullableIntFieldUpdateOperationsInput | number | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    uricAcid?: NullableFloatFieldUpdateOperationsInput | number | null
    woundCondition?: NullableStringFieldUpdateOperationsInput | string | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    clinicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    id?: string
    notes: string
    createdAt?: Date | string
    updatedAt?: Date | string
    careLog: CareLogCreateNestedOneWithoutActivityLogInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    notes: string
    createdAt?: Date | string
    updatedAt?: Date | string
    careLogId: string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careLog?: CareLogUpdateOneRequiredWithoutActivityLogNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careLogId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    notes: string
    createdAt?: Date | string
    updatedAt?: Date | string
    careLogId: string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careLogId?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type NurseProfileNullableScalarRelationFilter = {
    is?: NurseProfileWhereInput | null
    isNot?: NurseProfileWhereInput | null
  }

  export type CareLogListRelationFilter = {
    every?: CareLogWhereInput
    some?: CareLogWhereInput
    none?: CareLogWhereInput
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CareLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    familyId?: SortOrder
    name?: SortOrder
    dateOfBirth?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    medicalHistory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    weight?: SortOrder
    height?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    familyId?: SortOrder
    name?: SortOrder
    dateOfBirth?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    medicalHistory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    familyId?: SortOrder
    name?: SortOrder
    dateOfBirth?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    medicalHistory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    weight?: SortOrder
    height?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NurseProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    experienceYears?: SortOrder
    rating?: SortOrder
    isVerified?: SortOrder
  }

  export type NurseProfileAvgOrderByAggregateInput = {
    experienceYears?: SortOrder
    rating?: SortOrder
  }

  export type NurseProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    experienceYears?: SortOrder
    rating?: SortOrder
    isVerified?: SortOrder
  }

  export type NurseProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    experienceYears?: SortOrder
    rating?: SortOrder
    isVerified?: SortOrder
  }

  export type NurseProfileSumOrderByAggregateInput = {
    experienceYears?: SortOrder
    rating?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type EnumServiceNameFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceName | EnumServiceNameFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceName[] | ListEnumServiceNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceName[] | ListEnumServiceNameFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceNameFilter<$PrismaModel> | $Enums.ServiceName
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type NurseProfileScalarRelationFilter = {
    is?: NurseProfileWhereInput
    isNot?: NurseProfileWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    nurseId?: SortOrder
    serviceType?: SortOrder
    serviceName?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    nurseId?: SortOrder
    serviceType?: SortOrder
    serviceName?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    nurseId?: SortOrder
    serviceType?: SortOrder
    serviceName?: SortOrder
    status?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type EnumServiceNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceName | EnumServiceNameFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceName[] | ListEnumServiceNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceName[] | ListEnumServiceNameFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceNameWithAggregatesFilter<$PrismaModel> | $Enums.ServiceName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceNameFilter<$PrismaModel>
    _max?: NestedEnumServiceNameFilter<$PrismaModel>
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
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

  export type AppointmentScalarRelationFilter = {
    is?: AppointmentWhereInput
    isNot?: AppointmentWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    midtransOrderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    snapToken?: SortOrder
    snapRedirectUrl?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    midtransOrderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    snapToken?: SortOrder
    snapRedirectUrl?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    midtransOrderId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    snapToken?: SortOrder
    snapRedirectUrl?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
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

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CareLogCountOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    patientId?: SortOrder
    nurseId?: SortOrder
    systolic?: SortOrder
    diastolic?: SortOrder
    bloodSugar?: SortOrder
    cholesterol?: SortOrder
    uricAcid?: SortOrder
    woundCondition?: SortOrder
    moodScore?: SortOrder
    clinicalNotes?: SortOrder
    recordedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareLogAvgOrderByAggregateInput = {
    systolic?: SortOrder
    diastolic?: SortOrder
    bloodSugar?: SortOrder
    cholesterol?: SortOrder
    uricAcid?: SortOrder
    moodScore?: SortOrder
  }

  export type CareLogMaxOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    patientId?: SortOrder
    nurseId?: SortOrder
    systolic?: SortOrder
    diastolic?: SortOrder
    bloodSugar?: SortOrder
    cholesterol?: SortOrder
    uricAcid?: SortOrder
    woundCondition?: SortOrder
    moodScore?: SortOrder
    clinicalNotes?: SortOrder
    recordedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareLogMinOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    patientId?: SortOrder
    nurseId?: SortOrder
    systolic?: SortOrder
    diastolic?: SortOrder
    bloodSugar?: SortOrder
    cholesterol?: SortOrder
    uricAcid?: SortOrder
    woundCondition?: SortOrder
    moodScore?: SortOrder
    clinicalNotes?: SortOrder
    recordedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareLogSumOrderByAggregateInput = {
    systolic?: SortOrder
    diastolic?: SortOrder
    bloodSugar?: SortOrder
    cholesterol?: SortOrder
    uricAcid?: SortOrder
    moodScore?: SortOrder
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

  export type CareLogScalarRelationFilter = {
    is?: CareLogWhereInput
    isNot?: CareLogWhereInput
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    careLogId?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    careLogId?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    careLogId?: SortOrder
  }

  export type PatientCreateNestedManyWithoutFamilyInput = {
    create?: XOR<PatientCreateWithoutFamilyInput, PatientUncheckedCreateWithoutFamilyInput> | PatientCreateWithoutFamilyInput[] | PatientUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutFamilyInput | PatientCreateOrConnectWithoutFamilyInput[]
    createMany?: PatientCreateManyFamilyInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type NurseProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<NurseProfileCreateWithoutUserInput, NurseProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: NurseProfileCreateOrConnectWithoutUserInput
    connect?: NurseProfileWhereUniqueInput
  }

  export type CareLogCreateNestedManyWithoutNurseInput = {
    create?: XOR<CareLogCreateWithoutNurseInput, CareLogUncheckedCreateWithoutNurseInput> | CareLogCreateWithoutNurseInput[] | CareLogUncheckedCreateWithoutNurseInput[]
    connectOrCreate?: CareLogCreateOrConnectWithoutNurseInput | CareLogCreateOrConnectWithoutNurseInput[]
    createMany?: CareLogCreateManyNurseInputEnvelope
    connect?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutFamilyInput = {
    create?: XOR<PatientCreateWithoutFamilyInput, PatientUncheckedCreateWithoutFamilyInput> | PatientCreateWithoutFamilyInput[] | PatientUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutFamilyInput | PatientCreateOrConnectWithoutFamilyInput[]
    createMany?: PatientCreateManyFamilyInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type NurseProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<NurseProfileCreateWithoutUserInput, NurseProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: NurseProfileCreateOrConnectWithoutUserInput
    connect?: NurseProfileWhereUniqueInput
  }

  export type CareLogUncheckedCreateNestedManyWithoutNurseInput = {
    create?: XOR<CareLogCreateWithoutNurseInput, CareLogUncheckedCreateWithoutNurseInput> | CareLogCreateWithoutNurseInput[] | CareLogUncheckedCreateWithoutNurseInput[]
    connectOrCreate?: CareLogCreateOrConnectWithoutNurseInput | CareLogCreateOrConnectWithoutNurseInput[]
    createMany?: CareLogCreateManyNurseInputEnvelope
    connect?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PatientUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<PatientCreateWithoutFamilyInput, PatientUncheckedCreateWithoutFamilyInput> | PatientCreateWithoutFamilyInput[] | PatientUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutFamilyInput | PatientCreateOrConnectWithoutFamilyInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutFamilyInput | PatientUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: PatientCreateManyFamilyInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutFamilyInput | PatientUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutFamilyInput | PatientUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type NurseProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<NurseProfileCreateWithoutUserInput, NurseProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: NurseProfileCreateOrConnectWithoutUserInput
    upsert?: NurseProfileUpsertWithoutUserInput
    disconnect?: NurseProfileWhereInput | boolean
    delete?: NurseProfileWhereInput | boolean
    connect?: NurseProfileWhereUniqueInput
    update?: XOR<XOR<NurseProfileUpdateToOneWithWhereWithoutUserInput, NurseProfileUpdateWithoutUserInput>, NurseProfileUncheckedUpdateWithoutUserInput>
  }

  export type CareLogUpdateManyWithoutNurseNestedInput = {
    create?: XOR<CareLogCreateWithoutNurseInput, CareLogUncheckedCreateWithoutNurseInput> | CareLogCreateWithoutNurseInput[] | CareLogUncheckedCreateWithoutNurseInput[]
    connectOrCreate?: CareLogCreateOrConnectWithoutNurseInput | CareLogCreateOrConnectWithoutNurseInput[]
    upsert?: CareLogUpsertWithWhereUniqueWithoutNurseInput | CareLogUpsertWithWhereUniqueWithoutNurseInput[]
    createMany?: CareLogCreateManyNurseInputEnvelope
    set?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    disconnect?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    delete?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    connect?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    update?: CareLogUpdateWithWhereUniqueWithoutNurseInput | CareLogUpdateWithWhereUniqueWithoutNurseInput[]
    updateMany?: CareLogUpdateManyWithWhereWithoutNurseInput | CareLogUpdateManyWithWhereWithoutNurseInput[]
    deleteMany?: CareLogScalarWhereInput | CareLogScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<PatientCreateWithoutFamilyInput, PatientUncheckedCreateWithoutFamilyInput> | PatientCreateWithoutFamilyInput[] | PatientUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutFamilyInput | PatientCreateOrConnectWithoutFamilyInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutFamilyInput | PatientUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: PatientCreateManyFamilyInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutFamilyInput | PatientUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutFamilyInput | PatientUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type NurseProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<NurseProfileCreateWithoutUserInput, NurseProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: NurseProfileCreateOrConnectWithoutUserInput
    upsert?: NurseProfileUpsertWithoutUserInput
    disconnect?: NurseProfileWhereInput | boolean
    delete?: NurseProfileWhereInput | boolean
    connect?: NurseProfileWhereUniqueInput
    update?: XOR<XOR<NurseProfileUpdateToOneWithWhereWithoutUserInput, NurseProfileUpdateWithoutUserInput>, NurseProfileUncheckedUpdateWithoutUserInput>
  }

  export type CareLogUncheckedUpdateManyWithoutNurseNestedInput = {
    create?: XOR<CareLogCreateWithoutNurseInput, CareLogUncheckedCreateWithoutNurseInput> | CareLogCreateWithoutNurseInput[] | CareLogUncheckedCreateWithoutNurseInput[]
    connectOrCreate?: CareLogCreateOrConnectWithoutNurseInput | CareLogCreateOrConnectWithoutNurseInput[]
    upsert?: CareLogUpsertWithWhereUniqueWithoutNurseInput | CareLogUpsertWithWhereUniqueWithoutNurseInput[]
    createMany?: CareLogCreateManyNurseInputEnvelope
    set?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    disconnect?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    delete?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    connect?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    update?: CareLogUpdateWithWhereUniqueWithoutNurseInput | CareLogUpdateWithWhereUniqueWithoutNurseInput[]
    updateMany?: CareLogUpdateManyWithWhereWithoutNurseInput | CareLogUpdateManyWithWhereWithoutNurseInput[]
    deleteMany?: CareLogScalarWhereInput | CareLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPatientsInput = {
    create?: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientsInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type CareLogCreateNestedManyWithoutPatientInput = {
    create?: XOR<CareLogCreateWithoutPatientInput, CareLogUncheckedCreateWithoutPatientInput> | CareLogCreateWithoutPatientInput[] | CareLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: CareLogCreateOrConnectWithoutPatientInput | CareLogCreateOrConnectWithoutPatientInput[]
    createMany?: CareLogCreateManyPatientInputEnvelope
    connect?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type CareLogUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<CareLogCreateWithoutPatientInput, CareLogUncheckedCreateWithoutPatientInput> | CareLogCreateWithoutPatientInput[] | CareLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: CareLogCreateOrConnectWithoutPatientInput | CareLogCreateOrConnectWithoutPatientInput[]
    createMany?: CareLogCreateManyPatientInputEnvelope
    connect?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutPatientsNestedInput = {
    create?: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientsInput
    upsert?: UserUpsertWithoutPatientsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientsInput, UserUpdateWithoutPatientsInput>, UserUncheckedUpdateWithoutPatientsInput>
  }

  export type AppointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type CareLogUpdateManyWithoutPatientNestedInput = {
    create?: XOR<CareLogCreateWithoutPatientInput, CareLogUncheckedCreateWithoutPatientInput> | CareLogCreateWithoutPatientInput[] | CareLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: CareLogCreateOrConnectWithoutPatientInput | CareLogCreateOrConnectWithoutPatientInput[]
    upsert?: CareLogUpsertWithWhereUniqueWithoutPatientInput | CareLogUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: CareLogCreateManyPatientInputEnvelope
    set?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    disconnect?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    delete?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    connect?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    update?: CareLogUpdateWithWhereUniqueWithoutPatientInput | CareLogUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: CareLogUpdateManyWithWhereWithoutPatientInput | CareLogUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: CareLogScalarWhereInput | CareLogScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type CareLogUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<CareLogCreateWithoutPatientInput, CareLogUncheckedCreateWithoutPatientInput> | CareLogCreateWithoutPatientInput[] | CareLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: CareLogCreateOrConnectWithoutPatientInput | CareLogCreateOrConnectWithoutPatientInput[]
    upsert?: CareLogUpsertWithWhereUniqueWithoutPatientInput | CareLogUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: CareLogCreateManyPatientInputEnvelope
    set?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    disconnect?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    delete?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    connect?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    update?: CareLogUpdateWithWhereUniqueWithoutPatientInput | CareLogUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: CareLogUpdateManyWithWhereWithoutPatientInput | CareLogUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: CareLogScalarWhereInput | CareLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNurseProfileInput = {
    create?: XOR<UserCreateWithoutNurseProfileInput, UserUncheckedCreateWithoutNurseProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutNurseProfileInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutNurseInput = {
    create?: XOR<AppointmentCreateWithoutNurseInput, AppointmentUncheckedCreateWithoutNurseInput> | AppointmentCreateWithoutNurseInput[] | AppointmentUncheckedCreateWithoutNurseInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutNurseInput | AppointmentCreateOrConnectWithoutNurseInput[]
    createMany?: AppointmentCreateManyNurseInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutNurseInput = {
    create?: XOR<AppointmentCreateWithoutNurseInput, AppointmentUncheckedCreateWithoutNurseInput> | AppointmentCreateWithoutNurseInput[] | AppointmentUncheckedCreateWithoutNurseInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutNurseInput | AppointmentCreateOrConnectWithoutNurseInput[]
    createMany?: AppointmentCreateManyNurseInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNurseProfileNestedInput = {
    create?: XOR<UserCreateWithoutNurseProfileInput, UserUncheckedCreateWithoutNurseProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutNurseProfileInput
    upsert?: UserUpsertWithoutNurseProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNurseProfileInput, UserUpdateWithoutNurseProfileInput>, UserUncheckedUpdateWithoutNurseProfileInput>
  }

  export type AppointmentUpdateManyWithoutNurseNestedInput = {
    create?: XOR<AppointmentCreateWithoutNurseInput, AppointmentUncheckedCreateWithoutNurseInput> | AppointmentCreateWithoutNurseInput[] | AppointmentUncheckedCreateWithoutNurseInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutNurseInput | AppointmentCreateOrConnectWithoutNurseInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutNurseInput | AppointmentUpsertWithWhereUniqueWithoutNurseInput[]
    createMany?: AppointmentCreateManyNurseInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutNurseInput | AppointmentUpdateWithWhereUniqueWithoutNurseInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutNurseInput | AppointmentUpdateManyWithWhereWithoutNurseInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutNurseNestedInput = {
    create?: XOR<AppointmentCreateWithoutNurseInput, AppointmentUncheckedCreateWithoutNurseInput> | AppointmentCreateWithoutNurseInput[] | AppointmentUncheckedCreateWithoutNurseInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutNurseInput | AppointmentCreateOrConnectWithoutNurseInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutNurseInput | AppointmentUpsertWithWhereUniqueWithoutNurseInput[]
    createMany?: AppointmentCreateManyNurseInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutNurseInput | AppointmentUpdateWithWhereUniqueWithoutNurseInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutNurseInput | AppointmentUpdateManyWithWhereWithoutNurseInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
  }

  export type NurseProfileCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<NurseProfileCreateWithoutAppointmentsInput, NurseProfileUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: NurseProfileCreateOrConnectWithoutAppointmentsInput
    connect?: NurseProfileWhereUniqueInput
  }

  export type CareLogCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<CareLogCreateWithoutAppointmentInput, CareLogUncheckedCreateWithoutAppointmentInput> | CareLogCreateWithoutAppointmentInput[] | CareLogUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: CareLogCreateOrConnectWithoutAppointmentInput | CareLogCreateOrConnectWithoutAppointmentInput[]
    createMany?: CareLogCreateManyAppointmentInputEnvelope
    connect?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput> | PaymentCreateWithoutAppointmentInput[] | PaymentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput | PaymentCreateOrConnectWithoutAppointmentInput[]
    createMany?: PaymentCreateManyAppointmentInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type CareLogUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<CareLogCreateWithoutAppointmentInput, CareLogUncheckedCreateWithoutAppointmentInput> | CareLogCreateWithoutAppointmentInput[] | CareLogUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: CareLogCreateOrConnectWithoutAppointmentInput | CareLogCreateOrConnectWithoutAppointmentInput[]
    createMany?: CareLogCreateManyAppointmentInputEnvelope
    connect?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput> | PaymentCreateWithoutAppointmentInput[] | PaymentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput | PaymentCreateOrConnectWithoutAppointmentInput[]
    createMany?: PaymentCreateManyAppointmentInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumServiceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ServiceType
  }

  export type EnumServiceNameFieldUpdateOperationsInput = {
    set?: $Enums.ServiceName
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type PatientUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    upsert?: PatientUpsertWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAppointmentsInput, PatientUpdateWithoutAppointmentsInput>, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type NurseProfileUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<NurseProfileCreateWithoutAppointmentsInput, NurseProfileUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: NurseProfileCreateOrConnectWithoutAppointmentsInput
    upsert?: NurseProfileUpsertWithoutAppointmentsInput
    connect?: NurseProfileWhereUniqueInput
    update?: XOR<XOR<NurseProfileUpdateToOneWithWhereWithoutAppointmentsInput, NurseProfileUpdateWithoutAppointmentsInput>, NurseProfileUncheckedUpdateWithoutAppointmentsInput>
  }

  export type CareLogUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<CareLogCreateWithoutAppointmentInput, CareLogUncheckedCreateWithoutAppointmentInput> | CareLogCreateWithoutAppointmentInput[] | CareLogUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: CareLogCreateOrConnectWithoutAppointmentInput | CareLogCreateOrConnectWithoutAppointmentInput[]
    upsert?: CareLogUpsertWithWhereUniqueWithoutAppointmentInput | CareLogUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: CareLogCreateManyAppointmentInputEnvelope
    set?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    disconnect?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    delete?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    connect?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    update?: CareLogUpdateWithWhereUniqueWithoutAppointmentInput | CareLogUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: CareLogUpdateManyWithWhereWithoutAppointmentInput | CareLogUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: CareLogScalarWhereInput | CareLogScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput> | PaymentCreateWithoutAppointmentInput[] | PaymentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput | PaymentCreateOrConnectWithoutAppointmentInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutAppointmentInput | PaymentUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: PaymentCreateManyAppointmentInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutAppointmentInput | PaymentUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutAppointmentInput | PaymentUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type CareLogUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<CareLogCreateWithoutAppointmentInput, CareLogUncheckedCreateWithoutAppointmentInput> | CareLogCreateWithoutAppointmentInput[] | CareLogUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: CareLogCreateOrConnectWithoutAppointmentInput | CareLogCreateOrConnectWithoutAppointmentInput[]
    upsert?: CareLogUpsertWithWhereUniqueWithoutAppointmentInput | CareLogUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: CareLogCreateManyAppointmentInputEnvelope
    set?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    disconnect?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    delete?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    connect?: CareLogWhereUniqueInput | CareLogWhereUniqueInput[]
    update?: CareLogUpdateWithWhereUniqueWithoutAppointmentInput | CareLogUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: CareLogUpdateManyWithWhereWithoutAppointmentInput | CareLogUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: CareLogScalarWhereInput | CareLogScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput> | PaymentCreateWithoutAppointmentInput[] | PaymentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput | PaymentCreateOrConnectWithoutAppointmentInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutAppointmentInput | PaymentUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: PaymentCreateManyAppointmentInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutAppointmentInput | PaymentUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutAppointmentInput | PaymentUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type AppointmentCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<AppointmentCreateWithoutPaymentsInput, AppointmentUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutPaymentsInput
    connect?: AppointmentWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AppointmentUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<AppointmentCreateWithoutPaymentsInput, AppointmentUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutPaymentsInput
    upsert?: AppointmentUpsertWithoutPaymentsInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutPaymentsInput, AppointmentUpdateWithoutPaymentsInput>, AppointmentUncheckedUpdateWithoutPaymentsInput>
  }

  export type AppointmentCreateNestedOneWithoutCareLogsInput = {
    create?: XOR<AppointmentCreateWithoutCareLogsInput, AppointmentUncheckedCreateWithoutCareLogsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutCareLogsInput
    connect?: AppointmentWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutMedicalLogsInput = {
    create?: XOR<PatientCreateWithoutMedicalLogsInput, PatientUncheckedCreateWithoutMedicalLogsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicalLogsInput
    connect?: PatientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCareLogsInput = {
    create?: XOR<UserCreateWithoutCareLogsInput, UserUncheckedCreateWithoutCareLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCareLogsInput
    connect?: UserWhereUniqueInput
  }

  export type ActivityLogCreateNestedManyWithoutCareLogInput = {
    create?: XOR<ActivityLogCreateWithoutCareLogInput, ActivityLogUncheckedCreateWithoutCareLogInput> | ActivityLogCreateWithoutCareLogInput[] | ActivityLogUncheckedCreateWithoutCareLogInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutCareLogInput | ActivityLogCreateOrConnectWithoutCareLogInput[]
    createMany?: ActivityLogCreateManyCareLogInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutCareLogInput = {
    create?: XOR<ActivityLogCreateWithoutCareLogInput, ActivityLogUncheckedCreateWithoutCareLogInput> | ActivityLogCreateWithoutCareLogInput[] | ActivityLogUncheckedCreateWithoutCareLogInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutCareLogInput | ActivityLogCreateOrConnectWithoutCareLogInput[]
    createMany?: ActivityLogCreateManyCareLogInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppointmentUpdateOneRequiredWithoutCareLogsNestedInput = {
    create?: XOR<AppointmentCreateWithoutCareLogsInput, AppointmentUncheckedCreateWithoutCareLogsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutCareLogsInput
    upsert?: AppointmentUpsertWithoutCareLogsInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutCareLogsInput, AppointmentUpdateWithoutCareLogsInput>, AppointmentUncheckedUpdateWithoutCareLogsInput>
  }

  export type PatientUpdateOneRequiredWithoutMedicalLogsNestedInput = {
    create?: XOR<PatientCreateWithoutMedicalLogsInput, PatientUncheckedCreateWithoutMedicalLogsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicalLogsInput
    upsert?: PatientUpsertWithoutMedicalLogsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutMedicalLogsInput, PatientUpdateWithoutMedicalLogsInput>, PatientUncheckedUpdateWithoutMedicalLogsInput>
  }

  export type UserUpdateOneRequiredWithoutCareLogsNestedInput = {
    create?: XOR<UserCreateWithoutCareLogsInput, UserUncheckedCreateWithoutCareLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCareLogsInput
    upsert?: UserUpsertWithoutCareLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCareLogsInput, UserUpdateWithoutCareLogsInput>, UserUncheckedUpdateWithoutCareLogsInput>
  }

  export type ActivityLogUpdateManyWithoutCareLogNestedInput = {
    create?: XOR<ActivityLogCreateWithoutCareLogInput, ActivityLogUncheckedCreateWithoutCareLogInput> | ActivityLogCreateWithoutCareLogInput[] | ActivityLogUncheckedCreateWithoutCareLogInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutCareLogInput | ActivityLogCreateOrConnectWithoutCareLogInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutCareLogInput | ActivityLogUpsertWithWhereUniqueWithoutCareLogInput[]
    createMany?: ActivityLogCreateManyCareLogInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutCareLogInput | ActivityLogUpdateWithWhereUniqueWithoutCareLogInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutCareLogInput | ActivityLogUpdateManyWithWhereWithoutCareLogInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutCareLogNestedInput = {
    create?: XOR<ActivityLogCreateWithoutCareLogInput, ActivityLogUncheckedCreateWithoutCareLogInput> | ActivityLogCreateWithoutCareLogInput[] | ActivityLogUncheckedCreateWithoutCareLogInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutCareLogInput | ActivityLogCreateOrConnectWithoutCareLogInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutCareLogInput | ActivityLogUpsertWithWhereUniqueWithoutCareLogInput[]
    createMany?: ActivityLogCreateManyCareLogInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutCareLogInput | ActivityLogUpdateWithWhereUniqueWithoutCareLogInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutCareLogInput | ActivityLogUpdateManyWithWhereWithoutCareLogInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type CareLogCreateNestedOneWithoutActivityLogInput = {
    create?: XOR<CareLogCreateWithoutActivityLogInput, CareLogUncheckedCreateWithoutActivityLogInput>
    connectOrCreate?: CareLogCreateOrConnectWithoutActivityLogInput
    connect?: CareLogWhereUniqueInput
  }

  export type CareLogUpdateOneRequiredWithoutActivityLogNestedInput = {
    create?: XOR<CareLogCreateWithoutActivityLogInput, CareLogUncheckedCreateWithoutActivityLogInput>
    connectOrCreate?: CareLogCreateOrConnectWithoutActivityLogInput
    upsert?: CareLogUpsertWithoutActivityLogInput
    connect?: CareLogWhereUniqueInput
    update?: XOR<XOR<CareLogUpdateToOneWithWhereWithoutActivityLogInput, CareLogUpdateWithoutActivityLogInput>, CareLogUncheckedUpdateWithoutActivityLogInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type NestedEnumServiceNameFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceName | EnumServiceNameFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceName[] | ListEnumServiceNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceName[] | ListEnumServiceNameFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceNameFilter<$PrismaModel> | $Enums.ServiceName
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type NestedEnumServiceNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceName | EnumServiceNameFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceName[] | ListEnumServiceNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceName[] | ListEnumServiceNameFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceNameWithAggregatesFilter<$PrismaModel> | $Enums.ServiceName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceNameFilter<$PrismaModel>
    _max?: NestedEnumServiceNameFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
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

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
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

  export type PatientCreateWithoutFamilyInput = {
    id?: string
    name: string
    dateOfBirth: Date | string
    weight?: number | null
    height?: number | null
    medicalHistory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    medicalLogs?: CareLogCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutFamilyInput = {
    id?: string
    name: string
    dateOfBirth: Date | string
    weight?: number | null
    height?: number | null
    medicalHistory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    medicalLogs?: CareLogUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutFamilyInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutFamilyInput, PatientUncheckedCreateWithoutFamilyInput>
  }

  export type PatientCreateManyFamilyInputEnvelope = {
    data: PatientCreateManyFamilyInput | PatientCreateManyFamilyInput[]
    skipDuplicates?: boolean
  }

  export type NurseProfileCreateWithoutUserInput = {
    id?: string
    specialization: string
    experienceYears: number
    rating?: number
    isVerified?: boolean
    appointments?: AppointmentCreateNestedManyWithoutNurseInput
  }

  export type NurseProfileUncheckedCreateWithoutUserInput = {
    id?: string
    specialization: string
    experienceYears: number
    rating?: number
    isVerified?: boolean
    appointments?: AppointmentUncheckedCreateNestedManyWithoutNurseInput
  }

  export type NurseProfileCreateOrConnectWithoutUserInput = {
    where: NurseProfileWhereUniqueInput
    create: XOR<NurseProfileCreateWithoutUserInput, NurseProfileUncheckedCreateWithoutUserInput>
  }

  export type CareLogCreateWithoutNurseInput = {
    id?: string
    systolic?: number | null
    diastolic?: number | null
    bloodSugar?: number | null
    cholesterol?: number | null
    uricAcid?: number | null
    woundCondition?: string | null
    moodScore?: number | null
    clinicalNotes?: string | null
    recordedAt?: Date | string
    updatedAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutCareLogsInput
    patient: PatientCreateNestedOneWithoutMedicalLogsInput
    activityLog?: ActivityLogCreateNestedManyWithoutCareLogInput
  }

  export type CareLogUncheckedCreateWithoutNurseInput = {
    id?: string
    appointmentId: string
    patientId: string
    systolic?: number | null
    diastolic?: number | null
    bloodSugar?: number | null
    cholesterol?: number | null
    uricAcid?: number | null
    woundCondition?: string | null
    moodScore?: number | null
    clinicalNotes?: string | null
    recordedAt?: Date | string
    updatedAt?: Date | string
    activityLog?: ActivityLogUncheckedCreateNestedManyWithoutCareLogInput
  }

  export type CareLogCreateOrConnectWithoutNurseInput = {
    where: CareLogWhereUniqueInput
    create: XOR<CareLogCreateWithoutNurseInput, CareLogUncheckedCreateWithoutNurseInput>
  }

  export type CareLogCreateManyNurseInputEnvelope = {
    data: CareLogCreateManyNurseInput | CareLogCreateManyNurseInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithWhereUniqueWithoutFamilyInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutFamilyInput, PatientUncheckedUpdateWithoutFamilyInput>
    create: XOR<PatientCreateWithoutFamilyInput, PatientUncheckedCreateWithoutFamilyInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutFamilyInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutFamilyInput, PatientUncheckedUpdateWithoutFamilyInput>
  }

  export type PatientUpdateManyWithWhereWithoutFamilyInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutFamilyInput>
  }

  export type PatientScalarWhereInput = {
    AND?: PatientScalarWhereInput | PatientScalarWhereInput[]
    OR?: PatientScalarWhereInput[]
    NOT?: PatientScalarWhereInput | PatientScalarWhereInput[]
    id?: StringFilter<"Patient"> | string
    familyId?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeFilter<"Patient"> | Date | string
    weight?: FloatNullableFilter<"Patient"> | number | null
    height?: FloatNullableFilter<"Patient"> | number | null
    medicalHistory?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
  }

  export type NurseProfileUpsertWithoutUserInput = {
    update: XOR<NurseProfileUpdateWithoutUserInput, NurseProfileUncheckedUpdateWithoutUserInput>
    create: XOR<NurseProfileCreateWithoutUserInput, NurseProfileUncheckedCreateWithoutUserInput>
    where?: NurseProfileWhereInput
  }

  export type NurseProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: NurseProfileWhereInput
    data: XOR<NurseProfileUpdateWithoutUserInput, NurseProfileUncheckedUpdateWithoutUserInput>
  }

  export type NurseProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    experienceYears?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    appointments?: AppointmentUpdateManyWithoutNurseNestedInput
  }

  export type NurseProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    experienceYears?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    appointments?: AppointmentUncheckedUpdateManyWithoutNurseNestedInput
  }

  export type CareLogUpsertWithWhereUniqueWithoutNurseInput = {
    where: CareLogWhereUniqueInput
    update: XOR<CareLogUpdateWithoutNurseInput, CareLogUncheckedUpdateWithoutNurseInput>
    create: XOR<CareLogCreateWithoutNurseInput, CareLogUncheckedCreateWithoutNurseInput>
  }

  export type CareLogUpdateWithWhereUniqueWithoutNurseInput = {
    where: CareLogWhereUniqueInput
    data: XOR<CareLogUpdateWithoutNurseInput, CareLogUncheckedUpdateWithoutNurseInput>
  }

  export type CareLogUpdateManyWithWhereWithoutNurseInput = {
    where: CareLogScalarWhereInput
    data: XOR<CareLogUpdateManyMutationInput, CareLogUncheckedUpdateManyWithoutNurseInput>
  }

  export type CareLogScalarWhereInput = {
    AND?: CareLogScalarWhereInput | CareLogScalarWhereInput[]
    OR?: CareLogScalarWhereInput[]
    NOT?: CareLogScalarWhereInput | CareLogScalarWhereInput[]
    id?: StringFilter<"CareLog"> | string
    appointmentId?: StringFilter<"CareLog"> | string
    patientId?: StringFilter<"CareLog"> | string
    nurseId?: StringFilter<"CareLog"> | string
    systolic?: IntNullableFilter<"CareLog"> | number | null
    diastolic?: IntNullableFilter<"CareLog"> | number | null
    bloodSugar?: FloatNullableFilter<"CareLog"> | number | null
    cholesterol?: FloatNullableFilter<"CareLog"> | number | null
    uricAcid?: FloatNullableFilter<"CareLog"> | number | null
    woundCondition?: StringNullableFilter<"CareLog"> | string | null
    moodScore?: IntNullableFilter<"CareLog"> | number | null
    clinicalNotes?: StringNullableFilter<"CareLog"> | string | null
    recordedAt?: DateTimeFilter<"CareLog"> | Date | string
    updatedAt?: DateTimeFilter<"CareLog"> | Date | string
  }

  export type UserCreateWithoutPatientsInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    nurseProfile?: NurseProfileCreateNestedOneWithoutUserInput
    careLogs?: CareLogCreateNestedManyWithoutNurseInput
  }

  export type UserUncheckedCreateWithoutPatientsInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    nurseProfile?: NurseProfileUncheckedCreateNestedOneWithoutUserInput
    careLogs?: CareLogUncheckedCreateNestedManyWithoutNurseInput
  }

  export type UserCreateOrConnectWithoutPatientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
  }

  export type AppointmentCreateWithoutPatientInput = {
    id?: string
    serviceType: $Enums.ServiceType
    serviceName: $Enums.ServiceName
    status?: $Enums.AppointmentStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    nurse: NurseProfileCreateNestedOneWithoutAppointmentsInput
    careLogs?: CareLogCreateNestedManyWithoutAppointmentInput
    payments?: PaymentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutPatientInput = {
    id?: string
    nurseId: string
    serviceType: $Enums.ServiceType
    serviceName: $Enums.ServiceName
    status?: $Enums.AppointmentStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    careLogs?: CareLogUncheckedCreateNestedManyWithoutAppointmentInput
    payments?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentCreateManyPatientInputEnvelope = {
    data: AppointmentCreateManyPatientInput | AppointmentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type CareLogCreateWithoutPatientInput = {
    id?: string
    systolic?: number | null
    diastolic?: number | null
    bloodSugar?: number | null
    cholesterol?: number | null
    uricAcid?: number | null
    woundCondition?: string | null
    moodScore?: number | null
    clinicalNotes?: string | null
    recordedAt?: Date | string
    updatedAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutCareLogsInput
    nurse: UserCreateNestedOneWithoutCareLogsInput
    activityLog?: ActivityLogCreateNestedManyWithoutCareLogInput
  }

  export type CareLogUncheckedCreateWithoutPatientInput = {
    id?: string
    appointmentId: string
    nurseId: string
    systolic?: number | null
    diastolic?: number | null
    bloodSugar?: number | null
    cholesterol?: number | null
    uricAcid?: number | null
    woundCondition?: string | null
    moodScore?: number | null
    clinicalNotes?: string | null
    recordedAt?: Date | string
    updatedAt?: Date | string
    activityLog?: ActivityLogUncheckedCreateNestedManyWithoutCareLogInput
  }

  export type CareLogCreateOrConnectWithoutPatientInput = {
    where: CareLogWhereUniqueInput
    create: XOR<CareLogCreateWithoutPatientInput, CareLogUncheckedCreateWithoutPatientInput>
  }

  export type CareLogCreateManyPatientInputEnvelope = {
    data: CareLogCreateManyPatientInput | CareLogCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPatientsInput = {
    update: XOR<UserUpdateWithoutPatientsInput, UserUncheckedUpdateWithoutPatientsInput>
    create: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientsInput, UserUncheckedUpdateWithoutPatientsInput>
  }

  export type UserUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nurseProfile?: NurseProfileUpdateOneWithoutUserNestedInput
    careLogs?: CareLogUpdateManyWithoutNurseNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nurseProfile?: NurseProfileUncheckedUpdateOneWithoutUserNestedInput
    careLogs?: CareLogUncheckedUpdateManyWithoutNurseNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    patientId?: StringFilter<"Appointment"> | string
    nurseId?: StringFilter<"Appointment"> | string
    serviceType?: EnumServiceTypeFilter<"Appointment"> | $Enums.ServiceType
    serviceName?: EnumServiceNameFilter<"Appointment"> | $Enums.ServiceName
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    dueDate?: DateTimeFilter<"Appointment"> | Date | string
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type CareLogUpsertWithWhereUniqueWithoutPatientInput = {
    where: CareLogWhereUniqueInput
    update: XOR<CareLogUpdateWithoutPatientInput, CareLogUncheckedUpdateWithoutPatientInput>
    create: XOR<CareLogCreateWithoutPatientInput, CareLogUncheckedCreateWithoutPatientInput>
  }

  export type CareLogUpdateWithWhereUniqueWithoutPatientInput = {
    where: CareLogWhereUniqueInput
    data: XOR<CareLogUpdateWithoutPatientInput, CareLogUncheckedUpdateWithoutPatientInput>
  }

  export type CareLogUpdateManyWithWhereWithoutPatientInput = {
    where: CareLogScalarWhereInput
    data: XOR<CareLogUpdateManyMutationInput, CareLogUncheckedUpdateManyWithoutPatientInput>
  }

  export type UserCreateWithoutNurseProfileInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientCreateNestedManyWithoutFamilyInput
    careLogs?: CareLogCreateNestedManyWithoutNurseInput
  }

  export type UserUncheckedCreateWithoutNurseProfileInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutFamilyInput
    careLogs?: CareLogUncheckedCreateNestedManyWithoutNurseInput
  }

  export type UserCreateOrConnectWithoutNurseProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNurseProfileInput, UserUncheckedCreateWithoutNurseProfileInput>
  }

  export type AppointmentCreateWithoutNurseInput = {
    id?: string
    serviceType: $Enums.ServiceType
    serviceName: $Enums.ServiceName
    status?: $Enums.AppointmentStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    careLogs?: CareLogCreateNestedManyWithoutAppointmentInput
    payments?: PaymentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutNurseInput = {
    id?: string
    patientId: string
    serviceType: $Enums.ServiceType
    serviceName: $Enums.ServiceName
    status?: $Enums.AppointmentStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    careLogs?: CareLogUncheckedCreateNestedManyWithoutAppointmentInput
    payments?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutNurseInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutNurseInput, AppointmentUncheckedCreateWithoutNurseInput>
  }

  export type AppointmentCreateManyNurseInputEnvelope = {
    data: AppointmentCreateManyNurseInput | AppointmentCreateManyNurseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNurseProfileInput = {
    update: XOR<UserUpdateWithoutNurseProfileInput, UserUncheckedUpdateWithoutNurseProfileInput>
    create: XOR<UserCreateWithoutNurseProfileInput, UserUncheckedCreateWithoutNurseProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNurseProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNurseProfileInput, UserUncheckedUpdateWithoutNurseProfileInput>
  }

  export type UserUpdateWithoutNurseProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUpdateManyWithoutFamilyNestedInput
    careLogs?: CareLogUpdateManyWithoutNurseNestedInput
  }

  export type UserUncheckedUpdateWithoutNurseProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutFamilyNestedInput
    careLogs?: CareLogUncheckedUpdateManyWithoutNurseNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutNurseInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutNurseInput, AppointmentUncheckedUpdateWithoutNurseInput>
    create: XOR<AppointmentCreateWithoutNurseInput, AppointmentUncheckedCreateWithoutNurseInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutNurseInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutNurseInput, AppointmentUncheckedUpdateWithoutNurseInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutNurseInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutNurseInput>
  }

  export type PatientCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    dateOfBirth: Date | string
    weight?: number | null
    height?: number | null
    medicalHistory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    family: UserCreateNestedOneWithoutPatientsInput
    medicalLogs?: CareLogCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    familyId: string
    name: string
    dateOfBirth: Date | string
    weight?: number | null
    height?: number | null
    medicalHistory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicalLogs?: CareLogUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAppointmentsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
  }

  export type NurseProfileCreateWithoutAppointmentsInput = {
    id?: string
    specialization: string
    experienceYears: number
    rating?: number
    isVerified?: boolean
    user: UserCreateNestedOneWithoutNurseProfileInput
  }

  export type NurseProfileUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    userId: string
    specialization: string
    experienceYears: number
    rating?: number
    isVerified?: boolean
  }

  export type NurseProfileCreateOrConnectWithoutAppointmentsInput = {
    where: NurseProfileWhereUniqueInput
    create: XOR<NurseProfileCreateWithoutAppointmentsInput, NurseProfileUncheckedCreateWithoutAppointmentsInput>
  }

  export type CareLogCreateWithoutAppointmentInput = {
    id?: string
    systolic?: number | null
    diastolic?: number | null
    bloodSugar?: number | null
    cholesterol?: number | null
    uricAcid?: number | null
    woundCondition?: string | null
    moodScore?: number | null
    clinicalNotes?: string | null
    recordedAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicalLogsInput
    nurse: UserCreateNestedOneWithoutCareLogsInput
    activityLog?: ActivityLogCreateNestedManyWithoutCareLogInput
  }

  export type CareLogUncheckedCreateWithoutAppointmentInput = {
    id?: string
    patientId: string
    nurseId: string
    systolic?: number | null
    diastolic?: number | null
    bloodSugar?: number | null
    cholesterol?: number | null
    uricAcid?: number | null
    woundCondition?: string | null
    moodScore?: number | null
    clinicalNotes?: string | null
    recordedAt?: Date | string
    updatedAt?: Date | string
    activityLog?: ActivityLogUncheckedCreateNestedManyWithoutCareLogInput
  }

  export type CareLogCreateOrConnectWithoutAppointmentInput = {
    where: CareLogWhereUniqueInput
    create: XOR<CareLogCreateWithoutAppointmentInput, CareLogUncheckedCreateWithoutAppointmentInput>
  }

  export type CareLogCreateManyAppointmentInputEnvelope = {
    data: CareLogCreateManyAppointmentInput | CareLogCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutAppointmentInput = {
    id?: string
    midtransOrderId: string
    amount: number
    status?: $Enums.PaymentStatus
    paymentMethod?: string | null
    snapToken?: string | null
    snapRedirectUrl?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutAppointmentInput = {
    id?: string
    midtransOrderId: string
    amount: number
    status?: $Enums.PaymentStatus
    paymentMethod?: string | null
    snapToken?: string | null
    snapRedirectUrl?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutAppointmentInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput>
  }

  export type PaymentCreateManyAppointmentInputEnvelope = {
    data: PaymentCreateManyAppointmentInput | PaymentCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutAppointmentsInput = {
    update: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: UserUpdateOneRequiredWithoutPatientsNestedInput
    medicalLogs?: CareLogUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    familyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalLogs?: CareLogUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type NurseProfileUpsertWithoutAppointmentsInput = {
    update: XOR<NurseProfileUpdateWithoutAppointmentsInput, NurseProfileUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<NurseProfileCreateWithoutAppointmentsInput, NurseProfileUncheckedCreateWithoutAppointmentsInput>
    where?: NurseProfileWhereInput
  }

  export type NurseProfileUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: NurseProfileWhereInput
    data: XOR<NurseProfileUpdateWithoutAppointmentsInput, NurseProfileUncheckedUpdateWithoutAppointmentsInput>
  }

  export type NurseProfileUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    experienceYears?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutNurseProfileNestedInput
  }

  export type NurseProfileUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    experienceYears?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CareLogUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: CareLogWhereUniqueInput
    update: XOR<CareLogUpdateWithoutAppointmentInput, CareLogUncheckedUpdateWithoutAppointmentInput>
    create: XOR<CareLogCreateWithoutAppointmentInput, CareLogUncheckedCreateWithoutAppointmentInput>
  }

  export type CareLogUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: CareLogWhereUniqueInput
    data: XOR<CareLogUpdateWithoutAppointmentInput, CareLogUncheckedUpdateWithoutAppointmentInput>
  }

  export type CareLogUpdateManyWithWhereWithoutAppointmentInput = {
    where: CareLogScalarWhereInput
    data: XOR<CareLogUpdateManyMutationInput, CareLogUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutAppointmentInput, PaymentUncheckedUpdateWithoutAppointmentInput>
    create: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutAppointmentInput, PaymentUncheckedUpdateWithoutAppointmentInput>
  }

  export type PaymentUpdateManyWithWhereWithoutAppointmentInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    appointmentId?: StringFilter<"Payment"> | string
    midtransOrderId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    snapToken?: StringNullableFilter<"Payment"> | string | null
    snapRedirectUrl?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type AppointmentCreateWithoutPaymentsInput = {
    id?: string
    serviceType: $Enums.ServiceType
    serviceName: $Enums.ServiceName
    status?: $Enums.AppointmentStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    nurse: NurseProfileCreateNestedOneWithoutAppointmentsInput
    careLogs?: CareLogCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutPaymentsInput = {
    id?: string
    patientId: string
    nurseId: string
    serviceType: $Enums.ServiceType
    serviceName: $Enums.ServiceName
    status?: $Enums.AppointmentStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    careLogs?: CareLogUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutPaymentsInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPaymentsInput, AppointmentUncheckedCreateWithoutPaymentsInput>
  }

  export type AppointmentUpsertWithoutPaymentsInput = {
    update: XOR<AppointmentUpdateWithoutPaymentsInput, AppointmentUncheckedUpdateWithoutPaymentsInput>
    create: XOR<AppointmentCreateWithoutPaymentsInput, AppointmentUncheckedCreateWithoutPaymentsInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutPaymentsInput, AppointmentUncheckedUpdateWithoutPaymentsInput>
  }

  export type AppointmentUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    serviceName?: EnumServiceNameFieldUpdateOperationsInput | $Enums.ServiceName
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    nurse?: NurseProfileUpdateOneRequiredWithoutAppointmentsNestedInput
    careLogs?: CareLogUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    nurseId?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    serviceName?: EnumServiceNameFieldUpdateOperationsInput | $Enums.ServiceName
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careLogs?: CareLogUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentCreateWithoutCareLogsInput = {
    id?: string
    serviceType: $Enums.ServiceType
    serviceName: $Enums.ServiceName
    status?: $Enums.AppointmentStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    nurse: NurseProfileCreateNestedOneWithoutAppointmentsInput
    payments?: PaymentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutCareLogsInput = {
    id?: string
    patientId: string
    nurseId: string
    serviceType: $Enums.ServiceType
    serviceName: $Enums.ServiceName
    status?: $Enums.AppointmentStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutCareLogsInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutCareLogsInput, AppointmentUncheckedCreateWithoutCareLogsInput>
  }

  export type PatientCreateWithoutMedicalLogsInput = {
    id?: string
    name: string
    dateOfBirth: Date | string
    weight?: number | null
    height?: number | null
    medicalHistory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    family: UserCreateNestedOneWithoutPatientsInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutMedicalLogsInput = {
    id?: string
    familyId: string
    name: string
    dateOfBirth: Date | string
    weight?: number | null
    height?: number | null
    medicalHistory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutMedicalLogsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutMedicalLogsInput, PatientUncheckedCreateWithoutMedicalLogsInput>
  }

  export type UserCreateWithoutCareLogsInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientCreateNestedManyWithoutFamilyInput
    nurseProfile?: NurseProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCareLogsInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    phoneNumber: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutFamilyInput
    nurseProfile?: NurseProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCareLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCareLogsInput, UserUncheckedCreateWithoutCareLogsInput>
  }

  export type ActivityLogCreateWithoutCareLogInput = {
    id?: string
    notes: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutCareLogInput = {
    id?: string
    notes: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutCareLogInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutCareLogInput, ActivityLogUncheckedCreateWithoutCareLogInput>
  }

  export type ActivityLogCreateManyCareLogInputEnvelope = {
    data: ActivityLogCreateManyCareLogInput | ActivityLogCreateManyCareLogInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithoutCareLogsInput = {
    update: XOR<AppointmentUpdateWithoutCareLogsInput, AppointmentUncheckedUpdateWithoutCareLogsInput>
    create: XOR<AppointmentCreateWithoutCareLogsInput, AppointmentUncheckedCreateWithoutCareLogsInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutCareLogsInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutCareLogsInput, AppointmentUncheckedUpdateWithoutCareLogsInput>
  }

  export type AppointmentUpdateWithoutCareLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    serviceName?: EnumServiceNameFieldUpdateOperationsInput | $Enums.ServiceName
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    nurse?: NurseProfileUpdateOneRequiredWithoutAppointmentsNestedInput
    payments?: PaymentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutCareLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    nurseId?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    serviceName?: EnumServiceNameFieldUpdateOperationsInput | $Enums.ServiceName
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type PatientUpsertWithoutMedicalLogsInput = {
    update: XOR<PatientUpdateWithoutMedicalLogsInput, PatientUncheckedUpdateWithoutMedicalLogsInput>
    create: XOR<PatientCreateWithoutMedicalLogsInput, PatientUncheckedCreateWithoutMedicalLogsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutMedicalLogsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutMedicalLogsInput, PatientUncheckedUpdateWithoutMedicalLogsInput>
  }

  export type PatientUpdateWithoutMedicalLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: UserUpdateOneRequiredWithoutPatientsNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutMedicalLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    familyId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserUpsertWithoutCareLogsInput = {
    update: XOR<UserUpdateWithoutCareLogsInput, UserUncheckedUpdateWithoutCareLogsInput>
    create: XOR<UserCreateWithoutCareLogsInput, UserUncheckedCreateWithoutCareLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCareLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCareLogsInput, UserUncheckedUpdateWithoutCareLogsInput>
  }

  export type UserUpdateWithoutCareLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUpdateManyWithoutFamilyNestedInput
    nurseProfile?: NurseProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCareLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutFamilyNestedInput
    nurseProfile?: NurseProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutCareLogInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutCareLogInput, ActivityLogUncheckedUpdateWithoutCareLogInput>
    create: XOR<ActivityLogCreateWithoutCareLogInput, ActivityLogUncheckedCreateWithoutCareLogInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutCareLogInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutCareLogInput, ActivityLogUncheckedUpdateWithoutCareLogInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutCareLogInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutCareLogInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    notes?: StringFilter<"ActivityLog"> | string
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    updatedAt?: DateTimeFilter<"ActivityLog"> | Date | string
    careLogId?: StringFilter<"ActivityLog"> | string
  }

  export type CareLogCreateWithoutActivityLogInput = {
    id?: string
    systolic?: number | null
    diastolic?: number | null
    bloodSugar?: number | null
    cholesterol?: number | null
    uricAcid?: number | null
    woundCondition?: string | null
    moodScore?: number | null
    clinicalNotes?: string | null
    recordedAt?: Date | string
    updatedAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutCareLogsInput
    patient: PatientCreateNestedOneWithoutMedicalLogsInput
    nurse: UserCreateNestedOneWithoutCareLogsInput
  }

  export type CareLogUncheckedCreateWithoutActivityLogInput = {
    id?: string
    appointmentId: string
    patientId: string
    nurseId: string
    systolic?: number | null
    diastolic?: number | null
    bloodSugar?: number | null
    cholesterol?: number | null
    uricAcid?: number | null
    woundCondition?: string | null
    moodScore?: number | null
    clinicalNotes?: string | null
    recordedAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareLogCreateOrConnectWithoutActivityLogInput = {
    where: CareLogWhereUniqueInput
    create: XOR<CareLogCreateWithoutActivityLogInput, CareLogUncheckedCreateWithoutActivityLogInput>
  }

  export type CareLogUpsertWithoutActivityLogInput = {
    update: XOR<CareLogUpdateWithoutActivityLogInput, CareLogUncheckedUpdateWithoutActivityLogInput>
    create: XOR<CareLogCreateWithoutActivityLogInput, CareLogUncheckedCreateWithoutActivityLogInput>
    where?: CareLogWhereInput
  }

  export type CareLogUpdateToOneWithWhereWithoutActivityLogInput = {
    where?: CareLogWhereInput
    data: XOR<CareLogUpdateWithoutActivityLogInput, CareLogUncheckedUpdateWithoutActivityLogInput>
  }

  export type CareLogUpdateWithoutActivityLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    systolic?: NullableIntFieldUpdateOperationsInput | number | null
    diastolic?: NullableIntFieldUpdateOperationsInput | number | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    uricAcid?: NullableFloatFieldUpdateOperationsInput | number | null
    woundCondition?: NullableStringFieldUpdateOperationsInput | string | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    clinicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutCareLogsNestedInput
    patient?: PatientUpdateOneRequiredWithoutMedicalLogsNestedInput
    nurse?: UserUpdateOneRequiredWithoutCareLogsNestedInput
  }

  export type CareLogUncheckedUpdateWithoutActivityLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    nurseId?: StringFieldUpdateOperationsInput | string
    systolic?: NullableIntFieldUpdateOperationsInput | number | null
    diastolic?: NullableIntFieldUpdateOperationsInput | number | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    uricAcid?: NullableFloatFieldUpdateOperationsInput | number | null
    woundCondition?: NullableStringFieldUpdateOperationsInput | string | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    clinicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateManyFamilyInput = {
    id?: string
    name: string
    dateOfBirth: Date | string
    weight?: number | null
    height?: number | null
    medicalHistory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareLogCreateManyNurseInput = {
    id?: string
    appointmentId: string
    patientId: string
    systolic?: number | null
    diastolic?: number | null
    bloodSugar?: number | null
    cholesterol?: number | null
    uricAcid?: number | null
    woundCondition?: string | null
    moodScore?: number | null
    clinicalNotes?: string | null
    recordedAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    medicalLogs?: CareLogUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    medicalLogs?: CareLogUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareLogUpdateWithoutNurseInput = {
    id?: StringFieldUpdateOperationsInput | string
    systolic?: NullableIntFieldUpdateOperationsInput | number | null
    diastolic?: NullableIntFieldUpdateOperationsInput | number | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    uricAcid?: NullableFloatFieldUpdateOperationsInput | number | null
    woundCondition?: NullableStringFieldUpdateOperationsInput | string | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    clinicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutCareLogsNestedInput
    patient?: PatientUpdateOneRequiredWithoutMedicalLogsNestedInput
    activityLog?: ActivityLogUpdateManyWithoutCareLogNestedInput
  }

  export type CareLogUncheckedUpdateWithoutNurseInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    systolic?: NullableIntFieldUpdateOperationsInput | number | null
    diastolic?: NullableIntFieldUpdateOperationsInput | number | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    uricAcid?: NullableFloatFieldUpdateOperationsInput | number | null
    woundCondition?: NullableStringFieldUpdateOperationsInput | string | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    clinicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLog?: ActivityLogUncheckedUpdateManyWithoutCareLogNestedInput
  }

  export type CareLogUncheckedUpdateManyWithoutNurseInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    systolic?: NullableIntFieldUpdateOperationsInput | number | null
    diastolic?: NullableIntFieldUpdateOperationsInput | number | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    uricAcid?: NullableFloatFieldUpdateOperationsInput | number | null
    woundCondition?: NullableStringFieldUpdateOperationsInput | string | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    clinicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyPatientInput = {
    id?: string
    nurseId: string
    serviceType: $Enums.ServiceType
    serviceName: $Enums.ServiceName
    status?: $Enums.AppointmentStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareLogCreateManyPatientInput = {
    id?: string
    appointmentId: string
    nurseId: string
    systolic?: number | null
    diastolic?: number | null
    bloodSugar?: number | null
    cholesterol?: number | null
    uricAcid?: number | null
    woundCondition?: string | null
    moodScore?: number | null
    clinicalNotes?: string | null
    recordedAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    serviceName?: EnumServiceNameFieldUpdateOperationsInput | $Enums.ServiceName
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nurse?: NurseProfileUpdateOneRequiredWithoutAppointmentsNestedInput
    careLogs?: CareLogUpdateManyWithoutAppointmentNestedInput
    payments?: PaymentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    nurseId?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    serviceName?: EnumServiceNameFieldUpdateOperationsInput | $Enums.ServiceName
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careLogs?: CareLogUncheckedUpdateManyWithoutAppointmentNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    nurseId?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    serviceName?: EnumServiceNameFieldUpdateOperationsInput | $Enums.ServiceName
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareLogUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    systolic?: NullableIntFieldUpdateOperationsInput | number | null
    diastolic?: NullableIntFieldUpdateOperationsInput | number | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    uricAcid?: NullableFloatFieldUpdateOperationsInput | number | null
    woundCondition?: NullableStringFieldUpdateOperationsInput | string | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    clinicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutCareLogsNestedInput
    nurse?: UserUpdateOneRequiredWithoutCareLogsNestedInput
    activityLog?: ActivityLogUpdateManyWithoutCareLogNestedInput
  }

  export type CareLogUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    nurseId?: StringFieldUpdateOperationsInput | string
    systolic?: NullableIntFieldUpdateOperationsInput | number | null
    diastolic?: NullableIntFieldUpdateOperationsInput | number | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    uricAcid?: NullableFloatFieldUpdateOperationsInput | number | null
    woundCondition?: NullableStringFieldUpdateOperationsInput | string | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    clinicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLog?: ActivityLogUncheckedUpdateManyWithoutCareLogNestedInput
  }

  export type CareLogUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    nurseId?: StringFieldUpdateOperationsInput | string
    systolic?: NullableIntFieldUpdateOperationsInput | number | null
    diastolic?: NullableIntFieldUpdateOperationsInput | number | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    uricAcid?: NullableFloatFieldUpdateOperationsInput | number | null
    woundCondition?: NullableStringFieldUpdateOperationsInput | string | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    clinicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyNurseInput = {
    id?: string
    patientId: string
    serviceType: $Enums.ServiceType
    serviceName: $Enums.ServiceName
    status?: $Enums.AppointmentStatus
    dueDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateWithoutNurseInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    serviceName?: EnumServiceNameFieldUpdateOperationsInput | $Enums.ServiceName
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    careLogs?: CareLogUpdateManyWithoutAppointmentNestedInput
    payments?: PaymentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutNurseInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    serviceName?: EnumServiceNameFieldUpdateOperationsInput | $Enums.ServiceName
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careLogs?: CareLogUncheckedUpdateManyWithoutAppointmentNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutNurseInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    serviceName?: EnumServiceNameFieldUpdateOperationsInput | $Enums.ServiceName
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareLogCreateManyAppointmentInput = {
    id?: string
    patientId: string
    nurseId: string
    systolic?: number | null
    diastolic?: number | null
    bloodSugar?: number | null
    cholesterol?: number | null
    uricAcid?: number | null
    woundCondition?: string | null
    moodScore?: number | null
    clinicalNotes?: string | null
    recordedAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyAppointmentInput = {
    id?: string
    midtransOrderId: string
    amount: number
    status?: $Enums.PaymentStatus
    paymentMethod?: string | null
    snapToken?: string | null
    snapRedirectUrl?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareLogUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    systolic?: NullableIntFieldUpdateOperationsInput | number | null
    diastolic?: NullableIntFieldUpdateOperationsInput | number | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    uricAcid?: NullableFloatFieldUpdateOperationsInput | number | null
    woundCondition?: NullableStringFieldUpdateOperationsInput | string | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    clinicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicalLogsNestedInput
    nurse?: UserUpdateOneRequiredWithoutCareLogsNestedInput
    activityLog?: ActivityLogUpdateManyWithoutCareLogNestedInput
  }

  export type CareLogUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    nurseId?: StringFieldUpdateOperationsInput | string
    systolic?: NullableIntFieldUpdateOperationsInput | number | null
    diastolic?: NullableIntFieldUpdateOperationsInput | number | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    uricAcid?: NullableFloatFieldUpdateOperationsInput | number | null
    woundCondition?: NullableStringFieldUpdateOperationsInput | string | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    clinicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLog?: ActivityLogUncheckedUpdateManyWithoutCareLogNestedInput
  }

  export type CareLogUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    nurseId?: StringFieldUpdateOperationsInput | string
    systolic?: NullableIntFieldUpdateOperationsInput | number | null
    diastolic?: NullableIntFieldUpdateOperationsInput | number | null
    bloodSugar?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    uricAcid?: NullableFloatFieldUpdateOperationsInput | number | null
    woundCondition?: NullableStringFieldUpdateOperationsInput | string | null
    moodScore?: NullableIntFieldUpdateOperationsInput | number | null
    clinicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    midtransOrderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    snapRedirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    midtransOrderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    snapRedirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    midtransOrderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    snapRedirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyCareLogInput = {
    id?: string
    notes: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogUpdateWithoutCareLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutCareLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutCareLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
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