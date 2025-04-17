
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model TutorProfile
 * 
 */
export type TutorProfile = $Result.DefaultSelection<Prisma.$TutorProfilePayload>
/**
 * Model AvailableTime
 * 
 */
export type AvailableTime = $Result.DefaultSelection<Prisma.$AvailableTimePayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model SubjectCategory
 * 
 */
export type SubjectCategory = $Result.DefaultSelection<Prisma.$SubjectCategoryPayload>
/**
 * Model TutorSubject
 * 
 */
export type TutorSubject = $Result.DefaultSelection<Prisma.$TutorSubjectPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  TUTOR: 'TUTOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
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
   * `prisma.tutorProfile`: Exposes CRUD operations for the **TutorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TutorProfiles
    * const tutorProfiles = await prisma.tutorProfile.findMany()
    * ```
    */
  get tutorProfile(): Prisma.TutorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableTime`: Exposes CRUD operations for the **AvailableTime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableTimes
    * const availableTimes = await prisma.availableTime.findMany()
    * ```
    */
  get availableTime(): Prisma.AvailableTimeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subjectCategory`: Exposes CRUD operations for the **SubjectCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubjectCategories
    * const subjectCategories = await prisma.subjectCategory.findMany()
    * ```
    */
  get subjectCategory(): Prisma.SubjectCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutorSubject`: Exposes CRUD operations for the **TutorSubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TutorSubjects
    * const tutorSubjects = await prisma.tutorSubject.findMany()
    * ```
    */
  get tutorSubject(): Prisma.TutorSubjectDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    TutorProfile: 'TutorProfile',
    AvailableTime: 'AvailableTime',
    Experience: 'Experience',
    Review: 'Review',
    SubjectCategory: 'SubjectCategory',
    TutorSubject: 'TutorSubject'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tutorProfile" | "availableTime" | "experience" | "review" | "subjectCategory" | "tutorSubject"
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
      TutorProfile: {
        payload: Prisma.$TutorProfilePayload<ExtArgs>
        fields: Prisma.TutorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          findFirst: {
            args: Prisma.TutorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          findMany: {
            args: Prisma.TutorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>[]
          }
          create: {
            args: Prisma.TutorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          createMany: {
            args: Prisma.TutorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TutorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>[]
          }
          delete: {
            args: Prisma.TutorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          update: {
            args: Prisma.TutorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          deleteMany: {
            args: Prisma.TutorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TutorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>[]
          }
          upsert: {
            args: Prisma.TutorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorProfilePayload>
          }
          aggregate: {
            args: Prisma.TutorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutorProfile>
          }
          groupBy: {
            args: Prisma.TutorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<TutorProfileCountAggregateOutputType> | number
          }
        }
      }
      AvailableTime: {
        payload: Prisma.$AvailableTimePayload<ExtArgs>
        fields: Prisma.AvailableTimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableTimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableTimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTimePayload>
          }
          findFirst: {
            args: Prisma.AvailableTimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableTimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTimePayload>
          }
          findMany: {
            args: Prisma.AvailableTimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTimePayload>[]
          }
          create: {
            args: Prisma.AvailableTimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTimePayload>
          }
          createMany: {
            args: Prisma.AvailableTimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableTimeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTimePayload>[]
          }
          delete: {
            args: Prisma.AvailableTimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTimePayload>
          }
          update: {
            args: Prisma.AvailableTimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTimePayload>
          }
          deleteMany: {
            args: Prisma.AvailableTimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableTimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailableTimeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTimePayload>[]
          }
          upsert: {
            args: Prisma.AvailableTimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTimePayload>
          }
          aggregate: {
            args: Prisma.AvailableTimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableTime>
          }
          groupBy: {
            args: Prisma.AvailableTimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableTimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableTimeCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableTimeCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      SubjectCategory: {
        payload: Prisma.$SubjectCategoryPayload<ExtArgs>
        fields: Prisma.SubjectCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload>
          }
          findFirst: {
            args: Prisma.SubjectCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload>
          }
          findMany: {
            args: Prisma.SubjectCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload>[]
          }
          create: {
            args: Prisma.SubjectCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload>
          }
          createMany: {
            args: Prisma.SubjectCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload>[]
          }
          delete: {
            args: Prisma.SubjectCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload>
          }
          update: {
            args: Prisma.SubjectCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SubjectCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload>[]
          }
          upsert: {
            args: Prisma.SubjectCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectCategoryPayload>
          }
          aggregate: {
            args: Prisma.SubjectCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubjectCategory>
          }
          groupBy: {
            args: Prisma.SubjectCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCategoryCountAggregateOutputType> | number
          }
        }
      }
      TutorSubject: {
        payload: Prisma.$TutorSubjectPayload<ExtArgs>
        fields: Prisma.TutorSubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutorSubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutorSubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload>
          }
          findFirst: {
            args: Prisma.TutorSubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutorSubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload>
          }
          findMany: {
            args: Prisma.TutorSubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload>[]
          }
          create: {
            args: Prisma.TutorSubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload>
          }
          createMany: {
            args: Prisma.TutorSubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TutorSubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload>[]
          }
          delete: {
            args: Prisma.TutorSubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload>
          }
          update: {
            args: Prisma.TutorSubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload>
          }
          deleteMany: {
            args: Prisma.TutorSubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutorSubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TutorSubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload>[]
          }
          upsert: {
            args: Prisma.TutorSubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorSubjectPayload>
          }
          aggregate: {
            args: Prisma.TutorSubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutorSubject>
          }
          groupBy: {
            args: Prisma.TutorSubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorSubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutorSubjectCountArgs<ExtArgs>
            result: $Utils.Optional<TutorSubjectCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tutorProfile?: TutorProfileOmit
    availableTime?: AvailableTimeOmit
    experience?: ExperienceOmit
    review?: ReviewOmit
    subjectCategory?: SubjectCategoryOmit
    tutorSubject?: TutorSubjectOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
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
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type TutorProfileCountOutputType
   */

  export type TutorProfileCountOutputType = {
    availableTimes: number
    tutorSubjects: number
    experiences: number
    reviews: number
  }

  export type TutorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availableTimes?: boolean | TutorProfileCountOutputTypeCountAvailableTimesArgs
    tutorSubjects?: boolean | TutorProfileCountOutputTypeCountTutorSubjectsArgs
    experiences?: boolean | TutorProfileCountOutputTypeCountExperiencesArgs
    reviews?: boolean | TutorProfileCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * TutorProfileCountOutputType without action
   */
  export type TutorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfileCountOutputType
     */
    select?: TutorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TutorProfileCountOutputType without action
   */
  export type TutorProfileCountOutputTypeCountAvailableTimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableTimeWhereInput
  }

  /**
   * TutorProfileCountOutputType without action
   */
  export type TutorProfileCountOutputTypeCountTutorSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorSubjectWhereInput
  }

  /**
   * TutorProfileCountOutputType without action
   */
  export type TutorProfileCountOutputTypeCountExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
  }

  /**
   * TutorProfileCountOutputType without action
   */
  export type TutorProfileCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type SubjectCategoryCountOutputType
   */

  export type SubjectCategoryCountOutputType = {
    tutors: number
  }

  export type SubjectCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutors?: boolean | SubjectCategoryCountOutputTypeCountTutorsArgs
  }

  // Custom InputTypes
  /**
   * SubjectCategoryCountOutputType without action
   */
  export type SubjectCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategoryCountOutputType
     */
    select?: SubjectCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCategoryCountOutputType without action
   */
  export type SubjectCategoryCountOutputTypeCountTutorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorSubjectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tutorProfile?: boolean | User$tutorProfileArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutorProfile?: boolean | User$tutorProfileArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tutorProfile: Prisma.$TutorProfilePayload<ExtArgs> | null
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
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
    tutorProfile<T extends User$tutorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$tutorProfileArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
   * User.tutorProfile
   */
  export type User$tutorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    where?: TutorProfileWhereInput
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
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
   * Model TutorProfile
   */

  export type AggregateTutorProfile = {
    _count: TutorProfileCountAggregateOutputType | null
    _avg: TutorProfileAvgAggregateOutputType | null
    _sum: TutorProfileSumAggregateOutputType | null
    _min: TutorProfileMinAggregateOutputType | null
    _max: TutorProfileMaxAggregateOutputType | null
  }

  export type TutorProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    pricePerHour: number | null
  }

  export type TutorProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    pricePerHour: number | null
  }

  export type TutorProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    tutorName: string | null
    province: string | null
    image: string | null
    pricePerHour: number | null
    description: string | null
    phoneNumber: string | null
    verifyed: boolean | null
  }

  export type TutorProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    tutorName: string | null
    province: string | null
    image: string | null
    pricePerHour: number | null
    description: string | null
    phoneNumber: string | null
    verifyed: boolean | null
  }

  export type TutorProfileCountAggregateOutputType = {
    id: number
    userId: number
    tutorName: number
    province: number
    image: number
    pricePerHour: number
    description: number
    phoneNumber: number
    verifyed: number
    _all: number
  }


  export type TutorProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    pricePerHour?: true
  }

  export type TutorProfileSumAggregateInputType = {
    id?: true
    userId?: true
    pricePerHour?: true
  }

  export type TutorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    tutorName?: true
    province?: true
    image?: true
    pricePerHour?: true
    description?: true
    phoneNumber?: true
    verifyed?: true
  }

  export type TutorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    tutorName?: true
    province?: true
    image?: true
    pricePerHour?: true
    description?: true
    phoneNumber?: true
    verifyed?: true
  }

  export type TutorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    tutorName?: true
    province?: true
    image?: true
    pricePerHour?: true
    description?: true
    phoneNumber?: true
    verifyed?: true
    _all?: true
  }

  export type TutorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorProfile to aggregate.
     */
    where?: TutorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorProfiles to fetch.
     */
    orderBy?: TutorProfileOrderByWithRelationInput | TutorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TutorProfiles
    **/
    _count?: true | TutorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TutorProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TutorProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorProfileMaxAggregateInputType
  }

  export type GetTutorProfileAggregateType<T extends TutorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateTutorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutorProfile[P]>
      : GetScalarType<T[P], AggregateTutorProfile[P]>
  }




  export type TutorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorProfileWhereInput
    orderBy?: TutorProfileOrderByWithAggregationInput | TutorProfileOrderByWithAggregationInput[]
    by: TutorProfileScalarFieldEnum[] | TutorProfileScalarFieldEnum
    having?: TutorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorProfileCountAggregateInputType | true
    _avg?: TutorProfileAvgAggregateInputType
    _sum?: TutorProfileSumAggregateInputType
    _min?: TutorProfileMinAggregateInputType
    _max?: TutorProfileMaxAggregateInputType
  }

  export type TutorProfileGroupByOutputType = {
    id: number
    userId: number
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    description: string
    phoneNumber: string
    verifyed: boolean
    _count: TutorProfileCountAggregateOutputType | null
    _avg: TutorProfileAvgAggregateOutputType | null
    _sum: TutorProfileSumAggregateOutputType | null
    _min: TutorProfileMinAggregateOutputType | null
    _max: TutorProfileMaxAggregateOutputType | null
  }

  type GetTutorProfileGroupByPayload<T extends TutorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], TutorProfileGroupByOutputType[P]>
        }
      >
    >


  export type TutorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tutorName?: boolean
    province?: boolean
    image?: boolean
    pricePerHour?: boolean
    description?: boolean
    phoneNumber?: boolean
    verifyed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    availableTimes?: boolean | TutorProfile$availableTimesArgs<ExtArgs>
    tutorSubjects?: boolean | TutorProfile$tutorSubjectsArgs<ExtArgs>
    experiences?: boolean | TutorProfile$experiencesArgs<ExtArgs>
    reviews?: boolean | TutorProfile$reviewsArgs<ExtArgs>
    _count?: boolean | TutorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorProfile"]>

  export type TutorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tutorName?: boolean
    province?: boolean
    image?: boolean
    pricePerHour?: boolean
    description?: boolean
    phoneNumber?: boolean
    verifyed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorProfile"]>

  export type TutorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tutorName?: boolean
    province?: boolean
    image?: boolean
    pricePerHour?: boolean
    description?: boolean
    phoneNumber?: boolean
    verifyed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorProfile"]>

  export type TutorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    tutorName?: boolean
    province?: boolean
    image?: boolean
    pricePerHour?: boolean
    description?: boolean
    phoneNumber?: boolean
    verifyed?: boolean
  }

  export type TutorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tutorName" | "province" | "image" | "pricePerHour" | "description" | "phoneNumber" | "verifyed", ExtArgs["result"]["tutorProfile"]>
  export type TutorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    availableTimes?: boolean | TutorProfile$availableTimesArgs<ExtArgs>
    tutorSubjects?: boolean | TutorProfile$tutorSubjectsArgs<ExtArgs>
    experiences?: boolean | TutorProfile$experiencesArgs<ExtArgs>
    reviews?: boolean | TutorProfile$reviewsArgs<ExtArgs>
    _count?: boolean | TutorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TutorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TutorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TutorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TutorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      availableTimes: Prisma.$AvailableTimePayload<ExtArgs>[]
      tutorSubjects: Prisma.$TutorSubjectPayload<ExtArgs>[]
      experiences: Prisma.$ExperiencePayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      tutorName: string
      province: string
      image: string
      pricePerHour: number
      description: string
      phoneNumber: string
      verifyed: boolean
    }, ExtArgs["result"]["tutorProfile"]>
    composites: {}
  }

  type TutorProfileGetPayload<S extends boolean | null | undefined | TutorProfileDefaultArgs> = $Result.GetResult<Prisma.$TutorProfilePayload, S>

  type TutorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutorProfileCountAggregateInputType | true
    }

  export interface TutorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TutorProfile'], meta: { name: 'TutorProfile' } }
    /**
     * Find zero or one TutorProfile that matches the filter.
     * @param {TutorProfileFindUniqueArgs} args - Arguments to find a TutorProfile
     * @example
     * // Get one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutorProfileFindUniqueArgs>(args: SelectSubset<T, TutorProfileFindUniqueArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TutorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutorProfileFindUniqueOrThrowArgs} args - Arguments to find a TutorProfile
     * @example
     * // Get one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, TutorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileFindFirstArgs} args - Arguments to find a TutorProfile
     * @example
     * // Get one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutorProfileFindFirstArgs>(args?: SelectSubset<T, TutorProfileFindFirstArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileFindFirstOrThrowArgs} args - Arguments to find a TutorProfile
     * @example
     * // Get one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, TutorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TutorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TutorProfiles
     * const tutorProfiles = await prisma.tutorProfile.findMany()
     * 
     * // Get first 10 TutorProfiles
     * const tutorProfiles = await prisma.tutorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutorProfileWithIdOnly = await prisma.tutorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TutorProfileFindManyArgs>(args?: SelectSubset<T, TutorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TutorProfile.
     * @param {TutorProfileCreateArgs} args - Arguments to create a TutorProfile.
     * @example
     * // Create one TutorProfile
     * const TutorProfile = await prisma.tutorProfile.create({
     *   data: {
     *     // ... data to create a TutorProfile
     *   }
     * })
     * 
     */
    create<T extends TutorProfileCreateArgs>(args: SelectSubset<T, TutorProfileCreateArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TutorProfiles.
     * @param {TutorProfileCreateManyArgs} args - Arguments to create many TutorProfiles.
     * @example
     * // Create many TutorProfiles
     * const tutorProfile = await prisma.tutorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutorProfileCreateManyArgs>(args?: SelectSubset<T, TutorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TutorProfiles and returns the data saved in the database.
     * @param {TutorProfileCreateManyAndReturnArgs} args - Arguments to create many TutorProfiles.
     * @example
     * // Create many TutorProfiles
     * const tutorProfile = await prisma.tutorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TutorProfiles and only return the `id`
     * const tutorProfileWithIdOnly = await prisma.tutorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TutorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, TutorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TutorProfile.
     * @param {TutorProfileDeleteArgs} args - Arguments to delete one TutorProfile.
     * @example
     * // Delete one TutorProfile
     * const TutorProfile = await prisma.tutorProfile.delete({
     *   where: {
     *     // ... filter to delete one TutorProfile
     *   }
     * })
     * 
     */
    delete<T extends TutorProfileDeleteArgs>(args: SelectSubset<T, TutorProfileDeleteArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TutorProfile.
     * @param {TutorProfileUpdateArgs} args - Arguments to update one TutorProfile.
     * @example
     * // Update one TutorProfile
     * const tutorProfile = await prisma.tutorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutorProfileUpdateArgs>(args: SelectSubset<T, TutorProfileUpdateArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TutorProfiles.
     * @param {TutorProfileDeleteManyArgs} args - Arguments to filter TutorProfiles to delete.
     * @example
     * // Delete a few TutorProfiles
     * const { count } = await prisma.tutorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutorProfileDeleteManyArgs>(args?: SelectSubset<T, TutorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TutorProfiles
     * const tutorProfile = await prisma.tutorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutorProfileUpdateManyArgs>(args: SelectSubset<T, TutorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorProfiles and returns the data updated in the database.
     * @param {TutorProfileUpdateManyAndReturnArgs} args - Arguments to update many TutorProfiles.
     * @example
     * // Update many TutorProfiles
     * const tutorProfile = await prisma.tutorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TutorProfiles and only return the `id`
     * const tutorProfileWithIdOnly = await prisma.tutorProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends TutorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, TutorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TutorProfile.
     * @param {TutorProfileUpsertArgs} args - Arguments to update or create a TutorProfile.
     * @example
     * // Update or create a TutorProfile
     * const tutorProfile = await prisma.tutorProfile.upsert({
     *   create: {
     *     // ... data to create a TutorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TutorProfile we want to update
     *   }
     * })
     */
    upsert<T extends TutorProfileUpsertArgs>(args: SelectSubset<T, TutorProfileUpsertArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TutorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileCountArgs} args - Arguments to filter TutorProfiles to count.
     * @example
     * // Count the number of TutorProfiles
     * const count = await prisma.tutorProfile.count({
     *   where: {
     *     // ... the filter for the TutorProfiles we want to count
     *   }
     * })
    **/
    count<T extends TutorProfileCountArgs>(
      args?: Subset<T, TutorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TutorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TutorProfileAggregateArgs>(args: Subset<T, TutorProfileAggregateArgs>): Prisma.PrismaPromise<GetTutorProfileAggregateType<T>>

    /**
     * Group by TutorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorProfileGroupByArgs} args - Group by arguments.
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
      T extends TutorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutorProfileGroupByArgs['orderBy'] }
        : { orderBy?: TutorProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TutorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TutorProfile model
   */
  readonly fields: TutorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TutorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    availableTimes<T extends TutorProfile$availableTimesArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfile$availableTimesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tutorSubjects<T extends TutorProfile$tutorSubjectsArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfile$tutorSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    experiences<T extends TutorProfile$experiencesArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfile$experiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends TutorProfile$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfile$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TutorProfile model
   */
  interface TutorProfileFieldRefs {
    readonly id: FieldRef<"TutorProfile", 'Int'>
    readonly userId: FieldRef<"TutorProfile", 'Int'>
    readonly tutorName: FieldRef<"TutorProfile", 'String'>
    readonly province: FieldRef<"TutorProfile", 'String'>
    readonly image: FieldRef<"TutorProfile", 'String'>
    readonly pricePerHour: FieldRef<"TutorProfile", 'Int'>
    readonly description: FieldRef<"TutorProfile", 'String'>
    readonly phoneNumber: FieldRef<"TutorProfile", 'String'>
    readonly verifyed: FieldRef<"TutorProfile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TutorProfile findUnique
   */
  export type TutorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfile to fetch.
     */
    where: TutorProfileWhereUniqueInput
  }

  /**
   * TutorProfile findUniqueOrThrow
   */
  export type TutorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfile to fetch.
     */
    where: TutorProfileWhereUniqueInput
  }

  /**
   * TutorProfile findFirst
   */
  export type TutorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfile to fetch.
     */
    where?: TutorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorProfiles to fetch.
     */
    orderBy?: TutorProfileOrderByWithRelationInput | TutorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorProfiles.
     */
    cursor?: TutorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorProfiles.
     */
    distinct?: TutorProfileScalarFieldEnum | TutorProfileScalarFieldEnum[]
  }

  /**
   * TutorProfile findFirstOrThrow
   */
  export type TutorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfile to fetch.
     */
    where?: TutorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorProfiles to fetch.
     */
    orderBy?: TutorProfileOrderByWithRelationInput | TutorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorProfiles.
     */
    cursor?: TutorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorProfiles.
     */
    distinct?: TutorProfileScalarFieldEnum | TutorProfileScalarFieldEnum[]
  }

  /**
   * TutorProfile findMany
   */
  export type TutorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter, which TutorProfiles to fetch.
     */
    where?: TutorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorProfiles to fetch.
     */
    orderBy?: TutorProfileOrderByWithRelationInput | TutorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TutorProfiles.
     */
    cursor?: TutorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorProfiles.
     */
    skip?: number
    distinct?: TutorProfileScalarFieldEnum | TutorProfileScalarFieldEnum[]
  }

  /**
   * TutorProfile create
   */
  export type TutorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a TutorProfile.
     */
    data: XOR<TutorProfileCreateInput, TutorProfileUncheckedCreateInput>
  }

  /**
   * TutorProfile createMany
   */
  export type TutorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TutorProfiles.
     */
    data: TutorProfileCreateManyInput | TutorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TutorProfile createManyAndReturn
   */
  export type TutorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many TutorProfiles.
     */
    data: TutorProfileCreateManyInput | TutorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorProfile update
   */
  export type TutorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a TutorProfile.
     */
    data: XOR<TutorProfileUpdateInput, TutorProfileUncheckedUpdateInput>
    /**
     * Choose, which TutorProfile to update.
     */
    where: TutorProfileWhereUniqueInput
  }

  /**
   * TutorProfile updateMany
   */
  export type TutorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TutorProfiles.
     */
    data: XOR<TutorProfileUpdateManyMutationInput, TutorProfileUncheckedUpdateManyInput>
    /**
     * Filter which TutorProfiles to update
     */
    where?: TutorProfileWhereInput
    /**
     * Limit how many TutorProfiles to update.
     */
    limit?: number
  }

  /**
   * TutorProfile updateManyAndReturn
   */
  export type TutorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * The data used to update TutorProfiles.
     */
    data: XOR<TutorProfileUpdateManyMutationInput, TutorProfileUncheckedUpdateManyInput>
    /**
     * Filter which TutorProfiles to update
     */
    where?: TutorProfileWhereInput
    /**
     * Limit how many TutorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorProfile upsert
   */
  export type TutorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the TutorProfile to update in case it exists.
     */
    where: TutorProfileWhereUniqueInput
    /**
     * In case the TutorProfile found by the `where` argument doesn't exist, create a new TutorProfile with this data.
     */
    create: XOR<TutorProfileCreateInput, TutorProfileUncheckedCreateInput>
    /**
     * In case the TutorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutorProfileUpdateInput, TutorProfileUncheckedUpdateInput>
  }

  /**
   * TutorProfile delete
   */
  export type TutorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
    /**
     * Filter which TutorProfile to delete.
     */
    where: TutorProfileWhereUniqueInput
  }

  /**
   * TutorProfile deleteMany
   */
  export type TutorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorProfiles to delete
     */
    where?: TutorProfileWhereInput
    /**
     * Limit how many TutorProfiles to delete.
     */
    limit?: number
  }

  /**
   * TutorProfile.availableTimes
   */
  export type TutorProfile$availableTimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTime
     */
    select?: AvailableTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTime
     */
    omit?: AvailableTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTimeInclude<ExtArgs> | null
    where?: AvailableTimeWhereInput
    orderBy?: AvailableTimeOrderByWithRelationInput | AvailableTimeOrderByWithRelationInput[]
    cursor?: AvailableTimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailableTimeScalarFieldEnum | AvailableTimeScalarFieldEnum[]
  }

  /**
   * TutorProfile.tutorSubjects
   */
  export type TutorProfile$tutorSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    where?: TutorSubjectWhereInput
    orderBy?: TutorSubjectOrderByWithRelationInput | TutorSubjectOrderByWithRelationInput[]
    cursor?: TutorSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TutorSubjectScalarFieldEnum | TutorSubjectScalarFieldEnum[]
  }

  /**
   * TutorProfile.experiences
   */
  export type TutorProfile$experiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    cursor?: ExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * TutorProfile.reviews
   */
  export type TutorProfile$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * TutorProfile without action
   */
  export type TutorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorProfile
     */
    select?: TutorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorProfile
     */
    omit?: TutorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorProfileInclude<ExtArgs> | null
  }


  /**
   * Model AvailableTime
   */

  export type AggregateAvailableTime = {
    _count: AvailableTimeCountAggregateOutputType | null
    _avg: AvailableTimeAvgAggregateOutputType | null
    _sum: AvailableTimeSumAggregateOutputType | null
    _min: AvailableTimeMinAggregateOutputType | null
    _max: AvailableTimeMaxAggregateOutputType | null
  }

  export type AvailableTimeAvgAggregateOutputType = {
    id: number | null
    tutorId: number | null
  }

  export type AvailableTimeSumAggregateOutputType = {
    id: number | null
    tutorId: number | null
  }

  export type AvailableTimeMinAggregateOutputType = {
    id: number | null
    dayStart: string | null
    dayEnd: string | null
    timeStart: string | null
    timeEnd: string | null
    tutorId: number | null
  }

  export type AvailableTimeMaxAggregateOutputType = {
    id: number | null
    dayStart: string | null
    dayEnd: string | null
    timeStart: string | null
    timeEnd: string | null
    tutorId: number | null
  }

  export type AvailableTimeCountAggregateOutputType = {
    id: number
    dayStart: number
    dayEnd: number
    timeStart: number
    timeEnd: number
    tutorId: number
    _all: number
  }


  export type AvailableTimeAvgAggregateInputType = {
    id?: true
    tutorId?: true
  }

  export type AvailableTimeSumAggregateInputType = {
    id?: true
    tutorId?: true
  }

  export type AvailableTimeMinAggregateInputType = {
    id?: true
    dayStart?: true
    dayEnd?: true
    timeStart?: true
    timeEnd?: true
    tutorId?: true
  }

  export type AvailableTimeMaxAggregateInputType = {
    id?: true
    dayStart?: true
    dayEnd?: true
    timeStart?: true
    timeEnd?: true
    tutorId?: true
  }

  export type AvailableTimeCountAggregateInputType = {
    id?: true
    dayStart?: true
    dayEnd?: true
    timeStart?: true
    timeEnd?: true
    tutorId?: true
    _all?: true
  }

  export type AvailableTimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableTime to aggregate.
     */
    where?: AvailableTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTimes to fetch.
     */
    orderBy?: AvailableTimeOrderByWithRelationInput | AvailableTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableTimes
    **/
    _count?: true | AvailableTimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailableTimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailableTimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableTimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableTimeMaxAggregateInputType
  }

  export type GetAvailableTimeAggregateType<T extends AvailableTimeAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableTime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableTime[P]>
      : GetScalarType<T[P], AggregateAvailableTime[P]>
  }




  export type AvailableTimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableTimeWhereInput
    orderBy?: AvailableTimeOrderByWithAggregationInput | AvailableTimeOrderByWithAggregationInput[]
    by: AvailableTimeScalarFieldEnum[] | AvailableTimeScalarFieldEnum
    having?: AvailableTimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableTimeCountAggregateInputType | true
    _avg?: AvailableTimeAvgAggregateInputType
    _sum?: AvailableTimeSumAggregateInputType
    _min?: AvailableTimeMinAggregateInputType
    _max?: AvailableTimeMaxAggregateInputType
  }

  export type AvailableTimeGroupByOutputType = {
    id: number
    dayStart: string
    dayEnd: string
    timeStart: string
    timeEnd: string
    tutorId: number
    _count: AvailableTimeCountAggregateOutputType | null
    _avg: AvailableTimeAvgAggregateOutputType | null
    _sum: AvailableTimeSumAggregateOutputType | null
    _min: AvailableTimeMinAggregateOutputType | null
    _max: AvailableTimeMaxAggregateOutputType | null
  }

  type GetAvailableTimeGroupByPayload<T extends AvailableTimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableTimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableTimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableTimeGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableTimeGroupByOutputType[P]>
        }
      >
    >


  export type AvailableTimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayStart?: boolean
    dayEnd?: boolean
    timeStart?: boolean
    timeEnd?: boolean
    tutorId?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableTime"]>

  export type AvailableTimeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayStart?: boolean
    dayEnd?: boolean
    timeStart?: boolean
    timeEnd?: boolean
    tutorId?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableTime"]>

  export type AvailableTimeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayStart?: boolean
    dayEnd?: boolean
    timeStart?: boolean
    timeEnd?: boolean
    tutorId?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableTime"]>

  export type AvailableTimeSelectScalar = {
    id?: boolean
    dayStart?: boolean
    dayEnd?: boolean
    timeStart?: boolean
    timeEnd?: boolean
    tutorId?: boolean
  }

  export type AvailableTimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dayStart" | "dayEnd" | "timeStart" | "timeEnd" | "tutorId", ExtArgs["result"]["availableTime"]>
  export type AvailableTimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }
  export type AvailableTimeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }
  export type AvailableTimeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }

  export type $AvailableTimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableTime"
    objects: {
      tutor: Prisma.$TutorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dayStart: string
      dayEnd: string
      timeStart: string
      timeEnd: string
      tutorId: number
    }, ExtArgs["result"]["availableTime"]>
    composites: {}
  }

  type AvailableTimeGetPayload<S extends boolean | null | undefined | AvailableTimeDefaultArgs> = $Result.GetResult<Prisma.$AvailableTimePayload, S>

  type AvailableTimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailableTimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailableTimeCountAggregateInputType | true
    }

  export interface AvailableTimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableTime'], meta: { name: 'AvailableTime' } }
    /**
     * Find zero or one AvailableTime that matches the filter.
     * @param {AvailableTimeFindUniqueArgs} args - Arguments to find a AvailableTime
     * @example
     * // Get one AvailableTime
     * const availableTime = await prisma.availableTime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableTimeFindUniqueArgs>(args: SelectSubset<T, AvailableTimeFindUniqueArgs<ExtArgs>>): Prisma__AvailableTimeClient<$Result.GetResult<Prisma.$AvailableTimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailableTime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableTimeFindUniqueOrThrowArgs} args - Arguments to find a AvailableTime
     * @example
     * // Get one AvailableTime
     * const availableTime = await prisma.availableTime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableTimeFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableTimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableTimeClient<$Result.GetResult<Prisma.$AvailableTimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableTime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTimeFindFirstArgs} args - Arguments to find a AvailableTime
     * @example
     * // Get one AvailableTime
     * const availableTime = await prisma.availableTime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableTimeFindFirstArgs>(args?: SelectSubset<T, AvailableTimeFindFirstArgs<ExtArgs>>): Prisma__AvailableTimeClient<$Result.GetResult<Prisma.$AvailableTimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableTime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTimeFindFirstOrThrowArgs} args - Arguments to find a AvailableTime
     * @example
     * // Get one AvailableTime
     * const availableTime = await prisma.availableTime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableTimeFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableTimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableTimeClient<$Result.GetResult<Prisma.$AvailableTimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailableTimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableTimes
     * const availableTimes = await prisma.availableTime.findMany()
     * 
     * // Get first 10 AvailableTimes
     * const availableTimes = await prisma.availableTime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableTimeWithIdOnly = await prisma.availableTime.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableTimeFindManyArgs>(args?: SelectSubset<T, AvailableTimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailableTime.
     * @param {AvailableTimeCreateArgs} args - Arguments to create a AvailableTime.
     * @example
     * // Create one AvailableTime
     * const AvailableTime = await prisma.availableTime.create({
     *   data: {
     *     // ... data to create a AvailableTime
     *   }
     * })
     * 
     */
    create<T extends AvailableTimeCreateArgs>(args: SelectSubset<T, AvailableTimeCreateArgs<ExtArgs>>): Prisma__AvailableTimeClient<$Result.GetResult<Prisma.$AvailableTimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailableTimes.
     * @param {AvailableTimeCreateManyArgs} args - Arguments to create many AvailableTimes.
     * @example
     * // Create many AvailableTimes
     * const availableTime = await prisma.availableTime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableTimeCreateManyArgs>(args?: SelectSubset<T, AvailableTimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableTimes and returns the data saved in the database.
     * @param {AvailableTimeCreateManyAndReturnArgs} args - Arguments to create many AvailableTimes.
     * @example
     * // Create many AvailableTimes
     * const availableTime = await prisma.availableTime.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableTimes and only return the `id`
     * const availableTimeWithIdOnly = await prisma.availableTime.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableTimeCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableTimeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTimePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailableTime.
     * @param {AvailableTimeDeleteArgs} args - Arguments to delete one AvailableTime.
     * @example
     * // Delete one AvailableTime
     * const AvailableTime = await prisma.availableTime.delete({
     *   where: {
     *     // ... filter to delete one AvailableTime
     *   }
     * })
     * 
     */
    delete<T extends AvailableTimeDeleteArgs>(args: SelectSubset<T, AvailableTimeDeleteArgs<ExtArgs>>): Prisma__AvailableTimeClient<$Result.GetResult<Prisma.$AvailableTimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailableTime.
     * @param {AvailableTimeUpdateArgs} args - Arguments to update one AvailableTime.
     * @example
     * // Update one AvailableTime
     * const availableTime = await prisma.availableTime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableTimeUpdateArgs>(args: SelectSubset<T, AvailableTimeUpdateArgs<ExtArgs>>): Prisma__AvailableTimeClient<$Result.GetResult<Prisma.$AvailableTimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailableTimes.
     * @param {AvailableTimeDeleteManyArgs} args - Arguments to filter AvailableTimes to delete.
     * @example
     * // Delete a few AvailableTimes
     * const { count } = await prisma.availableTime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableTimeDeleteManyArgs>(args?: SelectSubset<T, AvailableTimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableTimes
     * const availableTime = await prisma.availableTime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableTimeUpdateManyArgs>(args: SelectSubset<T, AvailableTimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableTimes and returns the data updated in the database.
     * @param {AvailableTimeUpdateManyAndReturnArgs} args - Arguments to update many AvailableTimes.
     * @example
     * // Update many AvailableTimes
     * const availableTime = await prisma.availableTime.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailableTimes and only return the `id`
     * const availableTimeWithIdOnly = await prisma.availableTime.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvailableTimeUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailableTimeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTimePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailableTime.
     * @param {AvailableTimeUpsertArgs} args - Arguments to update or create a AvailableTime.
     * @example
     * // Update or create a AvailableTime
     * const availableTime = await prisma.availableTime.upsert({
     *   create: {
     *     // ... data to create a AvailableTime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableTime we want to update
     *   }
     * })
     */
    upsert<T extends AvailableTimeUpsertArgs>(args: SelectSubset<T, AvailableTimeUpsertArgs<ExtArgs>>): Prisma__AvailableTimeClient<$Result.GetResult<Prisma.$AvailableTimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailableTimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTimeCountArgs} args - Arguments to filter AvailableTimes to count.
     * @example
     * // Count the number of AvailableTimes
     * const count = await prisma.availableTime.count({
     *   where: {
     *     // ... the filter for the AvailableTimes we want to count
     *   }
     * })
    **/
    count<T extends AvailableTimeCountArgs>(
      args?: Subset<T, AvailableTimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableTimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailableTimeAggregateArgs>(args: Subset<T, AvailableTimeAggregateArgs>): Prisma.PrismaPromise<GetAvailableTimeAggregateType<T>>

    /**
     * Group by AvailableTime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTimeGroupByArgs} args - Group by arguments.
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
      T extends AvailableTimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableTimeGroupByArgs['orderBy'] }
        : { orderBy?: AvailableTimeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailableTimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableTimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableTime model
   */
  readonly fields: AvailableTimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableTime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableTimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutor<T extends TutorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfileDefaultArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AvailableTime model
   */
  interface AvailableTimeFieldRefs {
    readonly id: FieldRef<"AvailableTime", 'Int'>
    readonly dayStart: FieldRef<"AvailableTime", 'String'>
    readonly dayEnd: FieldRef<"AvailableTime", 'String'>
    readonly timeStart: FieldRef<"AvailableTime", 'String'>
    readonly timeEnd: FieldRef<"AvailableTime", 'String'>
    readonly tutorId: FieldRef<"AvailableTime", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AvailableTime findUnique
   */
  export type AvailableTimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTime
     */
    select?: AvailableTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTime
     */
    omit?: AvailableTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTimeInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTime to fetch.
     */
    where: AvailableTimeWhereUniqueInput
  }

  /**
   * AvailableTime findUniqueOrThrow
   */
  export type AvailableTimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTime
     */
    select?: AvailableTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTime
     */
    omit?: AvailableTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTimeInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTime to fetch.
     */
    where: AvailableTimeWhereUniqueInput
  }

  /**
   * AvailableTime findFirst
   */
  export type AvailableTimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTime
     */
    select?: AvailableTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTime
     */
    omit?: AvailableTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTimeInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTime to fetch.
     */
    where?: AvailableTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTimes to fetch.
     */
    orderBy?: AvailableTimeOrderByWithRelationInput | AvailableTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableTimes.
     */
    cursor?: AvailableTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTimes.
     */
    distinct?: AvailableTimeScalarFieldEnum | AvailableTimeScalarFieldEnum[]
  }

  /**
   * AvailableTime findFirstOrThrow
   */
  export type AvailableTimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTime
     */
    select?: AvailableTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTime
     */
    omit?: AvailableTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTimeInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTime to fetch.
     */
    where?: AvailableTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTimes to fetch.
     */
    orderBy?: AvailableTimeOrderByWithRelationInput | AvailableTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableTimes.
     */
    cursor?: AvailableTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTimes.
     */
    distinct?: AvailableTimeScalarFieldEnum | AvailableTimeScalarFieldEnum[]
  }

  /**
   * AvailableTime findMany
   */
  export type AvailableTimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTime
     */
    select?: AvailableTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTime
     */
    omit?: AvailableTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTimeInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTimes to fetch.
     */
    where?: AvailableTimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTimes to fetch.
     */
    orderBy?: AvailableTimeOrderByWithRelationInput | AvailableTimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableTimes.
     */
    cursor?: AvailableTimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTimes.
     */
    skip?: number
    distinct?: AvailableTimeScalarFieldEnum | AvailableTimeScalarFieldEnum[]
  }

  /**
   * AvailableTime create
   */
  export type AvailableTimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTime
     */
    select?: AvailableTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTime
     */
    omit?: AvailableTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTimeInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableTime.
     */
    data: XOR<AvailableTimeCreateInput, AvailableTimeUncheckedCreateInput>
  }

  /**
   * AvailableTime createMany
   */
  export type AvailableTimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableTimes.
     */
    data: AvailableTimeCreateManyInput | AvailableTimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableTime createManyAndReturn
   */
  export type AvailableTimeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTime
     */
    select?: AvailableTimeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTime
     */
    omit?: AvailableTimeOmit<ExtArgs> | null
    /**
     * The data used to create many AvailableTimes.
     */
    data: AvailableTimeCreateManyInput | AvailableTimeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTimeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailableTime update
   */
  export type AvailableTimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTime
     */
    select?: AvailableTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTime
     */
    omit?: AvailableTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTimeInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableTime.
     */
    data: XOR<AvailableTimeUpdateInput, AvailableTimeUncheckedUpdateInput>
    /**
     * Choose, which AvailableTime to update.
     */
    where: AvailableTimeWhereUniqueInput
  }

  /**
   * AvailableTime updateMany
   */
  export type AvailableTimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableTimes.
     */
    data: XOR<AvailableTimeUpdateManyMutationInput, AvailableTimeUncheckedUpdateManyInput>
    /**
     * Filter which AvailableTimes to update
     */
    where?: AvailableTimeWhereInput
    /**
     * Limit how many AvailableTimes to update.
     */
    limit?: number
  }

  /**
   * AvailableTime updateManyAndReturn
   */
  export type AvailableTimeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTime
     */
    select?: AvailableTimeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTime
     */
    omit?: AvailableTimeOmit<ExtArgs> | null
    /**
     * The data used to update AvailableTimes.
     */
    data: XOR<AvailableTimeUpdateManyMutationInput, AvailableTimeUncheckedUpdateManyInput>
    /**
     * Filter which AvailableTimes to update
     */
    where?: AvailableTimeWhereInput
    /**
     * Limit how many AvailableTimes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTimeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailableTime upsert
   */
  export type AvailableTimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTime
     */
    select?: AvailableTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTime
     */
    omit?: AvailableTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTimeInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableTime to update in case it exists.
     */
    where: AvailableTimeWhereUniqueInput
    /**
     * In case the AvailableTime found by the `where` argument doesn't exist, create a new AvailableTime with this data.
     */
    create: XOR<AvailableTimeCreateInput, AvailableTimeUncheckedCreateInput>
    /**
     * In case the AvailableTime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableTimeUpdateInput, AvailableTimeUncheckedUpdateInput>
  }

  /**
   * AvailableTime delete
   */
  export type AvailableTimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTime
     */
    select?: AvailableTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTime
     */
    omit?: AvailableTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTimeInclude<ExtArgs> | null
    /**
     * Filter which AvailableTime to delete.
     */
    where: AvailableTimeWhereUniqueInput
  }

  /**
   * AvailableTime deleteMany
   */
  export type AvailableTimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableTimes to delete
     */
    where?: AvailableTimeWhereInput
    /**
     * Limit how many AvailableTimes to delete.
     */
    limit?: number
  }

  /**
   * AvailableTime without action
   */
  export type AvailableTimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTime
     */
    select?: AvailableTimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTime
     */
    omit?: AvailableTimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTimeInclude<ExtArgs> | null
  }


  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceAvgAggregateOutputType = {
    id: number | null
    tutorId: number | null
  }

  export type ExperienceSumAggregateOutputType = {
    id: number | null
    tutorId: number | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: number | null
    detail: string | null
    tutorId: number | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: number | null
    detail: string | null
    tutorId: number | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    detail: number
    tutorId: number
    _all: number
  }


  export type ExperienceAvgAggregateInputType = {
    id?: true
    tutorId?: true
  }

  export type ExperienceSumAggregateInputType = {
    id?: true
    tutorId?: true
  }

  export type ExperienceMinAggregateInputType = {
    id?: true
    detail?: true
    tutorId?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    detail?: true
    tutorId?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    detail?: true
    tutorId?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _avg?: ExperienceAvgAggregateInputType
    _sum?: ExperienceSumAggregateInputType
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: number
    detail: string
    tutorId: number
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    detail?: boolean
    tutorId?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    detail?: boolean
    tutorId?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    detail?: boolean
    tutorId?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectScalar = {
    id?: boolean
    detail?: boolean
    tutorId?: boolean
  }

  export type ExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "detail" | "tutorId", ExtArgs["result"]["experience"]>
  export type ExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
  }

  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {
      tutor: Prisma.$TutorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      detail: string
      tutorId: number
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceFindManyArgs>(args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends ExperienceCreateArgs>(args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceCreateManyArgs>(args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experiences and returns the data saved in the database.
     * @param {ExperienceCreateManyAndReturnArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends ExperienceDeleteArgs>(args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceUpdateArgs>(args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceUpdateManyArgs>(args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences and returns the data updated in the database.
     * @param {ExperienceUpdateManyAndReturnArgs} args - Arguments to update many Experiences.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, ExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
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
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutor<T extends TutorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfileDefaultArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Experience model
   */
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'Int'>
    readonly detail: FieldRef<"Experience", 'String'>
    readonly tutorId: FieldRef<"Experience", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Experience createManyAndReturn
   */
  export type ExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
  }

  /**
   * Experience updateManyAndReturn
   */
  export type ExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to delete.
     */
    limit?: number
  }

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    tutorId: number | null
    userId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    tutorId: number | null
    userId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    comment: string | null
    rating: number | null
    tutorId: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    comment: string | null
    rating: number | null
    tutorId: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    comment: number
    rating: number
    tutorId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    tutorId?: true
    userId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    tutorId?: true
    userId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    comment?: true
    rating?: true
    tutorId?: true
    userId?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    comment?: true
    rating?: true
    tutorId?: true
    userId?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    comment?: true
    rating?: true
    tutorId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    comment: string
    rating: number
    tutorId: number
    userId: number
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    rating?: boolean
    tutorId?: boolean
    userId?: boolean
    createdAt?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    rating?: boolean
    tutorId?: boolean
    userId?: boolean
    createdAt?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    rating?: boolean
    tutorId?: boolean
    userId?: boolean
    createdAt?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    comment?: boolean
    rating?: boolean
    tutorId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comment" | "rating" | "tutorId" | "userId" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      tutor: Prisma.$TutorProfilePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      comment: string
      rating: number
      tutorId: number
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutor<T extends TutorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfileDefaultArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly tutorId: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model SubjectCategory
   */

  export type AggregateSubjectCategory = {
    _count: SubjectCategoryCountAggregateOutputType | null
    _avg: SubjectCategoryAvgAggregateOutputType | null
    _sum: SubjectCategorySumAggregateOutputType | null
    _min: SubjectCategoryMinAggregateOutputType | null
    _max: SubjectCategoryMaxAggregateOutputType | null
  }

  export type SubjectCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type SubjectCategorySumAggregateOutputType = {
    id: number | null
  }

  export type SubjectCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SubjectCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SubjectCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SubjectCategoryAvgAggregateInputType = {
    id?: true
  }

  export type SubjectCategorySumAggregateInputType = {
    id?: true
  }

  export type SubjectCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SubjectCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SubjectCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SubjectCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubjectCategory to aggregate.
     */
    where?: SubjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectCategories to fetch.
     */
    orderBy?: SubjectCategoryOrderByWithRelationInput | SubjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubjectCategories
    **/
    _count?: true | SubjectCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectCategoryMaxAggregateInputType
  }

  export type GetSubjectCategoryAggregateType<T extends SubjectCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubjectCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubjectCategory[P]>
      : GetScalarType<T[P], AggregateSubjectCategory[P]>
  }




  export type SubjectCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectCategoryWhereInput
    orderBy?: SubjectCategoryOrderByWithAggregationInput | SubjectCategoryOrderByWithAggregationInput[]
    by: SubjectCategoryScalarFieldEnum[] | SubjectCategoryScalarFieldEnum
    having?: SubjectCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCategoryCountAggregateInputType | true
    _avg?: SubjectCategoryAvgAggregateInputType
    _sum?: SubjectCategorySumAggregateInputType
    _min?: SubjectCategoryMinAggregateInputType
    _max?: SubjectCategoryMaxAggregateInputType
  }

  export type SubjectCategoryGroupByOutputType = {
    id: number
    name: string
    _count: SubjectCategoryCountAggregateOutputType | null
    _avg: SubjectCategoryAvgAggregateOutputType | null
    _sum: SubjectCategorySumAggregateOutputType | null
    _min: SubjectCategoryMinAggregateOutputType | null
    _max: SubjectCategoryMaxAggregateOutputType | null
  }

  type GetSubjectCategoryGroupByPayload<T extends SubjectCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SubjectCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tutors?: boolean | SubjectCategory$tutorsArgs<ExtArgs>
    _count?: boolean | SubjectCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subjectCategory"]>

  export type SubjectCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["subjectCategory"]>

  export type SubjectCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["subjectCategory"]>

  export type SubjectCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SubjectCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["subjectCategory"]>
  export type SubjectCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutors?: boolean | SubjectCategory$tutorsArgs<ExtArgs>
    _count?: boolean | SubjectCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubjectCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubjectCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubjectCategory"
    objects: {
      tutors: Prisma.$TutorSubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["subjectCategory"]>
    composites: {}
  }

  type SubjectCategoryGetPayload<S extends boolean | null | undefined | SubjectCategoryDefaultArgs> = $Result.GetResult<Prisma.$SubjectCategoryPayload, S>

  type SubjectCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCategoryCountAggregateInputType | true
    }

  export interface SubjectCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubjectCategory'], meta: { name: 'SubjectCategory' } }
    /**
     * Find zero or one SubjectCategory that matches the filter.
     * @param {SubjectCategoryFindUniqueArgs} args - Arguments to find a SubjectCategory
     * @example
     * // Get one SubjectCategory
     * const subjectCategory = await prisma.subjectCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectCategoryFindUniqueArgs>(args: SelectSubset<T, SubjectCategoryFindUniqueArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubjectCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectCategoryFindUniqueOrThrowArgs} args - Arguments to find a SubjectCategory
     * @example
     * // Get one SubjectCategory
     * const subjectCategory = await prisma.subjectCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubjectCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCategoryFindFirstArgs} args - Arguments to find a SubjectCategory
     * @example
     * // Get one SubjectCategory
     * const subjectCategory = await prisma.subjectCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectCategoryFindFirstArgs>(args?: SelectSubset<T, SubjectCategoryFindFirstArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubjectCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCategoryFindFirstOrThrowArgs} args - Arguments to find a SubjectCategory
     * @example
     * // Get one SubjectCategory
     * const subjectCategory = await prisma.subjectCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubjectCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubjectCategories
     * const subjectCategories = await prisma.subjectCategory.findMany()
     * 
     * // Get first 10 SubjectCategories
     * const subjectCategories = await prisma.subjectCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectCategoryWithIdOnly = await prisma.subjectCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectCategoryFindManyArgs>(args?: SelectSubset<T, SubjectCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubjectCategory.
     * @param {SubjectCategoryCreateArgs} args - Arguments to create a SubjectCategory.
     * @example
     * // Create one SubjectCategory
     * const SubjectCategory = await prisma.subjectCategory.create({
     *   data: {
     *     // ... data to create a SubjectCategory
     *   }
     * })
     * 
     */
    create<T extends SubjectCategoryCreateArgs>(args: SelectSubset<T, SubjectCategoryCreateArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubjectCategories.
     * @param {SubjectCategoryCreateManyArgs} args - Arguments to create many SubjectCategories.
     * @example
     * // Create many SubjectCategories
     * const subjectCategory = await prisma.subjectCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCategoryCreateManyArgs>(args?: SelectSubset<T, SubjectCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubjectCategories and returns the data saved in the database.
     * @param {SubjectCategoryCreateManyAndReturnArgs} args - Arguments to create many SubjectCategories.
     * @example
     * // Create many SubjectCategories
     * const subjectCategory = await prisma.subjectCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubjectCategories and only return the `id`
     * const subjectCategoryWithIdOnly = await prisma.subjectCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubjectCategory.
     * @param {SubjectCategoryDeleteArgs} args - Arguments to delete one SubjectCategory.
     * @example
     * // Delete one SubjectCategory
     * const SubjectCategory = await prisma.subjectCategory.delete({
     *   where: {
     *     // ... filter to delete one SubjectCategory
     *   }
     * })
     * 
     */
    delete<T extends SubjectCategoryDeleteArgs>(args: SelectSubset<T, SubjectCategoryDeleteArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubjectCategory.
     * @param {SubjectCategoryUpdateArgs} args - Arguments to update one SubjectCategory.
     * @example
     * // Update one SubjectCategory
     * const subjectCategory = await prisma.subjectCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectCategoryUpdateArgs>(args: SelectSubset<T, SubjectCategoryUpdateArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubjectCategories.
     * @param {SubjectCategoryDeleteManyArgs} args - Arguments to filter SubjectCategories to delete.
     * @example
     * // Delete a few SubjectCategories
     * const { count } = await prisma.subjectCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectCategoryDeleteManyArgs>(args?: SelectSubset<T, SubjectCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubjectCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubjectCategories
     * const subjectCategory = await prisma.subjectCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectCategoryUpdateManyArgs>(args: SelectSubset<T, SubjectCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubjectCategories and returns the data updated in the database.
     * @param {SubjectCategoryUpdateManyAndReturnArgs} args - Arguments to update many SubjectCategories.
     * @example
     * // Update many SubjectCategories
     * const subjectCategory = await prisma.subjectCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubjectCategories and only return the `id`
     * const subjectCategoryWithIdOnly = await prisma.subjectCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubjectCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubjectCategory.
     * @param {SubjectCategoryUpsertArgs} args - Arguments to update or create a SubjectCategory.
     * @example
     * // Update or create a SubjectCategory
     * const subjectCategory = await prisma.subjectCategory.upsert({
     *   create: {
     *     // ... data to create a SubjectCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubjectCategory we want to update
     *   }
     * })
     */
    upsert<T extends SubjectCategoryUpsertArgs>(args: SelectSubset<T, SubjectCategoryUpsertArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubjectCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCategoryCountArgs} args - Arguments to filter SubjectCategories to count.
     * @example
     * // Count the number of SubjectCategories
     * const count = await prisma.subjectCategory.count({
     *   where: {
     *     // ... the filter for the SubjectCategories we want to count
     *   }
     * })
    **/
    count<T extends SubjectCategoryCountArgs>(
      args?: Subset<T, SubjectCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubjectCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectCategoryAggregateArgs>(args: Subset<T, SubjectCategoryAggregateArgs>): Prisma.PrismaPromise<GetSubjectCategoryAggregateType<T>>

    /**
     * Group by SubjectCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCategoryGroupByArgs} args - Group by arguments.
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
      T extends SubjectCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SubjectCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubjectCategory model
   */
  readonly fields: SubjectCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubjectCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutors<T extends SubjectCategory$tutorsArgs<ExtArgs> = {}>(args?: Subset<T, SubjectCategory$tutorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubjectCategory model
   */
  interface SubjectCategoryFieldRefs {
    readonly id: FieldRef<"SubjectCategory", 'Int'>
    readonly name: FieldRef<"SubjectCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubjectCategory findUnique
   */
  export type SubjectCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubjectCategory to fetch.
     */
    where: SubjectCategoryWhereUniqueInput
  }

  /**
   * SubjectCategory findUniqueOrThrow
   */
  export type SubjectCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubjectCategory to fetch.
     */
    where: SubjectCategoryWhereUniqueInput
  }

  /**
   * SubjectCategory findFirst
   */
  export type SubjectCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubjectCategory to fetch.
     */
    where?: SubjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectCategories to fetch.
     */
    orderBy?: SubjectCategoryOrderByWithRelationInput | SubjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubjectCategories.
     */
    cursor?: SubjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubjectCategories.
     */
    distinct?: SubjectCategoryScalarFieldEnum | SubjectCategoryScalarFieldEnum[]
  }

  /**
   * SubjectCategory findFirstOrThrow
   */
  export type SubjectCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubjectCategory to fetch.
     */
    where?: SubjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectCategories to fetch.
     */
    orderBy?: SubjectCategoryOrderByWithRelationInput | SubjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubjectCategories.
     */
    cursor?: SubjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubjectCategories.
     */
    distinct?: SubjectCategoryScalarFieldEnum | SubjectCategoryScalarFieldEnum[]
  }

  /**
   * SubjectCategory findMany
   */
  export type SubjectCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubjectCategories to fetch.
     */
    where?: SubjectCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubjectCategories to fetch.
     */
    orderBy?: SubjectCategoryOrderByWithRelationInput | SubjectCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubjectCategories.
     */
    cursor?: SubjectCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubjectCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubjectCategories.
     */
    skip?: number
    distinct?: SubjectCategoryScalarFieldEnum | SubjectCategoryScalarFieldEnum[]
  }

  /**
   * SubjectCategory create
   */
  export type SubjectCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SubjectCategory.
     */
    data: XOR<SubjectCategoryCreateInput, SubjectCategoryUncheckedCreateInput>
  }

  /**
   * SubjectCategory createMany
   */
  export type SubjectCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubjectCategories.
     */
    data: SubjectCategoryCreateManyInput | SubjectCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubjectCategory createManyAndReturn
   */
  export type SubjectCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many SubjectCategories.
     */
    data: SubjectCategoryCreateManyInput | SubjectCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubjectCategory update
   */
  export type SubjectCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SubjectCategory.
     */
    data: XOR<SubjectCategoryUpdateInput, SubjectCategoryUncheckedUpdateInput>
    /**
     * Choose, which SubjectCategory to update.
     */
    where: SubjectCategoryWhereUniqueInput
  }

  /**
   * SubjectCategory updateMany
   */
  export type SubjectCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubjectCategories.
     */
    data: XOR<SubjectCategoryUpdateManyMutationInput, SubjectCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubjectCategories to update
     */
    where?: SubjectCategoryWhereInput
    /**
     * Limit how many SubjectCategories to update.
     */
    limit?: number
  }

  /**
   * SubjectCategory updateManyAndReturn
   */
  export type SubjectCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * The data used to update SubjectCategories.
     */
    data: XOR<SubjectCategoryUpdateManyMutationInput, SubjectCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubjectCategories to update
     */
    where?: SubjectCategoryWhereInput
    /**
     * Limit how many SubjectCategories to update.
     */
    limit?: number
  }

  /**
   * SubjectCategory upsert
   */
  export type SubjectCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SubjectCategory to update in case it exists.
     */
    where: SubjectCategoryWhereUniqueInput
    /**
     * In case the SubjectCategory found by the `where` argument doesn't exist, create a new SubjectCategory with this data.
     */
    create: XOR<SubjectCategoryCreateInput, SubjectCategoryUncheckedCreateInput>
    /**
     * In case the SubjectCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectCategoryUpdateInput, SubjectCategoryUncheckedUpdateInput>
  }

  /**
   * SubjectCategory delete
   */
  export type SubjectCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
    /**
     * Filter which SubjectCategory to delete.
     */
    where: SubjectCategoryWhereUniqueInput
  }

  /**
   * SubjectCategory deleteMany
   */
  export type SubjectCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubjectCategories to delete
     */
    where?: SubjectCategoryWhereInput
    /**
     * Limit how many SubjectCategories to delete.
     */
    limit?: number
  }

  /**
   * SubjectCategory.tutors
   */
  export type SubjectCategory$tutorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    where?: TutorSubjectWhereInput
    orderBy?: TutorSubjectOrderByWithRelationInput | TutorSubjectOrderByWithRelationInput[]
    cursor?: TutorSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TutorSubjectScalarFieldEnum | TutorSubjectScalarFieldEnum[]
  }

  /**
   * SubjectCategory without action
   */
  export type SubjectCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCategory
     */
    select?: SubjectCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubjectCategory
     */
    omit?: SubjectCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectCategoryInclude<ExtArgs> | null
  }


  /**
   * Model TutorSubject
   */

  export type AggregateTutorSubject = {
    _count: TutorSubjectCountAggregateOutputType | null
    _avg: TutorSubjectAvgAggregateOutputType | null
    _sum: TutorSubjectSumAggregateOutputType | null
    _min: TutorSubjectMinAggregateOutputType | null
    _max: TutorSubjectMaxAggregateOutputType | null
  }

  export type TutorSubjectAvgAggregateOutputType = {
    id: number | null
    tutorId: number | null
    categoryId: number | null
  }

  export type TutorSubjectSumAggregateOutputType = {
    id: number | null
    tutorId: number | null
    categoryId: number | null
  }

  export type TutorSubjectMinAggregateOutputType = {
    id: number | null
    tutorId: number | null
    categoryId: number | null
  }

  export type TutorSubjectMaxAggregateOutputType = {
    id: number | null
    tutorId: number | null
    categoryId: number | null
  }

  export type TutorSubjectCountAggregateOutputType = {
    id: number
    tutorId: number
    categoryId: number
    _all: number
  }


  export type TutorSubjectAvgAggregateInputType = {
    id?: true
    tutorId?: true
    categoryId?: true
  }

  export type TutorSubjectSumAggregateInputType = {
    id?: true
    tutorId?: true
    categoryId?: true
  }

  export type TutorSubjectMinAggregateInputType = {
    id?: true
    tutorId?: true
    categoryId?: true
  }

  export type TutorSubjectMaxAggregateInputType = {
    id?: true
    tutorId?: true
    categoryId?: true
  }

  export type TutorSubjectCountAggregateInputType = {
    id?: true
    tutorId?: true
    categoryId?: true
    _all?: true
  }

  export type TutorSubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorSubject to aggregate.
     */
    where?: TutorSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorSubjects to fetch.
     */
    orderBy?: TutorSubjectOrderByWithRelationInput | TutorSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutorSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TutorSubjects
    **/
    _count?: true | TutorSubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TutorSubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TutorSubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorSubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorSubjectMaxAggregateInputType
  }

  export type GetTutorSubjectAggregateType<T extends TutorSubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateTutorSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutorSubject[P]>
      : GetScalarType<T[P], AggregateTutorSubject[P]>
  }




  export type TutorSubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorSubjectWhereInput
    orderBy?: TutorSubjectOrderByWithAggregationInput | TutorSubjectOrderByWithAggregationInput[]
    by: TutorSubjectScalarFieldEnum[] | TutorSubjectScalarFieldEnum
    having?: TutorSubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorSubjectCountAggregateInputType | true
    _avg?: TutorSubjectAvgAggregateInputType
    _sum?: TutorSubjectSumAggregateInputType
    _min?: TutorSubjectMinAggregateInputType
    _max?: TutorSubjectMaxAggregateInputType
  }

  export type TutorSubjectGroupByOutputType = {
    id: number
    tutorId: number
    categoryId: number
    _count: TutorSubjectCountAggregateOutputType | null
    _avg: TutorSubjectAvgAggregateOutputType | null
    _sum: TutorSubjectSumAggregateOutputType | null
    _min: TutorSubjectMinAggregateOutputType | null
    _max: TutorSubjectMaxAggregateOutputType | null
  }

  type GetTutorSubjectGroupByPayload<T extends TutorSubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorSubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorSubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorSubjectGroupByOutputType[P]>
            : GetScalarType<T[P], TutorSubjectGroupByOutputType[P]>
        }
      >
    >


  export type TutorSubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorId?: boolean
    categoryId?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    category?: boolean | SubjectCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorSubject"]>

  export type TutorSubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorId?: boolean
    categoryId?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    category?: boolean | SubjectCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorSubject"]>

  export type TutorSubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tutorId?: boolean
    categoryId?: boolean
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    category?: boolean | SubjectCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutorSubject"]>

  export type TutorSubjectSelectScalar = {
    id?: boolean
    tutorId?: boolean
    categoryId?: boolean
  }

  export type TutorSubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tutorId" | "categoryId", ExtArgs["result"]["tutorSubject"]>
  export type TutorSubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    category?: boolean | SubjectCategoryDefaultArgs<ExtArgs>
  }
  export type TutorSubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    category?: boolean | SubjectCategoryDefaultArgs<ExtArgs>
  }
  export type TutorSubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | TutorProfileDefaultArgs<ExtArgs>
    category?: boolean | SubjectCategoryDefaultArgs<ExtArgs>
  }

  export type $TutorSubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TutorSubject"
    objects: {
      tutor: Prisma.$TutorProfilePayload<ExtArgs>
      category: Prisma.$SubjectCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tutorId: number
      categoryId: number
    }, ExtArgs["result"]["tutorSubject"]>
    composites: {}
  }

  type TutorSubjectGetPayload<S extends boolean | null | undefined | TutorSubjectDefaultArgs> = $Result.GetResult<Prisma.$TutorSubjectPayload, S>

  type TutorSubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutorSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutorSubjectCountAggregateInputType | true
    }

  export interface TutorSubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TutorSubject'], meta: { name: 'TutorSubject' } }
    /**
     * Find zero or one TutorSubject that matches the filter.
     * @param {TutorSubjectFindUniqueArgs} args - Arguments to find a TutorSubject
     * @example
     * // Get one TutorSubject
     * const tutorSubject = await prisma.tutorSubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutorSubjectFindUniqueArgs>(args: SelectSubset<T, TutorSubjectFindUniqueArgs<ExtArgs>>): Prisma__TutorSubjectClient<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TutorSubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutorSubjectFindUniqueOrThrowArgs} args - Arguments to find a TutorSubject
     * @example
     * // Get one TutorSubject
     * const tutorSubject = await prisma.tutorSubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutorSubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, TutorSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutorSubjectClient<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorSubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSubjectFindFirstArgs} args - Arguments to find a TutorSubject
     * @example
     * // Get one TutorSubject
     * const tutorSubject = await prisma.tutorSubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutorSubjectFindFirstArgs>(args?: SelectSubset<T, TutorSubjectFindFirstArgs<ExtArgs>>): Prisma__TutorSubjectClient<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutorSubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSubjectFindFirstOrThrowArgs} args - Arguments to find a TutorSubject
     * @example
     * // Get one TutorSubject
     * const tutorSubject = await prisma.tutorSubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutorSubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, TutorSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutorSubjectClient<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TutorSubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TutorSubjects
     * const tutorSubjects = await prisma.tutorSubject.findMany()
     * 
     * // Get first 10 TutorSubjects
     * const tutorSubjects = await prisma.tutorSubject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutorSubjectWithIdOnly = await prisma.tutorSubject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TutorSubjectFindManyArgs>(args?: SelectSubset<T, TutorSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TutorSubject.
     * @param {TutorSubjectCreateArgs} args - Arguments to create a TutorSubject.
     * @example
     * // Create one TutorSubject
     * const TutorSubject = await prisma.tutorSubject.create({
     *   data: {
     *     // ... data to create a TutorSubject
     *   }
     * })
     * 
     */
    create<T extends TutorSubjectCreateArgs>(args: SelectSubset<T, TutorSubjectCreateArgs<ExtArgs>>): Prisma__TutorSubjectClient<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TutorSubjects.
     * @param {TutorSubjectCreateManyArgs} args - Arguments to create many TutorSubjects.
     * @example
     * // Create many TutorSubjects
     * const tutorSubject = await prisma.tutorSubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutorSubjectCreateManyArgs>(args?: SelectSubset<T, TutorSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TutorSubjects and returns the data saved in the database.
     * @param {TutorSubjectCreateManyAndReturnArgs} args - Arguments to create many TutorSubjects.
     * @example
     * // Create many TutorSubjects
     * const tutorSubject = await prisma.tutorSubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TutorSubjects and only return the `id`
     * const tutorSubjectWithIdOnly = await prisma.tutorSubject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TutorSubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, TutorSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TutorSubject.
     * @param {TutorSubjectDeleteArgs} args - Arguments to delete one TutorSubject.
     * @example
     * // Delete one TutorSubject
     * const TutorSubject = await prisma.tutorSubject.delete({
     *   where: {
     *     // ... filter to delete one TutorSubject
     *   }
     * })
     * 
     */
    delete<T extends TutorSubjectDeleteArgs>(args: SelectSubset<T, TutorSubjectDeleteArgs<ExtArgs>>): Prisma__TutorSubjectClient<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TutorSubject.
     * @param {TutorSubjectUpdateArgs} args - Arguments to update one TutorSubject.
     * @example
     * // Update one TutorSubject
     * const tutorSubject = await prisma.tutorSubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutorSubjectUpdateArgs>(args: SelectSubset<T, TutorSubjectUpdateArgs<ExtArgs>>): Prisma__TutorSubjectClient<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TutorSubjects.
     * @param {TutorSubjectDeleteManyArgs} args - Arguments to filter TutorSubjects to delete.
     * @example
     * // Delete a few TutorSubjects
     * const { count } = await prisma.tutorSubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutorSubjectDeleteManyArgs>(args?: SelectSubset<T, TutorSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TutorSubjects
     * const tutorSubject = await prisma.tutorSubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutorSubjectUpdateManyArgs>(args: SelectSubset<T, TutorSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutorSubjects and returns the data updated in the database.
     * @param {TutorSubjectUpdateManyAndReturnArgs} args - Arguments to update many TutorSubjects.
     * @example
     * // Update many TutorSubjects
     * const tutorSubject = await prisma.tutorSubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TutorSubjects and only return the `id`
     * const tutorSubjectWithIdOnly = await prisma.tutorSubject.updateManyAndReturn({
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
    updateManyAndReturn<T extends TutorSubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, TutorSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TutorSubject.
     * @param {TutorSubjectUpsertArgs} args - Arguments to update or create a TutorSubject.
     * @example
     * // Update or create a TutorSubject
     * const tutorSubject = await prisma.tutorSubject.upsert({
     *   create: {
     *     // ... data to create a TutorSubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TutorSubject we want to update
     *   }
     * })
     */
    upsert<T extends TutorSubjectUpsertArgs>(args: SelectSubset<T, TutorSubjectUpsertArgs<ExtArgs>>): Prisma__TutorSubjectClient<$Result.GetResult<Prisma.$TutorSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TutorSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSubjectCountArgs} args - Arguments to filter TutorSubjects to count.
     * @example
     * // Count the number of TutorSubjects
     * const count = await prisma.tutorSubject.count({
     *   where: {
     *     // ... the filter for the TutorSubjects we want to count
     *   }
     * })
    **/
    count<T extends TutorSubjectCountArgs>(
      args?: Subset<T, TutorSubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorSubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TutorSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TutorSubjectAggregateArgs>(args: Subset<T, TutorSubjectAggregateArgs>): Prisma.PrismaPromise<GetTutorSubjectAggregateType<T>>

    /**
     * Group by TutorSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorSubjectGroupByArgs} args - Group by arguments.
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
      T extends TutorSubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutorSubjectGroupByArgs['orderBy'] }
        : { orderBy?: TutorSubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TutorSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TutorSubject model
   */
  readonly fields: TutorSubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TutorSubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutorSubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tutor<T extends TutorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorProfileDefaultArgs<ExtArgs>>): Prisma__TutorProfileClient<$Result.GetResult<Prisma.$TutorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends SubjectCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectCategoryDefaultArgs<ExtArgs>>): Prisma__SubjectCategoryClient<$Result.GetResult<Prisma.$SubjectCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TutorSubject model
   */
  interface TutorSubjectFieldRefs {
    readonly id: FieldRef<"TutorSubject", 'Int'>
    readonly tutorId: FieldRef<"TutorSubject", 'Int'>
    readonly categoryId: FieldRef<"TutorSubject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TutorSubject findUnique
   */
  export type TutorSubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TutorSubject to fetch.
     */
    where: TutorSubjectWhereUniqueInput
  }

  /**
   * TutorSubject findUniqueOrThrow
   */
  export type TutorSubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TutorSubject to fetch.
     */
    where: TutorSubjectWhereUniqueInput
  }

  /**
   * TutorSubject findFirst
   */
  export type TutorSubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TutorSubject to fetch.
     */
    where?: TutorSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorSubjects to fetch.
     */
    orderBy?: TutorSubjectOrderByWithRelationInput | TutorSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorSubjects.
     */
    cursor?: TutorSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorSubjects.
     */
    distinct?: TutorSubjectScalarFieldEnum | TutorSubjectScalarFieldEnum[]
  }

  /**
   * TutorSubject findFirstOrThrow
   */
  export type TutorSubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TutorSubject to fetch.
     */
    where?: TutorSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorSubjects to fetch.
     */
    orderBy?: TutorSubjectOrderByWithRelationInput | TutorSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutorSubjects.
     */
    cursor?: TutorSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutorSubjects.
     */
    distinct?: TutorSubjectScalarFieldEnum | TutorSubjectScalarFieldEnum[]
  }

  /**
   * TutorSubject findMany
   */
  export type TutorSubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TutorSubjects to fetch.
     */
    where?: TutorSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutorSubjects to fetch.
     */
    orderBy?: TutorSubjectOrderByWithRelationInput | TutorSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TutorSubjects.
     */
    cursor?: TutorSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutorSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutorSubjects.
     */
    skip?: number
    distinct?: TutorSubjectScalarFieldEnum | TutorSubjectScalarFieldEnum[]
  }

  /**
   * TutorSubject create
   */
  export type TutorSubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a TutorSubject.
     */
    data: XOR<TutorSubjectCreateInput, TutorSubjectUncheckedCreateInput>
  }

  /**
   * TutorSubject createMany
   */
  export type TutorSubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TutorSubjects.
     */
    data: TutorSubjectCreateManyInput | TutorSubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TutorSubject createManyAndReturn
   */
  export type TutorSubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * The data used to create many TutorSubjects.
     */
    data: TutorSubjectCreateManyInput | TutorSubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorSubject update
   */
  export type TutorSubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a TutorSubject.
     */
    data: XOR<TutorSubjectUpdateInput, TutorSubjectUncheckedUpdateInput>
    /**
     * Choose, which TutorSubject to update.
     */
    where: TutorSubjectWhereUniqueInput
  }

  /**
   * TutorSubject updateMany
   */
  export type TutorSubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TutorSubjects.
     */
    data: XOR<TutorSubjectUpdateManyMutationInput, TutorSubjectUncheckedUpdateManyInput>
    /**
     * Filter which TutorSubjects to update
     */
    where?: TutorSubjectWhereInput
    /**
     * Limit how many TutorSubjects to update.
     */
    limit?: number
  }

  /**
   * TutorSubject updateManyAndReturn
   */
  export type TutorSubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * The data used to update TutorSubjects.
     */
    data: XOR<TutorSubjectUpdateManyMutationInput, TutorSubjectUncheckedUpdateManyInput>
    /**
     * Filter which TutorSubjects to update
     */
    where?: TutorSubjectWhereInput
    /**
     * Limit how many TutorSubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutorSubject upsert
   */
  export type TutorSubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the TutorSubject to update in case it exists.
     */
    where: TutorSubjectWhereUniqueInput
    /**
     * In case the TutorSubject found by the `where` argument doesn't exist, create a new TutorSubject with this data.
     */
    create: XOR<TutorSubjectCreateInput, TutorSubjectUncheckedCreateInput>
    /**
     * In case the TutorSubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutorSubjectUpdateInput, TutorSubjectUncheckedUpdateInput>
  }

  /**
   * TutorSubject delete
   */
  export type TutorSubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
    /**
     * Filter which TutorSubject to delete.
     */
    where: TutorSubjectWhereUniqueInput
  }

  /**
   * TutorSubject deleteMany
   */
  export type TutorSubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutorSubjects to delete
     */
    where?: TutorSubjectWhereInput
    /**
     * Limit how many TutorSubjects to delete.
     */
    limit?: number
  }

  /**
   * TutorSubject without action
   */
  export type TutorSubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorSubject
     */
    select?: TutorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutorSubject
     */
    omit?: TutorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorSubjectInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TutorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tutorName: 'tutorName',
    province: 'province',
    image: 'image',
    pricePerHour: 'pricePerHour',
    description: 'description',
    phoneNumber: 'phoneNumber',
    verifyed: 'verifyed'
  };

  export type TutorProfileScalarFieldEnum = (typeof TutorProfileScalarFieldEnum)[keyof typeof TutorProfileScalarFieldEnum]


  export const AvailableTimeScalarFieldEnum: {
    id: 'id',
    dayStart: 'dayStart',
    dayEnd: 'dayEnd',
    timeStart: 'timeStart',
    timeEnd: 'timeEnd',
    tutorId: 'tutorId'
  };

  export type AvailableTimeScalarFieldEnum = (typeof AvailableTimeScalarFieldEnum)[keyof typeof AvailableTimeScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    detail: 'detail',
    tutorId: 'tutorId'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    rating: 'rating',
    tutorId: 'tutorId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SubjectCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SubjectCategoryScalarFieldEnum = (typeof SubjectCategoryScalarFieldEnum)[keyof typeof SubjectCategoryScalarFieldEnum]


  export const TutorSubjectScalarFieldEnum: {
    id: 'id',
    tutorId: 'tutorId',
    categoryId: 'categoryId'
  };

  export type TutorSubjectScalarFieldEnum = (typeof TutorSubjectScalarFieldEnum)[keyof typeof TutorSubjectScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tutorProfile?: XOR<TutorProfileNullableScalarRelationFilter, TutorProfileWhereInput> | null
    reviews?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tutorProfile?: TutorProfileOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tutorProfile?: XOR<TutorProfileNullableScalarRelationFilter, TutorProfileWhereInput> | null
    reviews?: ReviewListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TutorProfileWhereInput = {
    AND?: TutorProfileWhereInput | TutorProfileWhereInput[]
    OR?: TutorProfileWhereInput[]
    NOT?: TutorProfileWhereInput | TutorProfileWhereInput[]
    id?: IntFilter<"TutorProfile"> | number
    userId?: IntFilter<"TutorProfile"> | number
    tutorName?: StringFilter<"TutorProfile"> | string
    province?: StringFilter<"TutorProfile"> | string
    image?: StringFilter<"TutorProfile"> | string
    pricePerHour?: IntFilter<"TutorProfile"> | number
    description?: StringFilter<"TutorProfile"> | string
    phoneNumber?: StringFilter<"TutorProfile"> | string
    verifyed?: BoolFilter<"TutorProfile"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    availableTimes?: AvailableTimeListRelationFilter
    tutorSubjects?: TutorSubjectListRelationFilter
    experiences?: ExperienceListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type TutorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tutorName?: SortOrder
    province?: SortOrder
    image?: SortOrder
    pricePerHour?: SortOrder
    description?: SortOrder
    phoneNumber?: SortOrder
    verifyed?: SortOrder
    user?: UserOrderByWithRelationInput
    availableTimes?: AvailableTimeOrderByRelationAggregateInput
    tutorSubjects?: TutorSubjectOrderByRelationAggregateInput
    experiences?: ExperienceOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type TutorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: TutorProfileWhereInput | TutorProfileWhereInput[]
    OR?: TutorProfileWhereInput[]
    NOT?: TutorProfileWhereInput | TutorProfileWhereInput[]
    tutorName?: StringFilter<"TutorProfile"> | string
    province?: StringFilter<"TutorProfile"> | string
    image?: StringFilter<"TutorProfile"> | string
    pricePerHour?: IntFilter<"TutorProfile"> | number
    description?: StringFilter<"TutorProfile"> | string
    phoneNumber?: StringFilter<"TutorProfile"> | string
    verifyed?: BoolFilter<"TutorProfile"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    availableTimes?: AvailableTimeListRelationFilter
    tutorSubjects?: TutorSubjectListRelationFilter
    experiences?: ExperienceListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "userId">

  export type TutorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tutorName?: SortOrder
    province?: SortOrder
    image?: SortOrder
    pricePerHour?: SortOrder
    description?: SortOrder
    phoneNumber?: SortOrder
    verifyed?: SortOrder
    _count?: TutorProfileCountOrderByAggregateInput
    _avg?: TutorProfileAvgOrderByAggregateInput
    _max?: TutorProfileMaxOrderByAggregateInput
    _min?: TutorProfileMinOrderByAggregateInput
    _sum?: TutorProfileSumOrderByAggregateInput
  }

  export type TutorProfileScalarWhereWithAggregatesInput = {
    AND?: TutorProfileScalarWhereWithAggregatesInput | TutorProfileScalarWhereWithAggregatesInput[]
    OR?: TutorProfileScalarWhereWithAggregatesInput[]
    NOT?: TutorProfileScalarWhereWithAggregatesInput | TutorProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TutorProfile"> | number
    userId?: IntWithAggregatesFilter<"TutorProfile"> | number
    tutorName?: StringWithAggregatesFilter<"TutorProfile"> | string
    province?: StringWithAggregatesFilter<"TutorProfile"> | string
    image?: StringWithAggregatesFilter<"TutorProfile"> | string
    pricePerHour?: IntWithAggregatesFilter<"TutorProfile"> | number
    description?: StringWithAggregatesFilter<"TutorProfile"> | string
    phoneNumber?: StringWithAggregatesFilter<"TutorProfile"> | string
    verifyed?: BoolWithAggregatesFilter<"TutorProfile"> | boolean
  }

  export type AvailableTimeWhereInput = {
    AND?: AvailableTimeWhereInput | AvailableTimeWhereInput[]
    OR?: AvailableTimeWhereInput[]
    NOT?: AvailableTimeWhereInput | AvailableTimeWhereInput[]
    id?: IntFilter<"AvailableTime"> | number
    dayStart?: StringFilter<"AvailableTime"> | string
    dayEnd?: StringFilter<"AvailableTime"> | string
    timeStart?: StringFilter<"AvailableTime"> | string
    timeEnd?: StringFilter<"AvailableTime"> | string
    tutorId?: IntFilter<"AvailableTime"> | number
    tutor?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
  }

  export type AvailableTimeOrderByWithRelationInput = {
    id?: SortOrder
    dayStart?: SortOrder
    dayEnd?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
    tutorId?: SortOrder
    tutor?: TutorProfileOrderByWithRelationInput
  }

  export type AvailableTimeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AvailableTimeWhereInput | AvailableTimeWhereInput[]
    OR?: AvailableTimeWhereInput[]
    NOT?: AvailableTimeWhereInput | AvailableTimeWhereInput[]
    dayStart?: StringFilter<"AvailableTime"> | string
    dayEnd?: StringFilter<"AvailableTime"> | string
    timeStart?: StringFilter<"AvailableTime"> | string
    timeEnd?: StringFilter<"AvailableTime"> | string
    tutorId?: IntFilter<"AvailableTime"> | number
    tutor?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
  }, "id">

  export type AvailableTimeOrderByWithAggregationInput = {
    id?: SortOrder
    dayStart?: SortOrder
    dayEnd?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
    tutorId?: SortOrder
    _count?: AvailableTimeCountOrderByAggregateInput
    _avg?: AvailableTimeAvgOrderByAggregateInput
    _max?: AvailableTimeMaxOrderByAggregateInput
    _min?: AvailableTimeMinOrderByAggregateInput
    _sum?: AvailableTimeSumOrderByAggregateInput
  }

  export type AvailableTimeScalarWhereWithAggregatesInput = {
    AND?: AvailableTimeScalarWhereWithAggregatesInput | AvailableTimeScalarWhereWithAggregatesInput[]
    OR?: AvailableTimeScalarWhereWithAggregatesInput[]
    NOT?: AvailableTimeScalarWhereWithAggregatesInput | AvailableTimeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AvailableTime"> | number
    dayStart?: StringWithAggregatesFilter<"AvailableTime"> | string
    dayEnd?: StringWithAggregatesFilter<"AvailableTime"> | string
    timeStart?: StringWithAggregatesFilter<"AvailableTime"> | string
    timeEnd?: StringWithAggregatesFilter<"AvailableTime"> | string
    tutorId?: IntWithAggregatesFilter<"AvailableTime"> | number
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: IntFilter<"Experience"> | number
    detail?: StringFilter<"Experience"> | string
    tutorId?: IntFilter<"Experience"> | number
    tutor?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    detail?: SortOrder
    tutorId?: SortOrder
    tutor?: TutorProfileOrderByWithRelationInput
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    detail?: StringFilter<"Experience"> | string
    tutorId?: IntFilter<"Experience"> | number
    tutor?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    detail?: SortOrder
    tutorId?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _avg?: ExperienceAvgOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
    _sum?: ExperienceSumOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Experience"> | number
    detail?: StringWithAggregatesFilter<"Experience"> | string
    tutorId?: IntWithAggregatesFilter<"Experience"> | number
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    tutorId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    tutor?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    tutorId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    tutor?: TutorProfileOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    comment?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    tutorId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    tutor?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    tutorId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    tutorId?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntWithAggregatesFilter<"Review"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type SubjectCategoryWhereInput = {
    AND?: SubjectCategoryWhereInput | SubjectCategoryWhereInput[]
    OR?: SubjectCategoryWhereInput[]
    NOT?: SubjectCategoryWhereInput | SubjectCategoryWhereInput[]
    id?: IntFilter<"SubjectCategory"> | number
    name?: StringFilter<"SubjectCategory"> | string
    tutors?: TutorSubjectListRelationFilter
  }

  export type SubjectCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tutors?: TutorSubjectOrderByRelationAggregateInput
  }

  export type SubjectCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SubjectCategoryWhereInput | SubjectCategoryWhereInput[]
    OR?: SubjectCategoryWhereInput[]
    NOT?: SubjectCategoryWhereInput | SubjectCategoryWhereInput[]
    tutors?: TutorSubjectListRelationFilter
  }, "id" | "name">

  export type SubjectCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SubjectCategoryCountOrderByAggregateInput
    _avg?: SubjectCategoryAvgOrderByAggregateInput
    _max?: SubjectCategoryMaxOrderByAggregateInput
    _min?: SubjectCategoryMinOrderByAggregateInput
    _sum?: SubjectCategorySumOrderByAggregateInput
  }

  export type SubjectCategoryScalarWhereWithAggregatesInput = {
    AND?: SubjectCategoryScalarWhereWithAggregatesInput | SubjectCategoryScalarWhereWithAggregatesInput[]
    OR?: SubjectCategoryScalarWhereWithAggregatesInput[]
    NOT?: SubjectCategoryScalarWhereWithAggregatesInput | SubjectCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubjectCategory"> | number
    name?: StringWithAggregatesFilter<"SubjectCategory"> | string
  }

  export type TutorSubjectWhereInput = {
    AND?: TutorSubjectWhereInput | TutorSubjectWhereInput[]
    OR?: TutorSubjectWhereInput[]
    NOT?: TutorSubjectWhereInput | TutorSubjectWhereInput[]
    id?: IntFilter<"TutorSubject"> | number
    tutorId?: IntFilter<"TutorSubject"> | number
    categoryId?: IntFilter<"TutorSubject"> | number
    tutor?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
    category?: XOR<SubjectCategoryScalarRelationFilter, SubjectCategoryWhereInput>
  }

  export type TutorSubjectOrderByWithRelationInput = {
    id?: SortOrder
    tutorId?: SortOrder
    categoryId?: SortOrder
    tutor?: TutorProfileOrderByWithRelationInput
    category?: SubjectCategoryOrderByWithRelationInput
  }

  export type TutorSubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TutorSubjectWhereInput | TutorSubjectWhereInput[]
    OR?: TutorSubjectWhereInput[]
    NOT?: TutorSubjectWhereInput | TutorSubjectWhereInput[]
    tutorId?: IntFilter<"TutorSubject"> | number
    categoryId?: IntFilter<"TutorSubject"> | number
    tutor?: XOR<TutorProfileScalarRelationFilter, TutorProfileWhereInput>
    category?: XOR<SubjectCategoryScalarRelationFilter, SubjectCategoryWhereInput>
  }, "id">

  export type TutorSubjectOrderByWithAggregationInput = {
    id?: SortOrder
    tutorId?: SortOrder
    categoryId?: SortOrder
    _count?: TutorSubjectCountOrderByAggregateInput
    _avg?: TutorSubjectAvgOrderByAggregateInput
    _max?: TutorSubjectMaxOrderByAggregateInput
    _min?: TutorSubjectMinOrderByAggregateInput
    _sum?: TutorSubjectSumOrderByAggregateInput
  }

  export type TutorSubjectScalarWhereWithAggregatesInput = {
    AND?: TutorSubjectScalarWhereWithAggregatesInput | TutorSubjectScalarWhereWithAggregatesInput[]
    OR?: TutorSubjectScalarWhereWithAggregatesInput[]
    NOT?: TutorSubjectScalarWhereWithAggregatesInput | TutorSubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TutorSubject"> | number
    tutorId?: IntWithAggregatesFilter<"TutorSubject"> | number
    categoryId?: IntWithAggregatesFilter<"TutorSubject"> | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tutorProfile?: TutorProfileCreateNestedOneWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tutorProfile?: TutorProfileUncheckedCreateNestedOneWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorProfile?: TutorProfileUpdateOneWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorProfile?: TutorProfileUncheckedUpdateOneWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorProfileCreateInput = {
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    description: string
    phoneNumber: string
    verifyed?: boolean
    user: UserCreateNestedOneWithoutTutorProfileInput
    availableTimes?: AvailableTimeCreateNestedManyWithoutTutorInput
    tutorSubjects?: TutorSubjectCreateNestedManyWithoutTutorInput
    experiences?: ExperienceCreateNestedManyWithoutTutorInput
    reviews?: ReviewCreateNestedManyWithoutTutorInput
  }

  export type TutorProfileUncheckedCreateInput = {
    id?: number
    userId: number
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    description: string
    phoneNumber: string
    verifyed?: boolean
    availableTimes?: AvailableTimeUncheckedCreateNestedManyWithoutTutorInput
    tutorSubjects?: TutorSubjectUncheckedCreateNestedManyWithoutTutorInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutTutorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorProfileUpdateInput = {
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
    availableTimes?: AvailableTimeUpdateManyWithoutTutorNestedInput
    tutorSubjects?: TutorSubjectUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUpdateManyWithoutTutorNestedInput
  }

  export type TutorProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    availableTimes?: AvailableTimeUncheckedUpdateManyWithoutTutorNestedInput
    tutorSubjects?: TutorSubjectUncheckedUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type TutorProfileCreateManyInput = {
    id?: number
    userId: number
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    description: string
    phoneNumber: string
    verifyed?: boolean
  }

  export type TutorProfileUpdateManyMutationInput = {
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TutorProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailableTimeCreateInput = {
    dayStart: string
    dayEnd: string
    timeStart: string
    timeEnd: string
    tutor: TutorProfileCreateNestedOneWithoutAvailableTimesInput
  }

  export type AvailableTimeUncheckedCreateInput = {
    id?: number
    dayStart: string
    dayEnd: string
    timeStart: string
    timeEnd: string
    tutorId: number
  }

  export type AvailableTimeUpdateInput = {
    dayStart?: StringFieldUpdateOperationsInput | string
    dayEnd?: StringFieldUpdateOperationsInput | string
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    tutor?: TutorProfileUpdateOneRequiredWithoutAvailableTimesNestedInput
  }

  export type AvailableTimeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayStart?: StringFieldUpdateOperationsInput | string
    dayEnd?: StringFieldUpdateOperationsInput | string
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    tutorId?: IntFieldUpdateOperationsInput | number
  }

  export type AvailableTimeCreateManyInput = {
    id?: number
    dayStart: string
    dayEnd: string
    timeStart: string
    timeEnd: string
    tutorId: number
  }

  export type AvailableTimeUpdateManyMutationInput = {
    dayStart?: StringFieldUpdateOperationsInput | string
    dayEnd?: StringFieldUpdateOperationsInput | string
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTimeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayStart?: StringFieldUpdateOperationsInput | string
    dayEnd?: StringFieldUpdateOperationsInput | string
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
    tutorId?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienceCreateInput = {
    detail: string
    tutor: TutorProfileCreateNestedOneWithoutExperiencesInput
  }

  export type ExperienceUncheckedCreateInput = {
    id?: number
    detail: string
    tutorId: number
  }

  export type ExperienceUpdateInput = {
    detail?: StringFieldUpdateOperationsInput | string
    tutor?: TutorProfileUpdateOneRequiredWithoutExperiencesNestedInput
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    detail?: StringFieldUpdateOperationsInput | string
    tutorId?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienceCreateManyInput = {
    id?: number
    detail: string
    tutorId: number
  }

  export type ExperienceUpdateManyMutationInput = {
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    detail?: StringFieldUpdateOperationsInput | string
    tutorId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateInput = {
    comment: string
    rating: number
    createdAt?: Date | string
    tutor: TutorProfileCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    comment: string
    rating: number
    tutorId: number
    userId: number
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutor?: TutorProfileUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    comment: string
    rating: number
    tutorId: number
    userId: number
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCategoryCreateInput = {
    name: string
    tutors?: TutorSubjectCreateNestedManyWithoutCategoryInput
  }

  export type SubjectCategoryUncheckedCreateInput = {
    id?: number
    name: string
    tutors?: TutorSubjectUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type SubjectCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tutors?: TutorSubjectUpdateManyWithoutCategoryNestedInput
  }

  export type SubjectCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tutors?: TutorSubjectUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type SubjectCategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type SubjectCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TutorSubjectCreateInput = {
    tutor: TutorProfileCreateNestedOneWithoutTutorSubjectsInput
    category: SubjectCategoryCreateNestedOneWithoutTutorsInput
  }

  export type TutorSubjectUncheckedCreateInput = {
    id?: number
    tutorId: number
    categoryId: number
  }

  export type TutorSubjectUpdateInput = {
    tutor?: TutorProfileUpdateOneRequiredWithoutTutorSubjectsNestedInput
    category?: SubjectCategoryUpdateOneRequiredWithoutTutorsNestedInput
  }

  export type TutorSubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type TutorSubjectCreateManyInput = {
    id?: number
    tutorId: number
    categoryId: number
  }

  export type TutorSubjectUpdateManyMutationInput = {

  }

  export type TutorSubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
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

  export type TutorProfileNullableScalarRelationFilter = {
    is?: TutorProfileWhereInput | null
    isNot?: TutorProfileWhereInput | null
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AvailableTimeListRelationFilter = {
    every?: AvailableTimeWhereInput
    some?: AvailableTimeWhereInput
    none?: AvailableTimeWhereInput
  }

  export type TutorSubjectListRelationFilter = {
    every?: TutorSubjectWhereInput
    some?: TutorSubjectWhereInput
    none?: TutorSubjectWhereInput
  }

  export type ExperienceListRelationFilter = {
    every?: ExperienceWhereInput
    some?: ExperienceWhereInput
    none?: ExperienceWhereInput
  }

  export type AvailableTimeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TutorSubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TutorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tutorName?: SortOrder
    province?: SortOrder
    image?: SortOrder
    pricePerHour?: SortOrder
    description?: SortOrder
    phoneNumber?: SortOrder
    verifyed?: SortOrder
  }

  export type TutorProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pricePerHour?: SortOrder
  }

  export type TutorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tutorName?: SortOrder
    province?: SortOrder
    image?: SortOrder
    pricePerHour?: SortOrder
    description?: SortOrder
    phoneNumber?: SortOrder
    verifyed?: SortOrder
  }

  export type TutorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tutorName?: SortOrder
    province?: SortOrder
    image?: SortOrder
    pricePerHour?: SortOrder
    description?: SortOrder
    phoneNumber?: SortOrder
    verifyed?: SortOrder
  }

  export type TutorProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pricePerHour?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TutorProfileScalarRelationFilter = {
    is?: TutorProfileWhereInput
    isNot?: TutorProfileWhereInput
  }

  export type AvailableTimeCountOrderByAggregateInput = {
    id?: SortOrder
    dayStart?: SortOrder
    dayEnd?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
    tutorId?: SortOrder
  }

  export type AvailableTimeAvgOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
  }

  export type AvailableTimeMaxOrderByAggregateInput = {
    id?: SortOrder
    dayStart?: SortOrder
    dayEnd?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
    tutorId?: SortOrder
  }

  export type AvailableTimeMinOrderByAggregateInput = {
    id?: SortOrder
    dayStart?: SortOrder
    dayEnd?: SortOrder
    timeStart?: SortOrder
    timeEnd?: SortOrder
    tutorId?: SortOrder
  }

  export type AvailableTimeSumOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    detail?: SortOrder
    tutorId?: SortOrder
  }

  export type ExperienceAvgOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    detail?: SortOrder
    tutorId?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    detail?: SortOrder
    tutorId?: SortOrder
  }

  export type ExperienceSumOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    tutorId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    tutorId?: SortOrder
    userId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    tutorId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    tutorId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    tutorId?: SortOrder
    userId?: SortOrder
  }

  export type SubjectCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SubjectCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubjectCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SubjectCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SubjectCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubjectCategoryScalarRelationFilter = {
    is?: SubjectCategoryWhereInput
    isNot?: SubjectCategoryWhereInput
  }

  export type TutorSubjectCountOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
    categoryId?: SortOrder
  }

  export type TutorSubjectAvgOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
    categoryId?: SortOrder
  }

  export type TutorSubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
    categoryId?: SortOrder
  }

  export type TutorSubjectMinOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
    categoryId?: SortOrder
  }

  export type TutorSubjectSumOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
    categoryId?: SortOrder
  }

  export type TutorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutUserInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TutorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutUserInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
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

  export type TutorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutUserInput
    upsert?: TutorProfileUpsertWithoutUserInput
    disconnect?: TutorProfileWhereInput | boolean
    delete?: TutorProfileWhereInput | boolean
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutUserInput, TutorProfileUpdateWithoutUserInput>, TutorProfileUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TutorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutUserInput
    upsert?: TutorProfileUpsertWithoutUserInput
    disconnect?: TutorProfileWhereInput | boolean
    delete?: TutorProfileWhereInput | boolean
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutUserInput, TutorProfileUpdateWithoutUserInput>, TutorProfileUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTutorProfileInput = {
    create?: XOR<UserCreateWithoutTutorProfileInput, UserUncheckedCreateWithoutTutorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTutorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type AvailableTimeCreateNestedManyWithoutTutorInput = {
    create?: XOR<AvailableTimeCreateWithoutTutorInput, AvailableTimeUncheckedCreateWithoutTutorInput> | AvailableTimeCreateWithoutTutorInput[] | AvailableTimeUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: AvailableTimeCreateOrConnectWithoutTutorInput | AvailableTimeCreateOrConnectWithoutTutorInput[]
    createMany?: AvailableTimeCreateManyTutorInputEnvelope
    connect?: AvailableTimeWhereUniqueInput | AvailableTimeWhereUniqueInput[]
  }

  export type TutorSubjectCreateNestedManyWithoutTutorInput = {
    create?: XOR<TutorSubjectCreateWithoutTutorInput, TutorSubjectUncheckedCreateWithoutTutorInput> | TutorSubjectCreateWithoutTutorInput[] | TutorSubjectUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TutorSubjectCreateOrConnectWithoutTutorInput | TutorSubjectCreateOrConnectWithoutTutorInput[]
    createMany?: TutorSubjectCreateManyTutorInputEnvelope
    connect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
  }

  export type ExperienceCreateNestedManyWithoutTutorInput = {
    create?: XOR<ExperienceCreateWithoutTutorInput, ExperienceUncheckedCreateWithoutTutorInput> | ExperienceCreateWithoutTutorInput[] | ExperienceUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutTutorInput | ExperienceCreateOrConnectWithoutTutorInput[]
    createMany?: ExperienceCreateManyTutorInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutTutorInput = {
    create?: XOR<ReviewCreateWithoutTutorInput, ReviewUncheckedCreateWithoutTutorInput> | ReviewCreateWithoutTutorInput[] | ReviewUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTutorInput | ReviewCreateOrConnectWithoutTutorInput[]
    createMany?: ReviewCreateManyTutorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type AvailableTimeUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<AvailableTimeCreateWithoutTutorInput, AvailableTimeUncheckedCreateWithoutTutorInput> | AvailableTimeCreateWithoutTutorInput[] | AvailableTimeUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: AvailableTimeCreateOrConnectWithoutTutorInput | AvailableTimeCreateOrConnectWithoutTutorInput[]
    createMany?: AvailableTimeCreateManyTutorInputEnvelope
    connect?: AvailableTimeWhereUniqueInput | AvailableTimeWhereUniqueInput[]
  }

  export type TutorSubjectUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<TutorSubjectCreateWithoutTutorInput, TutorSubjectUncheckedCreateWithoutTutorInput> | TutorSubjectCreateWithoutTutorInput[] | TutorSubjectUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TutorSubjectCreateOrConnectWithoutTutorInput | TutorSubjectCreateOrConnectWithoutTutorInput[]
    createMany?: TutorSubjectCreateManyTutorInputEnvelope
    connect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
  }

  export type ExperienceUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<ExperienceCreateWithoutTutorInput, ExperienceUncheckedCreateWithoutTutorInput> | ExperienceCreateWithoutTutorInput[] | ExperienceUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutTutorInput | ExperienceCreateOrConnectWithoutTutorInput[]
    createMany?: ExperienceCreateManyTutorInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<ReviewCreateWithoutTutorInput, ReviewUncheckedCreateWithoutTutorInput> | ReviewCreateWithoutTutorInput[] | ReviewUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTutorInput | ReviewCreateOrConnectWithoutTutorInput[]
    createMany?: ReviewCreateManyTutorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutTutorProfileNestedInput = {
    create?: XOR<UserCreateWithoutTutorProfileInput, UserUncheckedCreateWithoutTutorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTutorProfileInput
    upsert?: UserUpsertWithoutTutorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTutorProfileInput, UserUpdateWithoutTutorProfileInput>, UserUncheckedUpdateWithoutTutorProfileInput>
  }

  export type AvailableTimeUpdateManyWithoutTutorNestedInput = {
    create?: XOR<AvailableTimeCreateWithoutTutorInput, AvailableTimeUncheckedCreateWithoutTutorInput> | AvailableTimeCreateWithoutTutorInput[] | AvailableTimeUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: AvailableTimeCreateOrConnectWithoutTutorInput | AvailableTimeCreateOrConnectWithoutTutorInput[]
    upsert?: AvailableTimeUpsertWithWhereUniqueWithoutTutorInput | AvailableTimeUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: AvailableTimeCreateManyTutorInputEnvelope
    set?: AvailableTimeWhereUniqueInput | AvailableTimeWhereUniqueInput[]
    disconnect?: AvailableTimeWhereUniqueInput | AvailableTimeWhereUniqueInput[]
    delete?: AvailableTimeWhereUniqueInput | AvailableTimeWhereUniqueInput[]
    connect?: AvailableTimeWhereUniqueInput | AvailableTimeWhereUniqueInput[]
    update?: AvailableTimeUpdateWithWhereUniqueWithoutTutorInput | AvailableTimeUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: AvailableTimeUpdateManyWithWhereWithoutTutorInput | AvailableTimeUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: AvailableTimeScalarWhereInput | AvailableTimeScalarWhereInput[]
  }

  export type TutorSubjectUpdateManyWithoutTutorNestedInput = {
    create?: XOR<TutorSubjectCreateWithoutTutorInput, TutorSubjectUncheckedCreateWithoutTutorInput> | TutorSubjectCreateWithoutTutorInput[] | TutorSubjectUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TutorSubjectCreateOrConnectWithoutTutorInput | TutorSubjectCreateOrConnectWithoutTutorInput[]
    upsert?: TutorSubjectUpsertWithWhereUniqueWithoutTutorInput | TutorSubjectUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: TutorSubjectCreateManyTutorInputEnvelope
    set?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    disconnect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    delete?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    connect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    update?: TutorSubjectUpdateWithWhereUniqueWithoutTutorInput | TutorSubjectUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: TutorSubjectUpdateManyWithWhereWithoutTutorInput | TutorSubjectUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: TutorSubjectScalarWhereInput | TutorSubjectScalarWhereInput[]
  }

  export type ExperienceUpdateManyWithoutTutorNestedInput = {
    create?: XOR<ExperienceCreateWithoutTutorInput, ExperienceUncheckedCreateWithoutTutorInput> | ExperienceCreateWithoutTutorInput[] | ExperienceUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutTutorInput | ExperienceCreateOrConnectWithoutTutorInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutTutorInput | ExperienceUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: ExperienceCreateManyTutorInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutTutorInput | ExperienceUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutTutorInput | ExperienceUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutTutorNestedInput = {
    create?: XOR<ReviewCreateWithoutTutorInput, ReviewUncheckedCreateWithoutTutorInput> | ReviewCreateWithoutTutorInput[] | ReviewUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTutorInput | ReviewCreateOrConnectWithoutTutorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTutorInput | ReviewUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: ReviewCreateManyTutorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTutorInput | ReviewUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTutorInput | ReviewUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type AvailableTimeUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<AvailableTimeCreateWithoutTutorInput, AvailableTimeUncheckedCreateWithoutTutorInput> | AvailableTimeCreateWithoutTutorInput[] | AvailableTimeUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: AvailableTimeCreateOrConnectWithoutTutorInput | AvailableTimeCreateOrConnectWithoutTutorInput[]
    upsert?: AvailableTimeUpsertWithWhereUniqueWithoutTutorInput | AvailableTimeUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: AvailableTimeCreateManyTutorInputEnvelope
    set?: AvailableTimeWhereUniqueInput | AvailableTimeWhereUniqueInput[]
    disconnect?: AvailableTimeWhereUniqueInput | AvailableTimeWhereUniqueInput[]
    delete?: AvailableTimeWhereUniqueInput | AvailableTimeWhereUniqueInput[]
    connect?: AvailableTimeWhereUniqueInput | AvailableTimeWhereUniqueInput[]
    update?: AvailableTimeUpdateWithWhereUniqueWithoutTutorInput | AvailableTimeUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: AvailableTimeUpdateManyWithWhereWithoutTutorInput | AvailableTimeUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: AvailableTimeScalarWhereInput | AvailableTimeScalarWhereInput[]
  }

  export type TutorSubjectUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<TutorSubjectCreateWithoutTutorInput, TutorSubjectUncheckedCreateWithoutTutorInput> | TutorSubjectCreateWithoutTutorInput[] | TutorSubjectUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TutorSubjectCreateOrConnectWithoutTutorInput | TutorSubjectCreateOrConnectWithoutTutorInput[]
    upsert?: TutorSubjectUpsertWithWhereUniqueWithoutTutorInput | TutorSubjectUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: TutorSubjectCreateManyTutorInputEnvelope
    set?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    disconnect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    delete?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    connect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    update?: TutorSubjectUpdateWithWhereUniqueWithoutTutorInput | TutorSubjectUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: TutorSubjectUpdateManyWithWhereWithoutTutorInput | TutorSubjectUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: TutorSubjectScalarWhereInput | TutorSubjectScalarWhereInput[]
  }

  export type ExperienceUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<ExperienceCreateWithoutTutorInput, ExperienceUncheckedCreateWithoutTutorInput> | ExperienceCreateWithoutTutorInput[] | ExperienceUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutTutorInput | ExperienceCreateOrConnectWithoutTutorInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutTutorInput | ExperienceUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: ExperienceCreateManyTutorInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutTutorInput | ExperienceUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutTutorInput | ExperienceUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<ReviewCreateWithoutTutorInput, ReviewUncheckedCreateWithoutTutorInput> | ReviewCreateWithoutTutorInput[] | ReviewUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTutorInput | ReviewCreateOrConnectWithoutTutorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTutorInput | ReviewUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: ReviewCreateManyTutorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTutorInput | ReviewUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTutorInput | ReviewUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TutorProfileCreateNestedOneWithoutAvailableTimesInput = {
    create?: XOR<TutorProfileCreateWithoutAvailableTimesInput, TutorProfileUncheckedCreateWithoutAvailableTimesInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutAvailableTimesInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type TutorProfileUpdateOneRequiredWithoutAvailableTimesNestedInput = {
    create?: XOR<TutorProfileCreateWithoutAvailableTimesInput, TutorProfileUncheckedCreateWithoutAvailableTimesInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutAvailableTimesInput
    upsert?: TutorProfileUpsertWithoutAvailableTimesInput
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutAvailableTimesInput, TutorProfileUpdateWithoutAvailableTimesInput>, TutorProfileUncheckedUpdateWithoutAvailableTimesInput>
  }

  export type TutorProfileCreateNestedOneWithoutExperiencesInput = {
    create?: XOR<TutorProfileCreateWithoutExperiencesInput, TutorProfileUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutExperiencesInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type TutorProfileUpdateOneRequiredWithoutExperiencesNestedInput = {
    create?: XOR<TutorProfileCreateWithoutExperiencesInput, TutorProfileUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutExperiencesInput
    upsert?: TutorProfileUpsertWithoutExperiencesInput
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutExperiencesInput, TutorProfileUpdateWithoutExperiencesInput>, TutorProfileUncheckedUpdateWithoutExperiencesInput>
  }

  export type TutorProfileCreateNestedOneWithoutReviewsInput = {
    create?: XOR<TutorProfileCreateWithoutReviewsInput, TutorProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutReviewsInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type TutorProfileUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<TutorProfileCreateWithoutReviewsInput, TutorProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutReviewsInput
    upsert?: TutorProfileUpsertWithoutReviewsInput
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutReviewsInput, TutorProfileUpdateWithoutReviewsInput>, TutorProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type TutorSubjectCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TutorSubjectCreateWithoutCategoryInput, TutorSubjectUncheckedCreateWithoutCategoryInput> | TutorSubjectCreateWithoutCategoryInput[] | TutorSubjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TutorSubjectCreateOrConnectWithoutCategoryInput | TutorSubjectCreateOrConnectWithoutCategoryInput[]
    createMany?: TutorSubjectCreateManyCategoryInputEnvelope
    connect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
  }

  export type TutorSubjectUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TutorSubjectCreateWithoutCategoryInput, TutorSubjectUncheckedCreateWithoutCategoryInput> | TutorSubjectCreateWithoutCategoryInput[] | TutorSubjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TutorSubjectCreateOrConnectWithoutCategoryInput | TutorSubjectCreateOrConnectWithoutCategoryInput[]
    createMany?: TutorSubjectCreateManyCategoryInputEnvelope
    connect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
  }

  export type TutorSubjectUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TutorSubjectCreateWithoutCategoryInput, TutorSubjectUncheckedCreateWithoutCategoryInput> | TutorSubjectCreateWithoutCategoryInput[] | TutorSubjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TutorSubjectCreateOrConnectWithoutCategoryInput | TutorSubjectCreateOrConnectWithoutCategoryInput[]
    upsert?: TutorSubjectUpsertWithWhereUniqueWithoutCategoryInput | TutorSubjectUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TutorSubjectCreateManyCategoryInputEnvelope
    set?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    disconnect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    delete?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    connect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    update?: TutorSubjectUpdateWithWhereUniqueWithoutCategoryInput | TutorSubjectUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TutorSubjectUpdateManyWithWhereWithoutCategoryInput | TutorSubjectUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TutorSubjectScalarWhereInput | TutorSubjectScalarWhereInput[]
  }

  export type TutorSubjectUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TutorSubjectCreateWithoutCategoryInput, TutorSubjectUncheckedCreateWithoutCategoryInput> | TutorSubjectCreateWithoutCategoryInput[] | TutorSubjectUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TutorSubjectCreateOrConnectWithoutCategoryInput | TutorSubjectCreateOrConnectWithoutCategoryInput[]
    upsert?: TutorSubjectUpsertWithWhereUniqueWithoutCategoryInput | TutorSubjectUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TutorSubjectCreateManyCategoryInputEnvelope
    set?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    disconnect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    delete?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    connect?: TutorSubjectWhereUniqueInput | TutorSubjectWhereUniqueInput[]
    update?: TutorSubjectUpdateWithWhereUniqueWithoutCategoryInput | TutorSubjectUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TutorSubjectUpdateManyWithWhereWithoutCategoryInput | TutorSubjectUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TutorSubjectScalarWhereInput | TutorSubjectScalarWhereInput[]
  }

  export type TutorProfileCreateNestedOneWithoutTutorSubjectsInput = {
    create?: XOR<TutorProfileCreateWithoutTutorSubjectsInput, TutorProfileUncheckedCreateWithoutTutorSubjectsInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutTutorSubjectsInput
    connect?: TutorProfileWhereUniqueInput
  }

  export type SubjectCategoryCreateNestedOneWithoutTutorsInput = {
    create?: XOR<SubjectCategoryCreateWithoutTutorsInput, SubjectCategoryUncheckedCreateWithoutTutorsInput>
    connectOrCreate?: SubjectCategoryCreateOrConnectWithoutTutorsInput
    connect?: SubjectCategoryWhereUniqueInput
  }

  export type TutorProfileUpdateOneRequiredWithoutTutorSubjectsNestedInput = {
    create?: XOR<TutorProfileCreateWithoutTutorSubjectsInput, TutorProfileUncheckedCreateWithoutTutorSubjectsInput>
    connectOrCreate?: TutorProfileCreateOrConnectWithoutTutorSubjectsInput
    upsert?: TutorProfileUpsertWithoutTutorSubjectsInput
    connect?: TutorProfileWhereUniqueInput
    update?: XOR<XOR<TutorProfileUpdateToOneWithWhereWithoutTutorSubjectsInput, TutorProfileUpdateWithoutTutorSubjectsInput>, TutorProfileUncheckedUpdateWithoutTutorSubjectsInput>
  }

  export type SubjectCategoryUpdateOneRequiredWithoutTutorsNestedInput = {
    create?: XOR<SubjectCategoryCreateWithoutTutorsInput, SubjectCategoryUncheckedCreateWithoutTutorsInput>
    connectOrCreate?: SubjectCategoryCreateOrConnectWithoutTutorsInput
    upsert?: SubjectCategoryUpsertWithoutTutorsInput
    connect?: SubjectCategoryWhereUniqueInput
    update?: XOR<XOR<SubjectCategoryUpdateToOneWithWhereWithoutTutorsInput, SubjectCategoryUpdateWithoutTutorsInput>, SubjectCategoryUncheckedUpdateWithoutTutorsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TutorProfileCreateWithoutUserInput = {
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    description: string
    phoneNumber: string
    verifyed?: boolean
    availableTimes?: AvailableTimeCreateNestedManyWithoutTutorInput
    tutorSubjects?: TutorSubjectCreateNestedManyWithoutTutorInput
    experiences?: ExperienceCreateNestedManyWithoutTutorInput
    reviews?: ReviewCreateNestedManyWithoutTutorInput
  }

  export type TutorProfileUncheckedCreateWithoutUserInput = {
    id?: number
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    description: string
    phoneNumber: string
    verifyed?: boolean
    availableTimes?: AvailableTimeUncheckedCreateNestedManyWithoutTutorInput
    tutorSubjects?: TutorSubjectUncheckedCreateNestedManyWithoutTutorInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutTutorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorProfileCreateOrConnectWithoutUserInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateWithoutUserInput = {
    comment: string
    rating: number
    createdAt?: Date | string
    tutor: TutorProfileCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    comment: string
    rating: number
    tutorId: number
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TutorProfileUpsertWithoutUserInput = {
    update: XOR<TutorProfileUpdateWithoutUserInput, TutorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<TutorProfileCreateWithoutUserInput, TutorProfileUncheckedCreateWithoutUserInput>
    where?: TutorProfileWhereInput
  }

  export type TutorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: TutorProfileWhereInput
    data: XOR<TutorProfileUpdateWithoutUserInput, TutorProfileUncheckedUpdateWithoutUserInput>
  }

  export type TutorProfileUpdateWithoutUserInput = {
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    availableTimes?: AvailableTimeUpdateManyWithoutTutorNestedInput
    tutorSubjects?: TutorSubjectUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUpdateManyWithoutTutorNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    availableTimes?: AvailableTimeUncheckedUpdateManyWithoutTutorNestedInput
    tutorSubjects?: TutorSubjectUncheckedUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    tutorId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type UserCreateWithoutTutorProfileInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTutorProfileInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTutorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTutorProfileInput, UserUncheckedCreateWithoutTutorProfileInput>
  }

  export type AvailableTimeCreateWithoutTutorInput = {
    dayStart: string
    dayEnd: string
    timeStart: string
    timeEnd: string
  }

  export type AvailableTimeUncheckedCreateWithoutTutorInput = {
    id?: number
    dayStart: string
    dayEnd: string
    timeStart: string
    timeEnd: string
  }

  export type AvailableTimeCreateOrConnectWithoutTutorInput = {
    where: AvailableTimeWhereUniqueInput
    create: XOR<AvailableTimeCreateWithoutTutorInput, AvailableTimeUncheckedCreateWithoutTutorInput>
  }

  export type AvailableTimeCreateManyTutorInputEnvelope = {
    data: AvailableTimeCreateManyTutorInput | AvailableTimeCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type TutorSubjectCreateWithoutTutorInput = {
    category: SubjectCategoryCreateNestedOneWithoutTutorsInput
  }

  export type TutorSubjectUncheckedCreateWithoutTutorInput = {
    id?: number
    categoryId: number
  }

  export type TutorSubjectCreateOrConnectWithoutTutorInput = {
    where: TutorSubjectWhereUniqueInput
    create: XOR<TutorSubjectCreateWithoutTutorInput, TutorSubjectUncheckedCreateWithoutTutorInput>
  }

  export type TutorSubjectCreateManyTutorInputEnvelope = {
    data: TutorSubjectCreateManyTutorInput | TutorSubjectCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type ExperienceCreateWithoutTutorInput = {
    detail: string
  }

  export type ExperienceUncheckedCreateWithoutTutorInput = {
    id?: number
    detail: string
  }

  export type ExperienceCreateOrConnectWithoutTutorInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutTutorInput, ExperienceUncheckedCreateWithoutTutorInput>
  }

  export type ExperienceCreateManyTutorInputEnvelope = {
    data: ExperienceCreateManyTutorInput | ExperienceCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutTutorInput = {
    comment: string
    rating: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutTutorInput = {
    id?: number
    comment: string
    rating: number
    userId: number
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutTutorInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutTutorInput, ReviewUncheckedCreateWithoutTutorInput>
  }

  export type ReviewCreateManyTutorInputEnvelope = {
    data: ReviewCreateManyTutorInput | ReviewCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTutorProfileInput = {
    update: XOR<UserUpdateWithoutTutorProfileInput, UserUncheckedUpdateWithoutTutorProfileInput>
    create: XOR<UserCreateWithoutTutorProfileInput, UserUncheckedCreateWithoutTutorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTutorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTutorProfileInput, UserUncheckedUpdateWithoutTutorProfileInput>
  }

  export type UserUpdateWithoutTutorProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTutorProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AvailableTimeUpsertWithWhereUniqueWithoutTutorInput = {
    where: AvailableTimeWhereUniqueInput
    update: XOR<AvailableTimeUpdateWithoutTutorInput, AvailableTimeUncheckedUpdateWithoutTutorInput>
    create: XOR<AvailableTimeCreateWithoutTutorInput, AvailableTimeUncheckedCreateWithoutTutorInput>
  }

  export type AvailableTimeUpdateWithWhereUniqueWithoutTutorInput = {
    where: AvailableTimeWhereUniqueInput
    data: XOR<AvailableTimeUpdateWithoutTutorInput, AvailableTimeUncheckedUpdateWithoutTutorInput>
  }

  export type AvailableTimeUpdateManyWithWhereWithoutTutorInput = {
    where: AvailableTimeScalarWhereInput
    data: XOR<AvailableTimeUpdateManyMutationInput, AvailableTimeUncheckedUpdateManyWithoutTutorInput>
  }

  export type AvailableTimeScalarWhereInput = {
    AND?: AvailableTimeScalarWhereInput | AvailableTimeScalarWhereInput[]
    OR?: AvailableTimeScalarWhereInput[]
    NOT?: AvailableTimeScalarWhereInput | AvailableTimeScalarWhereInput[]
    id?: IntFilter<"AvailableTime"> | number
    dayStart?: StringFilter<"AvailableTime"> | string
    dayEnd?: StringFilter<"AvailableTime"> | string
    timeStart?: StringFilter<"AvailableTime"> | string
    timeEnd?: StringFilter<"AvailableTime"> | string
    tutorId?: IntFilter<"AvailableTime"> | number
  }

  export type TutorSubjectUpsertWithWhereUniqueWithoutTutorInput = {
    where: TutorSubjectWhereUniqueInput
    update: XOR<TutorSubjectUpdateWithoutTutorInput, TutorSubjectUncheckedUpdateWithoutTutorInput>
    create: XOR<TutorSubjectCreateWithoutTutorInput, TutorSubjectUncheckedCreateWithoutTutorInput>
  }

  export type TutorSubjectUpdateWithWhereUniqueWithoutTutorInput = {
    where: TutorSubjectWhereUniqueInput
    data: XOR<TutorSubjectUpdateWithoutTutorInput, TutorSubjectUncheckedUpdateWithoutTutorInput>
  }

  export type TutorSubjectUpdateManyWithWhereWithoutTutorInput = {
    where: TutorSubjectScalarWhereInput
    data: XOR<TutorSubjectUpdateManyMutationInput, TutorSubjectUncheckedUpdateManyWithoutTutorInput>
  }

  export type TutorSubjectScalarWhereInput = {
    AND?: TutorSubjectScalarWhereInput | TutorSubjectScalarWhereInput[]
    OR?: TutorSubjectScalarWhereInput[]
    NOT?: TutorSubjectScalarWhereInput | TutorSubjectScalarWhereInput[]
    id?: IntFilter<"TutorSubject"> | number
    tutorId?: IntFilter<"TutorSubject"> | number
    categoryId?: IntFilter<"TutorSubject"> | number
  }

  export type ExperienceUpsertWithWhereUniqueWithoutTutorInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutTutorInput, ExperienceUncheckedUpdateWithoutTutorInput>
    create: XOR<ExperienceCreateWithoutTutorInput, ExperienceUncheckedCreateWithoutTutorInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutTutorInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutTutorInput, ExperienceUncheckedUpdateWithoutTutorInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutTutorInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutTutorInput>
  }

  export type ExperienceScalarWhereInput = {
    AND?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    OR?: ExperienceScalarWhereInput[]
    NOT?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    id?: IntFilter<"Experience"> | number
    detail?: StringFilter<"Experience"> | string
    tutorId?: IntFilter<"Experience"> | number
  }

  export type ReviewUpsertWithWhereUniqueWithoutTutorInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutTutorInput, ReviewUncheckedUpdateWithoutTutorInput>
    create: XOR<ReviewCreateWithoutTutorInput, ReviewUncheckedCreateWithoutTutorInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutTutorInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutTutorInput, ReviewUncheckedUpdateWithoutTutorInput>
  }

  export type ReviewUpdateManyWithWhereWithoutTutorInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutTutorInput>
  }

  export type TutorProfileCreateWithoutAvailableTimesInput = {
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    description: string
    phoneNumber: string
    verifyed?: boolean
    user: UserCreateNestedOneWithoutTutorProfileInput
    tutorSubjects?: TutorSubjectCreateNestedManyWithoutTutorInput
    experiences?: ExperienceCreateNestedManyWithoutTutorInput
    reviews?: ReviewCreateNestedManyWithoutTutorInput
  }

  export type TutorProfileUncheckedCreateWithoutAvailableTimesInput = {
    id?: number
    userId: number
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    description: string
    phoneNumber: string
    verifyed?: boolean
    tutorSubjects?: TutorSubjectUncheckedCreateNestedManyWithoutTutorInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutTutorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorProfileCreateOrConnectWithoutAvailableTimesInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutAvailableTimesInput, TutorProfileUncheckedCreateWithoutAvailableTimesInput>
  }

  export type TutorProfileUpsertWithoutAvailableTimesInput = {
    update: XOR<TutorProfileUpdateWithoutAvailableTimesInput, TutorProfileUncheckedUpdateWithoutAvailableTimesInput>
    create: XOR<TutorProfileCreateWithoutAvailableTimesInput, TutorProfileUncheckedCreateWithoutAvailableTimesInput>
    where?: TutorProfileWhereInput
  }

  export type TutorProfileUpdateToOneWithWhereWithoutAvailableTimesInput = {
    where?: TutorProfileWhereInput
    data: XOR<TutorProfileUpdateWithoutAvailableTimesInput, TutorProfileUncheckedUpdateWithoutAvailableTimesInput>
  }

  export type TutorProfileUpdateWithoutAvailableTimesInput = {
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
    tutorSubjects?: TutorSubjectUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUpdateManyWithoutTutorNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutAvailableTimesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    tutorSubjects?: TutorSubjectUncheckedUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type TutorProfileCreateWithoutExperiencesInput = {
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    description: string
    phoneNumber: string
    verifyed?: boolean
    user: UserCreateNestedOneWithoutTutorProfileInput
    availableTimes?: AvailableTimeCreateNestedManyWithoutTutorInput
    tutorSubjects?: TutorSubjectCreateNestedManyWithoutTutorInput
    reviews?: ReviewCreateNestedManyWithoutTutorInput
  }

  export type TutorProfileUncheckedCreateWithoutExperiencesInput = {
    id?: number
    userId: number
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    description: string
    phoneNumber: string
    verifyed?: boolean
    availableTimes?: AvailableTimeUncheckedCreateNestedManyWithoutTutorInput
    tutorSubjects?: TutorSubjectUncheckedCreateNestedManyWithoutTutorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorProfileCreateOrConnectWithoutExperiencesInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutExperiencesInput, TutorProfileUncheckedCreateWithoutExperiencesInput>
  }

  export type TutorProfileUpsertWithoutExperiencesInput = {
    update: XOR<TutorProfileUpdateWithoutExperiencesInput, TutorProfileUncheckedUpdateWithoutExperiencesInput>
    create: XOR<TutorProfileCreateWithoutExperiencesInput, TutorProfileUncheckedCreateWithoutExperiencesInput>
    where?: TutorProfileWhereInput
  }

  export type TutorProfileUpdateToOneWithWhereWithoutExperiencesInput = {
    where?: TutorProfileWhereInput
    data: XOR<TutorProfileUpdateWithoutExperiencesInput, TutorProfileUncheckedUpdateWithoutExperiencesInput>
  }

  export type TutorProfileUpdateWithoutExperiencesInput = {
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
    availableTimes?: AvailableTimeUpdateManyWithoutTutorNestedInput
    tutorSubjects?: TutorSubjectUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUpdateManyWithoutTutorNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutExperiencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    availableTimes?: AvailableTimeUncheckedUpdateManyWithoutTutorNestedInput
    tutorSubjects?: TutorSubjectUncheckedUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type TutorProfileCreateWithoutReviewsInput = {
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    description: string
    phoneNumber: string
    verifyed?: boolean
    user: UserCreateNestedOneWithoutTutorProfileInput
    availableTimes?: AvailableTimeCreateNestedManyWithoutTutorInput
    tutorSubjects?: TutorSubjectCreateNestedManyWithoutTutorInput
    experiences?: ExperienceCreateNestedManyWithoutTutorInput
  }

  export type TutorProfileUncheckedCreateWithoutReviewsInput = {
    id?: number
    userId: number
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    description: string
    phoneNumber: string
    verifyed?: boolean
    availableTimes?: AvailableTimeUncheckedCreateNestedManyWithoutTutorInput
    tutorSubjects?: TutorSubjectUncheckedCreateNestedManyWithoutTutorInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorProfileCreateOrConnectWithoutReviewsInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutReviewsInput, TutorProfileUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tutorProfile?: TutorProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tutorProfile?: TutorProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type TutorProfileUpsertWithoutReviewsInput = {
    update: XOR<TutorProfileUpdateWithoutReviewsInput, TutorProfileUncheckedUpdateWithoutReviewsInput>
    create: XOR<TutorProfileCreateWithoutReviewsInput, TutorProfileUncheckedCreateWithoutReviewsInput>
    where?: TutorProfileWhereInput
  }

  export type TutorProfileUpdateToOneWithWhereWithoutReviewsInput = {
    where?: TutorProfileWhereInput
    data: XOR<TutorProfileUpdateWithoutReviewsInput, TutorProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type TutorProfileUpdateWithoutReviewsInput = {
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
    availableTimes?: AvailableTimeUpdateManyWithoutTutorNestedInput
    tutorSubjects?: TutorSubjectUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUpdateManyWithoutTutorNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    availableTimes?: AvailableTimeUncheckedUpdateManyWithoutTutorNestedInput
    tutorSubjects?: TutorSubjectUncheckedUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorProfile?: TutorProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutorProfile?: TutorProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TutorSubjectCreateWithoutCategoryInput = {
    tutor: TutorProfileCreateNestedOneWithoutTutorSubjectsInput
  }

  export type TutorSubjectUncheckedCreateWithoutCategoryInput = {
    id?: number
    tutorId: number
  }

  export type TutorSubjectCreateOrConnectWithoutCategoryInput = {
    where: TutorSubjectWhereUniqueInput
    create: XOR<TutorSubjectCreateWithoutCategoryInput, TutorSubjectUncheckedCreateWithoutCategoryInput>
  }

  export type TutorSubjectCreateManyCategoryInputEnvelope = {
    data: TutorSubjectCreateManyCategoryInput | TutorSubjectCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TutorSubjectUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TutorSubjectWhereUniqueInput
    update: XOR<TutorSubjectUpdateWithoutCategoryInput, TutorSubjectUncheckedUpdateWithoutCategoryInput>
    create: XOR<TutorSubjectCreateWithoutCategoryInput, TutorSubjectUncheckedCreateWithoutCategoryInput>
  }

  export type TutorSubjectUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TutorSubjectWhereUniqueInput
    data: XOR<TutorSubjectUpdateWithoutCategoryInput, TutorSubjectUncheckedUpdateWithoutCategoryInput>
  }

  export type TutorSubjectUpdateManyWithWhereWithoutCategoryInput = {
    where: TutorSubjectScalarWhereInput
    data: XOR<TutorSubjectUpdateManyMutationInput, TutorSubjectUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TutorProfileCreateWithoutTutorSubjectsInput = {
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    description: string
    phoneNumber: string
    verifyed?: boolean
    user: UserCreateNestedOneWithoutTutorProfileInput
    availableTimes?: AvailableTimeCreateNestedManyWithoutTutorInput
    experiences?: ExperienceCreateNestedManyWithoutTutorInput
    reviews?: ReviewCreateNestedManyWithoutTutorInput
  }

  export type TutorProfileUncheckedCreateWithoutTutorSubjectsInput = {
    id?: number
    userId: number
    tutorName: string
    province: string
    image: string
    pricePerHour: number
    description: string
    phoneNumber: string
    verifyed?: boolean
    availableTimes?: AvailableTimeUncheckedCreateNestedManyWithoutTutorInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutTutorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorProfileCreateOrConnectWithoutTutorSubjectsInput = {
    where: TutorProfileWhereUniqueInput
    create: XOR<TutorProfileCreateWithoutTutorSubjectsInput, TutorProfileUncheckedCreateWithoutTutorSubjectsInput>
  }

  export type SubjectCategoryCreateWithoutTutorsInput = {
    name: string
  }

  export type SubjectCategoryUncheckedCreateWithoutTutorsInput = {
    id?: number
    name: string
  }

  export type SubjectCategoryCreateOrConnectWithoutTutorsInput = {
    where: SubjectCategoryWhereUniqueInput
    create: XOR<SubjectCategoryCreateWithoutTutorsInput, SubjectCategoryUncheckedCreateWithoutTutorsInput>
  }

  export type TutorProfileUpsertWithoutTutorSubjectsInput = {
    update: XOR<TutorProfileUpdateWithoutTutorSubjectsInput, TutorProfileUncheckedUpdateWithoutTutorSubjectsInput>
    create: XOR<TutorProfileCreateWithoutTutorSubjectsInput, TutorProfileUncheckedCreateWithoutTutorSubjectsInput>
    where?: TutorProfileWhereInput
  }

  export type TutorProfileUpdateToOneWithWhereWithoutTutorSubjectsInput = {
    where?: TutorProfileWhereInput
    data: XOR<TutorProfileUpdateWithoutTutorSubjectsInput, TutorProfileUncheckedUpdateWithoutTutorSubjectsInput>
  }

  export type TutorProfileUpdateWithoutTutorSubjectsInput = {
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTutorProfileNestedInput
    availableTimes?: AvailableTimeUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUpdateManyWithoutTutorNestedInput
  }

  export type TutorProfileUncheckedUpdateWithoutTutorSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tutorName?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    pricePerHour?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    verifyed?: BoolFieldUpdateOperationsInput | boolean
    availableTimes?: AvailableTimeUncheckedUpdateManyWithoutTutorNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutTutorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type SubjectCategoryUpsertWithoutTutorsInput = {
    update: XOR<SubjectCategoryUpdateWithoutTutorsInput, SubjectCategoryUncheckedUpdateWithoutTutorsInput>
    create: XOR<SubjectCategoryCreateWithoutTutorsInput, SubjectCategoryUncheckedCreateWithoutTutorsInput>
    where?: SubjectCategoryWhereInput
  }

  export type SubjectCategoryUpdateToOneWithWhereWithoutTutorsInput = {
    where?: SubjectCategoryWhereInput
    data: XOR<SubjectCategoryUpdateWithoutTutorsInput, SubjectCategoryUncheckedUpdateWithoutTutorsInput>
  }

  export type SubjectCategoryUpdateWithoutTutorsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectCategoryUncheckedUpdateWithoutTutorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    comment: string
    rating: number
    tutorId: number
    createdAt?: Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tutor?: TutorProfileUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailableTimeCreateManyTutorInput = {
    id?: number
    dayStart: string
    dayEnd: string
    timeStart: string
    timeEnd: string
  }

  export type TutorSubjectCreateManyTutorInput = {
    id?: number
    categoryId: number
  }

  export type ExperienceCreateManyTutorInput = {
    id?: number
    detail: string
  }

  export type ReviewCreateManyTutorInput = {
    id?: number
    comment: string
    rating: number
    userId: number
    createdAt?: Date | string
  }

  export type AvailableTimeUpdateWithoutTutorInput = {
    dayStart?: StringFieldUpdateOperationsInput | string
    dayEnd?: StringFieldUpdateOperationsInput | string
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTimeUncheckedUpdateWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayStart?: StringFieldUpdateOperationsInput | string
    dayEnd?: StringFieldUpdateOperationsInput | string
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTimeUncheckedUpdateManyWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayStart?: StringFieldUpdateOperationsInput | string
    dayEnd?: StringFieldUpdateOperationsInput | string
    timeStart?: StringFieldUpdateOperationsInput | string
    timeEnd?: StringFieldUpdateOperationsInput | string
  }

  export type TutorSubjectUpdateWithoutTutorInput = {
    category?: SubjectCategoryUpdateOneRequiredWithoutTutorsNestedInput
  }

  export type TutorSubjectUncheckedUpdateWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type TutorSubjectUncheckedUpdateManyWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienceUpdateWithoutTutorInput = {
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateManyWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    detail?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutTutorInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TutorSubjectCreateManyCategoryInput = {
    id?: number
    tutorId: number
  }

  export type TutorSubjectUpdateWithoutCategoryInput = {
    tutor?: TutorProfileUpdateOneRequiredWithoutTutorSubjectsNestedInput
  }

  export type TutorSubjectUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
  }

  export type TutorSubjectUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    tutorId?: IntFieldUpdateOperationsInput | number
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